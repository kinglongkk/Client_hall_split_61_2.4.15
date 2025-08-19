var app = require("app");
cc.Class({
    extends: require("BaseForm"),
    properties: {
        bg_num: [cc.SpriteFrame],
    },
    //初始化
    OnCreateInit: function () {
        this.liushuiLayout = this.GetWndNode("img_dk/liushuiScrollView/view/content");
        this.demo = this.liushuiLayout.children[0];
    },
    OnShow: function (liuShuiList, huLuoBoMap) {
        console.log("liushuiScrollView", liuShuiList, huLuoBoMap);
        this.ShowItemDetail(liuShuiList);
        let luoBoLayout = this.GetWndNode("img_dk/luoboLayout");
        for (let i = 0; i < luoBoLayout.children.length; i++) {
            luoBoLayout.children[i].opacity = 0;
        }
        if (JSON.stringify(huLuoBoMap) != "{}") {
            this.ShowHuLuoBoMap(huLuoBoMap);
        }
    },
    ShowHuLuoBoMap: function (huLuoBoMap) {
        let luoBoLayout = this.GetWndNode("img_dk/luoboLayout");
        let imageString = "EatCard_Self_";
        let huLuoBoList = this.SetMapZhuanList(huLuoBoMap);
        for (let i = 0; i < huLuoBoList.length; i++) {
            let luoBoCard = luoBoLayout.children[i];
            if (!luoBoCard) {
                luoBoCard = cc.instantiate(luoBoLayout.children[0]);
                luoBoLayout.addChild(luoBoCard);
            }
            luoBoCard.opacity = 255;
            let huLuoBo = huLuoBoList[i];
            let cardType = huLuoBo["cardType"];
            let num = huLuoBo["num"];
            let cardCom = luoBoCard.getComponent("UIMJCard_Down");
            if (cardType > 0) {
                cardCom.ShowImage(luoBoCard, imageString, cardType + "01");
            }
            luoBoCard.getChildByName("lb_num").getComponent(cc.Label).string = num;
        }
    },
    ShowItemDetail: function (liuShuiList) {
        for (let i = 0; i < this.liushuiLayout.children.length; i++) {
            this.liushuiLayout.children[i].active = false;
        }
        for (let i = 0; i < liuShuiList.length; i++) {
            let item = this.liushuiLayout.children[i];
            if (!item) {
                item = cc.instantiate(this.demo);
                this.liushuiLayout.addChild(item);
            }
            item.active = true;
            let liuShui = liuShuiList[i];
            let cardType = liuShui["cardType"];
            let duiXiangList = liuShui["duiXiangList"];
            let huTypeMap = liuShui["huTypeMap"];
            let luoBoPoint = liuShui["luoBoPoint"];
            let point = liuShui["point"];
            let yuPoint = liuShui["yuPoint"];
            this.ShowOpType(item.children[0], huTypeMap);
            this.ShowCard(item.children[0], cardType);
            this.ShowHuFen(item.children[0], point);
            this.ShowLuoBoFen(item.children[0], luoBoPoint);
            this.ShowYuFen(item.children[0], yuPoint);
            this.ShowDuiXiang(item.children[0], duiXiangList);
        }
    },
    ShowOpType: function (showNode, huTypeMap) {
        let strString = "";
        for (let key in huTypeMap) {
            let huTypeStr = this.GetHuTypeDict(key);
            let fanShu = huTypeMap[key];
            if (fanShu > 0) {
                huTypeStr = huTypeStr + ":" + fanShu;
            }
            strString += " " + huTypeStr;
        }
        showNode.getChildByName("lb_type").getComponent(cc.Label).string = strString;
    },
    ShowCard: function (showNode, cardType) {
        if (cardType > 0) {
            showNode.getChildByName("card").opacity = 255;
            let imageString = "EatCard_Self_";
            let cardCom = showNode.getChildByName("card").getComponent("UIMJCard_Down");
            cardCom.ShowImage(showNode.getChildByName("card"), imageString, cardType + "01");
        } else {
            showNode.getChildByName("card").opacity = 0;
        }
    },
    ShowHuFen: function (showNode, point) {
        showNode.getChildByName("lb_hufen").getComponent(cc.Label).string = point;
    },
    ShowLuoBoFen: function (showNode, luoBoPoint) {
        showNode.getChildByName("lb_luobofen").getComponent(cc.Label).string = luoBoPoint;
    },
    ShowYuFen: function (showNode, yuPoint) {
        showNode.getChildByName("lb_yufen").getComponent(cc.Label).string = yuPoint;
    },
    ShowDuiXiang: function (showNode, duiXiangList) {
        let duixiangLayout = showNode.getChildByName("duixiangLayout");
        for (let i = 0; i < duixiangLayout.children.length; i++) {
            duixiangLayout.children[i].opacity = 0;
        }
        for (let i = 0; i < duiXiangList.length; i++) {
            let duixiang = duixiangLayout.children[i];
            if (!duixiang) {
                duixiang = cc.instantiate(duixiangLayout.children[0]);
                duixiangLayout.addChild(duixiang);
            }
            duixiang.opacity = 255;
            let index = duiXiangList[i];
            duixiang.getComponent(cc.Sprite).spriteFrame = this.bg_num[index];
        }
    },
    GetHuTypeDict: function (type) {
        let huTypeDict = {};
        huTypeDict["JZ"]="绝张";
        huTypeDict["QGH"]="抢杠胡";
        huTypeDict["GSP"]="杠上炮";
        huTypeDict["HDLY"]="海底捞月";
        huTypeDict["MSHC"]="妙手回春";
        huTypeDict["GSKH"]="杠上开花";
        huTypeDict["MQ"]="门清";
        huTypeDict["STK"]="双同刻";
        huTypeDict["SAK"]="双暗刻";
        huTypeDict["DYJ"]="断幺九";
        huTypeDict["DDH"]="对对胡";
        huTypeDict["WHG"]="无花果";
        huTypeDict["TBD"]="推不倒";
        huTypeDict["HYS"]="混一色";
        huTypeDict["BQR"]="不求人";
        huTypeDict["QDK"]="全单刻";
        huTypeDict["QSK"]="全双刻";
        huTypeDict["QYS"]="清一色";
        huTypeDict["SanAK"]="三暗刻";
        huTypeDict["QD"]="七对";
        huTypeDict["QL"]="清龙";
        huTypeDict["XSY"]="小三元";
        huTypeDict["HLT"]="混老头";
        huTypeDict["XYW"]="小于五";
        huTypeDict["DYW"]="大于五";
        huTypeDict["SJG"]="三节高";
        huTypeDict["SSSJG"]="三色三节高";
        huTypeDict["YQHSQ"]="一起化三清";
        huTypeDict["XSX"]="小四喜";
        huTypeDict["DSY"]="大三元";
        huTypeDict["SanTK"]="三同刻";
        huTypeDict["SEJC"]="十二金钗";
        huTypeDict["SiAK"]="四暗刻";
        huTypeDict["WMQ"]="五门齐";
        huTypeDict["SiJG"]="四节高";
        huTypeDict["LYS"]="绿一色";
        huTypeDict["ZYS"]="字一色";
        huTypeDict["QX"]="全小";
        huTypeDict["QZ"]="全中";
        huTypeDict["QuanD"]="全大";
        huTypeDict["QLT"]="清老头";
        huTypeDict["DDHJ"]="独钓寒江";
        huTypeDict["DH"]="地胡";
        huTypeDict["HQBX"]="红雀报喜";
        huTypeDict["SBLH"]="十八罗汉";
        huTypeDict["TH"]="天胡";
        huTypeDict["FHXY"]="风花雪月";
        huTypeDict["DSX"]="大四喜";
        huTypeDict["QCZL"]="七尺珠帘";
        huTypeDict["GSWS"]="国士无双";
        huTypeDict["JLBD"]="九莲宝灯";
        huTypeDict["QXLY"]="七星揽月";
        huTypeDict["ZM"]="自摸";
        huTypeDict["AG"]="暗杠";
        huTypeDict["ZG"]="直杠";
        huTypeDict["PHG"]="碰后杠";
        huTypeDict["FPKZ"]="风牌刻子";
        huTypeDict["YPKZ"]="元牌刻子";

        return huTypeDict[type];
    },
    SetMapZhuanList: function (huLuoBoMap) {
        let huLuoBoList = [];
        for (let key in huLuoBoMap) {
            let cardType = key;
            let num = huLuoBoMap[key];
            huLuoBoList.push({"cardType": cardType, "num": num});
        }
        return huLuoBoList;
    },
});