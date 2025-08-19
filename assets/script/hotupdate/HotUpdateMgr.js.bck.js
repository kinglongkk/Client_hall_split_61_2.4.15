var app = require('app');
const MD5 = require("jsb_runtime_md5"); 
var HotUpdateMgr = app.BaseClass.extend({
    // use this for initialization
    Init: function () {
        console.log('HotUpdateMgr Init - Start');
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hall_split');
        console.log('HotUpdateMgr Init - After initial assignment: ' + this._storagePath);
        if (jsb.fileUtils.isDirectoryExist(this._storagePath)) {
            console.log('HotUpdateMgr Init - Directory exists, removing: ' + this._storagePath);
            jsb.fileUtils.removeDirectory(this._storagePath);
            console.log("Cleared hall_split cache: " + this._storagePath);
        }
        console.log('HotUpdateMgr Init - Before setting flags: ' + this._storagePath);
        this._updating = false;
        this._canRetry = false;
        this.restarting = false;
        this.LocalVersion = '';
        console.log('HotUpdateMgr Init - After setting flags: ' + this._storagePath);

        // Hot update is only available in Native build
        if (!cc.sys.isNative) {
            console.log("cc.sys.inNavite exit,", cc.sys.isNative);
            return;
        }

        console.log('HotUpdateMgr Init - Before directory check (native): ' + this._storagePath);
        if (!jsb.fileUtils.isDirectoryExist(this._storagePath)) {
            console.log('HotUpdateMgr Init - Directory does not exist, creating: ' + this._storagePath);
            jsb.fileUtils.createDirectory(this._storagePath);
            console.log('HotUpdateMgr Init - Directory created: ' + this._storagePath);
        }
        console.log('Storage path for remote asset : ' + this._storagePath);
        /// 替换该地址
        var UIRLFILE = null;
        this.firstDown = false;
        if (this.isHallDownLoad() == true) {
            UIRLFILE = "http://108.187.1.61:82/hall_split_item/remote-assets";
        } else {
            //this.firstDown=true;
            UIRLFILE = "http://108.187.1.61:82/hall_split/remote-assets";
        }

        if(cc.sys.localStorage.getItem('appName')=="jiangxi"){
            //江西渠道包要独立域名
            UIRLFILE = "http://108.187.1.61:82/hall_split/remote-assets";
        }
        if(cc.sys.localStorage.getItem('appName')=="hubei"){
            //江西渠道包要独立域名
            UIRLFILE = "http://108.187.1.61:82/hall_split/remote-assets";
        }
        var customManifestStr = JSON.stringify({
            'packageUrl': UIRLFILE,
            'remoteManifestUrl': UIRLFILE + '/project.manifest',
            'remoteVersionUrl': UIRLFILE + '/version.manifest',
            'version': '1.0.11',
            'assets': {},
            'searchPaths': []
        });
        var versionCompareHandle = function (versionA, versionB) {
            cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        // Init with empty manifest url for testing custom manifest
        console.log('HotUpdateMgr Init - Before AssetsManager creation: _storagePath = ' + this._storagePath);
        this._am = new jsb.AssetsManager('', this._storagePath, versionCompareHandle);

        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path, asset) {
            if (path.includes('res/import/99') || path.includes('res/import/39') || path.includes('button_orange.png')) {
                console.log("Skipping invalid path: " + path);
                return false;
            }
            var fileStr = jsb.fileUtils.getDataFromFile(path);
            var md5 = MD5(fileStr);
            console.log("Verify path: " + path + ", MD5: " + md5 + ", Expected: " + asset.md5);
            return md5 == asset.md5;
        });
        // this._am.setVerifyCallback(function (path, asset) {
        //     var compressed = asset.compressed;
        //     var expectedMD5 = asset.md5;
        //     var relativePath = asset.path;
        //     var size = asset.size;
        //     if (compressed) {
        //         console.log("Verification passed compressed");
        //         return true;
        //     } else {
        //         console.log("setVerifyCallback path:"+path);
        //         var fileStr = jsb.fileUtils.getDataFromFile(path);
        //         var md5 = MD5(fileStr);
        //         if(md5 == asset.md5){
        //             return true;
        //         }else{
        //             console.log("setVerifyCallback md5:"+md5);
        //             console.log("setVerifyCallback expectedMD5:"+expectedMD5);
        //             return false;
        //         }
        //     }
        // });
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
        }
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(2);
        }
    },
    /**
     * 判断子游戏是否已经下载
     * @param {string} name - 游戏名
     */
    isHallDownLoad: function () {

        return false;

        let file = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hall_split/project.manifest';
        if (jsb.fileUtils.isFileExist(file)) {
            let jsonString = jsb.fileUtils.getStringFromFile(file);
            if (jsonString.indexOf("res.zip") > -1) {
                console.log("HotUpdateMgr isHallDownLoad Have res.zip,is not change project.manifest");
                return false;
            }
            console.log("HotUpdateMgr isHallDownLoad project.manifest exist");
            return true;
        } else {
            console.log("HotUpdateMgr isHallDownLoad project.manifest not exist");
            return false;
        }
    },
    SaveManifest: function () {
        console.log("SaveManifest begin");
        let path_Manifest = "http://108.187.1.61:82/hall_split/remote-assets/project_item.manifest";
        if(cc.sys.localStorage.getItem('appName')=="jiangxi"){
            //江西渠道包要独立域名
            path_Manifest = "http://108.187.1.61:82/hall_split/remote-assets/project_item.manifest";
        }
        if(cc.sys.localStorage.getItem('appName')=="hubei"){
            //江西渠道包要独立域名
            path_Manifest = "http://108.187.1.61:82/hall_split/remote-assets/project_item.manifest";
        }
        let file = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hall_split/project.manifest';
        this.downFile2Local(path_Manifest, file);
    },
    downFile2Local: function (url, fileName) {
        let self = this;
        var downloader = new jsb.Downloader();
        downloader.setOnFileTaskSuccess(function () {
            console.log("downFile2Local: project_item.manifest  is down success");
            self.RestartApp();
        });
        downloader.setOnTaskError(function () {
            console.log("downFile2Local: project_item.manifest  is down error");
            self.RestartApp();
        });
        downloader.createDownloadFileTask(url, fileName);//创建下载任务
    },

    //获取本地版本
    getLocalVersion: function () {
        console.log("getLocalVersion version:" + this.LocalVersion);
        if (this.LocalVersion == '' && this._am && !this._updating) {
            this.LocalVersion = this._am.getLocalManifest().getVersion();
        }
        return this.LocalVersion;
    },

    HotUpdate: function () {
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.UpdateCb.bind(this));
            this.LocalVersion = this._am.getLocalManifest().getVersion();
            console.log("LocalVersion === " + this.LocalVersion);
            this._failCount = 0;
            this._am.update();
            this._updating = true;
        }
    },
    CheckCb: function (event) {
        var code = event.getEventCode();
        cc.log("CheckCb >> event code:", code);
    
        switch (code) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("没有本地 manifest，跳过热更");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("下载/解析 manifest 失败，跳过热更");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log("已经是最新版本，无需更新");
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                cc.log("发现新版本，准备热更");
                // 你也可以在这里自动触发热更：
                // this.HotUpdate();
                break;
            default:
                cc.log("CheckCb >> 未知事件 code:", code);
                break;
        }
    
        // 结束检查更新流程
        this._am.setEventCallback(null);
        this._updating = false;
    },
    
    CheckUpdate: function () {
        if (this._updating) {
            console.log("正在更新，无法检测...");
            app.SysNotifyManager().ShowSysMsg("正在更新，无法检测...", [], 3);
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            // Resolve md5 url
            app.SysNotifyManager().ShowSysMsg("热更状态错误...", [], 3);
            var url = this.manifestUrl.nativeUrl;
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            console.log("加载本地Manifest失败...");
            app.SysNotifyManager().ShowSysMsg("加载本地Manifest失败...", [], 3);
            return;
        }
        // this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.CheckCb.bind(this));
        // cc.eventManager.addListener(this._checkListener, 1);
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
                needRestart = true;
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
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log("New version found, updating...");
                this._am.update();
                break;
        }
        if (failed) {
            this._am.setEventCallback(null);
        }
        if (needRestart) {
            this.RestartApp();
        }
    },
    RestartApp: function () {
        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = this._am.getLocalManifest().getSearchPaths();
        Array.prototype.unshift.apply(searchPaths, newPaths);
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);
        cc.game.restart();
    },


    Destroy: function () {
        this._am.setEventCallback(null);
    }
});

var g_HotUpdateMgr = null;

exports.GetModel = function () {
    if (!g_HotUpdateMgr)
        g_HotUpdateMgr = new HotUpdateMgr();
    return g_HotUpdateMgr;

}