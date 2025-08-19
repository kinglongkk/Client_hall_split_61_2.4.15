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
    },

    //初始化
    OnCreateInit:function(){
        this.WeChatManager=app.WeChatManager();
        this.memberlist_scrollView.node.on('scroll-to-bottom',this.GetNextPage,this);
    },

    //---------显示函数--------------------

    OnShow:function(clubId, unionId){
    	this.memberPage = 1;
        this.lastMemberPage = 1;
        this.pageType=1; //1 加入为批准2 退出未批准

    	this.clubId = clubId;
        this.unionId = unionId;
    	this.memberlist_demo.active = false;
        let clubData=app.ClubManager().GetClubDataByClubID(this.clubId);
        this.myisminister = clubData.minister;
        this.myisPartner = clubData.promotion;
        this.unionPostType = clubData.unionPostType;
        this.levelPromotion = clubData.levelPromotion;
        this.isPromotionManage = clubData.isPromotionManage;
        let self = this;
        this.GetPalyerList(true);
       
    },
    
  
    //初始化tab
    InitTab:function(){
    	let tab=this.node.getChildByName("topToggleContainer");
    	if(this.pageType==2){
    		tab.getChildByName("btn_join_list").getChildByName("checkmark").active=false;
    		tab.getChildByName("btn_out_list").getChildByName("checkmark").active=true;
    	}else if(this.pageType==1){
    		tab.getChildByName("btn_join_list").getChildByName("checkmark").active=true;
    		tab.getChildByName("btn_out_list").getChildByName("checkmark").active=false;
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
    GetPalyerList:function(isRefresh=false){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pageNum = this.memberPage;
        sendPack.pageType = this.pageType;
        sendPack.query="";

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

                nodePrefab.getChildByName('lb_upPlayerName').getComponent(cc.Label).string=this.ComTool.GetBeiZhuName(playerlist[i].upShortPlayer.pid,playerlist[i].upShortPlayer.name);

                nodePrefab.getChildByName('btn_agree').pid=heroID;

                nodePrefab.getChildByName('btn_refuse').pid=heroID;
               
                nodePrefab.active=true;
                this.memberlist_layout.addChild(nodePrefab);
                let headImageUrl = playerlist[i].shortPlayer.iconUrl;
                if(headImageUrl){
                    this.WeChatManager.InitHeroHeadImage(heroID, headImageUrl);
                    let WeChatHeadImage = nodePrefab.getChildByName('head').getComponent("WeChatHeadImage");
                    WeChatHeadImage.OnLoad();
                    WeChatHeadImage.ShowHeroHead(heroID,headImageUrl);
                }
            }
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
        else if('MSG_CLUB_SetManager' == msgID){
            let data = backArgList[0];
            app.ClubManager().SendSetClubMinister(data.clubId,data.pid,data.state);
        }else if ('MSG_CLUB_SetPromoterManager' == msgID) {
            let data = backArgList[0];
            app.ClubManager().SendSetPromotionMinister(data.clubId,data.pid,data.state);
        }
    },
    click_btn_join_list:function(){
        this.memberPage = 1;
        this.pageType=1;
        this.DestroyAllChildren(this.memberlist_layout);
        this.GetPalyerList(true);
        this.InitTab();
    },
    click_btn_out_list:function(){
        this.memberPage = 1;
        this.pageType=2;
        this.DestroyAllChildren(this.memberlist_layout);
        this.GetPalyerList(true);
        this.InitTab();
    },
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_yaoqing'==btnName){
            this.Click_btn_yaoqing();
        }
        else if('btn_close'==btnName){
        	this.CloseForm();
        }else if(btnName=="btn_refuse"){
        	if(this.pageType<2){
        		//加入状态
            	app.ClubManager().SendPlayerStateChange(this.clubId,btnNode.pid,app.ClubManager().Enum_Refuse);
        	}else{
        		//退出状态
        		app.ClubManager().SendPlayerStateChange(this.clubId,btnNode.pid,app.ClubManager().Enum_Refuse,true);
        	}
            //删除节点
            btnNode.parent.destroy();
        }else if(btnName=="btn_agree"){
        	if(this.pageType<2){
        		//加入状态
            	app.ClubManager().SendPlayerStateChange(this.clubId,btnNode.pid,app.ClubManager().Enum_Join);
        	}else{
        		//退出状态
        		app.ClubManager().SendPlayerStateChange(this.clubId,btnNode.pid,app.ClubManager().Enum_Leave,true);
        	}
            //删除节点
            btnNode.parent.destroy();

        }
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
