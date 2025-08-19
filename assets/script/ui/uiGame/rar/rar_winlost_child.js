/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BasePoker_winlost_child"),

    properties: {},

    // use this for initialization
    OnLoad: function () {
        this.PokerCard = app.PokerCard();
    },
    ShowPlayerData: function (setEnd, playerAll, index) {
        let beiShu = setEnd.beiShu;
        let player = setEnd.posResultList[index];
        let isRedRanksWin = setEnd.isRedRanksWin;

        let point = player.point;
        let roomPoint = player.roomPoint;
        let k510Point = player.k510Point;
        let excPoint = player.excPoint;

        let dPos = setEnd.dPos;

        //显示庄闲
        this.node.getChildByName("user_info").getChildByName("zhuangjia").active = (player.pos == dPos);
        this.node.getChildByName("user_info").getChildByName("img_meng").active = (player.pos == ((dPos + 2) % 4));
        // this.node.getChildByName("user_info").getChildByName("xianjia").active = !(player.pos == dPos);

        //玩家分数
        let winNode = this.node.getChildByName("lb_win_num");
        let loseNode = this.node.getChildByName("lb_lose_num");
        this.node.getChildByName("user_info").getChildByName("img_yingti").active = player["isYT"];
        this.node.getChildByName("user_info").getChildByName("img_chuntian").active = player["isCT"];
        this.node.getChildByName("lb_gonggongPoint").getComponent(cc.Label).string = beiShu;
        winNode.active = false;
        loseNode.active = false;
        let shouCardNode = this.node.getChildByName("shoucard");
        let shouCard = player["shouCard"];
        for (let i = 0; i < shouCardNode.children.length; i++) {
            let card = shouCard[i] || 0;
            let cardNode = shouCardNode.children[i];
            if (card > 0) {
                cardNode.active = true;
                this.ShowCard(card, cardNode);
            } else {
                cardNode.active = false;
            }
        }

        if (point > 0) {
            winNode.active = true;
            winNode.getComponent(cc.Label).string = "+" + point;
        } else {
            loseNode.active = true;
            loseNode.getComponent(cc.Label).string = point;
        }
        if (isRedRanksWin) {
            if (player.pos == dPos || player.pos == ((dPos + 2) % 4)) {
                this.node.getChildByName("user_info").getChildByName("bg_win").active = true;
                this.node.getChildByName("user_info").getChildByName("bg_lost").active = false;
            } else {
                this.node.getChildByName("user_info").getChildByName("bg_win").active = false;
                this.node.getChildByName("user_info").getChildByName("bg_lost").active = true;
            }
        } else {
            if (player.pos == dPos || player.pos == ((dPos + 2) % 4)) {
                this.node.getChildByName("user_info").getChildByName("bg_win").active = false;
                this.node.getChildByName("user_info").getChildByName("bg_lost").active = true;
            } else {
                this.node.getChildByName("user_info").getChildByName("bg_win").active = true;
                this.node.getChildByName("user_info").getChildByName("bg_lost").active = false;
            }
        }
        //房间分
        let lb_roomPoint = this.node.getChildByName("lb_roomPoint");
        let lb_zhuaPoint = this.node.getChildByName("lb_zhuaPoint");
        let lb_excPoint = this.node.getChildByName("lb_excPoint");
        let flag = roomPoint > 0 ? "+" : "";
        lb_roomPoint.getComponent(cc.Label).string = flag + roomPoint;
        flag = k510Point > 0 ? "+" : "";
        lb_zhuaPoint.getComponent(cc.Label).string = flag + k510Point;
        flag = excPoint > 0 ? "+" : "";
        lb_excPoint.getComponent(cc.Label).string = flag + excPoint;
        //比赛分
        let lb_sportsPointTitle = this.node.getChildByName("lb_sportsPointTitle");
        if (player.sportsPoint) {
            if (player.sportsPoint > 0) {
                lb_sportsPointTitle.active = true;
                lb_sportsPointTitle.getChildByName("lb_sportsPoint").getComponent(cc.Label).string = "+" + player.sportsPoint;
            }
            else {
                lb_sportsPointTitle.active = true;
                lb_sportsPointTitle.getChildByName("lb_sportsPoint").getComponent(cc.Label).string = player.sportsPoint;
            }
        } else {
            lb_sportsPointTitle.active = false;
        }

        //所属推广员ID
        if (player.upLevelId > 0) {
            this.node.getChildByName("user_info").getChildByName("label_upLevel").getComponent(cc.Label).string = "所属推广员ID：" + player.upLevelId;
        } else {
            this.node.getChildByName("user_info").getChildByName("label_upLevel").getComponent(cc.Label).string = "";
        }

        let playerInfo = null;
        for (let i = 0; i < playerAll.length; i++) {
            if (player.pid == playerAll[i].pid) {
                playerInfo = playerAll[i];
                break;
            }
        }

        let head = this.node.getChildByName("user_info").getChildByName("mask").getChildByName("head_img").getComponent("WeChatHeadImage");
        head.ShowHeroHead(playerInfo.pid);
        //玩家名字
        let playerName = "";
        playerName = playerInfo.name;
        if (playerName.length > 6) {
            playerName = playerName.substring(0, 6) + '...';
        }
        let name = this.node.getChildByName("user_info").getChildByName("lable_name").getComponent(cc.Label);
        name.string = playerName;

        let id = this.node.getChildByName("user_info").getChildByName("label_id").getComponent(cc.Label);
        id.string = "ID:" + app.ComTool().GetPid(playerInfo["pid"]);
    },
    ShowCard: function (cardType, node) {
        // let newPoker = this.PokerCard.SubCardValue(cardType);
        this.GetPokeCard(cardType, node);
        if (cardType == 0) {
            node.getChildByName("poker_back").active = true;
        } else {
            node.getChildByName("poker_back").active = false;
        }
    },
    GetPokeCard: function (poker, cardNode, isShowIcon1 = true, isShowLandowner = false, hideBg = false) {
        if (0 == poker) {
            cardNode.getChildByName("poker_back").active = true;
            return;
        }
        let type = "";
        let type1 = "";
        let type2 = "";
        let num = "";
        let cardColor = this.GetCardColor(poker);
        let cardValue = this.GetCardValue(poker);
        if (cardValue == 15) {
            cardValue = 2;
        }
        let numNode = cardNode.getChildByName("num");
        numNode.active = true;
        if (cardColor == 0) {
            type = "bg_diamond1_";
            type1 = type + 1;
            type2 = type + 2;
            // if (cardValue > 10) {
            if (cardValue > 10 && cardValue < 14) {
                type2 = "bg_red_" + cardValue;
                // type1 = "";
                // type2 = "bg_diamond_" + cardValue;
            }
            num = "red_" + cardValue;
        } else if (cardColor == 16) {
            type = "bg_club1_";
            type1 = type + 1;
            type2 = type + 2;
            // if (cardValue > 10) {
            if (cardValue > 10 && cardValue < 14) {
                type2 = "bg_blue_" + cardValue;
                // type1 = "";
                // type2 = "bg_club_" + cardValue;
            }
            num = "black_" + cardValue;
        } else if (cardColor == 32) {
            type = "bg_heart1_";
            type1 = type + 1;
            type2 = type + 2;
            // if (cardValue > 10) {
            if (cardValue > 10 && cardValue < 14) {
                type2 = "bg_red_" + cardValue;
                // type1 = "";
                // type2 = "bg_heart_" + cardValue;
            }
            num = "red_" + cardValue;
        } else if (cardColor == 48) {
            type = "bg_spade1_";
            type1 = type + 1;
            type2 = type + 2;
            // if (cardValue > 10) {
            if (cardValue > 10 && cardValue < 14) {
                type2 = "bg_blue_" + cardValue;
                // type1 = "";
                // type2 = "bg_spade_" + cardValue;
            }
            num = "black_" + cardValue;
        } else if (cardColor == 64) {//双数小鬼   0x42-0x4e
            numNode.active = false;//2,3,4,5,6,7,8,9,a
            if (cardValue % 2 == 0) {//双数小鬼
                type1 = "icon_small_king_01";
                type2 = "icon_small_king";
            } else if (cardValue % 2 == 1) {//单数大鬼
                type1 = "icon_big_king_01";
                type2 = "icon_big_king";
            }
        }
        let numSp = cardNode.getChildByName("num").getComponent(cc.Sprite);
        let iconSp = cardNode.getChildByName("icon").getComponent(cc.Sprite);
        let icon1_Sp = cardNode.getChildByName("icon_1").getComponent(cc.Sprite);
        /*numSp.spriteFrame = this.pokerAtlas.getSpriteFrame(num);
         iconSp.spriteFrame = this.pokerAtlas.getSpriteFrame(type1);
         icon1_Sp.spriteFrame = this.pokerAtlas.getSpriteFrame(type2);*/
        numSp.spriteFrame = this.PokerCard.pokerDict[num];
        iconSp.spriteFrame = this.PokerCard.pokerDict[type1];
        icon1_Sp.spriteFrame = this.PokerCard.pokerDict[type2];
        if (hideBg) {
            cardNode.getChildByName("poker_back").active = false;
        }
    },
    //获取牌值
    GetCardValue: function (poker) {
        return poker & this.PokerCard.LOGIC_MASK_VALUE;
    },

    //获取花色
    GetCardColor: function (poker) {
        while (poker >= 80) {
            poker -= 80;
        }
        let color = poker & this.PokerCard.LOGIC_MASK_COLOR;
        return color;
    },
});
