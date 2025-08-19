/*
 创建房间子界面
 */
var app = require("app");

var bsyzfChildCreateRoom = cc.Class({
    extends: require("BaseChildCreateRoom"),

    properties: {},
    //需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
        let fangjian = this.GetIdxsByKey('fangjian');
        let xianShi = this.GetIdxByKey('xianShi');
        let jiesan = this.GetIdxByKey('jiesan');
        let gaoji = this.GetIdxsByKey('gaoji');

        sendPack = {
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
        // if(this.Toggles["kexuanwanfa"]){
        //     this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
        //     if(!this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active){
        //         this.Toggles['kexuanwanfa'][8].getChildByName("checkmark").active = false;
        //         //置灰
        //         if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
        //             this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(180, 180, 180);
        //         }
        //     }else{
        //         //恢复
        //         if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
        //             this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(158, 49, 16);
        //         }
        //     }
        // }

        this.Toggles['fangjian'][0].getChildByName("checkmark").active = false;
        //         //置灰
        if (this.Toggles['fangjian'][0].getChildByName("label")) {
            this.Toggles['fangjian'][0].getChildByName("label").color = cc.color(180, 180, 180);
        }

    },
});

module.exports = bsyzfChildCreateRoom;