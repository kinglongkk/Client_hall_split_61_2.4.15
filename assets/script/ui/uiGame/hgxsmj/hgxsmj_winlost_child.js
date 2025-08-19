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
        this.IntegrateImage = app.SysDataManager().GetTableDict("IntegrateImage");
        this.ShareDefine = app.ShareDefine();
        this.img_baopai = this.node.getChildByName("jiesuan").getChildByName("img_baopai");
        this.img_fengding = this.node.getChildByName("jiesuan").getChildByName("img_fengding");
        this.img_baoZiType = this.node.getChildByName("jiesuan").getChildByName("img_danbao");
    },
    ShowPlayerData: function (setEnd, playerAll, index) {
        let jin1 = setEnd.jin1;
        let jin2 = 0;
        if (setEnd.jin2 > 0) {
            jin2 = setEnd.jin2;
        }
        let jinJin = 0;
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
        let maiMaList = setEnd["maList"] || [];
        this.UpdatePlayData(this.node, posResultList[index], PlayerInfo, jin1, jin2, jinJin, maiMaList);
        let huNode = this.node.getChildByName('jiesuan').getChildByName('hutype');
        this.ShowPlayerHuImg(huNode, posResultList[index]['huType'], posResultList[index].isJiePao);

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
    UpdatePlayData: function (PlayerNode, HuList, PlayerInfo, jin1 = 0, jin2 = 0, jinJin = 0, maiMaList = []) {
        this.showLabelNum = 1;
        this.ClearLabelShow(PlayerNode.getChildByName('jiesuan').getChildByName('label_lists'));
        this.ShowPlayerRecord(PlayerNode.getChildByName('record'), HuList);
        this.ShowPlayerJieSuan(PlayerNode.getChildByName('jiesuan'), HuList);
        this.ShowPlayerInfo(PlayerNode.getChildByName('user_info'), PlayerInfo, HuList);
        this.ShowPlayerDownCard(PlayerNode.getChildByName('downcard'), HuList.publicCardList, jin1, jin2, jinJin);
        this.ShowPlayerShowCard(PlayerNode.getChildByName('showcard'), HuList.shouCard, HuList.handCard, jin1, jin2, jinJin);
        this.ShowPlayerHuaCard(PlayerNode.getChildByName('sv_huacard').getChildByName('view').getChildByName('huacard'), HuList.huaList, jin1, jin2, jinJin);
        this.ShowPlayerNiaoPai(PlayerNode.getChildByName('sv_zhongma').getChildByName('view').getChildByName('zhongma'), maiMaList, HuList.zhongList, HuList.huType, jin1, jin2, jinJin);
        this.ShowSpecialType(HuList);
    },
    ShowPlayerInfo: function (ShowNode, PlayerInfo, HuList) {
        ShowNode.getChildByName('lable_name').getComponent("cc.Label").string = this.ComTool.GetBeiZhuName(PlayerInfo["pid"], PlayerInfo["name"]);
        ShowNode.getChildByName('label_id').getComponent("cc.Label").string = "ID:" + this.ComTool.GetPid(PlayerInfo["pid"]);

        let isMingBai = HuList["isMingBai"];
        let isBaoDing = HuList["isBaoDing"];
        let isDisoolve = HuList["isDisoolve"];

        ShowNode.getChildByName('baipai').active = isMingBai;
        ShowNode.getChildByName('baoding').active = isBaoDing;
        ShowNode.getChildByName('jiesanzhe').active = isDisoolve;


    },
    ShowSpecialType: function (posResultInfo) {
        let config = {};
        config["db"] = "ui/uiGame/hgxsmj/img_danbao";
        config["sb"] = "ui/uiGame/hgxsmj/img_shuangbao";
        config["fb"] = "ui/uiGame/hgxsmj/img_fengbao";
        let baoZiType = posResultInfo["baoZiType"];
        if (Object.hasOwnProperty.call(config, baoZiType)) {
            this.img_baoZiType.active = true;
            let path = config[baoZiType];
            this.SetNodeImageByFilePath(this.img_baoZiType, path);
        } else {
            this.img_baoZiType.active = false;
        }
        let configFengDing ={};
        configFengDing[1] = "ui/uiGame/hgxsmj/img_fengding";
        configFengDing[2] = "ui/uiGame/hgxsmj/img_yinding";
        configFengDing[3] = "ui/uiGame/hgxsmj/img_jinding";
        let isFengDing = posResultInfo["isFengDing"];
        if (Object.hasOwnProperty.call(configFengDing, isFengDing)) {
            this.img_fengding.active = true;
            let path = configFengDing[isFengDing];
            this.SetNodeImageByFilePath(this.img_fengding, path);
        } else {
            this.img_fengding.active = false;
        }
        this.img_baopai.active = posResultInfo["isBaoPai"];
    },
    ShowPlayerJieSuan: function (ShowNode, huInfoAll) {
        //买码飘分
        // let maiMa = huInfoAll["maiMa"];
        // let piaoHua = huInfoAll["piaoHua"];
        // let maiMaStr = "";
        // let piaoHuaStr = "";
        // if(maiMa == 1){
        //     maiMaStr = "买2码";
        // }else if(maiMa == 2){
        //     maiMaStr = "买4码";
        // }else if(maiMa == 0){
        //     maiMaStr = "不买";
        // }else{
        //     maiMaStr = "";
        // }
        // if(piaoHua == -1){
        //     piaoHuaStr = "" ;
        // }else if(piaoHua == 0){
        //     piaoHuaStr = "不飘" ;
        // }else{
        //     piaoHuaStr = "飘" + piaoHua + "分" ;
        // }
        // if(maiMaStr != "" || piaoHuaStr != ""){
        //     if(maiMaStr != "" && piaoHuaStr!= ""){
        //         this.ShowLabelName(ShowNode.getChildByName("label_lists"), "[" + maiMaStr + " " + piaoHuaStr + "]");
        //     }else{
        //         this.ShowLabelName(ShowNode.getChildByName("label_lists"), "[" + maiMaStr + piaoHuaStr + "]");
        //     }
        // }

        let huInfo = huInfoAll.huTypeMap;
        for (let huType in huInfo) {
            let huPoint = huInfo[huType];
            if (this.IsShowMulti(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + "*" + huPoint);
            }
            else if (this.IsNoShowScore(huType)) {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType));
            }
            else {
                this.ShowLabelName(ShowNode.getChildByName('label_lists'), this.LabelName(huType) + ":" + huPoint);
            }
            console.log("ShowPlayerJieSuan", huType, huPoint);
        }
    },

    IsShowMulti: function (huType) {
        this.multi = [
            "Zhuang",//   (1),//带庄 
            "GSKH",//   (1),//杠上花 
            "QGH",//   (1),//抢杠胡
        ];
        let multi = this.multi || [];
        let isShow = multi.indexOf(huType) != -1;
        return isShow;
    },
    IsNoShowScore: function (huType) {
        let multi2 = ["MenQing","QQR","YingHu","DianPao","GSKH","ZYS","QYS","PPHu","JiangJiangHu","QDHu","HDDHu","CHDDHu","CCHDDHu","KaiKou"];
        let isShow = multi2.indexOf(huType) != -1;
        return isShow;
    },
    ShowPlayerRecord: function (ShowNode, huInfo) {
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
        //显示比赛分
        if (typeof (huInfo.sportsPointTemp) != "undefined") {
            ShowNode.getChildByName('tip_sportspoint').active = true;
            if (huInfo.sportsPointTemp > 0) {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = "+" + huInfo.sportsPointTemp;
            } else {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = huInfo.sportsPointTemp;
            }
        } else if (typeof (huInfo.sportsPoint) != "undefined") {
            ShowNode.getChildByName('tip_sportspoint').active = true;
            if (huInfo.sportsPoint > 0) {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = "+" + huInfo.sportsPoint;
            } else {
                ShowNode.getChildByName('tip_sportspoint').getChildByName('lb_sportspoint').getComponent("cc.Label").string = huInfo.sportsPoint;
            }
        } else {
            ShowNode.getChildByName('tip_sportspoint').active = false;
        }
    },

    ShowPlayerShowCard: function (ShowNode, cardIDList, handCard, jin1, jin2, jinJin) {
        ShowNode.active = 1;
        let UICard_ShowCard = ShowNode.getComponent("UIMJCard_ShowCard");
        UICard_ShowCard.ShowDownCardByHGXSMJ(cardIDList, handCard, jin1, jin2, jinJin);
    },
    ShowPlayerDownCard: function (ShowNode, publishcard, jin1 = 0, jin2 = 0, jinJin = 0) {
        ShowNode.active = 1;
        let UICard_DownCard = ShowNode.getComponent("UIMJCard_Down");
        UICard_DownCard.ShowDownCardByQJHHMJ(publishcard, this.posCount, jin1, jin2, "EatCard_Self_", jinJin);
    },

    ShowPlayerHuaCard: function (ShowNode, hualist, jin1 = 0, jin2 = 0, jinJin = 0) {
        if (hualist.length == 0) {
            ShowNode.active = false;
            return;
        }
        ShowNode.active = 1;
        let UICard_ShowCard = ShowNode.getComponent("UIMJCard_ShowHua");
        UICard_ShowCard.ShowHuaListByHGXSMJ(hualist, jin1, jin2, jinJin);
    },
    ShowPlayerNiaoPai: function (ShowNode, maiMaList, zhongList, huType, jin1, jin2, jinJin) {
        let zhongMaList = zhongList;
        ShowNode.active = false;
        for (let i = 1; i <= 16; i++) {
            ShowNode.getChildByName('card' + i).active = false;
            ShowNode.getChildByName("card" + i).color = cc.color(255, 255, 255);
        }
        if (maiMaList.length == 0) {
            console.error("ShowPlayerNiaoPai", maiMaList);
            return;
        }
        huType = this.ShareDefine.HuTypeStringDict[huType];
        //没胡得人不显示
        if (huType == this.ShareDefine.HuType_DianPao || huType == this.ShareDefine.HuType_NotHu) {
            return
        }
        ShowNode.active = true;
        // if(typeof(endPoint.huTypeMap["ZhongNiao"]) != "undefined" && endPoint.huTypeMap["ZhongNiao"] > 0){
        //     ShowNode.getChildByName('lb_tip').getComponent(cc.Label).string='中码：';
        // }else{
        //     ShowNode.getChildByName('lb_tip').getComponent(cc.Label).string='';
        //     return;
        // }
        for (let i = 0; i < maiMaList.length; i++) {
            let cardType = Math.floor(maiMaList[i] / 100);
            let node = ShowNode.getChildByName("card" + (i + 1));
            this.ShowImage(node, 'EatCard_Self_', cardType);
            this.ShowJinBgByHGXSMJ(maiMaList[i],node, jin1, jin2, jinJin);
            node.active = true;
            if (zhongMaList.indexOf(maiMaList[i]) > -1) {
                node.color = cc.color(255, 255, 0);
            }
        }
    },
    ShowJinBgByHGXSMJ: function (cardID, childNode, jin1 = 0, jin2 = 0, jinJin = 0) {
        if (cardID > 0) {
            if (Math.floor(cardID / 100) == Math.floor(jin1 / 100)) {
                childNode.color = cc.color(255, 255, 255);
                if (childNode.getChildByName("icon_jin01")) {
                    childNode.getChildByName("icon_jin01").active = true;
                }
                if (childNode.getChildByName("icon_jin02")) {
                    childNode.getChildByName("icon_jin02").active = false;
                }
                if (childNode.getChildByName("icon_jinJin")) {
                    childNode.getChildByName("icon_jinJin").active = false;
                }
            } else if (Math.floor(cardID / 100) == Math.floor(jin2 / 100)) {
                childNode.color = cc.color(255, 255, 125);
                if (childNode.getChildByName("icon_jin01")) {
                    childNode.getChildByName("icon_jin01").active = false;
                }
                if (childNode.getChildByName("icon_jin02")) {
                    childNode.getChildByName("icon_jin02").active = true;
                }
                if (childNode.getChildByName("icon_jinJin")) {
                    childNode.getChildByName("icon_jinJin").active = false;
                }
            } if (Math.floor(cardID / 100) == Math.floor(jinJin/ 100)) {
                childNode.color = cc.color(255, 255, 255);
                if (childNode.getChildByName("icon_jin01")) {
                    childNode.getChildByName("icon_jin01").active = false;
                }
                if (childNode.getChildByName("icon_jin02")) {
                    childNode.getChildByName("icon_jin02").active = false;
                }
                if (childNode.getChildByName("icon_jinJin")) {
                    childNode.getChildByName("icon_jinJin").active = true;
                }
            } 
        } else {
            childNode.color = cc.color(255, 255, 255);
            if (childNode.getChildByName("icon_jin01")) {
                childNode.getChildByName("icon_jin01").active = false;
            }
            if (childNode.getChildByName("icon_jin02")) {
                childNode.getChildByName("icon_jin02").active = false;
            }
            if (childNode.getChildByName("icon_jinJin")) {
                childNode.getChildByName("icon_jinJin").active = false;
            }
        }
    },
    ShowImage: function (childNode, imageString, cardID) {
        let childSprite = childNode.getComponent(cc.Sprite);
        if (!childSprite) {
                            console.error("ShowOutCard(%s) not find cc.Sprite", childNode.name);
            return
        }
        //取卡牌ID的前2位
        let imageName = [imageString, cardID].join("");
        let imageInfo = this.IntegrateImage[imageName];
        if (!imageInfo) {
                            console.error("ShowImage IntegrateImage.txt not find:%s", imageName);
            return
        }
        let imagePath = imageInfo["FilePath"];
        if (app['majiang_' + imageName]) {
            childSprite.spriteFrame = app['majiang_' + imageName];
        } else {
            let that = this;
            app.ControlManager().CreateLoadPromise(imagePath, cc.SpriteFrame)
                .then(function (spriteFrame) {
                    if (!spriteFrame) {
                        that.ErrLog("OpenPoker(%s) load spriteFrame fail", imagePath);
                        return
                    }
                    childSprite.spriteFrame = spriteFrame;
                })
                .catch(function (error) {
                    that.ErrLog("OpenPoker(%s) error:%s", imagePath, error.stack);
                });
        }
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
        } else if (huType == this.ShareDefine.HuType_JinDing) {
            huNode.getComponent(cc.Label).string = '金顶';
        } else if (huType == this.ShareDefine.HuType_YinDing) {
            huNode.getComponent(cc.Label).string = '银顶';
        } else {
            huNode.getComponent(cc.Label).string = '';
        }
    },
    LabelName: function (huType) {
        let huTypeDict = this.GetHuTypeDict();
        return huTypeDict[huType];
    },

    // GetHuTypeDict -start-
    GetHuTypeDict: function () {
        let huTypeDict = {};
        huTypeDict["QYS"]="清一色";
        huTypeDict["ZYS"]="风一色";
        huTypeDict["JiangJiangHu"]="将一色";
        huTypeDict["PPHu"]="碰碰胡";
        huTypeDict["MenQing"]="门清";
        huTypeDict["QQR"]="全求人";
        huTypeDict["GSKH"]="杠上开花";
        huTypeDict["YingHu"]="硬胡";
        huTypeDict["QDHu"]="七对";
        huTypeDict["HDDHu"]="豪华七对";
        huTypeDict["CHDDHu"]="双豪华七对";
        huTypeDict["CCHDDHu"]="三豪华七对";
        huTypeDict["DianPao"]="点炮";
        huTypeDict["JiePao"]="接炮";
        huTypeDict["LaiZiGang"]="癞";
        huTypeDict["HongZhongGang"]="痞";
        huTypeDict["Gang"]="直杠";
        huTypeDict["JieGang"]="碰后杠";
        huTypeDict["AnGang"]="暗杠";
        huTypeDict["KaiKou"]="开口";
        huTypeDict["Fan"]="番数";

        return huTypeDict;
    },
    // GetHuTypeDict -end-
});
