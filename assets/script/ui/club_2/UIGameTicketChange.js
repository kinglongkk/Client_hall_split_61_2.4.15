/*
    UIMessage 模态消息界面
*/

var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
        lb_GameTicket:cc.Label,
        editbox:cc.EditBox,
    },

    //初始化
    OnCreateInit:function(){

    },

    //---------显示函数--------------------
    OnShow:function(data,opClubId,clubId,unionId){
        this.data = data;
        this.opClubId = opClubId;
        this.clubId = clubId;
        this.unionId = unionId;
        let sendPack = {};
        sendPack.clubId = opClubId;
        let sendPackName = "club.CClubGetGameTicketGift";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
            self.lb_GameTicket.string = serverPack;
        }, function(){

        });
        this.editbox.string = "1";
        let headImageUrl = data.iconUrl;
        if(headImageUrl){
            app.WeChatManager().InitHeroHeadImage(data.pid, headImageUrl);
            let WeChatHeadImage = this.node.getChildByName('head').getComponent("WeChatHeadImage");
            WeChatHeadImage.OnLoad();
            WeChatHeadImage.ShowHeroHead(data.pid,headImageUrl);
        }
        this.node.getChildByName("lb_user").getComponent(cc.Label).string = data.name + "（"+data.pid+"）";
    },
    OnClick:function(btnName, btnNode){
        if('btn_close'==btnName){
            this.CloseForm();
        }else if ('btn_add'==btnName) {
            if (parseInt(this.editbox.string) >= parseInt(this.lb_GameTicket.string)) {
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)+1;
        }else if ('btn_subtract'==btnName) {
            if (parseInt(this.editbox.string) == 0) {
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)-1;
        }else if ('btn_sure'==btnName) {
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.opClubId = this.opClubId;
            sendPack.opPid = this.data.pid;
            sendPack.value = parseInt(this.editbox.string);
            let sendPackName = "club.CClubGameTicketChange";
            let self = this;
            app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                //刷新列表
                self.lb_GameTicket.string = serverPack.execPidCurValue;
                app.SysNotifyManager().ShowSysMsg("赠送成功", [], 3);
            }, function(){

            });
        }else if(btnName == "btn_help"){
            btnNode.getChildByName("img_help").active = !btnNode.getChildByName("img_help").active;
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
        
    },
});
