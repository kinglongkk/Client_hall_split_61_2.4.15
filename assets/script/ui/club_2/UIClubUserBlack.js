/*
    UIMessage 模态消息界面
*/
var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
    	memberlist_scrollView:cc.ScrollView,
    	memberlist_layout:cc.Node,
    	memberlist_demoout:cc.Node,
        memberlist_demoblack:cc.Node,

        top_out:cc.Node,
        top_black:cc.Node,
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
        this.pageType=1; //1黑名单列表 退出列表

        this.top_black.active=true;
        this.top_out.active=false;

    	this.clubId = clubId;
        this.unionId = unionId;
    	this.memberlist_demoout.active = false;
        this.memberlist_demoblack.active = false;
        let clubData=app.ClubManager().GetClubDataByClubID(this.clubId);
        this.myisminister = clubData.minister;
        this.myisPartner = clubData.promotion;
        this.unionPostType = clubData.unionPostType;
        this.levelPromotion = clubData.levelPromotion;
        this.isPromotionManage = clubData.isPromotionManage;
        let self = this;
        this.DestroyAllChildren(this.memberlist_layout);
        this.GetPalyerList(true);
       
    },
    
  
    //初始化tab
    InitTab:function(){
    	let tab=this.node.getChildByName("topToggleContainer");
    	if(this.pageType==2){
    		tab.getChildByName("btn_black_list").getChildByName("checkmark").active=false;
    		tab.getChildByName("btn_out_list").getChildByName("checkmark").active=true;
    	}else if(this.pageType==1){
    		tab.getChildByName("btn_black_list").getChildByName("checkmark").active=true;
    		tab.getChildByName("btn_out_list").getChildByName("checkmark").active=false;
    	}
    },
    GetNextPage:function(){
        this.memberPage++;
        this.GetPalyerList(false);
    },
    GetPalyerList:function(isRefresh=false){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pageNum=this.memberPage;
        let packName="club.CClubBanPlayerList";
        if(this.pageType==2){
            packName="club.CClubExistPlayerList";
        }

        this.top_black.active=this.pageType==1;
        this.top_out.active=this.pageType==2;

        let self = this;
        app.NetManager().SendPack(packName,sendPack,function(serverPack){
            if (serverPack.length > 0) {
                if(self.pageType==2){
                    self.ShowOutMemberList(serverPack,isRefresh);
                }else{
                    self.ShowBlackMemberList(serverPack,isRefresh);
                }
            }else{
                self.memberPage = self.lastMemberPage;
            }
        },function(error){
            
        });
    },
    ShowBlackMemberList:function(playerlist,isRefresh){
        if (isRefresh) {
            this.memberlist_scrollView.scrollToTop();
            //this.memberlist_layout.removeAllChildren();
            this.DestroyAllChildren(this.memberlist_layout);
        }
        for(let i=0;i<playerlist.length;i++){
           
                let heroID = playerlist[i].pid;
                let shortHeroID=this.ComTool.GetPid(heroID);
                let nodePrefab = cc.instantiate(this.memberlist_demoblack);
                nodePrefab.name = heroID.toString();
                
                nodePrefab.playerData = playerlist[i];
                //lb_opname
                nodePrefab.getChildByName('lb_name').getComponent(cc.Label).string=this.ComTool.GetBeiZhuName(playerlist[i].pid,playerlist[i].name);

                nodePrefab.getChildByName('lb_opname').getComponent(cc.Label).string=playerlist[i].deletePidName;

                nodePrefab.getChildByName('lb_id').getComponent(cc.Label).string=this.ComTool.GetPid(heroID);
               
                nodePrefab.getChildByName('lb_time').getComponent(cc.Label).string=this.ComTool.GetDateYearMonthDayHourMinuteString(playerlist[i].createTime);

                nodePrefab.getChildByName('btn_noblack').pid=heroID;
               
                nodePrefab.active=true;
                this.memberlist_layout.addChild(nodePrefab);
                let headImageUrl = playerlist[i].iconUrl;
                if(headImageUrl){
                    this.WeChatManager.InitHeroHeadImage(heroID, headImageUrl);
                    let WeChatHeadImage = nodePrefab.getChildByName('head').getComponent("WeChatHeadImage");
                    WeChatHeadImage.OnLoad();
                    WeChatHeadImage.ShowHeroHead(heroID,headImageUrl);
                }
        }
    },
    ShowOutMemberList:function(playerlist,isRefresh){
        if (isRefresh) {
            this.memberlist_scrollView.scrollToTop();
            //this.memberlist_layout.removeAllChildren();
            this.DestroyAllChildren(this.memberlist_layout);
        }
        for(let i=0;i<playerlist.length;i++){
           
                let heroID = playerlist[i].shortPlayer.pid;
                let shortHeroID=this.ComTool.GetPid(heroID);
                let nodePrefab = cc.instantiate(this.memberlist_demoout);
                nodePrefab.name = heroID.toString();
                nodePrefab.minister = playerlist[i].minister;
                let selfHeroID = app.HeroManager().GetHeroProperty("pid");
                
                nodePrefab.playerData = playerlist[i];
                nodePrefab.getChildByName('lb_name').getComponent(cc.Label).string=this.ComTool.GetBeiZhuName(playerlist[i].shortPlayer.pid,playerlist[i].shortPlayer.name);

                nodePrefab.getChildByName('lb_id').getComponent(cc.Label).string=this.ComTool.GetPid(heroID);
               
                nodePrefab.getChildByName('lb_time').getComponent(cc.Label).string=this.ComTool.GetDateYearMonthDayHourMinuteString(playerlist[i].deleteTime);

                nodePrefab.getChildByName('btn_black').pid=heroID;
               
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
        if('MSG_CLUB_NOBLACK'==msgID){
            this.Click_btn_noblack(backArgList[0]);
        }else if('MSG_CLUB_BLACK'==msgID){
            this.Click_btn_black(backArgList[0]);
        }
    },
    click_btn_black_list:function(){
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
    Click_btn_noblack:function(btnNode){
        let self = this;
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pid=btnNode.pid;
        app.NetManager().SendPack('club.CClubBanPlayerDelete',sendPack,function(serverPack){
            btnNode.parent.destroy();
        },function(error){
            
        });
    },
    Click_btn_black:function(btnNode){
        let self = this;
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pid=btnNode.pid;
        app.NetManager().SendPack('club.CClubBanPlayerAdd',sendPack,function(serverPack){
            btnNode.parent.destroy();
        },function(error){
            
        });
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

        }else if(btnName=='btn_noblack'){

            this.SetWaitForConfirm('MSG_CLUB_NOBLACK',this.ShareDefine.Confirm,[btnNode],[btnNode]);

            //this.Click_btn_noblack(btnNode);
        }else if(btnName=='btn_black'){
            this.SetWaitForConfirm('MSG_CLUB_BLACK',this.ShareDefine.Confirm,[btnNode],[btnNode]);
            //his.Click_btn_black(btnNode);
        }
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
