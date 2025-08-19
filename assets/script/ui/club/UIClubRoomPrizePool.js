/*
    UIMessage 模态消息界面
*/

var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    //初始化
    OnCreateInit:function(){

    },

    //---------显示函数--------------------

    OnShow:function(clubId){
        this.clubId = clubId;
        this.curPage = 1;
        this.lastPage = 1;
        this.curType = 0;
        this.queryStr = "";
        this.clickBtnName = "";
        this.InitTopLb();
        let btn_default = this.node.getChildByName("topBtnNode").getChildByName("btn_day1");
        this.OnClick(btn_default.name,btn_default);
    },

    InitTopLb:function(){
        let tab=this.node.getChildByName("topBtnNode");
        for(let i=0;i<tab.children.length;i++){
            if(i<=2){
                continue; //今天，昨天，前天
            }
            let lb=this.getDay(i);
            tab.children[i].getChildByName("lb_on").getComponent(cc.Label).string=lb;
            tab.children[i].getChildByName("lb_off").getComponent(cc.Label).string=lb;
        }
    },
    getDay:function(day){
        var today = new Date();
        var targetday_milliseconds=today.getTime() - 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tMonth+"月"+tDate+"日";
    },
    doHandleMonth:function(month){
        return month;
    },
    ClickTopBtn:function(clickName){
        let topBtnNode = this.node.getChildByName("topBtnNode");
        let allTopBtn = [];
        for (let i = 0; i < topBtnNode.children.length; i++) {
            allTopBtn.push(topBtnNode.children[i]);
        }
        this.clickBtnName = clickName;
        for (let i = 0; i < allTopBtn.length; i++) {
            if (allTopBtn[i].name == clickName) {
                allTopBtn[i].getChildByName("img_off").active = false;
                allTopBtn[i].getChildByName("lb_off").active = false;
                allTopBtn[i].getChildByName("img_on").active = true;
                allTopBtn[i].getChildByName("lb_on").active = true;
            }else{
                allTopBtn[i].getChildByName("img_off").active = true;
                allTopBtn[i].getChildByName("lb_off").active = true;
                allTopBtn[i].getChildByName("img_on").active = false;
                allTopBtn[i].getChildByName("lb_on").active = false;
            }
        }
    },
    GetNextPage:function(){
        this.curPage++;
        this.GetDataList(false);
    },
    GetDataList:function(isRefresh=false){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pageNum = this.curPage;
        sendPack.type = this.curType;
        sendPack.query = this.queryStr;
        let self = this;
        app.NetManager().SendPack("Club.CClubRoomConfigPrizePoolList",sendPack, function(serverPack){
            if (serverPack.length > 0) {
                self.UpdateScrollView(serverPack,isRefresh);
                //刷新页数
                let lb_page = self.node.getChildByName("page").getChildByName("lb_page");
                lb_page.getComponent(cc.Label).string = self.curPage;
            }else{
                self.curPage = self.lastPage;
            }
        }, function(){
            app.SysNotifyManager().ShowSysMsg("获取列表失败",[],3);
        });
        if (isRefresh) {
            sendPack.clubId = this.clubId;
            sendPack.type = this.curType;
            sendPack.query = this.queryStr;
            app.NetManager().SendPack("Club.CClubRoomConfigPrizePoolCount",sendPack, function(serverPack){
                self.node.getChildByName("lb_jushu").getComponent(cc.Label).string = "总局数:"+serverPack.setCount;
                self.node.getChildByName("lb_kaifang").getComponent(cc.Label).string = "总开房数:"+serverPack.roomSize;
                self.node.getChildByName("lb_xiaohao").getComponent(cc.Label).string = "总消耗钻石:"+serverPack.consumeValue;
            }, function(){
                app.SysNotifyManager().ShowSysMsg("获取消息失败",[],3);
            });
        }
    },
    UpdateScrollView:function(serverPack, isRefresh){
        let managementScrollView = this.node.getChildByName("managementScrollView");
        let content = managementScrollView.getChildByName("view").getChildByName("content");
        if (isRefresh) {
            managementScrollView.getComponent(cc.ScrollView).scrollToTop();
            content.removeAllChildren();
        }
        let demo = this.node.getChildByName("demo");
        demo.active = false;
        for (let i = 0; i < serverPack.length; i++) {
            let child = cc.instantiate(demo);
            if (i%2 == 0) {
                child.getChildByName("img_tiaowen01").active = true;
            }else{
                child.getChildByName("img_tiaowen01").active = false;
            }
            let cfgObj = JSON.parse(serverPack[i].dataJsonCfg);
            let gameType = app.ShareDefine().GametTypeID2PinYin[serverPack[i].gameId];
            let wanfa=app.RoomCfgManager().WanFa(gameType,cfgObj);
            child.wanfa = wanfa;
            wanfa += "  比赛分设置："+this.GetUnionCfg(cfgObj);
            child.unionCfg = this.GetUnionCfg(cfgObj);
            if(wanfa.length > 20){
                wanfa = wanfa.substring(0,20) + '...';
            }


            child.getChildByName("bg_key").getChildByName("key").getComponent(cc.Label).string = serverPack[i].tagId;
            child.getChildByName("lb_roomName").getComponent(cc.Label).string = serverPack[i].roomName;
            child.getChildByName("lb_roomCfg").getComponent(cc.Label).string = wanfa;
            child.getChildByName("lb_duiju").getComponent(cc.Label).string = serverPack[i].setCount;
            child.getChildByName("lb_kaifang").getComponent(cc.Label).string = serverPack[i].roomSize;
            child.getChildByName("lb_cost").getComponent(cc.Label).string = serverPack[i].consumeValue;
            child.getChildByName("lb_prizePool").getComponent(cc.Label).string = serverPack[i].prizePool;
            
            child.configId = serverPack[i].configId;
            child.active = true;
            content.addChild(child);
        }
    },
    GetUnionCfg:function(cfgObj){
        let PLDecStr = "";
        PLDecStr += "房间比赛分门槛："+cfgObj.roomSportsThreshold;
        PLDecStr += "，比赛分倍数："+cfgObj.sportsDouble;
        if (typeof(cfgObj.prizePool) == "undefined") {
            cfgObj.prizePool = 0;
        }
        PLDecStr += "，赛事成本："+cfgObj.prizePool;
        PLDecStr += "，房间比赛分消耗：";
        if (cfgObj.roomSportsType == 0) {
            if (typeof(cfgObj.bigWinnerConsumeList) == "undefined" || cfgObj.bigWinnerConsumeList.length <= 0) {
                PLDecStr += "大赢家赢比赛分>="+cfgObj.geWinnerPoint+"时，消耗"+cfgObj.roomSportsBigWinnerConsume;
            }else{
                for (let i = 0; i < cfgObj.bigWinnerConsumeList.length; i++) {
                    PLDecStr += "大赢家赢比赛分>"+cfgObj.bigWinnerConsumeList[i].winScore+"时，消耗比赛分"+cfgObj.bigWinnerConsumeList[i].sportsPoint;
                    if (i < (cfgObj.bigWinnerConsumeList.length - 1)) {
                        PLDecStr += "，";
                    }
                }
            }
        }else{
            PLDecStr += "每人付"+cfgObj.roomSportsEveryoneConsume;
        }
        PLDecStr += "，比赛分低于"+cfgObj.autoDismiss+"自动解散";
        return PLDecStr;
    },
    //---------点击函数---------------------
	OnClick:function(btnName, btnNode){
		if('btn_close'==btnName){
        	this.CloseForm();
        }else if(btnName.startsWith("btn_day")){
            this.curType = parseInt(btnName.replace("btn_day",'')) - 1;
            this.curPage = 1;
            this.ClickTopBtn(btnName);
            let managementScrollView = this.node.getChildByName("managementScrollView");
            let content = managementScrollView.getChildByName("view").getChildByName("content");
            managementScrollView.getComponent(cc.ScrollView).scrollToTop();
            content.removeAllChildren();
            this.GetDataList(true);
        }else if('btn_next'==btnName){
            this.lastPage = this.curPage;
            this.curPage++;
            this.GetDataList(true);
        }
        else if('btn_last'==btnName){
            if(this.curPage<=1){
                return;
            }
            this.lastPage = this.curPage;
            this.curPage--;
            this.GetDataList(true);
        }else if('btn_search'==btnName){
            this.queryStr = btnNode.parent.getComponent(cc.EditBox).string;
            this.curPage = 1;
            this.lastPage = 1;
            this.GetDataList(true);
        }else if('lb_roomCfg'==btnName){
            let wanfaStr = btnNode.parent.wanfa;
            let unionCfgStr = btnNode.parent.unionCfg;
            app.FormManager().ShowForm("ui/club/UIUnionRoomCfgMsg", wanfaStr, unionCfgStr);
        }
	},
});
