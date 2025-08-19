var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        
    },
    OnShow: function (clubId,unionId) {
       this.clubId=clubId;
       this.unionId=unionId;

       let toggle=this.node.getChildByName("Toggle");
       toggle.getComponent(cc.Toggle).isChecked=false;
    },
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_close"){
            this.CloseForm();
        }else if(btnName=="btn_sure"){
            let toggle=this.node.getChildByName("Toggle");
            let isCheck=toggle.getComponent(cc.Toggle).isChecked;
            
                let sendPackName = "union.CUnionAwardZhongZhi";
                let self = this;
                let sendPack = {};
                sendPack.clubId = this.clubId;
                sendPack.unionId = this.unionId;
                app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                    app.Client.OnEvent('UpdateMemberExamineList2', {});
                    app.SysNotifyManager().ShowSysMsg("操作成功", [], 3);
                    if(isCheck==true){
                        app.FormManager().ShowForm('ui/club_2/UIClubShengCunRenWu',self.clubId,self.unionId);
                        self.CloseForm();
                    }else{
                        self.CloseForm();
                    }
                }, function(){
                    app.SysNotifyManager().ShowSysMsg("操作失败", [], 3);
                });


        }else if(btnName=="btn_shengcun"){
            app.FormManager().ShowForm('ui/club_2/UIClubShengCunRenWu',this.clubId,this.unionId);
        }
    },
   
});
