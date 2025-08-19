/*
创建房间子界面
 */
var app = require("app");

var hzzmjChildCreateRoom = cc.Class({
    extends: require("BaseChildCreateRoom"),

    properties: {

    },
    //需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let dingzhuang=this.GetIdxByKey('dingzhuang');
        let lunzhuang=this.GetIdxByKey('lunzhuang');
        let guipai=this.GetIdxByKey('guipai');
        let paixing=this.GetIdxsByKey('paixing');
        let mapai=this.GetIdxByKey('mapai');
        let mashu=this.GetIdxByKey('mashu');
        let mafen=this.GetIdxByKey('mafen');
        let jiama=this.GetIdxsByKey('jiama');
        let kexuanwanfa=this.GetIdxsByKey('kexuanwanfa');
        let fangjian=this.GetIdxsByKey('fangjian');
        let xianShi=this.GetIdxByKey('xianShi');
        let tuoguan=this.GetIdxByKey('tuoguan');
        let jiesan=this.GetIdxByKey('jiesan');
        let gaoji=this.GetIdxsByKey('gaoji');

        sendPack = {
            "dingzhuang":dingzhuang,
            "lunzhuang":lunzhuang,
            "guipai":guipai,
            "paixing":paixing,
            "mapai":mapai,
            "mashu":mashu,
            "mafen":mafen,
            "jiama":jiama,
            "kexuanwanfa":kexuanwanfa,
            "fangjian":fangjian,
            "xianShi":xianShi,
            "tuoguan":tuoguan,
            "jiesan":jiesan,
            "gaoji":gaoji,

            "playerMinNum": renshu[0],
            "playerNum": renshu[1],
            "setCount": setCount,
            "paymentRoomCardType": isSpiltRoomCard,

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
            this.UpdateOnClickToggle();
            return;
        } else if ("fangjian" == key) {
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
        this.UpdateOnClickToggle();
    },
    UpdateOnClickToggle: function() {
        //选项置灰
        if(this.Toggles["paixing"]){
            this.UpdateLabelColor(this.Toggles['paixing'][0].parent);
            if(this.Toggles["guipai"][0].getChildByName("checkmark").active){
                this.Toggles['paixing'][0].getChildByName("checkmark").active = false;
                this.Toggles['paixing'][1].getChildByName("checkmark").active = false;
                this.Toggles['paixing'][2].getChildByName("checkmark").active = false;
                //置灰
                if(this.Toggles['paixing'][0].getChildByName("label")){
                    this.Toggles['paixing'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }
                if(this.Toggles['paixing'][1].getChildByName("label")){
                    this.Toggles['paixing'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
                if(this.Toggles['paixing'][2].getChildByName("label")){
                    this.Toggles['paixing'][2].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                //恢复
                if(this.Toggles['paixing'][0].getChildByName("label")){
                    this.Toggles['paixing'][0].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['paixing'][1].getChildByName("label")){
                    this.Toggles['paixing'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['paixing'][2].getChildByName("label")){
                    this.Toggles['paixing'][2].getChildByName("label").color = cc.color(158, 49, 16);
                }
            }
            if(!this.Toggles["paixing"][0].getChildByName("checkmark").active){
                if(this.Toggles['paixing'][1].getChildByName("label")){
                    this.Toggles['paixing'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                if(this.Toggles['paixing'][1].getChildByName("label")){
                    this.Toggles['paixing'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }
            }
        }
        if(this.Toggles["jiama"]){
            this.UpdateLabelColor(this.Toggles['mashu'][0].parent);
            this.UpdateLabelColor(this.Toggles['mafen'][0].parent);
            this.UpdateLabelColor(this.Toggles['jiama'][0].parent);
            if(this.Toggles["mapai"][2].getChildByName("checkmark").active){
                this.Toggles['mashu'][0].getChildByName("checkmark").active = false;
                this.Toggles['mashu'][1].getChildByName("checkmark").active = false;
                this.Toggles['mashu'][2].getChildByName("checkmark").active = false;
                this.Toggles['mashu'][3].getChildByName("checkmark").active = false;
                this.Toggles['mashu'][4].getChildByName("checkmark").active = false;

                this.Toggles['mafen'][0].getChildByName("checkmark").active = false;
                this.Toggles['mafen'][1].getChildByName("checkmark").active = false;
                this.Toggles['mafen'][2].getChildByName("checkmark").active = false;

                this.Toggles['jiama'][1].getChildByName("checkmark").active = false;
                //置灰
                if(this.Toggles['mashu'][0].getChildByName("label")){
                    this.Toggles['mashu'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mashu'][1].getChildByName("label")){
                    this.Toggles['mashu'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mashu'][2].getChildByName("label")){
                    this.Toggles['mashu'][2].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mashu'][3].getChildByName("label")){
                    this.Toggles['mashu'][3].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mashu'][4].getChildByName("label")){
                    this.Toggles['mashu'][4].getChildByName("label").color = cc.color(180, 180, 180);
                }

                if(this.Toggles['mafen'][0].getChildByName("label")){
                    this.Toggles['mafen'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mafen'][1].getChildByName("label")){
                    this.Toggles['mafen'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['mafen'][2].getChildByName("label")){
                    this.Toggles['mafen'][2].getChildByName("label").color = cc.color(180, 180, 180);
                }

                if(this.Toggles['jiama'][0].getChildByName("label")){
                    this.Toggles['jiama'][0].getChildByName("label").color = cc.color(158, 49, 16);
                }
                if(this.Toggles['jiama'][1].getChildByName("label")){
                    this.Toggles['jiama'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                //恢复
                if(this.Toggles['mashu'][0].getChildByName("label")){
                    this.Toggles['mashu'][0].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mashu'][1].getChildByName("label")){
                    this.Toggles['mashu'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mashu'][2].getChildByName("label")){
                    this.Toggles['mashu'][2].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mashu'][3].getChildByName("label")){
                    this.Toggles['mashu'][3].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mashu'][4].getChildByName("label")){
                    this.Toggles['mashu'][4].getChildByName("label").color = cc.color(158, 49, 16);
                }

                if(this.Toggles['mafen'][0].getChildByName("label")){
                    this.Toggles['mafen'][0].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mafen'][1].getChildByName("label")){
                    this.Toggles['mafen'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['mafen'][2].getChildByName("label")){
                    this.Toggles['mafen'][2].getChildByName("label").color = cc.color(158, 49, 16);
                }

                if(this.Toggles['jiama'][0].getChildByName("label")){
                    this.Toggles['jiama'][0].getChildByName("label").color = cc.color(180, 180, 180);
                }
                if(this.Toggles['jiama'][1].getChildByName("label")){
                    this.Toggles['jiama'][1].getChildByName("label").color = cc.color(158, 49, 16);
                }
            }
        }
        if(this.Toggles["kexuanwanfa"]){
            this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);
            if(!this.Toggles["kexuanwanfa"][7].getChildByName("checkmark").active){
                this.Toggles['kexuanwanfa'][8].getChildByName("checkmark").active = false;
                this.Toggles['kexuanwanfa'][9].getChildByName("checkmark").active = false;
                this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active = false;
                this.Toggles['kexuanwanfa'][11].getChildByName("checkmark").active = false;
                //置灰
                if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['kexuanwanfa'][9].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][9].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(180, 180, 180);
                }if(this.Toggles['kexuanwanfa'][11].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                //恢复
                if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['kexuanwanfa'][9].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][9].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(158, 49, 16);
                }if(this.Toggles['kexuanwanfa'][11].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(158, 49, 16);
                }
            }
            if(this.Toggles["renshu"][0].getChildByName("checkmark").active||this.Toggles["renshu"][1].getChildByName("checkmark").active){
                this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = false;
                //置灰
                if(this.Toggles['kexuanwanfa'][2].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(180, 180, 180);
                }
            }else{
                //恢复
                if(this.Toggles['kexuanwanfa'][2].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(158, 49, 16);
                }}
        }
    },
});

module.exports = hzzmjChildCreateRoom;