/*
创建房间子界面
 */
var app = require("app");

var wlcbmjChildCreateRoom = cc.Class({
	extends: require("BaseChildCreateRoom"),

	properties: {},
	OnShow:function(){
        this.tzmjToggleIndex = -1;
    }, 
	//需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let wanfa = this.GetIdxByKey('wanfa');
        let heimo = this.GetIdxByKey('heimo');
        let hupai = this.GetIdxByKey('hupai');
        let liuju = this.GetIdxByKey('liuju');
        let paixingjifen = this.GetIdxByKey('paixingjifen');
        let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
        let fangjian = this.GetIdxsByKey('fangjian');
        let xianShi = this.GetIdxByKey('xianShi');
        let jiesan = this.GetIdxByKey('jiesan');
        let gaoji = this.GetIdxsByKey('gaoji');

        sendPack = {
            "wanfa": wanfa,
            "heimo": heimo,
            "hupai": hupai,
            "liuju": liuju,
            "paixingjifen": paixingjifen,
            "kexuanwanfa": kexuanwanfa,
            "fangjian": fangjian,
            "xianShi": xianShi,
            "jiesan": jiesan,
            "gaoji": gaoji,

            "playerMinNum": renshu[0],
            "playerNum": renshu[1],
            "setCount": setCount,
            "paymentRoomCardType": isSpiltRoomCard,

        }
        return sendPack;
    },
    UpdateOnClickToggle: function () {
        //选项置灰
        if (this.Toggles["hupai"]) {
            this.UpdateLabelColor(this.Toggles['hupai'][0].parent);
            if (!this.Toggles["wanfa"][3].getChildByName("checkmark").active) {
                /*this.Toggles['hupai'][0].getChildByName("checkmark").active = false;
                 //置灰
                 if (this.Toggles['hupai'][0].getChildByName("label")) {
                 this.Toggles['hupai'][0].getChildByName("label").color = cc.color(180, 180, 180);
                 }
                 this.Toggles['hupai'][1].getChildByName("checkmark").active = true;*/
            } else {
                //恢复
                if (this.Toggles['hupai'][0].getChildByName("label")) {
                    this.Toggles['hupai'][0].getChildByName("label").color = cc.color(158, 49, 16);
                }
                this.Toggles['hupai'][0].getChildByName("checkmark").active = true;
                this.Toggles['hupai'][1].getChildByName("checkmark").active = false;
                //置灰
                if (this.Toggles['hupai'][1].getChildByName("label")) {
                    this.Toggles['hupai'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }
        }
    },
});


module.exports = wlcbmjChildCreateRoom;