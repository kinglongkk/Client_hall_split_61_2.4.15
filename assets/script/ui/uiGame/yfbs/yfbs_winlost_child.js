/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BaseMJ_winlost_child"),

    properties: {
        prefab_shang: cc.Prefab,
        prefab_card: cc.Prefab,
        you: cc.Label,
    },

    // use this for initialization
    OnLoad: function () {
        app["ctwsk_PokerCard"] = require("ctwsk_PokerCard").GetModel;
        this.ComTool = app.ComTool();
        this.ShareDefine = app.ShareDefine();
        this.PokerCard = app.ctwsk_PokerCard();
    },
    ShowPlayerJieSuan() {

    },
    ShowPlayerRecord: function () {

    },
    ShowPlayerShowCard: function () {

    },
    ShowPlayerDownCard: function () {

    },
    ShowPlayerHuaCard() {

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
        } else if (huType == this.ShareDefine.HuType_QGH) {
            huNode.getComponent(cc.Label).string = '抢杠胡';
        } else {
            huNode.getComponent(cc.Label).string = '';
        }
    },

    onPlusScore(s) {
        if (s > 0) {
            return '+' + s;
        }
        return s;
    },

    ShowPlayerData: function (setEnd, playerAll, index) {
        let jin1 = setEnd.jin1;
        let jin2 = setEnd.jin2;
        let dPos = setEnd.dPos;
        let posResultList = setEnd["posResultList"];
        let posHuArray = new Array();
        let posCount = posResultList.length;
        for (let i = 0; i < posCount; i++) {
            let posInfo = posResultList[i];
            let pos = posInfo["pos"];
            let posHuType = this.ShareDefine.HuTypeStringDict[posInfo["huType"]];
            posHuArray[pos] = posHuType;
        }
        let PlayerInfo = playerAll[index];
        this.node.active = true;
        this.UpdatePlayData(this.node, posResultList[index], PlayerInfo, jin1, jin2);
        let huNode = this.node.getChildByName('jiesuan').getChildByName('hutype');
        // this.ShowPlayerHuImg(huNode, posResultList[index]['huType']);

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


        //
        let posEndList = posResultList[index];
        //显示伙伴
        let partnerPos = posResultList[dPos].partnerPos;
        if (partnerPos == posEndList.pos) {
            this.node.getChildByName("user_info").getChildByName("huoban").active = true;
        } else {
            this.node.getChildByName("user_info").getChildByName("huoban").active = false;
        }
        //显示头游
        let endType = posEndList.endType;//游数  0为默认值
        if (endType == "ONE") {
            this.you.string = "头游";
        } else if (endType == "TWO") {
            this.you.string = "二游";
        } else if (endType == "THREE") {
            this.you.string = "三游";
        } else if (endType == "FOUR") {
            this.you.string = "";
        } else {
            this.you.string = "";
        }

        let record = this.node.getChildByName("record");
        //显示得分
        //赏分
        record.getChildByName('lable_dadu').active = posEndList.isDaDu;
        if (posEndList.piaoFen > 0) {//
            record.getChildByName('lable_piao').getComponent(cc.Label).string = "飘" + posEndList.piaoFen;
        } else if (posEndList.piaoFen == 0) {//
            record.getChildByName('lable_piao').getComponent(cc.Label).string = "不飘";
        } else if (posEndList.piaoFen < 0) {
            record.getChildByName('lable_piao').getComponent(cc.Label).string = "";
        }
        if (posEndList.wskPoint > 0) {//捡分
            record.getChildByName('lb_jianfen').getComponent(cc.Label).string = "+" + posEndList.wskPoint;
        } else {
            record.getChildByName('lb_jianfen').getComponent(cc.Label).string = posEndList.wskPoint;
        }
        if (posEndList.shaoWangPoint > 0) {//烧王分
            record.getChildByName('lb_shaowangfen').getComponent(cc.Label).string = "+" + posEndList.shaoWangPoint;
        } else {
            record.getChildByName('lb_shaowangfen').getComponent(cc.Label).string = posEndList.shaoWangPoint;
        }
        if (posEndList.bombScore > 0) {//炸弹分
            record.getChildByName('lb_zhadanfen').getComponent(cc.Label).string = "+" + posEndList.bombScore;
        } else {
            record.getChildByName('lb_zhadanfen').getComponent(cc.Label).string = posEndList.bombScore;
        }
        if (posEndList.bombScore > 0) {//输赢分
            record.getChildByName('lb_shuyingfen').getComponent(cc.Label).string = "+" + posEndList.baseScore;
        } else {
            record.getChildByName('lb_shuyingfen').getComponent(cc.Label).string = posEndList.baseScore;
        }
        if (posEndList.piaoPoint > 0) {//飘分
            record.getChildByName('lb_piaofen').getComponent(cc.Label).string = "+" + posEndList.piaoPoint;
        } else  {
            record.getChildByName('lb_piaofen').getComponent(cc.Label).string = posEndList.piaoPoint;
        }
        if (posEndList.point > 0) {
            record.getChildByName('lb_shuying').getComponent(cc.Label).string = "+" + posEndList.point;
        } else {
            record.getChildByName('lb_shuying').getComponent(cc.Label).string = posEndList.point;
        }
        if (posEndList.totalPoint > 0) {
            record.getChildByName('lb_point').getComponent(cc.Label).string = "+" + posEndList.totalPoint;
        } else {
            record.getChildByName('lb_point').getComponent(cc.Label).string = posEndList.totalPoint;
        }
        //比赛分
        if (typeof(posEndList.sportsPoint) != "undefined") {
            if (posEndList.sportsPoint > 0) {
                record.getChildByName('lb_sportsPoint').getComponent(cc.Label).string = "+" + posEndList.sportsPoint;
            } else {
                record.getChildByName('lb_sportsPoint').getComponent(cc.Label).string = posEndList.sportsPoint;
            }
        } else {
            record.getChildByName('lb_sportsPoint').getComponent(cc.Label).string = '';
        }

        //
        // if (posEndList.totalPoint > 0) {
        //     PlayerNode.getChildByName('lb_zdf').getComponent(cc.Label).string = "+" + posEndList.totalPoint;
        // } else {
        //     PlayerNode.getChildByName('lb_zdf').getComponent(cc.Label).string = posEndList.totalPoint;
        // }

        //显示牌
        let prizeCardList = [];
        let shouLayout = this.node.getChildByName('shouLayout');
        let shouCard = posEndList.shouCard;
        for (let i = 0; i < shouCard.length; i++) {
            let cardType = shouCard[i];
            if (cardType > 0) {
                let cardNode = shouLayout.children[i];
                if (!cardNode) {
                    cardNode = cc.instantiate(this.prefab_card);
                    cardNode.active = false;
                    shouLayout.addChild(cardNode);
                }
                cardNode.active = true;
                this.ShowCard(cardType, cardNode, 0, true, false, false, false);
            }
        }

        let shangScrollView = this.node.getChildByName('scrollview');
        let layout = shangScrollView.getChildByName('layout');
        layout.removeAllChildren();
        console.log('当前显示的玩家是', posEndList);
        let prizeCard = posEndList.bombCardList;//[cardList:{}]
        for (let l = 0; l < prizeCard.length; l++) {
            let shangLayOut = cc.instantiate(this.prefab_shang);
            layout.addChild(shangLayOut);
            let paiList = prizeCard[l].slice(2, prizeCard[l].length);
            for (var z = 0; z < paiList.length; z++) {
                let cardNode = cc.instantiate(this.prefab_card);
                let cardValue = paiList[z];
                this.ShowCard(cardValue, cardNode, 0, true, false, false, false);
                shangLayOut.addChild(cardNode);
            }
        }
    },

    ShowCard: function (cardType, cardNode, sameCardNum, isLastCard, isShowLandowner = false, hideBg = false, isRazz = false) {
        cardNode.active = true;
        if (cardType == 0) {
            cardNode.getChildByName("poker_back").active = true;
            return;
        } else {
            cardNode.getChildByName("poker_back").active = false;
        }
        this.PokerCard.GetPokeCard(cardType, cardNode, sameCardNum, isLastCard, isShowLandowner, hideBg, isRazz);

    },

    LabelName: function (huType) {
        let huTypeDict = {
            QDHu: "七对胡",
            Gang: "杠",
            JieGang: "接杠",
            QYS: "清一色",
            Long: "一条龙",
            HunYou: "混悠",
            AnGang: "暗杠",
            Hu: "胡",
        };
        return huTypeDict[huType];
    },
});
