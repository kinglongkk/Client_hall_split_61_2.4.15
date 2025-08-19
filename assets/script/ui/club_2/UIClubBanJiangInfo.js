var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        
    },

    OnCreateInit: function () {
        
    },
    OnShow: function (serverPack,data,type) {   
        let top=this.node.getChildByName("topTitle");
        top.getChildByName("lb_4").active=type==1;
        top.getChildByName("lb_5").active=type==0;
        let dataNode=this.node.getChildByName("data");

        dataNode.getChildByName("lb_paiming").getComponent(cc.Label).string=data.id;
        dataNode.getChildByName("lb_saichang").getComponent(cc.Label).string=data.clubName;
        dataNode.getChildByName("lb_id").getComponent(cc.Label).string=data.ownerPid;
        dataNode.getChildByName("lb_dayingjia").getComponent(cc.Label).string=data.winner;
        dataNode.getChildByName("lb_haoka").getComponent(cc.Label).string=data.consume;

        dataNode.getChildByName("lb_dayingjia").active=type==1;
        dataNode.getChildByName("lb_haoka").active=type==0;

        //显示详细信息
        let demo=this.node.getChildByName("demo");
        let layout=this.node.getChildByName("rankScrollView").getChildByName("view").getChildByName("content");
        layout.removeAllChildren();
        for(let i=0;i<serverPack.length;i++){
            let addNode=cc.instantiate(demo);
            addNode.getChildByName("lb_name").getComponent(cc.Label).string=serverPack[i].configName;
            if(type==1){
                addNode.getChildByName("lb_num").getComponent(cc.Label).string=serverPack[i].winner;
            }else{
                addNode.getChildByName("lb_num").getComponent(cc.Label).string=serverPack[i].consume;
            }
            addNode.active=true;
            layout.addChild(addNode);
        }
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_close"){
            this.CloseForm();
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },

});
