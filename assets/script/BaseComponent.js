/*
    自定义基础组件类
*/
var app = require("app");
let ShareDefine = require('ShareDefine').GetModel();
var BaseComponent = cc.Class({

    extends: cc.Component,

    //组件可以在编辑器上显示的属性
    properties: {
        "JS_Name":{
            "default":"BaseComponent",
            "visible": false
        },
    },
    //是否开发者模式
    IsDevelopment:function(){
        return ShareDefine.IsDevelopment
    },

    Log:function(...argList){
        if(this.IsDevelopment()){
            //第一个默认是字符串加上文件标示
            argList[0] = this.JS_Name + "\t" + argList[0];
            cc.log.apply(null, argList)
        }
    },

	//网络通信log
	NetLog:function(...argList){
		if(this.IsDevelopment()){
			argList[0] = this.JS_Name + "\t" + argList[0];
			cc.log.apply(null, argList)
		}
	},

    SysLog:function(...argList){
        //第一个默认是字符串加上文件标示
        argList[0] = this.JS_Name + "\t" + argList[0];
        cc.log.apply(null, argList)
    },

    WarnLog:function(...argList){
        if(this.IsDevelopment()){
            //第一个默认是字符串加上文件标示
            argList[0] = this.JS_Name + "\t" + argList[0];
            cc.warn.apply(null, argList)
        }
    },

    ErrLog:function(...argList){
        //第一个默认是字符串加上文件标示
        argList[0] = this.JS_Name + "\t" + argList[0];
        cc.error.apply(null, argList)
    },

    //addChild后调用
    onLoad:function(){
        this.OnLoad();
    },

    //载入调用
    OnLoad:function(){

    },

    OnUpdate: function () {

    },
    
    //手动释放内存
    DestroyAllChildren:function(node){
        let i=node.children.length-1;
        for(;i>=0;i--) {
            let child=node.children[i];
            child.removeFromParent();
            child.destroy();
        }
        /*node.destroyAllChildren();
        node.removeAllChildren();*/
    },
    
    SetNodeImageByFilePath:function(node,filePath,isHideFirst=false){
        let nodeSprite = node.getComponent(cc.Sprite);
        if(!nodeSprite){
            this.ErrLog('SetNodeImageByFilePath error not cc.Sprite');
            return;
        }
        let that = this;
        return app.ControlManager().CreateLoadPromise(filePath, cc.SpriteFrame)
            .then(function(spriteFrame){
                if(!spriteFrame){
                    that.ErrLog("SetNodeImageByFilePath load spriteFrame fail filePath : ", filePath);
                    return false
                }
                // 检查对象是否仍然有效，防止_renderFlag错误
                if(!nodeSprite || !nodeSprite.isValid || !node || !node.isValid){
                    that.ErrLog("SetNodeImageByFilePath nodeSprite or node is invalid or destroyed");
                    return false;
                }
                nodeSprite.spriteFrame = spriteFrame;
                if(isHideFirst)
                    node.active = true;
            });
    },
});

module.exports = BaseComponent;
