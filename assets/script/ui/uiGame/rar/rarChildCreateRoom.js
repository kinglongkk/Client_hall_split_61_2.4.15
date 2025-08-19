/*
 创建房间子界面
 */
var app = require("app");

var rarChildCreateRoom = cc.Class({
    extends: require("BaseChildCreateRoom"),

    properties: {},
    //需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let fengDing=this.GetIdxByKey('fengDing');
        let kexuanwanfa=this.GetIdxsByKey('kexuanwanfa');
        let fangjian=this.GetIdxsByKey('fangjian');
        let xianShi=this.GetIdxByKey('xianShi');
        let jiesan=this.GetIdxByKey('jiesan');
        let gaoji=this.GetIdxsByKey('gaoji');

        sendPack = {
            "fengDing":fengDing,
            "kexuanwanfa":kexuanwanfa,
            "fangjian":fangjian,
            "xianShi":xianShi,
            "jiesan":jiesan,
            "gaoji":gaoji,

            "playerMinNum": renshu[0],
            "playerNum": renshu[1],
            "setCount": setCount,
            "paymentRoomCardType": isSpiltRoomCard,

        }
        return sendPack;
    },
    UpdateOnClickToggle:function(){
        if (this.Toggles["renshu"][0].getChildByName("checkmark").active) {
            this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = false;
            this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(180, 180, 180);
        } else {
            this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = true;
            this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(158, 49, 16);
        }
        //子类重写
    },
});

module.exports = rarChildCreateRoom;