/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BaseMJ_winlost_child"),

    properties: {},

    // use this for initialization
    OnLoad: function() {
        this.ComTool = app.ComTool();
        this.IntegrateImage = app.SysDataManager().GetTableDict("IntegrateImage");
        this.ShareDefine = app.ShareDefine();
    },
    ShowPlayerData: function(setEnd, playerAll, index) {
        let jin1 = setEnd.jin;
        let jin2 = 0;
        let jinJin = 0;
        if (setEnd.jin2 > 0) {
            jin2 = setEnd.jin2;
        }
        if (setEnd.jinJin > 0) {
            jinJin = setEnd.jinJin;
        }
        let dPos = setEnd.dPos;
        let posResultList = setEnd["posResultList"];
        let posHuArray = new Array();
        this.posCount = posResultList.length;
        for (let i = 0; i < this.posCount; i++) {
            let posInfo = posResultList[i];
            let pos = posInfo["pos"];
            let posHuType = this.ShareDefine.HuTypeStringDict[posInfo["huType"]];
            posHuArray[pos] = posHuType;
        }
        let PlayerInfo = playerAll[index];
        this.node.active = true;
        this.UpdatePlayData(this.node, posResultList[index], PlayerInfo, jin1, jinJin);
        let huNode = this.node.getChildByName('jiesuan').getChildByName('hutype');
        this.ShowPlayerHuImg(huNode, posResultList[index]['huType']);

        if (dPos === index) {
            this.node.getChildByName("user_info").getChildByName("zhuangjia").active = true;
        } else {
            this.node.getChildByName("user_info").getChildByName("zhuangjia").active = false;
        }
        //显示头像，如果头像UI
        if (PlayerInfo["pid"] && PlayerInfo["iconUrl"]) {
            app.WeChatManager().InitHeroHeadImage(PlayerInfo["pid"], PlayerInfo["iconUrl"]);
        }
        let weChatHeadImage = this.node.getChildByName("user_info").getChildByName("head_img").getComponent("WeChatHeadImage");
        weChatHeadImage.ShowHeroHead(PlayerInfo["pid"]);
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

    ShowPlayerInfo: function (ShowNode, PlayerInfo, HuList) {
        ShowNode.getChildByName('lable_name').getComponent("cc.Label").string = this.ComTool.GetBeiZhuName(PlayerInfo["pid"],PlayerInfo["name"]);
        ShowNode.getChildByName('label_id').getComponent("cc.Label").string = "ID:" + this.ComTool.GetPid(PlayerInfo["pid"]);
        
        ShowNode.getChildByName('icon_ting').active = HuList.isTing;
        ShowNode.getChildByName('icon_junZhuang').active = HuList.isJunZhuang;

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
    },

    ShowPlayerShowCard: function(ShowNode, cardIDList, handCard, jin1, jin2) {
        ShowNode.active = 1;
        let UICard_ShowCard = ShowNode.getComponent("UIMJCard_ShowCard");
        UICard_ShowCard.ShowDownCard(cardIDList, handCard, jin1, jin2);
    },
    ShowPlayerDownCard: function(ShowNode, publishcard, jin1 = 0, jin2 = 0) {
        ShowNode.active = 1;
        let UICard_DownCard = ShowNode.getComponent("UIMJCard_Down");
        UICard_DownCard.ShowDownCard(publishcard, jin1, jin2);
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
    LabelName: function(huType) {
        let huTypeDict = {};
        huTypeDict["PiaoFen"]="军庄";
        huTypeDict["NiaoPai"]="不军庄";
        huTypeDict["Hu"]="底胡";
        huTypeDict["PingHu"]="平胡";
        huTypeDict["QDHu"]="七对";
        huTypeDict["HYSDDHu"]="混七对";
        huTypeDict["QYS"]="清一色";
        huTypeDict["HYS"]="混一色";
        huTypeDict["ZYS"]="风清";
        huTypeDict["PPH"]="碰碰胡";
        huTypeDict["HYSDDP"]="混碰";
        huTypeDict["QXSSL"]="七星大乱";
        huTypeDict["SSL"]="大乱";
        huTypeDict["DianPao"]="点炮";
        huTypeDict["GSKH"]="杠开";
        huTypeDict["GSP"]="杠铳";
        huTypeDict["MenQing"]="门清";
        huTypeDict["WuJingHu"]="无搭";
        huTypeDict["HDLY"]="铲底";
        huTypeDict["DuDiao"]="独铳";
        huTypeDict["DD"]="独吊";
        huTypeDict["BaoJiao"]="直叫";
        huTypeDict["HuaShu"]="补花";
        huTypeDict["PengBanZi"]="风刻";
        huTypeDict["SiJinDao"]="4搭";
        huTypeDict["TianHu"]="天胡";
        huTypeDict["DiHu"]="地胡";
        huTypeDict["HDDHu"]="豪华七对";
        huTypeDict["QYSQD"]="清七对";
        huTypeDict["QYSPPH"]="清碰";
        huTypeDict["BaHua"]="八花";
        huTypeDict["AnGang"]="暗杠";
        huTypeDict["JieGang"]="明杠";
        huTypeDict["Gang"]="起手暗杠";
        huTypeDict["DiFen"]="底";
        huTypeDict["DiHua"]="花";


        return huTypeDict[huType];
    },

    IsNotShowScore: function (huType) {
        let multi2 = ["PiaoFen", "NiaoPai"];
        let isShow = multi2.indexOf(huType) != -1;
        return isShow;
    },
    IsShowMulti: function (huType) {
        let multi = ["HuaShu", "PengBanZi", "AnGang", "JieGang", "Gang"];
        let isShow = multi.indexOf(huType) != -1;
        return isShow;
    },
    IsShowMulti2: function (huType) {
        let multi2 = ["PingHu", "QDHu", "HYSDDHu", "QYS", "HYS", "PPH", "HYSDDP", "QXSSL", "SSL", "DianPao", "GSKH", "GSP", "MenQing", "WuJingHu", "HDLY", "DuDiao", "DD", "BaoJiao"];
        let isShow = multi2.indexOf(huType) != -1;
        return isShow;
    },

    IsShowMulti3: function (huType) {
        let multi3 = ["DiFen"];
        let isShow = multi3.indexOf(huType) != -1;
        return isShow;
    },

    IsShowMulti4: function (huType) {
        let multi4 = ["HDDHu", "BaHua", "SiJinDao", "QYSQD", "QYSPPH", "TianHu", "DiHu", "ZYS"];
        let isShow = multi4.indexOf(huType) != -1;
        return isShow;
    },

    IsShowMulti5: function (huType) {
        let multi5 = ["DiHua"];
        let isShow = multi5.indexOf(huType) != -1;
        return isShow;
    },
    ShowPlayerJieSuan: function (ShowNode, huInfoAll) {
        let huInfo = huInfoAll["huTypeMap"];
        if (typeof (huInfo) == "undefined") {
            huInfo = huInfoAll["endPoint"]["huTypeMap"];
        }
        for (let huType in huInfo) {
            let huPoint = huInfo[huType];
            if (this.IsShowMulti(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + "+" + huPoint + "花");
            } else if (this.IsShowMulti2(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + "x" + huPoint);
            } else if (this.IsShowMulti3(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + huPoint + "花");
            } else if (this.IsShowMulti4(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + huPoint + "封顶");
            } else if (this.IsShowMulti5(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + huPoint + "分");
            } else if (this.IsNotShowScore(huType)) {
                this.ShowLabelName(ShowNode.getChildByName("label_lists"), this.LabelName(huType));
            } else {
                this.ShowLabelName(ShowNode.getChildByName("label_lists"), this.LabelName(huType) + ":" + huPoint);
            }
            console.log("ShowPlayerJieSuan", huType, huPoint);
        }
    },
});