/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BasePoker_winlost_child"),

    properties: {
        morentouxiangHeadSpt: cc.SpriteFrame,
    },

    // use this for initialization
    OnLoad: function () {

    },
    ShowPlayerData: function (setEnd, playerAll, index) {
        let player = setEnd.posResultList[index];
        let zhuangRanksType = setEnd["zhuangRanksType"];
        let rankInfoMap = setEnd["rankInFoMap"];
        let posResultList = setEnd.posResultList;

        let point = player.point;
        let roomPoint = player.roomPoint;

        var heroID = app.HeroManager().GetHeroProperty("pid");
        // let playerSelfInfo = null;
        // for (let i = 0; i < playerAll.length; i++) {
        //     if (heroID == playerAll[i].pid) {
        //         playerSelfInfo = playerAll[i];
        //         break;
        //     }
        // }

        let dPos = setEnd.dPos;
        // let clientPos = playerSelfInfo.pos;//setEnd.dPos;
        //庄家的队友显示伙
        let zhuangPartnerPosList = [];
        for (let j = 0; j < posResultList.length; j++) {
            let posResultInfo1 = posResultList[j];
            if (posResultInfo1.pos == dPos) {
                // zhuangPartnerPosList = posResultInfo.partnerPosList;
                zhuangPartnerPosList.push(posResultInfo1.partnerPos);
            }
        }
        let daDuPos = setEnd["daDuPos"];

        this.node.getChildByName("user_info").getChildByName("zhuangjia").active = dPos == player.pos;
        this.node.getChildByName("user_info").getChildByName("xianjia").active = false;
        this.node.getChildByName("user_info").getChildByName("img_huo").active = false;
        this.node.getChildByName("user_info").getChildByName("img_du").active = false;

        // if (daDuPos >= 0) {
        //     this.node.getChildByName("user_info").getChildByName("img_huo").active = false;
        //     this.node.getChildByName("user_info").getChildByName("img_du").active = daDuPos == player.pos;
        // } else {
        //     this.node.getChildByName("user_info").getChildByName('img_du').active = false;
        if (zhuangPartnerPosList.indexOf(player.pos) > -1) {
            this.node.getChildByName("user_info").getChildByName('img_huo').active = true;
        } else {
            this.node.getChildByName("user_info").getChildByName('img_huo').active = false;
        }
        // }
        // this.node.getChildByName("user_info").getChildByName('img_huo').active = false;

        // this.node.getChildByName("user_info").getChildByName("zhuangjia").active = zhuangPartnerPosList.indexOf(player.pos) > -1;
        // this.node.getChildByName("user_info").getChildByName("xianjia").active = zhuangPartnerPosList.indexOf(player.pos) == -1;
        //显示庄闲
        // this.node.getChildByName("user_info").getChildByName("zhuangjia").active = player.ranksType == zhuangRanksType;
        // this.node.getChildByName("user_info").getChildByName("xianjia").active = player.ranksType !== zhuangRanksType;

        //玩家分数
        let winNode = this.node.getChildByName("lb_win_num");
        let loseNode = this.node.getChildByName("lb_lose_num");
        winNode.active = false;
        loseNode.active = false;

        let winLosePoint = player.roomPoint;
        if (winLosePoint > 0) {
            winNode.active = true;
            // winNode.getComponent(cc.Label).string = "+" + winLosePoint;
            winNode.getComponent(cc.Label).string = "";
            this.node.getChildByName("user_info").getChildByName("bg_win").active = true;
            this.node.getChildByName("user_info").getChildByName("bg_lost").active = false;
        }
        else {
            loseNode.active = true;
            // loseNode.getComponent(cc.Label).string = winLosePoint;
            loseNode.getComponent(cc.Label).string = "";
            this.node.getChildByName("user_info").getChildByName("bg_win").active = false;
            this.node.getChildByName("user_info").getChildByName("bg_lost").active = true;
        }

        let scoreNodes = this.node.getChildByName('scoreNodes');
        let posResultInfo = player;
        scoreNodes.getChildByName('lb_jianPoint').getComponent(cc.Label).string = (posResultInfo.jianPoint > 0 ? "+" : "") + posResultInfo.jianPoint;
        scoreNodes.getChildByName('lb_prizePoint').getComponent(cc.Label).string = (posResultInfo.prizePoint > 0 ? "+" : "") + posResultInfo.prizePoint;
        scoreNodes.getChildByName('lb_winLosePoint').getComponent(cc.Label).string = (posResultInfo.winLosePoint > 0 ? "+" : "") + posResultInfo.winLosePoint;
        scoreNodes.getChildByName('lb_point').getComponent(cc.Label).string = (posResultInfo.point > 0 ? "+" : "") + posResultInfo.point;
        scoreNodes.getChildByName('lb_roomPoint').getComponent(cc.Label).string = (posResultInfo.roomPoint > 0 ? "+" : "") + posResultInfo.roomPoint;

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
        head.isGetHead = false;
        head.getHeadTime = 2;
        head.getComponent(cc.Sprite).spriteFrame = this.morentouxiangHeadSpt;
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
});
