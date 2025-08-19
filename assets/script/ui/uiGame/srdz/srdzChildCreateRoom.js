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
		let difen=this.GetIdxByKey('difen');
		let sanzhang=this.GetIdxByKey('sanzhang');
		let liandui=this.GetIdxByKey('liandui');
		let feiwang=this.GetIdxsByKey('feiwang');
		let wangpai=this.GetIdxByKey('wangpai');
		let wsk=this.GetIdxByKey('wsk');
		let jiaopai=this.GetIdxByKey('jiaopai');
		let kexuanwanfa=this.GetIdxsByKey('kexuanwanfa');
		let dangezhadan=this.GetIdxByKey('dangezhadan');
		let jiesansuanjiang=this.GetIdxByKey('jiesansuanjiang');
		let fangjian=this.GetIdxsByKey('fangjian');
		let xianShi=this.GetIdxByKey('xianShi');
		let jiesan=this.GetIdxByKey('jiesan');
		let gaoji=this.GetIdxsByKey('gaoji');

    	sendPack = {
			"difen":difen,
			"sanzhang":sanzhang,
			"liandui":liandui,
			"feiwang":feiwang,
			"wangpai":wangpai,
			"wsk":wsk,
			"jiaopai":jiaopai,
			"kexuanwanfa":kexuanwanfa,
			"dangezhadan":dangezhadan,
			"jiesansuanjiang":jiesansuanjiang,
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
			this.ClearToggleCheck(needClearList, needShowIndexList);
			this.UpdateLabelColor(toggles);
			this.UpdateTogglesLabel(toggles, false);
			return;
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
		this.UpdateOnClickToggle(key, toggleIndex);
	},

	UpdateOnClickToggle: function (key, toggleIndex) {
		//选项置灰
       	if(this.Toggles["wsk"] && this.Toggles["jiaopai"] && this.Toggles["kexuanwanfa"]){
            this.UpdateLabelColor(this.Toggles['wsk'][0].parent);
            this.UpdateLabelColor(this.Toggles['jiaopai'][0].parent);
            this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
            if(this.Toggles["wangpai"][2].getChildByName("checkmark").active){
                //---------------------------510k---------------------------//
                this.Toggles['wsk'][0].getChildByName("checkmark").active = false;
                this.Toggles['wsk'][1].getChildByName("checkmark").active = true;
                //选中
                if(this.Toggles['wsk'][1].getChildByName("label")){
                    this.Toggles['wsk'][1].getChildByName("label").color = cc.color(0, 155, 46);
                }
                //置灰
                if(this.Toggles['wsk'][0].getChildByName("label")){
                    this.Toggles['wsk'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }
                //---------------------------叫牌---------------------------//
                this.Toggles['jiaopai'][0].getChildByName("checkmark").active = true;
                this.Toggles['jiaopai'][1].getChildByName("checkmark").active = false;
                //选中
                if(this.Toggles['jiaopai'][0].getChildByName("label")){
                    this.Toggles['jiaopai'][0].getChildByName("label").color = cc.color(0, 155, 46);
                }
                //置灰
                if(this.Toggles['jiaopai'][1].getChildByName("label")){
                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
                //---------------------------默认选中“不计捡分”不可取消，置灰“缴分、200分翻倍”不可选---------------------------//
                this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = true;
                this.Toggles['kexuanwanfa'][3].getChildByName("checkmark").active = false;
                this.Toggles['kexuanwanfa'][5].getChildByName("checkmark").active = false;
                //选中
                if(this.Toggles['kexuanwanfa'][2].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(0, 155, 46);
                }
                //置灰
                if(this.Toggles['kexuanwanfa'][3].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(180, 180, 180);
                }
                //置灰
                if(this.Toggles['kexuanwanfa'][5].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][5].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                if(this.Toggles['wsk'][0].getChildByName("checkmark").active){
            		//选中
	                if(this.Toggles['wsk'][0].getChildByName("label")){
	                    this.Toggles['wsk'][0].getChildByName("label").color = cc.color(0, 155, 46);
	                }
            	}else{
            		//恢复
	                if(this.Toggles['wsk'][0].getChildByName("label")){
	                    this.Toggles['wsk'][0].getChildByName("label").color = cc.color(158, 49, 16);
	                }
            	}
                if(!this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active){
                	if(this.Toggles['jiaopai'][1].getChildByName("checkmark").active){
                		//选中
		                if(this.Toggles['jiaopai'][1].getChildByName("label")){
		                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(0, 155, 46);
		                }
                	}else{
                		//恢复
		                if(this.Toggles['jiaopai'][1].getChildByName("label")){
		                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(158, 49, 16);
		                }
                	}
                }
                if(this.Toggles['kexuanwanfa'][3].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(158, 49, 16);
                }
                //恢复
                if(this.Toggles['kexuanwanfa'][5].getChildByName("checkmark").active){
            		//恢复
	                if(this.Toggles['kexuanwanfa'][5].getChildByName("label")){
	                    this.Toggles['kexuanwanfa'][5].getChildByName("label").color = cc.color(0, 155, 46);
	                }
            	}else{
            		//恢复
	                if(this.Toggles['kexuanwanfa'][5].getChildByName("label")){
	                    this.Toggles['kexuanwanfa'][5].getChildByName("label").color = cc.color(158, 49, 16);
	                }
            	}
            }
            if(this.Toggles["kexuanwanfa"][0].getChildByName("checkmark").active){
            	//---------------------------可抢叫勾选后，默认选中明叫。---------------------------//
                this.Toggles['jiaopai'][0].getChildByName("checkmark").active = true;
                this.Toggles['jiaopai'][1].getChildByName("checkmark").active = false;
                //选中
                if(this.Toggles['jiaopai'][0].getChildByName("label")){
                    this.Toggles['jiaopai'][0].getChildByName("label").color = cc.color(0, 155, 46);
                }
                //置灰
                if(this.Toggles['jiaopai'][1].getChildByName("label")){
                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
            	//恢复
            	if(!this.Toggles["wangpai"][2].getChildByName("checkmark").active){
            		if(this.Toggles['jiaopai'][1].getChildByName("checkmark").active){
                		//选中
		                if(this.Toggles['jiaopai'][1].getChildByName("label")){
		                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(0, 155, 46);
		                }
                	}else{
                		//恢复
		                if(this.Toggles['jiaopai'][1].getChildByName("label")){
		                    this.Toggles['jiaopai'][1].getChildByName("label").color = cc.color(158, 49, 16);
		                }
                	}
            	}
            }
        }

        //勾选后面四个选项任意一个或多个时，默认勾选上“废王罚分”。
    	if(this.Toggles["feiwang"]){
            this.UpdateLabelColor(this.Toggles['feiwang'][0].parent);
            if(this.Toggles["feiwang"][1].getChildByName("checkmark").active
            	|| this.Toggles["feiwang"][2].getChildByName("checkmark").active
            	|| this.Toggles["feiwang"][3].getChildByName("checkmark").active
            	|| this.Toggles["feiwang"][4].getChildByName("checkmark").active){
                //---------------------------510k---------------------------//
                this.Toggles['feiwang'][0].getChildByName("checkmark").active = true;
                //选中
                if(this.Toggles['feiwang'][0].getChildByName("label")){
                    this.Toggles['feiwang'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
            	if(this.Toggles['feiwang'][0].getChildByName("checkmark").active){
            		//选中
	                if(this.Toggles['feiwang'][0].getChildByName("label")){
	                    this.Toggles['feiwang'][0].getChildByName("label").color = cc.color(0, 155, 46);
	                }
            	}else{
            		//恢复
	                if(this.Toggles['feiwang'][0].getChildByName("label")){
	                    this.Toggles['feiwang'][0].getChildByName("label").color = cc.color(158, 49, 16);
	                }
            	}
            }
        }
	},

});

module.exports = sjChildCreateRoom;