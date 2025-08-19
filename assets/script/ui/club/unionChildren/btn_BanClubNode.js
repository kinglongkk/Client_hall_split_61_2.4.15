var app = require("app");
cc.Class({
    extends: cc.Component,

    properties: {

    },
    onLoad:function(){
        this.ComTool=app.ComTool();
        app.Client.RegEvent("OnUnionBanClubReShow", this.Event_OnUnionBanClubReShow, this);
    },
    InitData:function (clubId, unionId) {
        this.clubId = clubId;
        this.unionId = unionId;
        


        this.GetClubList();
    },
    Event_OnUnionBanClubReShow:function(){
        this.GetClubList();
    },
    GetClubList:function(){
        let sendPack = {};
        sendPack.unionId = this.unionId;
        sendPack.clubId = this.clubId;
        let self = this;
        app.NetManager().SendPack("union.CUnionBanClubList",sendPack, function(serverPack){
            if (serverPack.length > 0) {
                self.UpdateScrollView(serverPack);
            }
        }, function(){
            app.SysNotifyManager().ShowSysMsg("获取黑名单成员列表失败",[],3);
        });
    },
    
    UpdateScrollView:function(serverPack){
    	let memberScrollView = this.node.getChildByName("memberScrollView");
    	let content = memberScrollView.getChildByName("view").getChildByName("content");
    	memberScrollView.getComponent(cc.ScrollView).scrollToTop();
        content.removeAllChildren();
    	let demo = this.node.getChildByName("demo");
    	demo.active = false;
    	for (let i = 0; i < serverPack.length; i++) {
            
    		let child = cc.instantiate(demo);
	        child.getChildByName("lb_clubName").getComponent(cc.Label).string = serverPack[i].name;
	        child.getChildByName("lb_clubSign").getComponent(cc.Label).string = serverPack[i].clubSign;
            
            child.getChildByName("btn_cancelForbidClub").clubId = serverPack[i].clubId;

    		child.active = true;
    		content.addChild(child);
    	}
    },
    
    //控件点击回调
    OnClick_BtnWnd:function(eventTouch, eventData){
        try{
            app.SoundManager().PlaySound("BtnClick");
            let btnNode = eventTouch.currentTarget;
            let btnName = btnNode.name;
            this.OnClick(btnName, btnNode);
        }
        catch (error){
            console.log("OnClick_BtnWnd:"+error.stack);
        }
    },
    OnClick:function(btnName, btnNode){
    	if('btn_addClub'==btnName){
            app.FormManager().ShowForm("ui/club/UIBanClubAdd",this.unionId,this.clubId);
        }else if ('btn_cancelForbidClub'==btnName) {
            let sendPack = {};
            sendPack.unionId = this.unionId;
            sendPack.clubId = this.clubId;
            sendPack.opClubId=btnNode.clubId;
            let self = this;
            app.NetManager().SendPack("union.CUnionBanClubDel",sendPack, function(serverPack){
                let memberScrollView = self.node.getChildByName("memberScrollView");
                let content = memberScrollView.getChildByName("view").getChildByName("content");
                memberScrollView.getComponent(cc.ScrollView).scrollToTop();
                content.removeAllChildren();
                self.GetClubList();
                app.SysNotifyManager().ShowSysMsg("成功解除亲友圈",[],3);
            }, function(){
                app.SysNotifyManager().ShowSysMsg("解除亲友圈失败",[],3);
            });
        }
    },
    /**
     * 2次确认点击回调
     * @param curEventType
     * @param curArgList
     */
    SetWaitForConfirm:function(msgID,type,msgArgs=[],cbArgs=[]){
        let ConfirmManager = app.ConfirmManager();
        ConfirmManager.SetWaitForConfirmForm(this.OnConFirm.bind(this), msgID, cbArgs);
        ConfirmManager.ShowConfirm(type, msgID, msgArgs);
    },
    OnConFirm:function(clickType, msgID, cbArgs){
        if('Sure' != clickType){
            return;
        }
    },
});