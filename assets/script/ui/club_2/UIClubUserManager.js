/*
    UIMessage 模态消息界面
*/

var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {
        editbox:cc.EditBox,
    },

    //初始化
    OnCreateInit:function(){
        this.ComTool=app.ComTool();
        this.RegEvent("ChangeBeiZhu", this.Event_ChangeBeiZhu);
    },

    //---------显示函数--------------------
    OnShow:function(clubId,unionId,pid,eliminatePoint){
        this.clubId = clubId;
        this.unionId = unionId;
        this.pid = pid;
        this.eliminatePoint=eliminatePoint;
        let sendPack = {};
        sendPack.clubId = clubId;
        sendPack.pid = pid;
        let sendPackName = "club.CClubMemberOpZhongZhiPlayerInfo";
        let self = this;

        this.clubData = app.ClubManager().GetClubDataByClubID(this.clubId);


        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
            let player=serverPack.player;
            self.ShowPlayerInfo(player);
            let isminister=serverPack.isminister;
            self.gameTicket=serverPack.gameTicket;
            self.isminister=isminister;
            self.ShowMinisterData(isminister);
            self.showLastGame(serverPack.lastGame);
            self.node.getChildByName("lb_time").getComponent(cc.Label).string = self.ComTool.GetDateYearMonthDayString(serverPack.joinTime);
        }, function(){

        });
        
    },
    ShowPlayerInfo(data){
        let headImageUrl = data.iconUrl;
        if(headImageUrl){
            app.WeChatManager().InitHeroHeadImage(data.pid, headImageUrl);
            let WeChatHeadImage = this.node.getChildByName('head').getComponent("WeChatHeadImage");
            WeChatHeadImage.OnLoad();
            WeChatHeadImage.ShowHeroHead(data.pid,headImageUrl);
        }
        this.node.getChildByName("btn_xiugai").playerData=data;
        this.node.getChildByName("lb_beizhu").getComponent(cc.Label).string=this.ComTool.GetBeiZhuName(data.pid,data.name,9);
        this.node.getChildByName("lb_user").getComponent(cc.Label).string = data.name + "（"+data.pid+"）";
        //加入时间，joinTime
        this.UserData=data;
    },
    showLastGame:function(lastGame){
        if(lastGame==-1){
            this.node.getChildByName("lb_game").getComponent(cc.Label).string = '暂无';
        }else{
            this.node.getChildByName("lb_game").getComponent(cc.Label).string = this.ShareDefine.GametTypeID2Name[lastGame];
        }
    },
    SaveGuanLi:function(){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pid = this.pid;
        let sendPackName = "club.CClubMemberSavePower";
        let layoutNode=this.node.getChildByName("guanliyuan").getChildByName("layout");

        if(layoutNode.getChildByName("jiaruToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.joinPower=1;
        }else{
            sendPack.joinPower=0;
        }

        if(layoutNode.getChildByName("yaoqingToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.invitePower=1;
        }else{
            sendPack.invitePower=0;
        }

        if(layoutNode.getChildByName("tichuToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.kickPower=1;
        }else{
            sendPack.kickPower=0;
        }

        if(layoutNode.getChildByName("zhanjiToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.recordPower=1;
        }else{
            sendPack.recordPower=0;
        }

        if(layoutNode.getChildByName("wanfaToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.changeCfgPower=1;
        }else{
            sendPack.changeCfgPower=0;
        }

        if(layoutNode.getChildByName("tirenToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.kickTablePower=1;
        }else{
            sendPack.kickTablePower=0;
        }

        if(layoutNode.getChildByName("bisaiToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.matchPower=1;
        }else{
            sendPack.matchPower=0;
        }

        if(layoutNode.getChildByName("gonggaoToggle").getComponent(cc.Toggle).isChecked==true){
            sendPack.edictNoticePower=1;
        }else{
            sendPack.edictNoticePower=0;
        }

        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
             app.SysNotifyManager().ShowSysMsg("保存成功", [], 3);
        }, function(){
             app.SysNotifyManager().ShowSysMsg("保存失败", [], 3);
        });
    },
    SavePuTong:function(){
        let percentStr=parseInt(this.node.getChildByName("putong").getChildByName("EditBox").getComponent(cc.EditBox).string);
        if(percentStr<=0){
            app.SysNotifyManager().ShowSysMsg("请输入比赛券数量", [], 3);
            return;
        }
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId = this.unionId;
        sendPack.opClubId = this.clubId;
        sendPack.opPid = this.pid;

        sendPack.value = percentStr;

        let sendPackName = "club.CClubGameTicketChange";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
            //刷新列表
            app.Client.OnEvent('UpdateChangeAliveNodeData', {});
            app.SysNotifyManager().ShowSysMsg("修改成功", [], 3);
        }, function(){

        });
    },
    GetShouXian:function(){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId=this.unionId;
        sendPack.pid = this.pid;
        let sendPackName = "union.CUnionRoomCfgZhongZhiList";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                self.UpdateShouXianToggle(serverPack);
        }, function(){

        });
    },
    SaveShouXian:function(){
        let select=[];
        let shouxian=this.node.getChildByName('shouxian');
        let layout=shouxian.getChildByName('mask').getChildByName("layout");
        for(let i=0;i<layout.children.length;i++){
            if(layout.children[i].getComponent(cc.Toggle).isChecked){
                select.push(layout.children[i].toggleID);
            }
        }
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pid = this.pid;
        sendPack.unionId=this.unionId;
        sendPack.configIdList=select;
        let sendPackName = "union.CUnionBanCfgAdd";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
             app.SysNotifyManager().ShowSysMsg("保存成功", [], 3);
        }, function(){
             app.SysNotifyManager().ShowSysMsg("保存失败", [], 3);
        });

    },
    UpdateShouXianToggle:function(serverPack){
        let roomCfgItems=serverPack.roomCfgItems;//房间信息
        let configList=serverPack.configList;

        let shouxian=this.node.getChildByName('shouxian');
        let demo=shouxian.getChildByName('mask').getChildByName("demoToggle");
        let layout=shouxian.getChildByName('mask').getChildByName("layout");
        layout.removeAllChildren();
        for(let i=0;i<roomCfgItems.length;i++){
            let addChild=cc.instantiate(demo);
            addChild.getChildByName('lb').getComponent(cc.Label).string=roomCfgItems[i].roomName;
            addChild.getComponent(cc.Toggle).isChecked=configList.indexOf(roomCfgItems[i].id)>-1;
            addChild.toggleID=roomCfgItems[i].id;
            addChild.active=true;
            layout.addChild(addChild);
        }
    },
    GetGuanLiData:function(){
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.pid = this.pid;
        let sendPackName = "club.CClubMemberOpZhongZhi";
        let self = this;
        app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                self.UpdateGuanLiToggle(serverPack);
        }, function(){

        });
    },
    UpdateGuanLiToggle:function(serverPack){
        let powerZhongZhi=serverPack.powerZhongZhi;
        let layoutNode=this.node.getChildByName("guanliyuan").getChildByName("layout");

        layoutNode.getChildByName("jiaruToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.joinPower==1;
        layoutNode.getChildByName("yaoqingToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.invitePower==1;
        layoutNode.getChildByName("tichuToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.kickPower==1;
        layoutNode.getChildByName("zhanjiToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.recordPower==1;

        layoutNode.getChildByName("wanfaToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.changeCfgPower==1;
        layoutNode.getChildByName("tirenToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.kickTablePower==1;
        layoutNode.getChildByName("bisaiToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.matchPower==1;
        layoutNode.getChildByName("gonggaoToggle").getComponent(cc.Toggle).isChecked=powerZhongZhi.edictNoticePower==1;

    },
    QuanXuanGuanLiToggle:function(){
        let isChecked=this.node.getChildByName("guanliyuan").getChildByName("btn_AllToggle").getComponent(cc.Toggle).isChecked;
        let layoutNode=this.node.getChildByName("guanliyuan").getChildByName("layout");
        layoutNode.getChildByName("jiaruToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("yaoqingToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("tichuToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("zhanjiToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("wanfaToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("tirenToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("bisaiToggle").getComponent(cc.Toggle).isChecked=isChecked;
        layoutNode.getChildByName("gonggaoToggle").getComponent(cc.Toggle).isChecked=isChecked;
    },
    ShowMinisterData:function(isminister){

        if(isminister==2){
            //创建者
            this.node.getChildByName('zhiwei').active=false;
            this.node.getChildByName('quanzhu').active=true;
            this.node.getChildByName('guanliyuan').active=false;
            this.node.getChildByName('putong').active=false;
            this.node.getChildByName('shouxian').active=false;

            this.node.getChildByName("btn_delete_user").active=false;

        }else{

            this.node.getChildByName("btn_delete_user").active=this.clubData.kickPower>0;

            this.node.getChildByName('zhiwei').active=true;
            this.node.getChildByName('quanzhu').active=false;
            this.node.getChildByName('putong').active=true;
            this.node.getChildByName('guanliyuan').active=false;
            this.node.getChildByName('shouxian').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_guanli').getChildByName('on').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_putong').getChildByName('on').active=true;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_shouxian').getChildByName('on').active=false;

            this.GetShouXian();
            this.GetGuanLiData();
            this.node.getChildByName('putong').getChildByName('lb_taotaifen').getComponent(cc.Label).string=this.eliminatePoint;
            this.node.getChildByName('putong').getChildByName('EditBox').getComponent(cc.EditBox).string=this.gameTicket;
        }
    },
    Event_ChangeBeiZhu:function(event){
         this.node.getChildByName("lb_beizhu").getComponent(cc.Label).string=this.ComTool.GetNameByIndex(event.name,6);
    },
    ClickTab:function(btnName){
        
        if(btnName=='btn_guanli'){
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_guanli').getChildByName('on').active=true;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_putong').getChildByName('on').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_shouxian').getChildByName('on').active=false;

            this.node.getChildByName('guanliyuan').active=true;
            this.node.getChildByName('putong').active=false;
            this.node.getChildByName('shouxian').active=false;
        }else if(btnName=='btn_putong'){
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_guanli').getChildByName('on').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_putong').getChildByName('on').active=true;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_shouxian').getChildByName('on').active=false;

            this.node.getChildByName('guanliyuan').active=false;
            this.node.getChildByName('putong').active=true;
            this.node.getChildByName('shouxian').active=false;
        }else if(btnName=='btn_shouxian'){
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_guanli').getChildByName('on').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_putong').getChildByName('on').active=false;
            this.node.getChildByName('zhiwei').getChildByName('layout').getChildByName('btn_shouxian').getChildByName('on').active=true;


            this.node.getChildByName('guanliyuan').active=false;
            this.node.getChildByName('putong').active=false;
            this.node.getChildByName('shouxian').active=true;
        }else if(btnName=="btn_AllToggle"){
            this.QuanXuanGuanLiToggle();
        }
    },
    BeiZhu:function(event){
        this.FormManager.ShowForm("UIUserBeiZhu",this.clubId,event.playerData);
    },
    OnClick:function(btnName, btnNode){
        if('btn_close'==btnName){
            this.CloseForm();
        }else if(btnName=="btn_guanli" || btnName=='btn_putong' || btnName=='btn_shouxian'){
            this.ClickTab(btnName);
        }else if(btnName=='btn_sure_guanli'){
            this.SaveGuanLi();
        }else if(btnName=='btn_sure_shouxian'){
            this.SaveShouXian();
        }else if(btnName=='btn_sure_putong'){
            this.SavePuTong();
        }else if(btnName=='btn_help_putong'){
            btnNode.getChildByName("help").active=!btnNode.getChildByName("help").active;
        }
        else if(btnName=="btn_delete_user"){
            let data = {};
            data.clubId = this.clubId;
            data.pid = this.UserData.pid;
            data.kickState = app.ClubManager().Enum_Kick;
            let name =this.UserData.name;

            this.SetWaitForConfirm('MSG_CLUB_KICKPlayer',this.ShareDefine.Confirm,[name],[data]);
        }
        else if ('btn_add'==btnName) {
            if (this.editbox.string=='' || this.editbox.string==0) {
                this.editbox.string =1;
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)+1;
        }else if(btnName=="btn_xiugai"){
            this.BeiZhu(btnNode);
        }
        else if ('btn_subtract'==btnName) {
            if (parseInt(this.editbox.string) == 0) {
                return;
            }
            this.editbox.string = parseInt(this.editbox.string)-1;
        }else if ('btn_sure'==btnName) {
            if (this.editbox.string=='') {
                app.SysNotifyManager().ShowSysMsg("请输入入场券数量", [], 3);
                return;
            }
            if (parseInt(this.editbox.string) == 0) {
                app.SysNotifyManager().ShowSysMsg("请输入入场券数量", [], 3);
                return;
            }
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.opClubId = this.opClubId;
            sendPack.opPid = this.data.pid;
            sendPack.value = parseInt(this.editbox.string);
            let sendPackName = "club.CClubGameTicketChange";
            let self = this;
            app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                //刷新列表
                app.SysNotifyManager().ShowSysMsg("赠送成功", [], 3);
            }, function(){

            });
        }else if(btnName == "btn_help"){
            btnNode.getChildByName("img_help").active = !btnNode.getChildByName("img_help").active;
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
        if('MSG_CLUB_KICKPlayer' == msgID){
             let data = backArgList[0];
            app.ClubManager().SendPlayerStateChange(data.clubId,data.pid,data.kickState);
            this.CloseForm();
        }
    },
});
