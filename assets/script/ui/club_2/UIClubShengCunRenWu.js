var app = require("app");
cc.Class({
    extends: require("BaseForm"),

    properties: {
        chazhaoEditBox:cc.EditBox,
    },

    OnCreateInit: function () {
        this.rankScrollView = this.node.getChildByName("rankScrollView");
        //this.rankScrollView.getComponent(cc.ScrollView).node.on('scroll-to-bottom',this.GetNextPage,this);
    },
    OnShow: function (clubId,unionId) {
        this.chazhaoEditBox.string="";
        this.opClubId = clubId;
        this.unionId=unionId;
        this.curPage = 1;
        this.GetUnionAlivePointList(true);
    },
    GetNextPage:function(){
        this.curPage++;
        this.GetUnionAlivePointList(false);
    },
    GetUnionAlivePointList:function(isRefresh){
        let sendPack = {};
        sendPack.clubId = this.opClubId;
        sendPack.unionId = this.unionId;
        sendPack.query = this.chazhaoEditBox.string;
        sendPack.pageNum = this.curPage;
        sendPack.type = 0;  //固定获取所有
        let self = this;
        app.NetManager().SendPack("union.CUnionGetAlivePointList",sendPack, function(serverPack){
            self.UpdateScrollView(serverPack, isRefresh);
        }, function(){

        });
    },
    UpdateScrollView:function(serverPack, isRefresh){
        let roomScrollView = this.node.getChildByName("mark");
        let content = this.rankScrollView.getChildByName("view").getChildByName("content");
        if (isRefresh) {
            this.rankScrollView.getComponent(cc.ScrollView).scrollToTop();
            this.DestroyAllChildren(content);
        }
        let demo = this.node.getChildByName("demo");
        demo.active = false;
        for (let i = 0; i < serverPack.length; i++) {
            let child = cc.instantiate(demo);
            if (i%2 == 0) {
                child.getComponent(cc.Sprite).enabled = false;
            }else{
                child.getComponent(cc.Sprite).enabled = true;
            }
            child.shortPlayer = serverPack[i].shortPlayer;

            child.getChildByName("lb_name").getComponent(cc.Label).string = serverPack[i].clubName;
            child.getChildByName("lb_id").getComponent(cc.Label).string = serverPack[i].clubSign;
            child.getChildByName("lb_id").playerID=serverPack[i].shortPlayer.pid;
            child.getChildByName("lb_jifen").getComponent(cc.Label).string = serverPack[i].zhongZhiTotalPoint;

            if(serverPack[i].alivePointStatus==true){
                child.edit_jifen=serverPack[i].alivePoint;  //通过这两个来比对是否修改过
                child.getChildByName("edit_jifen").getComponent(cc.EditBox).string = serverPack[i].alivePoint;
            }else{
                child.edit_jifen='';
            }

            child.getChildByName("lb_taotaifen").getComponent(cc.Label).string = serverPack[i].eliminatePoint;

            if(serverPack[i].status==1){
                child.getChildByName("zhuangtai").getChildByName("ing").active=true;
                child.getChildByName("zhuangtai").getChildByName("lost").active=false;
                child.getChildByName("zhuangtai").getChildByName("off").active=false;
            }else if(serverPack[i].status==2){
                child.getChildByName("zhuangtai").getChildByName("ing").active=false;
                child.getChildByName("zhuangtai").getChildByName("lost").active=true;
                child.getChildByName("zhuangtai").getChildByName("off").active=false;
            }else{
                child.getChildByName("zhuangtai").getChildByName("ing").active=false;
                child.getChildByName("zhuangtai").getChildByName("lost").active=false;
                child.getChildByName("zhuangtai").getChildByName("off").active=true;
            }

            child.getChildByName("edit_bisaiquan").getComponent(cc.EditBox).string = serverPack[i].gameTicket;


            child.clubID=serverPack[i].clubId;

            child.edit_bisaiquan=serverPack[i].gameTicket; //通过这两个来比对是否修改过

            child.active = true;
            content.addChild(child);
        }
    },
    FaBu:function(){
        let content = this.rankScrollView.getChildByName("view").getChildByName("content");
        let sendPack = {};
        sendPack.clubId = this.opClubId;
        sendPack.unionId = this.unionId;
        let changeList=[];
        for(let i=0;i<content.children.length;i++){
            let data=content.children[i];
            if(data.edit_jifen!= data.getChildByName("edit_jifen").getComponent(cc.EditBox).string || data.edit_bisaiquan!=data.getChildByName("edit_bisaiquan").getComponent(cc.EditBox).string){
                //被修改过
                let playerID=data.getChildByName("lb_id").playerID;
                let gameTicketCirculation=data.getChildByName("edit_bisaiquan").getComponent(cc.EditBox).string;
                let alivePoint=data.getChildByName("edit_jifen").getComponent(cc.EditBox).string;
                /*if(alivePoint==''){
                    alivePoint=0;
                }*/
                let alivePointStatus=0;
                if(alivePoint!=''){
                    alivePointStatus=1;
                }
                changeList.push({"clubID":data.clubID,"playerID":playerID,"gameTicketCirculation":gameTicketCirculation,"alivePoint":alivePoint,"alivePointStatus":alivePointStatus});
                data.edit_jifen= data.getChildByName("edit_jifen").getComponent(cc.EditBox).string; //标记成新的值，防止下次再被抛给服务端
                data.edit_bisaiquan=data.getChildByName("edit_bisaiquan").getComponent(cc.EditBox).string;//标记成新的值，防止下次再被抛给服务端
            }
        }
        if(changeList.length==0){
            app.SysNotifyManager().ShowSysMsg("未做改变", [], 3);
            return;
        }
        sendPack.changeList=changeList;
        let self = this;
        app.NetManager().SendPack("union.CUnionChangeAlivePointList",sendPack, function(serverPack){
           app.SysNotifyManager().ShowSysMsg("修改成功", [], 3);
           self.curPage=1;
           self.GetUnionAlivePointList(true);
        }, function(){
            app.SysNotifyManager().ShowSysMsg("修改失败", [], 3);
        });
    },
    // //**是否是管理,不是为null,是为1，2为创建者
   
    OnClick:function(btnName, btnNode){
        if(btnName == "btn_close"){
            this.CloseForm();
        }else if ("btn_search" == btnName) {
            this.curPage = 1;
            this.GetUnionAlivePointList(true);
        }else if ("btn_jilu" == btnName) {
           //打开记录UI
           let clubData=app.ClubManager().GetClubDataByClubID(this.opClubId);
           app.FormManager().ShowForm('ui/club/UIClubUserMessageNew',this.opClubId,this.unionId,clubData.unionName,clubData.unionSign,app.HeroManager().GetHeroID(),this.opClubId,'btn_ChooseType_8');
        }else if ("btn_fabu" == btnName) {
           this.FaBu();
        }else{
                            console.error("OnClick(%s) not find", btnName);
        }
    },

});
