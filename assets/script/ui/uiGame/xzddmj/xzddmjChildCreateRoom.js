/*
创建房间子界面
 */
var app = require("app");

var xzddmjChildCreateRoom = cc.Class({
	extends: require("BaseChildCreateRoom"),

	properties: {},
	//需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let zimo=this.GetIdxByKey('zimo');
        let fengding=this.GetIdxByKey('fengding');
        let huansanzhang=this.GetIdxByKey('huansanzhang');
        let kexuanwanfa=this.GetIdxsByKey('kexuanwanfa');
        let diangang=this.GetIdxByKey('diangang');
        let fangjian=this.GetIdxsByKey('fangjian');
        let xianShi=this.GetIdxByKey('xianShi');
        let jiesan=this.GetIdxByKey('jiesan');
        let gaoji=this.GetIdxsByKey('gaoji');

        sendPack = {
            "zimo":zimo,
            "fengding":fengding,
            "huansanzhang":huansanzhang,
            "kexuanwanfa":kexuanwanfa,
            "diangang":diangang,
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
});


module.exports = xzddmjChildCreateRoom;