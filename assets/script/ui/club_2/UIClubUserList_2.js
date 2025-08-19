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
    	memberlist_editbox:cc.EditBox,

        yaoqing_editbox:cc.EditBox,
    },

    //初始化
    OnCreateInit:function(){
        this.RegEvent("OnClubPlayerNtf", this.Event_PlayerNtf);
        this.RegEvent("ReShowClubPlayer", this.Event_ReShowClubPlayer);
        this.RegEvent("OnUnionSportsPoint", this.Event_UnionSportsPoint, this);
        this.RegEvent("ChangeBeiZhu", this.Event_ChangeBeiZhu);
        this.WeChatManager=app.WeChatManager();
        this.NetManager=app.NetManager();
        this.memberlist_scrollView.node.on('scroll-to-bottom',this.GetNextPage,this);
        app.Client.RegEvent("UpdateChangeAliveNodeData", this.Event_UpdateChangeAliveNodeData, this);
    },

    //---------显示函数--------------------

    OnShow:function(clubId, unionId, unionName, unionSign){

        this.doType=1; //1编辑模式， 2.删除模式 

        this.InitTop();
        this.InitBottom();

    	this.memberPage = 1;
        this.lastMemberPage = 1;
        this.pageType=0; //0 已经加入,1 加入为批准2 退出未批准
       

    	this.clubId = clubId;
        this.unionId = unionId;
        this.unionName = unionName;
        this.unionSign = unionSign;
    	this.memberlist_demo.active = false;
        this.isSearching = false;
        this.memberlist_editbox.string='';
        this.queryStr = "";
        let clubData=app.ClubManager().GetClubDataByClubID(this.clubId);
        this.myisminister = clubData.minister;
        this.myisPartner = clubData.promotion;
        this.unionPostType = clubData.unionPostType;
        this.levelPromotion = clubData.levelPromotion;
        this.isPromotionManage = clubData.isPromotionManage;
       	
        this.joinPower=clubData.joinPower;
        this.kickPower=clubData.kickPower;
        this.changeCfgPower=clubData.changeCfgPower;
        this.edictNoticePower=clubData.edictNoticePower;
        this.invitePower=clubData.invitePower;
        this.kickTablePower=clubData.kickTablePower;
        this.recordPower=clubData.recordPower;
        this.reportPower=clubData.reportPower;
        this.matchPower=clubData.matchPower;

        this.InitButton();
        this.InitTopTitle();


        let self = this;
        this.GetPalyerList(true);
        let sendOnlinePack = {};
        sendOnlinePack.clubId = this.clubId;
        app.NetManager().SendPack("club.CClubOnlinePlayerCountZhongZhi",sendOnlinePack, function(serverPack){
            self.node.getChildByName("right").getChildByName("lb_renshu").getComponent(cc.Label).string = "在线人数："+serverPack.count+"/"+serverPack.totalCount+"人";
            
        }, function(){
            app.SysNotifyManager().ShowSysMsg("获取在线人数失败",[],3);
        });
    },
    InitTopTitle:function(){
        let topTitle=this.node.getChildByName("right").getChildByName('topTitle');

        topTitle.getChildByName('img_fgx3').active=this.myisminister>0;
        topTitle.getChildByName('lb_4').active=this.myisminister>0;

        topTitle.getChildByName('img_fgx5').active=this.myisminister>0;
        topTitle.getChildByName('lb_6').active=this.myisminister>0;
        topTitle.getChildByName('lb_7').active=this.myisminister>0;
    },
    InitButton:function(){
        let right=this.node.getChildByName("right");
        right.getChildByName('btn_shenhe').active=this.joinPower>0;

        let xiadi=right.getChildByName("img_xiadi");

        xiadi.getChildByName('btn_yaoqing').active=this.invitePower>0;
        
        xiadi.getChildByName('btn_jinzhi').active=this.myisminister==2; //管理员显示，其他人看不到
        xiadi.getChildByName('btn_jiesan').active=this.myisminister==2; //管理员显示，其他人看不到
        if(this.kickPower>0 || this.myisminister==2){
            xiadi.getChildByName('btn_shanchu').active=true; //管理员显示，其他人看不到
        }else{
            xiadi.getChildByName('btn_shanchu').active=false;
        }

        xiadi.getChildByName('btn_lahei').active=this.kickPower>0;
    },
    InitTop:function(){
        let topTitle=this.node.getChildByName('right').getChildByName('topTitle');
        topTitle.getChildByName('lb_7').active=this.doType==1;
        topTitle.getChildByName('btn_shanchu_sure').active=this.doType==2;
    },
    InitBottom:function(){
        let img_xiadi=this.node.getChildByName('right').getChildByName('img_xiadi');
        img_xiadi.getChildByName('btn_shanchu').active=this.doType==1;
        img_xiadi.getChildByName('btn_shanchu_cancel').active=this.doType==2;
    },
    Event_ChangeBeiZhu:function(event){
        for (let i = 0; i < this.memberlist_layout.children.length;i++) {
            if(this.memberlist_layout.children[i].name==event.pid.toString()){
                this.memberlist_layout.children[i].getChildByName('lb_name').getComponent(cc.Label).string=this.ComTool.GetNameByIndex(event.name,6);
                return;
            }
        }
    },
    Event_UpdateChangeAliveNodeData:function(){
        this.GetPalyerList(true);
    },
    //初始化tab
    InitTab:function(){
    	let tab=this.node.getChildByName("tab");
    	if(this.pageType==0){
    		tab.getChildByName("btn_user_list").getChildByName("off").active=false;
    		tab.getChildByName("btn_join_list").getChildByName("off").active=true;
    		tab.getChildByName("btn_out_list").getChildByName("off").active=true;
    	}else if(this.pageType==1){
    		tab.getChildByName("btn_user_list").getChildByName("off").active=true;
    		tab.getChildByName("btn_join_list").getChildByName("off").active=false;
    		tab.getChildByName("btn_out_list").getChildByName("off").active=true;
    	}else if(this.pageType==2){
    		tab.getChildByName("btn_user_list").getChildByName("off").active=true;
    		tab.getChildByName("btn_join_list").getChildByName("off").active=true;
    		tab.getChildByName("btn_out_list").getChildByName("off").active=false;
    	}
    },
    GetJoinOutCheck:function(){
    	let join=this.node.getChildByName("bottom").getChildByName("JoinToggle").getComponent(cc.Toggle).isChecked;
    	let out=this.node.getChildByName("bottom").getChildByName("OutToggle").getComponent(cc.Toggle).isChecked;
        let joineInt=0;
        let outInt=0;
        if(join){
            joineInt=1;
        }
        if(out){
            outInt=1;
        }
    	return {"joinNeedExamine":joineInt,"quitNeedExamine":outInt};
    },
    Event_ReShowClubPlayer:function(){
        this.GetPalyerList(true);
    },
    GetPalyerList:function(isRefresh=false){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pageNum = this.memberPage;
        sendPack.query =this.ComTool.GetBeiZhuID(this.queryStr);
        sendPack.pageType = this.pageType;
        if (this.queryStr != "") {
            this.isSearching = true;
        }else{
            this.isSearching = false;
        }
        
        sendPack.type = 0;
        sendPack.losePoint = 0;



        let self = this;
        app.NetManager().SendPack('club.CClubGetMemberManageZhongZhi',sendPack,function(serverPack){
            if (serverPack.length > 0) {
                self.ShowMemberList(serverPack,isRefresh);
            }else{
                self.memberPage = self.lastMemberPage;
            }
        },function(error){
            self.ShowSysMsg("获取亲友圈玩家列表失败");
        });
    },
    Click_btn_yaoqing:function(){
        if(this.yaoqing_editbox.string==''){
            this.FormManager.ShowForm("ui/club/UIYaoQing",this.clubId);
            return;
        }
        let self=this;
        let sendPack={
                "clubId":this.clubId,
                "pid":this.yaoqing_editbox.string,
        };
        this.NetManager.SendPack("club.CClubFindPIDAdd", sendPack,function(success){
            that.ShowSysMsg("邀请已发送,等待玩家确认");
        },function(error){
            that.ShowSysMsg("已邀请或未找到该玩家或同赛事不同亲友圈不能重复拉人或距离退出该亲友圈不到10分钟或该玩家处于赛事黑名单，无法加入亲友圈");
        });
    },
    Event_PlayerNtf:function(event){
        //处于搜索中，不需要刷新
        if (this.isSearching) return;
        let clubId = event.clubId;
        let self = this;
        if(this.clubId == clubId){
            this.memberPage = 1;
            this.GetPalyerList(true);
        }
    },
    Event_UnionSportsPoint:function(event){
        for (let j = 0; j < this.memberlist_layout.children.length; j++) {
            if (this.unionId > 0 && this.clubId == event.clubId &&
                this.memberlist_layout.children[j].playerData.shortPlayer.pid == event.pid) {
                this.memberlist_layout.children[j].playerData.sportsPoint = event.sportsPoint;
                this.memberlist_layout.children[j].getChildByName('pl').getComponent(cc.Label).string = event.sportsPoint;
                break;
            }
        }
    },
    SortPlayerByIsminister:function(a,b){
        if(a.minister && b.minister)
            return a.time - b.time;
        else if(!a.minister && !b.minister){
            if(a.status==app.ClubManager().Enum_NotAgree){
                return -1;
            }else if(b.status==app.ClubManager().Enum_NotAgree){
                return 1;
            }
            return a.time - b.time;
        }
        else if(a.minister && !b.minister)
            return -1;
        else if(!a.minister && b.minister)
            return 1;
    },
    GetNextPage:function(){
        this.memberPage++;
        this.GetPalyerList(false);
    },
    ShowMemberList:function(playerlist,isRefresh){
        let joinState = app.ClubManager().Enum_Join;
        let notAgreeState = app.ClubManager().Enum_NotAgree;
        let notAgreeStateOut = app.ClubManager().Enum_NotAgreeOut;
        if (isRefresh) {
            this.memberlist_scrollView.scrollToTop();
            //this.memberlist_layout.removeAllChildren();
            this.DestroyAllChildren(this.memberlist_layout);
        }
        for(let i=0;i<playerlist.length;i++){
            //先判断下是否已经存在,对于有可能从前面插入数据的需要差重
            let isExist = false;
            for (let j = 0; j < this.memberlist_layout.children.length; j++) {
                if (this.memberlist_layout.children[j].playerData.shortPlayer.pid == playerlist[i].shortPlayer.pid) {
                    isExist = true;
                    break;
                }
            }
            if (isExist) continue;
            if(joinState == playerlist[i].status || notAgreeState == playerlist[i].status || notAgreeStateOut == playerlist[i].status){
                let heroID = playerlist[i].shortPlayer.pid;
                let shortHeroID=this.ComTool.GetPid(heroID);
                let nodePrefab = cc.instantiate(this.memberlist_demo);
                nodePrefab.name = heroID.toString();
                nodePrefab.minister = playerlist[i].minister;
                let selfHeroID = app.HeroManager().GetHeroProperty("pid");
                
                nodePrefab.playerData = playerlist[i];
                nodePrefab.getChildByName('lb_name').getComponent(cc.Label).string=this.ComTool.GetBeiZhuName(playerlist[i].shortPlayer.pid,playerlist[i].shortPlayer.name);

                nodePrefab.getChildByName('lb_id').getComponent(cc.Label).string=this.ComTool.GetPid(heroID);

                nodePrefab.getChildByName('btn_caozuo').pid=heroID;
                nodePrefab.getChildByName('btn_caozuo').eliminatePoint=playerlist[i].eliminatePoint;

                nodePrefab.getChildByName('Toggle').pid=heroID;
                if(this.myisminister>0){
                    nodePrefab.getChildByName('btn_caozuo').active=this.doType==1;
                    nodePrefab.getChildByName('Toggle').active=this.doType==2;
                }else{
                    nodePrefab.getChildByName('btn_caozuo').active=false;
                    nodePrefab.getChildByName('Toggle').active=false;
                }

                if(this.myisminister>0){
                    nodePrefab.getChildByName('lb_jushu').active=true;
                    nodePrefab.getChildByName('lb_jiesan').active=true;
                    nodePrefab.getChildByName('lb_jushu').getComponent(cc.Label).string=playerlist[i].setCount;
                    nodePrefab.getChildByName('lb_jiesan').getComponent(cc.Label).string=playerlist[i].jieSanCount;
                }else{
                    nodePrefab.getChildByName('lb_jushu').active=false;
                    nodePrefab.getChildByName('lb_jiesan').active=false;
                }

                if(playerlist[i].lastGameTime>0){
                    nodePrefab.getChildByName('lb_time').getComponent(cc.Label).string= app.ComTool().GetDateYearMonthDayHourMinuteString(playerlist[i].lastGameTime);
                }else{
                    nodePrefab.getChildByName('lb_time').getComponent(cc.Label).string='暂无';
                }
               
                //职务
                if(playerlist[i].minister){
                    if(playerlist[i].minister == app.ClubManager().Club_MINISTER_MGR){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="管理员";
                    }else if(playerlist[i].minister == app.ClubManager().Club_MINISTER_MGRSS){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="赛事管理员";
                    }else if(playerlist[i].minister == app.ClubManager().Club_MINISTER_CREATER){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="创建者";
                        nodePrefab.getChildByName('Toggle').active=false;  //赛事创建者不能删除，Togggle勾选框隐藏
                    }else if(playerlist[i].minister == app.ClubManager().Club_MINISTER_DENY){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="受限成员";
                    }
                    
                }else{
                    if(joinState == playerlist[i].status){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="成员";
                    }
                    if(notAgreeState == playerlist[i].status || notAgreeStateOut == playerlist[i].status){
                        nodePrefab.getChildByName('lb_zhiwu').getComponent(cc.Label).string="待审核";
                        
                    }
                }
                nodePrefab.active=true;
                this.memberlist_layout.addChild(nodePrefab);
            }
        }
    },
    InitMember:function(){
        for(let i=0;i<this.memberlist_layout.children.length;i++){
            this.memberlist_layout.children[i].getChildByName("btn_caozuo").active=this.doType==1;
            this.memberlist_layout.children[i].getChildByName("Toggle").active=this.doType==2;
        }
    },
    DelToggleUser:function(){
        let pidList=[];
        for(let i=0;i<this.memberlist_layout.children.length;i++){
            let toggle=this.memberlist_layout.children[i].getChildByName("Toggle");
            if(toggle.getComponent(cc.Toggle).isChecked==true){
                pidList.push(toggle.pid);
            }
        }
        if(pidList.length==0){
            app.SysNotifyManager().ShowSysMsg("请选中要删除的人",[],3);
            return;
        }
        let self=this;
        let sendPack={
                "clubId":this.clubId,
                "pidList":pidList,
        };
        this.NetManager.SendPack("club.CClubKickPlayerMulti", sendPack,function(success){
            app.SysNotifyManager().ShowSysMsg("删除成功",[],3);
            self.memberPage = 1;
            self.GetPalyerList(true);
        },function(error){
            app.SysNotifyManager().ShowSysMsg("删除失败",[],3);
        });

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
    BeiZhu:function(event){
        this.FormManager.ShowForm("UIUserBeiZhu",this.clubId,event.playerData);
    },
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_yaoqing'==btnName){
            this.Click_btn_yaoqing();
        }
        else if('btn_chazhao'==btnName){
            this.memberPage = 1;
            this.lastMemberPage = 1;
            this.queryStr =this.ComTool.GetBeiZhuID(this.memberlist_editbox.string);
            this.GetPalyerList(true);
        }else if("name"==btnName || "head"==btnName){
           this.BeiZhu(btnNode);
        }else if(btnName=='btn_jinzhi'){

            this.FormManager.ShowForm('ui/club_2/UIClubForbid_2', this.clubId, this.unionId, this.unionName, this.unionSign);
        }else if(btnName=='btn_caozuo'){
            this.FormManager.ShowForm('ui/club_2/UIClubUserManager', this.clubId,this.unionId,btnNode.pid,btnNode.eliminatePoint);
        }
        else if(btnName=="btn_shanchu"){
            this.doType=2;
            this.InitTop();
            this.InitBottom();
            this.InitMember();
        }
        else if(btnName=="btn_shanchu_cancel"){
            this.doType=1;
            this.InitTop();
            this.InitBottom();
            this.InitMember();
        }else if(btnName=='btn_shanchu_sure'){
            if(this.doType==1){
                return;//显示模式不能删除
            }
            let pidList=[];
            for(let i=0;i<this.memberlist_layout.children.length;i++){
                let toggle=this.memberlist_layout.children[i].getChildByName("Toggle");
                if(toggle.getComponent(cc.Toggle).isChecked==true){
                    pidList.push(toggle.pid);
                }
            }
            if(pidList.length==0){
                app.SysNotifyManager().ShowSysMsg("请选中要删除的人",[],3);
                return;
            }
            this.SetWaitForConfirm('MSG_CLUB_KICKPlayerBatch',this.ShareDefine.Confirm,[],[]);
            //this.DelToggleUser();
        }else if(btnName=='btn_lahei'){

            this.FormManager.ShowForm("ui/club_2/UIClubUserBlack",this.clubId,this.unionId);


        }

        else if('btn_close'==btnName){
        	this.CloseForm();
        }else if(btnName=="btn_tichu"){
            let data = {};
            data.clubId = this.clubId;
            data.pid = btnNode.parent.parent.name;
            data.kickState = app.ClubManager().Enum_Kick;
            let name = btnNode.parent.parent.getChildByName('name').getComponent(cc.Label).string;
            this.SetWaitForConfirm('MSG_CLUB_KICKPlayer',this.ShareDefine.Confirm,[name],[data]);
        }
        else if(btnName=='btn_shenhe'){
             this.FormManager.ShowForm("ui/club_2/UIClubUserExam",this.clubId,this.unionId);
        }else if(btnName=='btn_jiesan'){
            this.FormManager.ShowForm('ui/club/UIClubDissolve',this.clubId,this.unionId,2);
        }else if(btnName=='btn_newRaceSetting'){
            this.FormManager.ShowForm('ui/club_2/UIClubRaceSetting', this.clubId, this.unionId, this.unionName, this.unionSign);
            this.CloseForm();
        }
        
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
