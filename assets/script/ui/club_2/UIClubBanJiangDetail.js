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

    OnShow:function(serverPack, clubId, unionId){

    	this.clubId = clubId;
        this.unionId = unionId;
        
        this.UpdateRight(serverPack);

    },
    UpdateRight:function(serverPack){
        let right=this.node.getChildByName("right");
        let layout=right.getChildByName("rankScrollView").getChildByName("view").getChildByName("content");
        layout.removeAllChildren();
        if(serverPack.length==0){
            return;
        }
        let demo=right.getChildByName("demo");
        for(let i=0;i<serverPack.length;i++){
                let addNode=cc.instantiate(demo);

                addNode.getChildByName("lb_time").getComponent(cc.Label).string= app.ComTool().GetDateYearMonthDayString(serverPack[i].awardTime);

                addNode.getChildByName("lb_jingjisai").getComponent(cc.Label).string=serverPack[i].clubName;
                addNode.getChildByName("lb_name").getComponent(cc.Label).string=serverPack[i].clubSign;
                addNode.getChildByName("lb_haoka").getComponent(cc.Label).string=serverPack[i].consume;


                addNode.getChildByName("lb_dayingjia").getComponent(cc.Label).string=serverPack[i].winner;

                addNode.getChildByName("lb_jifen").getComponent(cc.Label).string=serverPack[i].promotionShareValue;
                addNode.getChildByName("lb_zongjifen").getComponent(cc.Label).string=serverPack[i].zhongZhiTotalPoint;
                addNode.getChildByName("lb_lastjifen").getComponent(cc.Label).string=serverPack[i].zhongZhiFinalTotalPoint;

                addNode.active=true;
                layout.addChild(addNode);
           
            
        }
    },
   
 
   
    OnClose:function(){
        this.node.getChildByName("right").getChildByName("rankScrollView").getChildByName("view").getChildByName("content").removeAllChildren();
        layout.removeAllChildren();
    },
    //---------点击函数---------------------

	OnClick:function(btnName, btnNode){
		if('btn_close'==btnName){
        	this.CloseForm();
        }
        
        else{
			                console.error("OnClick:%s not find", btnName);
		}
	},
    
   
});
