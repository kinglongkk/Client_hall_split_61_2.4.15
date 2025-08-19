var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    OnCreateInit: function () {

    },
    OnShow: function (data) {
        //this.data = data;
            //区间
            //this.node.getChildByName("PercentEditBox").getComponent(cc.EditBox).string = "";
            //this.node.getChildByName("PercentEditBox2").getComponent(cc.EditBox).string ="";
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
        if(btnName == "btn_sure"){
			//zhaozw 数值校验  最少时间 最多时间  桌子数量
            this.node.active = false;
        }else if(btnName == "btn_close"){
            this.node.active = false;
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },

});
