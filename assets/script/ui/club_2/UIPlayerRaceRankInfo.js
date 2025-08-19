var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    OnCreateInit: function () {
        this.RegEvent("ReGetRaceRankInfo", this.Event_ReGetRaceRankInfo, this);
        this.rankScrollView = this.node.getChildByName("rankScrollView");
        this.rankScrollView.getComponent(cc.ScrollView).node.on('scroll-to-bottom',this.GetNextPage,this);
    },
    OnShow: function (clubId,unionId,playerData,type) {
        this.opClubId = clubId;
        this.unionId=unionId;
        this.playerData=playerData;
        this.opPid = playerData.pid;
        this.type = type;
        this.curPage = 1;
        this.GetUnionDynamicItemList(true);
    },
    Event_ReGetRaceRankInfo:function(){
        this.curPage = 1;
        this.GetUnionDynamicItemList(true);
    },
    GetPage:function(){
        this.curPage++;
        this.GetUnionDynamicItemList(false);
    },
    GetUnionDynamicItemList:function(isRefresh){
        let sendPack = {};
        sendPack.clubId = this.opClubId;
        sendPack.pid = this.opPid;
        sendPack.getType = this.type;
        sendPack.pageNum = this.curPage;
        let self = this;
        app.NetManager().SendPack("club.CClubSportsPointChangeRecordByPid",sendPack, function(serverPack){
            self.UpdateScrollView(serverPack.unionDynamicItemList, isRefresh);
            self.ShowPlayInfo(serverPack);
        }, function(){

        });
    },
    ShowPlayInfo:function(serverPack){
        let img_xiadi = this.node.getChildByName("img_xiadi");
        let player = serverPack.player;
        let headImageUrl = player.iconUrl;
        if(headImageUrl){
            app.WeChatManager().InitHeroHeadImage(player.pid, headImageUrl);
            let WeChatHeadImage = img_xiadi.getChildByName('head').getComponent("WeChatHeadImage");
            WeChatHeadImage.OnLoad();
            WeChatHeadImage.ShowHeroHead(player.pid,headImageUrl);
        }
        img_xiadi.getChildByName('lb_name').getComponent(cc.Label).string = "昵称:"+player.name;
        img_xiadi.getChildByName('lb_beizhu').getComponent(cc.Label).string = "群名片:"+app.ComTool().GetBeiZhuName(player.pid,player.name);
        img_xiadi.getChildByName('lb_id').getComponent(cc.Label).string = "ID:"+player.pid;

        img_xiadi.getChildByName('lb_playerTotalPoint').getComponent(cc.Label).string = "成员积分："+serverPack.playerTotalPoint;
        img_xiadi.getChildByName('lb_zhongZhiTotalPoint').getComponent(cc.Label).string = "总积分："+serverPack.zhongZhiTotalPoint;
        if(serverPack.eliminatePoint==-9999999){
            img_xiadi.getChildByName('lb_eliminatePoint').getComponent(cc.Label).string = "淘汰：--";
        }else{
            img_xiadi.getChildByName('lb_eliminatePoint').getComponent(cc.Label).string = "淘汰："+serverPack.eliminatePoint;
        }
        

    },
    UpdateScrollView:function(serverPack, isRefresh){
        let roomScrollView = this.node.getChildByName("mark");
        let content = this.rankScrollView.getChildByName("view").getChildByName("content");
        if (isRefresh) {
            this.rankScrollView.getComponent(cc.ScrollView).scrollToTop();
            this.DestroyAllChildren(content);
        }
        let demo = this.node.getChildByName("demo");
        let demo_red = this.node.getChildByName("demo_red");
        demo_red.active=false;
        demo.active = false;
        for (let i = 0; i < serverPack.length; i++) {
            let child =null;
            if(serverPack[i].execType!=13 && serverPack[i].execType!=14){
                child = cc.instantiate(demo);
            }else{
                child = cc.instantiate(demo_red);
            }
            child.getChildByName("lb_execTime").getComponent(cc.Label).string = app.ComTool().GetDateYearMonthDayHourMinuteString(serverPack[i].execTime);
            child.getChildByName("lb_execType").getComponent(cc.Label).string = this.GetExecTypeStr(serverPack[i].execType);
            if(serverPack[i].relevantStr==""){
                child.getChildByName("lb_id").getComponent(cc.Label).string = '--';
            }else{
                child.getChildByName("lb_id").getComponent(cc.Label).string = serverPack[i].relevantStr;
            }
            

            child.getChildByName("lb_winLoseValue").getComponent(cc.Label).string = serverPack[i].winLoseValue;
            child.getChildByName("lb_consumeValue").getComponent(cc.Label).string = serverPack[i].consumeValue;
            child.getChildByName("lb_eliminatePoint").getComponent(cc.Label).string = serverPack[i].eliminatePoint;
            if(serverPack[i].pidCurValue>0){
                child.getChildByName("lb_pidCurValue").getComponent(cc.Label).string = "+"+serverPack[i].pidCurValue;
            }else{
                child.getChildByName("lb_pidCurValue").getComponent(cc.Label).string = serverPack[i].pidCurValue;
            }
            

            child.active = true;
            content.addChild(child);
        }
    },
    // //**
    //  * 异常操作
    //  */
    // ERROR(1),
    // /**
    //  * 对局输赢
    //  */
    // WINLOSE(2),
    // /**
    //  * 报名费
    //  */
    // ENTRYFEE(3),
    // /**
    //  * 洗牌费用
    //  */
    // XiPaiCost(4),
    GetExecTypeStr:function(execType){
        let typeObj = {
            1:"异常操作",
            2:"对局输赢",
            3:"报名费",
            4:"洗牌费用",
            12:"异常操作",
            13:"裁定作弊",
            14:"重赛裁定作弊",
        };
        return typeObj[execType];
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_close" || btnName == "img_black"){
            this.CloseForm();
        }else if(btnName="btn_caidingzuobi"){
            let shortPlayer={"iconUrl":this.playerData.iconUrl,"pid":this.playerData.pid,"name":this.playerData.name};
            let data={"clubId":this.opClubId,"sportsPoint":this.playerData.sportsPoint,"shortPlayer":shortPlayer};
            app.FormManager().ShowForm('ui/club_2/UIExamineConfig',data,this.opClubId,this.unionId,"toggle1",true);
        }
        else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },
    OnClose:function(){
        let content = this.rankScrollView.getChildByName("view").getChildByName("content");
        this.rankScrollView.getComponent(cc.ScrollView).scrollToTop();
        this.DestroyAllChildren(content);


        let img_xiadi = this.node.getChildByName("img_xiadi");
        img_xiadi.getChildByName('head').getComponent(cc.Sprite).spriteFrame="";
           
        img_xiadi.getChildByName('lb_name').getComponent(cc.Label).string = "昵称:";
        img_xiadi.getChildByName('lb_beizhu').getComponent(cc.Label).string = "群名片:";
        img_xiadi.getChildByName('lb_id').getComponent(cc.Label).string = "ID:";

        img_xiadi.getChildByName('lb_playerTotalPoint').getComponent(cc.Label).string = "成员积分：";
        img_xiadi.getChildByName('lb_zhongZhiTotalPoint').getComponent(cc.Label).string = "总积分：";
        img_xiadi.getChildByName('lb_eliminatePoint').getComponent(cc.Label).string = "淘汰：";

    },
});
