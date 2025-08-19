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
        if (typeof (huType) == "undefined") {
            huNode.getComponent(cc.Label).string = '';
        } else if (huType == this.ShareDefine.HuType_DianPao) {
            huNode.getComponent(cc.Label).string = '点泡';
        } else if (huType == this.ShareDefine.HuType_JiePao) {
            huNode.getComponent(cc.Label).string = '接炮';
        } else if (huType == this.ShareDefine.HuType_ZiMo) {
            huNode.getComponent(cc.Label).string = '自摸';
        } else {
            huNode.getComponent(cc.Label).string = '';
        }
    },
    ShowPlayerJieSuan: function (ShowNode, huInfoAll) {
        let huInfo = huInfoAll['endPoint'].huTypeMap;
        for (let huType in huInfo) {
            let huPoint = huInfo[huType];
            if (this.IsShowMulti2(huType)) {
				this.ShowLabelName(ShowNode.getChildByName("label_lists"), this.LabelName(huType) + "*" + huPoint);
			} else {
				this.ShowLabelName(ShowNode.getChildByName("label_lists"), this.LabelName(huType) + "：" + huPoint);
            }
            console.log("ShowPlayerJieSuan", huType);
        }
    },

    IsShowMulti2: function (huType) {
		let multi2 = [
            // "GangJing", "AnGang", "MingGang"
		];
		let isShow = multi2.indexOf(huType) != -1;
		return isShow;
    },
    
    LabelName: function (huType) {
        let huTypeDict = {};

        huTypeDict["PH"]="屁胡";
        huTypeDict["XX"]="小血";
        huTypeDict["DX"]="大血";
        huTypeDict["QD"]="七对";
        huTypeDict["HHQD"]="豪华七对";
        huTypeDict["SHHQD"]="双豪华七对";
        huTypeDict["SanHHQD"]="三豪华七对";
        huTypeDict["QYS"]="清一色";
        huTypeDict["JYS"]="将一色";
        huTypeDict["PPH"]="碰碰胡";
        huTypeDict["QQR"]="全求人";
        huTypeDict["MQ"]="门清";
        huTypeDict["YH"]="硬胡";
        huTypeDict["GSH"]="杠上花";
        huTypeDict["GSP"]="杠上炮";
        huTypeDict["PZG"]="痞子杠";
        huTypeDict["MG"]="明杠";
        huTypeDict["LZG"]="赖子杠";
        huTypeDict["AG"]="暗杠";
        huTypeDict["GZ"]="跟庄";

        if (!huTypeDict.hasOwnProperty(huType)) {
            console.error("huType = " + huType + "is not exist");
        }

        return huTypeDict[huType];
    },
});
