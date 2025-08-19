var app = require('app');
const MD5 = require("jsb_runtime_md5"); 
var HotUpdateMgr = app.BaseClass.extend({
    Init: function () {
        console.log('HotUpdateMgr Init - Start');
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hall_split');
        console.log('HotUpdateMgr Init - Storage path: ' + this._storagePath);

        // 确保存储目录存在
        if (!jsb.fileUtils.isDirectoryExist(this._storagePath)) {
            console.log('HotUpdateMgr Init - Creating directory: ' + this._storagePath);
            jsb.fileUtils.createDirectory(this._storagePath);
        } else {
            console.log('HotUpdateMgr Init - Directory exists, no cleanup performed');
        }

        this._updating = false;
        this._canRetry = false;
        this.restarting = false;
        this.LocalVersion = cc.sys.localStorage.getItem('LocalVersion') || '';
        console.log('HotUpdateMgr Init - LocalVersion: ' + this.LocalVersion);

        if (!cc.sys.isNative) {
            console.log("Not native, exiting hot update: " + cc.sys.isNative);
            return;
        }

        console.log('Storage path for remote asset: ' + this._storagePath);
        var UIRLFILE = "http://108.187.1.61:82/hall_split/remote-assets";
        if (cc.sys.localStorage.getItem('appName') === "jiangxi" || cc.sys.localStorage.getItem('appName') === "hubei") {
            UIRLFILE = "http://108.187.1.61:82/hall_split/remote-assets";
        }

        // 优先加载本地清单文件
        var manifestPath = this._storagePath + '/project.manifest';
        if (jsb.fileUtils.isFileExist(manifestPath)) {
            console.log('HotUpdateMgr Init - Loading existing manifest: ' + manifestPath);
            this._am = new jsb.AssetsManager(manifestPath, this._storagePath, this.versionCompareHandle.bind(this));
            this._am.loadLocalManifest(manifestPath);
            this.LocalVersion = this._am.getLocalManifest().getVersion();
            cc.sys.localStorage.setItem('LocalVersion', this.LocalVersion);
        } else {
            console.log('HotUpdateMgr Init - Creating new manifest');
            var customManifestStr = JSON.stringify({
                'packageUrl': UIRLFILE,
                'remoteManifestUrl': UIRLFILE + '/project.manifest',
                'remoteVersionUrl': UIRLFILE + '/version.manifest',
                'version': '1.0.11',
                'assets': {},
                'searchPaths': []
            });
            this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle.bind(this));
            var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
            this.LocalVersion = '1.0.11';
            cc.sys.localStorage.setItem('LocalVersion', this.LocalVersion);
        }

        this._am.setVerifyCallback(function (path, asset) {
            if (path.includes('res/import/99') || path.includes('res/import/39') || path.includes('button_orange.png')) {
                console.log("Skipping invalid path: " + path);
                return false;
            }
            var fileStr = jsb.fileUtils.getDataFromFile(path);
            var md5 = MD5(fileStr);
            console.log("Verify path: " + path + ", MD5: " + md5 + ", Expected: " + asset.md5);
            return md5 === asset.md5;
        });

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(2);
        }
    },

    versionCompareHandle: function (versionA, versionB) {
        console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
        var vA = versionA.split('.');
        var vB = versionB.split('.');
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) continue;
            return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
    },

    SaveManifest: function () {
        console.log("SaveManifest begin");
        let path_Manifest = "http://108.187.1.61:82/hall_split/remote-assets/project.manifest";
        if (cc.sys.localStorage.getItem('appName') === "jiangxi" || cc.sys.localStorage.getItem('appName') === "hubei") {
            path_Manifest = "http://108.187.1.61:82/hall_split/remote-assets/project.manifest";
        }
        let file = this._storagePath + '/project.manifest';
        let self = this;
        var downloader = new jsb.Downloader();
        downloader.setOnFileTaskSuccess(function () {
            console.log("downFile2Local: project.manifest downloaded successfully");
            let manifestContent = jsb.fileUtils.getStringFromFile(file);
            let manifestJson = JSON.parse(manifestContent);
            self.LocalVersion = manifestJson.version || self.LocalVersion;
            cc.sys.localStorage.setItem('LocalVersion', self.LocalVersion);
            console.log("Updated LocalVersion to: " + self.LocalVersion);
            self.RestartApp();
        });
        downloader.setOnTaskError(function () {
            console.log("downFile2Local: project.manifest download failed");
            app.SysNotifyManager().ShowSysMsg("下载Manifest失败，更新可能不完整...", [], 3);
            self.RestartApp();
        });
        downloader.createDownloadFileTask(path_Manifest, file);
    },

    getLocalVersion: function () {
        console.log("getLocalVersion: " + this.LocalVersion);
        if (this.LocalVersion === '' && this._am && !this._updating) {
            this.LocalVersion = this._am.getLocalManifest().getVersion();
            cc.sys.localStorage.setItem('LocalVersion', this.LocalVersion);
        }
        return this.LocalVersion;
    },

    HotUpdate: function () {
        if (this._am && !this._updating) {
            let updateCount = parseInt(cc.sys.localStorage.getItem('updateCount') || 0);
            if (updateCount >= 1) {
                console.log("Update limit reached, skipping update.");
                app.SysNotifyManager().ShowSysMsg("更新次数受限，请稍后再试...", [], 3);
                return;
            }
            this._am.setEventCallback(this.UpdateCb.bind(this));
            this.LocalVersion = this._am.getLocalManifest().getVersion();
            console.log("LocalVersion: " + this.LocalVersion);
            console.log("RemoteVersion: " + (this._am.getRemoteManifest() ? this._am.getRemoteManifest().getVersion() : "Not loaded"));
            this._failCount = 0;
            this._am.update();
            this._updating = true;
            cc.sys.localStorage.setItem('updateCount', updateCount + 1);
        }
    },

    CheckCb: function (event) {
        var code = event.getEventCode();
        console.log("CheckCb event code: " + code);
        switch (code) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("No local manifest, skipping update");
                app.SysNotifyManager().ShowSysMsg("找不到本地Manifest文件...", [], 3);
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("Failed to download/parse manifest, skipping update");
                app.SysNotifyManager().ShowSysMsg("下载或解析Manifest失败...", [], 3);
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("Already up to date");
                cc.sys.localStorage.setItem('updateCount', 0);
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log("New version found, preparing update");
                this.HotUpdate();
                break;
            default:
                console.log("CheckCb unknown event code: " + code);
                break;
        }
        this._am.setEventCallback(null);
        this._updating = false;
    },

    CheckUpdate: function () {
        if (this._updating) {
            console.log("Update in progress, cannot check...");
            app.SysNotifyManager().ShowSysMsg("正在更新，无法检测...", [], 3);
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            console.log("Hot update state error...");
            app.SysNotifyManager().ShowSysMsg("热更状态错误...", [], 3);
            var url = this._storagePath + '/project.manifest';
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            console.log("Failed to load local manifest...");
            app.SysNotifyManager().ShowSysMsg("加载本地Manifest失败...", [], 3);
            return;
        }
        this._am.setEventCallback(this.CheckCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
    },

    UpdateCb: function (event) {
        var failed = false;
        var needRestart = false;
        console.log("Subgame UpdateCb event: " + event.getEventCode());
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log("No local manifest file found");
                failed = true;
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log("Fail to download/parse manifest");
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("Already up to date");
                cc.sys.localStorage.setItem('updateCount', 0);
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log("Progress: " + event.getDownloadedBytes() + "/" + event.getTotalBytes());
                break;
            case jsb.EventAssetsManager.ASSET_UPDATED:
                console.log("Asset updated: " + event.getAssetId());
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log("Update finished");
                let remoteManifest = this._am.getRemoteManifest();
                if (!remoteManifest) {
                    console.error("Remote manifest is null, falling back to SaveManifest");
                    needRestart = true; // 直接调用 SaveManifest 下载清单
                } else {
                    let manifestPath = this._storagePath + '/project.manifest';
                    try {
                        let manifestContent = remoteManifest.getManifestFile();
                        if (manifestContent) {
                            jsb.fileUtils.writeFile(manifestPath, manifestContent);
                            console.log("Saved updated manifest to: " + manifestPath);
                            this.LocalVersion = remoteManifest.getVersion() || this.LocalVersion;
                            cc.sys.localStorage.setItem('LocalVersion', this.LocalVersion);
                            needRestart = true;
                        } else {
                            console.error("Manifest content is empty, falling back to SaveManifest");
                            needRestart = true;
                        }
                    } catch (e) {
                        console.error("Error saving manifest: " + e.message);
                        needRestart = true; // 出错时仍尝试下载清单
                    }
                }
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                console.log("Update failed, retrying...");
                this._am.downloadFailedAssets();
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                console.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                console.log("Decompress error: " + event.getMessage());
                break;
        }
        if (failed) {
            this._am.setEventCallback(null);
            this._updating = false;
        }
        if (needRestart) {
            this.SaveManifest();
        }
    },

    RestartApp: function () {
        console.log("RestartApp begin");
        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = this._am.getLocalManifest().getSearchPaths();
        Array.prototype.unshift.apply(searchPaths, newPaths);
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);
        if (!jsb.fileUtils.isFileExist(this._storagePath + '/project.manifest')) {
            console.error("Manifest file missing after update!");
            app.SysNotifyManager().ShowSysMsg("Manifest文件缺失，更新可能失败...", [], 3);
            return;
        }
        console.log("Restarting game with search paths: " + JSON.stringify(searchPaths));
        cc.game.restart();
    },

    Destroy: function () {
        this._am.setEventCallback(null);
        this._updating = false;
    }
});

var g_HotUpdateMgr = null;

exports.GetModel = function () {
    if (!g_HotUpdateMgr)
        g_HotUpdateMgr = new HotUpdateMgr();
    return g_HotUpdateMgr;
}