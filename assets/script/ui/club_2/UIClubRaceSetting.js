/*
    UIMessage 模态消息界面
*/
var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
        list_scrollView:cc.ScrollView,
    	list_layout:cc.Node,
    	list_demo:cc.Node,
    	
    },

    //初始化
    OnCreateInit:function(){
        this.WeChatManager=app.WeChatManager();
        this.NetManager=app.NetManager();
        this.ShareDefine=app.ShareDefine();
    },

    //---------显示函数--------------------
    OnShow:function(clubId, unionId, unionName, unionSign){
        this.list_layout.removeAllChildren();
        let self = this;
        this.unionName=unionName;
        this.unionSign=unionSign;
        this.unionId=unionId;
        this.clubId=clubId;
        let sendpack = {};
        sendpack.unionId = this.unionId;
        sendpack.clubId = this.clubId;
        app.NetManager().SendPack("club.CClubRoomCfgByClubCreate",sendpack, function(serverPack){
            self.ShowDataList(serverPack);
        }, function(){
            app.SysNotifyManager().ShowSysMsg("获取玩法失败",[],3);
        });
    },
    ShowDataList:function(serverPack){
        for(let i=0;i<serverPack.length;i++){
            let data=serverPack[i];
            let nodePrefab = cc.instantiate(this.list_demo);
            let gameName=this.ShareDefine.GametTypeID2Name[data.gameId];
            let roomName=data.bRoomConfigure.roomName;
            let banStatus=data.banStatus;
            let wanfa = app.RoomCfgManager().WanFa(data.gameId,data.bRoomConfigure);

            nodePrefab.getChildByName("lb_gamename").getComponent(cc.Label).string=gameName;
            nodePrefab.getChildByName("lb_roomname").getComponent(cc.Label).string=roomName;
            nodePrefab.getChildByName("lb_wanfa").getComponent(cc.Label).string=wanfa;

            nodePrefab.configId=data.id;

            nodePrefab.getChildByName("btn_off").active=banStatus==1;
            nodePrefab.getChildByName("btn_on").active=banStatus==0;
            nodePrefab.active=true;

            this.list_layout.addChild(nodePrefab);
        }
    },

    SendOp:function(configId,type){
        let self = this;
        let sendpack = {};
        sendpack.unionId = this.unionId;
        sendpack.clubId = this.clubId;
        sendpack.configId=configId;
        sendpack.type=type;
        app.NetManager().SendPack("club.CClubBanRoomConfigOpZhongZhi",sendpack, function(serverPack){
            app.SysNotifyManager().ShowSysMsg("操作成功",[],3);
            app.Client.OnEvent('OnRefreshRoomList',{});
        }, function(){
            app.SysNotifyManager().ShowSysMsg("操作失败",[],3);
        });
    },
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_close'==btnName){
        	this.CloseForm();
        }else if('btn_on'==btnName){
            btnNode.parent.getChildByName('btn_off').active=true;
            btnNode.active=false;
            this.SendOp(btnNode.parent.configId,1);
        }else if('btn_off'==btnName){
            btnNode.parent.getChildByName('btn_on').active=true;
            btnNode.active=false;
            this.SendOp(btnNode.parent.configId,0);
        }else if('btn_userlist'==btnName){
            this.FormManager.ShowForm('ui/club_2/UIClubUserList_2', this.clubId, this.unionId, this.unionName, this.unionSign);
            this.CloseForm();
        }
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
