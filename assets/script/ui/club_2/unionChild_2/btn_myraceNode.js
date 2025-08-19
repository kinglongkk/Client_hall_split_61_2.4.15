var app = require("app");
cc.Class({
    extends: cc.Component,

    properties: {
        memberlist_scrollView:cc.ScrollView,
        memberlist_layout:cc.Node,
        memberlist_demo:cc.Node,
        memberlist_demo_red:cc.Node,
    },
    onLoad:function(){

    },
    InitData:function (clubId, unionId, unionPostType, myisminister, unionName, unionSign, levelPromotion) {
        this.clubId = clubId;
        this.unionId = unionId;
        this.unionPostType = unionPostType;
        this.myisminister = myisminister;
        this.unionName = unionName;
        this.unionSign = unionSign;
        this.levelPromotion = levelPromotion;

        let clubData=app.ClubManager().GetClubDataByClubID(this.clubId);
        let self = this;
        this.GetDataList();
       
    },

    GetDataList:function(){
        this.memberlist_scrollView.scrollToTop();
        this.memberlist_layout.removeAllChildren();

        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId = this.unionId;
        let self = this;
        app.NetManager().SendPack('club.CClubSportsPointChangeRecordBySelf',sendPack,function(serverPack){
            self.ShowData(serverPack);
        },function(error){
            app.SysNotifyManager().ShowSysMsg("获取记录失败",[],3);
        });
    },
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
    ShowData:function(serverPack){
        this.ShowDataList(serverPack.unionDynamicItemList);
        //刷新底部
        let bottom=this.node.getChildByName('img_xiadi');
        bottom.getChildByName('lb_paiming').getComponent(cc.Label).string="排名:"+serverPack.id;
        bottom.getChildByName('lb_jifen').getComponent(cc.Label).string="积分:"+serverPack.sportsPoint;
        bottom.getChildByName('lb_taotaifen').getComponent(cc.Label).string="淘汰分:"+serverPack.eliminatePoint;

        bottom.getChildByName('lb_dayingjia').getComponent(cc.Label).string="大赢家:"+serverPack.bigWinnerSum;
        bottom.getChildByName('lb_dayingjia').detail={};
        bottom.getChildByName('lb_dayingjia').detail.id=serverPack.id;
        bottom.getChildByName('lb_dayingjia').detail.clubName=app.HeroManager().GetHeroProperty("name");
        bottom.getChildByName('lb_dayingjia').detail.ownerPid=app.HeroManager().GetHeroProperty("pid");
        bottom.getChildByName('lb_dayingjia').detail.winner=serverPack.bigWinnerSum;

        bottom.getChildByName('lb_haoka').getComponent(cc.Label).string="有效耗卡:"+serverPack.consumeSum;
        bottom.getChildByName('lb_haoka').detail={};
        bottom.getChildByName('lb_haoka').detail.id=serverPack.id;
        bottom.getChildByName('lb_haoka').detail.clubName=app.HeroManager().GetHeroProperty("name");
        bottom.getChildByName('lb_haoka').detail.ownerPid=app.HeroManager().GetHeroProperty("pid");
        bottom.getChildByName('lb_haoka').detail.consume=serverPack.consumeSum;

        //endRoundTime,显示比赛结束时间
        this.node.getChildByName("img_rqdi").getChildByName('lb_time').getComponent(cc.Label).string='竞技联赛 至 '+app.ComTool().GetDateYearMonthDayHourMinuteString(serverPack.endRoundTime);
    },
   
    ShowDataList:function(serverPack){
        for(let i=0;i<serverPack.length;i++){
            let nodePrefab="";
            if(serverPack[i].execType>=13){
                nodePrefab = cc.instantiate(this.memberlist_demo_red);
            }else{
                nodePrefab = cc.instantiate(this.memberlist_demo);
            }
            
            nodePrefab.active=true;
            
            nodePrefab.getChildByName('lb_time').getComponent(cc.Label).string=app.ComTool().GetDateYearMonthDayHourMinuteSecondString(serverPack[i].execTime);
            nodePrefab.getChildByName('lb_fenlei').getComponent(cc.Label).string=this.GetExecTypeStr(serverPack[i].execType);

            if(serverPack[i].relevantStr==""){
                nodePrefab.getChildByName('lb_duixiang').getComponent(cc.Label).string='--';
            }else{
                nodePrefab.getChildByName('lb_duixiang').getComponent(cc.Label).string=serverPack[i].relevantStr;
            }
            
            nodePrefab.getChildByName('lb_haoka').getComponent(cc.Label).string=serverPack[i].consume;
            nodePrefab.getChildByName('lb_dayingjia').getComponent(cc.Label).string=serverPack[i].winner;
            nodePrefab.getChildByName('lb_taotaifen').getComponent(cc.Label).string=serverPack[i].eliminatePoint;
            if(serverPack[i].pidCurValue>0){
                nodePrefab.getChildByName('lb_zhuangtai').getComponent(cc.Label).string="+"+serverPack[i].pidCurValue;
            }else{
                nodePrefab.getChildByName('lb_zhuangtai').getComponent(cc.Label).string=serverPack[i].pidCurValue;
            }

            this.memberlist_layout.addChild(nodePrefab);
        }
    },
    
    //控件点击回调
    OnClick_BtnWnd:function(eventTouch, eventData){
        try{
            app.SoundManager().PlaySound("BtnClick");
            let btnNode = eventTouch.currentTarget;
            let btnName = btnNode.name;
            this.OnClick(btnName, btnNode);
        }
        catch (error){
            console.log("OnClick_BtnWnd:"+error.stack);
        }
    },
    OnClick:function(btnName, btnNode){

    },
    
});