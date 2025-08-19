var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
    	EditBoxID:cc.EditBox,
        btn_add:cc.Node,
    },

    OnCreateInit: function () {
        this.WeChatManager=app.WeChatManager();
        this.NetManager = app.NetManager();
    },

    OnShow: function (unionId, clubId) {
        this.unionId = unionId;
    	this.clubId=clubId;
    	this.EditBoxID.string='';
        this.btn_add.active = false;
        this.node.getChildByName('club').active=false;
    },
    ShowClub:function(data){
        let club=this.node.getChildByName('club');
        club.active=true;
        club.clubId=this.EditBoxID.string;
        club.getChildByName('name').getComponent(cc.Label).string="亲友圈"+data.clubName;
        club.getChildByName('createName').getComponent(cc.Label).string="创建者:"+data.createName;
        
        this.btn_add.active = true;
    },
    click_btn_search:function(){
        let shuru =this.EditBoxID.string;
        if(isNaN(parseInt(shuru)) || !app.ComTool().StrIsNum(shuru)){
            app.SysNotifyManager().ShowSysMsg("请输入纯数字的亲友圈ID", [], 3);
            return;
        }
        let self=this;
        let sendPack={
            "unionId":this.unionId,
            "clubId":this.clubId,
            "clubSign":shuru,
        };
        app.NetManager().SendPack('union.CUnionFindClubSignInfo',sendPack,function(serverPack){
            self.ShowClub(serverPack);
        },function(error){
            
        });
    },
    Click_btn_add:function(){
    	if(this.EditBoxID.string==''){
    		return;
    	}
        let that=this;
        let sendPack={
            "unionId":this.unionId,
            "clubId":this.clubId,
            "opClubId":this.EditBoxID.string,
        };
        sendPack.unionId = this.unionId;
        this.NetManager.SendPack("union.CUnionBanClubAdd", sendPack,function(success){
            that.btn_add.active = false;
            that.ShowSysMsg("添加成功");
            app.Client.OnEvent('OnUnionBanClubReShow', null);
        },function(error){
            
        });
        
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_add"){
            this.Click_btn_add();
        }else if(btnName == "btn_search"){
            this.click_btn_search();
        }else if(btnName == "btn_close"){
            this.CloseForm();
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },

});
