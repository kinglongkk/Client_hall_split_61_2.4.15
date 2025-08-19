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
		let huapai = this.GetIdxByKey('huapai');
		let sywsk = this.GetIdxByKey('sywsk');
		let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
		let fangjian = this.GetIdxsByKey('fangjian');
		let xianShi = this.GetIdxByKey('xianShi');
		let jiesan = this.GetIdxByKey('jiesan');
		let gaoji = this.GetIdxsByKey('gaoji');

		sendPack = {
			"huapai": huapai,
			"sywsk": sywsk,
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
			if (key == "renshu") {
				if (toggleIndex == 2) {
					// 四人

					// 	二三人场，必选无花牌。
					this.Toggles["huapai"][0].getChildByName("checkmark").active = true;
					this.Toggles["huapai"][1].getChildByName("checkmark").active = false;
					this.Toggles["huapai"][2].getChildByName("checkmark").active = false;

					this.Toggles['huapai'][0].getChildByName("label").color = cc.color(158, 49, 16);
					this.Toggles['huapai'][1].getChildByName("label").color = cc.color(158, 49, 16);
					this.Toggles['huapai'][2].getChildByName("label").color = cc.color(158, 49, 16);

					// 	二三人场隐藏摇摆,炸错罚分,额外加分。
					this.Toggles["kexuanwanfa"][1].active = true;
					this.Toggles["kexuanwanfa"][2].active = true;
					this.Toggles["kexuanwanfa"][3].active = true;

					// 	四人场必选算喜。
					this.Toggles["sywsk"][0].getChildByName("checkmark").active = true;
					this.Toggles["sywsk"][1].getChildByName("checkmark").active = false;
					this.Toggles['sywsk'][0].getChildByName("label").color = cc.color(158, 49, 16);
					this.Toggles['sywsk'][1].getChildByName("label").color = cc.color(180, 180, 180);
				} else {
					// 二三人场

					// 	二三人场，必选无花牌。
					this.Toggles["huapai"][0].getChildByName("checkmark").active = true;
					this.Toggles["huapai"][1].getChildByName("checkmark").active = false;
					this.Toggles["huapai"][2].getChildByName("checkmark").active = false;

					this.Toggles['huapai'][0].getChildByName("label").color = cc.color(158, 49, 16);
					this.Toggles['huapai'][1].getChildByName("label").color = cc.color(180, 180, 180);
					this.Toggles['huapai'][2].getChildByName("label").color = cc.color(180, 180, 180);

					// 	二三人场隐藏摇摆,炸错罚分,额外加分。
					this.Toggles["kexuanwanfa"][1].active = false;
					this.Toggles["kexuanwanfa"][2].active = false;
					this.Toggles["kexuanwanfa"][3].active = false;

					// 	四人场必选算喜。
					this.Toggles['sywsk'][0].getChildByName("label").color = cc.color(158, 49, 16);
					this.Toggles['sywsk'][1].getChildByName("label").color = cc.color(158, 49, 16);
				}
			}
			this.ClearToggleCheck(needClearList, needShowIndexList);
			this.UpdateLabelColor(toggles);
			this.UpdateTogglesLabel(toggles, false);
			return;
		}
		// else if ('kexuanwanfa2' == key) {
		// 	if (this.Toggles['kexuanwanfa2'][4].getChildByName('checkmark').active && toggleIndex == 5) {
		// 		this.Toggles['kexuanwanfa2'][4].getChildByName('checkmark').active = false;
		// 		this.UpdateLabelColor(this.Toggles['kexuanwanfa2'][4].parent);
		// 	} else if (this.Toggles['kexuanwanfa2'][5].getChildByName('checkmark').active && toggleIndex == 4) {
		// 		this.Toggles['kexuanwanfa2'][5].getChildByName('checkmark').active = false;
		// 		this.UpdateLabelColor(this.Toggles['kexuanwanfa2'][5].parent);
		// 	}
		// }
		else if ("fangjian" == key) {
			// 小局托管解散,解散次数不超过5次,
			// 托管2小局解散,解散次数不超过3次",
			if (this.Toggles['fangjian'][3].getChildByName('checkmark').active && toggleIndex == 5) {
				this.Toggles['fangjian'][3].getChildByName('checkmark').active = false;
				this.UpdateLabelColor(this.Toggles['fangjian'][3].parent);
			} else if (this.Toggles['fangjian'][5].getChildByName('checkmark').active && toggleIndex == 3) {
				this.Toggles['fangjian'][5].getChildByName('checkmark').active = false;
				this.UpdateLabelColor(this.Toggles['fangjian'][5].parent);
			}

			if (this.Toggles['fangjian'][2].getChildByName('checkmark').active && toggleIndex == 4) {
				this.Toggles['fangjian'][2].getChildByName('checkmark').active = false;
				this.UpdateLabelColor(this.Toggles['fangjian'][2].parent);
			} else if (this.Toggles['fangjian'][4].getChildByName('checkmark').active && toggleIndex == 2) {
				this.Toggles['fangjian'][4].getChildByName('checkmark').active = false;
				this.UpdateLabelColor(this.Toggles['fangjian'][4].parent);
			}
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

	UpdateOnClickToggle: function (key, toggleIndex) {
		if (this.Toggles["fangjian"] && this.Toggles["fangjian"][4]) {
			this.Toggles['fangjian'][4].getChildByName("label").color = cc.color(180, 180, 180);
		}

		// 	大炸摊牌和八王不能同时勾选。（选中一个时，置灰另一个）
		// 	勾选比奖时，取消选中且置灰不可选“可投降”、“红桃3”、“流局比炸”、“大炸摊牌（九炸,硬八,四王摊牌）”。
		// if (this.Toggles["kexuanwanfa"][6].getChildByName("checkmark").active) {

		// 	this.Toggles['kexuanwanfa'][1].getChildByName("checkmark").active = false;
		// 	this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = false;
		// 	this.Toggles['kexuanwanfa'][3].getChildByName("checkmark").active = false;
		// 	this.Toggles['kexuanwanfa'][4].getChildByName("checkmark").active = false;

		// 	this.Toggles['kexuanwanfa'][1].getChildByName("label").color = cc.color(180, 180, 180);
		// 	this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(180, 180, 180);
		// 	this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(180, 180, 180);
		// 	this.Toggles['kexuanwanfa'][4].getChildByName("label").color = cc.color(180, 180, 180);
		// } else {
		// 	if (("kexuanwanfa" == key && toggleIndex == 6)) {
		// 		this.Toggles['kexuanwanfa'][1].getChildByName("label").color = cc.color(158, 49, 16);
		// 		this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(158, 49, 16);
		// 		this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(158, 49, 16);
		// 		this.Toggles['kexuanwanfa'][4].getChildByName("label").color = cc.color(158, 49, 16);
		// 	} else {
		// 		this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
		// 	}
		// }

		// if (this.Toggles["fangjian"] && this.Toggles["fangjian"][4]) {
		// 	this.Toggles['fangjian'][4].active = false;
		// }
	},

	OnUpdateTogglesLabel: function (TogglesNode) {
		// 	二三人场，必选无花牌。
		if (this.Toggles["huapai"]) {
			if (this.Toggles["renshu"][2].getChildByName("checkmark").active) { // 四人
				// this.Toggles["huapai"][0].getChildByName("checkmark").active = true;
				// this.Toggles["huapai"][1].getChildByName("checkmark").active = false;
				// this.Toggles["huapai"][2].getChildByName("checkmark").active = false;

				this.Toggles['huapai'][0].getChildByName("label").color = cc.color(158, 49, 16);
				this.Toggles['huapai'][1].getChildByName("label").color = cc.color(158, 49, 16);
				this.Toggles['huapai'][2].getChildByName("label").color = cc.color(158, 49, 16);
			} else {
				// 二三人场
				// 	二三人场，必选无花牌。
				this.Toggles["huapai"][0].getChildByName("checkmark").active = true;
				this.Toggles["huapai"][1].getChildByName("checkmark").active = false;
				this.Toggles["huapai"][2].getChildByName("checkmark").active = false;

				this.Toggles['huapai'][0].getChildByName("label").color = cc.color(158, 49, 16);
				this.Toggles['huapai'][1].getChildByName("label").color = cc.color(180, 180, 180);
				this.Toggles['huapai'][2].getChildByName("label").color = cc.color(180, 180, 180);
			}
		}

		// 	四人场必选算喜。
		if (this.Toggles["sywsk"]) {
			if (this.Toggles["renshu"][2].getChildByName("checkmark").active) { // 四人
				this.Toggles["sywsk"][0].getChildByName("checkmark").active = true;
				this.Toggles["sywsk"][1].getChildByName("checkmark").active = false;
				this.Toggles['sywsk'][1].getChildByName("label").color = cc.color(180, 180, 180);
			} else {
				this.Toggles['sywsk'][1].getChildByName("label").color = cc.color(158, 49, 16);
			}
		}

		// 	二三人场隐藏摇摆,炸错罚分,额外加分。
		if (this.Toggles["kexuanwanfa"]) {
			if (this.Toggles["renshu"][2].getChildByName("checkmark").active) { // 四人
				this.Toggles["kexuanwanfa"][1].active = true;
				this.Toggles["kexuanwanfa"][2].active = true;
				this.Toggles["kexuanwanfa"][3].active = true;
			} else {
				// 二三人场
				this.Toggles["kexuanwanfa"][1].active = false;
				this.Toggles["kexuanwanfa"][2].active = false;
				this.Toggles["kexuanwanfa"][3].active = false;
			}
		}
	},

});

module.exports = sjChildCreateRoom;