/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BaseMJ_winlost_child"),

    properties: {
    },

    // use this for initialization
    OnLoad: function () {
        this.ComTool = app.ComTool();
        this.ShareDefine = app.ShareDefine();
    },
    ShowPlayerHuImg: function (huNode, huTypeName) {
        /*huLbIcon
        *  0:单吊，1：点炮，2：单游，3：胡，4：六金，5：平胡，6:抢杠胡 7:抢金，8：三游，9：四金倒，10：三金倒，11：三金游，12：十三幺
        *  13：双游，14：天胡，15：五金，16：自摸 17:接炮
        */
        let huType = this.ShareDefine.HuTypeStringDict[huTypeName];
        //默认颜色描边
        huNode.color = new cc.Color(252, 236, 117);
        huNode.getComponent(cc.LabelOutline).color = new cc.Color(163, 61, 8);
        huNode.getComponent(cc.LabelOutline).Width = 2;
        if (typeof(huType) == "undefined") {
            huNode.getComponent(cc.Label).string = '';
        } else if (huType == this.ShareDefine.HuType_DianPao) {
            huNode.getComponent(cc.Label).string = '点炮';
            huNode.color = new cc.Color(192, 221, 245);
            huNode.getComponent(cc.LabelOutline).color = new cc.Color(31, 55, 127);
            huNode.getComponent(cc.LabelOutline).Width = 2;
        } else if (huType == this.ShareDefine.HuType_JiePao) {
            huNode.getComponent(cc.Label).string = '接炮';
        } else if (huType == this.ShareDefine.HuType_ZiMo) {
            huNode.getComponent(cc.Label).string = '自摸';
        } else if (huType == this.ShareDefine.HuType_QGH) {
            huNode.getComponent(cc.Label).string = '抢杠胡';
        } else if (huType == this.ShareDefine.HuType_SiJinDao) {
            huNode.getComponent(cc.Label).string = '四金倒';
        } else {
            huNode.getComponent(cc.Label).string = '';
        }
    },

    UpdatePlayData: function(PlayerNode, HuList, PlayerInfo, jin1 = 0, jin2 = 0, maiMaList = []) {
        this.showLabelNum = 1;
        this.ClearLabelShow(PlayerNode.getChildByName('jiesuan').getChildByName('label_lists'));
        this.ShowPlayerRecord(PlayerNode.getChildByName('record'), HuList);
        this.ShowPlayerJieSuan(PlayerNode.getChildByName('jiesuan'), HuList);
        this.ShowPlayerInfo(PlayerNode.getChildByName('user_info'), PlayerInfo, HuList);
        this.ShowPlayerDownCard(PlayerNode.getChildByName('downcard'), HuList.publicCardList, jin1, jin2);
        this.ShowPlayerShowCard(PlayerNode.getChildByName('showcard'), HuList.shouCard, HuList.handCard, jin1, jin2);
        // this.ShowPlayerHuaCard(PlayerNode.getChildByName('huacard'), HuList.huaList);
        this.ShowPlayerHuaCard(PlayerNode.getChildByName('huacardscrollView'), HuList.huaList);
    },

    ShowPlayerRecord: function(ShowNode, huInfo) {
        //显示比赛分
        ShowNode.getChildByName('tip_point').active = false;
        if (typeof(huInfo.sportsPointTemp) != "undefined") {
            ShowNode.getChildByName('tip_sportspoint').active = true;
            if (huInfo.sportsPointTemp > 0) {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = "+" + huInfo.sportsPointTemp;
            } else {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = huInfo.sportsPointTemp;
            }
        } else if (typeof(huInfo.sportsPoint) != "undefined") {
            ShowNode.getChildByName('tip_sportspoint').active = true;
            if (huInfo.sportsPoint > 0) {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = "+" + huInfo.sportsPoint;
            } else {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = huInfo.sportsPoint;
            }
        } else {
            ShowNode.getChildByName('tip_sportspoint').active = false;
            ShowNode.getChildByName('tip_point').active = true;
            let absNum = Math.abs(huInfo["point"]);
            if (absNum > 10000) {
                let shortNum = (absNum / 10000).toFixed(2);
                if (huInfo["point"] > 0) {
                    ShowNode.getChildByName('tip_point').getChildByName('lb_point').getComponent("cc.Label").string = '+' + shortNum + "万";
                } else {
                    ShowNode.getChildByName('tip_point').getChildByName('lb_point').getComponent("cc.Label").string = '-' + shortNum + "万";
                }
            } else {
                if (huInfo["point"] > 0) {
                    ShowNode.getChildByName('tip_point').getChildByName('lb_point').getComponent("cc.Label").string = '+' + huInfo["point"];
                } else {
                    ShowNode.getChildByName('tip_point').getChildByName('lb_point').getComponent("cc.Label").string = huInfo["point"];
                }
            }
        }

        //显示飘分
        ShowNode.getChildByName('tip_piaofen').active = true;
        if (huInfo.piaoFen > 0) {
            ShowNode.getChildByName('tip_piaofen').getChildByName('lb_piaofen').getComponent("cc.Label").string = "+" + huInfo.piaoFen;
        } else {
            ShowNode.getChildByName('tip_piaofen').getChildByName('lb_piaofen').getComponent("cc.Label").string = huInfo.piaoFen;
        }

    },

     ShowPlayerHuaCard: function (huacardscrollView, hualist) {
        huacardscrollView.active = true;
        // if (hualist.length > 0) {
        //     this.huaNum.active = true;
        //     this.huaNum.getComponent(cc.Label).string = hualist.length + "个";
        // }
        // else {
        //     this.huaNum.active = false;
        //     this.huaNum.getComponent(cc.Label).string = "";
        // }
        let view = huacardscrollView.getChildByName("view");
        let ShowNode = view.getChildByName("huacard");
        let UICard_ShowCard = ShowNode.getComponent("UIMJCard_ShowHua");
        UICard_ShowCard.ShowHuaList(hualist);
    },
    ShowPlayerJieSuan: function (ShowNode, huInfoAll) {
        let huInfo = huInfoAll['endPoint'].huTypeMap;
        let multiFlag = huInfoAll["multiFlag"] || false;
        let huTypeDict = this.GetHuTypeDict();
        for (let huType in huTypeDict) {
            let huPoint = huInfo[huType];
            if(typeof(huPoint) == "undefined") continue;
            if (this.IsShowMulti2(huType) && multiFlag) {
				this.ShowLabelName(ShowNode.getChildByName("label_lists"), huTypeDict[huType] + "x" + huPoint);
			} else {
				this.ShowLabelName(ShowNode.getChildByName("label_lists"), huTypeDict[huType] + "：" + huPoint);
            }
            console.log("ShowPlayerJieSuan", huType);
        }
    },

    IsShowMulti2: function (huType) {
		let multi2 = ["ZiMo", "HuaKai", "GangKai", "PPH", "DDC", "QD"];
		let isShow = multi2.indexOf(huType) != -1;
		return isShow;
    },
    
    GetHuTypeDict: function () {
        let huTypeDict = {};
        //排序
        huTypeDict["Piao"]="飘";
        huTypeDict["DiFen"]="底分";
        huTypeDict["HuaPai"]="花牌";
        huTypeDict["PengGang"]="碰杠";
        huTypeDict["PPH"]="碰碰胡";
        huTypeDict["MaiMaFen"]="买马分";
        huTypeDict["GangFen"]="杠分";
        //不排序
        huTypeDict["PingHu"]="平胡";
        huTypeDict["QYS"]="清一色";
        huTypeDict["HYS"]="混一色";
        huTypeDict["ZYS"]="全风板";
        huTypeDict["QD"]="七对子";
        huTypeDict["MenQing"]="门清";
        huTypeDict["HuaKai"]="杠开";
        huTypeDict["GangKai"]="杠开";
        huTypeDict["QiangGangHu"]="抢杠胡";
        huTypeDict["DDC"]="大吊车";
        huTypeDict["HDL"]="海底捞";
        huTypeDict["TianHu"]="天胡";
        huTypeDict["PiaoFen"]="飘分";
        huTypeDict["HuaFen"]="花分";
        huTypeDict["ZiMo"]="自摸";
        huTypeDict["JiePao"]="接炮";
        huTypeDict["HuaShu"]="花数";
        huTypeDict["HuaPai"]="花牌";
        return huTypeDict;
    },
});
