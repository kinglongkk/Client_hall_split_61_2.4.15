var app = require("app");
cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    onLoad:function(){
        this.ComTool=app.ComTool();
    },
    InitData:function (clubId, unionId, unionPostType) {
        this.clubId = clubId;
        this.unionId = unionId;
        this.unionPostType = unionPostType;
        let btn_default = this.node.getChildByName("topBtnNode").getChildByName("btn_ForbidTable");
        this.OnClick(btn_default.name,btn_default);
    },
    ClickTopBtn:function(clickName){
    	let topBtnNode = this.node.getChildByName("topBtnNode");
        let allTopBtn = [];
        for (let i = 0; i < topBtnNode.children.length; i++) {
            allTopBtn.push(topBtnNode.children[i]);
        }
        for (let i = 0; i < allTopBtn.length; i++) {
            if (allTopBtn[i].name == clickName) {
                allTopBtn[i].getChildByName("img_off").active = false;
                allTopBtn[i].getChildByName("lb_off").active = false;
                allTopBtn[i].getChildByName("img_on").active = true;
                allTopBtn[i].getChildByName("lb_on").active = true;
            }else{
                allTopBtn[i].getChildByName("img_off").active = true;
                allTopBtn[i].getChildByName("lb_off").active = true;
                allTopBtn[i].getChildByName("img_on").active = false;
                allTopBtn[i].getChildByName("lb_on").active = false;
            }
        }
        let allButtomBtn = [];
        allButtomBtn.push(this.node.getChildByName("btn_ForbidTableNode"));
        allButtomBtn.push(this.node.getChildByName("btn_ForbidGameNode"));
        allButtomBtn.push(this.node.getChildByName("btn_BanPlayerNode"));
        allButtomBtn.push(this.node.getChildByName("btn_BanClubNode"));
        for (let i = 0; i < allButtomBtn.length; i++) {
            if (allButtomBtn[i].name == clickName + "Node") {
                allButtomBtn[i].active = true;
                allButtomBtn[i].getComponent(allButtomBtn[i].name).InitData(this.clubId, this.unionId, this.unionPostType, this.myisminister, this.unionName, this.unionSign);
            }else{
                allButtomBtn[i].active = false;
            }
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
        if('btn_ForbidTable'==btnName){
            this.ClickTopBtn(btnName);
        }else if('btn_ForbidGame'==btnName){
            this.ClickTopBtn(btnName);
        }else if('btn_BanPlayer'==btnName){
            this.ClickTopBtn(btnName);
        }else if('btn_BanClub'==btnName){
            this.ClickTopBtn(btnName);
        }
    },
});