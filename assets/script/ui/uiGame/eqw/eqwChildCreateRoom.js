/*
创建房间子界面
 */
var app = require("app");

var sjChildCreateRoom = cc.Class({
	extends: require("BaseChildCreateRoom"),

	properties: {

	},

	// CreateSendPack -start-
	CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
		let sendPack = {};
		let wanfa = this.GetIdxByKey('wanfa');
		let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
		let fangjian = this.GetIdxsByKey('fangjian');
		let xianShi = this.GetIdxByKey('xianShi');
		let jiesan = this.GetIdxByKey('jiesan');
		let gaoji = this.GetIdxsByKey('gaoji');

		sendPack = {
			"wanfa": wanfa,
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
	// CreateSendPack -end-

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
			if ('renshu' == key) {
				// 	3人场隐藏“不要3和4”。
				if (toggleIndex == 0) {
					this.Toggles['kexuanwanfa'][3].active = false;
				} else {
					this.Toggles['kexuanwanfa'][3].active = true;
				}
			}
			this.ClearToggleCheck(needClearList, needShowIndexList);
			this.UpdateLabelColor(toggles);
			this.UpdateTogglesLabel(toggles, false);
			return;
		}
		else if ('wanfa' == key) {
			// 	勾选“十老主冲关”时，默认勾选“抠底翻倍”，可取消勾选。
			if (toggleIndex == 1 && this.Toggles['wanfa'][1].getChildByName('checkmark').active == false) {
				let toggle = this.Toggles['kexuanwanfa'][0];
				toggle.getChildByName('checkmark').active = true;
				this.UpdateLabelColor(toggle.parent);
				this.UpdateTogglesLabel(toggle.parent);
			}
		}
		else if ('kexuanwanfa' == key) {
			// if(toggleIndex == 0 && this.Toggles["renshu"][0].getChildByName("checkmark").active){
			// 	this.ShowSysMsg("三人场必选“去掉6”");
			// 	return;
			// }
			// 	勾选“傍王玩法”时，默认勾选“抠底翻倍”，可取消勾选。
			if (toggleIndex == 1 && this.Toggles['kexuanwanfa'][1].getChildByName('checkmark').active == false) {
				let toggle = this.Toggles['kexuanwanfa'][0];
				toggle.getChildByName('checkmark').active = true;
				this.UpdateLabelColor(toggle.parent);
				this.UpdateTogglesLabel(toggle.parent);
			}
		}
		else if ("fangjian" == key) {
			// // 小局托管解散,解散次数不超过5次,
			// // 托管2小局解散,解散次数不超过3次",
			// if (this.Toggles['fangjian'][3].getChildByName('checkmark').active && toggleIndex == 5) {
			// 	this.Toggles['fangjian'][3].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['fangjian'][3].parent);
			// } else if (this.Toggles['fangjian'][5].getChildByName('checkmark').active && toggleIndex == 3) {
			// 	this.Toggles['fangjian'][5].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['fangjian'][5].parent);
			// }

			// if (this.Toggles['fangjian'][2].getChildByName('checkmark').active && toggleIndex == 4) {
			// 	this.Toggles['fangjian'][2].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['fangjian'][2].parent);
			// } else if (this.Toggles['fangjian'][4].getChildByName('checkmark').active && toggleIndex == 2) {
			// 	this.Toggles['fangjian'][4].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['fangjian'][4].parent);
			// }
		}
		else if ("gaoji" == key) {
			// "ToggleDesc": "同IP不可进,100米内不可进,禁止使用道具,200米内不可进,30秒未准备自动踢出房间,禁止语音,禁止文字,10秒未准备自动踢出房间",
			// 30秒未准备自动踢出房间
			// 10秒未准备自动踢出房间
			// if (this.Toggles['gaoji'][7].getChildByName('checkmark').active && toggleIndex == 4) {
			// 	this.Toggles['gaoji'][7].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['gaoji'][7].parent);
			// } else if (this.Toggles['gaoji'][4].getChildByName('checkmark').active && toggleIndex == 7) {
			// 	this.Toggles['gaoji'][4].getChildByName('checkmark').active = false;
			// 	this.UpdateLabelColor(this.Toggles['gaoji'][4].parent);
			// }
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

    OnUpdateTogglesLabel: function (TogglesNode, isResetPos = true) {
		if (this.Toggles["kexuanwanfa"]) {
			if (this.Toggles["renshu"][0].getChildByName("checkmark").active) {
				this.Toggles["kexuanwanfa"][3].active = false;
			} else {
				this.Toggles["kexuanwanfa"][3].active = true;
			}
		}
    },

});

module.exports = sjChildCreateRoom;