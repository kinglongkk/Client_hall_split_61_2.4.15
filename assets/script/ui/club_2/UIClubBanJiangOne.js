/*
    UIMessage 模态消息界面
*/
var app = require("app");

cc.Class({
    extends: require("BaseForm"),

    properties: {

    },

    //初始化
    OnCreateInit:function(){
        this.WeChatManager=app.WeChatManager();
        this.NetManager=app.NetManager();
    },

    //---------显示函数--------------------

    OnShow:function(clubId, unionId,opClubId){

    	this.clubId = clubId;
        this.unionId = unionId;
        this.opClubId=opClubId;
        this.GetBanJiang();
    },

    GetBanJiang:function(){
        let self = this;
        let sendPack = {};
        sendPack.clubId = this.clubId;
        sendPack.unionId = this.unionId;
        sendPack.opClubId = this.opClubId;
        
        let right=this.node.getChildByName("right");
        let layout=right.getChildByName("rankScrollView").getChildByName("view").getChildByName("content");
        layout.removeAllChildren();

        app.NetManager().SendPack("union.CUnionAwardRecordByClubZhongZhi",sendPack, function(serverPack){
            self.UpdateRight(serverPack);
            
        }, function(){
            app.SysNotifyManager().ShowSysMsg("获取失败:error01",[],3);
        });
    },
    UpdateRight:function(serverPack){
        let right=this.node.getChildByName("right");
        let layout=right.getChildByName("rankScrollView").getChildByName("view").getChildByName("content");
        if(serverPack.length==0){
            return;
        }
        let demo=right.getChildByName("demo");
        for(let i=0;i<serverPack.length;i++){
            if(serverPack[i].totalFlag==false){
                let addNode=cc.instantiate(demo);

                addNode.getChildByName("lb_paiming").getComponent(cc.Label).string=serverPack[i].id;
                addNode.getChildByName("lb_jingjisai").getComponent(cc.Label).string=serverPack[i].clubName;
                addNode.getChildByName("lb_name").getComponent(cc.Label).string=serverPack[i].clubSign;
                addNode.getChildByName("lb_haoka").getComponent(cc.Label).string=serverPack[i].consume;
                addNode.getChildByName("lb_haoka").detail=serverPack[i];


                addNode.getChildByName("lb_dayingjia").getComponent(cc.Label).string=serverPack[i].winner;
                addNode.getChildByName("lb_dayingjia").detail=serverPack[i];

                addNode.getChildByName("lb_jifen").getComponent(cc.Label).string=serverPack[i].promotionShareValue;
                addNode.getChildByName("lb_zongjifen").getComponent(cc.Label).string=serverPack[i].zhongZhiTotalPoint;
                addNode.getChildByName("lb_lastjifen").getComponent(cc.Label).string=serverPack[i].zhongZhiFinalTotalPoint;
                if(serverPack[i].awardTime>0){
                    addNode.getChildByName("lb_time").getComponent(cc.Label).string=app.ComTool().GetDateYearMonthDayHourMinuteSecondString(serverPack[i].awardTime);
                }else{
                    addNode.getChildByName("lb_time").getComponent(cc.Label).string='暂无';
                }
                addNode.active=true;

                layout.addChild(addNode);
            }else{
                this.UpdateLvDi(serverPack[i]);
            }
            
        }
    },
    UpdateLvDi:function(data){
        let lvdi=this.node.getChildByName("right").getChildByName("lvdi");
        lvdi.getChildByName("lb_jifen_all").getComponent(cc.Label).string=data.promotionShareValue;
        lvdi.getChildByName("lb_haoka_all").getComponent(cc.Label).string=data.consume;
        lvdi.getChildByName("lb_dayingjia_all").getComponent(cc.Label).string=data.winner;
        lvdi.getChildByName("lb_zongjifen_all").getComponent(cc.Label).string=data.zhongZhiTotalPoint;
        lvdi.getChildByName("lb_lastjifen_all").getComponent(cc.Label).string=data.zhongZhiFinalTotalPoint;
        lvdi.active=true;
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
        let self = this;
        if('MSG_CLUB_BANJIANG' == msgID){
                let sendPackName = "club.CClubAwardZhongZhi";
                let self = this;
                let sendPack = {};
                sendPack.clubId = this.clubId;
                sendPack.unionId = this.unionId;
                sendPack.opClubId=this.opClubId;
                app.NetManager().SendPack(sendPackName,sendPack, function(serverPack){
                    self.GetBanJiang();
                    app.SysNotifyManager().ShowSysMsg("操作成功", [], 3);
                }, function(){
                    app.SysNotifyManager().ShowSysMsg("操作失败", [], 3);
                });



        }
    },
    OnClose:function(){
        this.node.getChildByName("right").getChildByName("rankScrollView").getChildByName("view").getChildByName("content").removeAllChildren();
        this.node.getChildByName("right").getChildByName("lvdi").active=false;
    },
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_close'==btnName){
        	this.CloseForm();
        }else if('lb_haoka'==btnName){
            let opClubId=btnNode.detail.clubId;
            let awardNum=btnNode.detail.awardNum;

            let self = this;
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.awardNum=awardNum;
            sendPack.opClubId=opClubId;
            sendPack.type=0;

            app.NetManager().SendPack("union.CUnionAwardRecordDetailZhongZhi",sendPack, function(serverPack){
                app.FormManager().ShowForm("ui/club_2/UIClubBanJiangInfo",serverPack,btnNode.detail,0);
                
            }, function(){
                app.SysNotifyManager().ShowSysMsg("获取失败:error03",[],3);
            });

        }else if('lb_dayingjia'==btnName){
            let opClubId=btnNode.detail.clubId;
            let awardNum=btnNode.detail.awardNum;

            let self = this;
            let sendPack = {};
            sendPack.clubId = this.clubId;
            sendPack.unionId = this.unionId;
            sendPack.opClubId=opClubId;
            sendPack.awardNum=awardNum;
            sendPack.type=1;

            app.NetManager().SendPack("union.CUnionAwardRecordDetailZhongZhi",sendPack, function(serverPack){
                app.FormManager().ShowForm("ui/club_2/UIClubBanJiangInfo",serverPack,btnNode.detail,1);
                
            }, function(){
                app.SysNotifyManager().ShowSysMsg("获取失败:error03",[],3);
            });

        }else if('btn_shengcun'==btnName){
            app.FormManager().ShowForm('ui/club_2/UIClubShengCunRenWu',this.clubId,this.unionId);
        }else if('btn_banjiang'==btnName){
            this.SetWaitForConfirm(
                'MSG_CLUB_BANJIANG',
                this.ShareDefine.ConfirmOK,
                [],
                [],
            );
        }
        
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
