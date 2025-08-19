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
        winNode.active = false;
        loseNode.active = false;

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
});
