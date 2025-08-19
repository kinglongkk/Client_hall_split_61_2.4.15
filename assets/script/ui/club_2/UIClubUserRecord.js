/*
    UIMessage 模态消息界面
*/
var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
    	memberlist_scrollView:cc.ScrollView,
    	memberlist_layout:cc.Node,
    	memberlist_demo:cc.Node,
        memberlist_demo_red:cc.Node,
    },

    //初始化
    OnCreateInit:function(){
        this.RegEvent("OnClubPlayerNtf", this.Event_PlayerNtf);
        this.RegEvent("OnUnionSportsPoint", this.Event_UnionSportsPoint, this);
        this.RegEvent("ChangeBeiZhu", this.Event_ChangeBeiZhu);
        this.WeChatManager=app.WeChatManager();
        this.NetManager=app.NetManager();
        this.memberlist_scrollView.node.on('scroll-to-bottom',this.GetNextPage,this);
        app.Client.RegEvent("UpdateChangeAliveNodeData", this.Event_UpdateChangeAliveNodeData, this);
    },

    //---------显示函数--------------------

    OnShow:function(clubId, unionId, unionName){
    	this.clubId = clubId;
        this.unionId = unionId;
        this.unionName = unionName;
    	this.memberlist_demo.active = false;
        this.memberlist_demo_red.active = false;
        let clubData=app.ClubManager().GetClubDataByClubID(this.clubId);
        let self = this;
        this.GetDataList();
        
    },
    GetDataList:function(){
        this.memberlist_scrollView.scrollToTop();
        //this.memberlist_layout.removeAllChildren();
        this.DestroyAllChildren(this.memberlist_layout);

        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId = this.unionId;
        let self = this;
        app.NetManager().SendPack('club.CClubSportsPointChangeRecordBySelf',sendPack,function(serverPack){
            self.ShowData(serverPack);
        },function(error){
            self.ShowSysMsg("获取记录失败");
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
        let bottom=this.node.getChildByName('right').getChildByName('img_xiadi');
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
    
     /**
     * 2次确认点击回调
     * @param curEventType
     * @param curArgList
     */
    SetWaitForConfirm:function(msgID,type,msgArg=[],cbArg=[],content = "", lbSure ="", lbCancle=""){
        let ConfirmManager = app.ConfirmManager();
        ConfirmManager.SetWaitForConfirmForm(this.OnConFirm.bind(this), msgID, cbArg);
        ConfirmManager.ShowConfirm(type, msgID, msgArg,content,lbSure,lbCancle);
    },
    OnConFirm:function(clickType, msgID, backArgList){
        if(clickType != "Sure"){
            return
        }
        if('MSG_CLUB_DissolveRoomCfg' == msgID){
            let roomData = backArgList[0];
            let jesanState = app.ClubManager().Enum_RoomCfg_Delete;
            app.ClubManager().SendSetRoomCfg(this.clubId,roomData.gameIndex,jesanState);
        }else if('MSG_CLUB_DissolveRoom' == msgID){
            app.ClubManager().SendCloseClub(this.clubId);
            //this.FormManager.ShowForm('bottom');
            this.FormManager.CloseFormReal('ui/club/UIClubManager');
        }else if('MSG_CLUB_EXIT' == msgID){
            app.ClubManager().SendPlayerStateChange(this.clubId,app.HeroManager().GetHeroProperty("pid"),app.ClubManager().Enum_Leave);
            //this.FormManager.ShowForm('bottom');
            this.FormManager.CloseFormReal('ui/club/UIClubManager');
        }
        else if('MSG_CLUB_KICKPlayer' == msgID){
            let data = backArgList[0];
            app.ClubManager().SendPlayerStateChange(data.clubId,data.pid,data.kickState);
        }
        else if('MSG_CLUB_KICKPlayerBatch' == msgID){
            this.DelToggleUser();
        }
        else if('MSG_CLUB_SetManager' == msgID){
            let data = backArgList[0];
            app.ClubManager().SendSetClubMinister(data.clubId,data.pid,data.state);
        }else if ('MSG_CLUB_SetPromoterManager' == msgID) {
            let data = backArgList[0];
            app.ClubManager().SendSetPromotionMinister(data.clubId,data.pid,data.state);
        }
    },
   
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_yaoqing'==btnName){
            this.Click_btn_yaoqing();
        }else if('lb_haoka'==btnName){
            
            let self = this;
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.type=0;

            app.NetManager().SendPack("club.CClubWinnerAndCosumeRecord",sendPack, function(serverPack){
                app.FormManager().ShowForm("ui/club_2/UIClubBanJiangInfo",serverPack,btnNode.detail,0);
                
            }, function(){
                app.SysNotifyManager().ShowSysMsg("获取失败:error03",[],3);
            });

        }else if('lb_dayingjia'==btnName){
           
            let self = this;
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.type=1;

            app.NetManager().SendPack("club.CClubWinnerAndCosumeRecord",sendPack, function(serverPack){
                app.FormManager().ShowForm("ui/club_2/UIClubBanJiangInfo",serverPack,btnNode.detail,1);
                
            }, function(){
                app.SysNotifyManager().ShowSysMsg("获取失败:error03",[],3);
            });

        }

        else if('btn_close'==btnName){
        	this.CloseForm();
        }
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
