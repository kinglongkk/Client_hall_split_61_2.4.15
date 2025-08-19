/*
 UICard01-04 牌局吃到的牌显示
 */

let app = require("app");

cc.Class({
    extends: require("BasePoker_winlost_child"),

    properties: {},

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

        let dPos = setEnd.dPos;
        //庄家的队友显示伙
        let zhuangPartnerPosList = [dPos];
        // for (let j = 0; j < posResultList.length; j++) {
        //     let posResultInfo = posResultList[j];
        //     if (posResultInfo.pos == dPos) {
        //         zhuangPartnerPosList = posResultInfo.partnerPosList;
        //     }
        // }
        let daDuPos = setEnd["daDuPos"];

        this.node.getChildByName("user_info").getChildByName("zhuangjia").active = dPos == player.pos;
        this.node.getChildByName("user_info").getChildByName("xianjia").active = false;

        if (daDuPos >= 0) {
            this.node.getChildByName("user_info").getChildByName("img_huo").active = false;
            this.node.getChildByName("user_info").getChildByName("img_du").active = daDuPos == player.pos;
        } else {
            this.node.getChildByName("user_info").getChildByName('img_du').active = false;
            if (zhuangPartnerPosList.indexOf(player.pos) > -1) {
                // this.node.getChildByName("user_info").getChildByName('img_huo').active = true;
                this.node.getChildByName("user_info").getChildByName('img_huo').active = false;
            } else {
                this.node.getChildByName("user_info").getChildByName("xianjia").active = true;
                this.node.getChildByName("user_info").getChildByName('img_huo').active = false;
            }
        }

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

        let winLosePoint = player.point;
        if (winLosePoint > 0) {
            winNode.active = true;
            winNode.getComponent(cc.Label).string = "+" + winLosePoint;
            this.node.getChildByName("user_info").getChildByName("bg_win").active = true;
            this.node.getChildByName("user_info").getChildByName("bg_lost").active = false;
        }
        else {
            loseNode.active = true;
            loseNode.getComponent(cc.Label).string = winLosePoint;
            this.node.getChildByName("user_info").getChildByName("bg_win").active = false;
            this.node.getChildByName("user_info").getChildByName("bg_lost").active = true;
        }
        //房间分
        let lb_roomPoint = this.node.getChildByName("lb_roomPoint");
        if (roomPoint > 0) {
            lb_roomPoint.getComponent(cc.Label).string = "+" + roomPoint;
        }
        else {
            lb_roomPoint.getComponent(cc.Label).string = roomPoint;
        }

        // 冲关分：
        let chongGuanPoint = player.chongGuanPoint;
        let lb_chongGuanPoint = this.node.getChildByName("lb_chongGuanPoint");
        if (chongGuanPoint > 0) {
            lb_chongGuanPoint.getComponent(cc.Label).string = "+" + chongGuanPoint;
        }
        else {
            lb_chongGuanPoint.getComponent(cc.Label).string = chongGuanPoint;
        }

        //傍王分：
        let bangWangPoint = player.bangWangPoint;
        let lb_bangWangPoint = this.node.getChildByName("lb_bangWangPoint");
        if (bangWangPoint > 0) {
            lb_bangWangPoint.getComponent(cc.Label).string = "+" + bangWangPoint;
        }
        else {
            lb_bangWangPoint.getComponent(cc.Label).string = bangWangPoint;
        }

        // 得分
        let lb_point = this.node.getChildByName("lb_point");
        if (point > 0) {
            lb_point.getComponent(cc.Label).string = "+" + point;
        }
        else {
            lb_point.getComponent(cc.Label).string = point;
        }


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
});
