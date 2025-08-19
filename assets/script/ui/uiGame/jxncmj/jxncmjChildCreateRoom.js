/*
创建房间子界面
 */
var app = require("app");

var jsnyzmjChildCreateRoom = cc.Class({
	extends: require("BaseChildCreateRoom"),

	properties: {

	},

	// 需要自己重写
	// CreateSendPack -start-
	CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
		let sendPack = {};
		let jiangma = this.GetIdxByKey('jiangma');
		let maima = this.GetIdxByKey('maima');
		let zuoma = this.GetIdxByKey('zuoma');
		let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
		let fangjian = this.GetIdxsByKey('fangjian');
		let xianShi = this.GetIdxByKey('xianShi');
		let jiesan = this.GetIdxByKey('jiesan');
		let gaoji = this.GetIdxsByKey('gaoji');

		sendPack = {
			"jiangma": jiangma,
			"maima": maima,
			"zuoma": zuoma,
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

	AdjustSendPack: function (sendPack) {
		// if (sendPack.kexuanwanfa.indexOf(1) === -1) {
		// 	this.RemoveRadioSelect(sendPack, "piaoshangxian");
		// }
		if (sendPack.jiangma == 0) {
			sendPack.maima = -1;
		}

		return sendPack;
	},

	OnToggleClick: function (event) {
		this.FormManager.CloseForm("UIMessageTip");
		let toggles = event.target.parent;
		let toggle = event.target;
		let color = toggle.getChildByName("label").color;
		if (color.r == 180 ||
			color.g == 180 ||
			color.b == 180) {
			return false;
		}

		let key = toggles.name.substring(('Toggles_').length, toggles.name.length);
		let toggleIndex = parseInt(toggle.name.substring(('Toggle').length, toggle.name.length)) - 1;
		let needClearList = [];
		let needShowIndexList = [];
		needClearList = this.Toggles[key];
		needShowIndexList.push(toggleIndex);

		// if ('renshu' == key) {
		// 	// 	2人场不可选“一炮多响”；
		// 	// 	2/3人场不可选“跟庄”；
		// 	if (toggleIndex == 0) {//两人
		// 		this.Toggles["kexuanwanfa"][9].active = false;
		// 		this.Toggles["kexuanwanfa"][12].active = false;
		// 	}
		// 	else {
		// 		this.Toggles["kexuanwanfa"][9].active = true;
		// 		this.Toggles["kexuanwanfa"][12].active = true;
		// 		if (toggleIndex == 1) {// 三人
		// 			this.Toggles["kexuanwanfa"][9].active = false;
		// 		}
		// 	}
		// }
		// if ('renshu' == key) {
		// 	if (toggleIndex == 0) {
		// 		this.Toggles['kexuanwanfa'][8].active = true;
		// 	} else {
		// 		this.Toggles['kexuanwanfa'][8].active = false;
		// 	}
		// }
		if ('renshu' == key) {
			// if (toggleIndex != 2) {
			// 	this.Toggles['kexuanwanfa'][3].active = true;
			// } else {
			// 	this.Toggles['kexuanwanfa'][3].active = false;
			// }
		}
		if ('jushu' == key || 'renshu' == key || 'fangfei' == key) {
			// if ('renshu' == key) {
			// 	// 	二人场，隐藏“跟庄”玩法。
			// 	if (toggleIndex == 0) {
			// 		this.Toggles["kexuanwanfa"][7].active = false;
			// 	} else {
			// 		this.Toggles["kexuanwanfa"][7].active = true;
			// 	}
			// }
			this.ClearToggleCheck(needClearList, needShowIndexList);
			this.UpdateLabelColor(toggles);
			this.UpdateTogglesLabel(toggles, false);
			this.UpdateOnClickToggle(key, toggleIndex);
			// if ('renshu' == key) {
			// 	if (toggleIndex == 2) {
			// 		this.Toggles['kexuanwanfa'][6].active = true;
			// 	} else {
			// 		this.Toggles['kexuanwanfa'][6].active = false;
			// 	}
			// }
			return;
		}
		else if ('jiangma' == key) {
			// 	勾选“赢家奖马”或“庄家奖马”，才能勾选“闲胡马分减半”；
			if (toggleIndex == 1 || toggleIndex == 3) {
				this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(158, 49, 16);
			}
			else {
				this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active = false;
				this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(180, 180, 180);
			}

			if (toggleIndex == 0) {
				this.Toggles["maima"][0].parent.active = false;
			}
			else {
				this.Toggles["maima"][0].parent.active = true;
			}
		}
		else if ('jiangma' == key) {
			// 	勾选“赢家奖马”或“庄家奖马”，才能勾选“闲胡马分减半”；
			if (toggleIndex == 1 || toggleIndex == 3) {
				this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(158, 49, 16);
			}
			else {
				this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active = false;
				this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(180, 180, 180);
			}

			if (toggleIndex == 0) {
				this.Toggles["maima"][0].parent.active = false;
			}
			else {
				this.Toggles["maima"][0].parent.active = true;
			}
		}
		else if ('kexuanwanfa' == key) {
			// 	勾选“可炮胡”，才能勾选“可一炮多响”；
			if (!this.Toggles['kexuanwanfa'][5].getChildByName('checkmark').active && toggleIndex == 5) {
				this.Toggles['kexuanwanfa'][4].getChildByName('checkmark').active = true;
			}

			if (this.Toggles['kexuanwanfa'][4].getChildByName('checkmark').active && toggleIndex == 4) {
				this.Toggles['kexuanwanfa'][5].getChildByName('checkmark').active = false;
			}
		}
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
		if ('kexuanwanfa' == key) {
			// 	勾选“赢家奖马”或“庄家奖马”，才能勾选“闲胡马分减半”；
			if (this.Toggles["jiangma"][1].getChildByName("checkmark").active ||
				this.Toggles["jiangma"][3].getChildByName("checkmark").active) {
				if (!this.Toggles["kexuanwanfa"][7].getChildByName("checkmark")) {
					this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(158, 49, 16);
				}
			}
			else {
				this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active = false;
				this.Toggles['kexuanwanfa'][7].getChildByName("label").color = cc.color(180, 180, 180);
			}
		}
		this.UpdateOnClickToggle(key, toggleIndex);
	},

	UpdateOnClickToggle: function (key, toggleIndex) {

		// if (this.Toggles["kexuanwanfa"]) {
		// 	// 	勾选“带风”才能勾选“十三幺”，不能勾选时置灰不可选；
		// 	if (key == "kexuanwanfa" && toggleIndex == 0) {
		// 		if (!this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active) { // 带风
		// 			this.Toggles["kexuanwanfa"][2].getChildByName("checkmark").active = false;
		// 		}
		// 	}
		// 	if (key == "kexuanwanfa" && toggleIndex == 2) {
		// 		if (this.Toggles["kexuanwanfa"][2].getChildByName("checkmark").active) { // 十三幺
		// 			this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active = true;
		// 		}
		// 	}

		// 	// 	勾选“三笔封胡”才能勾选“死双”，不能勾选时置灰不可选；
		// 	if (key == "kexuanwanfa" && toggleIndex == 5) {
		// 		if (this.Toggles["kexuanwanfa"][5].getChildByName("checkmark").active) { // 死双
		// 			this.Toggles["kexuanwanfa"][1].getChildByName("checkmark").active = true;
		// 		}
		// 	}
		// 	if (key == "kexuanwanfa" && toggleIndex == 1) {
		// 		if (!this.Toggles["kexuanwanfa"][1].getChildByName("checkmark").active) { // 三笔封胡
		// 			this.Toggles["kexuanwanfa"][5].getChildByName("checkmark").active = false;
		// 		}
		// 	}

		// 	this.UpdateLabelColor(this.Toggles["kexuanwanfa"][0].parent);
		// }

		// // 	勾选“不买马”玩法则“吃胡减半,留马”两个玩法置灰不可选；
		// if (this.Toggles["maima"][2].getChildByName("checkmark").active) {

		// 	this.Toggles['kexuanwanfa'][11].getChildByName("checkmark").active = false;
		// 	this.Toggles['kexuanwanfa'][12].getChildByName("checkmark").active = false;

		// 	this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(180, 180, 180);
		// 	this.Toggles['kexuanwanfa'][12].getChildByName("label").color = cc.color(180, 180, 180);
		// } else {
		// 	this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(158, 49, 16);
		// 	this.Toggles['kexuanwanfa'][12].getChildByName("label").color = cc.color(158, 49, 16);
		// 	this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
		// }

		// // 	2、3人场“抄庄”置灰不可选；
		// if (!this.Toggles["renshu"][2].getChildByName("checkmark").active) {

		// 	this.Toggles['kexuanwanfa'][3].getChildByName("checkmark").active = false;
		// 	this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(180, 180, 180);
		// } else {
		// 	this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(158, 49, 16);
		// 	this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
		// }
	},

	OnUpdateTogglesLabel: function (TogglesNode, isResetPos = true) {
		// 	仅勾选“庄家买马”，才能选该选项，勾选“无买马,一马全中”时该选项置灰不可选；
		if (this.Toggles["mapai"]) {
			if (!this.Toggles["maima"][1].getChildByName("checkmark").active) {
				this.Toggles['mapai'][0].parent.active = false;
			} else {
				this.Toggles['mapai'][0].parent.active = true;
			}
		}

		// 	勾选“可炮胡”，才能勾选“可一炮多响”；
		if (this.Toggles["kexuanwanfa"]) {
			if (!this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active) {
				this.Toggles['kexuanwanfa'][6].getChildByName("checkmark").active = true;
			}

			if (this.Toggles["kexuanwanfa"][6].getChildByName("checkmark").active) {
				this.Toggles['kexuanwanfa'][7].getChildByName("checkmark").active = false;
			}

			this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
		}

		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["kexuanwanfa"][12].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][2].getChildByName("checkmark").active = true;
		// 		this.UpdateLabelColor(this.Toggles["kexuanwanfa"][2].parent);
		// 	}
		// }
		// // 	去万字牌仅2、3人场可选；
		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["renshu"][2].getChildByName("checkmark").active) { // 四人
		// 		this.Toggles["kexuanwanfa"][3].active = false;
		// 	} else {
		// 		this.Toggles["kexuanwanfa"][3].active = true;
		// 	}
		// }
		// 	勾选“可炮胡”，才能勾选“可一炮多响”；
		// 	勾选“杠算分”，才能勾选“荒庄荒杠”；		
		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["kexuanwanfa"][5].getChildByName("checkmark").active) { // 可一炮多响
		// 		this.Toggles["kexuanwanfa"][4].getChildByName("checkmark").active = true;
		// 		this.UpdateLabelColor(this.Toggles["kexuanwanfa"][4].parent);
		// 	}

		// 	if (this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active) { // 荒庄荒杠
		// 		this.Toggles["kexuanwanfa"][6].getChildByName("checkmark").active = true;
		// 		this.UpdateLabelColor(this.Toggles["kexuanwanfa"][6].parent);
		// 	}
		// }
		// 	缺一门：仅去掉万子牌；
		// 	缺二门：只有2人场可选，仅保留万子牌，没有条、筒和字牌，没有混一色牌型，清一色有牌型但是算1番；
		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["renshu"][0].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][8].active = true;
		// 	} else {
		// 		this.Toggles["kexuanwanfa"][8].active = false;
		// 	}
		// 	if (this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][8].getChildByName("checkmark").active = true;
		// 	}
		// 	if (!this.Toggles["kexuanwanfa"][8].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active = false;
		// 	}
		// }

		// 	if (this.Toggles["kexuanwanfa"][14].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][13].getChildByName("checkmark").active = true;
		// 	}
		// 	if (!this.Toggles["kexuanwanfa"][13].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][14].getChildByName("checkmark").active = false;
		// 	}
		// }
		// 	2人场不可选“一炮多响”；
		// 	2/3人场不可选“跟庄”；
		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["renshu"] && this.Toggles["renshu"][0].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][9].active = false;
		// 		this.Toggles["kexuanwanfa"][12].active = false;
		// 	} else {
		// 		this.Toggles["kexuanwanfa"][9].active = true;
		// 		this.Toggles["kexuanwanfa"][12].active = true;
		// 		if (this.Toggles["renshu"] && this.Toggles["renshu"][1].getChildByName("checkmark").active) {
		// 			this.Toggles["kexuanwanfa"][9].active = false;
		// 		}
		// 	}
		// }
		// // 	未勾选“买”玩法时，隐藏“庄家必买”。
		// if (this.Toggles["kexuanwanfa"]) {
		// 	if (!this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][5].active = false;
		// 	} else {
		// 		this.Toggles["kexuanwanfa"][5].active = true;
		// 	}
		// }

		// // 	二人场，隐藏“跟庄”玩法。
		// if (this.Toggles["renshu"] && this.Toggles["kexuanwanfa"]) {
		// 	if (this.Toggles["renshu"][0].getChildByName("checkmark").active) {
		// 		this.Toggles["kexuanwanfa"][7].active = false;
		// 	} else {
		// 		this.Toggles["kexuanwanfa"][7].active = true;
		// 	}
		// }

		// if (this.Toggles["kexuanwanfa"] && this.Toggles["piaoshangxian"]) {
		// 	if (this.Toggles["kexuanwanfa"][1].getChildByName("checkmark").active) {
		// 		this.Toggles["piaoshangxian"][0].parent.active = true;
		// 	} else {
		// 		this.Toggles["piaoshangxian"][0].parent.active = false;
		// 	}
		// }
	},

});

module.exports = jsnyzmjChildCreateRoom;