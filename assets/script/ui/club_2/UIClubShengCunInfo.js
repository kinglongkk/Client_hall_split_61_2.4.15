var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        
    },

    OnCreateInit: function () {
        
    },
    OnShow: function (clubId,unionId,serverPack) {
        this.opClubId = clubId;
        this.unionId=unionId;
        this.UpdateData(serverPack);
    },
    UpdateData:function(serverPack){
        let info=this.node.getChildByName("info");
        info.getChildByName("time").getChildByName("lb").getComponent(cc.Label).string=app.ComTool().GetDateYearMonthDayHourMinuteString(serverPack.releaseTime);
        if(serverPack.alivePointStatus==1){
            info.getChildByName("yaoqiu").getChildByName("lb").getComponent(cc.Label).string=serverPack.alivePoint;
        }else{
            info.getChildByName("yaoqiu").getChildByName("lb").getComponent(cc.Label).string="未发布";
        }
        info.getChildByName("bisaiquan").getChildByName("lb").getComponent(cc.Label).string=serverPack.gameTicket;
       
    },
    // //**是否是管理,不是为null,是为1，2为创建者
   
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_close"){
            this.CloseForm();
        }else if ("btn_jilu" == btnName) {
           //打开记录UI
           let clubData=app.ClubManager().GetClubDataByClubID(this.opClubId);
           app.FormManager().ShowForm('ui/club/UIClubUserMessageNew',this.opClubId,this.unionId,clubData.unionName,clubData.unionSign,app.HeroManager().GetHeroID(),this.opClubId,'btn_ChooseType_8');
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },

});
