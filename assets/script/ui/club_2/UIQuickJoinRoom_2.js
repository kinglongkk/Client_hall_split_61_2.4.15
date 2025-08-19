var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    OnCreateInit: function() {
        this.NetManager = app.NetManager();
        this.FormManager=app.FormManager();
        this.NetManager.RegNetPack('SUnion_QuickJoinZhongZhi',this.UpdateScrollView,this);
        // let mark = this.node.getChildByName("mark").getComponent(cc.ScrollView);
        // mark.node.on('scroll-to-bottom',this.GetNextPage,this);
    },
    OnShow: function(clubId, unionId) {
        let mark = this.node.getChildByName("mark");
        let content = mark.getChildByName("layout");
        mark.getComponent(cc.ScrollView).scrollToTop();
        this.DestroyAllChildren(content);
        this.clubId = clubId;
        this.unionId = unionId;
        this.GetRoomCfgList();
        let mainComp=this.FormManager.GetFormComponentByFormName("ui/club_2/UIClubMain_2");
        if(mainComp){
            mainComp.HideRight();
        }

        this.schedule(this.GetRoomCfgList,6);
    },
    MyUnionMyWanFaArray: function() {
        let unionMyWanFa = [];
        if (this.unionId > 0) {
            this.unionMyWanFa = localStorage.getItem("mywanfa_" + this.unionId + "_" + this.clubId);
            if (typeof(this.unionMyWanFa) != "undefined" && this.unionMyWanFa != "" && this.unionMyWanFa != null) {
                unionMyWanFa = this.unionMyWanFa.split(",");
            }
        }
        return unionMyWanFa;
    },
    GetRoomCfgList: function() {
        
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId = this.unionId;
        let self = this;
        let packName = "union.CUnionQuickJoinZhongZhi";
        app.NetManager().SendPack(packName, sendPack, function(serverPack) {
            
        }, function() {

        });
    },
    
    SortByTagId: function(a, b) {
        return b.tagId - a.tagId;
    },
    UpdateScrollView: function(data) {



        let serverPack=data.roomList;
        let mark = this.node.getChildByName("mark");
        let content = mark.getChildByName("layout");
        mark.getComponent(cc.ScrollView).scrollToTop();
        this.DestroyAllChildren(content);
        let demo = this.node.getChildByName("demo");
        demo.active = false;
        //let unionMyWanFa = this.MyUnionMyWanFaArray();
        //serverPack.sort(this.SortByTagId);
        for (let i = 0; i < serverPack.length; i++) {
            let child = cc.instantiate(demo);
            child.tagId = serverPack[i].tagId;
            child.roomKey = serverPack[i].roomKey;
            child.gameId = serverPack[i].gameId;
            if(serverPack[i].roomName!=""){
                child.getChildByName("btn_roomCfg").getChildByName("lb_roomName").getComponent(cc.Label).string = serverPack[i].roomName;
            }else{
                child.getChildByName("btn_roomCfg").getChildByName("lb_roomName").getComponent(cc.Label).string = app.ShareDefine().GametTypeID2Name[serverPack[i].gameId];
            }

            child.getChildByName("btn_roomCfg").getChildByName("lb_gameName").getComponent(cc.Label).string = app.ShareDefine().GametTypeID2Name[serverPack[i].gameId];


            child.getChildByName("btn_roomCfg").getChildByName("lb_menkan").getComponent(cc.Label).string = "门槛:"+serverPack[i].roomSportsThreshold;

            child.getChildByName("btn_roomCfg").getChildByName("lb_playerNum").getComponent(cc.Label).string = serverPack[i].seatPlayerNum+"/"+serverPack[i].playerNum;

            let roomInfoStr = serverPack[i].setId+"局-"+serverPack[i].playerNum+"人,";


            let wanfaStr = app.RoomCfgManager().WanFa(serverPack[i].gameId,serverPack[i].roomCfg);

            
            child.getChildByName("btn_roomCfg").getChildByName("lb_roomInfo").getComponent(cc.Label).string = roomInfoStr+wanfaStr.substr(0,120);

            
            //child.getChildByName("btn_roomCfg").getChildByName("lb_tagid").getComponent(cc.Label).string = serverPack[i].tagId;
            if (typeof(serverPack[i]["password"]) != "undefined") {
                if (serverPack[i]["password"] != "") {
                    child.getChildByName("btn_roomCfg").getChildByName("tip_lock").active = true;
                } else {
                    child.getChildByName("btn_roomCfg").getChildByName("tip_lock").active = false;
                }
            } else {
                child.getChildByName("btn_roomCfg").getChildByName("tip_lock").active = false;
            }

            child.active = true;
            content.addChild(child);
        }
        //content.sortAllChildren();
    },
    OnClick: function(btnName, btnNode) {
        if (btnName == "btn_roomCfg") {
            let isPassword = btnNode.getChildByName("tip_lock").active;
            //检查本地是否有密码
            let password = "";
            if (isPassword) {
                password = localStorage.getItem("password_" + this.clubId + "_" + btnNode.parent.tagId);
                if (password == null || typeof(password) == "undefined" || password == "") {
                    //弹出密码框
                    btnNode.roomKey = btnNode.parent.roomKey;
                    btnNode.tagId = btnNode.parent.tagId;
                    btnNode.gameId = btnNode.parent.gameId;
                    this.FormManager.ShowForm('ui/club/UIClubRoomPassword', btnNode, this.clubId);
                    return;
                }
            }

            let gameName = app.ShareDefine().GametTypeID2PinYin[btnNode.parent.gameId].toLowerCase(); //游戏名
            app.Client.JoinRoomCheckSubGame(gameName, btnNode.parent.roomKey, this.clubId, undefined, password, true);
            this.CloseForm();
        } else {
            this.CloseForm();
                            console.error("OnClick(%s) not find", btnName);
        }
    },
    OnClose:function(){
        this.unschedule(this.GetRoomCfgList);
        let mainComp=this.FormManager.GetFormComponentByFormName("ui/club_2/UIClubMain_2");
        if(mainComp){
            mainComp.ShowRight();
        }
    },

});