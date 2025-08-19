var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        editbox:cc.EditBox,
    },
    OnShow: function (data) {
        this.data = data;
        let sendPack = {};
        sendPack.clubId = data.clubId;
        let sendPackName = "club.CClubGetGameTicketGift";
        let self = this;
        this.maxGameTicket = 0;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
            self.maxGameTicket = serverPack;
        }, function(){

        });
        let lb_taotaifen = this.node.getChildByName("lb_taotaifen").getComponent(cc.Label);
        lb_taotaifen.string=this.data.eliminatePoint;
        lb_taotaifen.node.active = true;
        this.editbox.string ="0";
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_sure"){
            //淘汰分
            let percentStr =this.editbox.string;
            if (app.ComTool().StrIsNum(percentStr)) {
                let sendPackHead = app.ClubManager().GetUnionSendPackHead();
                let sendPack = {};
                if (typeof(this.data.pidList) != "undefined") {
                    // sendPack.clubId = this.data.clubId;
                    // sendPack.pidList = this.data.pidList;
                    // sendPack.value = parseFloat(percentStr);
                    // let self = this;
                    // app.NetManager().SendPack("club.CClubEliminatePointChangeMulti",sendPack, function(serverPack){
                    //     app.SysNotifyManager().ShowSysMsg("成功设置淘汰分",[],3);
                    //     app.Client.OnEvent('UpdateChangeAliveNodeData', {});
                    //     self.CloseForm();
                    // }, function(){
                    //     app.SysNotifyManager().ShowSysMsg("设置淘汰分失败",[],3);
                    // });
                    sendPack.clubId = sendPackHead.clubId;
                    sendPack.unionId = sendPackHead.unionId;
                    sendPack.opClubId = this.data.clubId;
                    sendPack.opPidList = this.data.pidList;
                    sendPack.value = parseInt(percentStr);
                    let sendPackName = "club.CClubGameTicketChangeMulti";
                    let self = this;
                    app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                        //刷新列表
                        app.Client.OnEvent('UpdateChangeAliveNodeData', {});
                        app.SysNotifyManager().ShowSysMsg("修改成功", [], 3);
                        self.CloseForm();
                    }, function(){

                    });
                }else{
                    // sendPack.clubId = this.data.clubId;
                    // sendPack.pid = this.data.pid;
                    // sendPack.value = parseFloat(percentStr);
                    // let self = this;
                    // app.NetManager().SendPack("club.CClubEliminatePointChange",sendPack, function(serverPack){
                    //     app.SysNotifyManager().ShowSysMsg("成功设置淘汰分",[],3);
                    //     app.Client.OnEvent('UpdateChangeAliveNodeData', {});
                    //     self.CloseForm();
                    // }, function(){
                    //     app.SysNotifyManager().ShowSysMsg("设置淘汰分失败",[],3);
                    // });
                    sendPack.clubId = sendPackHead.clubId;
                    sendPack.unionId = sendPackHead.unionId;
                    sendPack.opClubId = this.data.clubId;
                    sendPack.opPid = this.data.pid;
                    sendPack.value = parseInt(percentStr);
                    let sendPackName = "club.CClubGameTicketChange";
                    let self = this;
                    app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                        //刷新列表
                        app.Client.OnEvent('UpdateChangeAliveNodeData', {});
                        app.SysNotifyManager().ShowSysMsg("修改成功", [], 3);
                        self.CloseForm();
                    }, function(){

                    });
                }
                
            }else{
                app.SysNotifyManager().ShowSysMsg("请输入纯数字",[],3);
            }
        }else if(btnName == "btn_help"){
            btnNode.getChildByName("img_help").active = !btnNode.getChildByName("img_help").active;
        }else if(btnName == "btn_close"){
            this.CloseForm();
        }else if ('btn_add'==btnName) {
            if (parseInt(this.editbox.string) >= this.maxGameTicket) {
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)+1;
        }else if ('btn_subtract'==btnName) {
            if (parseInt(this.editbox.string) == 0) {
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)-1;
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },
    OnEditBoxEnd:function(event){
        let percentStr =event.node.getComponent(cc.EditBox).string;
        if (app.ComTool().StrIsNum(percentStr)) {
            // let value = parseFloat(percentStr);
            // if (value > 0) {
            //     event.node.getComponent(cc.EditBox).string = "-"+event.node.getComponent(cc.EditBox).string;
            // }
        }else{
            event.node.getComponent(cc.EditBox).string = "";
            app.SysNotifyManager().ShowSysMsg("请输入纯数字",[],3);
        }
    },
});
