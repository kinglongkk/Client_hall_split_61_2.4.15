/*
创建房间子界面
 */
var app = require("app");

var qhdmjChildCreateRoom = cc.Class({
	extends: require("BaseChildCreateRoom"),

	properties: {},
	OnShow:function(){
        this.tzmjToggleIndex = -1;
    }, 
	//需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let hunpai = this.GetIdxByKey('hunpai');
        let paolong = this.GetIdxByKey('paolong');
        let hanpao = this.GetIdxByKey('hanpao');
        let penggang = this.GetIdxByKey('penggang');
        let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
        let fangjian = this.GetIdxsByKey('fangjian');
        let xianShi = this.GetIdxByKey('xianShi');
        let jiesan = this.GetIdxByKey('jiesan');
        let gaoji = this.GetIdxsByKey('gaoji');

        sendPack = {
            "hunpai": hunpai,
            "paolong": paolong,
            "hanpao": hanpao,
            "penggang": penggang,
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
    AdjustSendPack: function (sendPack) {
        if (sendPack.paolong != 1) {
            this.RemoveRadioSelect(sendPack, "hanpao");
        }
        return sendPack;
    },
    OnToggleClick: function (event) {
        this.FormManager.CloseForm("UIMessageTip");
        let toggles = event.target.parent;
        let toggle = event.target;
        let key = toggles.name.substring(('Toggles_').length, toggles.name.length);
        let toggleIndex = parseInt(toggle.name.substring(('Toggle').length, toggle.name.length)) - 1;
        let needClearList = [];
        let needShowIndexList = [];
        needClearList = this.Toggles[key];
        needShowIndexList.push(toggleIndex);
        if ('jushu' == key || 'renshu' == key || 'fangfei' == key) {
            this.ClearToggleCheck(needClearList, needShowIndexList);
            this.UpdateLabelColor(toggles);
            this.UpdateTogglesLabel(toggles, false);
            return;
        } else if ('gaoji' == key) {
            if (this.Toggles['gaoji'][4].getChildByName('checkmark').active && toggleIndex == 7) {
                this.Toggles['gaoji'][4].getChildByName('checkmark').active = false;
                this.UpdateLabelColor(this.Toggles['gaoji'][4].parent);
            } else if (this.Toggles['gaoji'][7].getChildByName('checkmark').active && toggleIndex == 4) {
                this.Toggles['gaoji'][7].getChildByName('checkmark').active = false;
                this.UpdateLabelColor(this.Toggles['gaoji'][5].parent);
            }
        }
        if (toggles.getComponent(cc.Toggle)) {//复选框
            needShowIndexList = [];
            for (let i = 0; i < needClearList.length; i++) {
                let mark = needClearList[i].getChildByName('checkmark').active;
                //如果复选框为勾选状态并且点击的复选框不是该复选框，则继续保持勾选状态
                if (mark && i != toggleIndex) {
                    needShowIndexList.push(i);
                }
                //如果复选框为未勾选状态并且点击的复选框是该复选框，则切换为勾选状态
                else if (!mark && i == toggleIndex) {
                    needShowIndexList.push(i);
                }
            }
        }
        this.ClearToggleCheck(needClearList, needShowIndexList);
        this.UpdateLabelColor(toggles, 'fangfei' == key ? true : false);
        this.UpdateOnClickToggle();
    },
    UpdateOnClickToggle: function () {
        //选项置灰
        if (this.Toggles["kexuanwanfa"]) {
            this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
            if (this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active) {
                this.Toggles['kexuanwanfa'][1].getChildByName("checkmark").active = false;
                this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = false;
                //置灰
                if (this.Toggles['kexuanwanfa'][1].getChildByName("label")) {
                    this.Toggles['kexuanwanfa'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
                if (this.Toggles['kexuanwanfa'][2].getChildByName("label")) {
                    this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(180, 180, 180);
                }
            } else {
                //恢复
                if (this.Toggles['kexuanwanfa'][1].getChildByName("label")) {
                    this.Toggles['kexuanwanfa'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }
                if (this.Toggles['kexuanwanfa'][2].getChildByName("label")) {
                    this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(158, 49, 16);
                }
            }
        }
        if (this.Toggles["hanpao"]) {
            if (this.Toggles["paolong"][1].getChildByName("checkmark").active) {
                this.Toggles["hanpao"][0].parent.active = true;
            } else {
                this.Toggles["hanpao"][0].parent.active = false;
            }
        }
    },
});


module.exports = qhdmjChildCreateRoom;