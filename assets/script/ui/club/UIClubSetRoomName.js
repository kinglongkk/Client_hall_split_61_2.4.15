var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    OnCreateInit: function () {

    },
    OnShow: function (data) {
        this.data = data;
        this.node.getChildByName("PLEditBox").getComponent(cc.EditBox).string = "";
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_sure"){
            let roomNameStr = this.node.getChildByName("PLEditBox").getComponent(cc.EditBox).string;
            if(roomNameStr==""){
                app.SysNotifyManager().ShowSysMsg("请输入你所要定义的玩法名称",[],3);
                return;
            }
            let gameId = app.ShareDefine().GametTypeNameDict[this.data.gameType.toUpperCase()];
            this.data.bRoomConfigure.gameType = gameId;
            this.data.bRoomConfigure.roomName = roomNameStr;
            let self = this;
            app.NetManager().SendPack("club.CClubCreateRoom", this.data.bRoomConfigure, function(event){
                console.log("修改房间玩法名称成功");
                self.CloseForm();
            }, function(event){
                console.log("修改房间玩法名称失败");
            });
        }else if(btnName == "btn_close"){
            this.CloseForm();
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },
});
