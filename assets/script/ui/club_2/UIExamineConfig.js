/*
    UIMessage 模态消息界面
*/

var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
        examineNode:cc.Node,
        adjustNode:cc.Node,
        clearToggle:cc.Toggle,
        lb_GameTicket:cc.Label,
        editbox:cc.EditBox,
        left_title1:cc.Label,
        left_title2:cc.Label,
        right_title:cc.Label,
    },

    //初始化
    OnCreateInit:function(){

    },

    //---------显示函数--------------------
    OnShow:function(data,clubId,unionId,defaultToggle = "toggle1",isZuoBi=false){
        this.data = data;
        this.clubId = clubId;
        this.unionId = unionId;
        this.isZuoBi=isZuoBi;
        let sendPack = {};
        
        sendPack.clubId = data.clubId;
        sendPack.opPid = data.shortPlayer.pid;



        let sendPackName = "club.CClubGetGameTicketGiftCheat";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
            self.lb_GameTicket.string = "清除比赛券（"+serverPack.gameTicket+"）";
            let lb_2Str ="";
            if(self.isZuoBi==false){
                lb_2Str = "同意重赛后，比赛中纪录的积分将变更"+serverPack.sportsPoint+"为初始状态（0分），是否同意该用户重赛？";
            }else{
                lb_2Str = "裁定作弊后，比赛中纪录的积分将变更"+serverPack.sportsPoint+"为初始状态（0分），是否同意该用户重赛？";
            }
            self.examineNode.getChildByName("lb_2").getComponent(cc.Label).string = lb_2Str;
            self.isminister = serverPack.isminister;
            if (self.isminister == 2) {
                self.clearToggle.isChecked = false;
                self.clearToggle.node.active = false;
                self.node.getChildByName("ToggleContainer").getChildByName("toggle2").active = false;
            }else{
                self.clearToggle.node.active = true;
                self.node.getChildByName("ToggleContainer").getChildByName("toggle2").active = true;
            }
        }, function(){

        });
        if (defaultToggle == "toggle1") {
            this.ShowExamineNode(this.data);
            this.node.getChildByName("ToggleContainer").getChildByName("toggle1").getComponent(cc.Toggle).isChecked = true;
        }else{
            this.ShowAdjustNode(this.data);
            this.node.getChildByName("ToggleContainer").getChildByName("toggle2").getComponent(cc.Toggle).isChecked = true;
        }

        if(this.isZuoBi==false){
            this.left_title1.string="重赛确认";
            this.left_title2.string="重赛确认";
            this.right_title.string="重赛确认";
        }else{
            this.left_title1.string="裁定作弊";
            this.left_title2.string="裁定作弊";
            this.right_title.string="裁定作弊";
        }

    },
    ShowExamineNode:function(data){
        this.examineNode.active = true;
        this.adjustNode.active = false;
        let headImageUrl = data.shortPlayer.iconUrl;
        if(headImageUrl){
            app.WeChatManager().InitHeroHeadImage(data.shortPlayer.pid, headImageUrl);
            let WeChatHeadImage = this.examineNode.getChildByName('head').getComponent("WeChatHeadImage");
            WeChatHeadImage.OnLoad();
            WeChatHeadImage.ShowHeroHead(data.shortPlayer.pid,headImageUrl);
        }
        this.examineNode.getChildByName("lb_user").getComponent(cc.Label).string = data.shortPlayer.name + "（"+data.shortPlayer.pid+"）";
        /*let lb_2Str ="";
        if(this.isZuoBi==false){
            lb_2Str = "同意重赛后，比赛中纪录的积分将变更"+data.sportsPoint+"为初始状态（0分），是否同意该用户重赛？";
        }else{
            lb_2Str = "裁定作弊后，比赛中纪录的积分将变更"+data.sportsPoint+"为初始状态（0分），是否同意该用户重赛？";
        }
        this.examineNode.getChildByName("lb_2").getComponent(cc.Label).string = lb_2Str;*/
    },
    ShowAdjustNode:function(data){
        this.examineNode.active = false;
        this.adjustNode.active = true;
        this.editbox.string = "1";
        this.adjustNode.getChildByName("lb_user").getComponent(cc.Label).string = "给"+data.shortPlayer.name + "（"+data.shortPlayer.pid+"）设置";
    },
    OnClickToggleContainer:function(event){
        console.log("click ToggleContainer");
        let targetName = event.target.name;
        if (targetName == "toggle1") {
            this.ShowExamineNode(this.data);
        }else{
            this.ShowAdjustNode(this.data);
        }
    },
	OnClick:function(btnName, btnNode){
		if('btn_close'==btnName){
        	this.CloseForm();
        }else if ('btn_sure'==btnName) {
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.opClubId = this.data.clubId;
            sendPack.opPid = this.data.shortPlayer.pid;
            sendPack.clearGameTicket = this.clearToggle.isChecked;
            let sendPackName = "Union.CUnionMemberExamineOperateZhongZhi";
            if(this.isZuoBi==true){
                sendPackName = "union.CUnionMemberCheatZhongZhi";
            }
            let self = this;
            app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                //刷新列表
                app.SysNotifyManager().ShowSysMsg("操作成功", [], 3);
                app.Client.OnEvent('UpdateMemberExamineList', {});
                app.Client.OnEvent('ReGetRaceRankInfo',{});
                self.CloseForm();
            }, function(){

            });
        }else if ('btn_add'==btnName) {
            this.editbox.string = parseInt(this.editbox.string)+1;
        }else if ('btn_subtract'==btnName) {
            this.editbox.string = parseInt(this.editbox.string)-1;
        }else if ('btn_AdjustSure'==btnName) {
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.opClubId = this.data.clubId;
            sendPack.opPid = this.data.shortPlayer.pid;
            sendPack.value = parseInt(this.editbox.string);
            let sendPackName = "club.CClubGameTicketChange";
            let self = this;
            app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                //刷新列表
                app.SysNotifyManager().ShowSysMsg("操作成功", [], 3);
                app.Client.OnEvent('UpdateMemberExamineList', {});
                self.CloseForm();
            }, function(){

            });
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
