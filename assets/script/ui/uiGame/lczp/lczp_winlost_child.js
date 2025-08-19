/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BaseMJ_winlost_child"),

    properties: {
        xiaoCardNode: cc.Node,
        SingleColCards: cc.Node,
        SingleChuoPaiNodes: cc.Node,
        chuoPaiNodes: cc.Node,
    },

    // use this for initialization
    OnLoad: function () {
        this.ComTool = app.ComTool();
        this.ShareDefine = app.ShareDefine();
    },

    ShowPlayerData: function (setEnd, playerAll, index) {
        this.setEnd = setEnd;
        let dPos = setEnd.dPos;
        let posResultList = setEnd["posResultList"];
        this.node.active = true;
        if (dPos === index) {
            this.node.getChildByName("userinfo").getChildByName("tip_zhuang").active = true;
        } else {
            this.node.getChildByName("userinfo").getChildByName("tip_zhuang").active = false;
        }
        let PlayerInfo = playerAll[index];
        //显示头像，如果头像UI
        if (PlayerInfo["pid"] && PlayerInfo["iconUrl"]) {
            app.WeChatManager().InitHeroHeadImage(PlayerInfo["pid"], PlayerInfo["iconUrl"]);
        }
        let weChatHeadImage = this.node.getChildByName("userinfo").getChildByName("touxiang").getComponent("WeChatHeadImage");
        weChatHeadImage.ShowHeroHead(PlayerInfo["pid"]);
        //显示名字跟pid
        this.node.getChildByName("userinfo").getChildByName("lb_name").getComponent(cc.Label).string = PlayerInfo.name;
        this.node.getChildByName("userinfo").getChildByName("lb_id").getComponent(cc.Label).string = PlayerInfo.pid;
        this.PlayerData(this.node, posResultList[index], index);
    },

    PlayerData: function (PlayerNode, result, pos) {
        PlayerNode.active = true;

        let maxChuoZiShu = 0;
        let posResultInfo = null;
        let posResultList = this.setEnd["posResultList"];
        let huPos = this.setEnd["huPos"];

        if (huPos == -1) {
            for (let i = 0; i < posResultList.length; i++) {
                let tmpPosResultInfo = posResultList[i];
                if (tmpPosResultInfo.chuoZiShu > maxChuoZiShu) {
                    maxChuoZiShu = tmpPosResultInfo.chuoZiShu;
                    posResultInfo = tmpPosResultInfo;
                }
            }
        } else {
            posResultInfo = posResultList[huPos];
        }


        let point = result.point;
        let sportsPoint = result["sportsPoint"];

        //显示总分
        let lb_winpoint = PlayerNode.getChildByName("lb_winpoint");
        let lb_lostpoint = PlayerNode.getChildByName("lb_lostpoint");
        if (point > 0) {
            lb_winpoint.active = true;
            lb_lostpoint.active = false;
            lb_winpoint.getComponent(cc.Label).string = "+" + point;
        } else {
            lb_winpoint.active = false;
            lb_lostpoint.active = true;
            lb_lostpoint.getComponent(cc.Label).string = point;
        }


        //比赛分
        let lb_sportsPoint = PlayerNode.getChildByName("lb_sportsPoint");
        if (typeof (sportsPoint) != "undefined") {
            lb_sportsPoint.active = true;
            lb_sportsPoint.getComponent(cc.Label).string = "比赛分:" + sportsPoint;
        } else {
            lb_sportsPoint.active = false;
        }

        let layoutyou = PlayerNode.getChildByName("layoutyou");
        layoutyou.removeAllChildren();
        PlayerNode.getChildByName("layout_huinfo").removeAllChildren();
        if (posResultInfo.pos == result.pos) {
            //显示胡牌分数
            let layout_huinfo = PlayerNode.getChildByName("layout_huinfo");
            let demo_huinfo = this.node.getChildByName("demo_huinfo");
            layout_huinfo.removeAllChildren();

            let lb_huInfo = cc.instantiate(demo_huinfo);
            let str = "戳子数:" + posResultInfo.chuoZiShu + ",";
            str += "见红加分:" + posResultInfo.redPoint + ",";
            str += "基本分:" + posResultInfo.jiBenFen + "";

            lb_huInfo.getComponent(cc.Label).string = str;
            lb_huInfo.active = true;
            layout_huinfo.addChild(lb_huInfo);

            this.chuoPaiNodes.removeAllChildren();
            for (let j = 0; j < posResultInfo.chuoPaiList.length; j++) {
                let chuoPaiList = posResultInfo.chuoPaiList[j];
                if (chuoPaiList.length == 0) {
                    continue;
                }
                // 戳牌组
                let singleChuoPaiNodes = cc.instantiate(this.SingleChuoPaiNodes);
                singleChuoPaiNodes.active = true;
                this.chuoPaiNodes.addChild(singleChuoPaiNodes);

                let cardLists = [chuoPaiList];
                if (chuoPaiList.length > 4) {
                    cardLists = this.SplitDaXiaoXieType(chuoPaiList);
                }

                for (let y = 0; y < cardLists.length; y++) {
                    let pokers = cardLists[y];
                    let singleColCards = cc.instantiate(this.SingleColCards);
                    singleColCards.active = true;
                    singleChuoPaiNodes.addChild(singleColCards);
                    for (let x = 0; x < pokers.length; x++) {
                        let poker = pokers[x];
                        let cardNode = cc.instantiate(this.xiaoCardNode);
                        cardNode.active = true;
                        singleColCards.addChild(cardNode);
                        this.GetXiaoPokeCard(poker, cardNode);
                    }
                }
            }
        }
    },

    SplitDaXiaoXieType: function (pokers) {
        if (pokers.length <= 1) {
            return pokers;
        }

        let obj = {};
        for (let i = 0; i < pokers.length; i++) {
            let type = this.GetDaXiaoCardType(pokers[i]);
            obj[type] = obj[type] || [];
            obj[type].push(pokers[i]);
        }

        let cardLists = [];
        if (Object.hasOwnProperty.call(obj, "1")) { cardLists.push(obj["1"]); }
        if (Object.hasOwnProperty.call(obj, "2")) { cardLists.push(obj["2"]); }

        return cardLists;
    },

    GetDaXiaoCardType: function (poker) {
        poker = Math.floor(poker / 1000);
        return poker;
    },

    GetXiaoPokeCard: function (poker, cardNode) {
        if (0 == poker) {
            return;
        }

        let type = "";
        type = Math.floor(poker / 100) + 1;
        let iconSp = cardNode.getChildByName("num").getComponent(cc.Sprite);
        let imagePath = "ui/uiGame/lczp/out/" + type;
        this.SpriteShow(iconSp, imagePath);
    },

    SpriteShow: function (childSprite, imagePath) {
        let that = this;
        app.ControlManager().CreateLoadPromise(imagePath, cc.SpriteFrame)
            .then(function (spriteFrame) {
                if (!spriteFrame) {
                    that.ErrLog("OpenPoker(%s) load spriteFrame fail", imagePath);
                    return
                }
                childSprite.spriteFrame = spriteFrame;
            }).catch(function (error) {
                that.ErrLog("OpenPoker(%s) error:%s", imagePath, error.stack);
            }
            );
    },


});
