var app = require("app");
var SubgameManager = require('SubgameManager');
cc.Class({
    extends: require("BaseForm"),
    properties: {
        resVersion:cc.Label,
        appVersion:cc.Label,
        lb_heroName:cc.Label,
        lb_heroID:cc.Label,
        node_head:cc.Node,
        gameLayout:cc.Node,
        rightTop:cc.Node,
        btn_GameDemo:cc.Node,
        // lb_curCity:cc.Label,  因为城市选择的按钮被隐藏了，显示会报错。
        btn_joinClub:cc.Node,
        logo: cc.Node,
        logoSprite: [cc.SpriteFrame],
    },
    OnCreateInit: function () {
        this.FormManager = app.FormManager();
        this.NetManager=app.NetManager();
        this.curType = {
            'mahjong':0,
            'poker':1,
            'other':2
        };
        this.selectCityConfig = app.SysDataManager().GetTableDict("selectCity");
        this.gametypeConfig = app.SysDataManager().GetTableDict("gametype");
        this.curGameType = this.curType.other;
        //this.node.getChildByName('left').getChildByName('layout').active=false;
        //this.RegEvent("CLOSEMOREPOP", this.CloseMorePop, this);
        this.RegEvent("GetCurRoomID", this.Event_GetCurRoomID, this);
        this.RegEvent("CodeError", this.Event_CodeError, this);
        this.RegEvent("OutRoom", this.Event_OutRoom, this);
        this.RegEvent("HeroProperty", this.Event_HeroProperty, this);
        this.RegEvent("OnGetClipboardTextNtf", this.Event_GetClipboardText, this);
        this.RegEvent("ShowGameListByLocation", this.Event_ShowGameListByLocation, this);
        this.NetManager.RegNetPack("SBase_Dissolve", this.OnPack_DissolveRoom, this); 
        if(this.IsIphoneX()==true){
            let widge=this.node.getChildByName('bottom').getChildByName('left').getComponent(cc.Widget);
            widge.left=80;
            let widge2=this.node.getChildByName('bottom').getChildByName('layout').getComponent(cc.Widget);
            widge2.left=123;
        }
        this.WeChatHeadImage1 = this.node_head.getComponent("WeChatHeadImage");
        if(!cc.sys.isNative){
            app.NativeManager().CallToNative("checkHaveLocationPermission",[]);
        }
        this.RegEvent("OnUpdateGameEnd", this.ReloadGameList, this);
        //检测用户是否是闲聊登录直接绑定
        let XlOpenID = app['XlOpenID'];
        if (XlOpenID) {
            app['XlOpenID']="";
            app.NetManager().SendPack("game.CPlayerXLUnionid",{"xlUnionid":XlOpenID});
        }
        //检测系统
        if(cc.sys.isNative){
            let isIos = app.ComTool().IsIOS();
            let isAndroid = app.ComTool().IsAndroid();
            if (isIos) {
                app.NetManager().SendPack("player.CPlayerAppOs",{"type":2});
            }else if (isAndroid) {
                app.NetManager().SendPack("player.CPlayerAppOs",{"type":1});
            }
        }
        if(app["tanchuang"]==1){
            
             //检测活动
            app.NetManager().SendPack("popup.CPopupList",{"type":1},function(event){
                if(event.length > 0){
                    app.FormManager().ShowForm("UIActivity",event);
                }
            }, function(){});
            /*app.NetManager().SendPack("game.CPlayerCheckPhone", {}, function(event){
                if (event == "0") {
                    app.FormManager().ShowForm("UIBangdingshouji");
                }
            }, function(error){
                console.error(error);
            });*/
            app["tanchuang"]=0;
        }
        //初始化备注
        this.ComTool.GetBeiZhu(true);
        //检查用户是否需要下载IOS上架包
        this.CheckIOSDown();
    },
    OnPack_DissolveRoom:function(serverPack){
        this.Event_OutRoom();
    },
    CheckIOSDown:function(){
        if(cc.sys.isNative){
            let isIos = app.ComTool().IsIOS();
           // isIos=true;
            if (isIos) {
                let pack=cc.sys.localStorage.getItem("myPack");
                let pack2=cc.sys.localStorage.getItem("myPack2");
             //   pack=null;
             //   pack2=null;
                if(pack!="hall_split" && pack2!="hall_split"){
                   //不是IOS上架包
                   let version=cc.sys.localStorage.getItem('version');
               //    version="1.1.1";
                   if(version){
                       if(version.indexOf(".10.")>-1){
                            //0.10.0，这种版本号给国搜使用
                            return;
                       }
                       let AccountActive = app.LocalDataManager().GetConfigProperty("Account", "AccountActive");
                       //AccountActive=2000;
                       if(AccountActive>1000){
                          //活跃度超过1000，没有下载上架包的用户下载上架包
                          this.IOSUrl="http://code.qicaiqh.com/mygame_ios.php?game=hall_split&pid="+app.HeroManager().GetHeroProperty("pid");
                          this.SendHttpRequest(this.IOSUrl,"", "GET",{});
                       }
                   }
                }
            }
        }
    },
   
    //-----------------显示函数------------------
    OnShow: function () {
        this.ChangeLogo();
        app.SceneManager().PlayMusic();
        let self = this;
        // app.ForceUpdateMgr().Check();
        this.scheduleOnce(function(){
            app.ForceUpdateMgr().Check();
            // self.ReloadGameList();
        },2); //延迟2秒再次检测是否更新
        this.ReloadHeroData();
        app.Client.SetGameType('');
        //请求亲友圈数据
        //app.ClubManager().SendReqClubData();
        app.ClubManager().SendGetClubInviteList();
        app.ClubManager().SendGetUnionInviteList();
        this.curRoomID = 0;
        this.curRoomKey = 0;
        this.curGameTypeStr = '';
        this.node.getChildByName('bottom').getChildByName('left').getChildByName('layout').active=false;
        app.GameManager().SetGetRoomIDByUI(true);
        //检测是否标记不用检测在房间
        let checkRoom=true;
        if(typeof(app["notCheckRoom"])!="undefined"){
            if(app["notCheckRoom"]==true){
                checkRoom=false;
                app["notCheckRoom"]=false;
            }
        }
        
        if(checkRoom==true){
            app.NetManager().SendPack("game.C1101GetRoomID", {});
        }
        //获取后台开关是否需要检测子游戏热更
        this.CheckHotUpdate="http://108.187.1.61/index.php?module=Api&action=OnlineStatus";
        this.SendHttpRequest(this.CheckHotUpdate,"", "GET",{});

        if(cc.sys.isNative){
            this.appVersion.string = '';
            this.resVersion.string = "appversion" + app.HotUpdateMgr().getLocalVersion();
        }else{
            this.appVersion.string = '';
            this.resVersion.string = '';
        }
        app.GameManager().SetAutoPlayIng(false);
        this.FormManager.CloseForm("UIAutoPlay");
        this.FormManager.ShowForm("UINoticeBar");
        this.allSelectCityData = app.HeroManager().GetCurSelectCityData();
        if (this.allSelectCityData.length == 0 ||  this.isFirstLogin()==true) {
            this.isShowCity=false;
            //this.CityUrl="https://down.qp355.com/index.php?module=Home&action=CityList";
            //this.SendHttpRequest(this.CityUrl,"", "GET",{});
            //this.FormManager.ShowForm("UISelectCity");
            this.scheduleOnce(function(){
                if(this.isShowCity==false){
                    this.FormManager.ShowForm("UISelectCity");
                }
            },4); //延迟4秒如果没成功定位城市，弹出定位城市UISelectCity

            // this.lb_curCity.string = "";
			
			// luoye  这里直接指定默认的城市，后续需要修改
			app.NetManager().SendPack("room.CBaseGameIdList", {"selectCityId":"1010203"}, function(event){
                            app.Client.allGameIdFormServer = event.split(",");
                            let curSelectGameList = app.Client.GetAllGameId();
                            let argDict = {
                                "gameList":curSelectGameList,
                            };
                            //记录用户选择的城市，城市节点使用
                            self.isShowCity=true;
                            cc.sys.localStorage.setItem("myCityID","1010203");
                            self.Event_ShowGameListByLocation(argDict);
                        }, function(event){
                            //console.log("获取游戏id失败");
                        });
        }else{
            //非常规切换可能导致配表丢失
            if (!this.selectCityConfig) {
                this.selectCityConfig = app.SysDataManager().GetTableDict("selectCity");
            }
            if (!this.selectCityConfig) {
                app.SysNotifyManager().ShowSysMsg('游戏配置丢失，请重启游戏');
            }else{
                let cityInfo = this.selectCityConfig[this.allSelectCityData[0]['selcetId']];
                console.log("curSelectID === " + this.allSelectCityData[0]['selcetId']);

                /*if(this.allSelectCityData[0]['selcetId']==1010203 || this.allSelectCityData[0]['selcetId']==1010203){
                    //南阳自动退出游戏
                    cc.game.end();
                }*/

                if (cityInfo) {
                    console.log("curSelectName === " + cityInfo.Name);
                   // this.lb_curCity.string = cityInfo.Name; 
                }
                else{
                    console.log("selectCityConfig == " + JSON.stringify(this.selectCityConfig));
                    console.log("配表中找不到该城市，检查配表。id："+this.allSelectCityData[0]['selcetId']);
                }
                let curSelectGameList = app.Client.GetAllGameId();
                console.log("curSelectGameList === " + JSON.stringify(curSelectGameList));
                let argDict = {
                    "gameList":curSelectGameList,
                };
                this.Event_ShowGameListByLocation(argDict);
            }
        }

        this.ShowHero_NameOrID();
        app.Client.SetFirstLogin();

        this.ShowFastCount();
        this.ShowRoomCard();
        this.ShowClubCard();

        //检测分享  
        var myDate = new Date();
        let date=myDate.getDate();
        let setDay=this.LocalDataManager.GetConfigProperty("SysSetting", "Date");
        // if(date!=setDay){
        //     this.FormManager.ShowForm('UITanChuang');
        //     this.LocalDataManager.SetConfigProperty("SysSetting", "Date",date);
        // }
        //更新活跃度
        // app.NetManager().SendPack("base.C1005PlayerInfo", {});
        let heroID = app.HeroManager().GetHeroProperty("pid");
        if (cc.sys.isNative) {
            this.ChouJiangUrl='http://108.187.1.61:88/index.php?module=Api&action=GetLuckGoods';
            this.WenJuanUrl="http://108.187.1.61:88/mu?module=Api&action=GetQuestionnaire&pid="+heroID;
            this.IpUrl='http://108.187.1.61:88/myip.php';
            this.KeFuUrl = "http://108.187.1.61:88/index.php?module=Api&action=Contact";
        }else{
            this.ChouJiangUrl='http://108.187.1.61:88/index.php?module=Api&action=GetLuckGoods';
            this.WenJuanUrl="http://108.187.1.61:88/mu?module=Api&action=GetQuestionnaire&pid="+heroID;
            this.IpUrl='http://108.187.1.61:88/myip.php';
            this.KeFuUrl = "http://108.187.1.61:88/index.php?module=Api&action=Contact";
        }
        this.SendHttpRequest(this.IpUrl, "?playerID="+heroID, "GET",{});
        this.SendHttpRequest(this.KeFuUrl, "","GET",{});
        this.SendHttpRequest(this.WenJuanUrl, "","GET",{});
        let that=this;
        app.NetManager().SendPack("family.CPlayerCheckFamilyOwner",{},function(success){
            that.node.getChildByName('bottom').getChildByName('left').getChildByName('layout').getChildByName('btn_zengsong').active=true;
        },function(error){
            that.node.getChildByName('bottom').getChildByName('left').getChildByName('layout').getChildByName('btn_zengsong').active=false;
        });
        app.LocationOnStartMgr().OnGetLocation();
        //this.RunRecordAction();
        //检测是否实名
        this.ShowAddClubSprite();  //处理亲友圈的打开逻辑
       // this.ShowShiMingOnce();  //检测是否要弹出实名
    },
    isFirstLogin:function(){
        let isFirstLogin = cc.sys.localStorage.getItem("isFirstLogin");
        if (isFirstLogin == null || typeof(isFirstLogin) == "undefined") {
            cc.sys.localStorage.setItem("isFirstLogin","1");
            return true;
        }else{
            return false;
        }

    },
    RunRecordAction:function(){
        console.log("RunRecordAction 111");
        // let allSwitchGameData = app.PlayerDataManager().GetSwitchGameData();
        let allSwitchGameData = [];
        let switchRecord = cc.sys.localStorage.getItem("switchRecord");
        console.log("RunRecordAction switchRecord:"+switchRecord);
        if (switchRecord != "") {
            console.log("RunRecordAction switchRecord parse");
            allSwitchGameData.push(JSON.parse(switchRecord));
        }
        console.log("RunRecordAction switchRecord allSwitchGameData length:"+allSwitchGameData.length);
        for (let i = 0; i < allSwitchGameData.length; i++) {
            if (!allSwitchGameData[i]) return;
            let action = allSwitchGameData[i].action;
            console.log("RunRecordAction switchRecord action:"+action);
            switch (action) {
                case 'OpenUIRecordAllResult':
                    app.FormManager().ShowForm("UIRecordAllResult", allSwitchGameData[i].roomId, allSwitchGameData[i].playerAll, allSwitchGameData[i].gameType,allSwitchGameData[i].unionId,allSwitchGameData[i].roomKey,allSwitchGameData[i].page);
                    break;
                default:
                    console.log('未知动作: ' + action);
                    break;
            }
        }
        app.PlayerDataManager().ClearSwitchGameData();
        cc.sys.localStorage.setItem("switchRecord", "");
    },
    RunSwitchGameAction:function(){
        let allSwitchGameData = [];
        let switchGameData = cc.sys.localStorage.getItem("switchGameData");
        if (switchGameData != "") {
            allSwitchGameData.push(JSON.parse(switchGameData));
            cc.sys.localStorage.setItem("switchGameData", "");
        }
        for (let i = 0; i < allSwitchGameData.length; i++) {
            if (!allSwitchGameData[i]) return;
            let action = allSwitchGameData[i].action;
            switch(action){
                case 'openClub':
                    this.OpenClub();
                    break;
                default:
                    console.log('未知动作: ' + action);
                    break;
            }
        }
        app.PlayerDataManager().ClearSwitchGameData();
    },

    ReloadGameList:function(){
        let curSelectGameList = app.Client.GetAllGameId();
        console.log("ReloadGameList GameList === " + JSON.stringify(curSelectGameList));
        let argDict = {
            "gameList":curSelectGameList,
        };
        this.Event_ShowGameListByLocation(argDict);
    },

    ReloadHeroData:function(){
        //请求刷新玩家数据
        console.log("请求刷新玩家数据");
        app.NetManager().SendPack("player.CPlayerChanged", {});
    },

    Event_ShowGameListByLocation:function(event){
        this.allSelectCityData = app.HeroManager().GetCurSelectCityData();
        if (this.allSelectCityData.length == 0) {
            //this.FormManager.ShowForm("UISelectCity");
            //this.lb_curCity.string = "";
		
        //luoye 这里默认选择一个城市
        let self = this;		
		app.NetManager().SendPack("room.CBaseGameIdList", {"selectCityId":"1010203"}, function(event){
                            app.Client.allGameIdFormServer = event.split(",");
                            let curSelectGameList = app.Client.GetAllGameId();
                            let argDict = {
                                "gameList":curSelectGameList,
                            };
                            //记录用户选择的城市，城市节点使用
                            self.isShowCity=true;
                            cc.sys.localStorage.setItem("myCityID","1010203");
                            self.Event_ShowGameListByLocation(argDict);
            				// this.lb_curCity.string = "漳州";
                        }, function(event){
                            //console.log("获取游戏id失败");
                        });	
        }else{
            let cityInfo = this.selectCityConfig[this.allSelectCityData[0]['selcetId']];
            if (!cityInfo) {
                this.FormManager.ShowForm("UISelectCity");
                // this.lb_curCity.string = "";
                return;
            }
            // this.lb_curCity.string = cityInfo.Name;
        }
        this.gameLayout.removeAllChildren();
        //this.DestroyAllChildren(this.gameLayout);
        let gameList = event.gameList;
        if (gameList.length == 0) {
            //重新获取
            app.Client.GetAllGameIdFromServer(true);
            return;
        }
        let appName=this.GetAppName();
        for (var i = 0; i < gameList.length; i++) {
            let gameName = app.ShareDefine().GametTypeID2PinYin[gameList[i]];
            let btn_game = cc.instantiate(this.btn_GameDemo);
            btn_game.name = "btn_" + gameName;
            if(cc.sys.isNative){
                if (SubgameManager.isSubgameDownLoad(gameName)) {
                    btn_game.getChildByName("loadingMask").active = false;
                    btn_game.getChildByName("lb_download").getComponent(cc.Label).string = "";
                    btn_game.getChildByName("img_xiazai").active = false;
                    //已下载，判断是否需要更新
                    SubgameManager.needUpdateSubgame(gameName, (success) => {
                        if (success) {
                            //子游戏需要更新;
                            btn_game.getChildByName("img_gengxin").active = true;
                        } else {
                            //子游戏不需要更新;
                            btn_game.getChildByName("img_gengxin").active = false;
                        }
                    }, () => {
                        console.log("子游戏更新失败");
                        btn_game.getChildByName("img_gengxin").active = false;
                    });
                }else{
                    btn_game.getChildByName("loadingMask").active = false;
                    // btn_game.getChildByName("lb_download").getComponent(cc.Label).string = "未下载";
                    btn_game.getChildByName("img_xiazai").active = true;
                    btn_game.getChildByName("img_gengxin").active = false;
                }
            }else{
                btn_game.getChildByName("loadingMask").active = false;
                // btn_game.getChildByName("lb_download").getComponent(cc.Label).string = "未下载";
            }
            if (!this.gametypeConfig[gameList[i]]) {
                console.log("未找到游戏id："+gameList[i]);
                continue;
            }
            let imgName = this.gametypeConfig[gameList[i]]["imgUrl"];
            if(appName=="baodao"){
                if(gameName=="nn" || gameName=="fqpls"){
                    //NN跟fqpls
                    imgName=imgName+"_baodao";
                }
            }
            let imagePath = "texture/newmain/allgame/" + imgName;
            //加载图片精灵
            cc.resources.load(imagePath, cc.SpriteFrame, function (error, spriteFrame) {
                if(error){
                    console.log("加载图片精灵失败  " + imagePath);
                    return
                }
                btn_game.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
            btn_game.active = true;
            this.gameLayout.addChild(btn_game);
        }
        this.ShowRoomCard();
        this.ShowClubCard();
    },

    Event_HeroProperty:function (event) {
        let argDict = event;
        if(argDict["Property"] == "gold"){
            this.ShowFastCount();
        }
        else if(argDict["Property"] == "roomCard"){
            this.ShowRoomCard();
        }else if(argDict["Property"] == "clubCard"){
            this.ShowClubCard();
        }else if(argDict["Property"] == "name"){
            this.lb_heroName.string =argDict["name"].substr(0.9);
        }else if(argDict["Property"]=="headimg"){
            let heroID = app.HeroManager().GetHeroProperty("pid");
            this.WeChatHeadImage1.ShowHeroHead(heroID);
        }
    },

    Event_GetClipboardText:function (event){
        if(0 == event.code)
            this.ShowSysMsg("已获取剪切板信息："+event.msg);
        else
            this.ShowSysMsg("剪切板没有东西");
    },
    ShowFastCount:function () {
        let gold = app.HeroManager().GetHeroProperty('gold');
        this.rightTop.getChildByName('ledou').getChildByName('label').getComponent(cc.Label).string=gold;
    },
    ShowRoomCard:function () {
        let heroRoomCard = app.HeroManager().GetHeroProperty("roomCard");
        this.rightTop.getChildByName('fangka').getChildByName('label').getComponent(cc.Label).string=heroRoomCard;
    },
    ShowClubCard:function () {
        let heroClubCard = app.HeroManager().GetHeroProperty("clubCard");
        this.rightTop.getChildByName('quanka').getChildByName('label').getComponent(cc.Label).string=heroClubCard;
    },
    ShowHero_NameOrID:function () {
        let i = 0;
        let isGetHeroData = false;
        while(i < 30 || !isGetHeroData){
            let heroName = app.HeroManager().GetHeroProperty("name");
            if (typeof(heroName) == "string") {
                let heroID = app.HeroManager().GetHeroProperty("pid");
                this.lb_heroName.string =  this.ComTool.GetBeiZhuName(heroID,heroName,9);
                this.lb_heroID.string = app.i18n.t("UIMain_PIDText",{"pid":this.ComTool.GetPid(heroID)});
                if(this.WeChatHeadImage1){
                    this.WeChatHeadImage1.ShowHeroHead(heroID);
                }
                isGetHeroData = true;
                break;
            }else{
                i++;
            }
        }
        //如果还是没取到玩家信息，重新登录
        if (!isGetHeroData) {
            this.LocalDataManager.SetConfigProperty("Account", "AccessTokenInfo", {});
            console.log("玩家信息获取失败，切换账号");
            app.Client.LogOutGame(1);
        }
    },

    ShowAddClubSprite:function () {
        let self=this;
        app.NetManager().SendPack("club.CGetClubListMin2",{},function(serverPack){
                if(serverPack.length==0){
                    self.btn_joinClub.getChildByName("qinyouquan").active=false;
                    self.btn_joinClub.getChildByName("lb_clubName").getComponent(cc.Label).string = "";
                    cc.sys.localStorage.setItem('last_club_data',"");
                }else{
                    app["haveClub"]=1;
                    app.ClubManager().AddClubMin2Data(serverPack);
                    let last_club_data = app.ClubManager().GetLastClubData();
                    if (last_club_data != null) {
                        let clubData=app.ClubManager().GetClubDataByClubID(last_club_data.club_data.id);
                        if(clubData==null){
                            app.ClubManager().SetLastClubData(serverPack[0].id,serverPack[0].clubsign,serverPack[0].name);

                            // app.ClubManager().SendReqClubDataById(serverPack[0].id,false);

                            self.btn_joinClub.getChildByName("qinyouquan").active=true;
                            self.btn_joinClub.getChildByName("lb_clubName").getComponent(cc.Label).string = serverPack[0].name;
                        }else{

                            // app.ClubManager().SendReqClubDataById(last_club_data.club_data.id,false);

                            self.btn_joinClub.getChildByName("qinyouquan").active=true;
                            self.btn_joinClub.getChildByName("lb_clubName").getComponent(cc.Label).string =clubData.name;
                        }
                    }else{
                        // app.ClubManager().SendReqClubDataById(serverPack[0].id,false);
                        app.ClubManager().SetLastClubData(serverPack[0].id,serverPack[0].clubsign,serverPack[0].name);
                        self.btn_joinClub.getChildByName("qinyouquan").active=true;
                        self.btn_joinClub.getChildByName("lb_clubName").getComponent(cc.Label).string = serverPack[0].name;
                    }
                    //self.RunSwitchGameAction();
                }
            }, function(){
                    self.btn_joinClub.getChildByName("qinyouquan").active=false;
                    self.btn_joinClub.getChildByName("lb_clubName").getComponent(cc.Label).string = "";
            });
    },
    
    SendHttpRequest:function(serverUrl, argString, requestType, sendPack){
        app.NetRequest().SendHttpRequest(serverUrl, argString, requestType, sendPack, 2000, 
            this.OnReceiveHttpPack.bind(this), 
            this.OnConnectHttpFail.bind(this),
            null,
            this.OnConnectHttpFail.bind(this),
        );
        
        // var url = [serverUrl, argString].join("")

        // var dataStr = JSON.stringify(sendPack);

        // //每次都实例化一个，否则会引起请求结束，实例被释放了
        // var httpRequest = new XMLHttpRequest();

        // httpRequest.timeout = 2000;


        // httpRequest.open(requestType, url, true);
        // //服务器json解码
        // httpRequest.setRequestHeader("Content-Type", "application/json");
        // var that = this;
        // httpRequest.onerror = function(){
        //     that.ErrLog("httpRequest.error:%s", url);
        //     that.OnConnectHttpFail(serverUrl, httpRequest.readyState, httpRequest.status);
        // };
        // httpRequest.ontimeout = function(){
            
        // };
        // httpRequest.onreadystatechange = function(){
        //     //执行成功
        //     if (httpRequest.status == 200){
        //         if(httpRequest.readyState == 4){
        //             that.OnReceiveHttpPack(serverUrl, httpRequest.responseText);
        //         }
        //     }
        //     else{
        //         that.OnConnectHttpFail(serverUrl, httpRequest.readyState, httpRequest.status);
        //         that.ErrLog("onreadystatechange(%s,%s)", httpRequest.readyState, httpRequest.status);
        //     }
        // };
        // httpRequest.send(dataStr);

    },
    OnReceiveHttpPack:function(serverUrl, httpResText){
        try{
            let serverPack = JSON.parse(httpResText);
            if(serverUrl==this.KeFuUrl){
                app['KeFuHao']=serverPack.data[0].contact;
            }else if(serverUrl==this.IpUrl){
                if(serverPack["IsSuccess"] == 1){
                    //发送ip给服务端
                    this.NetManager.SendPack("game.CPlayerIpAddress",{"ip":serverPack.myip,"Address":serverPack.Address,"Latitude":serverPack.Latitude,"Longitude":serverPack.Longitude});
                }
            }else if(serverUrl==this.ChouJiangUrl){
                this.choujiangSprs = [];
                for (let i = 0; i < serverPack.data.length; i++) {
                    this.CreateUrlSpriteFrame(serverPack.data[i].url,serverPack.data[i].id,serverPack.data);
                }
            }else if(serverUrl==this.IOSUrl){
                if(serverPack["IsSuccess"] == 1){
                    this.FormManager.ShowForm("UIMessageUpdate",serverPack.url);
                }
            }else if(serverUrl==this.WenJuanUrl){
                if(serverPack.code==200){
                    this.FormManager.ShowForm("UIWenJuan",serverPack.data);
                }
            }else if(serverUrl==this.CityUrl){
                if(serverPack.code==200){
                    let SelectId=serverPack.data[0].cityid;
                    if (SelectId == 0) {
                        return;
                    }
                    if (this.selectCityConfig[SelectId]["Type"] != 3) {
                        return;
                    }
                    let self = this;


                    app.NetManager().SendPack("room.CBaseGameIdList", {"selectCityId":SelectId}, function(event){
                            app.Client.allGameIdFormServer = event.split(",");
                            let curSelectGameList = app.Client.GetAllGameId();
                            let argDict = {
                                "gameList":curSelectGameList,
                            };
                            //记录用户选择的城市，城市节点使用
                            self.isShowCity=true;
                            cc.sys.localStorage.setItem("myCityID",self.SelectId);
                            self.Event_ShowGameListByLocation(argDict);
                        }, function(event){
                            //console.log("获取游戏id失败");
                        });

                }else{
                    this.isShowCity=true;
                    //this.FormManager.ShowForm("UISelectCity");
                }
            }else if(serverUrl==this.CheckHotUpdate){
                if(serverPack.code==300){
                    app['isNeedCheckHotUpdate'] = false;
                    console.log("后台设置无需检测更新:"+app['isNeedCheckHotUpdate']);
                }else{
                    app['isNeedCheckHotUpdate'] = true;
                }
            }
        }
        catch (error){
            
        }
    },
    OnConnectHttpFail:function(serverUrl, readyState, status){
        
    },

    //创建url贴图对象
    CreateUrlSpriteFrame:function(resServerUrl,id,data){
        let that = this;
        cc.assetManager.loadRemote({url:resServerUrl,type: 'png'},function (err, texture) {
                if(texture instanceof cc.Texture2D){
                    let spriteFrame = new cc.SpriteFrame(texture);
                    let tempObj = {"id":id,"spriteFrame":spriteFrame};
                    that.choujiangSprs.push(tempObj);
                    if (that.choujiangSprs.length == 12) {
                        that.FormManager.ShowForm("UIChouJiang",data,that.choujiangSprs);
                    }
                }
                else{
                    that.ErrLog("texture not Texture2D");
                }
        });

        // return app.ControlManager().CreateLoadPromiseByUrl(resServerUrl)
        //     .then(function(texture){
        //         if(texture instanceof cc.Texture2D){
        //             let spriteFrame = new cc.SpriteFrame(texture);
        //             let tempObj = {"id":id,"spriteFrame":spriteFrame};
        //             that.choujiangSprs.push(tempObj);
        //             if (that.choujiangSprs.length == 12) {
        //                 that.FormManager.ShowForm("UIChouJiang",data,that.choujiangSprs);
        //             }
        //         }
        //         else{
        //             that.ErrLog("texture not Texture2D");
        //             return null;
        //         }
        //     })
        //     .catch(function(error){
        //         that.ErrLog("CreateUrlSpriteFrame error:%s", error.stack);
        //         return null;
        //     })
    },
    Event_OutRoom:function(){
        this.curRoomID=0;
        this.curRoomKey=0;
        this.curGameTypeStr="";
    },
     Event_GetCurRoomID:function(event){
        let serverPack = event;
        this.curRoomID = serverPack.roomID;
        this.curRoomKey = serverPack.roomKey;
        console.log("Event_GetCurRoomID curRoomID === " + this.curRoomID);
        console.log("Event_GetCurRoomID curRoomKey === " + this.curRoomKey);
        if(0 != this.curRoomID){
            this.curGameTypeStr = serverPack.gameType.toLowerCase();
            
            console.log("Event_GetCurRoomID curGameTypeStr === " + this.curGameTypeStr);
            let checkRoom=true;
            let isOutRoom = cc.sys.localStorage.getItem("isOutRoom");
            console.log("Event_GetCurRoomID isOutRoom:"+isOutRoom);
            if (isOutRoom == null || typeof(isOutRoom) == "undefined") {
                cc.sys.localStorage.setItem("isOutRoom",'1');
            }else{
                if(isOutRoom=='0'){
                    checkRoom=false;
                    cc.sys.localStorage.setItem("isOutRoom",'1');
                }
            }
            if(checkRoom==true){
                let curGameType = this.ShareDefine.GametTypeNameDict[this.curGameTypeStr.toUpperCase()];
                this.SetWaitForConfirm('MSG_GO_ROOM',this.ShareDefine.Confirm,[this.ShareDefine.GametTypeID2Name[curGameType]]);
            }
        }
    },
    Event_CodeError:function(event){
        let codeInfo = event;
        if(codeInfo["Code"] == this.ShareDefine.NotFind_Room){
            app.SysNotifyManager().ShowSysMsg('DissolveRoom');
            this.curRoomID = 0;
            this.curRoomKey = 0;
            this.curGameTypeStr = '';
        }else if(codeInfo["Code"] == 1502){
            app.SysNotifyManager().ShowSysMsg('抽奖活动暂未开启');
        }
    },
    OnClose:function(){
    },
    //---------点击函数---------------------
    InitGameBtnList:function(serverPack){
        this.FormManager.ShowForm("UICreatRoom",serverPack,this.gameName);
    },
    OpenClub:function(){
        app.ClubManager().ShowClubFrom();
    },
    OnClick:function(btnName, btnNode){
        if('btn_club' == btnName){
            let self = this;
            app.NetManager().SendPack("club.CGetClubListMin",{},function(serverPack){
                if(serverPack.length==0){
                    self.FormManager.ShowForm("ui/club/UIClubNone");
                }else{
                    app.ClubManager().AddClubMin2Data(serverPack);
                    self.FormManager.ShowForm("ui/club/UIClubList",serverPack);
                }
            }, function(){

            });
            return;
        }
        else if('btn_joinClub' == btnName){
                let self = this;
                app.NetManager().SendPack("club.CGetClubListMin2",{},function(serverPack){
                    if(serverPack.length==0){
                        self.FormManager.ShowForm("ui/club/UIClubNone");
                    }else{
                        app.ClubManager().AddClubMin2Data(serverPack);
                        app.ClubManager().ShowClubFrom();
                    }
                }, function(){

                });
        }
        else if('btn_join' == btnName){
            if(0 != this.curRoomID){
                let curGameType = this.ShareDefine.GametTypeNameDict[this.curGameTypeStr.toUpperCase()];
                this.SetWaitForConfirm('MSG_GO_ROOM',this.ShareDefine.Confirm,[this.ShareDefine.GametTypeID2Name[curGameType]]);
                return;
            }
            this.FormManager.ShowForm("UIJoin");
            return;
        }
        else if('btn_create' == btnName){
            if(0 != this.curRoomID){
                let curGameType = this.ShareDefine.GametTypeNameDict[this.curGameTypeStr.toUpperCase()];
                this.SetWaitForConfirm('MSG_GO_ROOM',this.ShareDefine.Confirm,[this.ShareDefine.GametTypeID2Name[curGameType]]);
                return;
            }
            this.FormManager.ShowForm("UIMoreGame");
        }
        else if ('btn_lxc' == btnName) {
            if(0 != this.curRoomID){
                let curGameType = this.ShareDefine.GametTypeNameDict[this.curGameTypeStr.toUpperCase()];
                this.SetWaitForConfirm('MSG_GO_ROOM',this.ShareDefine.Confirm,[this.ShareDefine.GametTypeID2Name[curGameType]]);
                return;
            }
            this.gameName='wzmj';
            this.FormManager.ShowForm("UIPractice");
        }
        else if('btn_head' == btnName){
            this.FormManager.ShowForm("UIUserInfo");
        }else if('btn_more' == btnName){
            this.node.getChildByName('bottom').getChildByName('left').getChildByName('layout').active=!this.node.getChildByName('bottom').getChildByName('left').getChildByName('layout').active;
        }else if('btn_jubao' == btnName){
             cc.sys.openURL("http://qh.qinghuaimajiang.com/index.php?module=Report&action=Index&playerID="+app.HeroManager().GetHeroID());
        }else if('btn_shop' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIBangDingTuiGuang");

            this.FormManager.ShowForm("UIStore");
        }else if('btn_record' == btnName){
            this.FormManager.ShowForm("UIRecordAll");
        }else if('btn_bangdingtuiguang' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");

           this.FormManager.ShowForm("UIBangDingTuiGuang");
        }else if('btn_share' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");
            this.FormManager.CloseForm("UIBangDingTuiGuang");

            this.FormManager.ShowForm('UIShare');
            // if (cc.sys.isNative) {
            //     app.NativeManager().CallToNative("getClipboardText",[]);
            // }
        }else if('btn_qiandao' == btnName){
            this.FormManager.ShowForm("UISign");
        }else if('btn_set' == btnName){
            this.FormManager.ShowForm("UISetting01");
        }else if('btn_daili' == btnName){
            this.FormManager.ShowForm("UIDaiLiCopy");
        }else if('btn_fanxian'==btnName){
            app.FormManager().ShowForm('UITask');
        }else if('btn_service' == btnName){
            cc.sys.openURL("https://www.baidu.com");
        }
        else if('btn_shiming' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");
            this.FormManager.CloseForm("UIBangDingTuiGuang");

            this.FormManager.ShowForm("UIShiMing");
        }else if('btn_wanfa' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");
            this.FormManager.CloseForm("UIBangDingTuiGuang");
            this.FormManager.ShowForm("UIGameHelp",'xymj');
        }
        else if('btn_advice' == btnName){
            //btn_advice
            let myCityID = cc.sys.localStorage.getItem("myCityID");
            let signString=app.HeroManager().GetHeroID()+myCityID.toString()+"wanzi"+app.ComTool().GetNowDateDayStr2();
            let sign = app.MD5.hex_md5(signString);
            cc.sys.openURL("http://fb.qinghuaimajiang.com/feedback/"+app.HeroManager().GetHeroID()+"/"+myCityID+"/?key="+sign);
        }
        else if('btn_paihang' == btnName){
            this.FormManager.ShowForm('UIPaiHang');
        }else if('btn_addGold' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.ShowForm("UIStore",'btn_table0');
        }
        else if('btn_addRoomCard' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIBangDingTuiGuang");
            this.FormManager.ShowForm("UIStore",'btn_table1');
        }else if('btn_addQuanCard' == btnName){
            console.log("亲友圈未做，此功能暂时关闭")
            // this.FormManager.ShowForm('ui/club/UIClubStore');
        }else if('btn_shezhi' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");
            this.FormManager.CloseForm("UIBangDingTuiGuang");

            this.FormManager.ShowForm("UISetting01");
        }else if('btn_shiming' == btnName){
            this.FormManager.CloseForm("UIRecordAll");
            this.FormManager.CloseForm("UIStore");
            this.FormManager.CloseForm("UIBangDingTuiGuang");

            this.FormManager.ShowForm("UIShiMing");
        }else if ('btn_LoginOut' == btnName) {
            this.Click_Btn_QieHuan();
        }else if ('btn_location' == btnName) {
            this.FormManager.ShowForm("UISelectCity");
        }else if ('btn_shouji' == btnName) {
            this.FormManager.ShowForm("UIBangdingshouji");
        }else if ('btn_zengsong' == btnName) {
            this.FormManager.ShowForm("UIZengSong");
        }else if ('btn_huodong' == btnName) {
             //检测活动
            app.NetManager().SendPack("popup.CPopupList",{"type":1},function(event){
                if(event.length > 0){
                    app.FormManager().ShowForm("UIActivity",event);
                }
            }, function(){});
        }
        else if ('btn_choujiang' == btnName) {
            let self = this;
            app.NetManager().SendPack("luckdraw.CLuckDrawCheck",{},function(success){
                self.SendHttpRequest(self.ChouJiangUrl, "","GET",{});
            },function(error){
                // self.ShowSysMsg("抽奖活动暂未开启");
            });
        }
        else if('btn_uploadImg_test' == btnName){
            let uploadImgURL = app.Client.GetClientConfigProperty("uploadImgURL");
            let argList = [{"Name":"uploadImgURL", "Value":uploadImgURL}];
            app.NativeManager().CallToNative("openPhotoAlbum", argList);//上传头像
        }
        else if(btnName.startsWith("btn_")){
            this.gameName = btnName.replace('btn_','');
            if(0 != this.curRoomID){//&& this.gameName != this.curGameTypeStr
                let curGameType = this.ShareDefine.GametTypeNameDict[this.curGameTypeStr.toUpperCase()];
                this.SetWaitForConfirm('MSG_GO_ROOM',this.ShareDefine.Confirm,[this.ShareDefine.GametTypeID2Name[curGameType]]);
                return;
            }
            console.log("当前时间01:"+ (new Date().getTime()));
            this.FormManager.ShowForm("UICreatRoom",{"gameList":app.Client.GetAllGameId()},this.gameName);
            console.log("当前时间01:"+ (new Date().getTime())+"完成");
        }
        else if(btnName == "logo"){
            // let count = parseInt(this.node.getChildByName("editbox").getComponent(cc.EditBox).string) || 1;
            // for (let idx = 0; idx < count; idx++) {
            //     app.LocationOnStartMgr().OnGetLocation();
            // }
        }
        else{
                            console.error("OnClick(%s) not find",btnName);
        }
        
    },
    CloseMorePop:function(){
    //    this.node_more.active=false;
    },
    Click_btn_goRoom:function(){
        app.Client.SetGameType(this.curGameTypeStr);
        this.FormManager.ShowForm("UIDownLoadGame", this.curGameTypeStr,this.curRoomKey,null,0,0,true);
        // let event = {};
        // event = {};
        // event.roomID = this.curRoomID;
        // app.Client.OnEvent_LoginGetCurRoomID(event);
    },
    Click_Btn_QieHuan:function () {
        this.SetWaitForConfirm('UIMoreQieHuanZhangHao',this.ShareDefine.ConfirmDIY,[],[], "确定要切换账号吗？", "切换账号","退出游戏");
    },
    SetWaitForConfirm:function(msgID,type,msgArg=[],cbArg=[],content = "", lbSure ="", lbCancle=""){
        let ConfirmManager = app.ConfirmManager();
        ConfirmManager.SetWaitForConfirmForm(this.OnConFirm.bind(this), msgID, cbArg);
        ConfirmManager.ShowConfirm(type, msgID, msgArg,content,lbSure,lbCancle);
    },
    /**
     * 2次确认点击回调
     * @param curEventType
     * @param curArgList
     */
    OnConFirm:function(clickType, msgID, backArgList){

        if(clickType != "Sure"){
            if(msgID == "UIMoreQieHuanZhangHao"){
                cc.game.end();
            }
            return
        }
        if(msgID == "UIMoreQieHuanZhangHao"){
            this.LocalDataManager.SetConfigProperty("Account", "AccessTokenInfo", {});
            this.LocalDataManager.SetConfigProperty("Account", "AccountMobile",{});
            console.log("切换账号");
            app.Client.LogOutGame(1);
        }else if('MSG_GO_ROOM' == msgID){
            this.Click_btn_goRoom();
        }
        else if("MSG_EXIT_GAME"){
            cc.game.end();
        }
        else if('MSG_CLUB_RoomCard_Not_Enough' == msgID){
            let clubId = backArgList[0];
            for(let i=0;i<this.clubCardNtfs.length;i++){
                if(this.clubCardNtfs[i].clubId == clubId){
                    this.clubCardNtfs.splice(i,1);
                    break;
                }
            }
            if(0 != this.clubCardNtfs.length){
                let data = this.clubCardNtfs[0];
                setTimeout(function(){
                    app.SysNotifyManager().ShowSysMsg('MSG_CLUB_RoomCard_Not_Enough',[data.clubName,data.roomcardattention]);
                },200);
            }
        }
    },
});