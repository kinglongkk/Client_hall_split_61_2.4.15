/*
创建房间子界面
 */
var app = require("app");

var hnhzmjChildCreateRoom = cc.Class({
    extends: require("BaseChildCreateRoom"),

    properties: {

    },
    //需要自己重写
	CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
		let sendPack = {};
		let naozhuang=this.GetIdxByKey('naozhuang');
		let kexuanwanfa=this.GetIdxsByKey('kexuanwanfa');
		let fangjian=this.GetIdxsByKey('fangjian');
		let xianShi=this.GetIdxByKey('xianShi');
		let jiesan=this.GetIdxByKey('jiesan');
		let gaoji=this.GetIdxsByKey('gaoji');

    	sendPack = {
			"naozhuang":naozhuang,
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
	UpdateOnClickToggle: function () {
		//选项置灰
		if (this.Toggles["zhaniaoshuliang"]) {
			this.UpdateLabelColor(this.Toggles['zhaniaoshuliang'][0].parent);
			if (!this.Toggles["zhaniao"][1].getChildByName("checkmark").active) {
				for (let i = 0; i < 6; i++) {
					this.Toggles['zhaniaoshuliang'][i].getChildByName("checkmark").active = false;
					//置灰
					if (this.Toggles['zhaniaoshuliang'][i].getChildByName("label")) {
						this.Toggles['zhaniaoshuliang'][i].getChildByName("label").color = cc.color(180, 180, 180);
					}
				}
			} else {
				//恢复
				let isCheckMark = false;
				for (let i = 0; i < 6; i++) {
					if (this.Toggles['zhaniaoshuliang'][i].getChildByName("label")) {
						this.Toggles['zhaniaoshuliang'][i].getChildByName("label").color = cc.color(158, 49, 16);
					}
					if (!isCheckMark) {
						isCheckMark= this.Toggles['zhaniaoshuliang'][i].getChildByName("checkmark").active;
					}
				}
				if (!isCheckMark) {
					this.Toggles['zhaniaoshuliang'][0].getChildByName("checkmark").active = true;
				}
			}
		}
	},
});

module.exports = hnhzmjChildCreateRoom;