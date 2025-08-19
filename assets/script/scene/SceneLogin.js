/*
 登陆场景
 */

var app = require("app");

cc.Class({
	extends: require("BaseScene"),

	properties: {
		LabelRes:cc.Label,
	},

	//----------回掉函数------------------
	OnCreate: function () {

		this.FormManager = app.FormManager();
		this.ShareDefine = app.ShareDefine();
		this.WeChatManager = app.WeChatManager();
		this.HeroAccountManager = app.HeroAccountManager();
		this.SDKManager = app.SDKManager();

		if(this.LabelRes){
			this.LabelRes.string = app.ShareDefine().ClientVersion;
		}
	},


	//进入场景
	OnSwithSceneEnd:function(){
		this.FormManager.ShowForm("UILogin");
	},

	OnTouchEnd:function(event){

	},
});
