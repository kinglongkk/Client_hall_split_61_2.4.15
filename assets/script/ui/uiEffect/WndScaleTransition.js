/*
 WndScaleTransition 数字label渐变
 */

cc.Class({
	extends: require("BaseComponent"),

	properties: {
		transTime:0.1,

		backEvents: {
			default: [],
			type: cc.Component.EventHandler,
		}
	},

	// use this for initialization
	onLoad: function () {
		this.JS_Name = this.node.name + "_WndScaleTransition";
		this.startScale = this.node.getScale();
	},

	SetWndScale: function (endScale, posID) {
		// 停止可能正在运行的缓动
		// cc.tween().stopAllByTarget(this.node);
		// 或者，如果只停止这个特定的缓动，您需要保存缓动实例
		if (this._scaleTween) {
			this._scaleTween.stop();
		}
		
		this.node.WndUserData = posID;
	
		// 创建一个包含所有缩放步骤的 cc.Tween
		this._scaleTween = cc.tween(this.node)
			.to(this.transTime, { scale: endScale })  // 缩放到endScale
			.to(this.transTime, { scale: this.startScale }) // 再缩放到startScale
			.call(() => {
				this.OnScaleEnd(); // 调用回调函数
			})
			.start();
	},

	OnScaleEnd:function(sender){

		cc.Component.EventHandler.emitEvents(this.backEvents, sender.WndUserData);
	},
});
