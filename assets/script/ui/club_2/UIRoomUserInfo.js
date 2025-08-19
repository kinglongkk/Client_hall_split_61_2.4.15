var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        sp_head:cc.Sprite,
       
    },

    OnCreateInit: function () {
       this.WeChatManager = app.WeChatManager();
    },
    
    OnShow: function (userdata) {
        let touxiang=this.node.getChildByName('btn_head');
        this.WeChatManager.InitHeroHeadImage(userdata.pid, userdata.headImageUrl);
        let WeChatHeadImage=touxiang.getComponent("WeChatHeadImage");
        WeChatHeadImage.OnLoad();
        WeChatHeadImage.ShowHeroHead(userdata.pid,userdata.headImageUrl);

        this.node.getChildByName("lb_name").getComponent(cc.Label).string="昵称："+userdata.userName;
        this.node.getChildByName("lb_id").getComponent(cc.Label).string="账号："+userdata.pid;
        this.node.getChildByName("lb_clubsign").getComponent(cc.Label).string="竞技赛场账号："+userdata.cLubSign;
        this.node.getChildByName("lb_clubname").getComponent(cc.Label).string="所属竞技赛场："+userdata.clubName;

    },
    OnClick:function(btnName, btnNode){
        this.CloseForm();
    },
});
