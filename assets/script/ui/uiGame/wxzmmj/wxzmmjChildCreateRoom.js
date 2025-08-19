/*
创建房间子界面
 */
var app = require("app");

var wxmjChildCreateRoom = cc.Class({
    extends: require("BaseChildCreateRoom"),

    properties: {

    },
    //需要自己重写
    CreateSendPack: function (renshu, setCount, isSpiltRoomCard) {
        let sendPack = {};
        let xianShi = this.GetIdxByKey('xianShi');
        let jiesan = this.GetIdxByKey('jiesan');

        let difen = this.GetIdxByKey('difen');
        let qianggang = this.GetIdxByKey('qianggang');
        let piaofen = this.GetIdxByKey('piaofen');
        let piaofenleixing = this.GetIdxByKey('piaofenleixing');
        let fengDing = this.GetIdxByKey('fengDing');
        let jiesuan = this.GetIdxByKey('jiesuan');
        
        let fangjian = this.GetIdxsByKey('fangjian');
        let gaoji = this.GetIdxsByKey('gaoji');
        let kexuanwanfa = this.GetIdxsByKey('kexuanwanfa');
        
        
        if (piaofen == 2) {
            piaofenleixing = -1;
        }

        sendPack = {
            "fangjian": fangjian,
            "gaoji": gaoji,
            "difen": difen,
            "qianggang": qianggang,
            "piaofen": piaofen,
            "piaofenleixing": piaofenleixing,
            "jiesuan": jiesuan,
            "fengDing": fengDing,

            "jiesan": jiesan,
            "xianShi": xianShi,
            "kexuanwanfa": kexuanwanfa,

            "playerMinNum": renshu[0],
            "playerNum": renshu[1],
            "setCount": setCount,
            "paymentRoomCardType": isSpiltRoomCard,
        };
        return sendPack;
    },
    GetIdxsByKey: function (key) {
        if (!this.Toggles[key]) {
            return [];
        }
        let arr = [];
        for (let i = 0; i < this.Toggles[key].length; i++) {
            if (this.Toggles[key][i].getChildByName('checkmark').active) {
                arr.push(i);
            }
        }
        return arr;
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
        if ('jushu' == key || 'renshu' == key || 'fangfei' == key || 'piaoHua' == key) {
            this.ClearToggleCheck(needClearList, needShowIndexList);
            this.UpdateLabelColor(toggles);
            this.UpdateTogglesLabel(toggles, false);
            this.UpdateOnClickToggle();
            return;
        } else if ('kexuanwanfa' == key) {
            // if(this.Toggles['zhuaniao'][0].getChildByName('checkmark').active==true && toggleIndex==4){
            //     //红中赖子
            //     app.SysNotifyManager().ShowSysMsg("按庄家中鸟不能勾选红中癞子玩法");
            //     return;
            // }
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
        this.UpdateOnClickToggle();
    },

   UpdateOnClickToggle: function() {
        if (this.Toggles["jushu"]) {
            if (this.Toggles["renshu"][0].getChildByName("checkmark").active) {
                this.Toggles['jushu'][3].active = true;
                this.Toggles['jushu'][4].active = false;
                this.Toggles['jushu'][5].active = false;
                if(/*this.Toggles['jushu'][3].getChildByName("checkmark").active 
                    || */this.Toggles['jushu'][4].getChildByName("checkmark").active){
                    // this.Toggles['jushu'][3].getChildByName("checkmark").active = false;
                    this.Toggles['jushu'][4].getChildByName("checkmark").active = false;
                    this.Toggles['jushu'][1].getChildByName("checkmark").active = true;
                }
            } else {
                this.Toggles['jushu'][3].active = true;
                this.Toggles['jushu'][4].active = true;
                this.Toggles['jushu'][5].active = false;
            }
            this.UpdateLabelColor(this.Toggles['jushu'][0].parent);
        }
        if (this.Toggles["piaofenleixing"]) {
            if (this.Toggles["piaofen"][2].getChildByName("checkmark").active) {
                this.Toggles['piaofenleixing'][0].parent.active = false;
            } else {
                this.Toggles['piaofenleixing'][0].parent.active = true;
            }
        }
        if(this.Toggles["kexuanwanfa"]){
            this.UpdateLabelColor(this.Toggles['kexuanwanfa'][0].parent);

            //两人场
            if(this.Toggles["renshu"][0].getChildByName("checkmark").active){
                //缺2门”与“不带万字牌”只能二选一；
                //缺2门”与“不带风牌”只能二选一；
                if(this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active){
                    //不带万字牌
                    this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active = false;
                    if(this.Toggles['kexuanwanfa'][2].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][2].getChildByName("label").color = cc.color(180, 180, 180);
                    }
                    //不带风牌
                    this.Toggles['kexuanwanfa'][6].getChildByName("checkmark").active = false;
                    if(this.Toggles['kexuanwanfa'][6].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][6].getChildByName("label").color = cc.color(180, 180, 180);
                    }   
                }
                if(this.Toggles['kexuanwanfa'][2].getChildByName("checkmark").active){
                    //缺2门
                    this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active = false;
                    if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(180, 180, 180);
                    }
                }
                if(this.Toggles['kexuanwanfa'][6].getChildByName("checkmark").active){
                    //缺2门
                    this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active = false;
                    if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(180, 180, 180);
                    }
                }
                //2人场默认不勾选“报听限制”，但是可以选；
                // this.Toggles['kexuanwanfa'][8].getChildByName("checkmark").active = false;

                //“不可抢杠胡”，仅3人场可选；
                this.Toggles['kexuanwanfa'][11].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][11].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(180, 180, 180);
                }

                //2人场不可选座位随机
                this.Toggles['kexuanwanfa'][14].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][14].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][14].getChildByName("label").color = cc.color(180, 180, 180);
                }
                
            }
            //三人场
            else if(this.Toggles["renshu"][1].getChildByName("checkmark").active){
                //“缺2门”仅2人场可选；
                this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(180, 180, 180);
                }
                //“自摸抓码,不带风牌,不可吃,报听限制”，固定勾选不可取消；
                this.Toggles['kexuanwanfa'][1].getChildByName("checkmark").active = true;
                if(this.Toggles['kexuanwanfa'][1].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][1].getChildByName("label").color = cc.color(180, 180, 180);
                }   
                this.Toggles['kexuanwanfa'][6].getChildByName("checkmark").active = true;
                if(this.Toggles['kexuanwanfa'][6].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][6].getChildByName("label").color = cc.color(180, 180, 180);
                }   
                this.Toggles['kexuanwanfa'][3].getChildByName("checkmark").active = true;
                if(this.Toggles['kexuanwanfa'][3].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][3].getChildByName("label").color = cc.color(180, 180, 180);
                }   
                /*this.Toggles['kexuanwanfa'][8].getChildByName("checkmark").active = true;
                if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(180, 180, 180);
                } */  

                //2人场不可选座位随机
                if(!this.Toggles['kexuanwanfa'][14].getChildByName("checkmark").active){
                    if(this.Toggles['kexuanwanfa'][14].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][14].getChildByName("label").color = cc.color(158, 49, 16);
                    }
                }else{
                    if(this.Toggles['kexuanwanfa'][14].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][14].getChildByName("label").color = cc.color(0, 155, 46);
                    }
                }
            }
            //四人场
            else if(this.Toggles["renshu"][2].getChildByName("checkmark").active){
                //“缺2门”仅2人场可选；
                this.Toggles['kexuanwanfa'][10].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][10].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][10].getChildByName("label").color = cc.color(180, 180, 180);
                }   
                //“不可抢杠胡”，仅3人场可选；
                this.Toggles['kexuanwanfa'][11].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][11].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][11].getChildByName("label").color = cc.color(180, 180, 180);
                }
                //4人场：固定不可选“报听限制”；
                this.Toggles['kexuanwanfa'][8].getChildByName("checkmark").active = false;
                if(this.Toggles['kexuanwanfa'][8].getChildByName("label")){
                    this.Toggles['kexuanwanfa'][8].getChildByName("label").color = cc.color(180, 180, 180);
                }   

                //2人场不可选座位随机
                if(!this.Toggles['kexuanwanfa'][14].getChildByName("checkmark").active){
                    if(this.Toggles['kexuanwanfa'][14].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][14].getChildByName("label").color = cc.color(158, 49, 16);
                    }
                }else{
                    if(this.Toggles['kexuanwanfa'][14].getChildByName("label")){
                        this.Toggles['kexuanwanfa'][14].getChildByName("label").color = cc.color(0, 155, 46);
                    }
                }
            }

            //“有胡必胡”固定勾选，不论几人场不可取消；
            this.Toggles['kexuanwanfa'][0].getChildByName("checkmark").active = true;
            if(this.Toggles['kexuanwanfa'][0].getChildByName("label")){
                this.Toggles['kexuanwanfa'][0].getChildByName("label").color = cc.color(180, 180, 180);
            }
        }
    },
});

module.exports = wxmjChildCreateRoom;