/*
 *  ShareDefine.js
 *  LY
 *
 *  author:hongdian
 *  date:2014-10-28
 *  version:1.0
 *
 * 修改时间 修改人 修改内容:
 *
 *
 */


var ShareDefine = {};

//---------------------------基础(所有项目通用的枚举)--------------------------------------

var Common = function () {

	//  ------------------客户端状态-----------------------
	this.State_Prepare = 0;     // 客户端初始化状态
	this.State_InitSuccess = 1; //初始化成功
	this.State_WaitLogin = 2;   // 客户端未登陆状态
	this.State_Logining = 3;    // 客户端登录过程中状态
	this.State_LoginPackSucess = 4;    // 客户端登录过程中状态
	this.State_LoginPackFail = 5;    // 客户端登录过程中状态
	this.State_Logined = 6;         // 客户端已登陆状态

	//计时器显示格式
	this.ShowHourMinSec = 1;
	this.ShowMinSec = 2;
	this.ShowSec = 3;
	this.ShowDayHour = 4;
	this.ShowSecondSec = 5;
	this.YearMonthDayHourMinuteSecond = 6;
	this.DayHourMinuteSecond = 7;

	//获取服务器时间的类型(星期,时,分,秒，年，月，日)
	this.GetServerWeek = 1;
	this.GetServerHours = 2;
	this.GetServerMinSec = 3;
	this.GetServerSec = 4;
	this.GetServerYear = 5;
	this.GetServerMonth = 6;
	this.GetServerDay = 7;
	this.GetServerDate = 8;
	this.GetServerDateString = 9;

	//-------------------tagWorldThing keyID-------------------
	this.ThingID = 1;
	//-------------------tagDBDataKey keyID-------------------
	this.DataKeyID = 1;
	//-------------------tagDBPropertyInfoKey keyID-------------------
	this.PropertyInfoID = 1;
	//-----------------玩家角色起始ID-------------------
	this.FirstPlayerID = 10000;

	//允许播放4格动漫的创角间隔时间
	this.ShowAnimeTick = 10 * 1000;


	//创建账号登陆token的加密key
	this.TokenSecret = "com.ddcat.gameAccount";
	//token过期时间一分钟
	this.TokenExpireTick = 1 * 60 * 1000;

	//是否开发模式
	this.IsDevelopment = 0;

	//主版本号
	this.MainVersion = "1";
	//次版本号
	this.MinorVersion = "0";
	//更新版本号
	this.UpdateVersion = "1";

	//客户端版本号
	this.ClientVersion = [this.MainVersion, this.MinorVersion, this.UpdateVersion].join(".");

	//chrome浏览器log颜色
	this.ChromeLogColorDict = {
		//黑色背景,蓝绿文本(收包)
		"b-gb": 'background: #255; color: #00ffff',
		//黑色背景,绿文本(发包)
		"b-g": 'background: #255; color: #00ff00',
		//白色背景,绿文本(连接)
		"w-g": 'background: #0; color: #007f00'
	};

	//是否金币场
	this.isCoinRoom = false;
	this.practiceId = 0;

	//金币不足
	this.NotEnoughCoin = 902;
	//金币过多
	this.MuchCoin = 904;

	//创建房间选择的玩法
	this.DefaultRoom = 0;
	this.ScoreRoom = 1;
	this.CoinRoom = 2;
};


//----------------------GM指令枚举---------------------
var GM = function () {
	// GM指令执行成功
	this.GM_CmdOK = 1;
	// 没有GM权限
	this.GM_Limited = 2;
	// 指令不存在
	this.GM_CmdError = 3;
	// 设置失败
	this.GM_CmdFail = 4;
	// 帮助文本
	this.GM_CmdHelp = 5;
	//目标玩家不存在
	this.GM_CmdTargetError = 6;
	//返回结果异常
	this.GM_CmdResultError = 7;

	this.GMType_Area = 1;
	this.GMType_Rank = 2;
};


var SDK = function () {

	//公司自己
	this.SDKType_Company = 0;
	//微信公众号授权
	this.SDKType_WeChat = 2;
	//app授权
	this.SDKType_WeChatApp = 3;
	//手机授权
	this.SDKType_Mobile = 4;
	// line 授权登录
	this.SDKType_LineApp = 5;
	// Facebook 授权登录
	this.SDKType_FacebookApp = 6;

	//H5版本sdk
	this.H5AccountSDKTypeList = [this.SDKType_WeChat];

	//APP版本sdk
	this.AppAccountSDKTypeList = [this.SDKType_WeChatApp];

	this.AppAccountSDKTypeList = [this.SDKType_Mobile];

	this.AccountSDKTypeNameDict = {};
	this.AccountSDKTypeNameDict[this.SDKType_Company] = "公司";
	this.AccountSDKTypeNameDict[this.SDKType_WeChat] = "微信公众号";
	this.AccountSDKTypeNameDict[this.SDKType_WeChatApp] = "微信APP";

	this.AccountSDKTypeNameDict[this.SDKType_Mobile] = "手机授权";

	//玩家性别
	this.HeroSex_Boy = 0;
	this.HeroSex_Girl = 1;

	this.SexTypeList = [this.HeroSex_Boy, this.HeroSex_Girl];
};


var Order = function () {
	// 1:公司充值
	this.OrderType_Company = 0;
	// 2:anySDK充值
	this.OrderType_AnySDK = 1;
	//3:万普支付
	this.OrderType_WanPuSDK = 2;
	//4:小米支付
	this.OrderType_MiSDK = 3;
	//5:360支付
	this.OrderType_QiHooSDK = 4;
	// 6:苹果支付
	this.OrderType_IOS = 5;
	//微信
	this.OrderType_Wechat = 7;
	//扫码支付
	this.OrderType_QRCode = 8;
	//微信app支付
	this.OrderType_WechatApp = 9;


	this.OrderSDKTypeNameDict = {};
	this.OrderSDKTypeNameDict[this.OrderType_Company] = "公司";
	this.OrderSDKTypeNameDict[this.OrderType_AnySDK] = "AnySDK";
	this.OrderSDKTypeNameDict[this.OrderType_WanPuSDK] = "万普";
	this.OrderSDKTypeNameDict[this.OrderType_MiSDK] = "小米";
	this.OrderSDKTypeNameDict[this.OrderType_QiHooSDK] = "奇虎";
	this.OrderSDKTypeNameDict[this.OrderType_IOS] = "IOS";
	this.OrderSDKTypeNameDict[this.OrderType_Wechat] = "微信公众号";
	this.OrderSDKTypeNameDict[this.OrderType_QRCode] = "微信扫码";
	this.OrderSDKTypeNameDict[this.OrderType_WechatApp] = "微信APP";

	//H5版本sdk
	this.H5OrderSDKTypeList = [this.OrderType_Wechat, this.OrderType_QRCode];

	//APP版本sdk
	this.AppOrderSDKTypeList = [this.OrderType_AnySDK, this.OrderType_WanPuSDK, this.OrderType_MiSDK, this.OrderType_QiHooSDK, this.OrderType_IOS, this.OrderType_WechatApp];


	//需要创建服务器订单缓存的类型
	this.NeedRecordOrderTypeList = [6];
	//账号服务器内购玩家账号不存在
	this.CreateOrder_PurchaseAccountNotFind = 1;
	//账号服务器内购玩家账号异常
	this.CreateOrder_PurchaseAccountError = 2;
	//账号服务器内购GM玩家账号不存在
	this.CreateOrder_SendAccountIDNotFind = 3;
	//账号服务器内购创建订单成功
	this.CreateOrder_CreateOrderSuccess = 4;
	//订单服务器验证签名失败
	this.CreateOrder_CheckSignFail = 5;
	//订单服务器创建订单失败
	this.CreateOrder_CreateOrderFail = 6;
	//订单服务器充值订单成功
	this.CreateOrder_CreateOrderSuccess = 7;
	//游戏服务端兑换订单失败
	this.CreateOrder_ExchangeOrderFail = 8;
	//内部充值玩家服务器名错误
	this.CreateOrder_PurchaseServerNameNotFind = 9;

	// 1:充值成功
	this.RechargeSucess = 1;
	// 2:订单重复
	this.OrderRepeat = 2;
	// 3:订单验证失败
	this.OrderTestingFail = 3;
	// 4:链接游戏服务器失败
	this.ConnectGameServerFail = 4;
	// 5:链接APP服务器失败
	this.ConnectAppServerFail = 5;
	// 6:给予玩家奖励失败
	this.GiveRewardFail = 6;
};


var Code = function () {
	//服务器下发错误系统提示
	this.ErrorSysMsg = 102;
	//服务器下发错误 非法操作
	this.NotAllow = 103;
	//房卡不足
	this.ErrorNotRoomCard = 903;
	//圈卡不足
	this.ErrorNotQuanCard = 906;
	//可以创建的房间数量不足
	this.ErrorMaxRoom = 5003;
	//没有权限 PLAYER_TUICHU_WEIPIZHUN
	this.NoPower_RoomJoinner = 5006;
	//洗牌失败房卡不足
	this.ErrorNotRoomCardByXiPai = 905;
	//玩家主动断开连接
	this.Player_OffLine = 1000;
	//房间号不存在或解散
	this.NotFind_Room = 5001;
	//正在其他房间游戏
	this.InOtherRoomPlay = 5012;
	//服务器维护中
	this.Maintain = 10;
	//退出房间失败
	this.ExitROOM_ERROR = 5019;
	//找不到房间
	this.NotExistRoom = 5020;

	//亲友圈房间密码错误
	this.ErrorPassword = 5023;
	//存在相同的IP地址
	this.EXIST_SAME_IP = 5111;
	//相距位置出现问题
	this.APART_LOCATION = 5112;
	//相距位置出现问题
	this.POSITIONING_NOT_ON = 5126;

	//俱乐部创建房间配置已达上限
	this.CLUB_CreateCfgMax = 6001;
	//没有加入俱乐部不能加入该房间
	this.CLUB_NotClubJoinRoomErr = 6003;


	//不是亲友圈创造者
	this.CLUB_NOT_CREATE = 6015;
	//不是推广员
	this.CLUB_NOT_PROMOTION = 6043;
	//亲友圈不存在成员信息
	this.CLUB_NOT_EXIST_MEMBER_INFO = 6009;
	//修改归属的时候不能切换到下线
	this.CLUB_MEMBER_PROMOTION_BELONG = 6050;

	this.CLUB_MEMBER_PROMOTION_CHANGE_IS_EXIT = 6052;

	this.CLUB_MEMBER_PROMOTION_LEVEL_SHARE_LOWER = 6053;

	this.CLUB_MEMBER_PROMOTION_LEVEL_SHARE_UP = 6054;

	// 同赛事不同亲友圈不能重复拉人
	this.CLUB_PLAYER_EXIT_IN_OTHER_UNION = 6300;

	//封包没有什么回复动作,或者条件没有通过不执行
	this.PackNot_Action = 10000;
	//封包执行崩溃
	this.PackRun_Error = 10001;
	//登陆过程失败T下线
	this.KickOut_LoginError = 10002;
	//创建新角色失败T下线
	this.KickOut_CreateNewHeroError = 10003;
	//登陆账号密码错误
	this.KickOut_NotCreateToken = 10004;
	//其他地方登陆
	this.KickOut_OtherLogin = 10005;
	//登陆账号不存在
	this.KickOut_AccountNotFind = 10006;
	//账号登陆的密码错误
	this.KickOut_AccountPswError = 10007;
	//第3方登陆验证失败
	this.KickOut_AccountAuthorizationFail = 10008;
	//短信验证失败
	this.KickOut_MobileAuthorizationFail = 10023;
	//登陆的token已经过期
	this.KickOut_TokenExpire = 10009;
	//http请求服务器未开启
	this.Http_ServerNotStart = 10010;
	//http请求执行崩溃
	this.Http_PackRunError = 10011;
	//http请求没有回复动作,或者条件没有通过不执行
	this.Http_PackNotAction = 10012;
	//http请求没有这个封包请求
	this.Http_NotFindPack = 10013;
	//请求账号服务器失败
	this.Http_RequestAccountServerFail = 10014;
	//请求订单服务器失败
	this.Http_RequestOrderServerFail = 10015;
	//服务器还未开启成功
	this.KickOut_ServerClose = 10016;
	//账号登录过程失败
	this.KickOut_AccountLoginError = 10017;
	//自定义账号登录token验证账号ID失败
	this.KickOut_AccountTokenError = 10018;
	//没有多余端口登录
	this.KickOut_NotFreePortID = 10019;
	//客户端请求封包逻辑不存在
	this.PackRun_NotFindPack = 10020;
	//客户端资源错误
	this.KickOut_ClientVersion = 10022;

	this.NoShowSysMsgCodeList = [this.PackNot_Action, this.Http_PackNotAction];

	//0:执行成功
	this.WebJava_Success = 0;
	//1:未定义封包
	this.WebJava_NotFindPack = 1;
	//2:封包执行失败
	this.WebJava_PackRunError = 2;
	//3:玩家ID不存在
	this.WebJava_HeroIDNotFind = 3;
	//4:封包条件判断失败
	this.WebJava_PackNotAction = 4;
	//5:返回值异常非json
	this.WebJava_ReturnNotJson = 5;
	//6:返回值没有携带Code参数
	this.WebJava_ReturnNotFindCode = 6;
	//7:没有找到封包执行模块
	this.WebJava_NotFindPackClass = 7;

	this.WebJavaCodeTextMsgDict = {};
	this.WebJavaCodeTextMsgDict[this.WebJava_Success] = "成功";
	this.WebJavaCodeTextMsgDict[this.WebJava_NotFindPack] = "封包未定义";
	this.WebJavaCodeTextMsgDict[this.WebJava_PackRunError] = "封包执行失败";
	this.WebJavaCodeTextMsgDict[this.WebJava_HeroIDNotFind] = "玩家ID不存在";
	this.WebJavaCodeTextMsgDict[this.WebJava_PackNotAction] = "执行条件不允许";
	this.WebJavaCodeTextMsgDict[this.WebJava_ReturnNotJson] = "返回值非JSON";
	this.WebJavaCodeTextMsgDict[this.WebJava_ReturnNotFindCode] = "返回值未找到Code";
	this.WebJavaCodeTextMsgDict[this.WebJava_NotFindPackClass] = "封包PackClass未找到";

};


//---------------------武将枚举---------------
var Color = function () {
	//红色
	this.Color_Red = new cc.Color(255, 0, 0);
	//绿色
	this.Color_Green = new cc.Color(0, 255, 0);
	//白色
	this.Color_White = new cc.Color(255, 255, 255);
	//黑色
	this.Color_Black = new cc.Color(255, 255, 255);
	//灰色
	this.Color_Gray = new cc.Color(125, 125, 125);
	//紫色
	this.Color_Purple = new cc.Color(255, 125, 255);
	//橙色
	this.Color_Orange = new cc.Color(255, 125, 0);
	//枚红色
	this.Color_RoseRed = new cc.Color(253, 62, 208);
};

var Timer = function () {
	//金币抽计时器ID
	this.GoldGambleTimerID = 1;
	//钻石抽计时器ID
	this.DiamondGambleTimerID = 2;
	//扫荡计时器ID
	this.AutoFBFightTimerID = 3;
	//BOSS挑战计时器ID
	this.BossFightTimerID = 4;
	//玩家申请公会计时器CD
	this.RequestGuildTimerID = 5;
	//公会升级战复活计时器ID
	this.GuildLvFightTimerID = 6;

	//验证码有效时间
	this.EffectiveTime = 1000 * 60 * 20;
};


var Chat = function () {
	//出牌语言
	this.Mandarin = 1;
	this.Dialect = 2;

	//1:世界
	this.ChatType_World = 1;
	//2:公会
	this.ChatType_Family = 2;
	//3:私聊
	this.ChatType_Private = 3;
	//4:系统
	this.ChatType_System = 4;
	//5:队伍
	this.ChatType_Team = 5;
	//6:阵营
	this.ChatType_Union = 6;
	//7:喇叭
	this.ChatType_Horn = 7;

	//聊天频道类型列表
	this.ChatTypeList = [
		this.ChatType_World,
		this.ChatType_Family,
		this.ChatType_Private,
		this.ChatType_System,
		this.ChatType_Team,
		this.ChatType_Union,
		this.ChatType_Horn,
	];

	//允许所有玩家加入的聊天频道
	this.NotAllowJoinChatTypeList = [this.ChatType_Private];

	//聊天对应的字典
	this.ChatNameDict = {
		"1": "世界",
		"2": "公会",
		"3": "私聊",
		"4": "系统",
		"5": "队伍",
		"6": "阵营",
		"7": "喇叭",
	};

	this.ChatTextDict = {
		"1": "<color=#b72310>{S1}</c>：{S2}",
		"2": "<color=#6fd5ff>{S1}</c>：{S2}",
		"3": "<color=#f5f5f5>{S1}</c>：{S2}",
	};
};

var Model = function () {


};

var Form = function () {

	this.Confirm = "Confirm";               // 确认，取消 2次确认类型 UIMessage.js
	this.ConfirmYN = "ConfirmYN";           // 是 否 2次确认类型 UIMessage.js
	this.ConfirmBuyGoTo = "ConfirmBuyGoTo"; // 购买,前往 UIMessage.js
	this.ConfirmOK = "ConfirmOK";           // OK 单按钮 UIMessage.js
	this.ConfirmUse = "ConfirmUse";         // 使用实例确定界面
	this.ConfirmBuy = "ConfirmBuy";         // 购买数量确定界面 UIAmountAffirm.js
	this.ConfirmDIY = "ConfirmDIY";         //自定义按钮文字
	this.ConfirmFamily = "ConfirmFamily"; // 购买,前往 UIMessage.js
	//使用frmSetUpTips界面的确认框类型列表
	this.SetUpTipFormConfirmList = ["Confirm", "ConfirmYN", "ConfirmBuyGoTo", "ConfirmOK"];

	//战队等级未到时界面控件显示类型
	this.FormWnd_EffectLock = 1;
	this.FormWnd_NotShow = 2;
};

var Hero = function () {
	this.MaxPlayerNum = 20; //游戏最大人数

};


var Effect = function () {
	this.EffectPosType_1 = 1;        // 控件特效位置1左下
	this.EffectPosType_2 = 2;        // 控件特效位置2下中
	this.EffectPosType_3 = 3;        // 控件特效位置3右下

	this.EffectPosType_4 = 4;        // 控件特效位置中左
	this.EffectPosType_5 = 5;        // 控件特效位置中间
	this.EffectPosType_6 = 6;        // 控件特效位置中右

	this.EffectPosType_7 = 7;        // 控件特效位置上左
	this.EffectPosType_8 = 8;        // 控件特效位置上中
	this.EffectPosType_9 = 9;        // 控件特效位置上右
	this.EffectPosType_10 = 10;        // 控件特效随机位置
};

var Mail = function () {

};


//----------------------------------------------------------------项目-------------------------------------------------------------

var Rank = function () {

	this.RankType_Arena = 1;
	this.RankType_Droiyan = 2;
	this.RankType_WorldBoss1 = 3;
	this.RankType_WorldBoss2 = 4;
	this.RankType_WorldBoss3 = 5;
	this.RankType_WorldBoss4 = 6;
	this.RankType_Level = 7;
	this.RankType_WingLevel = 8;
	this.RankType_Dungeon = 9;
	this.RankType_Power = 10;
	this.RankType_TianLongPower = 11;
	this.RankType_GuMuPower = 12;
	this.RankType_XiaoYaoPower = 13;
	this.RankType_WinSetCount = 14;
	this.RankType_Integral = 15;

};

var Game = function () {
	//红中
	this.GameType_HZMJ = 0;
	//13支
	this.GameType_SSS = 1;
	//龙岩麻将
	this.GameType_LYMJ = 2;
	//厦门麻将
	this.GameType_XMMJ = 3;
	//拼十
	this.GameType_NN = 4;
	//福州麻将
	this.GameType_FZMJ = 5;
	//泉州麻将
	this.GameType_QZMJ = 6;
	//跑得快
	this.GameType_PDK = 7;
	//漳州麻将
	this.GameType_ZZMJ = 8;
	//欢乐比牌
	this.GameType_ZJH = 9;
	//莆田十六张
	this.GameType_PTMJ = 10;
	//宁德麻将
	this.GameType_NDMJ = 11;
	//三明麻将
	this.GameType_SMMJ = 12;
	//南平麻将
	this.GameType_NPMJ = 13;
	//仙游麻将
	this.GameType_XYMJ = 14;
	//石狮麻将
	this.GameType_SSMJ = 15;
	//南安麻将
	this.GameType_NAMJ = 16;

	//莆田13麻将
	this.GameType_PT13MJ = 17;
	//三公
	this.GameType_SG = 18;
	//余干麻将
	this.GameType_YGMJ = 19;
	//余干六副里
	this.GameType_YGLFL = 20;
	//光泽麻将
	this.GameType_NPGZMJ = 21;
	//金华麻将
	this.GameType_ZJJHMJ = 22;
	//湖北阳新麻将
	this.GameType_HBYXMJ = 23;
	//玉山打炸
	this.GameType_YSDZ = 25;
	//干瞪眼
	this.GameType_GDY = 26;
	//青岛麻将
	this.GameType_QDMJ = 27;
	//鹰潭麻将
	this.GameType_YTMJ = 28;
	//营口麻将
	this.GameType_YKMJ = 29;
	//斗地主
	this.GameType_DDZ = 30;
	//海安麻将
	this.GameType_HAMJ = 32;
	//荆门晃晃
	this.GameType_JMHHMJ = 31;
	//仙游炸棒
	this.GameType_XYZB = 33;
	//莆仙吹牛
	this.GameType_PXCN = 34;
	//镇江麻将
	this.GameType_ZJMJ = 35;
	//丹阳麻将
	this.GameType_DYMJ = 36;
	//射阳麻将
	this.GameType_SYMJ = 37;
	//掼蛋
	this.GameType_GD = 38;
	//万载麻将
	this.GameType_WZMJ = 40;
	//510k
	this.GameType_WSK = 41;
	//宜春麻将
	this.GameType_YCMJ = 42;
	//宁化麻将
	this.GameType_NHMJ = 43;
	//乐平麻将
	this.GameType_LPMJ = 44;
	//保定麻将
	this.GameType_BDMJ = 45;
	//宜兴麻将
	this.GameType_YXMJ = 46;
	//滕州麻将
	this.GameType_TZMJ = 47;
	//韶关麻将
	this.GameType_SGMJ = 48;
	//包王
	this.GameType_BW = 51;
	//济宁麻将
	this.GameType_JNMJ = 52;
	//济宁麻将
	this.GameType_JNMJ = 52;
	//扬中麻将
	this.GameType_JSYZMJ = 53;
	//推倒胡
	this.GameType_TDHMJ = 54;
	//邢台麻将
	this.GameType_XTMJ = 55;
	//漳浦麻将
	this.GameType_ZPMJ = 56;
	//巢湖麻将
	this.GameType_CHMJ = 57;
	//淮滨麻将
	this.GameType_HBMJ = 58;
	//18扑
	this.GameType_SBP = 59;
	//衡水麻将
	this.GameType_HSMJ = 61;
	//自由扑克
	this.GameType_ZYPK = 62;
	//包剪锤
	this.GameType_BJC = 63;
	//比鸡扑克
	this.GameType_BJPK = 64;
	//西来桥麻将
	this.GameType_XLQMJ = 65;
	//福鼎麻将
	this.GameType_FDMJ = 66;
	//福鼎打炸
	this.GameType_FDDZ = 67;
	//宜兴罗松
	this.GameType_YXLS = 68;

	//镇江佩罗宋
	this.GameType_ZJPLS = 71;

	//转转麻将
	this.GameType_PXZZMJ = 72;
	//萍乡六滚筒
	this.GameType_PX6GT = 73;
	//萍乡三滚筒
	this.GameType_PX3GT = 74;
	//萍乡258麻将
	this.GameType_PX258MJ = 75;
	//宜兴推倒胡
	this.GameType_YXTDH = 76;
	//安岳跑得快
	this.GameType_AYPDK = 77;
	//安岳斗十四
	this.GameType_AYDSS = 79;
	//安岳麻将
	this.GameType_AYMJ = 80;
	//万年麻将
	this.GameType_WNMJ = 81;
	//万年麻将
	this.GameType_WNYH = 82;
	//万年跑得快
	this.GameType_WNPDK = 83;
	//福清拼罗松
	this.GameType_FQPLS = 84;
	//福清十八扑
	this.GameType_FQSBP = 85;
	//
	this.GameType_DZPK = 86;
	//钓蟹
	this.GameType_DX = 87;
	//淮滨麻将
	this.GameType_HBPDK = 88;
	//新沂麻将
	this.GameType_JSXYMJ = 89;

	//保定易县
	this.GameType_BDYXMJ = 95;
	//河南信阳麻将
	this.GameType_HNXYMJ = 96;
	this.GameType_TCMJ = 97;
	this.GameType_PBYHMJ = 98;
	this.GameType_YHZMJ = 99;
	this.GameType_PNYHMJ = 100;
	this.GameType_SDFJMJ = 101;
	//安岳跑得快
	this.GameType_YXPDK = 102;

	this.GameType_PYPP = 103;

	//鄱阳捉红5
	this.GameType_PYZHW = 104;
	//衢州麻将
	this.GameType_ZJQZMJ = 106;
	//乐平跑得快
	this.GameType_LPPDK = 109;
	//抚州麻将
	this.GameType_JXFZMJ = 110;
	//河南长沙麻将
	this.GameType_HNCSMJ = 112;
	//江西抚州关牌
	this.GameType_JXFZGP = 115;
	//抚州跑得快
	this.GameType_JXFZPDK = 116;

	this.GameType_PYPDK = 111;

	this.GameType_DLE = 113;

	this.GameType_WL = 60;
	//台湾麻将
	this.GameType_TWMJ = 121;
	//泰州卡子麻将
	this.GameType_TZKZMJ = 122;
	//都昌栽宝麻将
	this.GameType_DCZBMJ = 123;
	//都昌无档麻将
	this.GameType_DCWDMJ = 124;
	this.GameType_HNZZMJ = 125;
	this.GameType_ZA13MJ = 126;
	this.GameType_ZA16MJ = 127;
	this.GameType_ZASS = 142;
	//兴化麻将
	this.GameType_XHMJ = 118;
	//兴化白板麻将
	this.GameType_XHBBMJ = 120;
	//萍乡跑得快
	this.GameType_PXPDK = 114;
	//萍乡跑得快
	this.GameType_ERDDZ = 129;
	//萍乡跑得快
	this.GameType_TBZFBMJ = 132;
	//河南跑得快
	this.GameType_HNPDK = 130;
	//南阳卡五星
	this.GameType_NYKWXMJ = 133;
	//柳州麻将
	this.GameType_LZMJ = 134;
	//柳州麻将
	this.GameType_DHD = 131;
	//八一字牌
	this.GameType_BYZP = 135;
	//怀化红拐弯
	this.GameType_HHHGW = 151;
	//安岳长牌
	this.GameType_AYCP = 137;
	//云霄麻将
	this.GameType_FJYXMJ = 138;
	// 浙江衢州双扣
	this.GameType_ZJQZSK = 117;
	this.GameType_RCWSK = 119;
	this.GameType_CTWSK = 140;
	this.GameType_YGWSK = 243;
	// 临沂麻将
	this.GameType_SDLYMJ = 141;
	// 沧州推倒胡
	this.GameType_CZMJ = 143;
	this.GameType_YZMJ = 49;
	//升级
	this.GameType_SJ = 50;
	//都昌讨赏
	this.GameType_DCTS = 139;
	// 上饶麻将
	this.GameType_SRMJ = 24;
	//来宾麻将
	this.GameType_LBMJ = 136;
	//任丘麻将
	this.GameType_RQMJ = 148;
	//扬州跑得快
	this.GameType_YZPDK = 149;
	//常熟麻将
	this.GameType_CSMJ = 39;
	//莲花猪牌
	this.GameType_LHZP = 128;
	//溆浦老牌
	this.GameType_XPLP = 150;
	//红中王麻将 -> 怀化麻将
	this.GameType_HZWMJ = 153;
	//溆浦跑胡子
	this.GameType_XPPHZ = 152;
	//萍乡跑胡子
	this.GameType_PXPHZ = 595;
	// 榕城五十K3
	this.GameType_RCWSK3 = 154;
	// 瑞昌麻将
	this.GameType_RCMJ = 144;
	//孝感卡五星
	this.GameType_XGKWXMJ = 145;
	//许昌麻将
	this.GameType_HNXCMJ = 146;
	// 瑞昌麻将
	this.GameType_JDZMJ = 155;
	this.GameType_BZMJ = 188;
	this.GameType_BZTDH = 306;
	this.GameType_SQMJ = 180;
	// 江阴麻将
	this.GameType_JYMJ = 70;

	this.GameType_JDZTS = 157;
	this.GameType_DD = 260;
	this.GameType_LBHZMJ = 158;

	//会同麻将
	this.GameType_HTMJ = 156;
	//乐平讨赏
	this.GameType_LPTS = 108;
	//泰和滚精麻将
	this.GameType_THGJMJ = 159;
	//泰和滚精麻将
	this.GameType_HNPDSMJ = 147;
	//景德镇跑得快
	this.GameType_JDZPDK = 161;
	//邳州麻将
	this.GameType_PZMJ = 90;
	//济源麻将
	this.GameType_HNJYMJ = 160;
	//盐城麻将
	this.GameType_JSYCMJ = 162;
	//宿迁麻将
	this.GameType_JSSQMJ = 163;
	//淮安麻将
	this.GameType_JSHAMJ = 164;
	//无锡麻将
	this.GameType_WXMJ = 69;
	//怀化跑得快
	this.GameType_HHPDK = 169;
	//赣榆麻将
	this.GameType_GYMJ = 171;
	//濮阳麻将
	this.GameType_PYMJ = 173;
	//常州麻将
	this.GameType_JSCZMJ = 165;
	//连云港麻将
	this.GameType_LYGMJ = 166;
	//靖州麻将
	this.GameType_HNJZMJ = 168;
	//安化麻将
	this.GameType_AHMJ = 174;
	//徐州麻将
	this.GameType_XZMJ = 170;
	//开封麻将
	this.GameType_KFMJ = 172;
	//灌云麻将
	this.GameType_JSGYMJ = 167;

	this.GameType_AHPHZ = 175;
	this.GameType_XXMJ = 176;
	//安阳麻将
	this.GameType_HNAYMJ = 177;
	//南昌麻将
	this.GameType_NCMJ = 179;
	//周口麻将
	this.GameType_ZKMJ = 181;
	//新余麻将
	this.GameType_JXXYMJ = 182;
	//高安麻将
	this.GameType_GAMJ = 178;
	//铜鼓麻将
	this.GameType_TGMJ = 183;
	//河南鹤壁
	this.GameType_HNHBMJ = 184;
	//漯河麻将
	this.GameType_LHMJ = 185;
	//九江麻将
	this.GameType_JJMJ = 187;
	//榕城五十K
	this.GameType_RCWSK6 = 190;
	//连江五十K
	this.GameType_LJWSK4 = 191;
	//汾阳麻将
	this.GameType_FYMJ = 193;
	//亳州全嘴麻将
	this.GameType_BZQZMJ = 194;
	this.GameType_FYDDZMJ = 197;
	//衡水推倒胡麻将
	this.GameType_HSTDHMJ = 195;
	//长春麻将
	this.GameType_CCMJ = 189;
	//蒲城麻将
	this.GameType_PCMJ = 198;
	//吉林麻将
	this.GameType_JLMJ = 192;
	//杭州麻将
	this.GameType_ZJHZMJ = 196;
	//红中麻将
	this.GameType_XJXZMJ = 202;
	//南京麻将
	this.GameType_NJMJ = 201;
	//吉安麻将
	this.GameType_JAMJ = 186;
	//新疆螺丝胡麻将
	this.GameType_XJLSHMJ = 199;
	//颍上麻将
	this.GameType_YSMJ = 203;
	//株洲碰胡
	this.GameType_ZZPH = 204;
	//仪征麻将
	this.GameType_YZYZMJ = 208;
	//自贡长牌
	this.GameType_ZGCP = 209;
	this.GameType_ZGDSS = 210;
	this.GameType_GDMJ = 211;
	//临夏麻将
	this.GameType_LXMJ = 207;
	//辰溪麻将
	this.GameType_CXMJ = 212;
	//罗山13579
	this.GameType_LS13579 = 217;
	//罗山砍金金
	this.GameType_LSKJJMJ = 218;
	//罗山老五嘴
	this.GameType_LSLWZMJ = 216;
	//金昌麻将
	this.GameType_JCMJ = 215;
	//三打哈
	this.GameType_SDH = 213;
	//桂林三打哈
	this.GameType_GLSDH = 348;
	//阜新麻将
	this.GameType_FXMJ = 228;
	this.GameType_GSJMJ = 223;
	//推倒胡（河北）
	this.GameType_HBTDHMJ = 221;
	//河北麻将
	this.GameType_HBHBMJ = 222;
	//宁乡开王麻将
	this.GameType_NXKWMJ = 220;
	this.GameType_NJLHMJ = 224;
	//高邮麻将
	this.GameType_YZGYMJ = 230;
	//沭阳麻将
	this.GameType_SQSYMJ = 231;
	//安庆麻将
	this.GameType_AQMJ = 232;
	//江都麻将
	this.GameType_JDMJ = 233;
	//温州麻将
	this.GameType_ZJWZMJ = 225;
	//苏州麻将
	this.GameType_SZMJ = 226;

	this.GameType_ZGMJ = 214;
	this.GameType_NBMJ = 235;
	//湖州麻将
	this.GameType_ZJSHZMJ = 219;
	//孝感跑得快
	this.GameType_XGPDK = 238;
	//斗地主
	this.GameType_SRDDZ = 227;
	//芜湖麻将
	this.GameType_WHMJ = 234;
	//余干夹子
	this.GameType_YGJZMJ = 244;
	//天门晃晃麻将
	this.GameType_TMHHMJ = 245;
	//嘉兴麻将
	this.GameType_JXMJ = 236;
	//开化麻将
	this.GameType_QZKHMJ = 242;
	//黎川麻将
	this.GameType_LCMJ = 240;
	//常山麻将
	this.GameType_QZCSMJ = 241;
	//荆楚晃晃麻将
	this.GameType_JCHHMJ = 239;
	//涟水麻将
	this.GameType_LSMJ = 229;

	this.GameType_JSTDHMJ = 246;
	//硬三嘴麻将
	this.GameType_YSZMJ = 248;
	//应县八张麻将
	this.GameType_YXBZMJ = 250;
	//运城贴金麻将
	this.GameType_YCTJMJ = 251;
	//换三张麻将
	this.GameType_CQHSZMJ = 237;
	//武汉麻将
	this.GameType_HBWHMJ = 253;
	//稷山扭叶子麻将
	this.GameType_JSNYZMJ = 255;
	//株洲牛十别
	this.GameType_ZZNSB = 205;
	//安康159麻将
	this.GameType_AK159MJ = 254;
	//榆林打锅子
	this.GameType_YLDGZMJ = 252;
	//大连穷胡
	this.GameType_DLQHMJ = 249;
	//六盘水麻将
	this.GameType_LPSMJ = 261;
	//洪洞麻将
	this.GameType_SXHTMJ = 247;
	//茂名麻将
	this.GameType_MMMJ = 270;
	//瑞金麻将
	this.GameType_RJMJ = 283;
	//阳江麻将
	this.GameType_YJMJ = 273;
	//沁阳麻将
	this.GameType_QYMJ = 296;
	//血流2vs2麻将
	this.GameType_XL2VS2MJ = 265;
	//新建麻将
	this.GameType_XJMJ = 290;
	//金溪麻将
	this.GameType_FZJXMJ = 291;
	//江门杠杠胡麻将
	this.GameType_JMGGHMJ = 269;
	//石城麻将
	this.GameType_SCMJ = 289;
	//余江麻将
	this.GameType_YTYJMJ = 294;
	//于都德国麻将
	this.GameType_YDDGMJ = 284;
	//南康爆胡麻将
	this.GameType_NKBHMJ = 285;
	//兰考麻将
	this.GameType_LKMJ = 297;
	//焦作麻将
	this.GameType_JZMJ = 299;
	//乐安麻将
	this.GameType_LAMJ = 300;
	//广昌麻将
	this.GameType_FZGCMJ = 292;
	//新乡封丘麻将
	this.GameType_XXFQMJ = 298;
	//孟州麻将
	this.GameType_MZMJ = 307;
	//洛阳杠次麻将
	this.GameType_LYGCMJ = 303;
	//东乡比精麻将
	this.GameType_DXBJMJ = 311;
	//通许麻将
	this.GameType_TXMJ = 313;
	//兰考五十K
	this.GameType_LKWSK = 309;
	//鹿邑麻将
	this.GameType_ZKLYMJ = 315;
	//商城麻将
	this.GameType_XYSCMJ = 319;

	this.GameType_GSMJ = 321;
	//贵溪麻将
	this.GameType_GXMJ = 312;
	//叶县麻将
	this.GameType_PDSYXMJ = 323;
	//驻马店麻将
	this.GameType_ZMDMJ = 317;
	//钟祥
	this.GameType_ZXMJ = 320;
	//固始麻将
	this.GameType_XYGSMJ = 322;
	//舞钢翻混麻将
	this.GameType_WGFHMJ = 329;
	//邓州十九张麻将
	this.GameType_DZSJZMJ = 324;
	//A3扑克
	this.GameType_A3PK = 308;
	//桂林字牌
	this.GameType_GLZP = 301;
	//叶县四人斗地主
	this.GameType_YXSRDDZ = 326;
	//南召打搂
	this.GameType_NZDL = 334;
	//南召五十K
	this.GameType_NZWSK = 335;
	//叶县三人斗地主
	this.GameType_YXDDZ = 325;
	//广西锄大地
	this.GameType_GXCDD = 304;
	//新县麻将
	this.GameType_XYXXMJ = 330;
	//模板麻将
	this.GameType_DEMOMJ = 200;
	//息县推倒胡麻将
	this.GameType_XXTDHMJ = 332;
	//建德麻将
	this.GameType_HZJDMJ = 351;
	//全州麻将
	this.GameType_GLQZMJ = 339;
	//益阳麻将
	this.GameType_YYMJ = 344;
	//曲靖飞小鸡麻将
	this.GameType_QJFXJMJ = 354;
	//桃江麻将
	this.GameType_TJMJ = 353;
	//南县麻将
	this.GameType_YJNXMJ = 356;
	//258刮风听麻将
	this.GameType_GFT258MJ = 342;
	//仙桃赖晃麻将
	this.GameType_XTLHMJ = 349;
	//兰州麻将
	this.GameType_GSLZMJ = 359;
	//两幅牌花麻将
	this.GameType_LFPHMJ = 368;
	//天津麻将
	this.GameType_TJTJMJ = 362;
	//荣县二五
	this.GameType_RXEW = 369;
	//双古二五
	this.GameType_SGEW = 367;
	//淮北麻将
	this.GameType_AHHBMJ = 376;
	//三幅牌花麻将
	this.GameType_SFPHMJ = 370;
	//新宁麻将
	this.GameType_XNMJ = 360;
	//济南麻将
	this.GameType_SDJNMJ = 357;
	//柘城麻将
	this.GameType_ZCMJ = 371;
	//过炸
	this.GameType_GZ = 378;
	//鲁山麻将
	this.GameType_PDSLSMJ = 382;
	//内乡麻将
	this.GameType_NXMJ = 385;
	//汝州麻将
	this.GameType_RZMJ = 383;
	//东至麻将
	this.GameType_CZDZMJ = 390;
	//吉安王炸
	this.GameType_JAWZ = 380;

	//泰和bbz
	this.GameType_THBBZ = 540;

	//自贡七张
	this.GameType_ZGQZMJ = 373;
	//三代
	this.GameType_SD = 375;
	//冲牌
	this.GameType_CQCP = 393;
	//十点半
	this.GameType_SDB = 408;
	//永城麻将
	this.GameType_SQYCMJ = 409;
	//郏县麻将
	this.GameType_PDSJXMJ = 387;
	//安福麻将
	this.GameType_AFMJ = 399;
	//邵通麻将
	this.GameType_STSTMJ = 401;
	//石台麻将
	this.GameType_STMJ = 389;
	//蕲春打拱
	this.GameType_QCDG = 410;
	//青阳平胡
	this.GameType_QYPHMJ = 392;
	//宝丰麻将
	this.GameType_BFMJ = 386;
	//凌源麻将
	this.GameType_CYLYMJ = 398;
	//东台麻将
	this.GameType_DTMJ = 397;
	//通山打拱
	this.GameType_TSDG = 405;
	//平和麻将
	this.GameType_PHMJ = 413;
	//小上游
	this.GameType_XSY = 316;
	//武陟麻将
	this.GameType_JZWZMJ = 365;
	//个旧麻将
	this.GameType_GJMJ = 415;
	//安顺麻将
	this.GameType_ASMJ = 407;
	//红五
	this.GameType_HW = 453;
	//唐河交公粮
	this.GameType_THJGL = 337;
	//四冲扑克
	this.GameType_SCPK = 400;
	//方城捉黑A
	this.GameType_FCZHA = 384;
	//本溪马队
	this.GameType_BXMD = 454;
	//四团
	this.GameType_ST = 417;
	//宜昌上大人
	this.GameType_YCSDR = 403;
	//百色麻将
	this.GameType_BSMJ = 458;
	//桐城麻将
	this.GameType_TCPFMJ = 446;
	//无锡罗松
	this.GameType_WXLS = 475;
	//戳牌
	this.GameType_CP = 391;
	//拱猪
	this.GameType_TWGZ = 464;
	//新余五十K
	this.GameType_XYWSK = 485;
	//丰城双剑
	this.GameType_FCSJ = 491;
	//上高麻将
	this.GameType_YCSGMJ = 492;
	//京山麻将
	this.GameType_JMJSMJ = 511;
	//嘉兴原子
	this.GameType_JXYZ = 468;
	//内江麻将
	this.GameType_SCNJMJ = 470;
	//慈溪麻将
	this.GameType_NBCXMJ = 505;
	//泰和K/A包
	this.GameType_THKB = 404;
	//莆田十六张
	this.GameType_PTMJ = 10;
	//七王五二三
	this.GameType_QWWES = 455;
	//宜丰麻将
	this.GameType_YFMJ = 459;
	//高安五十K
	this.GameType_GAWSK = 520;
	//永新打墩子
	this.GameType_JAYXDDZ = 519;
	//高安双托
	this.GameType_GAST = 522;
	//上高麻将
	this.GameType_HEBMJ = 504;
	//平阳四副头
	this.GameType_PYSFT = 473;
	//诸暨麻将
	this.GameType_SXZJMJ = 509;
	//广安麻将
	this.GameType_SCGAMJ = 514;
	//泰和过炸
	this.GameType_THGZ = 539;
	//绍兴麻将
	this.GameType_SXMJ = 506;
	//莱芜麻将
	this.GameType_LWMJ = 523;
	//峡江博精
	this.GameType_XJBJMJ = 535;
	//宜昌花牌
	this.GameType_YCHP = 406;
	//枣庄麻将
	this.GameType_SDZZMJ = 526;
	//龙港麻将
	this.GameType_LGMJ = 529;
	//炒地皮
	this.GameType_CDP = 474;
	//炒地皮
	this.GameType_DDA = 478;
	//成都麻将
	this.GameType_CDXZMJ = 516;
	//泸州血战
	this.GameType_LZXZMJ = 524;
	//潍坊保皇
	this.GameType_WFBH = 467;
	//沛县麻将
	this.GameType_PXMJ = 91;
	//聊城麻将
	this.GameType_SDLCMJ = 515;
	//张家港麻将
	this.GameType_ZJGMJ = 93;
	//四幺四
	this.GameType_SYS = 480;
	//扎股子
	this.GameType_ZGZ = 477;
	//长宁麻将
	this.GameType_CNMJ = 531;
	//打炸中奖
	this.GameType_DZZJ = 571;
	//成都血流红中麻将
	this.GameType_XLHZMJ = 517;
	//鄱阳打丁
	this.GameType_PYDD = 572;
	//安义麻将
	this.GameType_NCAYMJ = 533;
	//昆山麻将
	this.GameType_KSMJ = 94;
	//邵阳剥皮
	this.GameType_SYSYBP = 450;
	//泰安麻将
	this.GameType_TAMJ = 530;
	//点炮胡麻将
	this.GameType_DPHMJ = 587;
	//拳打脚踢
	this.GameType_QDJT = 590;
	//浠水打七
	this.GameType_XSDQ = 483;
	//莲花广麻
	this.GameType_LHGMMJ = 544;
	//金坛麻将
	this.GameType_JTMJ = 548;
	//珙县麻将
	this.GameType_YBGXMJ = 538;
	//金坛跑得快
	this.GameType_JTPDK = 604;
	//兴文麻将
	this.GameType_XWMJ = 528;
	//泰州跑得快
	this.GameType_TZPDK = 610;
	//吴江麻将
	this.GameType_WJMJ = 559;
	//青岛保皇
	this.GameType_QDBH = 463;
	//塘沽麻将
	this.GameType_TJTGMJ = 552;
	//盱眙麻将
	this.GameType_HAXYMJ = 546;
	//遵义麻将
	this.GameType_ZYMJ = 541;
	//南通长牌
	this.GameType_NTCP = 518;
	//锦州麻将
	this.GameType_LNJZMJ = 560;
	//睢宁麻将
	this.GameType_JSSNMJ = 92;
	//姜堰二十三张
	this.GameType_JYESSZ = 609;
	//宣城麻将
	this.GameType_XCMJ = 617;
	//惠州百搭麻将
	this.GameType_HZBDMJ = 622;
	//百搭鸡胡麻将
	this.GameType_BDJHMJ = 621;
	//宣城跑得快
	this.GameType_XCPDK = 618;
	//黄石晃晃
	this.GameType_HSHHMJ = 624;
	//眉山血战麻将
	this.GameType_MSMJ = 543;
	//大冶开口番
	this.GameType_DYKKFMJ = 623;
	//椒江麻将
	this.GameType_TZJJMJ = 549;
	//南丰数刀
	this.GameType_NFSD = 628;
	//高淳麻将
	this.GameType_GCMJ = 545;
	//巴中麻将
	this.GameType_SCBZMJ = 568;
	//大治字牌
	this.GameType_DYZP = 625;
	//溧阳花麻将
	this.GameType_LYHMJ = 553;
	//新干冲关
	this.GameType_XGCGMJ = 635;
	//德阳血战麻将
	this.GameType_SCDYMJ = 556;
	//铁岭麻将
	this.GameType_TLMJ = 569;
	//株洲打码子
	this.GameType_ZZDMZ = 555;
	//黎川博精
	this.GameType_LCBJMJ = 642;
	//潜江晃晃
	this.GameType_QJHHMJ = 643;
	//大治字牌
	this.GameType_FDPK = 614;
	//宜丰百杀
	this.GameType_YFBS = 636;
	//雅安血战麻将
	this.GameType_YAXZMJ = 557;
	//高县麻将
	this.GameType_SCGXMJ = 547;
	//高县麻将
	this.GameType_SCGXMJ = 547;
	//二七王
	this.GameType_EQW = 542;
	//恩施麻将
	this.GameType_ESMJ = 585;
	//营口麻将
	this.GameType_YKMJ = 29;
	//潜江红中
	this.GameType_QJHZMJ = 649;
	//沧县麻将
	this.GameType_HBCXMJ = 580;
	//瓦甸麻将
	this.GameType_WDMJ = 582;
	//眉山血流麻将
	this.GameType_MSXLMJ = 589;
	//王三八二A
	this.GameType_WSBEA = 507;
	//潜江跑得快
	this.GameType_QJPDK = 655;
	//鞍山麻将
	this.GameType_LNASMJ = 584;
	//惠州庄麻将
	this.GameType_HZZMJ = 594;
	//四副牌
	this.GameType_SFP = 579;
	//无锡推倒胡
	this.GameType_WXTDHMJ = 657;
	//合江麻将
	this.GameType_HJMJ = 562;
	//四季常春麻将
	this.GameType_SJCCMJ = 561;
	//南充麻将
	this.GameType_SCNCMJ = 550;
	//姜堰麻将
	this.GameType_JSJYMJ = 654;
	//血战到底
	this.GameType_XZDDMJ = 658;
	//江安麻将
	this.GameType_RGJAMJ = 534;
	//老戳字牌
	this.GameType_LCZP = 489;
	//宜宾血战麻将
	this.GameType_YBXZMJ = 592;
	//黄石麻将
	this.GameType_HBHSMJ = 574;
	//黎川跑得快
	this.GameType_LCPDK = 660;
	//佳木斯麻将
	this.GameType_JMSMJ = 577;
	//血流八宝牌
	this.GameType_XLBBP = 558;
	//贵港麻将
	this.GameType_GGMJ = 596;
	//泰兴麻将
	this.GameType_JSTXMJ = 563;
	//桂柳麻将
	this.GameType_GLMJ = 600;
	//攀枝花血战麻将
	this.GameType_PZHXZMJ = 598;
	//划水麻将
	this.GameType_NXHSMJ = 578;
	//广丰麻将
	this.GameType_GFMJ = 599;
	//无锡跑得快
	this.GameType_WXPDK = 670;
	//上顿渡麻将
	this.GameType_SDDMJ = 629;
	//河池麻将
	this.GameType_HCMJ = 601;
	//武宁麻将
	this.GameType_JJWNMJ = 586;
	//永修满带
	this.GameType_YXMDMJ = 591;
	//德阳血流麻将
	this.GameType_DYXLMJ = 606;
	//金坛麻将
	this.GameType_XJTMJ = 673;
	//客家麻将
	this.GameType_KJMJ = 612;
	//无锡全万字
	this.GameType_WXQWZMJ = 678;
	//肇庆麻将
	this.GameType_ZQMJ = 613;
	//金溪打盾
	this.GameType_JXDD = 672;
	//潜江510K
	this.GameType_QJWSK = 668;
	//无为麻将
	this.GameType_WWMJ = 626;
	//凉山麻将
	this.GameType_SCLSMJ = 565;
	//浠水麻将
	this.GameType_HGXSMJ = 676;
	//泾县麻将
	this.GameType_AHJXMJ = 633;
	//遂宁血战麻将
	this.GameType_SNMJ = 616;
	//广丰510K
	this.GameType_GFWSK = 605;
	//一脚癞油
	this.GameType_YJLYMJ = 573;
	//金坛全万字
	this.GameType_JTQWZMJ = 677;
	//象山麻将
	this.GameType_JZXSMJ = 640;
	//广元血战麻将
	this.GameType_GYXZMJ = 576;
	//弋阳麻将
	this.GameType_SRYYMJ = 608;
	//慈溪地主
	this.GameType_CXDZ = 647;
	//奉化明扣
	this.GameType_FHMK = 666;
	//气象万千
	this.GameType_QXWQ = 564;
	//北海麻将
	this.GameType_BHMJ = 597;
	//南宁麻将
	this.GameType_NNMJ = 603;
	//资阳血战麻将
	this.GameType_ZYXZMJ = 607;
	//敲三家
	this.GameType_QSJ = 575;
	//潮汕麻将
	this.GameType_GDCSMJ = 619;
	//湖南红中麻将
	this.GameType_HNHZMJ = 632;
	//德清点子
	this.GameType_DQDZ = 481;
	//乌兰察布麻将
	this.GameType_WLCBMJ = 664;
	//浠水五十K
	this.GameType_XSWSK = 684;
	//利辛麻将
	this.GameType_AHLXMJ = 630;
	//红心大战
	this.GameType_HXDZ = 583;
	//汕尾推到胡
	this.GameType_SWTDHMJ = 424;
	//定边510K
	this.GameType_DBWSK = 685;
	//威海保皇
	this.GameType_WHBH = 482;
	//玉林鸡胡
	this.GameType_YLMJ = 679;
	//临沧麻将
	this.GameType_YNLCMJ = 662;
	//普洱麻将
	this.GameType_PEMJ = 653;
	//打三片
	this.GameType_DSP = 611;
	//达州血战麻将
	this.GameType_DZXZMJ = 620;
	//保山幺子分
	this.GameType_BSYZF = 675;
	//界首麻将
	this.GameType_AHJSMJ = 648;
	//96扑克
	this.GameType_JLPK = 495;
	//黑三
	this.GameType_HSPK = 686;
	//肉挨肉
	this.GameType_RAR = 637;
	//疯狂8点
	this.GameType_FKBD = 513;
	//犍为血战麻将
	this.GameType_QWMJ = 639;
	//保山麻将
	this.GameType_YNBSMJ = 651;
	//保定跑马
	this.GameType_SWPMMJ = 430;
	//金山麻将
	this.GameType_SHJSMJ = 420;
	//秦皇岛麻将
	this.GameType_QHDMJ = 431;
	//赤壁打滚
	this.GameType_CBDG = 551;
	//资溪麻将
	this.GameType_JXZXMJ = 422;
	//万州血战麻将
	this.GameType_WZXZMJ = 421;
	//南城麻将
	this.GameType_JXNCMJ = 425;
	//和县刀子
	this.GameType_HXDZMJ = 638;
	//上饶打炸
	this.GameType_SRDZ = 615;
	//潮汕木虱鱼
	this.GameType_CSMSY = 665;
// ###.GameType_Flag
	
	this.GameType_GYZJMJ = 256;
	//大同乱刮风
	this.GameType_DTLGFMJ = 257;
	//上海敲麻
	this.GameType_SHQMMJ = 258;
	//余干跑得快
	this.GameType_YGPDK = 267;
	//亮六飞一麻将
	this.GameType_LLFYMJ = 268;
	//立四麻将
	this.GameType_SXLSMJ = 263;
	//大众麻将
	this.GameType_DZMJ = 264;
	//打盾
	this.GameType_DD = 260;
	//断卡勾麻将
	this.GameType_DKGMJ = 262;
	//
	this.GameType_GZMJ = 275;
	//汕尾麻将
	this.GameType_SWMJ = 276;
	//揭阳麻将
	this.GameType_GDJYMJ = 277;
	//信丰广庄麻将
	this.GameType_XFGZMJ = 279;
	//宁都麻将
	this.GameType_JXNDMJ = 280;
	//赣州同花
	this.GameType_GZTH = 282;
	//赣南麻将
	this.GameType_GNMJ = 278;
	this.GameType_HNMJ = 259;
	//包牌
	this.GameType_BP = 281;
	//定南麻将
	this.GameType_DNMJ = 287;
	//龙南麻将
	this.GameType_FCMJ = 286;
	//龙南麻将
	this.GameType_LNMJ = 288;
	//合肥麻将
	this.GameType_HFMJ = 274;
	//马鞍山麻将
	this.GameType_MASMJ = 271;
	//新红中麻将
	this.GameType_XHZMJ = 295;
	//荆门双开
	this.GameType_JMSKMJ = 302;
	//亳州跑得快
	this.GameType_BZPDK = 305;
	//新云霄麻将
	this.GameType_XYXMJ = 310;
	//淮南麻将
	this.GameType_AHHNMJ = 272;
	//广昌包杠麻将
	this.GameType_GCBGMJ = 293;
	//三峡门麻将
	this.GameType_SXMMJ = 314;
	//南召麻将
	this.GameType_NZMJ = 327;
	//固始跑得快
	this.GameType_GSPDK = 328;
	//双色牌麻将
	this.GameType_SSPMJ = 338;
	//海南地主牌
	this.GameType_HNDZP = 266;
	//新县跑得快
	this.GameType_XYXXPDK = 331;
	//唐河麻将
	this.GameType_NYTHMJ = 336;
	//方城推倒胡麻将
	this.GameType_FCTDHMJ = 347;
	//桂林跑牌
	this.GameType_GLPP = 318;
	//桂林510K
	this.GameType_GLWSK = 346;
	//潢川麻将
	this.GameType_XYHCMJ = 340;
	//宜黄麻将
	this.GameType_YHMJ = 350;
	//永州扯胡子
	this.GameType_YZCHZ = 341;
	//邵阳麻将
	this.GameType_HNSYMJ = 358;
	//固始斗地主
	this.GameType_GSDDZ = 333;
	//萧山麻将
	this.GameType_XSMJ = 352;
	//耒阳麻将
	this.GameType_HYLYMJ = 361;
	//沅江麻将
	this.GameType_HNYJMJ = 355;
	//云中麻将
	this.GameType_NMGYZMJ = 364;
	//博爱麻将
	this.GameType_BAMJ = 363;
	//荆楚捱晃麻将
	this.GameType_JCAHMJ = 366;
	//衡山麻将
	this.GameType_HYHSMJ = 372;
	//吉水麻将
	this.GameType_JSMJ = 377;
	//西峡麻将
	this.GameType_NYXXMJ = 381;
	//铁板胡麻将
	this.GameType_TBHMJ = 394;
	//转蛋
	this.GameType_ZD = 388;
	//绵阳麻将
	this.GameType_MYMJ = 374;
	// 永丰冲关
	this.GameType_YFCGMJ = 411;
	//八支麻将
	this.GameType_HFBZMJ = 395;
	// 池州麻将
	this.GameType_CZCZMJ = 396;
	//潢川跑得快
	this.GameType_HCPDK = 379;
	// 万字雀神
	this.GameType_WZQSMJ = 462;
	// 潮州麻将
	this.GameType_GDCZMJ = 402;
	//宁都跑得快
	this.GameType_JXNDPDK = 466;
	//千变双扣
	this.GameType_QBSK = 412;
	//春天扑克
	this.GameType_CTPK = 414;
	// 无锡抓码
	this.GameType_WXZMMJ = 472;
	// 沈阳麻将
	this.GameType_LNSYMJ = 465;
	//吉安跑得快
	this.GameType_JAPDK = 456;
	//变色龙
	this.GameType_BSL = 457;
	// 葫芦岛麻将
	this.GameType_HLDMJ = 469;
	//挖坑
	this.GameType_WK = 418;
	//曲靖飞白板
	this.GameType_QJFBBMJ = 419;
	//抓老麻子
	this.GameType_ZLMZ = 416;
	//四支刀
	this.GameType_SZD = 486;
	// 楚雄玉溪麻将
	this.GameType_CXYXMJ = 452;
	// 东山麻将
	this.GameType_DSMJ = 510;
	// 奉新麻将
	this.GameType_YCFXMJ = 490;
	//刨幺
	this.GameType_PY = 460;
	// 卡隆麻将
	this.GameType_KLMJ = 496;
	//高安斗地主
	this.GameType_GADDZ = 521;
	//丰城关牌
	this.GameType_FCGP = 494;
	//三个老k
	this.GameType_SGLK = 487;
	//嘉兴红十
	this.GameType_JXHS = 476;
	// 万安博精
	this.GameType_WABJMJ = 493;
	//沙沙儿
	this.GameType_SSE = 536;
	//板子炮
	this.GameType_BZP = 461;
	// 幺鸡麻将
	this.GameType_LSYJMJ = 525;
	//宿松同心
	this.GameType_SSTX = 479;
	// 台州麻将
	this.GameType_ZJTZMJ = 532;
	//铜鼓五十K
	this.GameType_TGWSK = 567;
	// 菏泽麻将
	this.GameType_SDHZMJ = 527;
	//够级
	this.GameType_GJ = 471;
	//高安跑得快
	this.GameType_GAPDK = 588;
	// 星子麻将
	this.GameType_LSXZMJ = 537;
	// 永新麻将
	this.GameType_JAYXMJ = 593;
	//河池牛鬼
	this.GameType_HCNG = 554;
	//黄石跑得快
	this.GameType_HSPDK = 644;

	this.GametTypeNameDict = {};
	this.GametTypeNameDict["HZMJ"] = this.GameType_HZMJ;
	this.GametTypeNameDict["LBHZMJ"] = this.GameType_LBHZMJ;
	this.GametTypeNameDict["SSS"] = this.GameType_SSS;
	this.GametTypeNameDict["LYMJ"] = this.GameType_LYMJ;
	this.GametTypeNameDict["XMMJ"] = this.GameType_XMMJ;
	this.GametTypeNameDict["NN"] = this.GameType_NN;
	this.GametTypeNameDict["FZMJ"] = this.GameType_FZMJ;
	this.GametTypeNameDict["QZMJ"] = this.GameType_QZMJ;
	this.GametTypeNameDict["NAMJ"] = this.GameType_NAMJ;
	this.GametTypeNameDict["SSMJ"] = this.GameType_SSMJ;
	this.GametTypeNameDict["ZZMJ"] = this.GameType_ZZMJ;
	this.GametTypeNameDict["ZJH"] = this.GameType_ZJH;
	this.GametTypeNameDict["PTMJ"] = this.GameType_PTMJ;
	this.GametTypeNameDict["NDMJ"] = this.GameType_NDMJ;
	this.GametTypeNameDict["NPMJ"] = this.GameType_NPMJ;
	this.GametTypeNameDict["XYMJ"] = this.GameType_XYMJ;
	this.GametTypeNameDict["SMMJ"] = this.GameType_SMMJ;
	this.GametTypeNameDict["PDK"] = this.GameType_PDK;
	this.GametTypeNameDict["PT13MJ"] = this.GameType_PT13MJ;
	this.GametTypeNameDict["SG"] = this.GameType_SG;
	this.GametTypeNameDict["YGMJ"] = this.GameType_YGMJ;
	this.GametTypeNameDict["YGLFL"] = this.GameType_YGLFL;
	this.GametTypeNameDict["NPGZMJ"] = this.GameType_NPGZMJ;
	this.GametTypeNameDict["ZJJHMJ"] = this.GameType_ZJJHMJ;
	this.GametTypeNameDict["HBYXMJ"] = this.GameType_HBYXMJ;
	this.GametTypeNameDict["YSDZ"] = this.GameType_YSDZ;
	this.GametTypeNameDict["XYZB"] = this.GameType_XYZB;
	this.GametTypeNameDict["WSK"] = this.GameType_WSK;
	this.GametTypeNameDict["PXCN"] = this.GameType_PXCN;
	this.GametTypeNameDict["ZJMJ"] = this.GameType_ZJMJ;
	this.GametTypeNameDict["ZJPLS"] = this.GameType_ZJPLS;
	this.GametTypeNameDict["WZMJ"] = this.GameType_WZMJ;
	this.GametTypeNameDict["YCMJ"] = this.GameType_YCMJ;
	this.GametTypeNameDict["GD"] = this.GameType_GD;
	this.GametTypeNameDict["DDZ"] = this.GameType_DDZ;
	this.GametTypeNameDict["HAMJ"] = this.GameType_HAMJ;
	this.GametTypeNameDict["JMHHMJ"] = this.GameType_JMHHMJ;
	this.GametTypeNameDict["GDY"] = this.GameType_GDY;
	this.GametTypeNameDict["QDMJ"] = this.GameType_QDMJ;
	this.GametTypeNameDict["YTMJ"] = this.GameType_YTMJ;
	this.GametTypeNameDict["YKMJ"] = this.GameType_YKMJ;
	this.GametTypeNameDict["NHMJ"] = this.GameType_NHMJ;
	this.GametTypeNameDict["LPMJ"] = this.GameType_LPMJ;
	this.GametTypeNameDict["BDMJ"] = this.GameType_BDMJ;
	this.GametTypeNameDict["YXMJ"] = this.GameType_YXMJ;
	this.GametTypeNameDict["TZMJ"] = this.GameType_TZMJ;
	this.GametTypeNameDict["SGMJ"] = this.GameType_SGMJ;
	this.GametTypeNameDict["BW"] = this.GameType_BW;
	this.GametTypeNameDict["JNMJ"] = this.GameType_JNMJ;
	this.GametTypeNameDict["JSYZMJ"] = this.GameType_JSYZMJ;
	this.GametTypeNameDict["TDHMJ"] = this.GameType_TDHMJ;
	this.GametTypeNameDict["XTMJ"] = this.GameType_XTMJ;
	this.GametTypeNameDict["ZPMJ"] = this.GameType_ZPMJ;
	this.GametTypeNameDict["CHMJ"] = this.GameType_CHMJ;
	this.GametTypeNameDict["HBMJ"] = this.GameType_HBMJ;
	this.GametTypeNameDict["SBP"] = this.GameType_SBP;
	this.GametTypeNameDict["HSMJ"] = this.GameType_HSMJ;
	this.GametTypeNameDict["ZYPK"] = this.GameType_ZYPK;
	this.GametTypeNameDict["BJC"] = this.GameType_BJC;
	this.GametTypeNameDict["BJPK"] = this.GameType_BJPK;
	this.GametTypeNameDict["XLQMJ"] = this.GameType_XLQMJ;
	this.GametTypeNameDict["FDMJ"] = this.GameType_FDMJ;
	this.GametTypeNameDict["FDDZ"] = this.GameType_FDDZ;
	this.GametTypeNameDict["YXLS"] = this.GameType_YXLS;
	this.GametTypeNameDict["PXZZMJ"] = this.GameType_PXZZMJ;
	this.GametTypeNameDict["PX6GT"] = this.GameType_PX6GT;
	this.GametTypeNameDict["PX3GT"] = this.GameType_PX3GT;
	this.GametTypeNameDict["PX258MJ"] = this.GameType_PX258MJ;
	this.GametTypeNameDict["YXTDH"] = this.GameType_YXTDH;
	this.GametTypeNameDict["AYPDK"] = this.GameType_AYPDK;
	this.GametTypeNameDict["AYDSS"] = this.GameType_AYDSS;
	this.GametTypeNameDict["AYMJ"] = this.GameType_AYMJ;
	this.GametTypeNameDict["WNMJ"] = this.GameType_WNMJ;
	this.GametTypeNameDict["WNYH"] = this.GameType_WNYH;
	this.GametTypeNameDict["WNPDK"] = this.GameType_WNPDK;
	this.GametTypeNameDict["FQPLS"] = this.GameType_FQPLS;
	this.GametTypeNameDict["FQSBP"] = this.GameType_FQSBP;
	this.GametTypeNameDict["DZPK"] = this.GameType_DZPK;
	this.GametTypeNameDict["DX"] = this.GameType_DX;
	this.GametTypeNameDict["HBPDK"] = this.GameType_HBPDK;
	this.GametTypeNameDict["JSXYMJ"] = this.GameType_JSXYMJ;
	this.GametTypeNameDict["BDYXMJ"] = this.GameType_BDYXMJ;
	this.GametTypeNameDict["HNXYMJ"] = this.GameType_HNXYMJ;
	this.GametTypeNameDict["TCMJ"] = this.GameType_TCMJ;
	this.GametTypeNameDict["PBYHMJ"] = this.GameType_PBYHMJ;
	this.GametTypeNameDict["SDFJMJ"] = this.GameType_SDFJMJ;
	this.GametTypeNameDict["YHZMJ"] = this.GameType_YHZMJ;
	this.GametTypeNameDict["DYMJ"] = this.GameType_DYMJ;
	this.GametTypeNameDict["SYMJ"] = this.GameType_SYMJ;
	this.GametTypeNameDict["PNYHMJ"] = this.GameType_PNYHMJ;
	this.GametTypeNameDict["YXPDK"] = this.GameType_YXPDK;
	this.GametTypeNameDict["PYPP"] = this.GameType_PYPP;
	this.GametTypeNameDict["PYZHW"] = this.GameType_PYZHW;
	this.GametTypeNameDict["PYPDK"] = this.GameType_PYPDK;
	this.GametTypeNameDict["DLE"] = this.GameType_DLE;
	this.GametTypeNameDict["ZJQZMJ"] = this.GameType_ZJQZMJ;
	this.GametTypeNameDict["JXFZMJ"] = this.GameType_JXFZMJ;
	this.GametTypeNameDict["HNCSMJ"] = this.GameType_HNCSMJ;
	this.GametTypeNameDict["JXFZGP"] = this.GameType_JXFZGP;
	this.GametTypeNameDict["LPPDK"] = this.GameType_LPPDK;
	this.GametTypeNameDict["JXFZPDK"] = this.GameType_JXFZPDK;
	this.GametTypeNameDict["WL"] = this.GameType_WL;
	this.GametTypeNameDict["TWMJ"] = this.GameType_TWMJ;
	this.GametTypeNameDict["TZKZMJ"] = this.GameType_TZKZMJ;
	this.GametTypeNameDict["DCZBMJ"] = this.GameType_DCZBMJ;
	this.GametTypeNameDict["DCWDMJ"] = this.GameType_DCWDMJ;
	this.GametTypeNameDict["HNZZMJ"] = this.GameType_HNZZMJ;
	this.GametTypeNameDict["ZA13MJ"] = this.GameType_ZA13MJ;
	this.GametTypeNameDict["ZA16MJ"] = this.GameType_ZA16MJ;
	this.GametTypeNameDict["ZASS"] = this.GameType_ZASS;
	this.GametTypeNameDict["XHMJ"] = this.GameType_XHMJ;
	this.GametTypeNameDict["XHBBMJ"] = this.GameType_XHBBMJ;
	this.GametTypeNameDict["PXPDK"] = this.GameType_PXPDK;
	this.GametTypeNameDict["ERDDZ"] = this.GameType_ERDDZ;
	this.GametTypeNameDict["TBZFBMJ"] = this.GameType_TBZFBMJ;
	this.GametTypeNameDict["HNPDK"] = this.GameType_HNPDK;
	this.GametTypeNameDict["NYKWXMJ"] = this.GameType_NYKWXMJ;
	this.GametTypeNameDict["LZMJ"] = this.GameType_LZMJ;
	this.GametTypeNameDict["DHD"] = this.GameType_DHD;
	this.GametTypeNameDict["FJYXMJ"] = this.GameType_FJYXMJ;
	this.GametTypeNameDict["BYZP"] = this.GameType_BYZP;
	this.GametTypeNameDict["HHHGW"] = this.GameType_HHHGW;
	this.GametTypeNameDict["AYCP"] = this.GameType_AYCP;
	this.GametTypeNameDict["ZJQZSK"] = this.GameType_ZJQZSK;
	this.GametTypeNameDict["CTWSK"] = this.GameType_CTWSK;
	this.GametTypeNameDict["YGWSK"] = this.GameType_YGWSK;
	this.GametTypeNameDict["RCWSK"] = this.GameType_RCWSK;
	this.GametTypeNameDict["NPGZMJ"] = this.GameType_NPGZMJ;
	this.GametTypeNameDict["SDLYMJ"] = this.GameType_SDLYMJ;
	this.GametTypeNameDict["CZMJ"] = this.GameType_CZMJ;
	this.GametTypeNameDict["XGKWXMJ"] = this.GameType_XGKWXMJ;
	this.GametTypeNameDict["HNXCMJ"] = this.GameType_HNXCMJ;
	this.GametTypeNameDict["YZMJ"] = this.GameType_YZMJ;
	this.GametTypeNameDict["SJ"] = this.GameType_SJ;
	this.GametTypeNameDict["DCTS"] = this.GameType_DCTS;
	this.GametTypeNameDict["JDZTS"] = this.GameType_JDZTS;
	this.GametTypeNameDict["DD"] = this.GameType_DD;
	this.GametTypeNameDict["LPTS"] = this.GameType_LPTS;
	this.GametTypeNameDict["SRMJ"] = this.GameType_SRMJ;
	this.GametTypeNameDict["LBMJ"] = this.GameType_LBMJ;
	this.GametTypeNameDict["RQMJ"] = this.GameType_RQMJ;
	this.GametTypeNameDict["YZPDK"] = this.GameType_YZPDK;
	this.GametTypeNameDict["CSMJ"] = this.GameType_CSMJ;
	this.GametTypeNameDict["LHZP"] = this.GameType_LHZP;
	this.GametTypeNameDict["XPLP"] = this.GameType_XPLP;
	this.GametTypeNameDict["HZWMJ"] = this.GameType_HZWMJ;
	this.GametTypeNameDict["XPPHZ"] = this.GameType_XPPHZ;
	this.GametTypeNameDict["PXPHZ"] = this.GameType_PXPHZ;
	this.GametTypeNameDict["RCWSK3"] = this.GameType_RCWSK3;
	this.GametTypeNameDict["RCMJ"] = this.GameType_RCMJ;
	this.GametTypeNameDict["JDZMJ"] = this.GameType_JDZMJ;
	this.GametTypeNameDict["BZMJ"] = this.GameType_BZMJ;
	this.GametTypeNameDict["BZTDH"] = this.GameType_BZTDH;
	this.GametTypeNameDict["GYZJMJ"] = this.GameType_GYZJMJ;
	this.GametTypeNameDict["DTLGFMJ"] = this.GameType_DTLGFMJ;
	this.GametTypeNameDict["SHQMMJ"] = this.GameType_SHQMMJ;
	this.GametTypeNameDict["JSTDHMJ"] = this.GameType_JSTDHMJ;
	this.GametTypeNameDict["ZGMJ"] = this.GameType_ZGMJ;
	this.GametTypeNameDict["NBMJ"] = this.GameType_NBMJ;
	this.GametTypeNameDict["SWMJ"] = this.GameType_SWMJ;
	this.GametTypeNameDict["GDJYMJ"] = this.GameType_GDJYMJ;
	this.GametTypeNameDict["SQMJ"] = this.GameType_SQMJ;
	this.GametTypeNameDict["JYMJ"] = this.GameType_JYMJ;
	this.GametTypeNameDict["HTMJ"] = this.GameType_HTMJ;
	this.GametTypeNameDict["THGJMJ"] = this.GameType_THGJMJ;
	this.GametTypeNameDict["HNPDSMJ"] = this.GameType_HNPDSMJ;
	this.GametTypeNameDict["JDZPDK"] = this.GameType_JDZPDK;
	this.GametTypeNameDict["PZMJ"] = this.GameType_PZMJ;
	this.GametTypeNameDict["HNJYMJ"] = this.GameType_HNJYMJ;
	this.GametTypeNameDict["JSYCMJ"] = this.GameType_JSYCMJ;
	this.GametTypeNameDict["JSSQMJ"] = this.GameType_JSSQMJ;
	this.GametTypeNameDict["JSHAMJ"] = this.GameType_JSHAMJ;
	this.GametTypeNameDict["WXMJ"] = this.GameType_WXMJ;
	this.GametTypeNameDict["HHPDK"] = this.GameType_HHPDK;
	this.GametTypeNameDict["GYMJ"] = this.GameType_GYMJ;
	this.GametTypeNameDict["PYMJ"] = this.GameType_PYMJ;
	this.GametTypeNameDict["KFMJ"] = this.GameType_KFMJ;
	this.GametTypeNameDict["LYGMJ"] = this.GameType_LYGMJ;
	this.GametTypeNameDict["JSCZMJ"] = this.GameType_JSCZMJ;
	this.GametTypeNameDict["HNJZMJ"] = this.GameType_HNJZMJ;
	this.GametTypeNameDict["AHMJ"] = this.GameType_AHMJ;
	this.GametTypeNameDict["XZMJ"] = this.GameType_XZMJ;
	this.GametTypeNameDict["JSGYMJ"] = this.GameType_JSGYMJ;
	this.GametTypeNameDict["AHPHZ"] = this.GameType_AHPHZ;
	this.GametTypeNameDict["XXMJ"] = this.GameType_XXMJ;
	this.GametTypeNameDict["HNAYMJ"] = this.GameType_HNAYMJ;
	this.GametTypeNameDict["NCMJ"] = this.GameType_NCMJ;
	this.GametTypeNameDict["ZKMJ"] = this.GameType_ZKMJ;
	this.GametTypeNameDict["JXXYMJ"] = this.GameType_JXXYMJ;
	this.GametTypeNameDict["GAMJ"] = this.GameType_GAMJ;
	this.GametTypeNameDict["TGMJ"] = this.GameType_TGMJ;
	this.GametTypeNameDict["HNHBMJ"] = this.GameType_HNHBMJ;
	this.GametTypeNameDict["LHMJ"] = this.GameType_LHMJ;
	this.GametTypeNameDict["JJMJ"] = this.GameType_JJMJ;
	this.GametTypeNameDict["RCWSK6"] = this.GameType_RCWSK6;
	this.GametTypeNameDict["LJWSK4"] = this.GameType_LJWSK4;
	this.GametTypeNameDict["FYMJ"] = this.GameType_FYMJ;
	this.GametTypeNameDict["BZQZMJ"] = this.GameType_BZQZMJ;
	this.GametTypeNameDict["FYDDZMJ"] = this.GameType_FYDDZMJ;
	this.GametTypeNameDict["HSTDHMJ"] = this.GameType_HSTDHMJ;
	this.GametTypeNameDict["CCMJ"] = this.GameType_CCMJ;
	this.GametTypeNameDict["PCMJ"] = this.GameType_PCMJ;
	this.GametTypeNameDict["JLMJ"] = this.GameType_JLMJ;
	this.GametTypeNameDict["ZJHZMJ"] = this.GameType_ZJHZMJ;
	this.GametTypeNameDict["XJXZMJ"] = this.GameType_XJXZMJ;
	this.GametTypeNameDict["YSMJ"] = this.GameType_YSMJ;
	this.GametTypeNameDict["ZZPH"] = this.GameType_ZZPH;
	this.GametTypeNameDict["NJMJ"] = this.GameType_NJMJ;
	this.GametTypeNameDict["JAMJ"] = this.GameType_JAMJ;
	this.GametTypeNameDict["XJLSHMJ"] = this.GameType_XJLSHMJ;
	this.GametTypeNameDict["YZYZMJ"] = this.GameType_YZYZMJ;
	this.GametTypeNameDict["ZGCP"] = this.GameType_ZGCP;
	this.GametTypeNameDict["ZGDSS"] = this.GameType_ZGDSS;
	this.GametTypeNameDict["GDMJ"] = this.GameType_GDMJ;
	this.GametTypeNameDict["LXMJ"] = this.GameType_LXMJ;
	this.GametTypeNameDict["CXMJ"] = this.GameType_CXMJ;
	this.GametTypeNameDict["LS13579"] = this.GameType_LS13579;
	this.GametTypeNameDict["LSKJJMJ"] = this.GameType_LSKJJMJ;
	this.GametTypeNameDict["LSLWZMJ"] = this.GameType_LSLWZMJ;
	this.GametTypeNameDict["JCMJ"] = this.GameType_JCMJ;
	this.GametTypeNameDict["SDH"] = this.GameType_SDH;
	this.GametTypeNameDict["GLSDH"] = this.GameType_GLSDH;
	this.GametTypeNameDict["FXMJ"] = this.GameType_FXMJ;
	this.GametTypeNameDict["GSJMJ"] = this.GameType_GSJMJ;
	this.GametTypeNameDict["HBTDHMJ"] = this.GameType_HBTDHMJ;
	this.GametTypeNameDict["HBHBMJ"] = this.GameType_HBHBMJ;
	this.GametTypeNameDict["NXKWMJ"] = this.GameType_NXKWMJ;
	this.GametTypeNameDict["NJLHMJ"] = this.GameType_NJLHMJ;
	this.GametTypeNameDict["YZGYMJ"] = this.GameType_YZGYMJ;
	this.GametTypeNameDict["SQSYMJ"] = this.GameType_SQSYMJ;
	this.GametTypeNameDict["AQMJ"] = this.GameType_AQMJ;
	this.GametTypeNameDict["JDMJ"] = this.GameType_JDMJ;
	this.GametTypeNameDict["ZJWZMJ"] = this.GameType_ZJWZMJ;
	this.GametTypeNameDict["SZMJ"] = this.GameType_SZMJ;
	this.GametTypeNameDict["ZJSHZMJ"] = this.GameType_ZJSHZMJ;
	this.GametTypeNameDict["XGPDK"] = this.GameType_XGPDK;
	this.GametTypeNameDict["SRDDZ"] = this.GameType_SRDDZ;
	this.GametTypeNameDict["WHMJ"] = this.GameType_WHMJ;
	this.GametTypeNameDict["YGJZMJ"] = this.GameType_YGJZMJ;
	this.GametTypeNameDict["TMHHMJ"] = this.GameType_TMHHMJ;
	this.GametTypeNameDict["JXMJ"] = this.GameType_JXMJ;
	this.GametTypeNameDict["LCMJ"] = this.GameType_LCMJ;
	this.GametTypeNameDict["QZCSMJ"] = this.GameType_QZCSMJ;
	this.GametTypeNameDict["JCHHMJ"] = this.GameType_JCHHMJ;
	this.GametTypeNameDict["LSMJ"] = this.GameType_LSMJ;
	this.GametTypeNameDict["YSZMJ"] = this.GameType_YSZMJ;
	this.GametTypeNameDict["YXBZMJ"] = this.GameType_YXBZMJ;
	this.GametTypeNameDict["YCTJMJ"] = this.GameType_YCTJMJ;
	this.GametTypeNameDict["QZKHMJ"] = this.GameType_QZKHMJ;
	this.GametTypeNameDict["CQHSZMJ"] = this.GameType_CQHSZMJ;
	this.GametTypeNameDict["HBWHMJ"] = this.GameType_HBWHMJ;
	this.GametTypeNameDict["JSNYZMJ"] = this.GameType_JSNYZMJ;
	this.GametTypeNameDict["ZZNSB"] = this.GameType_ZZNSB;
	this.GametTypeNameDict["AK159MJ"] = this.GameType_AK159MJ;
	this.GametTypeNameDict["YLDGZMJ"] = this.GameType_YLDGZMJ;
	this.GametTypeNameDict["DLQHMJ"] = this.GameType_DLQHMJ;
	this.GametTypeNameDict["YGPDK"] = this.GameType_YGPDK;
	this.GametTypeNameDict["LLFYMJ"] = this.GameType_LLFYMJ;
	this.GametTypeNameDict["LPSMJ"] = this.GameType_LPSMJ;
	this.GametTypeNameDict["SXHTMJ"] = this.GameType_SXHTMJ;
	this.GametTypeNameDict["SXLSMJ"] = this.GameType_SXLSMJ;
	this.GametTypeNameDict["DZMJ"] = this.GameType_DZMJ;
	this.GametTypeNameDict["DKGMJ"] = this.GameType_DKGMJ;
	this.GametTypeNameDict["GZMJ"] = this.GameType_GZMJ;
	this.GametTypeNameDict["XFGZMJ"] = this.GameType_XFGZMJ;
	this.GametTypeNameDict["JXNDMJ"] = this.GameType_JXNDMJ;
	this.GametTypeNameDict["GZTH"] = this.GameType_GZTH;
	this.GametTypeNameDict["GNMJ"] = this.GameType_GNMJ;
	this.GametTypeNameDict["HNMJ"] = this.GameType_HNMJ;
	this.GametTypeNameDict["MMMJ"] = this.GameType_MMMJ;
	this.GametTypeNameDict["RJMJ"] = this.GameType_RJMJ;
	this.GametTypeNameDict["BP"] = this.GameType_BP;
	this.GametTypeNameDict["DNMJ"] = this.GameType_DNMJ;
	this.GametTypeNameDict["FCMJ"] = this.GameType_FCMJ;
	this.GametTypeNameDict["LNMJ"] = this.GameType_LNMJ;
	this.GametTypeNameDict["HFMJ"] = this.GameType_HFMJ;
	this.GametTypeNameDict["MASMJ"] = this.GameType_MASMJ;
	this.GametTypeNameDict["YJMJ"] = this.GameType_YJMJ;
	this.GametTypeNameDict["XHZMJ"] = this.GameType_XHZMJ;
	this.GametTypeNameDict["QYMJ"] = this.GameType_QYMJ;
	this.GametTypeNameDict["XL2VS2MJ"] = this.GameType_XL2VS2MJ;
	this.GametTypeNameDict["XJMJ"] = this.GameType_XJMJ;
	this.GametTypeNameDict["FZJXMJ"] = this.GameType_FZJXMJ;
	this.GametTypeNameDict["JMGGHMJ"] = this.GameType_JMGGHMJ;
	this.GametTypeNameDict["SCMJ"] = this.GameType_SCMJ;
	this.GametTypeNameDict["YTYJMJ"] = this.GameType_YTYJMJ;
	this.GametTypeNameDict["YDDGMJ"] = this.GameType_YDDGMJ;
	this.GametTypeNameDict["NKBHMJ"] = this.GameType_NKBHMJ;
	this.GametTypeNameDict["JMSKMJ"] = this.GameType_JMSKMJ;
	this.GametTypeNameDict["LKMJ"] = this.GameType_LKMJ;
	this.GametTypeNameDict["BZPDK"] = this.GameType_BZPDK;
	this.GametTypeNameDict["JZMJ"] = this.GameType_JZMJ;
	this.GametTypeNameDict["LAMJ"] = this.GameType_LAMJ;
	this.GametTypeNameDict["XYXMJ"] = this.GameType_XYXMJ;
	this.GametTypeNameDict["FZGCMJ"] = this.GameType_FZGCMJ;
	this.GametTypeNameDict["XXFQMJ"] = this.GameType_XXFQMJ;
	this.GametTypeNameDict["MZMJ"] = this.GameType_MZMJ;
	this.GametTypeNameDict["AHHNMJ"] = this.GameType_AHHNMJ;
	this.GametTypeNameDict["LYGCMJ"] = this.GameType_LYGCMJ;
	this.GametTypeNameDict["DXBJMJ"] = this.GameType_DXBJMJ;
	this.GametTypeNameDict["GCBGMJ"] = this.GameType_GCBGMJ;
	this.GametTypeNameDict["TXMJ"] = this.GameType_TXMJ;
	this.GametTypeNameDict["LKWSK"] = this.GameType_LKWSK;
	this.GametTypeNameDict["ZKLYMJ"] = this.GameType_ZKLYMJ;
	this.GametTypeNameDict["XYSCMJ"] = this.GameType_XYSCMJ;
	this.GametTypeNameDict["GSMJ"] = this.GameType_GSMJ;
	this.GametTypeNameDict["SXMMJ"] = this.GameType_SXMMJ;
	this.GametTypeNameDict["GXMJ"] = this.GameType_GXMJ;
	this.GametTypeNameDict["PDSYXMJ"] = this.GameType_PDSYXMJ;
	this.GametTypeNameDict["ZMDMJ"] = this.GameType_ZMDMJ;
	this.GametTypeNameDict["ZXMJ"] = this.GameType_ZXMJ;
	this.GametTypeNameDict["NZMJ"] = this.GameType_NZMJ;
	this.GametTypeNameDict["XYGSMJ"] = this.GameType_XYGSMJ;
	this.GametTypeNameDict["WGFHMJ"] = this.GameType_WGFHMJ;
	this.GametTypeNameDict["DZSJZMJ"] = this.GameType_DZSJZMJ;
	this.GametTypeNameDict["GSPDK"] = this.GameType_GSPDK;
	this.GametTypeNameDict["SSPMJ"] = this.GameType_SSPMJ;
	this.GametTypeNameDict["A3PK"] = this.GameType_A3PK;
	this.GametTypeNameDict["GLZP"] = this.GameType_GLZP;
	this.GametTypeNameDict["YXSRDDZ"] = this.GameType_YXSRDDZ;
	this.GametTypeNameDict["NZDL"] = this.GameType_NZDL;
	this.GametTypeNameDict["NZWSK"] = this.GameType_NZWSK;
	this.GametTypeNameDict["HNDZP"] = this.GameType_HNDZP;
	this.GametTypeNameDict["YXDDZ"] = this.GameType_YXDDZ;
	this.GametTypeNameDict["GXCDD"] = this.GameType_GXCDD;
	this.GametTypeNameDict["XYXXMJ"] = this.GameType_XYXXMJ;
	this.GametTypeNameDict["XYXXPDK"] = this.GameType_XYXXPDK;
	this.GametTypeNameDict["DEMOMJ"] = this.GameType_DEMOMJ;
	this.GametTypeNameDict["XXTDHMJ"] = this.GameType_XXTDHMJ;
	this.GametTypeNameDict["NYTHMJ"] = this.GameType_NYTHMJ;
	this.GametTypeNameDict["FCTDHMJ"] = this.GameType_FCTDHMJ;
	this.GametTypeNameDict["GLPP"] = this.GameType_GLPP;
	this.GametTypeNameDict["HZJDMJ"] = this.GameType_HZJDMJ;
	this.GametTypeNameDict["GLWSK"] = this.GameType_GLWSK;
	this.GametTypeNameDict["XYHCMJ"] = this.GameType_XYHCMJ;
	this.GametTypeNameDict["YHMJ"] = this.GameType_YHMJ;
	this.GametTypeNameDict["GLQZMJ"] = this.GameType_GLQZMJ;
	this.GametTypeNameDict["YYMJ"] = this.GameType_YYMJ;
	this.GametTypeNameDict["YZCHZ"] = this.GameType_YZCHZ;
	this.GametTypeNameDict["QJFXJMJ"] = this.GameType_QJFXJMJ;
	this.GametTypeNameDict["TJMJ"] = this.GameType_TJMJ;
	this.GametTypeNameDict["YJNXMJ"] = this.GameType_YJNXMJ;
	this.GametTypeNameDict["GFT258MJ"] = this.GameType_GFT258MJ;
	this.GametTypeNameDict["HNSYMJ"] = this.GameType_HNSYMJ;
	this.GametTypeNameDict["GSDDZ"] = this.GameType_GSDDZ;
	this.GametTypeNameDict["XTLHMJ"] = this.GameType_XTLHMJ;
	this.GametTypeNameDict["XSMJ"] = this.GameType_XSMJ;
	this.GametTypeNameDict["GSLZMJ"] = this.GameType_GSLZMJ;
	this.GametTypeNameDict["LFPHMJ"] = this.GameType_LFPHMJ;
	this.GametTypeNameDict["HYLYMJ"] = this.GameType_HYLYMJ;
	this.GametTypeNameDict["HNYJMJ"] = this.GameType_HNYJMJ;
	this.GametTypeNameDict["TJTJMJ"] = this.GameType_TJTJMJ;
	this.GametTypeNameDict["NMGYZMJ"] = this.GameType_NMGYZMJ;
	this.GametTypeNameDict["RXEW"] = this.GameType_RXEW;
	this.GametTypeNameDict["BAMJ"] = this.GameType_BAMJ;
	this.GametTypeNameDict["SGEW"] = this.GameType_SGEW;
	this.GametTypeNameDict["AHHBMJ"] = this.GameType_AHHBMJ;
	this.GametTypeNameDict["SFPHMJ"] = this.GameType_SFPHMJ;
	this.GametTypeNameDict["JCAHMJ"] = this.GameType_JCAHMJ;
	this.GametTypeNameDict["XNMJ"] = this.GameType_XNMJ;
	this.GametTypeNameDict["HYHSMJ"] = this.GameType_HYHSMJ;
	this.GametTypeNameDict["JSMJ"] = this.GameType_JSMJ;
	this.GametTypeNameDict["SDJNMJ"] = this.GameType_SDJNMJ;
	this.GametTypeNameDict["ZCMJ"] = this.GameType_ZCMJ;
	this.GametTypeNameDict["GZ"] = this.GameType_GZ;
	this.GametTypeNameDict["NYXXMJ"] = this.GameType_NYXXMJ;
	this.GametTypeNameDict["TBHMJ"] = this.GameType_TBHMJ;
	this.GametTypeNameDict["PDSLSMJ"] = this.GameType_PDSLSMJ;
	this.GametTypeNameDict["NXMJ"] = this.GameType_NXMJ;
	this.GametTypeNameDict["RZMJ"] = this.GameType_RZMJ;
	this.GametTypeNameDict["CZDZMJ"] = this.GameType_CZDZMJ;
	this.GametTypeNameDict["ZD"] = this.GameType_ZD;
	this.GametTypeNameDict["JAWZ"] = this.GameType_JAWZ;
	this.GametTypeNameDict["THBBZ"] = this.GameType_THBBZ;
	this.GametTypeNameDict["ZGQZMJ"] = this.GameType_ZGQZMJ;
	this.GametTypeNameDict["SD"] = this.GameType_SD;
	this.GametTypeNameDict["CQCP"] = this.GameType_CQCP;
	this.GametTypeNameDict["SDB"] = this.GameType_SDB;
	this.GametTypeNameDict["SQYCMJ"] = this.GameType_SQYCMJ;
	this.GametTypeNameDict["MYMJ"] = this.GameType_MYMJ;
	this.GametTypeNameDict["PDSJXMJ"] = this.GameType_PDSJXMJ;
	this.GametTypeNameDict["AFMJ"] = this.GameType_AFMJ;
	this.GametTypeNameDict["STSTMJ"] = this.GameType_STSTMJ;
	this.GametTypeNameDict["YFCGMJ"] = this.GameType_YFCGMJ;
	this.GametTypeNameDict["STMJ"] = this.GameType_STMJ;
	this.GametTypeNameDict["QCDG"] = this.GameType_QCDG;
	this.GametTypeNameDict["QYPHMJ"] = this.GameType_QYPHMJ;
	this.GametTypeNameDict["BFMJ"] = this.GameType_BFMJ;
	this.GametTypeNameDict["HFBZMJ"] = this.GameType_HFBZMJ;
	this.GametTypeNameDict["CYLYMJ"] = this.GameType_CYLYMJ;
	this.GametTypeNameDict["DTMJ"] = this.GameType_DTMJ;
	this.GametTypeNameDict["CZCZMJ"] = this.GameType_CZCZMJ;
	this.GametTypeNameDict["TSDG"] = this.GameType_TSDG;
	this.GametTypeNameDict["HCPDK"] = this.GameType_HCPDK;
	this.GametTypeNameDict["PHMJ"] = this.GameType_PHMJ;
	this.GametTypeNameDict["XSY"] = this.GameType_XSY;
	this.GametTypeNameDict["WZQSMJ"] = this.GameType_WZQSMJ;
	this.GametTypeNameDict["JZWZMJ"] = this.GameType_JZWZMJ;
	this.GametTypeNameDict["GJMJ"] = this.GameType_GJMJ;
	this.GametTypeNameDict["GDCZMJ"] = this.GameType_GDCZMJ;
	this.GametTypeNameDict["JXNDPDK"] = this.GameType_JXNDPDK;
	this.GametTypeNameDict["ASMJ"] = this.GameType_ASMJ;
	this.GametTypeNameDict["HW"] = this.GameType_HW;
	this.GametTypeNameDict["QBSK"] = this.GameType_QBSK;
	this.GametTypeNameDict["THJGL"] = this.GameType_THJGL;
	this.GametTypeNameDict["CTPK"] = this.GameType_CTPK;
	this.GametTypeNameDict["SCPK"] = this.GameType_SCPK;
	this.GametTypeNameDict["WXZMMJ"] = this.GameType_WXZMMJ;
	this.GametTypeNameDict["FCZHA"] = this.GameType_FCZHA;
	this.GametTypeNameDict["LNSYMJ"] = this.GameType_LNSYMJ;

	this.GametTypeNameDict["BXMD"] = this.GameType_BXMD;
	this.GametTypeNameDict["JAPDK"] = this.GameType_JAPDK;
	this.GametTypeNameDict["ST"] = this.GameType_ST;
	this.GametTypeNameDict["YCSDR"] = this.GameType_YCSDR;
	this.GametTypeNameDict["BSL"] = this.GameType_BSL;
	this.GametTypeNameDict["HLDMJ"] = this.GameType_HLDMJ;
	this.GametTypeNameDict["BSMJ"] = this.GameType_BSMJ;
	this.GametTypeNameDict["TCPFMJ"] = this.GameType_TCPFMJ;
	this.GametTypeNameDict["WK"] = this.GameType_WK;
	this.GametTypeNameDict["WXLS"] = this.GameType_WXLS;
	this.GametTypeNameDict["QJFBBMJ"] = this.GameType_QJFBBMJ;
	this.GametTypeNameDict["CP"] = this.GameType_CP;
	this.GametTypeNameDict["ZLMZ"] = this.GameType_ZLMZ;
	this.GametTypeNameDict["TWGZ"] = this.GameType_TWGZ;
	this.GametTypeNameDict["XYWSK"] = this.GameType_XYWSK;
	this.GametTypeNameDict["SZD"] = this.GameType_SZD;
	this.GametTypeNameDict["FCSJ"] = this.GameType_FCSJ;
	this.GametTypeNameDict["CXYXMJ"] = this.GameType_CXYXMJ;

	this.GametTypeNameDict["YCSGMJ"] = this.GameType_YCSGMJ;
	this.GametTypeNameDict["JMJSMJ"] = this.GameType_JMJSMJ;
	this.GametTypeNameDict["DSMJ"] = this.GameType_DSMJ;
	this.GametTypeNameDict["JXYZ"] = this.GameType_JXYZ;
	this.GametTypeNameDict["YCFXMJ"] = this.GameType_YCFXMJ;
	this.GametTypeNameDict["SCNJMJ"] = this.GameType_SCNJMJ;
	this.GametTypeNameDict["NBCXMJ"] = this.GameType_NBCXMJ;
	this.GametTypeNameDict["PY"] = this.GameType_PY;
	this.GametTypeNameDict["THKB"] = this.GameType_THKB;
	this.GametTypeNameDict["PTMJ"] = this.GameType_PTMJ;
	this.GametTypeNameDict["KLMJ"] = this.GameType_KLMJ;
	this.GametTypeNameDict["QWWES"] = this.GameType_QWWES;
	this.GametTypeNameDict["YFMJ"] = this.GameType_YFMJ;
	this.GametTypeNameDict["GAWSK"] = this.GameType_GAWSK;
	this.GametTypeNameDict["GADDZ"] = this.GameType_GADDZ;
	this.GametTypeNameDict["JAYXDDZ"] = this.GameType_JAYXDDZ;
	this.GametTypeNameDict["GAST"] = this.GameType_GAST;
	this.GametTypeNameDict["FCGP"] = this.GameType_FCGP;
	this.GametTypeNameDict["SGLK"] = this.GameType_SGLK;
	this.GametTypeNameDict["HEBMJ"] = this.GameType_HEBMJ;
	this.GametTypeNameDict["PYSFT"] = this.GameType_PYSFT;
	this.GametTypeNameDict["SXZJMJ"] = this.GameType_SXZJMJ;
	this.GametTypeNameDict["SCGAMJ"] = this.GameType_SCGAMJ;
	this.GametTypeNameDict["THGZ"] = this.GameType_THGZ;
	this.GametTypeNameDict["SXMJ"] = this.GameType_SXMJ;
	this.GametTypeNameDict["JXHS"] = this.GameType_JXHS;
	this.GametTypeNameDict["LWMJ"] = this.GameType_LWMJ;
	this.GametTypeNameDict["WABJMJ"] = this.GameType_WABJMJ;

	this.GametTypeNameDict["XJBJMJ"] = this.GameType_XJBJMJ;
	this.GametTypeNameDict["YCHP"] = this.GameType_YCHP;
	this.GametTypeNameDict["SSE"] = this.GameType_SSE;
	this.GametTypeNameDict["SDZZMJ"] = this.GameType_SDZZMJ;
	this.GametTypeNameDict["BZP"] = this.GameType_BZP;
	this.GametTypeNameDict["LGMJ"] = this.GameType_LGMJ;
	this.GametTypeNameDict["LSYJMJ"] = this.GameType_LSYJMJ;
	this.GametTypeNameDict["CDP"] = this.GameType_CDP;
	this.GametTypeNameDict["DDA"] = this.GameType_DDA;
	this.GametTypeNameDict["CDXZMJ"] = this.GameType_CDXZMJ;
	this.GametTypeNameDict["LZXZMJ"] = this.GameType_LZXZMJ;
	this.GametTypeNameDict["WFBH"] = this.GameType_WFBH;
	this.GametTypeNameDict["PXMJ"] = this.GameType_PXMJ;
	this.GametTypeNameDict["SSTX"] = this.GameType_SSTX;
	this.GametTypeNameDict["SDLCMJ"] = this.GameType_SDLCMJ;
	this.GametTypeNameDict["ZJGMJ"] = this.GameType_ZJGMJ;
	this.GametTypeNameDict["ZJTZMJ"] = this.GameType_ZJTZMJ;
	this.GametTypeNameDict["SYS"] = this.GameType_SYS;
	this.GametTypeNameDict["ZGZ"] = this.GameType_ZGZ;
	this.GametTypeNameDict["CNMJ"] = this.GameType_CNMJ;
	this.GametTypeNameDict["TGWSK"] = this.GameType_TGWSK;
	this.GametTypeNameDict["DZZJ"] = this.GameType_DZZJ;
	this.GametTypeNameDict["SDHZMJ"] = this.GameType_SDHZMJ;
	this.GametTypeNameDict["XLHZMJ"] = this.GameType_XLHZMJ;
	this.GametTypeNameDict["PYDD"] = this.GameType_PYDD;
	this.GametTypeNameDict["NCAYMJ"] = this.GameType_NCAYMJ;
	this.GametTypeNameDict["KSMJ"] = this.GameType_KSMJ;
	this.GametTypeNameDict["SYSYBP"] = this.GameType_SYSYBP;
	this.GametTypeNameDict["GJ"] = this.GameType_GJ;
	this.GametTypeNameDict["TAMJ"] = this.GameType_TAMJ;
	this.GametTypeNameDict["GAPDK"] = this.GameType_GAPDK;
	this.GametTypeNameDict["DPHMJ"] = this.GameType_DPHMJ;
	this.GametTypeNameDict["QDJT"] = this.GameType_QDJT;
	this.GametTypeNameDict["LSXZMJ"] = this.GameType_LSXZMJ;
	this.GametTypeNameDict["JAYXMJ"] = this.GameType_JAYXMJ;
	this.GametTypeNameDict["XSDQ"] = this.GameType_XSDQ;
	this.GametTypeNameDict["LHGMMJ"] = this.GameType_LHGMMJ;
	this.GametTypeNameDict["HCNG"] = this.GameType_HCNG;
	this.GametTypeNameDict["JTMJ"] = this.GameType_JTMJ;
	this.GametTypeNameDict["YBGXMJ"] = this.GameType_YBGXMJ;
	this.GametTypeNameDict["JTPDK"] = this.GameType_JTPDK;
	this.GametTypeNameDict["XWMJ"] = this.GameType_XWMJ;
	this.GametTypeNameDict["TZPDK"] = this.GameType_TZPDK;
	this.GametTypeNameDict["WJMJ"] = this.GameType_WJMJ;
	this.GametTypeNameDict["QDBH"] = this.GameType_QDBH;
	this.GametTypeNameDict["TJTGMJ"] = this.GameType_TJTGMJ;
	this.GametTypeNameDict["HAXYMJ"] = this.GameType_HAXYMJ;
	this.GametTypeNameDict["ZYMJ"] = this.GameType_ZYMJ;
	this.GametTypeNameDict["NTCP"] = this.GameType_NTCP;
	this.GametTypeNameDict["LNJZMJ"] = this.GameType_LNJZMJ;
	this.GametTypeNameDict["JSSNMJ"] = this.GameType_JSSNMJ;
	this.GametTypeNameDict["JYESSZ"] = this.GameType_JYESSZ;
	this.GametTypeNameDict["XCMJ"] = this.GameType_XCMJ;
	this.GametTypeNameDict["HZBDMJ"] = this.GameType_HZBDMJ;
	this.GametTypeNameDict["BDJHMJ"] = this.GameType_BDJHMJ;
	this.GametTypeNameDict["XCPDK"] = this.GameType_XCPDK;
	this.GametTypeNameDict["HSHHMJ"] = this.GameType_HSHHMJ;
	this.GametTypeNameDict["MSMJ"] = this.GameType_MSMJ;
	this.GametTypeNameDict["DYKKFMJ"] = this.GameType_DYKKFMJ;
	this.GametTypeNameDict["TZJJMJ"] = this.GameType_TZJJMJ;
	this.GametTypeNameDict["NFSD"] = this.GameType_NFSD;
	this.GametTypeNameDict["GCMJ"] = this.GameType_GCMJ;
	this.GametTypeNameDict["SCBZMJ"] = this.GameType_SCBZMJ;
	this.GametTypeNameDict["DYZP"] = this.GameType_DYZP;
	this.GametTypeNameDict["LYHMJ"] = this.GameType_LYHMJ;
	this.GametTypeNameDict["XGCGMJ"] = this.GameType_XGCGMJ;
	this.GametTypeNameDict["SCDYMJ"] = this.GameType_SCDYMJ;
	this.GametTypeNameDict["TLMJ"] = this.GameType_TLMJ;
	this.GametTypeNameDict["ZZDMZ"] = this.GameType_ZZDMZ;
	this.GametTypeNameDict["LCBJMJ"] = this.GameType_LCBJMJ;
	this.GametTypeNameDict["QJHHMJ"] = this.GameType_QJHHMJ;
	this.GametTypeNameDict["FDPK"] = this.GameType_FDPK;
	this.GametTypeNameDict["YFBS"] = this.GameType_YFBS;
	this.GametTypeNameDict["YAXZMJ"] = this.GameType_YAXZMJ;
	this.GametTypeNameDict["SCGXMJ"] = this.GameType_SCGXMJ;
	this.GametTypeNameDict["HSPDK"] = this.GameType_HSPDK;
	this.GametTypeNameDict["SCGXMJ"] = this.GameType_SCGXMJ;
	this.GametTypeNameDict["EQW"] = this.GameType_EQW;
	this.GametTypeNameDict["ESMJ"] = this.GameType_ESMJ;
	this.GametTypeNameDict["YKMJ"] = this.GameType_YKMJ;
	this.GametTypeNameDict["QJHZMJ"] = this.GameType_QJHZMJ;
	this.GametTypeNameDict["HBCXMJ"] = this.GameType_HBCXMJ;
	this.GametTypeNameDict["WDMJ"] = this.GameType_WDMJ;
	this.GametTypeNameDict["MSXLMJ"] = this.GameType_MSXLMJ;
	this.GametTypeNameDict["WSBEA"] = this.GameType_WSBEA;
	this.GametTypeNameDict["QJPDK"] = this.GameType_QJPDK;
	this.GametTypeNameDict["LNASMJ"] = this.GameType_LNASMJ;
	this.GametTypeNameDict["HZZMJ"] = this.GameType_HZZMJ;
	this.GametTypeNameDict["SFP"] = this.GameType_SFP;
	this.GametTypeNameDict["WXTDHMJ"] = this.GameType_WXTDHMJ;
	this.GametTypeNameDict["HJMJ"] = this.GameType_HJMJ;
	this.GametTypeNameDict["SJCCMJ"] = this.GameType_SJCCMJ;
	this.GametTypeNameDict["SCNCMJ"] = this.GameType_SCNCMJ;
	this.GametTypeNameDict["JSJYMJ"] = this.GameType_JSJYMJ;
	this.GametTypeNameDict["XZDDMJ"] = this.GameType_XZDDMJ;
	this.GametTypeNameDict["RGJAMJ"] = this.GameType_RGJAMJ;
	this.GametTypeNameDict["LCZP"] = this.GameType_LCZP;
	this.GametTypeNameDict["YBXZMJ"] = this.GameType_YBXZMJ;
	this.GametTypeNameDict["HBHSMJ"] = this.GameType_HBHSMJ;
	this.GametTypeNameDict["LCPDK"] = this.GameType_LCPDK;
	this.GametTypeNameDict["JMSMJ"] = this.GameType_JMSMJ;
	this.GametTypeNameDict["XLBBP"] = this.GameType_XLBBP;
	this.GametTypeNameDict["GGMJ"] = this.GameType_GGMJ;
	this.GametTypeNameDict["JSTXMJ"] = this.GameType_JSTXMJ;
	this.GametTypeNameDict["GLMJ"] = this.GameType_GLMJ;
	this.GametTypeNameDict["PZHXZMJ"] = this.GameType_PZHXZMJ;
	this.GametTypeNameDict["NXHSMJ"] = this.GameType_NXHSMJ;
	this.GametTypeNameDict["GFMJ"] = this.GameType_GFMJ;
	this.GametTypeNameDict["WXPDK"] = this.GameType_WXPDK;
	this.GametTypeNameDict["SDDMJ"] = this.GameType_SDDMJ;
	this.GametTypeNameDict["HCMJ"] = this.GameType_HCMJ;
	this.GametTypeNameDict["JJWNMJ"] = this.GameType_JJWNMJ;
	this.GametTypeNameDict["YXMDMJ"] = this.GameType_YXMDMJ;
	this.GametTypeNameDict["DYXLMJ"] = this.GameType_DYXLMJ;
	this.GametTypeNameDict["XJTMJ"] = this.GameType_XJTMJ;
	this.GametTypeNameDict["KJMJ"] = this.GameType_KJMJ;
	this.GametTypeNameDict["WXQWZMJ"] = this.GameType_WXQWZMJ;
	this.GametTypeNameDict["ZQMJ"] = this.GameType_ZQMJ;
	this.GametTypeNameDict["JXDD"] = this.GameType_JXDD;
	this.GametTypeNameDict["QJWSK"] = this.GameType_QJWSK;
	this.GametTypeNameDict["WWMJ"] = this.GameType_WWMJ;
	this.GametTypeNameDict["SCLSMJ"] = this.GameType_SCLSMJ;
	this.GametTypeNameDict["HGXSMJ"] = this.GameType_HGXSMJ;
	this.GametTypeNameDict["AHJXMJ"] = this.GameType_AHJXMJ;
	this.GametTypeNameDict["SNMJ"] = this.GameType_SNMJ;
	this.GametTypeNameDict["GFWSK"] = this.GameType_GFWSK;
	this.GametTypeNameDict["YJLYMJ"] = this.GameType_YJLYMJ;
	this.GametTypeNameDict["JTQWZMJ"] = this.GameType_JTQWZMJ;
	this.GametTypeNameDict["JZXSMJ"] = this.GameType_JZXSMJ;
	this.GametTypeNameDict["GYXZMJ"] = this.GameType_GYXZMJ;
	this.GametTypeNameDict["SRYYMJ"] = this.GameType_SRYYMJ;
	this.GametTypeNameDict["CXDZ"] = this.GameType_CXDZ;
	this.GametTypeNameDict["FHMK"] = this.GameType_FHMK;
	this.GametTypeNameDict["QXWQ"] = this.GameType_QXWQ;
	this.GametTypeNameDict["BHMJ"] = this.GameType_BHMJ;
	this.GametTypeNameDict["NNMJ"] = this.GameType_NNMJ;
	this.GametTypeNameDict["ZYXZMJ"] = this.GameType_ZYXZMJ;
	this.GametTypeNameDict["QSJ"] = this.GameType_QSJ;
	this.GametTypeNameDict["GDCSMJ"] = this.GameType_GDCSMJ;
	this.GametTypeNameDict["HNHZMJ"] = this.GameType_HNHZMJ;
	this.GametTypeNameDict["DQDZ"] = this.GameType_DQDZ;
	this.GametTypeNameDict["WLCBMJ"] = this.GameType_WLCBMJ;
	this.GametTypeNameDict["XSWSK"] = this.GameType_XSWSK;
	this.GametTypeNameDict["AHLXMJ"] = this.GameType_AHLXMJ;
	this.GametTypeNameDict["HXDZ"] = this.GameType_HXDZ;
	this.GametTypeNameDict["SWTDHMJ"] = this.GameType_SWTDHMJ;
	this.GametTypeNameDict["DBWSK"] = this.GameType_DBWSK;
	this.GametTypeNameDict["WHBH"] = this.GameType_WHBH;
	this.GametTypeNameDict["YLMJ"] = this.GameType_YLMJ;
	this.GametTypeNameDict["YNLCMJ"] = this.GameType_YNLCMJ;
	this.GametTypeNameDict["PEMJ"] = this.GameType_PEMJ;
	this.GametTypeNameDict["DSP"] = this.GameType_DSP;
	this.GametTypeNameDict["DZXZMJ"] = this.GameType_DZXZMJ;
	this.GametTypeNameDict["BSYZF"] = this.GameType_BSYZF;
	this.GametTypeNameDict["AHJSMJ"] = this.GameType_AHJSMJ;
	this.GametTypeNameDict["JLPK"] = this.GameType_JLPK;
	this.GametTypeNameDict["HSPK"] = this.GameType_HSPK;
	this.GametTypeNameDict["RAR"] = this.GameType_RAR;
	this.GametTypeNameDict["FKBD"] = this.GameType_FKBD;
	this.GametTypeNameDict["QWMJ"] = this.GameType_QWMJ;
	this.GametTypeNameDict["YNBSMJ"] = this.GameType_YNBSMJ;
	this.GametTypeNameDict["SWPMMJ"] = this.GameType_SWPMMJ;
	this.GametTypeNameDict["SHJSMJ"] = this.GameType_SHJSMJ;
	this.GametTypeNameDict["QHDMJ"] = this.GameType_QHDMJ;
	this.GametTypeNameDict["CBDG"] = this.GameType_CBDG;
	this.GametTypeNameDict["JXZXMJ"] = this.GameType_JXZXMJ;
	this.GametTypeNameDict["WZXZMJ"] = this.GameType_WZXZMJ;
	this.GametTypeNameDict["JXNCMJ"] = this.GameType_JXNCMJ;
	this.GametTypeNameDict["HXDZMJ"] = this.GameType_HXDZMJ;
	this.GametTypeNameDict["SRDZ"] = this.GameType_SRDZ;
	this.GametTypeNameDict["CSMSY"] = this.GameType_CSMSY;
// ###.GametTypeNameDict_Flag

	this.GametTypeID2Name = {};
	this.GametTypeID2Name[this.GameType_HZMJ] = "红中麻将";
	this.GametTypeID2Name[this.GameType_LBHZMJ] = "来宾红中麻将";
	this.GametTypeID2Name[this.GameType_SSS] = "自由扑克";
	this.GametTypeID2Name[this.GameType_LYMJ] = "龙岩麻将";
	this.GametTypeID2Name[this.GameType_XMMJ] = "厦门麻将";
	this.GametTypeID2Name[this.GameType_FZMJ] = "福州麻将";
	this.GametTypeID2Name[this.GameType_QZMJ] = "泉州麻将";
	this.GametTypeID2Name[this.GameType_NAMJ] = "南安麻将";
	this.GametTypeID2Name[this.GameType_SSMJ] = "石狮麻将";
	this.GametTypeID2Name[this.GameType_ZZMJ] = "漳州麻将";
	this.GametTypeID2Name[this.GameType_ZJH] = "欢乐比牌";
	this.GametTypeID2Name[this.GameType_PTMJ] = "莆田十六张";
	this.GametTypeID2Name[this.GameType_NDMJ] = "宁德麻将";
	this.GametTypeID2Name[this.GameType_XYMJ] = "仙游麻将";
	this.GametTypeID2Name[this.GameType_NPMJ] = "南平麻将";
	this.GametTypeID2Name[this.GameType_SMMJ] = "三明麻将";
	this.GametTypeID2Name[this.GameType_PDK] = "跑得快";
	this.GametTypeID2Name[this.GameType_PT13MJ] = "莆田十三张";
	this.GametTypeID2Name[this.GameType_SG] = "三公";
	this.GametTypeID2Name[this.GameType_YGMJ] = "余干麻将";
	this.GametTypeID2Name[this.GameType_YGLFL] = "余干六副里";
	this.GametTypeID2Name[this.GameType_NPGZMJ] = "光泽麻将";
	this.GametTypeID2Name[this.GameType_ZJJHMJ] = "金华麻将";
	this.GametTypeID2Name[this.GameType_HBYXMJ] = "阳新麻将";
	this.GametTypeID2Name[this.GameType_YSDZ] = "玉山打炸";
	this.GametTypeID2Name[this.GameType_XYZB] = "仙游炸棒";
	this.GametTypeID2Name[this.GameType_WSK] = "五十k";
	this.GametTypeID2Name[this.GameType_PXCN] = "莆仙吹牛";
	this.GametTypeID2Name[this.GameType_ZJMJ] = "镇江麻将";
	this.GametTypeID2Name[this.GameType_ZJPLS] = "镇江配罗宋";
	this.GametTypeID2Name[this.GameType_WZMJ] = "万载麻将";
	this.GametTypeID2Name[this.GameType_YCMJ] = "宜春麻将";
	this.GametTypeID2Name[this.GameType_GD] = "掼蛋";
	this.GametTypeID2Name[this.GameType_DDZ] = "斗地主";
	this.GametTypeID2Name[this.GameType_HAMJ] = "海安麻将";
	this.GametTypeID2Name[this.GameType_JMHHMJ] = "荆门晃晃";
	this.GametTypeID2Name[this.GameType_GDY] = "干瞪眼";
	this.GametTypeID2Name[this.GameType_QDMJ] = "青岛麻将";
	this.GametTypeID2Name[this.GameType_YTMJ] = "鹰潭麻将";
	this.GametTypeID2Name[this.GameType_YKMJ] = "营口麻将";
	this.GametTypeID2Name[this.GameType_NHMJ] = "宁化麻将";
	this.GametTypeID2Name[this.GameType_LPMJ] = "乐平麻将";
	this.GametTypeID2Name[this.GameType_BDMJ] = "保定麻将";
	this.GametTypeID2Name[this.GameType_YXMJ] = "宜兴麻将";
	this.GametTypeID2Name[this.GameType_TZMJ] = "滕州麻将";
	this.GametTypeID2Name[this.GameType_SGMJ] = "韶关麻将";
	this.GametTypeID2Name[this.GameType_BW] = "包王";
	this.GametTypeID2Name[this.GameType_JNMJ] = "济宁麻将";
	this.GametTypeID2Name[this.GameType_JSYZMJ] = "扬中麻将";
	this.GametTypeID2Name[this.GameType_TDHMJ] = "推倒胡";
	this.GametTypeID2Name[this.GameType_XTMJ] = "邢台麻将";
	this.GametTypeID2Name[this.GameType_ZPMJ] = "漳浦麻将";
	this.GametTypeID2Name[this.GameType_CHMJ] = "巢湖麻将";
	this.GametTypeID2Name[this.GameType_HBMJ] = "淮滨麻将";
	this.GametTypeID2Name[this.GameType_SBP] = "18扑";
	this.GametTypeID2Name[this.GameType_HSMJ] = "衡水麻将";
	this.GametTypeID2Name[this.GameType_ZYPK] = "自由扑克";
	this.GametTypeID2Name[this.GameType_BJC] = "包剪锤";
	this.GametTypeID2Name[this.GameType_BJPK] = "比鸡扑克";
	this.GametTypeID2Name[this.GameType_XLQMJ] = "西来桥麻将";
	this.GametTypeID2Name[this.GameType_FDMJ] = "福鼎麻将";
	this.GametTypeID2Name[this.GameType_FDDZ] = "福鼎打炸";
	this.GametTypeID2Name[this.GameType_YXLS] = "宜兴罗松";
	this.GametTypeID2Name[this.GameType_PXZZMJ] = "转转麻将";
	this.GametTypeID2Name[this.GameType_PX6GT] = "六滚筒";
	this.GametTypeID2Name[this.GameType_PX3GT] = "三滚筒";
	this.GametTypeID2Name[this.GameType_PX258MJ] = "258麻将";
	this.GametTypeID2Name[this.GameType_YXTDH] = "宜兴推倒胡";
	this.GametTypeID2Name[this.GameType_AYPDK] = "安岳跑得快";
	this.GametTypeID2Name[this.GameType_AYDSS] = "安岳斗十四";
	this.GametTypeID2Name[this.GameType_AYMJ] = "安岳麻将";
	this.GametTypeID2Name[this.GameType_WNMJ] = "清混麻将";
	this.GametTypeID2Name[this.GameType_WNYH] = "硬胡麻将";
	this.GametTypeID2Name[this.GameType_WNPDK] = "跑得快";

	let appName=cc.sys.localStorage.getItem('appName');
	if(appName=="baodao"){
		this.GametTypeID2Name[this.GameType_NN] = "妞妞";
		this.GametTypeID2Name[this.GameType_FQPLS] = "十三支";
	}else{
		this.GametTypeID2Name[this.GameType_NN] = "拼十";
		this.GametTypeID2Name[this.GameType_FQPLS] = "罗松";
	}
	

	this.GametTypeID2Name[this.GameType_FQSBP] = "福清十八扑";
	this.GametTypeID2Name[this.GameType_DZPK] = "公共牌";
	this.GametTypeID2Name[this.GameType_DX] = "钓蟹";
	this.GametTypeID2Name[this.GameType_HBPDK] = "淮滨跑得快";
	this.GametTypeID2Name[this.GameType_JSXYMJ] = "新沂麻将";
	this.GametTypeID2Name[this.GameType_BDYXMJ] = "易县麻将";
	this.GametTypeID2Name[this.GameType_HNXYMJ] = "信阳麻将";
	this.GametTypeID2Name[this.GameType_TCMJ] = "太仓麻将";
	this.GametTypeID2Name[this.GameType_PBYHMJ] = "鄱北硬胡";
	this.GametTypeID2Name[this.GameType_SDFJMJ] = "四底翻精";
	this.GametTypeID2Name[this.GameType_YHZMJ] = "硬胡子";
	this.GametTypeID2Name[this.GameType_DYMJ] = "丹阳麻将";
	this.GametTypeID2Name[this.GameType_SYMJ] = "射阳麻将";
	this.GametTypeID2Name[this.GameType_PNYHMJ] = "鄱南硬胡";
	this.GametTypeID2Name[this.GameType_YXPDK] = "宜兴跑得快";
	this.GametTypeID2Name[this.GameType_PYPP] = "鄱阳皮皮";
	this.GametTypeID2Name[this.GameType_PYZHW] = "鄱阳捉红5";
	this.GametTypeID2Name[this.GameType_PYPDK] = "鄱阳跑得快";
	this.GametTypeID2Name[this.GameType_DLE] = "大老二";
	this.GametTypeID2Name[this.GameType_ZJQZMJ] = "衢州麻将";
	this.GametTypeID2Name[this.GameType_JXFZMJ] = "抚州麻将";
	this.GametTypeID2Name[this.GameType_HNCSMJ] = "长沙麻将";
	this.GametTypeID2Name[this.GameType_JXFZGP] = "抚州关牌";
	this.GametTypeID2Name[this.GameType_LPPDK] = "乐平跑得快";
	this.GametTypeID2Name[this.GameType_JXFZPDK] = "抚州跑得快";
	this.GametTypeID2Name[this.GameType_WL] = "窝龙";
	this.GametTypeID2Name[this.GameType_TWMJ] = "台湾麻将";
	this.GametTypeID2Name[this.GameType_TZKZMJ] = "泰州卡子";
	this.GametTypeID2Name[this.GameType_DCZBMJ] = "都昌栽宝";
	this.GametTypeID2Name[this.GameType_DCWDMJ] = "都昌无档";
	this.GametTypeID2Name[this.GameType_HNZZMJ] = "郑州麻将";
	this.GametTypeID2Name[this.GameType_ZA13MJ] = "诏安十三张";
	this.GametTypeID2Name[this.GameType_ZA16MJ] = "诏安麻将";
	this.GametTypeID2Name[this.GameType_ZASS] = "诏安四色";
	this.GametTypeID2Name[this.GameType_XHMJ] = "兴化麻将";
	this.GametTypeID2Name[this.GameType_XHBBMJ] = "兴化白板";
	this.GametTypeID2Name[this.GameType_PXPDK] = "经典跑得快";
	this.GametTypeID2Name[this.GameType_ERDDZ] = "二人斗地主";
	this.GametTypeID2Name[this.GameType_TBZFBMJ] = "桐柏中发白";
	this.GametTypeID2Name[this.GameType_HNPDK] = "河南跑得快";
	this.GametTypeID2Name[this.GameType_NYKWXMJ] = "卡五星";
	this.GametTypeID2Name[this.GameType_LZMJ] = "柳州麻将";
	this.GametTypeID2Name[this.GameType_DHD] = "钓红点";
	this.GametTypeID2Name[this.GameType_FJYXMJ] = "云霄麻将";
	this.GametTypeID2Name[this.GameType_BYZP] = "八一字牌";
	this.GametTypeID2Name[this.GameType_HHHGW] = "怀化红拐弯";
	this.GametTypeID2Name[this.GameType_AYCP] = "安岳长牌";
	this.GametTypeID2Name[this.GameType_ZJQZSK] = "衢州双扣";
	this.GametTypeID2Name[this.GameType_CTWSK] = "长汀510K";
	this.GametTypeID2Name[this.GameType_YGWSK] = "余干510K";
	this.GametTypeID2Name[this.GameType_RCWSK] = "榕城510K";
	this.GametTypeID2Name[this.GameType_SDLYMJ] = "临沂麻将";
	this.GametTypeID2Name[this.GameType_CZMJ] = "沧州麻将";
	this.GametTypeID2Name[this.GameType_XGKWXMJ] = "孝感麻将";
	this.GametTypeID2Name[this.GameType_HNXCMJ] = "许昌麻将";
	this.GametTypeID2Name[this.GameType_YZMJ] = "江苏麻将";
	this.GametTypeID2Name[this.GameType_SJ] = "升级";
	this.GametTypeID2Name[this.GameType_DCTS] = "都昌讨赏";
	this.GametTypeID2Name[this.GameType_JDZTS] = "景德镇讨赏";
	this.GametTypeID2Name[this.GameType_DD] = "打盾";
	this.GametTypeID2Name[this.GameType_LPTS] = "乐平讨赏";
	this.GametTypeID2Name[this.GameType_SRMJ] = "上饶麻将";
	this.GametTypeID2Name[this.GameType_LBMJ] = "来宾麻将";
	this.GametTypeID2Name[this.GameType_RQMJ] = "任丘麻将";
	this.GametTypeID2Name[this.GameType_YZPDK] = "江苏跑得快";
	this.GametTypeID2Name[this.GameType_CSMJ] = "常熟麻将";
	this.GametTypeID2Name[this.GameType_LHZP] = "莲花猪牌";
	this.GametTypeID2Name[this.GameType_XPLP] = "溆浦老牌";
	this.GametTypeID2Name[this.GameType_HZWMJ] = "怀化麻将";
	this.GametTypeID2Name[this.GameType_XPPHZ] = "溆浦跑胡子";
	this.GametTypeID2Name[this.GameType_PXPHZ] = "萍乡跑胡子";
	this.GametTypeID2Name[this.GameType_RCWSK3] = "三人510K";
	this.GametTypeID2Name[this.GameType_RCMJ] = "瑞昌麻将";
	this.GametTypeID2Name[this.GameType_JDZMJ] = "景德镇麻将";
	this.GametTypeID2Name[this.GameType_BZMJ] = "老亳州麻将";
	this.GametTypeID2Name[this.GameType_BZTDH] = "亳州推倒胡";
	this.GametTypeID2Name[this.GameType_GYZJMJ] = "贵阳抓鸡麻将";
	this.GametTypeID2Name[this.GameType_DTLGFMJ] = "大同乱刮风麻将";
	this.GametTypeID2Name[this.GameType_SHQMMJ] = "上海敲麻";
	this.GametTypeID2Name[this.GameType_JSTDHMJ] = "极速推倒胡";
	this.GametTypeID2Name[this.GameType_ZGMJ] = "自贡麻将";
	this.GametTypeID2Name[this.GameType_NBMJ] = "宁波麻将";
	this.GametTypeID2Name[this.GameType_SWMJ] = "汕尾麻将";
	this.GametTypeID2Name[this.GameType_GDJYMJ] = "揭阳麻将";
	this.GametTypeID2Name[this.GameType_SQMJ] = "商丘麻将";
	this.GametTypeID2Name[this.GameType_JYMJ] = "江阴麻将";
	this.GametTypeID2Name[this.GameType_HTMJ] = "会同麻将";
	this.GametTypeID2Name[this.GameType_THGJMJ] = "泰和滚精麻将";
	this.GametTypeID2Name[this.GameType_HNPDSMJ] = "平顶山麻将";
	this.GametTypeID2Name[this.GameType_JDZPDK] = "景德镇跑得快";
	this.GametTypeID2Name[this.GameType_PZMJ] = "邳州麻将";
	this.GametTypeID2Name[this.GameType_HNJYMJ] = "济源麻将";
	this.GametTypeID2Name[this.GameType_JSYCMJ] = "盐城麻将";
	this.GametTypeID2Name[this.GameType_JSSQMJ] = "宿迁麻将";
	this.GametTypeID2Name[this.GameType_JSHAMJ] = "淮安麻将";
	this.GametTypeID2Name[this.GameType_WXMJ] = "无锡麻将";
	this.GametTypeID2Name[this.GameType_HHPDK] = "怀化跑得快";
	this.GametTypeID2Name[this.GameType_GYMJ] = "赣榆麻将";
	this.GametTypeID2Name[this.GameType_PYMJ] = "濮阳麻将";
	this.GametTypeID2Name[this.GameType_KFMJ] = "开封麻将";
	this.GametTypeID2Name[this.GameType_LYGMJ] = "连云港麻将";
	this.GametTypeID2Name[this.GameType_JSCZMJ] = "常州麻将";
	this.GametTypeID2Name[this.GameType_HNJZMJ] = "靖州麻将";
	this.GametTypeID2Name[this.GameType_AHMJ] = "安化麻将";
	this.GametTypeID2Name[this.GameType_XZMJ] = "徐州麻将";
	this.GametTypeID2Name[this.GameType_JSGYMJ] = "灌云麻将";
	this.GametTypeID2Name[this.GameType_AHPHZ] = "安化跑胡子";
	this.GametTypeID2Name[this.GameType_XXMJ] = "新乡麻将";
	this.GametTypeID2Name[this.GameType_HNAYMJ] = "安阳麻将";
	this.GametTypeID2Name[this.GameType_NCMJ] = "南昌麻将";
	this.GametTypeID2Name[this.GameType_ZKMJ] = "周口麻将";
	this.GametTypeID2Name[this.GameType_JXXYMJ] = "新余麻将";
	this.GametTypeID2Name[this.GameType_GAMJ] = "高安麻将";
	this.GametTypeID2Name[this.GameType_TGMJ] = "铜鼓麻将";
	this.GametTypeID2Name[this.GameType_HNHBMJ] = "鹤壁麻将";
	this.GametTypeID2Name[this.GameType_LHMJ] = "漯河麻将";
	this.GametTypeID2Name[this.GameType_JJMJ] = "九江麻将";
	this.GametTypeID2Name[this.GameType_RCWSK6] = "六人五十K";
	this.GametTypeID2Name[this.GameType_LJWSK4] = "四人五十K";
	this.GametTypeID2Name[this.GameType_FYMJ] = "汾阳麻将";
	this.GametTypeID2Name[this.GameType_BZQZMJ] = "亳州全嘴麻将";
	this.GametTypeID2Name[this.GameType_FYDDZMJ] = "汾阳打点子";
	this.GametTypeID2Name[this.GameType_HSTDHMJ] = "推倒胡";
	this.GametTypeID2Name[this.GameType_CCMJ] = "长春麻将";
	this.GametTypeID2Name[this.GameType_PCMJ] = "蒲城麻将";
	this.GametTypeID2Name[this.GameType_JLMJ] = "吉林麻将";
	this.GametTypeID2Name[this.GameType_ZJHZMJ] = "杭州麻将";
	this.GametTypeID2Name[this.GameType_XJXZMJ] = "新疆血战麻将";
	this.GametTypeID2Name[this.GameType_YSMJ] = "颍上麻将";
	this.GametTypeID2Name[this.GameType_ZZPH] = "株洲碰胡";
	this.GametTypeID2Name[this.GameType_NJMJ] = "南京麻将";
	this.GametTypeID2Name[this.GameType_JAMJ] = "吉安麻将";
	this.GametTypeID2Name[this.GameType_XJLSHMJ] = "新疆螺丝胡麻将";
	this.GametTypeID2Name[this.GameType_YZYZMJ] = "仪征麻将";
	this.GametTypeID2Name[this.GameType_ZGCP] = "自贡长牌";
	this.GametTypeID2Name[this.GameType_ZGDSS] = "自贡斗十四";
	this.GametTypeID2Name[this.GameType_GDMJ] = "广东麻将";
	this.GametTypeID2Name[this.GameType_LXMJ] = "临夏麻将";
	this.GametTypeID2Name[this.GameType_CXMJ] = "辰溪麻将";
	this.GametTypeID2Name[this.GameType_LS13579] = "罗山13579";
	this.GametTypeID2Name[this.GameType_LSKJJMJ] = "罗山砍金金";
	this.GametTypeID2Name[this.GameType_LSLWZMJ] = "罗山老五嘴";
	this.GametTypeID2Name[this.GameType_JCMJ] = "金昌麻将";
	this.GametTypeID2Name[this.GameType_SDH] = "三打哈";
	this.GametTypeID2Name[this.GameType_GLSDH] = "桂林三打哈";
	this.GametTypeID2Name[this.GameType_FXMJ] = "阜新麻将";
	this.GametTypeID2Name[this.GameType_GSJMJ] = "拐三角麻将";
	this.GametTypeID2Name[this.GameType_HBTDHMJ] = "河北推倒胡";
	this.GametTypeID2Name[this.GameType_HBHBMJ] = "河北麻将";
	this.GametTypeID2Name[this.GameType_NXKWMJ] = "宁乡开王麻将";
	this.GametTypeID2Name[this.GameType_NJLHMJ] = "六合麻将";
	this.GametTypeID2Name[this.GameType_YZGYMJ] = "高邮麻将";
	this.GametTypeID2Name[this.GameType_SQSYMJ] = "沭阳麻将";
	this.GametTypeID2Name[this.GameType_AQMJ] = "安庆麻将";
	this.GametTypeID2Name[this.GameType_JDMJ] = "江都麻将";
	this.GametTypeID2Name[this.GameType_ZJWZMJ] = "温州麻将";
	this.GametTypeID2Name[this.GameType_SZMJ] = "苏州麻将";
	this.GametTypeID2Name[this.GameType_ZJSHZMJ] = "湖州麻将";
	this.GametTypeID2Name[this.GameType_XGPDK] = "孝感跑得快";
	this.GametTypeID2Name[this.GameType_SRDDZ] = "四人斗地主";
	this.GametTypeID2Name[this.GameType_WHMJ] = "芜湖麻将";
	this.GametTypeID2Name[this.GameType_YGJZMJ] = "余干夹子麻将";
	this.GametTypeID2Name[this.GameType_TMHHMJ] = "天门晃晃麻将";
	this.GametTypeID2Name[this.GameType_JXMJ] = "嘉兴麻将";
	this.GametTypeID2Name[this.GameType_QZKHMJ] = "开化麻将";
	this.GametTypeID2Name[this.GameType_LCMJ] = "黎川麻将";
	this.GametTypeID2Name[this.GameType_QZCSMJ] = "常山麻将";
	this.GametTypeID2Name[this.GameType_JCHHMJ] = "荆楚晃晃麻将";
	this.GametTypeID2Name[this.GameType_LSMJ] = "涟水麻将";
	this.GametTypeID2Name[this.GameType_YSZMJ] = "硬三嘴麻将";
	this.GametTypeID2Name[this.GameType_YXBZMJ] = "应县八张麻将";
	this.GametTypeID2Name[this.GameType_YCTJMJ] = "运城贴金麻将";
	this.GametTypeID2Name[this.GameType_CQHSZMJ] = "换三张麻将";
	this.GametTypeID2Name[this.GameType_HBWHMJ] = "武汉麻将";
	this.GametTypeID2Name[this.GameType_JSNYZMJ] = "稷山扭叶子";
	this.GametTypeID2Name[this.GameType_ZZNSB] = "株洲牛十别";
	this.GametTypeID2Name[this.GameType_AK159MJ] = "安康159麻将";
	this.GametTypeID2Name[this.GameType_YLDGZMJ] = "榆林打锅子";
	this.GametTypeID2Name[this.GameType_DLQHMJ] = "大连穷胡";
	this.GametTypeID2Name[this.GameType_YGPDK] = "余干跑得快";
	this.GametTypeID2Name[this.GameType_LLFYMJ] = "亮六飞一麻将";
	this.GametTypeID2Name[this.GameType_LPSMJ] = "六盘水麻将";
	this.GametTypeID2Name[this.GameType_SXHTMJ] = "洪洞麻将";
	this.GametTypeID2Name[this.GameType_SXLSMJ] = "立四麻将";
	this.GametTypeID2Name[this.GameType_DZMJ] = "大众麻将";
	this.GametTypeID2Name[this.GameType_DKGMJ] = "断卡勾麻将";
	this.GametTypeID2Name[this.GameType_GZMJ] = "赣州冲关";
	this.GametTypeID2Name[this.GameType_XFGZMJ] = "信丰广庄麻将";
	this.GametTypeID2Name[this.GameType_JXNDMJ] = "宁都麻将";
	this.GametTypeID2Name[this.GameType_GZTH] = "赣州同花";
	this.GametTypeID2Name[this.GameType_GNMJ] = "赣南麻将";
	this.GametTypeID2Name[this.GameType_HNMJ] = "海南麻将";
	this.GametTypeID2Name[this.GameType_MMMJ] = "茂名麻将";
	this.GametTypeID2Name[this.GameType_RJMJ] = "瑞金麻将";
	this.GametTypeID2Name[this.GameType_BP] = "包牌";
	this.GametTypeID2Name[this.GameType_DNMJ] = "定南麻将";
	this.GametTypeID2Name[this.GameType_FCMJ] = "丰城麻将";
	this.GametTypeID2Name[this.GameType_LNMJ] = "龙南麻将";
	this.GametTypeID2Name[this.GameType_HFMJ] = "合肥麻将";
	this.GametTypeID2Name[this.GameType_MASMJ] = "马鞍山麻将";
	this.GametTypeID2Name[this.GameType_YJMJ] = "阳江麻将";
	this.GametTypeID2Name[this.GameType_XHZMJ] = "新红中麻将";
	this.GametTypeID2Name[this.GameType_QYMJ] = "沁阳麻将";
	this.GametTypeID2Name[this.GameType_XL2VS2MJ] = "血流2vs2麻将";
	this.GametTypeID2Name[this.GameType_XJMJ] = "新建麻将";
	this.GametTypeID2Name[this.GameType_FZJXMJ] = "金溪麻将";
	this.GametTypeID2Name[this.GameType_JMGGHMJ] = "江门杠杠胡麻将";
	this.GametTypeID2Name[this.GameType_SCMJ] = "石城麻将";
	this.GametTypeID2Name[this.GameType_YTYJMJ] = "余江麻将";
	this.GametTypeID2Name[this.GameType_YDDGMJ] = "于都德国麻将";
	this.GametTypeID2Name[this.GameType_NKBHMJ] = "南康爆胡麻将";
	this.GametTypeID2Name[this.GameType_JMSKMJ] = "荆门双开";
	this.GametTypeID2Name[this.GameType_LKMJ] = "兰考麻将";
	this.GametTypeID2Name[this.GameType_BZPDK] = "亳州跑得快";
	this.GametTypeID2Name[this.GameType_JZMJ] = "焦作麻将";
	this.GametTypeID2Name[this.GameType_LAMJ] = "乐安麻将";
	this.GametTypeID2Name[this.GameType_XYXMJ] = "新云霄麻将";
	this.GametTypeID2Name[this.GameType_FZGCMJ] = "广昌麻将";
	this.GametTypeID2Name[this.GameType_XXFQMJ] = "新乡封丘麻将";
	this.GametTypeID2Name[this.GameType_MZMJ] = "孟州麻将";
	this.GametTypeID2Name[this.GameType_AHHNMJ] = "淮南麻将";
	this.GametTypeID2Name[this.GameType_LYGCMJ] = "洛阳杠次麻将";
	this.GametTypeID2Name[this.GameType_DXBJMJ] = "东乡比精麻将";
	this.GametTypeID2Name[this.GameType_GCBGMJ] = "广昌包杠麻将";
	this.GametTypeID2Name[this.GameType_TXMJ] = "通许麻将";
	this.GametTypeID2Name[this.GameType_LKWSK] = "兰考五十K";
	this.GametTypeID2Name[this.GameType_ZKLYMJ] = "鹿邑麻将";
	this.GametTypeID2Name[this.GameType_XYSCMJ] = "商城麻将";
	this.GametTypeID2Name[this.GameType_GSMJ] = "光山麻将";
	this.GametTypeID2Name[this.GameType_SXMMJ] = "三峡门麻将";
	this.GametTypeID2Name[this.GameType_GXMJ] = "贵溪麻将";
	this.GametTypeID2Name[this.GameType_PDSYXMJ] = "叶县麻将";
	this.GametTypeID2Name[this.GameType_ZMDMJ] = "驻马店麻将";
	this.GametTypeID2Name[this.GameType_ZXMJ] = "钟祥麻将";
	this.GametTypeID2Name[this.GameType_NZMJ] = "南召麻将";
	this.GametTypeID2Name[this.GameType_XYGSMJ] = "固始麻将";
	this.GametTypeID2Name[this.GameType_WGFHMJ] = "舞钢翻混麻将";
	this.GametTypeID2Name[this.GameType_DZSJZMJ] = "邓州十九张麻将";
	this.GametTypeID2Name[this.GameType_GSPDK] = "固始跑得快";
	this.GametTypeID2Name[this.GameType_SSPMJ] = "双色牌麻将";
	this.GametTypeID2Name[this.GameType_A3PK] = "A3扑克";
	this.GametTypeID2Name[this.GameType_GLZP] = "泸州大贰";
	this.GametTypeID2Name[this.GameType_YXSRDDZ] = "叶县四人斗地主";
	this.GametTypeID2Name[this.GameType_NZDL] = "南召打搂";
	this.GametTypeID2Name[this.GameType_NZWSK] = "南召五十K";
	this.GametTypeID2Name[this.GameType_HNDZP] = "海南地主牌";
	this.GametTypeID2Name[this.GameType_YXDDZ] = "叶县三人斗地主";
	this.GametTypeID2Name[this.GameType_GXCDD] = "广西锄大地";
	this.GametTypeID2Name[this.GameType_XYXXMJ] = "新县麻将";
	this.GametTypeID2Name[this.GameType_XYXXPDK] = "新县跑得快";
	this.GametTypeID2Name[this.GameType_DEMOMJ] = "模板麻将";
	this.GametTypeID2Name[this.GameType_XXTDHMJ] = "息县推倒胡";
	this.GametTypeID2Name[this.GameType_NYTHMJ] = "唐河麻将";
	this.GametTypeID2Name[this.GameType_FCTDHMJ] = "方城推倒胡";
	this.GametTypeID2Name[this.GameType_GLPP] = "桂林跑牌";
	this.GametTypeID2Name[this.GameType_HZJDMJ] = "建德麻将";
	this.GametTypeID2Name[this.GameType_GLWSK] = "桂林510K";
	this.GametTypeID2Name[this.GameType_XYHCMJ] = "潢川麻将";
	this.GametTypeID2Name[this.GameType_YHMJ] = "宜黄麻将";

	this.GametTypeID2Name[this.GameType_GLQZMJ] = "全州麻将";
	this.GametTypeID2Name[this.GameType_YYMJ] = "益阳麻将";
	this.GametTypeID2Name[this.GameType_YZCHZ] = "永州扯胡子";
	this.GametTypeID2Name[this.GameType_QJFXJMJ] = "曲靖飞小鸡麻将";
	this.GametTypeID2Name[this.GameType_TJMJ] = "桃江麻将";
	this.GametTypeID2Name[this.GameType_YJNXMJ] = "南县麻将";
	this.GametTypeID2Name[this.GameType_GFT258MJ] = "258刮风听麻将";
	this.GametTypeID2Name[this.GameType_HNSYMJ] = "邵阳麻将";
	this.GametTypeID2Name[this.GameType_GSDDZ] = "固始斗地主";
	this.GametTypeID2Name[this.GameType_XTLHMJ] = "仙桃赖晃麻将";
	this.GametTypeID2Name[this.GameType_XSMJ] = "萧山麻将";
	this.GametTypeID2Name[this.GameType_GSLZMJ] = "兰州麻将";
	this.GametTypeID2Name[this.GameType_LFPHMJ] = "两幅牌花麻将";
	this.GametTypeID2Name[this.GameType_HYLYMJ] = "耒阳麻将";
	this.GametTypeID2Name[this.GameType_HNYJMJ] = "沅江麻将";
	this.GametTypeID2Name[this.GameType_TJTJMJ] = "天津麻将";
	this.GametTypeID2Name[this.GameType_NMGYZMJ] = "云中麻将";
	this.GametTypeID2Name[this.GameType_RXEW] = "荣县二五";
	this.GametTypeID2Name[this.GameType_BAMJ] = "博爱麻将";
	this.GametTypeID2Name[this.GameType_SGEW] = "双古二五";
	this.GametTypeID2Name[this.GameType_AHHBMJ] = "淮北麻将";
	this.GametTypeID2Name[this.GameType_SFPHMJ] = "三幅牌花麻将";
	this.GametTypeID2Name[this.GameType_JCAHMJ] = "荆楚捱晃麻将";
	this.GametTypeID2Name[this.GameType_XNMJ] = "新宁麻将";
	this.GametTypeID2Name[this.GameType_HYHSMJ] = "衡山麻将";
	this.GametTypeID2Name[this.GameType_JSMJ] = "吉水麻将";
	this.GametTypeID2Name[this.GameType_SDJNMJ] = "济南麻将";
	this.GametTypeID2Name[this.GameType_ZCMJ] = "柘城麻将";
	this.GametTypeID2Name[this.GameType_GZ] = "过炸";
	this.GametTypeID2Name[this.GameType_NYXXMJ] = "西峡麻将";
	this.GametTypeID2Name[this.GameType_TBHMJ] = "铁板胡麻将";
	this.GametTypeID2Name[this.GameType_PDSLSMJ] = "鲁山麻将";
	this.GametTypeID2Name[this.GameType_NXMJ] = "内乡麻将";
	this.GametTypeID2Name[this.GameType_RZMJ] = "汝州麻将";
	this.GametTypeID2Name[this.GameType_CZDZMJ] = "东至麻将";
	this.GametTypeID2Name[this.GameType_ZD] = "转蛋";
	this.GametTypeID2Name[this.GameType_JAWZ] = "吉安王炸";
	this.GametTypeID2Name[this.GameType_THBBZ] = "泰和飙包子";
	this.GametTypeID2Name[this.GameType_ZGQZMJ] = "自贡七张";
	this.GametTypeID2Name[this.GameType_SD] = "三代";
	this.GametTypeID2Name[this.GameType_CQCP] = "冲牌";
	this.GametTypeID2Name[this.GameType_SDB] = "十点半";
	this.GametTypeID2Name[this.GameType_SQYCMJ] = "永城麻将";
	this.GametTypeID2Name[this.GameType_MYMJ] = "绵阳麻将";
	this.GametTypeID2Name[this.GameType_PDSJXMJ] = "郏县麻将";
	this.GametTypeID2Name[this.GameType_AFMJ] = "安福麻将";
	this.GametTypeID2Name[this.GameType_STSTMJ] = "邵通麻将";
	this.GametTypeID2Name[this.GameType_YFCGMJ] = "永丰麻将";
	this.GametTypeID2Name[this.GameType_STMJ] = "石台麻将";
	this.GametTypeID2Name[this.GameType_QCDG] = "蕲春打拱";
	this.GametTypeID2Name[this.GameType_QYPHMJ] = "青阳平胡";
	this.GametTypeID2Name[this.GameType_BFMJ] = "宝丰麻将";
	this.GametTypeID2Name[this.GameType_HFBZMJ] = "八支麻将";
	this.GametTypeID2Name[this.GameType_CYLYMJ] = "凌源麻将";
	this.GametTypeID2Name[this.GameType_DTMJ] = "东台麻将";
	this.GametTypeID2Name[this.GameType_CZCZMJ] = "池州麻将";
	this.GametTypeID2Name[this.GameType_TSDG] = "通山打拱";
	this.GametTypeID2Name[this.GameType_HCPDK] = "潢川跑得快";
	this.GametTypeID2Name[this.GameType_PHMJ] = "平和麻将";
	this.GametTypeID2Name[this.GameType_XSY] = "小上游";
	this.GametTypeID2Name[this.GameType_WZQSMJ] = "万字雀神"
	this.GametTypeID2Name[this.GameType_JZWZMJ] = "武陟麻将";
	this.GametTypeID2Name[this.GameType_GJMJ] = "个旧麻将";
	this.GametTypeID2Name[this.GameType_GDCZMJ] = "潮州麻将";
	this.GametTypeID2Name[this.GameType_JXNDPDK] = "宁都跑得快";
	this.GametTypeID2Name[this.GameType_ASMJ] = "安顺麻将";
	this.GametTypeID2Name[this.GameType_HW] = "红五";
	this.GametTypeID2Name[this.GameType_QBSK] = "千变双扣";
	this.GametTypeID2Name[this.GameType_THJGL] = "唐河交公粮";
	this.GametTypeID2Name[this.GameType_CTPK] = "春天扑克";
	this.GametTypeID2Name[this.GameType_SCPK] = "四冲扑克";
	this.GametTypeID2Name[this.GameType_WXZMMJ] = "无锡抓码";
	this.GametTypeID2Name[this.GameType_FCZHA] = "方城捉黑A";
	this.GametTypeID2Name[this.GameType_LNSYMJ] = "丹东麻将";//原沈阳麻将
	this.GametTypeID2Name[this.GameType_BXMD] = "本溪马队";
	this.GametTypeID2Name[this.GameType_JAPDK] = "吉安跑得快";
	this.GametTypeID2Name[this.GameType_ST] = "四团";
	this.GametTypeID2Name[this.GameType_YCSDR] = "宜昌上大人";
	this.GametTypeID2Name[this.GameType_BSL] = "变色龙";
	this.GametTypeID2Name[this.GameType_HLDMJ] = "葫芦岛麻将";
	this.GametTypeID2Name[this.GameType_BSMJ] = "百色麻将";
	this.GametTypeID2Name[this.GameType_TCPFMJ] = "桐城麻将";
	this.GametTypeID2Name[this.GameType_WK] = "挖坑";
	this.GametTypeID2Name[this.GameType_WXLS] = "无锡罗松";
	this.GametTypeID2Name[this.GameType_QJFBBMJ] = "曲靖飞白板";
	this.GametTypeID2Name[this.GameType_CP] = "戳牌";
	this.GametTypeID2Name[this.GameType_ZLMZ] = "抓老麻子";
	this.GametTypeID2Name[this.GameType_TWGZ] = "拱猪";
	this.GametTypeID2Name[this.GameType_XYWSK] = "新余五十K";
	this.GametTypeID2Name[this.GameType_SZD] = "四支刀";
	this.GametTypeID2Name[this.GameType_FCSJ] = "丰城双剑";
	this.GametTypeID2Name[this.GameType_CXYXMJ] = "楚雄玉溪麻将";
	this.GametTypeID2Name[this.GameType_YCSGMJ] = "上高麻将";
	this.GametTypeID2Name[this.GameType_JMJSMJ] = "京山麻将";
	this.GametTypeID2Name[this.GameType_DSMJ] = "东山麻将";
	this.GametTypeID2Name[this.GameType_JXYZ] = "嘉兴原子";
	this.GametTypeID2Name[this.GameType_YCFXMJ] = "奉新麻将";
	this.GametTypeID2Name[this.GameType_SCNJMJ] = "内江麻将";
	this.GametTypeID2Name[this.GameType_NBCXMJ] = "慈溪麻将";
	this.GametTypeID2Name[this.GameType_PY] = "刨幺";
	this.GametTypeID2Name[this.GameType_THKB] = "泰和K/A包";
	this.GametTypeID2Name[this.GameType_PTMJ] = "莆田十六张";
	this.GametTypeID2Name[this.GameType_KLMJ] = "卡隆麻将";
	this.GametTypeID2Name[this.GameType_QWWES] = "七王五二三";
	this.GametTypeID2Name[this.GameType_YFMJ] = "宜丰麻将";
	this.GametTypeID2Name[this.GameType_GAWSK] = "高安五十K";
	this.GametTypeID2Name[this.GameType_GADDZ] = "高安斗地主";
	this.GametTypeID2Name[this.GameType_JAYXDDZ] = "永新打墩子";
	this.GametTypeID2Name[this.GameType_GAST] = "高安双托";
	this.GametTypeID2Name[this.GameType_FCGP] = "丰城关牌";
	this.GametTypeID2Name[this.GameType_SGLK] = "三个老k";
	this.GametTypeID2Name[this.GameType_HEBMJ] = "哈尔滨麻将";
	this.GametTypeID2Name[this.GameType_PYSFT] = "平阳四副头";
	this.GametTypeID2Name[this.GameType_SXZJMJ] = "诸暨麻将";
	this.GametTypeID2Name[this.GameType_SCGAMJ] = "广安麻将";
	this.GametTypeID2Name[this.GameType_THGZ] = "泰和过炸";
	this.GametTypeID2Name[this.GameType_SXMJ] = "绍兴麻将";
	this.GametTypeID2Name[this.GameType_JXHS] = "嘉兴红十";
	this.GametTypeID2Name[this.GameType_LWMJ] = "莱芜麻将";
	this.GametTypeID2Name[this.GameType_WABJMJ] = "万安博精";

	this.GametTypeID2Name[this.GameType_XJBJMJ] = "峡江博精";
	this.GametTypeID2Name[this.GameType_YCHP] = "宜昌花牌";
	this.GametTypeID2Name[this.GameType_SSE] = "沙沙儿";
	this.GametTypeID2Name[this.GameType_SDZZMJ] = "枣庄麻将";
	this.GametTypeID2Name[this.GameType_BZP] = "板子炮";
	this.GametTypeID2Name[this.GameType_LGMJ] = "龙港麻将";
	this.GametTypeID2Name[this.GameType_LSYJMJ] = "幺鸡麻将";
	this.GametTypeID2Name[this.GameType_CDP] = "炒地皮";
	this.GametTypeID2Name[this.GameType_DDA] = "打大A";
	this.GametTypeID2Name[this.GameType_CDXZMJ] = "成都麻将";
	this.GametTypeID2Name[this.GameType_LZXZMJ] = "泸州血战";
	this.GametTypeID2Name[this.GameType_WFBH] = "潍坊保皇";
	this.GametTypeID2Name[this.GameType_PXMJ] = "沛县麻将";
	this.GametTypeID2Name[this.GameType_SSTX] = "宿松同心";
	this.GametTypeID2Name[this.GameType_SDLCMJ] = "聊城麻将";
	this.GametTypeID2Name[this.GameType_ZJGMJ] = "张家港麻将";
	this.GametTypeID2Name[this.GameType_ZJTZMJ] = "台州麻将";
	this.GametTypeID2Name[this.GameType_SYS] = "四幺四";
	this.GametTypeID2Name[this.GameType_ZGZ] = "扎股子";
	this.GametTypeID2Name[this.GameType_CNMJ] = "长宁麻将";
	this.GametTypeID2Name[this.GameType_TGWSK] = "铜鼓五十K";
	this.GametTypeID2Name[this.GameType_DZZJ] = "打炸中奖";
	this.GametTypeID2Name[this.GameType_SDHZMJ] = "菏泽麻将";
	this.GametTypeID2Name[this.GameType_XLHZMJ] = "血流红中麻将";
	this.GametTypeID2Name[this.GameType_PYDD] = "鄱阳打丁";
	this.GametTypeID2Name[this.GameType_NCAYMJ] = "安义麻将";
	this.GametTypeID2Name[this.GameType_KSMJ] = "昆山麻将";
	this.GametTypeID2Name[this.GameType_SYSYBP] = "邵阳剥皮";
	this.GametTypeID2Name[this.GameType_GJ] = "够级";
	this.GametTypeID2Name[this.GameType_TAMJ] = "泰安麻将";
	this.GametTypeID2Name[this.GameType_GAPDK] = "高安跑得快";
	this.GametTypeID2Name[this.GameType_DPHMJ] = "点炮胡麻将";
	this.GametTypeID2Name[this.GameType_QDJT] = "丰城踢牌";
	this.GametTypeID2Name[this.GameType_LSXZMJ] = "星子麻将";
	this.GametTypeID2Name[this.GameType_JAYXMJ] = "永新麻将";
	this.GametTypeID2Name[this.GameType_HCNG] = "河池牛鬼";

	this.GametTypeID2Name[this.GameType_XSDQ] = "浠水打七";
	this.GametTypeID2Name[this.GameType_LHGMMJ] = "莲花广麻";
	this.GametTypeID2Name[this.GameType_JTMJ] = "金坛麻将";
	this.GametTypeID2Name[this.GameType_YBGXMJ] = "珙县麻将";
	this.GametTypeID2Name[this.GameType_JTPDK] = "金坛跑得快";
	this.GametTypeID2Name[this.GameType_XWMJ] = "兴文麻将";
	this.GametTypeID2Name[this.GameType_TZPDK] = "泰州跑得快";
	this.GametTypeID2Name[this.GameType_WJMJ] = "吴江麻将";
	this.GametTypeID2Name[this.GameType_QDBH] = "青岛保皇";
	this.GametTypeID2Name[this.GameType_TJTGMJ] = "塘沽麻将";
	this.GametTypeID2Name[this.GameType_HAXYMJ] = "盱眙麻将";
	this.GametTypeID2Name[this.GameType_ZYMJ] = "遵义麻将";
	this.GametTypeID2Name[this.GameType_NTCP] = "南通长牌";
	this.GametTypeID2Name[this.GameType_LNJZMJ] = "锦州麻将";
	this.GametTypeID2Name[this.GameType_JSSNMJ] = "睢宁麻将";
	this.GametTypeID2Name[this.GameType_JYESSZ] = "姜堰二十三张";
	this.GametTypeID2Name[this.GameType_XCMJ] = "宣城麻将";
	this.GametTypeID2Name[this.GameType_HZBDMJ] = "惠州百搭麻将";
	this.GametTypeID2Name[this.GameType_BDJHMJ] = "百搭鸡胡麻将";
	this.GametTypeID2Name[this.GameType_XCPDK] = "宣城跑得快";
	this.GametTypeID2Name[this.GameType_HSHHMJ] = "H晃晃";
	this.GametTypeID2Name[this.GameType_MSMJ] = "眉山血战麻将";
	this.GametTypeID2Name[this.GameType_DYKKFMJ] = "D开口番";
	this.GametTypeID2Name[this.GameType_TZJJMJ] = "椒江麻将";
	this.GametTypeID2Name[this.GameType_NFSD] = "南丰数刀";
	this.GametTypeID2Name[this.GameType_GCMJ] = "高淳麻将";
	this.GametTypeID2Name[this.GameType_SCBZMJ] = "巴中麻将";
	this.GametTypeID2Name[this.GameType_DYZP] = "D字牌";
	this.GametTypeID2Name[this.GameType_LYHMJ] = "溧阳花麻将";
	this.GametTypeID2Name[this.GameType_XGCGMJ] = "新干冲关";
	this.GametTypeID2Name[this.GameType_SCDYMJ] = "德阳血战麻将";
	this.GametTypeID2Name[this.GameType_TLMJ] = "铁岭麻将";
	this.GametTypeID2Name[this.GameType_ZZDMZ] = "株洲打码子";
	this.GametTypeID2Name[this.GameType_LCBJMJ] = "黎川博精";
	this.GametTypeID2Name[this.GameType_QJHHMJ] = "潜江晃晃";
	this.GametTypeID2Name[this.GameType_FDPK] = "翻墩扑克";
	this.GametTypeID2Name[this.GameType_YFBS] = "宜丰百杀";
	this.GametTypeID2Name[this.GameType_YAXZMJ] = "雅安血战麻将";
	this.GametTypeID2Name[this.GameType_SCGXMJ] = "高县麻将";
	this.GametTypeID2Name[this.GameType_HSPDK] = "H跑得快";
	this.GametTypeID2Name[this.GameType_SCGXMJ] = "高县麻将";
	this.GametTypeID2Name[this.GameType_EQW] = "二七王";
	this.GametTypeID2Name[this.GameType_ESMJ] = "恩施麻将";
	this.GametTypeID2Name[this.GameType_YKMJ] = "营口麻将";
	this.GametTypeID2Name[this.GameType_QJHZMJ] = "潜江红中";
	this.GametTypeID2Name[this.GameType_HBCXMJ] = "沧县麻将";
	this.GametTypeID2Name[this.GameType_WDMJ] = "瓦甸麻将";
	this.GametTypeID2Name[this.GameType_MSXLMJ] = "眉山血流麻将";
	this.GametTypeID2Name[this.GameType_WSBEA] = "王三八二A";
	this.GametTypeID2Name[this.GameType_QJPDK] = "潜江跑得快";
	this.GametTypeID2Name[this.GameType_LNASMJ] = "鞍山麻将";
	this.GametTypeID2Name[this.GameType_HZZMJ] = "惠州庄麻将";
	this.GametTypeID2Name[this.GameType_SFP] = "四副牌";
	this.GametTypeID2Name[this.GameType_WXTDHMJ] = "无锡推倒胡";
	this.GametTypeID2Name[this.GameType_HJMJ] = "合江麻将";
	this.GametTypeID2Name[this.GameType_SJCCMJ] = "四季常春麻将";
	this.GametTypeID2Name[this.GameType_SCNCMJ] = "南充麻将";
	this.GametTypeID2Name[this.GameType_JSJYMJ] = "姜堰麻将";
	this.GametTypeID2Name[this.GameType_XZDDMJ] = "血战到底";
	this.GametTypeID2Name[this.GameType_RGJAMJ] = "江安麻将";
	this.GametTypeID2Name[this.GameType_LCZP] = "老戳字牌";
	this.GametTypeID2Name[this.GameType_YBXZMJ] = "宜宾血战麻将";
	this.GametTypeID2Name[this.GameType_HBHSMJ] = "黄石麻将";
	this.GametTypeID2Name[this.GameType_LCPDK] = "黎川跑得快";
	this.GametTypeID2Name[this.GameType_JMSMJ] = "佳木斯麻将";
	this.GametTypeID2Name[this.GameType_XLBBP] = "血流八宝牌";
	this.GametTypeID2Name[this.GameType_GGMJ] = "贵港麻将";
	this.GametTypeID2Name[this.GameType_JSTXMJ] = "泰兴麻将";
	this.GametTypeID2Name[this.GameType_GLMJ] = "桂柳麻将";
	this.GametTypeID2Name[this.GameType_PZHXZMJ] = "攀枝花血战麻将";
	this.GametTypeID2Name[this.GameType_NXHSMJ] = "划水麻将";
	this.GametTypeID2Name[this.GameType_GFMJ] = "广丰麻将";
	this.GametTypeID2Name[this.GameType_WXPDK] = "无锡跑得快";
	this.GametTypeID2Name[this.GameType_SDDMJ] = "上顿渡麻将";
	this.GametTypeID2Name[this.GameType_HCMJ] = "河池麻将";
	this.GametTypeID2Name[this.GameType_JJWNMJ] = "武宁麻将";
	this.GametTypeID2Name[this.GameType_YXMDMJ] = "永修满带";
	this.GametTypeID2Name[this.GameType_DYXLMJ] = "德阳血流麻将";
	this.GametTypeID2Name[this.GameType_XJTMJ] = "新金坛麻将";
	this.GametTypeID2Name[this.GameType_KJMJ] = "客家麻将";
	this.GametTypeID2Name[this.GameType_WXQWZMJ] = "无锡全万字";
	this.GametTypeID2Name[this.GameType_ZQMJ] = "肇庆麻将";
	this.GametTypeID2Name[this.GameType_JXDD] = "金溪打盾";
	this.GametTypeID2Name[this.GameType_QJWSK] = "潜江510K";
	this.GametTypeID2Name[this.GameType_WWMJ] = "无为麻将";
	this.GametTypeID2Name[this.GameType_SCLSMJ] = "凉山麻将";
	this.GametTypeID2Name[this.GameType_HGXSMJ] = "浠水麻将";
	this.GametTypeID2Name[this.GameType_AHJXMJ] = "泾县麻将";
	this.GametTypeID2Name[this.GameType_SNMJ] = "遂宁血战麻将";
	this.GametTypeID2Name[this.GameType_GFWSK] = "广丰510K";
	this.GametTypeID2Name[this.GameType_YJLYMJ] = "一脚癞油";
	this.GametTypeID2Name[this.GameType_JTQWZMJ] = "金坛全万字";
	this.GametTypeID2Name[this.GameType_JZXSMJ] = "象山麻将";
	this.GametTypeID2Name[this.GameType_GYXZMJ] = "广元血战麻将";
	this.GametTypeID2Name[this.GameType_SRYYMJ] = "弋阳麻将";
	this.GametTypeID2Name[this.GameType_CXDZ] = "慈溪地主";
	this.GametTypeID2Name[this.GameType_FHMK] = "奉化明扣";
	this.GametTypeID2Name[this.GameType_QXWQ] = "气象万千";
	this.GametTypeID2Name[this.GameType_BHMJ] = "北海麻将";
	this.GametTypeID2Name[this.GameType_NNMJ] = "南宁麻将";
	this.GametTypeID2Name[this.GameType_ZYXZMJ] = "资阳血战麻将";
	this.GametTypeID2Name[this.GameType_QSJ] = "敲三家";
	this.GametTypeID2Name[this.GameType_GDCSMJ] = "潮汕麻将";
	this.GametTypeID2Name[this.GameType_HNHZMJ] = "湖南红中麻将";
	this.GametTypeID2Name[this.GameType_DQDZ] = "德清点子";
	this.GametTypeID2Name[this.GameType_WLCBMJ] = "乌兰察布麻将";
	this.GametTypeID2Name[this.GameType_XSWSK] = "浠水五十K";
	this.GametTypeID2Name[this.GameType_AHLXMJ] = "利辛麻将";
	this.GametTypeID2Name[this.GameType_HXDZ] = "红心大战";
	this.GametTypeID2Name[this.GameType_SWTDHMJ] = "保定推倒胡";
	this.GametTypeID2Name[this.GameType_DBWSK] = "定边510K";
	this.GametTypeID2Name[this.GameType_WHBH] = "威海保皇";
	this.GametTypeID2Name[this.GameType_YLMJ] = "玉林鸡胡";
	this.GametTypeID2Name[this.GameType_YNLCMJ] = "临沧麻将";
	this.GametTypeID2Name[this.GameType_PEMJ] = "普洱麻将";
	this.GametTypeID2Name[this.GameType_DSP] = "打三片";
	this.GametTypeID2Name[this.GameType_DZXZMJ] = "达州血战麻将";
	this.GametTypeID2Name[this.GameType_BSYZF] = "保山幺子分";
	this.GametTypeID2Name[this.GameType_AHJSMJ] = "界首麻将";
	this.GametTypeID2Name[this.GameType_JLPK] = "96扑克";
	this.GametTypeID2Name[this.GameType_HSPK] = "黑三";
	this.GametTypeID2Name[this.GameType_RAR] = "肉挨肉";
	this.GametTypeID2Name[this.GameType_FKBD] = "疯狂8点";
	this.GametTypeID2Name[this.GameType_QWMJ] = "犍为血战麻将";
	this.GametTypeID2Name[this.GameType_YNBSMJ] = "保山麻将";
	this.GametTypeID2Name[this.GameType_SWPMMJ] = "保定跑马";
	this.GametTypeID2Name[this.GameType_SHJSMJ] = "金山麻将";
	this.GametTypeID2Name[this.GameType_QHDMJ] = "秦皇岛麻将";
	this.GametTypeID2Name[this.GameType_CBDG] = "赤壁打滚";
	this.GametTypeID2Name[this.GameType_JXZXMJ] = "资溪麻将";
	this.GametTypeID2Name[this.GameType_WZXZMJ] = "万州血战麻将";
	this.GametTypeID2Name[this.GameType_JXNCMJ] = "南城麻将";
	this.GametTypeID2Name[this.GameType_HXDZMJ] = "和县刀子";
	this.GametTypeID2Name[this.GameType_SRDZ] = "上饶打炸";
	this.GametTypeID2Name[this.GameType_CSMSY] = "潮汕木虱鱼";
// ###.GametTypeID2Name_Flag

	this.GametTypeID2PinYin = {};
	this.GametTypeID2PinYin[this.GameType_GYZJMJ] = "gyzjmj";
	this.GametTypeID2PinYin[this.GameType_HZMJ] = "hzmj";
	this.GametTypeID2PinYin[this.GameType_LBHZMJ] = "lbhzmj";
	this.GametTypeID2PinYin[this.GameType_SSS] = "sss";
	this.GametTypeID2PinYin[this.GameType_LYMJ] = "lymj";
	this.GametTypeID2PinYin[this.GameType_XMMJ] = "xmmj";
	this.GametTypeID2PinYin[this.GameType_FZMJ] = "fzmj";
	this.GametTypeID2PinYin[this.GameType_NN] = "nn";
	this.GametTypeID2PinYin[this.GameType_QZMJ] = "qzmj";
	this.GametTypeID2PinYin[this.GameType_NAMJ] = "namj";
	this.GametTypeID2PinYin[this.GameType_SSMJ] = "ssmj";
	this.GametTypeID2PinYin[this.GameType_ZZMJ] = "zzmj";
	this.GametTypeID2PinYin[this.GameType_ZJH] = "zjh";
	this.GametTypeID2PinYin[this.GameType_PTMJ] = "ptmj";
	this.GametTypeID2PinYin[this.GameType_NDMJ] = "ndmj";
	this.GametTypeID2PinYin[this.GameType_XYMJ] = "xymj";
	this.GametTypeID2PinYin[this.GameType_NPMJ] = "npmj";
	this.GametTypeID2PinYin[this.GameType_SMMJ] = "smmj";
	this.GametTypeID2PinYin[this.GameType_PDK] = "pdk";
	this.GametTypeID2PinYin[this.GameType_PT13MJ] = "pt13mj";
	this.GametTypeID2PinYin[this.GameType_SG] = "sg";
	this.GametTypeID2PinYin[this.GameType_YGMJ] = "ygmj";
	this.GametTypeID2PinYin[this.GameType_YGLFL] = "yglfl";
	this.GametTypeID2PinYin[this.GameType_ZJJHMJ] = "zjjhmj";
	this.GametTypeID2PinYin[this.GameType_HBYXMJ] = "hbyxmj";
	this.GametTypeID2PinYin[this.GameType_YSDZ] = "ysdz";
	this.GametTypeID2PinYin[this.GameType_XYZB] = "xyzb";
	this.GametTypeID2PinYin[this.GameType_WSK] = "wsk";
	this.GametTypeID2PinYin[this.GameType_PXCN] = "pxcn";
	this.GametTypeID2PinYin[this.GameType_ZJMJ] = "zjmj";
	this.GametTypeID2PinYin[this.GameType_ZJPLS] = "zjpls";
	this.GametTypeID2PinYin[this.GameType_WZMJ] = "wzmj";
	this.GametTypeID2PinYin[this.GameType_YCMJ] = "ycmj";
	this.GametTypeID2PinYin[this.GameType_GD] = "gd";
	this.GametTypeID2PinYin[this.GameType_DDZ] = "ddz";
	this.GametTypeID2PinYin[this.GameType_HAMJ] = "hamj";
	this.GametTypeID2PinYin[this.GameType_JMHHMJ] = "jmhhmj";
	this.GametTypeID2PinYin[this.GameType_GDY] = "gdy";
	this.GametTypeID2PinYin[this.GameType_QDMJ] = "qdmj";
	this.GametTypeID2PinYin[this.GameType_YTMJ] = "ytmj";
	this.GametTypeID2PinYin[this.GameType_YKMJ] = "ykmj";
	this.GametTypeID2PinYin[this.GameType_NHMJ] = "nhmj";
	this.GametTypeID2PinYin[this.GameType_LPMJ] = "lpmj";
	this.GametTypeID2PinYin[this.GameType_BDMJ] = "bdmj";
	this.GametTypeID2PinYin[this.GameType_YXMJ] = "yxmj";
	this.GametTypeID2PinYin[this.GameType_TZMJ] = "tzmj";
	this.GametTypeID2PinYin[this.GameType_SGMJ] = "sgmj";
	this.GametTypeID2PinYin[this.GameType_BW] = "bw";
	this.GametTypeID2PinYin[this.GameType_JNMJ] = "jnmj";
	this.GametTypeID2PinYin[this.GameType_JSYZMJ] = "jsyzmj";
	this.GametTypeID2PinYin[this.GameType_TDHMJ] = "tdhmj";
	this.GametTypeID2PinYin[this.GameType_XTMJ] = "xtmj";
	this.GametTypeID2PinYin[this.GameType_ZPMJ] = "zpmj";
	this.GametTypeID2PinYin[this.GameType_CHMJ] = "chmj";
	this.GametTypeID2PinYin[this.GameType_HBMJ] = "hbmj";
	this.GametTypeID2PinYin[this.GameType_SBP] = "sbp";
	this.GametTypeID2PinYin[this.GameType_HSMJ] = "hsmj";
	this.GametTypeID2PinYin[this.GameType_ZYPK] = "zypk";
	this.GametTypeID2PinYin[this.GameType_BJC] = "bjc";
	this.GametTypeID2PinYin[this.GameType_BJPK] = "bjpk";
	this.GametTypeID2PinYin[this.GameType_XLQMJ] = "xlqmj";
	this.GametTypeID2PinYin[this.GameType_FDDZ] = "fddz";
	this.GametTypeID2PinYin[this.GameType_YXLS] = "yxls";
	this.GametTypeID2PinYin[this.GameType_PXZZMJ] = "pxzzmj";
	this.GametTypeID2PinYin[this.GameType_PX6GT] = "px6gt";
	this.GametTypeID2PinYin[this.GameType_PX3GT] = "px3gt";
	this.GametTypeID2PinYin[this.GameType_PX258MJ] = "px258mj";
	this.GametTypeID2PinYin[this.GameType_YXTDH] = "yxtdh";
	this.GametTypeID2PinYin[this.GameType_AYPDK] = "aypdk";
	this.GametTypeID2PinYin[this.GameType_AYDSS] = "aydss";
	this.GametTypeID2PinYin[this.GameType_AYMJ] = "aymj";
	this.GametTypeID2PinYin[this.GameType_WNMJ] = "wnmj";
	this.GametTypeID2PinYin[this.GameType_WNYH] = "wnyh";
	this.GametTypeID2PinYin[this.GameType_WNPDK] = "wnpdk";
	this.GametTypeID2PinYin[this.GameType_FQPLS] = "fqpls";
	this.GametTypeID2PinYin[this.GameType_FQSBP] = "fqsbp";
	this.GametTypeID2PinYin[this.GameType_DZPK] = "dzpk";
	this.GametTypeID2PinYin[this.GameType_DX] = "dx";
	this.GametTypeID2PinYin[this.GameType_HBPDK] = "hbpdk";
	this.GametTypeID2PinYin[this.GameType_JSXYMJ] = "jsxymj";
	this.GametTypeID2PinYin[this.GameType_BDYXMJ] = "bdyxmj";
	this.GametTypeID2PinYin[this.GameType_HNXYMJ] = "hnxymj";
	this.GametTypeID2PinYin[this.GameType_TCMJ] = "tcmj";
	this.GametTypeID2PinYin[this.GameType_PBYHMJ] = "pbyhmj";
	this.GametTypeID2PinYin[this.GameType_SDFJMJ] = "sdfjmj";
	this.GametTypeID2PinYin[this.GameType_YHZMJ] = "yhzmj";
	this.GametTypeID2PinYin[this.GameType_DYMJ] = "dymj";
	this.GametTypeID2PinYin[this.GameType_SYMJ] = "symj";
	this.GametTypeID2PinYin[this.GameType_FDMJ] = "fdmj";
	this.GametTypeID2PinYin[this.GameType_PNYHMJ] = "pnyhmj";
	this.GametTypeID2PinYin[this.GameType_YXPDK] = "yxpdk";
	this.GametTypeID2PinYin[this.GameType_PYPP] = "pypp";
	this.GametTypeID2PinYin[this.GameType_PYZHW] = "pyzhw";
	this.GametTypeID2PinYin[this.GameType_PYPDK] = "pypdk";
	this.GametTypeID2PinYin[this.GameType_DLE] = "dle";
	this.GametTypeID2PinYin[this.GameType_ZJQZMJ] = "zjqzmj";
	this.GametTypeID2PinYin[this.GameType_JXFZMJ] = "jxfzmj";
	this.GametTypeID2PinYin[this.GameType_HNCSMJ] = "hncsmj";
	this.GametTypeID2PinYin[this.GameType_JXFZGP] = "jxfzgp";
	this.GametTypeID2PinYin[this.GameType_LPPDK] = "lppdk";
	this.GametTypeID2PinYin[this.GameType_JXFZPDK] = "jxfzpdk";
	this.GametTypeID2PinYin[this.GameType_WL] = "wl";
	this.GametTypeID2PinYin[this.GameType_TWMJ] = "twmj";
	this.GametTypeID2PinYin[this.GameType_TZKZMJ] = "tzkzmj";
	this.GametTypeID2PinYin[this.GameType_DCZBMJ] = "dczbmj";
	this.GametTypeID2PinYin[this.GameType_DCWDMJ] = "dcwdmj";
	this.GametTypeID2PinYin[this.GameType_HNZZMJ] = "hnzzmj";
	this.GametTypeID2PinYin[this.GameType_ZA13MJ] = "za13mj";
	this.GametTypeID2PinYin[this.GameType_ZA16MJ] = "za16mj";
	this.GametTypeID2PinYin[this.GameType_ZASS] = "zass";
	this.GametTypeID2PinYin[this.GameType_XHMJ] = "xhmj";
	this.GametTypeID2PinYin[this.GameType_XHBBMJ] = "xhbbmj";
	this.GametTypeID2PinYin[this.GameType_PXPDK] = "pxpdk";
	this.GametTypeID2PinYin[this.GameType_ERDDZ] = "erddz";
	this.GametTypeID2PinYin[this.GameType_TBZFBMJ] = "tbzfbmj";
	this.GametTypeID2PinYin[this.GameType_HNPDK] = "hnpdk";
	this.GametTypeID2PinYin[this.GameType_NYKWXMJ] = "nykwxmj";
	this.GametTypeID2PinYin[this.GameType_LZMJ] = "lzmj";
	this.GametTypeID2PinYin[this.GameType_DHD] = "dhd";
	this.GametTypeID2PinYin[this.GameType_FJYXMJ] = "fjyxmj";
	this.GametTypeID2PinYin[this.GameType_BYZP] = "byzp";
	this.GametTypeID2PinYin[this.GameType_HHHGW] = "hhhgw";
	this.GametTypeID2PinYin[this.GameType_AYCP] = "aycp";
	this.GametTypeID2PinYin[this.GameType_ZJQZSK] = "zjqzsk";
	this.GametTypeID2PinYin[this.GameType_CTWSK] = "ctwsk";
	this.GametTypeID2PinYin[this.GameType_YGWSK] = "ygwsk";
	this.GametTypeID2PinYin[this.GameType_RCWSK] = "rcwsk";
	this.GametTypeID2PinYin[this.GameType_NPGZMJ] = "npgzmj";
	this.GametTypeID2PinYin[this.GameType_SDLYMJ] = "sdlymj";
	this.GametTypeID2PinYin[this.GameType_CZMJ] = "czmj";
	this.GametTypeID2PinYin[this.GameType_XGKWXMJ] = "xgkwxmj";
	this.GametTypeID2PinYin[this.GameType_HNXCMJ] = "hnxcmj";
	this.GametTypeID2PinYin[this.GameType_YZMJ] = "yzmj";
	this.GametTypeID2PinYin[this.GameType_SJ] = "sj";
	this.GametTypeID2PinYin[this.GameType_DCTS] = "dcts";
	this.GametTypeID2PinYin[this.GameType_JDZTS] = "jdzts";
	this.GametTypeID2PinYin[this.GameType_DD] = "dd";
	this.GametTypeID2PinYin[this.GameType_LPTS] = "lpts";
	this.GametTypeID2PinYin[this.GameType_SRMJ] = "srmj";
	this.GametTypeID2PinYin[this.GameType_LBMJ] = "lbmj";
	this.GametTypeID2PinYin[this.GameType_RQMJ] = "rqmj";
	this.GametTypeID2PinYin[this.GameType_YZPDK] = "yzpdk";
	this.GametTypeID2PinYin[this.GameType_CSMJ] = "csmj";
	this.GametTypeID2PinYin[this.GameType_LHZP] = "lhzp";
	this.GametTypeID2PinYin[this.GameType_XPLP] = "xplp";
	this.GametTypeID2PinYin[this.GameType_HZWMJ] = "hzwmj";
	this.GametTypeID2PinYin[this.GameType_XPPHZ] = "xpphz";
	this.GametTypeID2PinYin[this.GameType_PXPHZ] = "pxphz";
	this.GametTypeID2PinYin[this.GameType_RCWSK3] = "rcwsk3";
	this.GametTypeID2PinYin[this.GameType_RCMJ] = "rcmj";
	this.GametTypeID2PinYin[this.GameType_JDZMJ] = "jdzmj";
	this.GametTypeID2PinYin[this.GameType_BZMJ] = "bzmj";
	this.GametTypeID2PinYin[this.GameType_BZTDH] = "bztdh";
	this.GametTypeID2PinYin[this.GameType_DTLGFMJ] = "dtlgfmj";
	this.GametTypeID2PinYin[this.GameType_SHQMMJ] = "shqmmj";
	this.GametTypeID2PinYin[this.GameType_JSTDHMJ] = "jstdhmj";
	this.GametTypeID2PinYin[this.GameType_ZGMJ] = "zgmj";
	this.GametTypeID2PinYin[this.GameType_NBMJ] = "nbmj";
	this.GametTypeID2PinYin[this.GameType_SWMJ] = "swmj";
	this.GametTypeID2PinYin[this.GameType_GDJYMJ] = "gdjymj";
	this.GametTypeID2PinYin[this.GameType_SQMJ] = "sqmj";
	this.GametTypeID2PinYin[this.GameType_JYMJ] = "jymj";
	this.GametTypeID2PinYin[this.GameType_HTMJ] = "htmj";
	this.GametTypeID2PinYin[this.GameType_THGJMJ] = "thgjmj";
	this.GametTypeID2PinYin[this.GameType_HNPDSMJ] = "hnpdsmj";
	this.GametTypeID2PinYin[this.GameType_JDZPDK] = "jdzpdk";
	this.GametTypeID2PinYin[this.GameType_PZMJ] = "pzmj";
	this.GametTypeID2PinYin[this.GameType_HNJYMJ] = "hnjymj";
	this.GametTypeID2PinYin[this.GameType_JSYCMJ] = "jsycmj";
	this.GametTypeID2PinYin[this.GameType_JSSQMJ] = "jssqmj";
	this.GametTypeID2PinYin[this.GameType_JSHAMJ] = "jshamj";
	this.GametTypeID2PinYin[this.GameType_WXMJ] = "wxmj";
	this.GametTypeID2PinYin[this.GameType_HHPDK] = "hhpdk";
	this.GametTypeID2PinYin[this.GameType_GYMJ] = "gymj";
	this.GametTypeID2PinYin[this.GameType_KFMJ] = "kfmj";
	this.GametTypeID2PinYin[this.GameType_PYMJ] = "pymj";
	this.GametTypeID2PinYin[this.GameType_LYGMJ] = "lygmj";
	this.GametTypeID2PinYin[this.GameType_JSCZMJ] = "jsczmj";
	this.GametTypeID2PinYin[this.GameType_HNJZMJ] = "hnjzmj";
	this.GametTypeID2PinYin[this.GameType_AHMJ] = "ahmj";
	this.GametTypeID2PinYin[this.GameType_XZMJ] = "xzmj";
	this.GametTypeID2PinYin[this.GameType_JSGYMJ] = "jsgymj";
	this.GametTypeID2PinYin[this.GameType_AHPHZ] = "ahphz";
	this.GametTypeID2PinYin[this.GameType_XXMJ] = "xxmj";
	this.GametTypeID2PinYin[this.GameType_HNAYMJ] = "hnaymj";
	this.GametTypeID2PinYin[this.GameType_NCMJ] = "ncmj";
	this.GametTypeID2PinYin[this.GameType_ZKMJ] = "zkmj";
	this.GametTypeID2PinYin[this.GameType_JXXYMJ] = "jxxymj";
	this.GametTypeID2PinYin[this.GameType_GAMJ] = "gamj";
	this.GametTypeID2PinYin[this.GameType_TGMJ] = "tgmj";
	this.GametTypeID2PinYin[this.GameType_HNHBMJ] = "hnhbmj";
	this.GametTypeID2PinYin[this.GameType_LHMJ] = "lhmj";
	this.GametTypeID2PinYin[this.GameType_JJMJ] = "jjmj";
	this.GametTypeID2PinYin[this.GameType_RCWSK6] = "rcwsk6";
	this.GametTypeID2PinYin[this.GameType_LJWSK4] = "ljwsk4";
	this.GametTypeID2PinYin[this.GameType_FYMJ] = "fymj";
	this.GametTypeID2PinYin[this.GameType_BZQZMJ] = "bzqzmj";
	this.GametTypeID2PinYin[this.GameType_FYDDZMJ] = "fyddzmj";
	this.GametTypeID2PinYin[this.GameType_HSTDHMJ] = "hstdhmj";
	this.GametTypeID2PinYin[this.GameType_CCMJ] = "ccmj";
	this.GametTypeID2PinYin[this.GameType_PCMJ] = "pcmj";
	this.GametTypeID2PinYin[this.GameType_JLMJ] = "jlmj";
	this.GametTypeID2PinYin[this.GameType_KFMJ] = "kfmj";
	this.GametTypeID2PinYin[this.GameType_ZJHZMJ] = "zjhzmj";
	this.GametTypeID2PinYin[this.GameType_XJXZMJ] = "xjxzmj";
	this.GametTypeID2PinYin[this.GameType_YSMJ] = "ysmj";
	this.GametTypeID2PinYin[this.GameType_ZZPH] = "zzph";
	this.GametTypeID2PinYin[this.GameType_NJMJ] = "njmj";
	this.GametTypeID2PinYin[this.GameType_JAMJ] = "jamj";
	this.GametTypeID2PinYin[this.GameType_XJLSHMJ] = "xjlshmj";
	this.GametTypeID2PinYin[this.GameType_YZYZMJ] = "yzyzmj";
	this.GametTypeID2PinYin[this.GameType_ZGCP] = "zgcp";
	this.GametTypeID2PinYin[this.GameType_ZGDSS] = "zgdss";
	this.GametTypeID2PinYin[this.GameType_GDMJ] = "gdmj";
	this.GametTypeID2PinYin[this.GameType_LXMJ] = "lxmj";
	this.GametTypeID2PinYin[this.GameType_CXMJ] = "cxmj";
	this.GametTypeID2PinYin[this.GameType_LS13579] = "ls13579";
	this.GametTypeID2PinYin[this.GameType_LSKJJMJ] = "lskjjmj";
	this.GametTypeID2PinYin[this.GameType_LSLWZMJ] = "lslwzmj";
	this.GametTypeID2PinYin[this.GameType_JCMJ] = "jcmj";
	this.GametTypeID2PinYin[this.GameType_SDH] = "sdh";
	this.GametTypeID2PinYin[this.GameType_GLSDH] = "glsdh";
	this.GametTypeID2PinYin[this.GameType_FXMJ] = "fxmj";
	this.GametTypeID2PinYin[this.GameType_GSJMJ] = "gsjmj";
	this.GametTypeID2PinYin[this.GameType_HBTDHMJ] = "hbtdhmj";
	this.GametTypeID2PinYin[this.GameType_HBHBMJ] = "hbhbmj";
	this.GametTypeID2PinYin[this.GameType_NXKWMJ] = "nxkwmj";
	this.GametTypeID2PinYin[this.GameType_NJLHMJ] = "njlhmj";
	this.GametTypeID2PinYin[this.GameType_SQSYMJ] = "sqsymj";
	this.GametTypeID2PinYin[this.GameType_YZGYMJ] = "yzgymj";
	this.GametTypeID2PinYin[this.GameType_AQMJ] = "aqmj";
	this.GametTypeID2PinYin[this.GameType_JDMJ] = "jdmj";
	this.GametTypeID2PinYin[this.GameType_ZJWZMJ] = "zjwzmj";
	this.GametTypeID2PinYin[this.GameType_SZMJ] = "szmj";
	this.GametTypeID2PinYin[this.GameType_ZJSHZMJ] = "zjshzmj";
	this.GametTypeID2PinYin[this.GameType_XGPDK] = "xgpdk";
	this.GametTypeID2PinYin[this.GameType_SRDDZ] = "srddz";
	this.GametTypeID2PinYin[this.GameType_WHMJ] = "whmj";
	this.GametTypeID2PinYin[this.GameType_YGJZMJ] = "ygjzmj";
	this.GametTypeID2PinYin[this.GameType_TMHHMJ] = "tmhhmj";
	this.GametTypeID2PinYin[this.GameType_JXMJ] = "jxmj";
	this.GametTypeID2PinYin[this.GameType_QZKHMJ] = "qzkhmj";
	this.GametTypeID2PinYin[this.GameType_LCMJ] = "lcmj";
	this.GametTypeID2PinYin[this.GameType_QZCSMJ] = "qzcsmj";
	this.GametTypeID2PinYin[this.GameType_JCHHMJ] = "jchhmj";
	this.GametTypeID2PinYin[this.GameType_LSMJ] = "lsmj";
	this.GametTypeID2PinYin[this.GameType_YSZMJ] = "yszmj";
	this.GametTypeID2PinYin[this.GameType_YXBZMJ] = "yxbzmj";
	this.GametTypeID2PinYin[this.GameType_YCTJMJ] = "yctjmj";
	this.GametTypeID2PinYin[this.GameType_CQHSZMJ] = "cqhszmj";
	this.GametTypeID2PinYin[this.GameType_HBWHMJ] = "hbwhmj";
	this.GametTypeID2PinYin[this.GameType_JSNYZMJ] = "jsnyzmj";
	this.GametTypeID2PinYin[this.GameType_ZZNSB] = "zznsb";
	this.GametTypeID2PinYin[this.GameType_AK159MJ] = "ak159mj";
	this.GametTypeID2PinYin[this.GameType_YLDGZMJ] = "yldgzmj";
	this.GametTypeID2PinYin[this.GameType_DLQHMJ] = "dlqhmj";
	this.GametTypeID2PinYin[this.GameType_YGPDK] = "ygpdk";
	this.GametTypeID2PinYin[this.GameType_LLFYMJ] = "llfymj";
	this.GametTypeID2PinYin[this.GameType_LPSMJ] = "lpsmj";
	this.GametTypeID2PinYin[this.GameType_SXHTMJ] = "sxhtmj";
	this.GametTypeID2PinYin[this.GameType_SXLSMJ] = "sxlsmj";
	this.GametTypeID2PinYin[this.GameType_DZMJ] = "dzmj";
	this.GametTypeID2PinYin[this.GameType_DKGMJ] = "dkgmj";
	this.GametTypeID2PinYin[this.GameType_GZMJ] = "gzmj";
	this.GametTypeID2PinYin[this.GameType_XFGZMJ] = "xfgzmj";
	this.GametTypeID2PinYin[this.GameType_JXNDMJ] = "jxndmj";
	this.GametTypeID2PinYin[this.GameType_GZTH] = "gzth";
	this.GametTypeID2PinYin[this.GameType_GNMJ] = "gnmj";
	this.GametTypeID2PinYin[this.GameType_HNMJ] = "hnmj";
	this.GametTypeID2PinYin[this.GameType_MMMJ] = "mmmj";
	this.GametTypeID2PinYin[this.GameType_RJMJ] = "rjmj";
	this.GametTypeID2PinYin[this.GameType_BP] = "bp";
	this.GametTypeID2PinYin[this.GameType_DNMJ] = "dnmj";
	this.GametTypeID2PinYin[this.GameType_FCMJ] = "fcmj";
	this.GametTypeID2PinYin[this.GameType_LNMJ] = "lnmj";
	this.GametTypeID2PinYin[this.GameType_HFMJ] = "hfmj";
	this.GametTypeID2PinYin[this.GameType_MASMJ] = "masmj";
	this.GametTypeID2PinYin[this.GameType_YJMJ] = "yjmj";
	this.GametTypeID2PinYin[this.GameType_XHZMJ] = "xhzmj";
	this.GametTypeID2PinYin[this.GameType_QYMJ] = "qymj";
	this.GametTypeID2PinYin[this.GameType_XL2VS2MJ] = "xl2vs2mj";
	this.GametTypeID2PinYin[this.GameType_XJMJ] = "xjmj";
	this.GametTypeID2PinYin[this.GameType_FZJXMJ] = "fzjxmj";
	this.GametTypeID2PinYin[this.GameType_JMGGHMJ] = "jmgghmj";
	this.GametTypeID2PinYin[this.GameType_SCMJ] = "scmj";
	this.GametTypeID2PinYin[this.GameType_YTYJMJ] = "ytyjmj";
	this.GametTypeID2PinYin[this.GameType_YDDGMJ] = "yddgmj";
	this.GametTypeID2PinYin[this.GameType_NKBHMJ] = "nkbhmj";
	this.GametTypeID2PinYin[this.GameType_JMSKMJ] = "jmskmj";
	this.GametTypeID2PinYin[this.GameType_LKMJ] = "lkmj";
	this.GametTypeID2PinYin[this.GameType_BZPDK] = "bzpdk";
	this.GametTypeID2PinYin[this.GameType_JZMJ] = "jzmj";
	this.GametTypeID2PinYin[this.GameType_LAMJ] = "lamj";
	this.GametTypeID2PinYin[this.GameType_XYXMJ] = "xyxmj";
	this.GametTypeID2PinYin[this.GameType_FZGCMJ] = "fzgcmj";
	this.GametTypeID2PinYin[this.GameType_XXFQMJ] = "xxfqmj";
	this.GametTypeID2PinYin[this.GameType_MZMJ] = "mzmj";
	this.GametTypeID2PinYin[this.GameType_AHHNMJ] = "ahhnmj";
	this.GametTypeID2PinYin[this.GameType_LYGCMJ] = "lygcmj";
	this.GametTypeID2PinYin[this.GameType_DXBJMJ] = "dxbjmj";
	this.GametTypeID2PinYin[this.GameType_GCBGMJ] = "gcbgmj";
	this.GametTypeID2PinYin[this.GameType_TXMJ] = "txmj";
	this.GametTypeID2PinYin[this.GameType_LKWSK] = "lkwsk";
	this.GametTypeID2PinYin[this.GameType_ZKLYMJ] = "zklymj";
	this.GametTypeID2PinYin[this.GameType_XYSCMJ] = "xyscmj";
	this.GametTypeID2PinYin[this.GameType_GSMJ] = "gsmj";
	this.GametTypeID2PinYin[this.GameType_SXMMJ] = "sxmmj";
	this.GametTypeID2PinYin[this.GameType_GXMJ] = "gxmj";
	this.GametTypeID2PinYin[this.GameType_PDSYXMJ] = "pdsyxmj";
	this.GametTypeID2PinYin[this.GameType_ZMDMJ] = "zmdmj";
	this.GametTypeID2PinYin[this.GameType_ZXMJ] = "zxmj";
	this.GametTypeID2PinYin[this.GameType_NZMJ] = "nzmj";
	this.GametTypeID2PinYin[this.GameType_XYGSMJ] = "xygsmj";
	this.GametTypeID2PinYin[this.GameType_WGFHMJ] = "wgfhmj";
	this.GametTypeID2PinYin[this.GameType_DZSJZMJ] = "dzsjzmj";
	this.GametTypeID2PinYin[this.GameType_GSPDK] = "gspdk";
	this.GametTypeID2PinYin[this.GameType_SSPMJ] = "sspmj";
	this.GametTypeID2PinYin[this.GameType_A3PK] = "a3pk";
	this.GametTypeID2PinYin[this.GameType_GLZP] = "glzp";
	this.GametTypeID2PinYin[this.GameType_YXSRDDZ] = "yxsrddz";
	this.GametTypeID2PinYin[this.GameType_NZDL] = "nzdl";
	this.GametTypeID2PinYin[this.GameType_NZWSK] = "nzwsk";
	this.GametTypeID2PinYin[this.GameType_HNDZP] = "hndzp";
	this.GametTypeID2PinYin[this.GameType_YXDDZ] = "yxddz";
	this.GametTypeID2PinYin[this.GameType_GXCDD] = "gxcdd";
	this.GametTypeID2PinYin[this.GameType_XYXXMJ] = "xyxxmj";
	this.GametTypeID2PinYin[this.GameType_XYXXPDK] = "xyxxpdk";
	this.GametTypeID2PinYin[this.GameType_DEMOMJ] = "demomj";
	this.GametTypeID2PinYin[this.GameType_XXTDHMJ] = "xxtdhmj";
	this.GametTypeID2PinYin[this.GameType_NYTHMJ] = "nythmj";
	this.GametTypeID2PinYin[this.GameType_FCTDHMJ] = "fctdhmj";
	this.GametTypeID2PinYin[this.GameType_GLPP] = "glpp";
	this.GametTypeID2PinYin[this.GameType_HZJDMJ] = "hzjdmj";
	this.GametTypeID2PinYin[this.GameType_GLWSK] = "glwsk";
	this.GametTypeID2PinYin[this.GameType_XYHCMJ] = "xyhcmj";
	this.GametTypeID2PinYin[this.GameType_YHMJ] = "yhmj";
	this.GametTypeID2PinYin[this.GameType_GLQZMJ] = "glqzmj";
	this.GametTypeID2PinYin[this.GameType_YYMJ] = "yymj";
	this.GametTypeID2PinYin[this.GameType_YZCHZ] = "yzchz";
	this.GametTypeID2PinYin[this.GameType_QJFXJMJ] = "qjfxjmj";
	this.GametTypeID2PinYin[this.GameType_TJMJ] = "tjmj";
	this.GametTypeID2PinYin[this.GameType_YJNXMJ] = "yjnxmj";
	this.GametTypeID2PinYin[this.GameType_GFT258MJ] = "gft258mj";
	this.GametTypeID2PinYin[this.GameType_HNSYMJ] = "hnsymj";
	this.GametTypeID2PinYin[this.GameType_GSDDZ] = "gsddz";
	this.GametTypeID2PinYin[this.GameType_XTLHMJ] = "xtlhmj";
	this.GametTypeID2PinYin[this.GameType_XSMJ] = "xsmj";
	this.GametTypeID2PinYin[this.GameType_GSLZMJ] = "gslzmj";
	this.GametTypeID2PinYin[this.GameType_LFPHMJ] = "lfphmj";
	this.GametTypeID2PinYin[this.GameType_HYLYMJ] = "hylymj";
	this.GametTypeID2PinYin[this.GameType_HNYJMJ] = "hnyjmj";
	this.GametTypeID2PinYin[this.GameType_TJTJMJ] = "tjtjmj";
	this.GametTypeID2PinYin[this.GameType_NMGYZMJ] = "nmgyzmj";
	this.GametTypeID2PinYin[this.GameType_RXEW] = "rxew";
	this.GametTypeID2PinYin[this.GameType_BAMJ] = "bamj";
	this.GametTypeID2PinYin[this.GameType_SGEW] = "sgew";
	this.GametTypeID2PinYin[this.GameType_AHHBMJ] = "ahhbmj";
	this.GametTypeID2PinYin[this.GameType_SFPHMJ] = "sfphmj";
	this.GametTypeID2PinYin[this.GameType_JCAHMJ] = "jcahmj";
	this.GametTypeID2PinYin[this.GameType_XNMJ] = "xnmj";
	this.GametTypeID2PinYin[this.GameType_HYHSMJ] = "hyhsmj";
	this.GametTypeID2PinYin[this.GameType_JSMJ] = "jsmj";
	this.GametTypeID2PinYin[this.GameType_SDJNMJ] = "sdjnmj";
	this.GametTypeID2PinYin[this.GameType_ZCMJ] = "zcmj";
	this.GametTypeID2PinYin[this.GameType_GZ] = "gz";
	this.GametTypeID2PinYin[this.GameType_NYXXMJ] = "nyxxmj";
	this.GametTypeID2PinYin[this.GameType_TBHMJ] = "tbhmj";
	this.GametTypeID2PinYin[this.GameType_PDSLSMJ] = "pdslsmj";
	this.GametTypeID2PinYin[this.GameType_NXMJ] = "nxmj";
	this.GametTypeID2PinYin[this.GameType_RZMJ] = "rzmj";
	this.GametTypeID2PinYin[this.GameType_CZDZMJ] = "czdzmj";
	this.GametTypeID2PinYin[this.GameType_ZD] = "zd";
	this.GametTypeID2PinYin[this.GameType_JAWZ] = "jawz";
	this.GametTypeID2PinYin[this.GameType_THBBZ] = "thbbz";
	this.GametTypeID2PinYin[this.GameType_ZGQZMJ] = "zgqzmj";
	this.GametTypeID2PinYin[this.GameType_SD] = "sd";
	this.GametTypeID2PinYin[this.GameType_CQCP] = "cqcp";
	this.GametTypeID2PinYin[this.GameType_SDB] = "sdb";
	this.GametTypeID2PinYin[this.GameType_SQYCMJ] = "sqycmj";
	this.GametTypeID2PinYin[this.GameType_MYMJ] = "mymj";
	this.GametTypeID2PinYin[this.GameType_PDSJXMJ] = "pdsjxmj";
	this.GametTypeID2PinYin[this.GameType_AFMJ] = "afmj";
	this.GametTypeID2PinYin[this.GameType_STSTMJ] = "ststmj";
	this.GametTypeID2PinYin[this.GameType_YFCGMJ] = "yfcgmj";
	this.GametTypeID2PinYin[this.GameType_STMJ] = "stmj";
	this.GametTypeID2PinYin[this.GameType_QCDG] = "qcdg";
	this.GametTypeID2PinYin[this.GameType_QYPHMJ] = "qyphmj";
	this.GametTypeID2PinYin[this.GameType_BFMJ] = "bfmj";
	this.GametTypeID2PinYin[this.GameType_HFBZMJ] = "hfbzmj";
	this.GametTypeID2PinYin[this.GameType_CYLYMJ] = "cylymj";
	this.GametTypeID2PinYin[this.GameType_DTMJ] = "dtmj";
	this.GametTypeID2PinYin[this.GameType_CZCZMJ] = "czczmj";
	this.GametTypeID2PinYin[this.GameType_TSDG] = "tsdg";
	this.GametTypeID2PinYin[this.GameType_HCPDK] = "hcpdk";
	this.GametTypeID2PinYin[this.GameType_PHMJ] = "phmj";
	this.GametTypeID2PinYin[this.GameType_XSY] = "xsy";
	this.GametTypeID2PinYin[this.GameType_WZQSMJ] = "wzqsmj";
	this.GametTypeID2PinYin[this.GameType_JZWZMJ] = "jzwzmj";
	this.GametTypeID2PinYin[this.GameType_GJMJ] = "gjmj";
	this.GametTypeID2PinYin[this.GameType_GDCZMJ] = "gdczmj";
	this.GametTypeID2PinYin[this.GameType_JXNDPDK] = "jxndpdk";
	this.GametTypeID2PinYin[this.GameType_ASMJ] = "asmj";
	this.GametTypeID2PinYin[this.GameType_HW] = "hw";
	this.GametTypeID2PinYin[this.GameType_QBSK] = "qbsk";
	this.GametTypeID2PinYin[this.GameType_THJGL] = "thjgl";
	this.GametTypeID2PinYin[this.GameType_CTPK] = "ctpk";
	this.GametTypeID2PinYin[this.GameType_SCPK] = "scpk";
	this.GametTypeID2PinYin[this.GameType_WXZMMJ] = "wxzmmj";
	this.GametTypeID2PinYin[this.GameType_FCZHA] = "fczha";
	this.GametTypeID2PinYin[this.GameType_LNSYMJ] = "lnsymj";
	this.GametTypeID2PinYin[this.GameType_BXMD] = "bxmd";
	this.GametTypeID2PinYin[this.GameType_JAPDK] = "japdk";
	this.GametTypeID2PinYin[this.GameType_ST] = "st";
	this.GametTypeID2PinYin[this.GameType_YCSDR] = "ycsdr";
	this.GametTypeID2PinYin[this.GameType_BSL] = "bsl";
	this.GametTypeID2PinYin[this.GameType_TCPFMJ] = "tcpfmj";
	this.GametTypeID2PinYin[this.GameType_HLDMJ] = "hldmj";
	this.GametTypeID2PinYin[this.GameType_BSMJ] = "bsmj";
	this.GametTypeID2PinYin[this.GameType_WK] = "wk";
	this.GametTypeID2PinYin[this.GameType_WXLS] = "wxls";
	this.GametTypeID2PinYin[this.GameType_QJFBBMJ] = "qjfbbmj";
	this.GametTypeID2PinYin[this.GameType_CP] = "cp";
	this.GametTypeID2PinYin[this.GameType_ZLMZ] = "zlmz";
	this.GametTypeID2PinYin[this.GameType_TWGZ] = "twgz";
	this.GametTypeID2PinYin[this.GameType_XYWSK] = "xywsk";
	this.GametTypeID2PinYin[this.GameType_SZD] = "szd";
	this.GametTypeID2PinYin[this.GameType_FCSJ] = "fcsj";
	this.GametTypeID2PinYin[this.GameType_CXYXMJ] = "cxyxmj";
	this.GametTypeID2PinYin[this.GameType_YCSGMJ] = "ycsgmj";
	this.GametTypeID2PinYin[this.GameType_JMJSMJ] = "jmjsmj";
	this.GametTypeID2PinYin[this.GameType_DSMJ] = "dsmj";
	this.GametTypeID2PinYin[this.GameType_JXYZ] = "jxyz";
	this.GametTypeID2PinYin[this.GameType_YCFXMJ] = "ycfxmj";
	this.GametTypeID2PinYin[this.GameType_SCNJMJ] = "scnjmj";
	this.GametTypeID2PinYin[this.GameType_NBCXMJ] = "nbcxmj";
	this.GametTypeID2PinYin[this.GameType_PY] = "py";
	this.GametTypeID2PinYin[this.GameType_THKB] = "thkb";
	this.GametTypeID2PinYin[this.GameType_PTMJ] = "ptmj";
	this.GametTypeID2PinYin[this.GameType_KLMJ] = "klmj";
	this.GametTypeID2PinYin[this.GameType_QWWES] = "qwwes";
	this.GametTypeID2PinYin[this.GameType_YFMJ] = "yfmj";
	this.GametTypeID2PinYin[this.GameType_GAWSK] = "gawsk";
	this.GametTypeID2PinYin[this.GameType_GADDZ] = "gaddz";
	this.GametTypeID2PinYin[this.GameType_JAYXDDZ] = "jayxddz";
	this.GametTypeID2PinYin[this.GameType_GAST] = "gast";
	this.GametTypeID2PinYin[this.GameType_FCGP] = "fcgp";
	this.GametTypeID2PinYin[this.GameType_SGLK] = "sglk";
	this.GametTypeID2PinYin[this.GameType_HEBMJ] = "hebmj";
	this.GametTypeID2PinYin[this.GameType_PYSFT] = "pysft";
	this.GametTypeID2PinYin[this.GameType_SXZJMJ] = "sxzjmj";
	this.GametTypeID2PinYin[this.GameType_SCGAMJ] = "scgamj";
	this.GametTypeID2PinYin[this.GameType_THGZ] = "thgz";
	this.GametTypeID2PinYin[this.GameType_SXMJ] = "sxmj";
	this.GametTypeID2PinYin[this.GameType_JXHS] = "jxhs";
	this.GametTypeID2PinYin[this.GameType_LWMJ] = "lwmj";
	this.GametTypeID2PinYin[this.GameType_WABJMJ] = "wabjmj";
	this.GametTypeID2PinYin[this.GameType_XJBJMJ] = "xjbjmj";
	this.GametTypeID2PinYin[this.GameType_YCHP] = "ychp";
	this.GametTypeID2PinYin[this.GameType_SSE] = "sse";
	this.GametTypeID2PinYin[this.GameType_SDZZMJ] = "sdzzmj";
	this.GametTypeID2PinYin[this.GameType_BZP] = "bzp";
	this.GametTypeID2PinYin[this.GameType_LGMJ] = "lgmj";
	this.GametTypeID2PinYin[this.GameType_LSYJMJ] = "lsyjmj";
	this.GametTypeID2PinYin[this.GameType_CDP] = "cdp";
	this.GametTypeID2PinYin[this.GameType_DDA] = "dda";
	this.GametTypeID2PinYin[this.GameType_CDXZMJ] = "cdxzmj";
	this.GametTypeID2PinYin[this.GameType_LZXZMJ] = "lzxzmj";
	this.GametTypeID2PinYin[this.GameType_WFBH] = "wfbh";
	this.GametTypeID2PinYin[this.GameType_PXMJ] = "pxmj";
	this.GametTypeID2PinYin[this.GameType_SSTX] = "sstx";
	this.GametTypeID2PinYin[this.GameType_SDLCMJ] = "sdlcmj";
	this.GametTypeID2PinYin[this.GameType_ZJGMJ] = "zjgmj";
	this.GametTypeID2PinYin[this.GameType_ZJTZMJ] = "zjtzmj";
	this.GametTypeID2PinYin[this.GameType_SYS] = "sys";
	this.GametTypeID2PinYin[this.GameType_ZGZ] = "zgz";
	this.GametTypeID2PinYin[this.GameType_CNMJ] = "cnmj";
	this.GametTypeID2PinYin[this.GameType_TGWSK] = "tgwsk";
	this.GametTypeID2PinYin[this.GameType_DZZJ] = "dzzj";
	this.GametTypeID2PinYin[this.GameType_SDHZMJ] = "sdhzmj";
	this.GametTypeID2PinYin[this.GameType_XLHZMJ] = "xlhzmj";
	this.GametTypeID2PinYin[this.GameType_PYDD] = "pydd";
	this.GametTypeID2PinYin[this.GameType_NCAYMJ] = "ncaymj";
	this.GametTypeID2PinYin[this.GameType_KSMJ] = "ksmj";
	this.GametTypeID2PinYin[this.GameType_SYSYBP] = "sysybp";
	this.GametTypeID2PinYin[this.GameType_GJ] = "gj";
	this.GametTypeID2PinYin[this.GameType_TAMJ] = "tamj";
	this.GametTypeID2PinYin[this.GameType_GAPDK] = "gapdk";
	this.GametTypeID2PinYin[this.GameType_DPHMJ] = "dphmj";
	this.GametTypeID2PinYin[this.GameType_QDJT] = "qdjt";
	this.GametTypeID2PinYin[this.GameType_LSXZMJ] = "lsxzmj";
	this.GametTypeID2PinYin[this.GameType_JAYXMJ] = "jayxmj";
	this.GametTypeID2PinYin[this.GameType_XSDQ] = "xsdq";
	this.GametTypeID2PinYin[this.GameType_LHGMMJ] = "lhgmmj";
	this.GametTypeID2PinYin[this.GameType_HCNG] = "hcng";
	this.GametTypeID2PinYin[this.GameType_JTMJ] = "jtmj";
	this.GametTypeID2PinYin[this.GameType_YBGXMJ] = "ybgxmj";
	this.GametTypeID2PinYin[this.GameType_JTPDK] = "jtpdk";
	this.GametTypeID2PinYin[this.GameType_XWMJ] = "xwmj";
	this.GametTypeID2PinYin[this.GameType_TZPDK] = "tzpdk";
	this.GametTypeID2PinYin[this.GameType_WJMJ] = "wjmj";
	this.GametTypeID2PinYin[this.GameType_QDBH] = "qdbh";
	this.GametTypeID2PinYin[this.GameType_TJTGMJ] = "tjtgmj";
	this.GametTypeID2PinYin[this.GameType_HAXYMJ] = "haxymj";
	this.GametTypeID2PinYin[this.GameType_ZYMJ] = "zymj";
	this.GametTypeID2PinYin[this.GameType_NTCP] = "ntcp";
	this.GametTypeID2PinYin[this.GameType_LNJZMJ] = "lnjzmj";
	this.GametTypeID2PinYin[this.GameType_JSSNMJ] = "jssnmj";
	this.GametTypeID2PinYin[this.GameType_JYESSZ] = "jyessz";
	this.GametTypeID2PinYin[this.GameType_XCMJ] = "xcmj";
	this.GametTypeID2PinYin[this.GameType_HZBDMJ] = "hzbdmj";
	this.GametTypeID2PinYin[this.GameType_BDJHMJ] = "bdjhmj";
	this.GametTypeID2PinYin[this.GameType_XCPDK] = "xcpdk";
	this.GametTypeID2PinYin[this.GameType_HSHHMJ] = "hshhmj";
	this.GametTypeID2PinYin[this.GameType_MSMJ] = "msmj";
	this.GametTypeID2PinYin[this.GameType_DYKKFMJ] = "dykkfmj";
	this.GametTypeID2PinYin[this.GameType_TZJJMJ] = "tzjjmj";
	this.GametTypeID2PinYin[this.GameType_NFSD] = "nfsd";
	this.GametTypeID2PinYin[this.GameType_GCMJ] = "gcmj";
	this.GametTypeID2PinYin[this.GameType_SCBZMJ] = "scbzmj";
	this.GametTypeID2PinYin[this.GameType_DYZP] = "dyzp";
	this.GametTypeID2PinYin[this.GameType_LYHMJ] = "lyhmj";
	this.GametTypeID2PinYin[this.GameType_XGCGMJ] = "xgcgmj";
	this.GametTypeID2PinYin[this.GameType_SCDYMJ] = "scdymj";
	this.GametTypeID2PinYin[this.GameType_TLMJ] = "tlmj";
	this.GametTypeID2PinYin[this.GameType_ZZDMZ] = "zzdmz";
	this.GametTypeID2PinYin[this.GameType_LCBJMJ] = "lcbjmj";
	this.GametTypeID2PinYin[this.GameType_QJHHMJ] = "qjhhmj";
	this.GametTypeID2PinYin[this.GameType_FDPK] = "fdpk";
	this.GametTypeID2PinYin[this.GameType_YFBS] = "yfbs";
	this.GametTypeID2PinYin[this.GameType_YAXZMJ] = "yaxzmj";
	this.GametTypeID2PinYin[this.GameType_SCGXMJ] = "scgxmj";
	this.GametTypeID2PinYin[this.GameType_HSPDK] = "hspdk";
	this.GametTypeID2PinYin[this.GameType_SCGXMJ] = "scgxmj";
	this.GametTypeID2PinYin[this.GameType_EQW] = "eqw";
	this.GametTypeID2PinYin[this.GameType_ESMJ] = "esmj";
	this.GametTypeID2PinYin[this.GameType_YKMJ] = "ykmj";
	this.GametTypeID2PinYin[this.GameType_QJHZMJ] = "qjhzmj";
	this.GametTypeID2PinYin[this.GameType_HBCXMJ] = "hbcxmj";
	this.GametTypeID2PinYin[this.GameType_WDMJ] = "wdmj";
	this.GametTypeID2PinYin[this.GameType_MSXLMJ] = "msxlmj";
	this.GametTypeID2PinYin[this.GameType_WSBEA] = "wsbea";
	this.GametTypeID2PinYin[this.GameType_QJPDK] = "qjpdk";
	this.GametTypeID2PinYin[this.GameType_LNASMJ] = "lnasmj";
	this.GametTypeID2PinYin[this.GameType_HZZMJ] = "hzzmj";
	this.GametTypeID2PinYin[this.GameType_SFP] = "sfp";
	this.GametTypeID2PinYin[this.GameType_WXTDHMJ] = "wxtdhmj";
	this.GametTypeID2PinYin[this.GameType_HJMJ] = "hjmj";
	this.GametTypeID2PinYin[this.GameType_SJCCMJ] = "sjccmj";
	this.GametTypeID2PinYin[this.GameType_SCNCMJ] = "scncmj";
	this.GametTypeID2PinYin[this.GameType_JSJYMJ] = "jsjymj";
	this.GametTypeID2PinYin[this.GameType_XZDDMJ] = "xzddmj";
	this.GametTypeID2PinYin[this.GameType_RGJAMJ] = "rgjamj";
	this.GametTypeID2PinYin[this.GameType_LCZP] = "lczp";
	this.GametTypeID2PinYin[this.GameType_YBXZMJ] = "ybxzmj";
	this.GametTypeID2PinYin[this.GameType_HBHSMJ] = "hbhsmj";
	this.GametTypeID2PinYin[this.GameType_LCPDK] = "lcpdk";
	this.GametTypeID2PinYin[this.GameType_JMSMJ] = "jmsmj";
	this.GametTypeID2PinYin[this.GameType_XLBBP] = "xlbbp";
	this.GametTypeID2PinYin[this.GameType_GGMJ] = "ggmj";
	this.GametTypeID2PinYin[this.GameType_JSTXMJ] = "jstxmj";
	this.GametTypeID2PinYin[this.GameType_GLMJ] = "glmj";
	this.GametTypeID2PinYin[this.GameType_PZHXZMJ] = "pzhxzmj";
	this.GametTypeID2PinYin[this.GameType_NXHSMJ] = "nxhsmj";
	this.GametTypeID2PinYin[this.GameType_GFMJ] = "gfmj";
	this.GametTypeID2PinYin[this.GameType_WXPDK] = "wxpdk";
	this.GametTypeID2PinYin[this.GameType_SDDMJ] = "sddmj";
	this.GametTypeID2PinYin[this.GameType_HCMJ] = "hcmj";
	this.GametTypeID2PinYin[this.GameType_JJWNMJ] = "jjwnmj";
	this.GametTypeID2PinYin[this.GameType_YXMDMJ] = "yxmdmj";
	this.GametTypeID2PinYin[this.GameType_DYXLMJ] = "dyxlmj";
	this.GametTypeID2PinYin[this.GameType_XJTMJ] = "xjtmj";
	this.GametTypeID2PinYin[this.GameType_KJMJ] = "kjmj";
	this.GametTypeID2PinYin[this.GameType_WXQWZMJ] = "wxqwzmj";
	this.GametTypeID2PinYin[this.GameType_ZQMJ] = "zqmj";
	this.GametTypeID2PinYin[this.GameType_JXDD] = "jxdd";
	this.GametTypeID2PinYin[this.GameType_QJWSK] = "qjwsk";
	this.GametTypeID2PinYin[this.GameType_WWMJ] = "wwmj";
	this.GametTypeID2PinYin[this.GameType_SCLSMJ] = "sclsmj";
	this.GametTypeID2PinYin[this.GameType_HGXSMJ] = "hgxsmj";
	this.GametTypeID2PinYin[this.GameType_AHJXMJ] = "ahjxmj";
	this.GametTypeID2PinYin[this.GameType_SNMJ] = "snmj";
	this.GametTypeID2PinYin[this.GameType_GFWSK] = "gfwsk";
	this.GametTypeID2PinYin[this.GameType_YJLYMJ] = "yjlymj";
	this.GametTypeID2PinYin[this.GameType_JTQWZMJ] = "jtqwzmj";
	this.GametTypeID2PinYin[this.GameType_JZXSMJ] = "jzxsmj";
	this.GametTypeID2PinYin[this.GameType_GYXZMJ] = "gyxzmj";
	this.GametTypeID2PinYin[this.GameType_SRYYMJ] = "sryymj";
	this.GametTypeID2PinYin[this.GameType_CXDZ] = "cxdz";
	this.GametTypeID2PinYin[this.GameType_FHMK] = "fhmk";
	this.GametTypeID2PinYin[this.GameType_QXWQ] = "qxwq";
	this.GametTypeID2PinYin[this.GameType_BHMJ] = "bhmj";
	this.GametTypeID2PinYin[this.GameType_NNMJ] = "nnmj";
	this.GametTypeID2PinYin[this.GameType_ZYXZMJ] = "zyxzmj";
	this.GametTypeID2PinYin[this.GameType_QSJ] = "qsj";
	this.GametTypeID2PinYin[this.GameType_GDCSMJ] = "gdcsmj";
	this.GametTypeID2PinYin[this.GameType_HNHZMJ] = "hnhzmj";
	this.GametTypeID2PinYin[this.GameType_DQDZ] = "dqdz";
	this.GametTypeID2PinYin[this.GameType_WLCBMJ] = "wlcbmj";
	this.GametTypeID2PinYin[this.GameType_XSWSK] = "xswsk";
	this.GametTypeID2PinYin[this.GameType_AHLXMJ] = "ahlxmj";
	this.GametTypeID2PinYin[this.GameType_HXDZ] = "hxdz";
	this.GametTypeID2PinYin[this.GameType_SWTDHMJ] = "swtdhmj";
	this.GametTypeID2PinYin[this.GameType_DBWSK] = "dbwsk";
	this.GametTypeID2PinYin[this.GameType_WHBH] = "whbh";
	this.GametTypeID2PinYin[this.GameType_YLMJ] = "ylmj";
	this.GametTypeID2PinYin[this.GameType_YNLCMJ] = "ynlcmj";
	this.GametTypeID2PinYin[this.GameType_PEMJ] = "pemj";
	this.GametTypeID2PinYin[this.GameType_DSP] = "dsp";
	this.GametTypeID2PinYin[this.GameType_DZXZMJ] = "dzxzmj";
	this.GametTypeID2PinYin[this.GameType_BSYZF] = "bsyzf";
	this.GametTypeID2PinYin[this.GameType_AHJSMJ] = "ahjsmj";
	this.GametTypeID2PinYin[this.GameType_JLPK] = "jlpk";
	this.GametTypeID2PinYin[this.GameType_HSPK] = "hspk";
	this.GametTypeID2PinYin[this.GameType_RAR] = "rar";
	this.GametTypeID2PinYin[this.GameType_FKBD] = "fkbd";
	this.GametTypeID2PinYin[this.GameType_QWMJ] = "qwmj";
	this.GametTypeID2PinYin[this.GameType_YNBSMJ] = "ynbsmj";
	this.GametTypeID2PinYin[this.GameType_SWPMMJ] = "swpmmj";
	this.GametTypeID2PinYin[this.GameType_SHJSMJ] = "shjsmj";
	this.GametTypeID2PinYin[this.GameType_QHDMJ] = "qhdmj";
	this.GametTypeID2PinYin[this.GameType_CBDG] = "cbdg";
	this.GametTypeID2PinYin[this.GameType_JXZXMJ] = "jxzxmj";
	this.GametTypeID2PinYin[this.GameType_WZXZMJ] = "wzxzmj";
	this.GametTypeID2PinYin[this.GameType_JXNCMJ] = "jxncmj";
	this.GametTypeID2PinYin[this.GameType_HXDZMJ] = "hxdzmj";
	this.GametTypeID2PinYin[this.GameType_SRDZ] = "srdz";
	this.GametTypeID2PinYin[this.GameType_CSMSY] = "csmsy";
// ###.GametTypeID2PinYin_Flag

};

var Room = function () {
	//红中麻将房间状态
	this.RoomState_Init = 0;
	this.RoomState_Playing = 1;
	this.RoomState_End = 2;
	this.RoomState_Waiting = 3;
	this.RoomState_WaitingEx = 4;

	this.RoomStateStringDict = {};
	this.RoomStateStringDict["Init"] = this.RoomState_Init;
	this.RoomStateStringDict["Playing"] = this.RoomState_Playing;
	this.RoomStateStringDict["End"] = this.RoomState_End;
	this.RoomStateStringDict["Waiting"] = this.RoomState_Waiting;
	this.RoomStateStringDict["WaitingEx"] = this.RoomState_WaitingEx;

	this.SetState_Init = 0;
	this.SetState_Playing = 1;
	this.SetState_End = 2;
	this.SetState_Waiting = 3;
	this.SetState_WaitingEx = 4;
	this.SetStateStringDict = {};
	this.SetStateStringDict["Init"] = this.SetState_Init;
	this.SetStateStringDict["Playing"] = this.SetState_Playing;
	this.SetStateStringDict["End"] = this.SetState_End;
	this.SetStateStringDict["Waiting"] = this.SetState_Waiting;
	this.SetStateStringDict["WaitingEx"] = this.SetState_WaitingEx;
	//仙游炸棒打牌阶段状态
	this.XYZBSetState_FaPai = 0;//发牌阶段
	this.XYZBSetState_Playing = 1;//打牌阶段
	this.XYZBSetState_End = 2;//打牌结束阶段
	this.XYZBSetStateStringDict = {};
	this.XYZBSetStateStringDict["FaPai"] = this.XYZBSetState_FaPai;
	this.XYZBSetStateStringDict["Playing"] = this.XYZBSetState_Playing;
	this.XYZBSetStateStringDict["End"] = this.XYZBSetState_End;
	//510K打牌阶段状态
	this.WSKSetState_FaPai = 0;//发牌阶段
	this.WSKSetState_FenPei = 1;//分配伙伴阶段
	this.WSKSetState_Playing = 2;//打牌阶段
	this.WSKSetState_End = 3;//打牌结束阶段
	this.WSKSetStateStringDict = {};
	this.WSKSetStateStringDict["FaPai"] = this.WSKSetState_FaPai;
	this.WSKSetStateStringDict["FenPei"] = this.WSKSetState_FenPei;
	this.WSKSetStateStringDict["Playing"] = this.WSKSetState_Playing;
	this.WSKSetStateStringDict["End"] = this.WSKSetState_End;
	//斗地主打牌阶段状态
	this.DDZSetState_FaPai = 0;//发牌阶段
	this.DDZSetState_Hog = 1;//抢地主阶段
	this.DDZSetState_AddDouble = 2;//加倍阶段
	this.DDZSetState_Playing = 3;//打牌阶段
	this.DDZSetState_End = 4;//打牌结束阶段
	this.DDZSetStateStringDict = {};
	this.DDZSetStateStringDict["FaPai"] = this.DDZSetState_FaPai;
	this.DDZSetStateStringDict["Hog"] = this.DDZSetState_Hog;
	this.DDZSetStateStringDict["AddDouble"] = this.DDZSetState_AddDouble;
	this.DDZSetStateStringDict["Playing"] = this.DDZSetState_Playing;
	this.DDZSetStateStringDict["End"] = this.DDZSetState_End;

	//福清拼罗松打牌阶段状态
	this.FQPLSSetState_FaPai = 0;//发牌阶段
	this.FQPLSSetState_Hog = 1;//抢庄状态
	this.FQPLSSetState_AddDouble = 2;//加倍阶段
	this.FQPLSSetState_Playing = 3;//比牌阶段
	this.FQPLSSetState_End = 4;//结束阶段
	this.FQPLSSetStateStringDict = {};
	this.FQPLSSetStateStringDict["FQPLS_GAME_STATUS_DEAL"] = this.FQPLSSetState_FaPai;
	this.FQPLSSetStateStringDict["FQPLS_GAME_STATUS_CONFIRMBanker"] = this.FQPLSSetState_Hog;
	this.FQPLSSetStateStringDict["FQPLS_GAME_STATUS_ADDDOUBLE"] = this.FQPLSSetState_AddDouble;
	this.FQPLSSetStateStringDict["FQPLS_GAME_STATUS_PLAYING"] = this.FQPLSSetState_Playing;
	this.FQPLSSetStateStringDict["FQPLS_GAME_STATUS_RESULT"] = this.FQPLSSetState_End;


	//位置类型
	this.Pos_East = 0;
	this.Pos_South = 1;
	this.Pos_West = 2;
	this.Pos_North = 3;

	//位置顺序列表
	this.PosIDList = [this.Pos_East, this.Pos_South, this.Pos_West, this.Pos_North];

	//位置对应底牌旋转角度
	this.PosIDRotationDict = {};
	this.PosIDRotationDict[this.Pos_East] = 0;
	this.PosIDRotationDict[this.Pos_South] = 90;
	this.PosIDRotationDict[this.Pos_West] = 180;
	this.PosIDRotationDict[this.Pos_North] = 270;
};
var MaJiang = function () {
	//参与的人数
	this.MJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.MJRoomPaiDun = 18;
	//自摸
	this.OpType_Hu = 1;
	//碰
	this.OpType_Peng = 2;
	//明杠
	this.OpType_Gang = 3;
	//接杠
	this.OpType_JieGang = 4;
	//暗杠
	this.OpType_AnGang = 5;
	//吃
	this.OpType_Chi = 6;
	//出牌
	this.OpType_Out = 7;
	//过
	this.OpType_Pass = 8;
	//抢杠胡
	this.OpType_QiangGangHu = 9;
	//补花
	this.OpType_BuHua = 10;
	//游金
	this.OpType_DanYou = 11;
	//双游
	this.OpType_ShuangYou = 12;
	//三游
	this.OpType_SanYou = 13;
	//抢金
	this.OpType_QiangJin = 14;
	//三金倒
	this.OpType_SanJinDao = 15;
	//抢金过三金倒过，不抢
	this.OpType_SQPass = 16;
	//四金倒
	this.OpType_SiJinDao = 17;
	//五金倒
	this.OpType_WuJinDao = 18;
	//六金倒
	this.OpType_LiuJinDao = 19;
	//明查
	this.OpType_See = 20;
	//暗查
	this.OpType_AnSee = 21;
	//13幺
	this.OpType_ShiSanYao = 22;
	//听游金
	this.OpType_TingYouJin = 23;
	//对对胡
	this.OpType_DDHu = 24;
	//天胡
	this.OpType_TianHu = 25;
	//平胡
	this.OpType_PingHu = 26;
	//听
	this.OpType_Ting = 27;
	//金雀
	this.OpType_JinQue = 28;
	//金龙
	this.OpType_JinLong = 29;
	//一张花
	this.OpType_YiZhangHua = 30;
	//无花无杠
	this.OpType_WHuaWGang = 31;
	//混一色
	this.OpType_HunYiSe = 32;
	//清一色
	this.OpType_QingYiSe = 33;
	//光游
	this.OpType_GuangYou = 34;
	//小炸弹
	this.OpType_XiaoZhaDan = 35;
	//大炸弹
	this.OpType_DaZhaDan = 36;
	//超级炸弹
	this.OpType_ChaoJiZhaDan = 37;
	//地胡
	this.OpType_JinGang = 38;
	//地胡
	this.OpType_DiHu = 39;
	//大对碰
	this.OpType_DaDuiPeng = 41;
	//大三元
	this.OpType_DaSanYuan = 44;
	//三金游
	this.OpType_SanJinYou = 51;
	//单吊
	this.OpType_DanDiao = 42;
	//三金游
	this.OpType_SanJinYou = 51;
	//乱风
	this.OpType_LuanFeng = 53;
	//财神头
	this.OpType_CS_Tou = 54;
	//三财一刻
	this.OpType_SC_Ke = 55;
	//十三不靠
	this.OpType_SSBK = 56;
	//十三不靠清
	this.OpType_SSBK_Qing = 57;
	//门子
	this.OpType_MenZi = 59;
	//字一色
	this.OpType_ZiYiSe = 74;
	//接炮
	this.OpType_JiePao = 75;
	// 明搂
	this.OpType_MingLou = 78;
	//万
	this.OpType_Wan = 86;
	//条
	this.OpType_Tiao = 87;
	//筒
	this.OpType_Tong = 88;
	//天杠
	this.OpType_TianGang = 89;
	//天听
	this.OpType_TianTing = 93;
	//明杠
	this.OpType_MingGang = 103;
	//明摆
	this.OpType_MingBai = 142;
	//报定
	this.OpType_BaoDing = 143;
	//坎牌
	this.OpType_KanPai = 147;

	this.OpTypeStringDict = {};
	this.OpTypeStringDict["Hu"] = this.OpType_Hu;
	this.OpTypeStringDict["Peng"] = this.OpType_Peng;
	this.OpTypeStringDict["Gang"] = this.OpType_Gang;
	this.OpTypeStringDict["JieGang"] = this.OpType_JieGang;
	this.OpTypeStringDict["AnGang"] = this.OpType_AnGang;
	this.OpTypeStringDict["Chi"] = this.OpType_Chi;
	this.OpTypeStringDict["Out"] = this.OpType_Out;
	this.OpTypeStringDict["Pass"] = this.OpType_Pass;
	this.OpTypeStringDict["QiangGangHu"] = this.OpType_QiangGangHu;
	this.OpTypeStringDict["BuHua"] = this.OpType_BuHua;
	this.OpTypeStringDict["GuangYou"] = this.OpType_GuangYou;
	this.OpTypeStringDict["DanYou"] = this.OpType_DanYou;
	this.OpTypeStringDict["ShuangYou"] = this.OpType_ShuangYou;
	this.OpTypeStringDict["SanYou"] = this.OpType_SanYou;
	this.OpTypeStringDict["QiangJin"] = this.OpType_QiangJin;
	this.OpTypeStringDict["SanJinDao"] = this.OpType_SanJinDao;
	this.OpTypeStringDict["SiJinDao"] = this.OpType_SiJinDao;
	this.OpTypeStringDict["WuJinDao"] = this.OpType_WuJinDao;
	this.OpTypeStringDict["LiuJinDao"] = this.OpType_LiuJinDao;
	this.OpTypeStringDict["SQPass"] = this.OpType_SQPass;
	this.OpTypeStringDict["See"] = this.OpType_See;
	this.OpTypeStringDict["AnSee"] = this.OpType_AnSee;
	this.OpTypeStringDict["ShiSanYao"] = this.OpType_ShiSanYao;
	this.OpTypeStringDict["TingYouJin"] = this.OpType_TingYouJin;
	this.OpTypeStringDict["DDHu"] = this.OpType_DDHu;
	this.OpTypeStringDict["TianHu"] = this.OpType_TianHu;
	this.OpTypeStringDict["PingHu"] = this.OpType_PingHu;
	this.OpTypeStringDict["Ting"] = this.OpType_Ting;
	this.OpTypeStringDict["JinQue"] = this.OpType_JinQue;
	this.OpTypeStringDict["JinLong"] = this.OpType_JinLong;
	this.OpTypeStringDict["YiZhangHua"] = this.OpType_YiZhangHua;
	this.OpTypeStringDict["WHuaWGang"] = this.OpType_WHuaWGang;
	this.OpTypeStringDict["HunYiSe"] = this.OpType_HunYiSe;
	this.OpTypeStringDict["QingYiSe"] = this.OpType_QingYiSe;
	this.OpTypeStringDict["XiaoZhaDan"] = this.OpType_XiaoZhaDan;
	this.OpTypeStringDict["DaZhaDan"] = this.OpType_DaZhaDan;
	this.OpTypeStringDict["ChaoJiZhaDan"] = this.OpType_ChaoJiZhaDan;
	this.OpTypeStringDict["JinGang"] = this.OpType_JinGang;
	this.OpTypeStringDict["DiHu"] = this.OpType_DiHu;
	this.OpTypeStringDict["DaDuiPeng"] = this.OpType_DaDuiPeng;
	this.OpTypeStringDict["DaSanYuan"] = this.OpType_DaSanYuan;
	this.OpTypeStringDict["SanJinYou"] = this.OpType_SanJinYou;
	this.OpTypeStringDict["DanDiao"] = this.OpType_DanDiao;
	this.OpTypeStringDict["LuanFeng"] = this.OpType_LuanFeng;
	this.OpTypeStringDict["CS_Tou"] = this.OpType_CS_Tou;
	this.OpTypeStringDict["SC_Ke"] = this.OpType_SC_Ke;
	this.OpTypeStringDict["SSBK"] = this.OpType_SSBK;
	this.OpTypeStringDict["SSBK_Qing"] = this.OpType_SSBK_Qing;
	this.OpTypeStringDict["MenZi"] = this.OpType_MenZi;
	this.OpTypeStringDict["ZiYiSe"] = this.OpType_ZiYiSe;
	this.OpTypeStringDict["JiePao"] = this.OpType_JiePao;
	this.OpTypeStringDict["Wan"] = this.OpType_Wan;
	this.OpTypeStringDict["Tiao"] = this.OpType_Tiao;
	this.OpTypeStringDict["Tong"] = this.OpType_Tong;
	this.OpTypeStringDict["TianGang"] = this.OpType_TianGang;
	this.OpTypeStringDict["MingGang"] = this.OpType_MingGang;
	this.OpTypeStringDict["MingBai"] = this.OpType_MingBai;
	this.OpTypeStringDict["BaoDing"] = this.OpType_BaoDing;

	//没胡
	this.HuType_NotHu = 0;
	//自摸
	this.HuType_ZiMo = 1;
	//抢杠胡
	this.HuType_QGH = 2;
	//四红中
	this.HuType_FHZ = 3;
	//三金倒
	this.HuType_SanJinDao = 4;
	//游金
	this.HuType_DanYou = 5;
	//双游
	this.HuType_ShuangYou = 6;
	//三游
	this.HuType_SanYou = 7;
	//抢金
	this.HuType_QiangJin = 8;
	//四金倒
	this.HuType_SiJinDao = 9;
	//五金倒
	this.HuType_WuJinDao = 10;
	//六金倒
	this.HuType_LiuJinDao = 11;
	//13幺
	this.HuType_ShiSanYao = 12;
	//对对胡
	this.HuType_DDHu = 13;
	//天胡
	this.HuType_TianHu = 14;
	//平胡
	this.HuType_PingHu = 15;
	//金雀
	this.HuType_JinQue = 16;
	//金龙
	this.HuType_JinLong = 17;
	//一张花
	this.HuType_YiZhangHua = 18;
	//无花无杠
	this.HuType_WHuaWGang = 19;
	//混一色
	this.HuType_HunYiSe = 20;
	//清一色
	this.HuType_QingYiSe = 21;
	//小炸弹
	this.HuType_XiaoZhaDan = 22;
	//大炸弹
	this.HuType_DaZhaDan = 23;
	//超级炸弹
	this.HuType_ChaoJiZhaDan = 24;
	//金杠
	this.HuType_JinGang = 25;
	//地胡
	this.HuType_DiHu = 26;

	//大对碰
	this.HuType_DaDuiPeng = 28;
	//大三元
	this.HuType_DaSanYuan = 29;
	//三金游
	this.HuType_SanJinYou = 30;
	//点炮
	this.HuType_DianPao = 31;
	//单吊
	this.HuType_DanDiao = 32;
	//乱风
	this.HuType_LuanFeng = 33;
	//财神头
	this.HuType_CS_Tou = 34;
	//三财一刻
	this.HuType_SC_Ke = 35;
	//十三不靠
	this.HuType_SSBK = 36;
	//十三不靠清
	this.HuType_SSBK_Qing = 37;
	//屁胡
	this.HuType_PiHu = 38;
	//门子
	this.HuType_MenZi = 39;
	//接刀
	this.HuType_JieDao = 40;
	//杠上开花
	this.HuType_GSKH = 41;
	//字一色
	this.HuType_ZiYiSe = 51;
	//接炮
	this.HuType_JiePao = 52;
	//八花
	this.HuType_BaHua = 54;
	//杠冲
	this.HuType_GangChong = 56;
	//一胡牌
	this.HuType_HuOne = 58;
	//二胡牌
	this.HuType_HuTwo = 59;
	//三胡牌
	this.HuType_HuThree = 60;
	//一自摸
	this.HuType_ZiMoOne = 61;
	//二自摸
	this.HuType_ZiMoTwo = 62;
	//三自摸
	this.HuType_ZiMoThree = 63;
	this.HuType_HuFour = 69;//四接炮
	this.HuType_HuFive = 70;//五接炮
	this.HuType_ZiMoFour = 71;//四自摸
	this.HuType_ZiMoFive = 72;//五自摸
	//杠上花
	this.HuType_GangShangHua = 79;
	//银顶
	this.HuType_YinDing = 83;
	//金顶
	this.HuType_JinDing = 84;

	this.HuTypeStringDict = {};
	this.HuTypeStringDict["NotHu"] = this.HuType_NotHu;
	this.HuTypeStringDict["ZiMo"] = this.HuType_ZiMo;
	this.HuTypeStringDict["QGH"] = this.HuType_QGH;
	this.HuTypeStringDict["FHZ"] = this.HuType_FHZ;
	this.HuTypeStringDict["SanJinDao"] = this.HuType_SanJinDao;
	this.HuTypeStringDict["SiJinDao"] = this.HuType_SiJinDao;
	this.HuTypeStringDict["WuJinDao"] = this.HuType_WuJinDao;
	this.HuTypeStringDict["LiuJinDao"] = this.HuType_LiuJinDao;
	this.HuTypeStringDict["DanYou"] = this.HuType_DanYou;
	this.HuTypeStringDict["ShuangYou"] = this.HuType_ShuangYou;
	this.HuTypeStringDict["SanYou"] = this.HuType_SanYou;
	this.HuTypeStringDict["QiangJin"] = this.HuType_QiangJin;
	this.HuTypeStringDict["ShiSanYao"] = this.HuType_ShiSanYao;
	this.HuTypeStringDict["DDHu"] = this.HuType_DDHu;
	this.HuTypeStringDict["TianHu"] = this.HuType_TianHu;
	this.HuTypeStringDict["PingHu"] = this.HuType_PingHu;
	this.HuTypeStringDict["JinQue"] = this.HuType_JinQue;
	this.HuTypeStringDict["JinLong"] = this.HuType_JinLong;
	this.HuTypeStringDict["YiZhangHua"] = this.HuType_YiZhangHua;
	this.HuTypeStringDict["WHuaWGang"] = this.HuType_WHuaWGang;
	this.HuTypeStringDict["HunYiSe"] = this.HuType_HunYiSe;
	this.HuTypeStringDict["QingYiSe"] = this.HuType_QingYiSe;
	this.HuTypeStringDict["XiaoZhaDan"] = this.HuType_XiaoZhaDan;
	this.HuTypeStringDict["DaZhaDan"] = this.HuType_DaZhaDan;
	this.HuTypeStringDict["ChaoJiZhaDan"] = this.HuType_ChaoJiZhaDan;
	this.HuTypeStringDict["JinGang"] = this.HuType_JinGang;
	this.HuTypeStringDict["DiHu"] = this.HuType_DiHu;
	this.HuTypeStringDict["DaDuiPeng"] = this.HuType_DaDuiPeng;
	this.HuTypeStringDict["DaSanYuan"] = this.HuType_DaSanYuan;
	this.HuTypeStringDict["SanJinYou"] = this.HuType_SanJinYou;
	this.HuTypeStringDict["DanDiao"] = this.HuType_DanDiao;
	this.HuTypeStringDict["DianPao"] = this.HuType_DianPao;
	this.HuTypeStringDict["LuanFeng"] = this.HuType_LuanFeng;
	this.HuTypeStringDict["CS_Tou"] = this.HuType_CS_Tou;
	this.HuTypeStringDict["SC_Ke"] = this.HuType_SC_Ke;
	this.HuTypeStringDict["SSBK"] = this.HuType_SSBK;
	this.HuTypeStringDict["SSBK_Qing"] = this.HuType_SSBK_Qing;
	this.HuTypeStringDict["PiHu"] = this.HuType_PiHu;
	this.HuTypeStringDict["MenZi"] = this.HuType_MenZi;
	this.HuTypeStringDict["JieDao"] = this.HuType_JieDao;
	this.HuTypeStringDict["GSKH"] = this.HuType_GSKH;
	this.HuTypeStringDict["ZiYiSe"] = this.HuType_ZiYiSe;
	this.HuTypeStringDict["JiePao"] = this.HuType_JiePao;
	this.HuTypeStringDict["GangChong"] = this.HuType_GangChong;
	this.HuTypeStringDict["BaHua"] = this.HuType_BaHua;
	this.HuTypeStringDict["HuOne"] = this.HuType_HuOne;
	this.HuTypeStringDict["HuTwo"] = this.HuType_HuTwo;
	this.HuTypeStringDict["HuThree"] = this.HuType_HuThree;
	this.HuTypeStringDict["ZiMoOne"] = this.HuType_ZiMoOne;
	this.HuTypeStringDict["ZiMoTwo"] = this.HuType_ZiMoTwo;
	this.HuTypeStringDict["ZiMoThree"] = this.HuType_ZiMoThree;
	this.HuTypeStringDict["GangShangHua"] = this.HuType_GangShangHua;
	this.HuTypeStringDict["YinDing"] = this.HuType_YinDing;
	this.HuTypeStringDict["JinDing"] = this.HuType_JinDing;

	//没胡
	this.HuTypePY_NotHu = "没胡";
	//胡
	this.HuTypePY_Hu = "没胡";
	//自摸
	this.HuTypePY_ZiMo = "自摸";
	//抢杠胡
	this.HuTypePY_QGH = "抢杠胡";
	//四红中
	this.HuTypePY_FHZ = "四红中";
	//明杠
	this.HuTypePY_JieGang = "明杠";
	//杠
	this.HuTypePY_Gang = "杠";
	//暗杠
	this.HuTypePY_AnGang = "暗杠";
	//三金倒
	this.HuTypePY_SanJinDao = "三金倒";
	//游金
	this.HuTypePY_DanYou = "游金";
	//双游
	this.HuTypePY_ShuangYou = "双游";
	//三游
	this.HuTypePY_SanYou = "三游";
	//抢金
	this.HuTypePY_QiangJin = "抢金";
	//四金倒
	this.HuTypePY_SiJinDao = "四金倒";
	//五金倒
	this.HuTypePY_WuJinDao = "五金倒";
	//六金倒
	this.HuTypePY_LiuJinDao = "六金倒";
	//13幺
	this.HuTypePY_ShiSanYao = "13幺";
	//对对胡
	this.HuTypePY_DDHu = "对对胡";
	//天胡
	this.HuTypePY_TianHu = "天胡";
	//平胡
	this.HuTypePY_PingHu = "平胡";
	//金番
	this.HuTypePY_Jin = "金番";
	//金雀
	this.HuTypePY_JinQue = "金雀";
	//金龙
	this.HuTypePY_JinLong = "金龙";
	//花番
	this.HuTypePY_Hua = "花番";
	//一张花
	this.HuTypePY_YiZhangHua = "一张花";
	//无花无杠
	this.HuTypePY_WHuaWGang = "无花无杠";
	//混一色
	this.HuTypePY_HunYiSe = "混一色";
	//清一色
	this.HuTypePY_QingYiSe = "清一色";
	//小炸弹
	this.HuTypePY_XiaoZhaDan = "小炸弹";
	//大炸弹
	this.HuTypePY_DaZhaDan = "大炸弹";
	//超级炸弹
	this.HuTypePY_ChaoJiZhaDan = "超级炸弹";
	//金杠
	this.HuTypePY_JinGang = "金杠";
	//地胡
	this.HuTypePY_DiHu = "地胡";
	//大对碰
	this.HuTypePY_DaDuiPeng = "大对碰";
	//大三元
	this.HuTypePY_DaSanYuan = "大三元";
	//三金游
	this.HuTypePY_SanJinYou = "三金游";
	//点炮
	this.HuTypePY_DianPao = "点炮";
	//单吊
	this.HuTypePY_DanDiao = "单吊";
	//乱风
	this.HuTypePY_LuanFeng = "乱风";
	//财神头
	this.HuTypePY_CS_Tou = "财神头";
	//三财一刻
	this.HuTypePY_SC_Ke = "三财一刻";
	//十三不靠
	this.HuTypePY_SSBK = "十三不靠";
	//十三不靠清
	this.HuTypePY_SSBK_Qing = "十三不靠清";
	//屁胡
	this.HuTypePY_PiHu = "屁胡";
	//门子
	this.HuTypePY_MenZi = "门子";
	//接刀
	this.HuTypePY_JieDao = "接刀";
	//海底捞
	this.HuTypePY_HaiDiLao = "海底捞";
	//接炮
	this.HuTypePY_JiePao = "接炮";
	//八花
	this.HuTypePY_BaHua = "八花";
	//门清
	this.HuTypePY_MenQing = "门清";
	//全风
	this.HuTypePY_QuanFeng = "全风";
	//炮胡
	this.HuTypePY_PaoHu = "炮胡";
	//底分
	this.HuTypePY_DiFen = "底分";
	//闲家
	this.HuTypePY_Xian = "闲家";
	//庄家
	this.HuTypePY_Zhuang = "庄家";
	//连庄
	this.HuTypePY_LianZhuang = "连庄";
	//扎码
	this.HuTypePY_ZhaMa = "扎码";

	this.HuTypePinYinDict = {};
	this.HuTypePinYinDict["Hu"] = this.HuTypePY_Hu;
	this.HuTypePinYinDict["NotHu"] = this.HuTypePY_NotHu;
	this.HuTypePinYinDict["ZiMo"] = this.HuTypePY_ZiMo;
	this.HuTypePinYinDict["QGH"] = this.HuTypePY_QGH;
	this.HuTypePinYinDict["FHZ"] = this.HuTypePY_FHZ;
	this.HuTypePinYinDict["JieGang"] = this.HuTypePY_JieGang;
	this.HuTypePinYinDict["Gang"] = this.HuTypePY_Gang;
	this.HuTypePinYinDict["AnGang"] = this.HuTypePY_AnGang;
	this.HuTypePinYinDict["SanJinDao"] = this.HuTypePY_SanJinDao;
	this.HuTypePinYinDict["SiJinDao"] = this.HuTypePY_SiJinDao;
	this.HuTypePinYinDict["WuJinDao"] = this.HuTypePY_WuJinDao;
	this.HuTypePinYinDict["LiuJinDao"] = this.HuTypePY_LiuJinDao;
	this.HuTypePinYinDict["DanYou"] = this.HuTypePY_DanYou;
	this.HuTypePinYinDict["ShuangYou"] = this.HuTypePY_ShuangYou;
	this.HuTypePinYinDict["SanYou"] = this.HuTypePY_SanYou;
	this.HuTypePinYinDict["QiangJin"] = this.HuTypePY_QiangJin;
	this.HuTypePinYinDict["ShiSanYao"] = this.HuTypePY_ShiSanYao;
	this.HuTypePinYinDict["DDHu"] = this.HuTypePY_DDHu;
	this.HuTypePinYinDict["TianHu"] = this.HuTypePY_TianHu;
	this.HuTypePinYinDict["PingHu"] = this.HuTypePY_PingHu;
	this.HuTypePinYinDict["Jin"] = this.HuTypePY_Jin;
	this.HuTypePinYinDict["JinQue"] = this.HuTypePY_JinQue;
	this.HuTypePinYinDict["JinLong"] = this.HuTypePY_JinLong;
	this.HuTypePinYinDict["YiZhangHua"] = this.HuTypePY_YiZhangHua;
	this.HuTypePinYinDict["Hua"] = this.HuTypePY_Hua;
	this.HuTypePinYinDict["WHuaWGang"] = this.HuTypePY_WHuaWGang;
	this.HuTypePinYinDict["HYS"] = this.HuTypePY_HunYiSe;
	this.HuTypePinYinDict["QYS"] = this.HuTypePY_QingYiSe;
	this.HuTypePinYinDict["XiaoZhaDan"] = this.HuTypePY_XiaoZhaDan;
	this.HuTypePinYinDict["DaZhaDan"] = this.HuTypePY_DaZhaDan;
	this.HuTypePinYinDict["ChaoJiZhaDan"] = this.HuTypePY_ChaoJiZhaDan;
	this.HuTypePinYinDict["JinGang"] = this.HuTypePY_JinGang;
	this.HuTypePinYinDict["DiHu"] = this.HuTypePY_DiHu;
	this.HuTypePinYinDict["DaDuiPeng"] = this.HuTypePY_DaDuiPeng;
	this.HuTypePinYinDict["DaSanYuan"] = this.HuTypePY_DaSanYuan;
	this.HuTypePinYinDict["SanJinYou"] = this.HuTypePY_SanJinYou;
	this.HuTypePinYinDict["DanDiao"] = this.HuTypePY_DanDiao;
	this.HuTypePinYinDict["DianPao"] = this.HuTypePY_DianPao;
	this.HuTypePinYinDict["LuanFeng"] = this.HuTypePY_LuanFeng;
	this.HuTypePinYinDict["CS_Tou"] = this.HuTypePY_CS_Tou;
	this.HuTypePinYinDict["SC_Ke"] = this.HuTypePY_SC_Ke;
	this.HuTypePinYinDict["SSBK"] = this.HuTypePY_SSBK;
	this.HuTypePinYinDict["SSBK_Qing"] = this.HuTypePY_SSBK_Qing;
	this.HuTypePinYinDict["PiHu"] = this.HuTypePY_PiHu;
	this.HuTypePinYinDict["MenZi"] = this.HuTypePY_MenZi;
	this.HuTypePinYinDict["JieDao"] = this.HuTypePY_JieDao;
	this.HuTypePinYinDict["HaiDiLao"] = this.HuTypePY_HaiDiLao;
	this.HuTypePinYinDict["QuanFeng"] = this.HuTypePY_QuanFeng;
	this.HuTypePinYinDict["PaoHu"] = this.HuTypePY_PaoHu;
	this.HuTypePinYinDict["BaHua"] = this.HuTypePY_BaHua;
	this.HuTypePinYinDict["MenQing"] = this.HuTypePY_MenQing;
	this.HuTypePinYinDict["JiePao"] = this.HuTypePY_JiePao;
	this.HuTypePinYinDict["DiFen"] = this.HuTypePY_DiFen;
	this.HuTypePinYinDict["Xian"] = this.HuTypePY_Xian;
	this.HuTypePinYinDict["Zhuang"] = this.HuTypePY_Zhuang;
	this.HuTypePinYinDict["LianZhuang"] = this.HuTypePY_LianZhuang;
	this.HuTypePinYinDict["ZhaMa"] = this.HuTypePY_ZhaMa;
};
var LYMJ = function () {
	//参与的人数
	this.LYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LYMJRoomPaiDun = 18;
	//总的牌数量
	this.LYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LYMJRoomDealCardCount = this.LYMJRoomJoinCount * this.LYMJRoomDealPerPosCardCount;
};
var ZJJHMJ = function () {
	//参与的人数
	this.ZJJHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJJHMJRoomPaiDun = 18;
	//总的牌数量
	this.ZJJHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJJHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJJHMJRoomDealCardCount = this.ZJJHMJRoomJoinCount * this.ZJJHMJRoomDealPerPosCardCount;


	//对对胡
	this.ZJJHMJ_HuType_DaZhaDan = 1;
	//大对碰
	this.ZJJHMJ_HuType_DaDuiPeng = 2;
	//豪华对对胡
	this.ZJJHMJ_HuType_HHDDHu = 3;
	//清一色
	this.ZJJHMJ_HuType_QingYiSe = 4;
	//敲响
	this.ZJJHMJ_HuType_QiaoXiang = 5;
	//乱风
	this.ZJJHMJ_HuType_LuanFeng = 6;
	//财神头
	this.ZJJHMJ_HuType_CS_Tou = 7;
	//三财一刻
	this.ZJJHMJ_HuType_SC_Ke = 8;
	//无财
	this.ZJJHMJ_HuType_Not_Jin = 9;
	//财归1
	this.ZJJHMJ_HuType_Cai_Gui1 = 10;
	//财归2
	this.ZJJHMJ_HuType_Cai_Gui2 = 11;
	//财归3
	this.ZJJHMJ_HuType_Cai_Gui3 = 12;
	//十三不靠
	this.ZJJHMJ_HuType_SSBK = 13;
	//十三不靠七清风
	this.ZJJHMJ_HuType_SSBK_Qing = 14;
	//胡
	this.ZJJHMJ_HuType_Hu = 15;
	//全求人
	this.ZJJHMJ_HuType_QQR = 16;
	//杠爆
	this.ZJJHMJ_HuType_GangBao = 17;
	//杠上开花
	this.ZJJHMJ_HuType_GSKH = 18;
	//海底捞月
	this.ZJJHMJ_HuType_HDLY = 19;
	//地胡
	this.ZJJHMJ_HuType_DiHu = 20;
	//天胡
	this.ZJJHMJ_HuType_TianHu = 21;
	//抢杠胡
	this.ZJJHMJ_HuType_QGH = 23;

	this.ZJJHMJ_HuTypeStringDict = {};

	this.ZJJHMJ_HuTypeStringDict['DDHu'] = this.ZJJHMJ_HuType_DDHu;
	this.ZJJHMJ_HuTypeStringDict['DaDuiPeng'] = this.ZJJHMJ_HuType_DaDuiPeng;
	this.ZJJHMJ_HuTypeStringDict['HHDDHu'] = this.ZJJHMJ_HuType_HHDDHu;
	this.ZJJHMJ_HuTypeStringDict['QingYiSe'] = this.ZJJHMJ_HuType_QingYiSe;
	this.ZJJHMJ_HuTypeStringDict['QiaoXiang'] = this.ZJJHMJ_HuType_QiaoXiang;
	this.ZJJHMJ_HuTypeStringDict['LuanFeng'] = this.ZJJHMJ_HuType_LuanFeng;
	this.ZJJHMJ_HuTypeStringDict['CS_Tou'] = this.ZJJHMJ_HuType_CS_Tou;
	this.ZJJHMJ_HuTypeStringDict['SC_Ke'] = this.ZJJHMJ_HuType_SC_Ke;
	this.ZJJHMJ_HuTypeStringDict['Not_Jin'] = this.ZJJHMJ_HuType_Not_Jin;
	this.ZJJHMJ_HuTypeStringDict['Cai_Gui1'] = this.ZJJHMJ_HuType_Cai_Gui1;
	this.ZJJHMJ_HuTypeStringDict['Cai_Gui2'] = this.ZJJHMJ_HuType_Cai_Gui2;
	this.ZJJHMJ_HuTypeStringDict['Cai_Gui3'] = this.ZJJHMJ_HuType_Cai_Gui3;
	this.ZJJHMJ_HuTypeStringDict['SSBK'] = this.ZJJHMJ_HuType_SSBK;
	this.ZJJHMJ_HuTypeStringDict['SSBK_Qing'] = this.ZJJHMJ_HuType_SSBK_Qing;
	this.ZJJHMJ_HuTypeStringDict['Hu'] = this.ZJJHMJ_HuType_Hu;
	this.ZJJHMJ_HuTypeStringDict['QQR'] = this.ZJJHMJ_HuType_QQR;
	this.ZJJHMJ_HuTypeStringDict['GangBao'] = this.ZJJHMJ_HuType_GangBao;
	this.ZJJHMJ_HuTypeStringDict['GSKH'] = this.ZJJHMJ_HuType_GSKH;
	this.ZJJHMJ_HuTypeStringDict['HDLY'] = this.ZJJHMJ_HuType_HDLY;
	this.ZJJHMJ_HuTypeStringDict['DiHu'] = this.ZJJHMJ_HuType_DiHu;
	this.ZJJHMJ_HuTypeStringDict['TianHu'] = this.ZJJHMJ_HuType_TianHu;
	this.ZJJHMJ_HuTypeStringDict['QGH'] = this.ZJJHMJ_HuType_QGH;
};
var HBYXMJ = function () {
	//参与的人数
	this.HBYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HBYXMJRoomPaiDun = 13;
	//总的牌数量
	this.HBYXMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HBYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HBYXMJRoomDealCardCount = this.HBYXMJRoomJoinCount * this.HBYXMJRoomDealPerPosCardCount;
};
var XMMJ = function () {
	//参与的人数
	this.XMMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XMMJRoomPaiDun = 16;
	//总的牌数量
	this.XMMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XMMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.XMMJRoomDealCardCount = this.XMMJRoomJoinCount * this.XMMJRoomDealPerPosCardCount;
};
var XYMJ = function () {
	//参与的人数
	this.XYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XYMJRoomPaiDun = 18;
	//总的牌数量
	this.XYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XYMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.XYMJRoomDealCardCount = this.XYMJRoomJoinCount * this.XYMJRoomDealPerPosCardCount;
};
var FZMJ = function () {
	//参与的人数
	this.FZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FZMJRoomPaiDun = 18;
	//总的牌数量
	this.FZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.FZMJRoomDealCardCount = this.FZMJRoomJoinCount * this.FZMJRoomDealPerPosCardCount;
};
var SMMJ = function () {
	//参与的人数
	this.SMMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SMMJRoomPaiDun = 18;
	//总的牌数量
	this.SMMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SMMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.SMMJRoomDealCardCount = this.SMMJRoomJoinCount * this.SMMJRoomDealPerPosCardCount;
};
var QZMJ = function () {
	//参与的人数
	this.QZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.QZMJRoomPaiDun = 18;
	//总的牌数量
	this.QZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.QZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.QZMJRoomDealCardCount = this.QZMJRoomJoinCount * this.QZMJRoomDealPerPosCardCount;
};

var NAMJ = function () {
	//参与的人数
	this.NAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NAMJRoomPaiDun = 18;
	//总的牌数量
	this.NAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NAMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.NAMJRoomDealCardCount = this.NAMJRoomJoinCount * this.NAMJRoomDealPerPosCardCount;
};

var SSMJ = function () {
	//参与的人数
	this.SSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SSMJRoomPaiDun = 18;
	//总的牌数量
	this.SSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SSMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.SSMJRoomDealCardCount = this.SSMJRoomJoinCount * this.SSMJRoomDealPerPosCardCount;
};

var ZZMJ = function () {
	//参与的人数
	this.ZZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZZMJRoomPaiDun = 18;
	//总的牌数量
	this.ZZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.ZZMJRoomDealCardCount = this.ZZMJRoomJoinCount * this.ZZMJRoomDealPerPosCardCount;
};
var PTMJ = function () {
	//参与的人数
	this.PTMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PTMJRoomPaiDun = 18;
	//总的牌数量
	this.PTMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PTMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.PTMJRoomDealCardCount = this.PTMJRoomJoinCount * this.PTMJRoomDealPerPosCardCount;
};
var NDMJ = function () {
	//参与的人数
	this.NDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NDMJRoomPaiDun = 18;
	//总的牌数量
	this.NDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NDMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.NDMJRoomDealCardCount = this.NDMJRoomJoinCount * this.NDMJRoomDealPerPosCardCount;
};
var NPMJ = function () {
	//参与的人数
	this.NPMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NPMJRoomPaiDun = 13;
	//总的牌数量
	this.NPMJRoomAllCardCount = 108;
	//发牌阶段每个人领取卡牌数量
	this.NPMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NPMJRoomDealCardCount = this.NPMJRoomJoinCount * this.NPMJRoomDealPerPosCardCount;
};
var PT13MJ = function () {
	//参与的人数
	this.PT13MJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PT13MJRoomPaiDun = 13;
	//总的牌数量
	this.PT13MJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PT13MJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PT13MJRoomDealCardCount = this.PT13MJRoomJoinCount * this.PT13MJRoomDealPerPosCardCount;
};
var ZJMJ = function () {
	//参与的人数
	this.ZJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJMJRoomPaiDun = 13;
	//总的牌数量
	this.ZJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJMJRoomDealCardCount = this.ZJMJRoomJoinCount * this.ZJMJRoomDealPerPosCardCount;
};
var YGMJ = function () {
	//参与的人数
	this.YGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YGMJRoomPaiDun = 13;
	//总的牌数量
	this.YGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YGMJRoomDealCardCount = this.YGMJRoomJoinCount * this.YGMJRoomDealPerPosCardCount;
};
var WZMJ = function () {
	//参与的人数
	this.WZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WZMJRoomPaiDun = 13;
	//总的牌数量
	this.WZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WZMJRoomDealCardCount = this.WZMJRoomJoinCount * this.WZMJRoomDealPerPosCardCount;
};
var HNZZMJ = function () {
	//参与的人数
	this.HNZZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNZZMJRoomPaiDun = 13;
	//总的牌数量
	this.HNZZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNZZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNZZMJRoomDealCardCount = this.HNZZMJRoomJoinCount * this.HNZZMJRoomDealPerPosCardCount;
};
var NJLHMJ = function () {
	//参与的人数
	this.NJLHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NJLHMJRoomPaiDun = 13;
	//总的牌数量
	this.NJLHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NJLHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NJLHMJRoomDealCardCount = this.NJLHMJRoomJoinCount * this.NJLHMJRoomDealPerPosCardCount;
};
var ZA13MJ = function () {
	//参与的人数
	this.ZA13MJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZA13MJRoomPaiDun = 13;
	//总的牌数量
	this.ZA13MJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.ZA13MJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZA13MJRoomDealCardCount = this.ZA13MJRoomJoinCount * this.ZA13MJRoomDealPerPosCardCount;
};
var ZA16MJ = function () {
	//参与的人数
	this.ZA16MJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZA16MJRoomPaiDun = 16;
	//总的牌数量
	this.ZA16MJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.ZA16MJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.ZA16MJRoomDealCardCount = this.ZA16MJRoomJoinCount * this.ZA16MJRoomDealPerPosCardCount;
};
var ZASS = function () {
	//参与的人数
	this.ZASSRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZASSRoomPaiDun = 20;
	//总的牌数量
	this.ZASSRoomAllCardCount = 112;
	//发牌阶段每个人领取卡牌数量
	this.ZASSRoomDealPerPosCardCount = 21;
	//发出去的牌数量
	this.ZASSRoomDealCardCount = this.ZASSRoomJoinCount * this.ZASSRoomDealPerPosCardCount;
};
var YCMJ = function () {
	//参与的人数
	this.YCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YCMJRoomPaiDun = 13;
	//总的牌数量
	this.YCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YCMJRoomDealCardCount = this.YCMJRoomJoinCount * this.YCMJRoomDealPerPosCardCount;
};
var HZMJ = function () {
	//参与的人数
	this.HZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HZMJRoomPaiDun = 13;
	//总的牌数量
	this.HZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HZMJRoomDealCardCount = this.HZMJRoomJoinCount * this.HZMJRoomDealPerPosCardCount;
};
var LBHZMJ = function () {
	//参与的人数
	this.LBHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LBHZMJRoomPaiDun = 13;
	//总的牌数量
	this.LBHZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LBHZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LBHZMJRoomDealCardCount = this.LBHZMJRoomJoinCount * this.LBHZMJRoomDealPerPosCardCount;
};

var WNMJ = function () {
	//参与的人数
	this.WNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WNMJRoomPaiDun = 13;
	//总的牌数量
	this.WNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WNMJRoomDealCardCount = this.WNMJRoomJoinCount * this.WNMJRoomDealPerPosCardCount;
};
var WNYH = function () {
	//参与的人数
	this.WNYHRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WNYHRoomPaiDun = 13;
	//总的牌数量
	this.WNYHRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WNYHRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WNYHRoomDealCardCount = this.WNYHRoomJoinCount * this.WNYHRoomDealPerPosCardCount;
};

var PXZZMJ = function () {
	//参与的人数
	this.PXZZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PXZZMJRoomPaiDun = 13;
	//总的牌数量
	this.PXZZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PXZZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PXZZMJRoomDealCardCount = this.PXZZMJRoomJoinCount * this.PXZZMJRoomDealPerPosCardCount;
};
var PX258MJ = function () {
	//参与的人数
	this.PX258MJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PX258MJRoomPaiDun = 13;
	//总的牌数量
	this.PX258MJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PX258MJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PX258MJRoomDealCardCount = this.PX258MJRoomJoinCount * this.PX258MJRoomDealPerPosCardCount;
};
var JSYZMJ = function () {
	//参与的人数
	this.JSYZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSYZMJRoomPaiDun = 13;
	//总的牌数量
	this.JSYZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSYZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSYZMJRoomDealCardCount = this.JSYZMJRoomJoinCount * this.JSYZMJRoomDealPerPosCardCount;
};
var LPMJ = function () {
	//参与的人数
	this.LPMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LPMJRoomPaiDun = 13;
	//总的牌数量
	this.LPMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LPMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LPMJRoomDealCardCount = this.LPMJRoomJoinCount * this.LPMJRoomDealPerPosCardCount;
};
var XLQMJ = function () {
	//参与的人数
	this.XLQMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XLQMJRoomPaiDun = 13;
	//总的牌数量
	this.XLQMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XLQMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XLQMJRoomDealCardCount = this.XLQMJRoomJoinCount * this.XLQMJRoomDealPerPosCardCount;
};
var YTMJ = function () {
	//参与的人数
	this.YTMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YTMJRoomPaiDun = 13;
	//总的牌数量
	this.YTMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YTMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YTMJMJRoomDealCardCount = this.YTMJRoomJoinCount * this.YTMJRoomDealPerPosCardCount;
};
var QDMJ = function () {
	//参与的人数
	this.QDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.QDMJRoomPaiDun = 13;
	//总的牌数量
	this.QDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.QDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.QDMJMJRoomDealCardCount = this.QDMJRoomJoinCount * this.QDMJRoomDealPerPosCardCount;
};
var YXMJ = function () {
	//参与的人数
	this.YXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YXMJRoomPaiDun = 13;
	//总的牌数量
	this.YXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YXMJMJRoomDealCardCount = this.YXMJRoomJoinCount * this.YXMJRoomDealPerPosCardCount;
};
var YXTDH = function () {
	//参与的人数
	this.YXTDHRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YXTDHRoomPaiDun = 13;
	//总的牌数量
	this.YXTDHRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YXTDHRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YXTDHRoomDealCardCount = this.YXTDHRoomJoinCount * this.YXTDHRoomDealPerPosCardCount;
};
var HBMJ = function () {
	//断门类型
	this.HBMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.HBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HBMJRoomPaiDun = 13;
	//总的牌数量
	this.HBMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HBMJRoomDealCardCount = this.HBMJRoomJoinCount * this.HBMJRoomDealPerPosCardCount;
};
var BDYXMJ = function () {
	//断门类型
	this.BDYXMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.BDYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BDYXMJRoomPaiDun = 13;
	//总的牌数量
	this.BDYXMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.BDYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BDYXMJRoomDealCardCount = this.BDYXMJRoomJoinCount * this.BDYXMJRoomDealPerPosCardCount;
};
var HNXYMJ = function () {
	//参与的人数
	this.HNXYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNXYMJRoomPaiDun = 13;
	//总的牌数量
	this.HNXYMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HNXYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNXYMJRoomDealCardCount = this.HNXYMJRoomJoinCount * this.HNXYMJRoomDealPerPosCardCount;
};
var TCMJ = function () {
	//参与的人数
	this.TCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TCMJRoomPaiDun = 13;
	//总的牌数量
	this.TCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TCMJRoomDealCardCount = this.TCMJRoomJoinCount * this.TCMJRoomDealPerPosCardCount;
};
var PBYHMJ = function () {
	//断门类型
	this.PBYHMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.PBYHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PBYHMJRoomPaiDun = 13;
	//总的牌数量
	this.PBYHMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.PBYHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PBYHMJRoomDealCardCount = this.PBYHMJRoomJoinCount * this.PBYHMJRoomDealPerPosCardCount;
};
var SDFJMJ = function () {
	//断门类型
	this.SDFJMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.SDFJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SDFJMJRoomPaiDun = 13;
	//总的牌数量
	this.SDFJMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.SDFJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SDFJMJRoomDealCardCount = this.SDFJMJRoomJoinCount * this.SDFJMJRoomDealPerPosCardCount;
};
var PNYHMJ = function () {
	//断门类型
	this.PNYHMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.PNYHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PNYHMJRoomPaiDun = 13;
	//总的牌数量
	this.PNYHMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.PNYHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PNYHMJRoomDealCardCount = this.PNYHMJRoomJoinCount * this.PNYHMJRoomDealPerPosCardCount;
};
var YHZMJ = function () {
	//断门类型
	this.YHZMJDingQue = {"Not": 0, "Wan": 1, "Tiao": 2, "Tong": 3};
	//参与的人数
	this.YHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YHZMJRoomPaiDun = 13;
	//总的牌数量
	this.YHZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.YHZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YHZMJRoomDealCardCount = this.YHZMJRoomJoinCount * this.YHZMJRoomDealPerPosCardCount;
};
var BDMJ = function () {
	//参与的人数
	this.BDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BDMJRoomPaiDun = 13;
	//总的牌数量
	this.BDMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.BDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BDMJRoomDealCardCount = this.BDMJRoomJoinCount * this.BDMJRoomDealPerPosCardCount;
};
var DYMJ = function () {
	//参与的人数
	this.DYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DYMJRoomPaiDun = 13;
	//总的牌数量
	this.DYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DYMJRoomDealCardCount = this.DYMJRoomJoinCount * this.DYMJRoomDealPerPosCardCount;
};
var SYMJ = function () {
	//参与的人数
	this.SYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SYMJRoomPaiDun = 13;
	//总的牌数量
	this.SYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SYMJRoomDealCardCount = this.SYMJRoomJoinCount * this.SYMJRoomDealPerPosCardCount;
};
var YCMJ = function () {
	//参与的人数
	this.YCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YCMJRoomPaiDun = 13;
	//总的牌数量
	this.YCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YCMJRoomDealCardCount = this.YCMJRoomJoinCount * this.YCMJRoomDealPerPosCardCount;
};
var FDMJ = function () {
	//参与的人数
	this.FDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FDMJRoomPaiDun = 18;
	//总的牌数量
	this.FDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FDMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.FDMJRoomDealCardCount = this.FDMJRoomJoinCount * this.FDMJRoomDealPerPosCardCount;
};
var ZPMJ = function () {
	//参与的人数
	this.ZPMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZPMJRoomPaiDun = 18;
	//总的牌数量
	this.ZPMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZPMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.ZPMJRoomDealCardCount = this.ZPMJRoomJoinCount * this.ZPMJRoomDealPerPosCardCount;
};
var TDHMJ = function () {
	//参与的人数
	this.TDHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TDHMJRoomPaiDun = 18;
	//总的牌数量
	this.TDHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TDHMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.TDHMJRoomDealCardCount = this.TDHMJRoomJoinCount * this.TDHMJRoomDealPerPosCardCount;
};
var DX = function () {
	//参与的人数
	this.DXRoomJoinCount = 8;
	//每个人前面牌蹲数量
	this.DXRoomPaiDun = 2;
	//总的牌数量
	this.DXRoomAllCardCount = 32;
	//发牌阶段每个人领取卡牌数量
	this.DXRoomDealPerPosCardCount = 2;
	//发出去的牌数量
	this.DXRoomDealCardCount = this.DXRoomJoinCount * this.DXRoomDealPerPosCardCount;
};
var AYMJ = function () {
	//参与的人数
	this.AYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.AYMJRoomPaiDun = 13;
	//总的牌数量
	this.AYMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.AYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.AYMJRoomDealCardCount = this.AYMJRoomJoinCount * this.AYMJRoomDealPerPosCardCount;
};
var SGMJ = function () {
	//参与的人数
	this.SGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SGMJRoomPaiDun = 13;
	//总的牌数量
	this.SGMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.SGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SGMJRoomDealCardCount = this.SGMJRoomJoinCount * this.SGMJRoomDealPerPosCardCount;
};
var NAMJ = function () {
	//参与的人数
	this.NAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NAMJRoomPaiDun = 18;
	//总的牌数量
	this.NAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NAMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.NAMJRoomDealCardCount = this.NAMJRoomJoinCount * this.NAMJRoomDealPerPosCardCount;
};
var TZMJ = function () {
	//参与的人数
	this.TZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TZMJRoomPaiDun = 13;
	//总的牌数量
	this.TZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.TZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TZMJRoomDealCardCount = this.TZMJRoomJoinCount * this.TZMJRoomDealPerPosCardCount;
};
var NHMJ = function () {
	//参与的人数
	this.NHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NHMJRoomPaiDun = 18;
	//总的牌数量
	this.NHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NHMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.NHMJRoomDealCardCount = this.NHMJRoomJoinCount * this.NHMJRoomDealPerPosCardCount;
};
var ZJQZMJ = function () {
	//参与的人数
	this.ZJQZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJQZMJRoomPaiDun = 13;
	//总的牌数量
	this.ZJQZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.ZJQZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJQZMJRoomDealCardCount = this.ZJQZMJRoomJoinCount * this.ZJQZMJRoomDealPerPosCardCount;
};
var JXFZMJ = function () {
	//参与的人数
	this.JXFZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JXFZMJRoomPaiDun = 13;
	//总的牌数量
	this.JXFZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.JXFZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JXFZMJRoomDealCardCount = this.JXFZMJRoomJoinCount * this.JXFZMJRoomDealPerPosCardCount;
};
var HNCSMJ = function () {
	//参与的人数
	this.HNCSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNCSMJRoomPaiDun = 13;
	//总的牌数量
	this.HNCSMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HNCSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNCSMJRoomDealCardCount = this.HNCSMJRoomJoinCount * this.HNCSMJRoomDealPerPosCardCount;
};
var HAMJ = function () {
	//参与的人数
	this.HAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HAMJRoomPaiDun = 13;
	//总的牌数量
	this.HAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HAMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HAMJRoomDealCardCount = this.HAMJRoomJoinCount * this.HAMJRoomDealPerPosCardCount;
};
var JMHHMJ = function () {
	//参与的人数
	this.JMHHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JMHHMJRoomPaiDun = 13;
	//总的牌数量
	this.JMHHMJRoomAllCardCount = 112;
	//发牌阶段每个人领取卡牌数量
	this.JMHHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JMHHMJRoomDealCardCount = this.JMHHMJRoomJoinCount * this.JMHHMJRoomDealPerPosCardCount;
};
var CHMJ = function () {
	//参与的人数
	this.CHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CHMJRoomPaiDun = 13;
	//总的牌数量
	this.CHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CHMJRoomDealCardCount = this.CHMJRoomJoinCount * this.CHMJRoomDealPerPosCardCount;
};
var TWMJ = function () {
	//参与的人数
	this.TWMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TWMJRoomPaiDun = 16;
	//总的牌数量
	this.TWMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.TWMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.TWMJRoomDealCardCount = this.TWMJRoomJoinCount * this.TWMJRoomDealPerPosCardCount;
};
var TZKZMJ = function () {
	//参与的人数
	this.TZKZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TZKZMJRoomPaiDun = 13;
	//总的牌数量
	this.TZKZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TZKZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TZKZMJRoomDealCardCount = this.TZKZMJRoomJoinCount * this.TZKZMJRoomDealPerPosCardCount;
};
var DCZBMJ = function () {
	//参与的人数
	this.DCZBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DCZBMJRoomPaiDun = 13;
	//总的牌数量
	this.DCZBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DCZBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DCZBMJRoomDealCardCount = this.DCZBMJRoomJoinCount * this.DCZBMJRoomDealPerPosCardCount;
};
var DCWDMJ = function () {
	//参与的人数
	this.DCWDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DCWDMJRoomPaiDun = 13;
	//总的牌数量
	this.DCWDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DCWDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DCWDMJRoomDealCardCount = this.DCWDMJRoomJoinCount * this.DCWDMJRoomDealPerPosCardCount;
};
var XHMJ = function () {
	//参与的人数
	this.XHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XHMJRoomPaiDun = 13;
	//总的牌数量
	this.XHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XHMJRoomDealCardCount = this.XHMJRoomJoinCount * this.XHMJRoomDealPerPosCardCount;
};
var XHBBMJ = function () {
	//参与的人数
	this.XHBBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XHBBMJRoomPaiDun = 13;
	//总的牌数量
	this.XHBBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XHBBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XHBBMJRoomDealCardCount = this.XHBBMJRoomJoinCount * this.XHBBMJRoomDealPerPosCardCount;
};
var TBZFBMJ = function () {
	//参与的人数
	this.TBZFBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TBZFBMJRoomPaiDun = 13;
	//总的牌数量
	this.TBZFBMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.TBZFBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TBZFBMJRoomDealCardCount = this.TBZFBMJRoomJoinCount * this.TBZFBMJRoomDealPerPosCardCount;
};
var NYKWXMJ = function () {
	//参与的人数
	this.NYKWXMJRoomJoinCount = 3;
	//每个人前面牌蹲数量
	this.NYKWXMJRoomPaiDun = 13;
	//总的牌数量
	this.NYKWXMJRoomAllCardCount = 84;
	//发牌阶段每个人领取卡牌数量
	this.NYKWXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NYKWXMJRoomDealCardCount = this.NYKWXMJRoomJoinCount * this.NYKWXMJRoomDealPerPosCardCount;
};
var XGKWXMJ = function () {
	//参与的人数
	this.XGKWXMJRoomJoinCount = 3;
	//每个人前面牌蹲数量
	this.XGKWXMJRoomPaiDun = 13;
	//总的牌数量
	this.XGKWXMJRoomAllCardCount = 84;
	//发牌阶段每个人领取卡牌数量
	this.XGKWXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XGKWXMJRoomDealCardCount = this.XGKWXMJRoomJoinCount * this.XGKWXMJRoomDealPerPosCardCount;
};
var HNXCMJ = function () {
	//参与的人数
	this.HNXCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNXCMJRoomPaiDun = 13;
	//总的牌数量
	this.HNXCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNXCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNXCMJRoomDealCardCount = this.HNXCMJRoomJoinCount * this.HNXCMJRoomDealPerPosCardCount;
};
var LZMJ = function () {
	//参与的人数
	this.LZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LZMJRoomPaiDun = 13;
	//总的牌数量
	this.LZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LZMJRoomDealCardCount = this.LZMJRoomJoinCount * this.LZMJRoomDealPerPosCardCount;
};
var JNMJ = function () {
	//参与的人数
	this.JNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JNMJRoomPaiDun = 13;
	//总的牌数量
	this.JNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JNMJRoomDealCardCount = this.JNMJRoomJoinCount * this.JNMJRoomDealPerPosCardCount;
};
var FJYXMJ = function () {
	//参与的人数
	this.FJYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FJYXMJRoomPaiDun = 13;
	//总的牌数量
	this.FJYXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FJYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.FJYXMJRoomDealCardCount = this.FJYXMJRoomJoinCount * this.FJYXMJRoomDealPerPosCardCount;
};
var BYZP = function () {
	//参与的人数
	this.BYZPRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BYZPRoomPaiDun = 13;
	//总的牌数量
	this.BYZPRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.BYZPRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BYZPRoomDealCardCount = this.BYZPRoomJoinCount * this.BYZPRoomDealPerPosCardCount;
};
var HHHGW = function () {
	//参与的人数
	this.HHHGWRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HHHGWRoomPaiDun = 13;
	//总的牌数量
	this.HHHGWRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HHHGWRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HHHGWRoomDealCardCount = this.HHHGWRoomJoinCount * this.HHHGWRoomDealPerPosCardCount;
};
var XPPHZ = function () {
	//参与的人数
	this.XPPHZRoomJoinCount = 3;
	//每个人前面牌蹲数量
	this.XPPHZRoomPaiDun = 13;
	//总的牌数量
	this.XPPHZRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XPPHZRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XPPHZRoomDealCardCount = this.XPPHZRoomJoinCount * this.XPPHZRoomDealPerPosCardCount;
};
var PXPHZ = function () {
	//参与的人数
	this.PXPHZRoomJoinCount = 3;
	//每个人前面牌蹲数量
	this.PXPHZRoomPaiDun = 13;
	//总的牌数量
	this.PXPHZRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PXPHZRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PXPHZRoomDealCardCount = this.PXPHZRoomJoinCount * this.PXPHZRoomDealPerPosCardCount;
};
var ZJQZSK = function () {
	//参与的人数
	this.ZJQZSKRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJQZSKRoomPaiDun = 13;
	//总的牌数量
	this.ZJQZSKRoomAllCardCount = 108;
	//发牌阶段每个人领取卡牌数量
	this.ZJQZSKRoomDealPerPosCardCount = 27;
	//发出去的牌数量
	this.ZJQZSKRoomDealCardCount = this.ZJQZSKRoomJoinCount * this.ZJQZSKRoomDealPerPosCardCount;
};
var NPGZMJ = function () {
	//参与的人数
	this.NPGZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NPGZMJRoomPaiDun = 13;
	//总的牌数量
	this.NPGZMJRoomAllCardCount = 108;
	//发牌阶段每个人领取卡牌数量
	this.NPGZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NPGZMJRoomDealCardCount = this.NPGZMJRoomJoinCount * this.NPGZMJRoomDealPerPosCardCount;
};
var HSMJ = function () {
	//参与的人数
	this.HSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HSMJRoomPaiDun = 13;
	//总的牌数量
	this.HSMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HSMJRoomDealCardCount = this.HSMJRoomJoinCount * this.HSMJRoomDealPerPosCardCount;
};
var SDLYMJ = function () {
	//参与的人数
	this.SDLYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SDLYMJRoomPaiDun = 13;
	//总的牌数量
	this.SDLYMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.SDLYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SDLYMJRoomDealCardCount = this.SDLYMJRoomJoinCount * this.SDLYMJRoomDealPerPosCardCount;
};
var CZMJ = function () {
	//参与的人数
	this.CZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CZMJRoomPaiDun = 13;
	//总的牌数量
	this.CZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.CZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CZMJRoomDealCardCount = this.CZMJRoomJoinCount * this.CZMJRoomDealPerPosCardCount;
};
var YZMJ = function () {
	//参与的人数
	this.YZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YZMJRoomPaiDun = 13;
	//总的牌数量
	this.YZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.YZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YZMJRoomDealCardCount = this.YZMJRoomJoinCount * this.YZMJRoomDealPerPosCardCount;
};
var SRMJ = function () {
	//参与的人数
	this.SRMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SRMJRoomPaiDun = 13;
	//总的牌数量
	this.SRMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.SRMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SRMJRoomDealCardCount = this.SRMJRoomJoinCount * this.SRMJRoomDealPerPosCardCount;
};
var LBMJ = function () {
	//参与的人数
	this.LBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LBMJRoomPaiDun = 13;
	//总的牌数量
	this.LBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LBMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.LBMJRoomDealCardCount = this.LBMJRoomJoinCount * this.LBMJRoomDealPerPosCardCount;
};
var RQMJ = function () {
	//参与的人数
	this.RQMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.RQMJRoomPaiDun = 13;
	//总的牌数量
	this.RQMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.RQMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.RQMJRoomDealCardCount = this.RQMJRoomJoinCount * this.RQMJRoomDealPerPosCardCount;
};
var CSMJ = function () {
	//参与的人数
	this.CSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CSMJRoomPaiDun = 13;
	//总的牌数量
	this.CSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CSMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.CSMJRoomDealCardCount = this.CSMJRoomJoinCount * this.CSMJRoomDealPerPosCardCount;
};
var XPLP = function () {
	//参与的人数
	this.XPLPRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XPLPRoomPaiDun = 14;
	//总的牌数量
	this.XPLPRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XPLPRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.XPLPRoomDealCardCount = this.XPLPRoomJoinCount * this.XPLPRoomDealPerPosCardCount;
};
var HZWMJ = function () {
	//参与的人数
	this.HZWMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HZWMJRoomPaiDun = 13;
	//总的牌数量
	this.HZWMJRoomAllCardCount = 112;
	//发牌阶段每个人领取卡牌数量
	this.HZWMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HZWMJRoomDealCardCount = this.HZWMJRoomJoinCount * this.HZWMJRoomDealPerPosCardCount;
};
var XTMJ = function () {
	//参与的人数
	this.XTMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XTMJRoomPaiDun = 13;
	//总的牌数量
	this.XTMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.XTMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XTMJRoomDealCardCount = this.XTMJRoomJoinCount * this.XTMJRoomDealPerPosCardCount;
};

var RCMJ = function () {
	//参与的人数
	this.RCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.RCMJRoomPaiDun = 13;
	//总的牌数量
	this.RCMJRoomAllCardCount = 112;
	//发牌阶段每个人领取卡牌数量
	this.RCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.RCMJRoomDealCardCount = this.RCMJRoomJoinCount * this.RCMJRoomDealPerPosCardCount;
};

var JDZMJ = function () {
	//参与的人数
	this.JDZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JDZMJRoomPaiDun = 13;
	//总的牌数量
	this.JDZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JDZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JDZMJRoomDealCardCount = this.JDZMJRoomJoinCount * this.JDZMJRoomDealPerPosCardCount;
};

var BZMJ = function () {
	//参与的人数
	this.BZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BZMJRoomPaiDun = 13;
	//总的牌数量
	this.BZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.BZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BZMJRoomDealCardCount = this.BZMJRoomJoinCount * this.BZMJRoomDealPerPosCardCount;
};
var BZTDH = function () {
	//参与的人数
	this.BZTDHRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BZTDHRoomPaiDun = 13;
	//总的牌数量
	this.BZTDHRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.BZTDHRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BZTDHRoomDealCardCount = this.BZTDHRoomJoinCount * this.BZTDHRoomDealPerPosCardCount;
};
var GYZJMJ = function () {
	//参与的人数
	this.GYZJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GYZJMJRoomPaiDun = 13;
	//总的牌数量
	this.GYZJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GYZJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GYZJMJRoomDealCardCount = this.GYZJMJRoomJoinCount * this.GYZJMJRoomDealPerPosCardCount;
};
var DTLGFMJ = function () {
	//参与的人数
	this.DTLGFMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DTLGFMJRoomPaiDun = 13;
	//总的牌数量
	this.DTLGFMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DTLGFMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DTLGFMJRoomDealCardCount = this.DTLGFMJRoomJoinCount * this.DTLGFMJRoomDealPerPosCardCount;
};
var SHQMMJ = function () {
	//参与的人数
	this.SHQMMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SHQMMJRoomPaiDun = 13;
	//总的牌数量
	this.SHQMMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SHQMMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SHQMMJRoomDealCardCount = this.SHQMMJRoomJoinCount * this.SHQMMJRoomDealPerPosCardCount;
};
var JSTDHMJ = function () {
	//参与的人数
	this.JSTDHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSTDHMJRoomPaiDun = 13;
	//总的牌数量
	this.JSTDHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSTDHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSTDHMJRoomDealCardCount = this.JSTDHMJRoomJoinCount * this.JSTDHMJRoomDealPerPosCardCount;
};
var ZGMJ = function () {
	//参与的人数
	this.ZGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZGMJRoomPaiDun = 13;
	//总的牌数量
	this.ZGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZGMJRoomDealCardCount = this.ZGMJRoomJoinCount * this.ZGMJRoomDealPerPosCardCount;
};
var NBMJ = function () {
	//参与的人数
	this.NBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NBMJRoomPaiDun = 13;
	//总的牌数量
	this.NBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NBMJRoomDealCardCount = this.NBMJRoomJoinCount * this.NBMJRoomDealPerPosCardCount;
};
var SWMJ = function () {
	//参与的人数
	this.SWMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SWMJRoomPaiDun = 13;
	//总的牌数量
	this.SWMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SWMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SWMJRoomDealCardCount = this.SWMJRoomJoinCount * this.SWMJRoomDealPerPosCardCount;
};
var GDJYMJ = function () {
	//参与的人数
	this.GDJYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GDJYMJRoomPaiDun = 13;
	//总的牌数量
	this.GDJYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GDJYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GDJYMJRoomDealCardCount = this.GDJYMJRoomJoinCount * this.GDJYMJRoomDealPerPosCardCount;
};
var SQMJ = function () {
	//参与的人数
	this.SQMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SQMJRoomPaiDun = 13;
	//总的牌数量
	this.SQMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SQMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SQMJRoomDealCardCount = this.SQMJRoomJoinCount * this.SQMJRoomDealPerPosCardCount;
};
var JYMJ = function () {
	//参与的人数
	this.JYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JYMJRoomPaiDun = 13;
	//总的牌数量
	this.JYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JYMJRoomDealCardCount = this.JYMJRoomJoinCount * this.JYMJRoomDealPerPosCardCount;
};
var HTMJ = function () {
	//参与的人数
	this.HTMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HTMJRoomPaiDun = 13;
	//总的牌数量
	this.HTMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HTMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HTMJRoomDealCardCount = this.HTMJRoomJoinCount * this.HTMJRoomDealPerPosCardCount;
};
var THGJMJ = function () {
	//参与的人数
	this.THGJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.THGJMJRoomPaiDun = 13;
	//总的牌数量
	this.THGJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.THGJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.THGJMJRoomDealCardCount = this.THGJMJRoomJoinCount * this.THGJMJRoomDealPerPosCardCount;
};
var HNPDSMJ = function () {
	//参与的人数
	this.HNPDSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNPDSMJRoomPaiDun = 13;
	//总的牌数量
	this.HNPDSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNPDSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNPDSMJRoomDealCardCount = this.HNPDSMJRoomJoinCount * this.HNPDSMJRoomDealPerPosCardCount;
};
var JSXYMJ = function () {
	//参与的人数
	this.JSXYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSXYMJRoomPaiDun = 13;
	//总的牌数量
	this.JSXYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSXYMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.JSXYMJRoomDealCardCount = this.JSXYMJRoomJoinCount * this.JSXYMJRoomDealPerPosCardCount;
};
var PZMJ = function () {
	//参与的人数
	this.PZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PZMJRoomPaiDun = 13;
	//总的牌数量
	this.PZMJRoomAllCardCount = 120;
	//发牌阶段每个人领取卡牌数量
	this.PZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PZMJRoomDealCardCount = this.PZMJRoomJoinCount * this.PZMJRoomDealPerPosCardCount;
};
var HNJYMJ = function () {
	//参与的人数
	this.HNJYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNJYMJRoomPaiDun = 13;
	//总的牌数量
	this.HNJYMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HNJYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNJYMJRoomDealCardCount = this.HNJYMJRoomJoinCount * this.HNJYMJRoomDealPerPosCardCount;
};
var JSYCMJ = function () {
	//参与的人数
	this.JSYCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSYCMJRoomPaiDun = 13;
	//总的牌数量
	this.JSYCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSYCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSYCMJRoomDealCardCount = this.JSYCMJRoomJoinCount * this.JSYCMJRoomDealPerPosCardCount;
};
var JSSQMJ = function () {
	//参与的人数
	this.JSSQMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSSQMJRoomPaiDun = 13;
	//总的牌数量
	this.JSSQMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSSQMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSSQMJRoomDealCardCount = this.JSSQMJRoomJoinCount * this.JSSQMJRoomDealPerPosCardCount;
};
var JSHAMJ = function () {
	//参与的人数
	this.JSHAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSHAMJRoomPaiDun = 13;
	//总的牌数量
	this.JSHAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSHAMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSHAMJRoomDealCardCount = this.JSHAMJRoomJoinCount * this.JSHAMJRoomDealPerPosCardCount;
};
var WXMJ = function () {
	//参与的人数
	this.WXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WXMJRoomPaiDun = 13;
	//总的牌数量
	this.WXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WXMJRoomDealCardCount = this.WXMJRoomJoinCount * this.WXMJRoomDealPerPosCardCount;
};
var LYGMJ = function () {
	//参与的人数
	this.LYGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LYGMJRoomPaiDun = 13;
	//总的牌数量
	this.LYGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LYGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LYGMJRoomDealCardCount = this.LYGMJRoomJoinCount * this.LYGMJRoomDealPerPosCardCount;
};
var JSCZMJ = function () {
	//参与的人数
	this.JSCZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSCZMJRoomPaiDun = 13;
	//总的牌数量
	this.JSCZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSCZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSCZMJRoomDealCardCount = this.JSCZMJRoomJoinCount * this.JSCZMJRoomDealPerPosCardCount;
};
var HNJZMJ = function () {
	//参与的人数
	this.HNJZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNJZMJRoomPaiDun = 13;
	//总的牌数量
	this.HNJZMJRoomAllCardCount = 108;
	//发牌阶段每个人领取卡牌数量
	this.HNJZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNJZMJRoomDealCardCount = this.HNJZMJRoomJoinCount * this.HNJZMJRoomDealPerPosCardCount;
};
var GYMJ = function () {
	//参与的人数
	this.GYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GYMJRoomPaiDun = 13;
	//总的牌数量
	this.GYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GYMJRoomDealCardCount = this.GYMJRoomJoinCount * this.GYMJRoomDealPerPosCardCount;
};
var PYMJ = function () {
	//参与的人数
	this.PYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PYMJRoomPaiDun = 13;
	//总的牌数量
	this.PYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PYMJRoomDealCardCount = this.PYMJRoomJoinCount * this.PYMJRoomDealPerPosCardCount;
};
var AHMJ = function () {
	//参与的人数
	this.AHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.AHMJRoomPaiDun = 13;
	//总的牌数量
	this.AHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.AHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.AHMJRoomDealCardCount = this.AHMJRoomJoinCount * this.AHMJRoomDealPerPosCardCount;
};
var XZMJ = function () {
	//参与的人数
	this.XZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XZMJRoomPaiDun = 13;
	//总的牌数量
	this.XZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XZMJRoomDealCardCount = this.XZMJRoomJoinCount * this.XZMJRoomDealPerPosCardCount;
};

var JSGYMJ = function () {
	//参与的人数
	this.JSGYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSGYMJRoomPaiDun = 13;
	//总的牌数量
	this.JSGYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSGYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSGYMJRoomDealCardCount = this.JSGYMJRoomJoinCount * this.JSGYMJRoomDealPerPosCardCount;
};
var AHPHZ = function () {
	//参与的人数
	this.AHPHZRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.AHPHZRoomPaiDun = 13;
	//总的牌数量
	this.AHPHZRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.AHPHZRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.AHPHZRoomDealCardCount = this.AHPHZRoomJoinCount * this.AHPHZRoomDealPerPosCardCount;
};
var XXMJ = function () {
	//参与的人数
	this.XXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XXMJRoomPaiDun = 13;
	//总的牌数量
	this.XXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XXMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.XXMJRoomDealCardCount = this.XXMJRoomJoinCount * this.XXMJRoomDealPerPosCardCount;
};
var HNAYMJ = function () {
	//参与的人数
	this.HNAYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNAYMJRoomPaiDun = 13;
	//总的牌数量
	this.HNAYMJRoomAllCardCount = 137;
	//发牌阶段每个人领取卡牌数量
	this.HNAYMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.HNAYMJRoomDealCardCount = this.HNAYMJRoomJoinCount * this.HNAYMJRoomDealPerPosCardCount;
};
var NCMJ = function () {
	//参与的人数
	this.NCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NCMJRoomPaiDun = 13;
	//总的牌数量
	this.NCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NCMJRoomDealCardCount = this.NCMJRoomJoinCount * this.NCMJRoomDealPerPosCardCount;
};
var ZKMJ = function () {
	//参与的人数
	this.ZKMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZKMJRoomPaiDun = 13;
	//总的牌数量
	this.ZKMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZKMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZKMJRoomDealCardCount = this.ZKMJRoomJoinCount * this.ZKMJRoomDealPerPosCardCount;
};
var JXXYMJ = function () {
	//参与的人数
	this.JXXYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JXXYMJRoomPaiDun = 13;
	//总的牌数量
	this.JXXYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JXXYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JXXYMJRoomDealCardCount = this.JXXYMJRoomJoinCount * this.JXXYMJRoomDealPerPosCardCount;
};
var GAMJ = function () {
	//参与的人数
	this.GAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GAMJRoomPaiDun = 13;
	//总的牌数量
	this.GAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GAMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GAMJRoomDealCardCount = this.GAMJRoomJoinCount * this.GAMJRoomDealPerPosCardCount;
};
var TGMJ = function () {
	//参与的人数
	this.TGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TGMJRoomPaiDun = 13;
	//总的牌数量
	this.TGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TGMJRoomDealCardCount = this.TGMJRoomJoinCount * this.TGMJRoomDealPerPosCardCount;
};
var HNHBMJ = function () {
	//参与的人数
	this.HNHBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNHBMJRoomPaiDun = 13;
	//总的牌数量
	this.HNHBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNHBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNHBMJRoomDealCardCount = this.HNHBMJRoomJoinCount * this.HNHBMJRoomDealPerPosCardCount;
};
var LHMJ = function () {
	//参与的人数
	this.LHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LHMJRoomPaiDun = 13;
	//总的牌数量
	this.LHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LHMJRoomDealCardCount = this.LHMJRoomJoinCount * this.LHMJRoomDealPerPosCardCount;
};
var JJMJ = function () {
	//参与的人数
	this.JJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JJMJRoomPaiDun = 13;
	//总的牌数量
	this.JJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JJMJRoomDealCardCount = this.JJMJRoomJoinCount * this.JJMJRoomDealPerPosCardCount;
};
var FYMJ = function () {
	//参与的人数
	this.FYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FYMJRoomPaiDun = 13;
	//总的牌数量
	this.FYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.FYMJRoomDealCardCount = this.FYMJRoomJoinCount * this.FYMJRoomDealPerPosCardCount;
};
var GDMJ = function () {
	//参与的人数
	this.GDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GDMJRoomPaiDun = 13;
	//总的牌数量
	this.GDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GDMJRoomDealCardCount = this.GDMJRoomJoinCount * this.GDMJRoomDealPerPosCardCount;
};
var GSJMJ = function () {
	//参与的人数
	this.GSJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GSJMJRoomPaiDun = 13;
	//总的牌数量
	this.GSJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GSJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GSJMJRoomDealCardCount = this.GSJMJRoomJoinCount * this.GSJMJRoomDealPerPosCardCount;
};
var BZQZMJ = function () {
	//参与的人数
	this.BZQZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BZQZMJRoomPaiDun = 13;
	//总的牌数量
	this.BZQZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.BZQZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BZQZMJRoomDealCardCount = this.BZQZMJRoomJoinCount * this.BZQZMJRoomDealPerPosCardCount;
};
var FYDDZMJ = function () {
	//参与的人数
	this.FYDDZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FYDDZMJRoomPaiDun = 13;
	//总的牌数量
	this.FYDDZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FYDDZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.FYDDZMJRoomDealCardCount = this.FYDDZMJRoomJoinCount * this.FYDDZMJRoomDealPerPosCardCount;
};
var HSTDHMJ = function () {
	//参与的人数
	this.HSTDHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HSTDHMJRoomPaiDun = 13;
	//总的牌数量
	this.HSTDHMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.HSTDHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HSTDHMJRoomDealCardCount = this.HSTDHMJRoomJoinCount * this.HSTDHMJRoomDealPerPosCardCount;
};
var CCMJ = function () {
	//参与的人数
	this.CCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CCMJRoomPaiDun = 13;
	//总的牌数量
	this.CCMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.CCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CCMJRoomDealCardCount = this.CCMJRoomJoinCount * this.CCMJRoomDealPerPosCardCount;
};
var PCMJ = function () {
	//参与的人数
	this.PCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.PCMJRoomPaiDun = 13;
	//总的牌数量
	this.PCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.PCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.PCMJRoomDealCardCount = this.PCMJRoomJoinCount * this.PCMJRoomDealPerPosCardCount;
};
var JLMJ = function () {
	//参与的人数
	this.JLMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JLMJRoomPaiDun = 13;
	//总的牌数量
	this.JLMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JLMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JLMJRoomDealCardCount = this.JLMJRoomJoinCount * this.JLMJRoomDealPerPosCardCount;
};
var ZJHZMJ = function () {
	//参与的人数
	this.ZJHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJHZMJRoomPaiDun = 13;
	//总的牌数量
	this.ZJHZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJHZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJHZMJRoomDealCardCount = this.ZJHZMJRoomJoinCount * this.ZJHZMJRoomDealPerPosCardCount;
};
var XJXZMJ = function () {
	//参与的人数
	this.XJXZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XJXZMJRoomPaiDun = 13;
	//总的牌数量
	this.XJXZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XJXZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XJXZMJRoomDealCardCount = this.XJXZMJRoomJoinCount * this.XJXZMJRoomDealPerPosCardCount;
};
var YSMJ = function () {
	//参与的人数
	this.YSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YSMJRoomPaiDun = 13;
	//总的牌数量
	this.YSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YSMJRoomDealCardCount = this.YSMJRoomJoinCount * this.YSMJRoomDealPerPosCardCount;
};
var ZZPH = function () {
	//参与的人数
	this.ZZPHRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZZPHRoomPaiDun = 13;
	//总的牌数量
	this.ZZPHRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZZPHRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZZPHRoomDealCardCount = this.ZZPHRoomJoinCount * this.ZZPHRoomDealPerPosCardCount;
};
var KFMJ = function () {
	//参与的人数
	this.KFMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.KFMJRoomPaiDun = 13;
	//总的牌数量
	this.KFMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.KFMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.KFMJRoomDealCardCount = this.KFMJRoomJoinCount * this.KFMJRoomDealPerPosCardCount;
};
var NJMJ = function () {
	//参与的人数
	this.NJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NJMJRoomPaiDun = 13;
	//总的牌数量
	this.NJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NJMJRoomDealCardCount = this.NJMJRoomJoinCount * this.NJMJRoomDealPerPosCardCount;
};
var JAMJ = function () {
	//参与的人数
	this.JAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JAMJRoomPaiDun = 13;
	//总的牌数量
	this.JAMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JAMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JAMJRoomDealCardCount = this.JAMJRoomJoinCount * this.JAMJRoomDealPerPosCardCount;
};
var XJLSHMJ = function () {
	//参与的人数
	this.XJLSHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XJLSHMJRoomPaiDun = 13;
	//总的牌数量
	this.XJLSHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XJLSHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XJLSHMJRoomDealCardCount = this.XJLSHMJRoomJoinCount * this.XJLSHMJRoomDealPerPosCardCount;
};
var YZYZMJ = function () {
	//参与的人数
	this.YZYZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YZYZMJRoomPaiDun = 13;
	//总的牌数量
	this.YZYZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YZYZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YZYZMJRoomDealCardCount = this.YZYZMJRoomJoinCount * this.YZYZMJRoomDealPerPosCardCount;
};
var LXMJ = function () {
	//参与的人数
	this.LXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LXMJRoomPaiDun = 13;
	//总的牌数量
	this.LXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LXMJRoomDealCardCount = this.LXMJRoomJoinCount * this.LXMJRoomDealPerPosCardCount;
};
var CXMJ = function () {
	//参与的人数
	this.CXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CXMJRoomPaiDun = 13;
	//总的牌数量
	this.CXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CXMJRoomDealCardCount = this.CXMJRoomJoinCount * this.CXMJRoomDealPerPosCardCount;
};
var LS13579 = function () {
	//参与的人数
	this.LS13579RoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LS13579RoomPaiDun = 13;
	//总的牌数量
	this.LS13579RoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LS13579RoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LS13579RoomDealCardCount = this.LS13579RoomJoinCount * this.LS13579RoomDealPerPosCardCount;
};
var LSKJJMJ = function () {
	//参与的人数
	this.LSKJJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LSKJJMJRoomPaiDun = 13;
	//总的牌数量
	this.LSKJJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LSKJJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LSKJJMJRoomDealCardCount = this.LSKJJMJRoomJoinCount * this.LSKJJMJRoomDealPerPosCardCount;
};
var LSLWZMJ = function () {
	//参与的人数
	this.LSLWZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LSLWZMJRoomPaiDun = 13;
	//总的牌数量
	this.LSLWZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LSLWZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LSLWZMJRoomDealCardCount = this.LSLWZMJRoomJoinCount * this.LSLWZMJRoomDealPerPosCardCount;
};
var JCMJ = function () {
	//参与的人数
	this.JCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JCMJRoomPaiDun = 13;
	//总的牌数量
	this.JCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JCMJRoomDealCardCount = this.JCMJRoomJoinCount * this.JCMJRoomDealPerPosCardCount;
};
var FXMJ = function () {
	//参与的人数
	this.FXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FXMJRoomPaiDun = 13;
	//总的牌数量
	this.FXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.FXMJRoomDealCardCount = this.FXMJRoomJoinCount * this.FXMJRoomDealPerPosCardCount;
};
var HBTDHMJ = function () {
	//参与的人数
	this.HBTDHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HBTDHMJRoomPaiDun = 13;
	//总的牌数量
	this.HBTDHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HBTDHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HBTDHMJRoomDealCardCount = this.HBTDHMJRoomJoinCount * this.HBTDHMJRoomDealPerPosCardCount;
};
var HBHBMJ = function () {
	//参与的人数
	this.HBHBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HBHBMJRoomPaiDun = 13;
	//总的牌数量
	this.HBHBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HBHBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HBHBMJRoomDealCardCount = this.HBHBMJRoomJoinCount * this.HBHBMJRoomDealPerPosCardCount;
};
var NXKWMJ = function () {
	//参与的人数
	this.NXKWMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NXKWMJRoomPaiDun = 13;
	//总的牌数量
	this.NXKWMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NXKWMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NXKWMJRoomDealCardCount = this.NXKWMJRoomJoinCount * this.NXKWMJRoomDealPerPosCardCount;
};
var YZGYMJ = function () {
	//参与的人数
	this.YZGYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YZGYMJRoomPaiDun = 13;
	//总的牌数量
	this.YZGYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YZGYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YZGYMJRoomDealCardCount = this.YZGYMJRoomJoinCount * this.YZGYMJRoomDealPerPosCardCount;
};
var SQSYMJ = function () {
	//参与的人数
	this.SQSYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SQSYMJRoomPaiDun = 13;
	//总的牌数量
	this.SQSYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SQSYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SQSYMJRoomDealCardCount = this.SQSYMJRoomJoinCount * this.SQSYMJRoomDealPerPosCardCount;
};
var AQMJ = function () {
	//参与的人数
	this.AQMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.AQMJRoomPaiDun = 13;
	//总的牌数量
	this.AQMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.AQMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.AQMJRoomDealCardCount = this.AQMJRoomJoinCount * this.AQMJRoomDealPerPosCardCount;
};
var JDMJ = function () {
	//参与的人数
	this.JDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JDMJRoomPaiDun = 16;
	//总的牌数量
	this.JDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JDMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.JDMJRoomDealCardCount = this.JDMJRoomJoinCount * this.JDMJRoomDealPerPosCardCount;
};
var ZJWZMJ = function () {
	//参与的人数
	this.ZJWZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJWZMJRoomPaiDun = 16;
	//总的牌数量
	this.ZJWZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJWZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.ZJWZMJRoomDealCardCount = this.ZJWZMJRoomJoinCount * this.ZJWZMJRoomDealPerPosCardCount;
};
var SZMJ = function () {
	//参与的人数
	this.SZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SZMJRoomPaiDun = 19;
	//总的牌数量
	this.SZMJRoomAllCardCount = 152;
	//发牌阶段每个人领取卡牌数量
	this.SZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.SZMJRoomDealCardCount = this.SZMJRoomJoinCount * this.SZMJRoomDealPerPosCardCount;
};
var ZJSHZMJ = function () {
	//参与的人数
	this.ZJSHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJSHZMJRoomPaiDun = 13;
	//总的牌数量
	this.ZJSHZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJSHZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJSHZMJRoomDealCardCount = this.ZJSHZMJRoomJoinCount * this.ZJSHZMJRoomDealPerPosCardCount;
};
var WHMJ = function () {
	//参与的人数
	this.WHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WHMJRoomPaiDun = 13;
	//总的牌数量
	this.WHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WHMJRoomDealCardCount = this.WHMJRoomJoinCount * this.WHMJRoomDealPerPosCardCount;
};
var YGJZMJ = function () {
	//参与的人数
	this.YGJZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YGJZMJRoomPaiDun = 13;
	//总的牌数量
	this.YGJZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YGJZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YGJZMJRoomDealCardCount = this.YGJZMJRoomJoinCount * this.YGJZMJRoomDealPerPosCardCount;
};
var TMHHMJ = function () {
	//参与的人数
	this.TMHHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TMHHMJRoomPaiDun = 13;
	//总的牌数量
	this.TMHHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TMHHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TMHHMJRoomDealCardCount = this.TMHHMJRoomJoinCount * this.TMHHMJRoomDealPerPosCardCount;
};
var JXMJ = function () {
	//参与的人数
	this.JXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JXMJRoomPaiDun = 13;
	//总的牌数量
	this.JXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JXMJRoomDealCardCount = this.JXMJRoomJoinCount * this.JXMJRoomDealPerPosCardCount;
};
var QZKHMJ = function () {
	//参与的人数
	this.QZKHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.QZKHMJRoomPaiDun = 13;
	//总的牌数量
	this.QZKHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.QZKHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.QZKHMJRoomDealCardCount = this.QZKHMJRoomJoinCount * this.QZKHMJRoomDealPerPosCardCount;
};
var LCMJ = function () {
	//参与的人数
	this.LCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LCMJRoomPaiDun = 13;
	//总的牌数量
	this.LCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LCMJRoomDealCardCount = this.LCMJRoomJoinCount * this.LCMJRoomDealPerPosCardCount;
};
var QZCSMJ = function () {
	//参与的人数
	this.QZCSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.QZCSMJRoomPaiDun = 13;
	//总的牌数量
	this.QZCSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.QZCSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.QZCSMJRoomDealCardCount = this.QZCSMJRoomJoinCount * this.QZCSMJRoomDealPerPosCardCount;
};
var JCHHMJ = function () {
	//参与的人数
	this.JCHHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JCHHMJRoomPaiDun = 13;
	//总的牌数量
	this.JCHHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JCHHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JCHHMJRoomDealCardCount = this.JCHHMJRoomJoinCount * this.JCHHMJRoomDealPerPosCardCount;
};
var LSMJ = function () {
	//参与的人数
	this.LSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LSMJRoomPaiDun = 13;
	//总的牌数量
	this.LSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LSMJRoomDealCardCount = this.LSMJRoomJoinCount * this.LSMJRoomDealPerPosCardCount;
};
var YSZMJ = function () {
	//参与的人数
	this.YSZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YSZMJRoomPaiDun = 13;
	//总的牌数量
	this.YSZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YSZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YSZMJRoomDealCardCount = this.YSZMJRoomJoinCount * this.YSZMJRoomDealPerPosCardCount;
};
var YXBZMJ = function () {
	//参与的人数
	this.YXBZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YXBZMJRoomPaiDun = 13;
	//总的牌数量
	this.YXBZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YXBZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YXBZMJRoomDealCardCount = this.YXBZMJRoomJoinCount * this.YXBZMJRoomDealPerPosCardCount;
};
var YCTJMJ = function () {
	//参与的人数
	this.YCTJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YCTJMJRoomPaiDun = 13;
	//总的牌数量
	this.YCTJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YCTJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YCTJMJRoomDealCardCount = this.YCTJMJRoomJoinCount * this.YCTJMJRoomDealPerPosCardCount;
};
var CQHSZMJ = function () {
	//参与的人数
	this.CQHSZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CQHSZMJRoomPaiDun = 13;
	//总的牌数量
	this.CQHSZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CQHSZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CQHSZMJRoomDealCardCount = this.CQHSZMJRoomJoinCount * this.CQHSZMJRoomDealPerPosCardCount;
};
var HBWHMJ = function(){
	//参与的人数
	this.HBWHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HBWHMJRoomPaiDun = 13;
	//总的牌数量
	this.HBWHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HBWHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HBWHMJRoomDealCardCount = this.HBWHMJRoomJoinCount*this.HBWHMJRoomDealPerPosCardCount;
};
var JSNYZMJ = function(){
	//参与的人数
	this.JSNYZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSNYZMJRoomPaiDun = 13;
	//总的牌数量
	this.JSNYZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSNYZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSNYZMJRoomDealCardCount = this.JSNYZMJRoomJoinCount*this.JSNYZMJRoomDealPerPosCardCount;
};
var ZZNSB = function () {
    //参与的人数
    this.ZZNSBRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZZNSBRoomPaiDun = 13;
    //总的牌数量
    this.ZZNSBRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZZNSBRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZZNSBRoomDealCardCount = this.ZZNSBRoomJoinCount * this.ZZNSBRoomDealPerPosCardCount;
};
var AK159MJ = function () {
    //参与的人数
    this.AK159MJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AK159MJRoomPaiDun = 13;
    //总的牌数量
    this.AK159MJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AK159MJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AK159MJRoomDealCardCount = this.AK159MJRoomJoinCount * this.AK159MJRoomDealPerPosCardCount;
};
var YLDGZMJ = function () {
    //参与的人数
    this.YLDGZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YLDGZMJRoomPaiDun = 13;
    //总的牌数量
    this.YLDGZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YLDGZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YLDGZMJRoomDealCardCount = this.YLDGZMJRoomJoinCount * this.YLDGZMJRoomDealPerPosCardCount;
};
var DLQHMJ = function () {
    //参与的人数
    this.DLQHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DLQHMJRoomPaiDun = 13;
    //总的牌数量
    this.DLQHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DLQHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DLQHMJRoomDealCardCount = this.DLQHMJRoomJoinCount * this.DLQHMJRoomDealPerPosCardCount;
};
var LPSMJ = function () {
    //参与的人数
    this.LPSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LPSMJRoomPaiDun = 13;
    //总的牌数量
    this.LPSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LPSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LPSMJRoomDealCardCount = this.LPSMJRoomJoinCount * this.LPSMJRoomDealPerPosCardCount;
};
var LLFYMJ = function () {
    //参与的人数
    this.LLFYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LLFYMJRoomPaiDun = 13;
    //总的牌数量
    this.LLFYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LLFYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LLFYMJRoomDealCardCount = this.LLFYMJRoomJoinCount * this.LLFYMJRoomDealPerPosCardCount;
};
var SXHTMJ = function () {
    //参与的人数
    this.SXHTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SXHTMJRoomPaiDun = 13;
    //总的牌数量
    this.SXHTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SXHTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SXHTMJRoomDealCardCount = this.SXHTMJRoomJoinCount * this.SXHTMJRoomDealPerPosCardCount;
};
var SXLSMJ = function () {
	//参与的人数
	this.SXLSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SXLSMJRoomPaiDun = 13;
	//总的牌数量
	this.SXLSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SXLSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SXLSMJRoomDealCardCount = this.SXLSMJRoomJoinCount * this.SXLSMJRoomDealPerPosCardCount;
};
var DZMJ = function () {
	//参与的人数
	this.DZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DZMJRoomPaiDun = 13;
	//总的牌数量
	this.DZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DZMJRoomDealCardCount = this.DZMJRoomJoinCount * this.DZMJRoomDealPerPosCardCount;
};
var DKGMJ = function () {
	//参与的人数
	this.DKGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DKGMJRoomPaiDun = 13;
	//总的牌数量
	this.DKGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DKGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DKGMJRoomDealCardCount = this.DKGMJRoomJoinCount * this.DKGMJRoomDealPerPosCardCount;
};
var GZMJ = function () {
	//参与的人数
	this.GZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GZMJRoomPaiDun = 13;
	//总的牌数量
	this.GZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GZMJRoomDealCardCount = this.GZMJRoomJoinCount * this.GZMJRoomDealPerPosCardCount;
};
var XFGZMJ = function () {
	//参与的人数
	this.XFGZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XFGZMJRoomPaiDun = 13;
	//总的牌数量
	this.XFGZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XFGZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XFGZMJRoomDealCardCount = this.XFGZMJRoomJoinCount * this.XFGZMJRoomDealPerPosCardCount;
};
var JXNDMJ = function () {
	//参与的人数
	this.JXNDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JXNDMJRoomPaiDun = 13;
	//总的牌数量
	this.JXNDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JXNDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JXNDMJRoomDealCardCount = this.JXNDMJRoomJoinCount * this.JXNDMJRoomDealPerPosCardCount;
};
var GNMJ = function () {
	//参与的人数
	this.GNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GNMJRoomPaiDun = 13;
	//总的牌数量
	this.GNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GNMJRoomDealCardCount = this.GNMJRoomJoinCount * this.GNMJRoomDealPerPosCardCount;
};
var HNMJ = function () {
	//参与的人数
	this.HNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNMJRoomPaiDun = 13;
	//总的牌数量
	this.HNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNMJRoomDealCardCount = this.HNMJRoomJoinCount * this.HNMJRoomDealPerPosCardCount;
};
var MMMJ = function () {
    //参与的人数
    this.MMMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.MMMJRoomPaiDun = 13;
    //总的牌数量
    this.MMMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.MMMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.MMMJRoomDealCardCount = this.MMMJRoomJoinCount * this.MMMJRoomDealPerPosCardCount;
};
var RJMJ = function () {
    //参与的人数
    this.RJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.RJMJRoomPaiDun = 13;
    //总的牌数量
    this.RJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.RJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.RJMJRoomDealCardCount = this.RJMJRoomJoinCount * this.RJMJRoomDealPerPosCardCount;
};
var DNMJ = function () {
	//参与的人数
	this.DNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DNMJRoomPaiDun = 13;
	//总的牌数量
	this.DNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DNMJRoomDealCardCount = this.DNMJRoomJoinCount * this.DNMJRoomDealPerPosCardCount;
};
var LNMJ = function () {
	//参与的人数
	this.LNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LNMJRoomPaiDun = 13;
	//总的牌数量
	this.LNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LNMJRoomDealCardCount = this.LNMJRoomJoinCount * this.LNMJRoomDealPerPosCardCount;
};
var FCMJ = function () {
	//参与的人数
	this.FCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FCMJRoomPaiDun = 16;
	//总的牌数量
	this.FCMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FCMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.FCMJRoomDealCardCount = this.FCMJRoomJoinCount * this.FCMJRoomDealPerPosCardCount;
};
var HFMJ = function(){
	//参与的人数
	this.HFMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HFMJRoomPaiDun = 13;
	//总的牌数量
	this.HFMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HFMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HFMJRoomDealCardCount = this.HFMJRoomJoinCount*this.HFMJRoomDealPerPosCardCount;
};
var MASMJ = function(){
	//参与的人数
	this.MASMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.MASMJRoomPaiDun = 13;
	//总的牌数量
	this.MASMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.MASMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.MASMJRoomDealCardCount = this.MASMJRoomJoinCount*this.MASMJRoomDealPerPosCardCount;
};
var YJMJ = function () {
    //参与的人数
    this.YJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YJMJRoomPaiDun = 13;
    //总的牌数量
    this.YJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YJMJRoomDealCardCount = this.YJMJRoomJoinCount * this.YJMJRoomDealPerPosCardCount;
};
var XHZMJ = function(){
	//参与的人数
	this.XHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XHZMJRoomPaiDun = 13;
	//总的牌数量
	this.XHZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XHZMJRoomDealPerPosCardCount = 16;
	//发出去的牌数量
	this.XHZMJRoomDealCardCount = this.XHZMJRoomJoinCount*this.XHZMJRoomDealPerPosCardCount;
};
var QYMJ = function () {
    //参与的人数
    this.QYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QYMJRoomPaiDun = 13;
    //总的牌数量
    this.QYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QYMJRoomDealCardCount = this.QYMJRoomJoinCount * this.QYMJRoomDealPerPosCardCount;
};
var JMSKMJ = function () {
	//参与的人数
	this.JMSKMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JMSKMJRoomPaiDun = 13;
	//总的牌数量
	this.JMSKMJRoomAllCardCount = 152;
	//发牌阶段每个人领取卡牌数量
	this.JMSKMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JMSKMJRoomDealCardCount = this.JMSKMJRoomJoinCount * this.JMSKMJRoomDealPerPosCardCount;
};
var XL2VS2MJ = function () {
    //参与的人数
    this.XL2VS2MJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XL2VS2MJRoomPaiDun = 13;
    //总的牌数量
    this.XL2VS2MJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XL2VS2MJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XL2VS2MJRoomDealCardCount = this.XL2VS2MJRoomJoinCount * this.XL2VS2MJRoomDealPerPosCardCount;
};
var XJMJ = function () {
    //参与的人数
    this.XJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XJMJRoomPaiDun = 13;
    //总的牌数量
    this.XJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XJMJRoomDealCardCount = this.XJMJRoomJoinCount * this.XJMJRoomDealPerPosCardCount;
};
var FZJXMJ = function () {
    //参与的人数
    this.FZJXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.FZJXMJRoomPaiDun = 13;
    //总的牌数量
    this.FZJXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.FZJXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.FZJXMJRoomDealCardCount = this.FZJXMJRoomJoinCount * this.FZJXMJRoomDealPerPosCardCount;
};
var JMGGHMJ = function () {
    //参与的人数
    this.JMGGHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JMGGHMJRoomPaiDun = 13;
    //总的牌数量
    this.JMGGHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JMGGHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JMGGHMJRoomDealCardCount = this.JMGGHMJRoomJoinCount * this.JMGGHMJRoomDealPerPosCardCount;
};
var SCMJ = function () {
    //参与的人数
    this.SCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCMJRoomPaiDun = 13;
    //总的牌数量
    this.SCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCMJRoomDealCardCount = this.SCMJRoomJoinCount * this.SCMJRoomDealPerPosCardCount;
};
var YTYJMJ = function () {
    //参与的人数
    this.YTYJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YTYJMJRoomPaiDun = 13;
    //总的牌数量
    this.YTYJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YTYJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YTYJMJRoomDealCardCount = this.YTYJMJRoomJoinCount * this.YTYJMJRoomDealPerPosCardCount;
};
var YDDGMJ = function () {
    //参与的人数
    this.YDDGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YDDGMJRoomPaiDun = 13;
    //总的牌数量
    this.YDDGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YDDGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YDDGMJRoomDealCardCount = this.YDDGMJRoomJoinCount * this.YDDGMJRoomDealPerPosCardCount;
};
var NKBHMJ = function () {
    //参与的人数
    this.NKBHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NKBHMJRoomPaiDun = 13;
    //总的牌数量
    this.NKBHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NKBHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NKBHMJRoomDealCardCount = this.NKBHMJRoomJoinCount * this.NKBHMJRoomDealPerPosCardCount;
};
var LKMJ = function () {
    //参与的人数
    this.LKMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LKMJRoomPaiDun = 13;
    //总的牌数量
    this.LKMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LKMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LKMJRoomDealCardCount = this.LKMJRoomJoinCount * this.LKMJRoomDealPerPosCardCount;
};
var JZMJ = function () {
    //参与的人数
    this.JZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JZMJRoomPaiDun = 13;
    //总的牌数量
    this.JZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JZMJRoomDealCardCount = this.JZMJRoomJoinCount * this.JZMJRoomDealPerPosCardCount;
};
var LAMJ = function () {
    //参与的人数
    this.LAMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LAMJRoomPaiDun = 13;
    //总的牌数量
    this.LAMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LAMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LAMJRoomDealCardCount = this.LAMJRoomJoinCount * this.LAMJRoomDealPerPosCardCount;
};
var XYXMJ = function(){
	//参与的人数
	this.XYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XYXMJRoomPaiDun = 13;
	//总的牌数量
	this.XYXMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.XYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XYXMJRoomDealCardCount = this.XYXMJRoomJoinCount*this.XYXMJRoomDealPerPosCardCount;
};
var FZGCMJ = function () {
    //参与的人数
    this.FZGCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.FZGCMJRoomPaiDun = 13;
    //总的牌数量
    this.FZGCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.FZGCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.FZGCMJRoomDealCardCount = this.FZGCMJRoomJoinCount * this.FZGCMJRoomDealPerPosCardCount;
};
var XXFQMJ = function () {
    //参与的人数
    this.XXFQMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XXFQMJRoomPaiDun = 13;
    //总的牌数量
    this.XXFQMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XXFQMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XXFQMJRoomDealCardCount = this.XXFQMJRoomJoinCount * this.XXFQMJRoomDealPerPosCardCount;
};
var MZMJ = function () {
    //参与的人数
    this.MZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.MZMJRoomPaiDun = 13;
    //总的牌数量
    this.MZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.MZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.MZMJRoomDealCardCount = this.MZMJRoomJoinCount * this.MZMJRoomDealPerPosCardCount;
};
var AHHNMJ = function(){
	//参与的人数
	this.AHHNMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.AHHNMJRoomPaiDun = 13;
	//总的牌数量
	this.AHHNMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.AHHNMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.AHHNMJRoomDealCardCount = this.AHHNMJRoomJoinCount*this.AHHNMJRoomDealPerPosCardCount;
};
var LYGCMJ = function () {
    //参与的人数
    this.LYGCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LYGCMJRoomPaiDun = 13;
    //总的牌数量
    this.LYGCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LYGCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LYGCMJRoomDealCardCount = this.LYGCMJRoomJoinCount * this.LYGCMJRoomDealPerPosCardCount;
};
var DXBJMJ = function () {
    //参与的人数
    this.DXBJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DXBJMJRoomPaiDun = 13;
    //总的牌数量
    this.DXBJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DXBJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DXBJMJRoomDealCardCount = this.DXBJMJRoomJoinCount * this.DXBJMJRoomDealPerPosCardCount;
};
var GCBGMJ = function () {
	//参与的人数
	this.GCBGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GCBGMJRoomPaiDun = 13;
	//总的牌数量
	this.GCBGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GCBGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GCBGMJRoomDealCardCount = this.GCBGMJRoomJoinCount * this.GCBGMJRoomDealPerPosCardCount;
};
var TXMJ = function () {
    //参与的人数
    this.TXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TXMJRoomPaiDun = 13;
    //总的牌数量
    this.TXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TXMJRoomDealCardCount = this.TXMJRoomJoinCount * this.TXMJRoomDealPerPosCardCount;
};
var ZKLYMJ = function () {
    //参与的人数
    this.ZKLYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZKLYMJRoomPaiDun = 13;
    //总的牌数量
    this.ZKLYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZKLYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZKLYMJRoomDealCardCount = this.ZKLYMJRoomJoinCount * this.ZKLYMJRoomDealPerPosCardCount;
};
var XYSCMJ = function () {
    //参与的人数
    this.XYSCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XYSCMJRoomPaiDun = 13;
    //总的牌数量
    this.XYSCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XYSCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XYSCMJRoomDealCardCount = this.XYSCMJRoomJoinCount * this.XYSCMJRoomDealPerPosCardCount;
};
var GSMJ = function () {
    //参与的人数
    this.GSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GSMJRoomPaiDun = 13;
    //总的牌数量
    this.GSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GSMJRoomDealCardCount = this.GSMJRoomJoinCount * this.GSMJRoomDealPerPosCardCount;
};
var SXMMJ = function () {
	//参与的人数
	this.SXMMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SXMMJRoomPaiDun = 13;
	//总的牌数量
	this.SXMMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SXMMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SXMMJRoomDealCardCount = this.SXMMJRoomJoinCount * this.SXMMJRoomDealPerPosCardCount;
};
var GXMJ = function () {
    //参与的人数
    this.GXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GXMJRoomPaiDun = 13;
    //总的牌数量
    this.GXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GXMJRoomDealCardCount = this.GXMJRoomJoinCount * this.GXMJRoomDealPerPosCardCount;
};
var PDSYXMJ = function () {
    //参与的人数
    this.PDSYXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PDSYXMJRoomPaiDun = 13;
    //总的牌数量
    this.PDSYXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PDSYXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PDSYXMJRoomDealCardCount = this.PDSYXMJRoomJoinCount * this.PDSYXMJRoomDealPerPosCardCount;
};
var ZMDMJ = function () {
    //参与的人数
    this.ZMDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZMDMJRoomPaiDun = 13;
    //总的牌数量
    this.ZMDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZMDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZMDMJRoomDealCardCount = this.ZMDMJRoomJoinCount * this.ZMDMJRoomDealPerPosCardCount;
};
var ZXMJ = function () {
    //参与的人数
    this.ZXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZXMJRoomPaiDun = 13;
    //总的牌数量
    this.ZXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZXMJRoomDealCardCount = this.ZXMJRoomJoinCount * this.ZXMJRoomDealPerPosCardCount;
};
var NZMJ = function () {
	//参与的人数
	this.NZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NZMJRoomPaiDun = 13;
	//总的牌数量
	this.NZMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.NZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NZMJRoomDealCardCount = this.NZMJRoomJoinCount * this.NZMJRoomDealPerPosCardCount;
};
var XYGSMJ = function () {
    //参与的人数
    this.XYGSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XYGSMJRoomPaiDun = 13;
    //总的牌数量
    this.XYGSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XYGSMJRoomDealPerPosCardCount = 14;
    //发出去的牌数量
    this.XYGSMJRoomDealCardCount = this.XYGSMJRoomJoinCount * this.XYGSMJRoomDealPerPosCardCount;
};
var WGFHMJ = function () {
    //参与的人数
    this.WGFHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WGFHMJRoomPaiDun = 13;
    //总的牌数量
    this.WGFHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WGFHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WGFHMJRoomDealCardCount = this.WGFHMJRoomJoinCount * this.WGFHMJRoomDealPerPosCardCount;
};
var DZSJZMJ = function () {
    //参与的人数
    this.DZSJZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DZSJZMJRoomPaiDun = 13;
    //总的牌数量
    this.DZSJZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DZSJZMJRoomDealPerPosCardCount = 19;
    //发出去的牌数量
    this.DZSJZMJRoomDealCardCount = this.DZSJZMJRoomJoinCount * this.DZSJZMJRoomDealPerPosCardCount;
};
var SSPMJ = function(){
	//参与的人数
	this.SSPMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SSPMJRoomPaiDun = 13;
	//总的牌数量
	this.SSPMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.SSPMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SSPMJRoomDealCardCount = this.SSPMJRoomJoinCount*this.SSPMJRoomDealPerPosCardCount;
};
var A3PK = function () {
    //参与的人数
    this.A3PKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.A3PKRoomPaiDun = 13;
    //总的牌数量
    this.A3PKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.A3PKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.A3PKRoomDealCardCount = this.A3PKRoomJoinCount * this.A3PKRoomDealPerPosCardCount;
};
var GLZP = function () {
    //参与的人数
    this.GLZPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GLZPRoomPaiDun = 13;
    //总的牌数量
    this.GLZPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GLZPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GLZPRoomDealCardCount = this.GLZPRoomJoinCount * this.GLZPRoomDealPerPosCardCount;
};
var YXSRDDZ = function () {
    //参与的人数
    this.YXSRDDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YXSRDDZRoomPaiDun = 13;
    //总的牌数量
    this.YXSRDDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YXSRDDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YXSRDDZRoomDealCardCount = this.YXSRDDZRoomJoinCount * this.YXSRDDZRoomDealPerPosCardCount;
};
var YXDDZ = function () {
    //参与的人数
    this.YXDDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YXDDZRoomPaiDun = 13;
    //总的牌数量
    this.YXDDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YXDDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YXDDZRoomDealCardCount = this.YXDDZRoomJoinCount * this.YXDDZRoomDealPerPosCardCount;
};
var GXCDD = function () {
    //参与的人数
    this.GXCDDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GXCDDRoomPaiDun = 13;
    //总的牌数量
    this.GXCDDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GXCDDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GXCDDRoomDealCardCount = this.GXCDDRoomJoinCount * this.GXCDDRoomDealPerPosCardCount;
};
var XYXXMJ = function () {
    //参与的人数
    this.XYXXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XYXXMJRoomPaiDun = 13;
    //总的牌数量
    this.XYXXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XYXXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XYXXMJRoomDealCardCount = this.XYXXMJRoomJoinCount * this.XYXXMJRoomDealPerPosCardCount;
};
var DEMOMJ = function () {
    //参与的人数
    this.DEMOMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DEMOMJRoomPaiDun = 13;
    //总的牌数量
    this.DEMOMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DEMOMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DEMOMJRoomDealCardCount = this.DEMOMJRoomJoinCount * this.DEMOMJRoomDealPerPosCardCount;
};
var XXTDHMJ = function () {
    //参与的人数
    this.XXTDHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XXTDHMJRoomPaiDun = 13;
    //总的牌数量
    this.XXTDHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XXTDHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XXTDHMJRoomDealCardCount = this.XXTDHMJRoomJoinCount * this.XXTDHMJRoomDealPerPosCardCount;
};
var NYTHMJ = function () {
	//参与的人数
	this.NYTHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NYTHMJRoomPaiDun = 13;
	//总的牌数量
	this.NYTHMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.NYTHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NYTHMJRoomDealCardCount = this.NYTHMJRoomJoinCount * this.NYTHMJRoomDealPerPosCardCount;
};
var FCTDHMJ = function () {
	//参与的人数
	this.FCTDHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.FCTDHMJRoomPaiDun = 13;
	//总的牌数量
	this.FCTDHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.FCTDHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.FCTDHMJRoomDealCardCount = this.FCTDHMJRoomJoinCount * this.FCTDHMJRoomDealPerPosCardCount;
};
var HZJDMJ = function () {
    //参与的人数
    this.HZJDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HZJDMJRoomPaiDun = 16;
    //总的牌数量
    this.HZJDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HZJDMJRoomDealPerPosCardCount = 16;
    //发出去的牌数量
    this.HZJDMJRoomDealCardCount = this.HZJDMJRoomJoinCount * this.HZJDMJRoomDealPerPosCardCount;
};
var XYHCMJ = function () {
	//参与的人数
	this.XYHCMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XYHCMJRoomPaiDun = 13;
	//总的牌数量
	this.XYHCMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.XYHCMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XYHCMJRoomDealCardCount = this.XYHCMJRoomJoinCount * this.XYHCMJRoomDealPerPosCardCount;
};
var YHMJ = function () {
	//参与的人数
	this.YHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YHMJRoomPaiDun = 13;
	//总的牌数量
	this.YHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YHMJRoomDealCardCount = this.YHMJRoomJoinCount * this.YHMJRoomDealPerPosCardCount;
};
var GLQZMJ = function () {
    //参与的人数
    this.GLQZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GLQZMJRoomPaiDun = 13;
    //总的牌数量
    this.GLQZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GLQZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GLQZMJRoomDealCardCount = this.GLQZMJRoomJoinCount * this.GLQZMJRoomDealPerPosCardCount;
};
var YYMJ = function () {
    //参与的人数
    this.YYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YYMJRoomPaiDun = 13;
    //总的牌数量
    this.YYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YYMJRoomDealCardCount = this.YYMJRoomJoinCount * this.YYMJRoomDealPerPosCardCount;
};
var YZCHZ = function () {
    //参与的人数
    this.YZCHZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YZCHZRoomPaiDun = 13;
    //总的牌数量
    this.YZCHZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YZCHZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YZCHZRoomDealCardCount = this.YZCHZRoomJoinCount * this.YZCHZRoomDealPerPosCardCount;
};
var QJFXJMJ = function () {
    //参与的人数
    this.QJFXJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QJFXJMJRoomPaiDun = 13;
    //总的牌数量
    this.QJFXJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QJFXJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QJFXJMJRoomDealCardCount = this.QJFXJMJRoomJoinCount * this.QJFXJMJRoomDealPerPosCardCount;
};
var TJMJ = function () {
    //参与的人数
    this.TJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TJMJRoomPaiDun = 13;
    //总的牌数量
    this.TJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TJMJRoomDealCardCount = this.TJMJRoomJoinCount * this.TJMJRoomDealPerPosCardCount;
};
var YJNXMJ = function () {
    //参与的人数
    this.YJNXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YJNXMJRoomPaiDun = 13;
    //总的牌数量
    this.YJNXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YJNXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YJNXMJRoomDealCardCount = this.YJNXMJRoomJoinCount * this.YJNXMJRoomDealPerPosCardCount;
};
var GFT258MJ = function () {
    //参与的人数
    this.GFT258MJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GFT258MJRoomPaiDun = 13;
    //总的牌数量
    this.GFT258MJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GFT258MJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GFT258MJRoomDealCardCount = this.GFT258MJRoomJoinCount * this.GFT258MJRoomDealPerPosCardCount;
};
var HNSYMJ = function () {
	//参与的人数
	this.HNSYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNSYMJRoomPaiDun = 13;
	//总的牌数量
	this.HNSYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNSYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNSYMJRoomDealCardCount = this.HNSYMJRoomJoinCount * this.HNSYMJRoomDealPerPosCardCount;
};
var XSMJ = function () {
	//参与的人数
	this.XSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.XSMJRoomPaiDun = 13;
	//总的牌数量
	this.XSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.XSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.XSMJRoomDealCardCount = this.XSMJRoomJoinCount * this.XSMJRoomDealPerPosCardCount;
};

var XTLHMJ = function () {
    //参与的人数
    this.XTLHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XTLHMJRoomPaiDun = 13;
    //总的牌数量
    this.XTLHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XTLHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XTLHMJRoomDealCardCount = this.XTLHMJRoomJoinCount * this.XTLHMJRoomDealPerPosCardCount;
};
var GSLZMJ = function () {
    //参与的人数
    this.GSLZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GSLZMJRoomPaiDun = 13;
    //总的牌数量
    this.GSLZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GSLZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GSLZMJRoomDealCardCount = this.GSLZMJRoomJoinCount * this.GSLZMJRoomDealPerPosCardCount;
};
var LFPHMJ = function () {
    //参与的人数
    this.LFPHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LFPHMJRoomPaiDun = 13;
    //总的牌数量
    this.LFPHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LFPHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LFPHMJRoomDealCardCount = this.LFPHMJRoomJoinCount * this.LFPHMJRoomDealPerPosCardCount;
};
var HYLYMJ = function () {
	//参与的人数
	this.HYLYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HYLYMJRoomPaiDun = 13;
	//总的牌数量
	this.HYLYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HYLYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HYLYMJRoomDealCardCount = this.HYLYMJRoomJoinCount * this.HYLYMJRoomDealPerPosCardCount;
};
var HNYJMJ = function () {
	//参与的人数
	this.HNYJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HNYJMJRoomPaiDun = 13;
	//总的牌数量
	this.HNYJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HNYJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HNYJMJRoomDealCardCount = this.HNYJMJRoomJoinCount * this.HNYJMJRoomDealPerPosCardCount;
};
var TJTJMJ = function () {
    //参与的人数
    this.TJTJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TJTJMJRoomPaiDun = 13;
    //总的牌数量
    this.TJTJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TJTJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TJTJMJRoomDealCardCount = this.TJTJMJRoomJoinCount * this.TJTJMJRoomDealPerPosCardCount;
};
var NMGYZMJ = function () {
	//参与的人数
	this.NMGYZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NMGYZMJRoomPaiDun = 13;
	//总的牌数量
	this.NMGYZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NMGYZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NMGYZMJRoomDealCardCount = this.NMGYZMJRoomJoinCount * this.NMGYZMJRoomDealPerPosCardCount;
};
var BAMJ = function () {
	//参与的人数
	this.BAMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.BAMJRoomPaiDun = 13;
	//总的牌数量
	this.BAMJRoomAllCardCount = 152;
	//发牌阶段每个人领取卡牌数量
	this.BAMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.BAMJRoomDealCardCount = this.BAMJRoomJoinCount * this.BAMJRoomDealPerPosCardCount;
};
var AHHBMJ = function () {
    //参与的人数
    this.AHHBMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AHHBMJRoomPaiDun = 13;
    //总的牌数量
    this.AHHBMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AHHBMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AHHBMJRoomDealCardCount = this.AHHBMJRoomJoinCount * this.AHHBMJRoomDealPerPosCardCount;
};
var SFPHMJ = function () {
    //参与的人数
    this.SFPHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SFPHMJRoomPaiDun = 13;
    //总的牌数量
    this.SFPHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SFPHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SFPHMJRoomDealCardCount = this.SFPHMJRoomJoinCount * this.SFPHMJRoomDealPerPosCardCount;
};
var JCAHMJ = function () {
	//参与的人数
	this.JCAHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JCAHMJRoomPaiDun = 13;
	//总的牌数量
	this.JCAHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JCAHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JCAHMJRoomDealCardCount = this.JCAHMJRoomJoinCount * this.JCAHMJRoomDealPerPosCardCount;
};
var XNMJ = function () {
    //参与的人数
    this.XNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XNMJRoomPaiDun = 13;
    //总的牌数量
    this.XNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XNMJRoomDealCardCount = this.XNMJRoomJoinCount * this.XNMJRoomDealPerPosCardCount;
};
var HYHSMJ = function () {
	//参与的人数
	this.HYHSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HYHSMJRoomPaiDun = 13;
	//总的牌数量
	this.HYHSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HYHSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HYHSMJRoomDealCardCount = this.HYHSMJRoomJoinCount * this.HYHSMJRoomDealPerPosCardCount;
};
var JSMJ = function () {
	//参与的人数
	this.JSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JSMJRoomPaiDun = 13;
	//总的牌数量
	this.JSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JSMJRoomDealCardCount = this.JSMJRoomJoinCount * this.JSMJRoomDealPerPosCardCount;
};
var SDJNMJ = function () {
    //参与的人数
    this.SDJNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SDJNMJRoomPaiDun = 13;
    //总的牌数量
    this.SDJNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SDJNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SDJNMJRoomDealCardCount = this.SDJNMJRoomJoinCount * this.SDJNMJRoomDealPerPosCardCount;
};
var ZCMJ = function () {
    //参与的人数
    this.ZCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZCMJRoomPaiDun = 13;
    //总的牌数量
    this.ZCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZCMJRoomDealCardCount = this.ZCMJRoomJoinCount * this.ZCMJRoomDealPerPosCardCount;
};
var NYXXMJ = function () {
	//参与的人数
	this.NYXXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.NYXXMJRoomPaiDun = 13;
	//总的牌数量
	this.NYXXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.NYXXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.NYXXMJRoomDealCardCount = this.NYXXMJRoomJoinCount * this.NYXXMJRoomDealPerPosCardCount;
};
var TBHMJ = function(){
	//参与的人数
	this.TBHMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.TBHMJRoomPaiDun = 13;
	//总的牌数量
	this.TBHMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.TBHMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.TBHMJRoomDealCardCount = this.TBHMJRoomJoinCount*this.TBHMJRoomDealPerPosCardCount;
};
var PDSLSMJ = function () {
    //参与的人数
    this.PDSLSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PDSLSMJRoomPaiDun = 13;
    //总的牌数量
    this.PDSLSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PDSLSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PDSLSMJRoomDealCardCount = this.PDSLSMJRoomJoinCount * this.PDSLSMJRoomDealPerPosCardCount;
};
var NXMJ = function () {
    //参与的人数
    this.NXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NXMJRoomPaiDun = 13;
    //总的牌数量
    this.NXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NXMJRoomDealCardCount = this.NXMJRoomJoinCount * this.NXMJRoomDealPerPosCardCount;
};
var RZMJ = function () {
    //参与的人数
    this.RZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.RZMJRoomPaiDun = 13;
    //总的牌数量
    this.RZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.RZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.RZMJRoomDealCardCount = this.RZMJRoomJoinCount * this.RZMJRoomDealPerPosCardCount;
};
var CZDZMJ = function () {
    //参与的人数
    this.CZDZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CZDZMJRoomPaiDun = 13;
    //总的牌数量
    this.CZDZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CZDZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CZDZMJRoomDealCardCount = this.CZDZMJRoomJoinCount * this.CZDZMJRoomDealPerPosCardCount;
};
var JAWZ = function () {
    //参与的人数
    this.JAWZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JAWZRoomPaiDun = 13;
    //总的牌数量
    this.JAWZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JAWZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JAWZRoomDealCardCount = this.JAWZRoomJoinCount * this.JAWZRoomDealPerPosCardCount;
};
var THBBZ = function () {
    //参与的人数
    this.THBBZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.THBBZRoomPaiDun = 13;
    //总的牌数量
    this.THBBZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.THBBZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.THBBZRoomDealCardCount = this.THBBZRoomJoinCount * this.THBBZRoomDealPerPosCardCount;
};
var ZGQZMJ = function () {
    //参与的人数
    this.ZGQZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZGQZMJRoomPaiDun = 13;
    //总的牌数量
    this.ZGQZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZGQZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZGQZMJRoomDealCardCount = this.ZGQZMJRoomJoinCount * this.ZGQZMJRoomDealPerPosCardCount;
};
var SD = function () {
    //参与的人数
    this.SDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SDRoomPaiDun = 13;
    //总的牌数量
    this.SDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SDRoomDealCardCount = this.SDRoomJoinCount * this.SDRoomDealPerPosCardCount;
};
var SQYCMJ = function () {
    //参与的人数
    this.SQYCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SQYCMJRoomPaiDun = 13;
    //总的牌数量
    this.SQYCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SQYCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SQYCMJRoomDealCardCount = this.SQYCMJRoomJoinCount * this.SQYCMJRoomDealPerPosCardCount;
};
var MYMJ = function () {
	//参与的人数
	this.MYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.MYMJRoomPaiDun = 13;
	//总的牌数量
	this.MYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.MYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.MYMJRoomDealCardCount = this.MYMJRoomJoinCount * this.MYMJRoomDealPerPosCardCount;
};
var PDSJXMJ = function () {
    //参与的人数
    this.PDSJXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PDSJXMJRoomPaiDun = 13;
    //总的牌数量
    this.PDSJXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PDSJXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PDSJXMJRoomDealCardCount = this.PDSJXMJRoomJoinCount * this.PDSJXMJRoomDealPerPosCardCount;
};
var AFMJ = function () {
    //参与的人数
    this.AFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AFMJRoomPaiDun = 13;
    //总的牌数量
    this.AFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AFMJRoomDealCardCount = this.AFMJRoomJoinCount * this.AFMJRoomDealPerPosCardCount;
};
var STSTMJ = function () {
    //参与的人数
    this.STSTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.STSTMJRoomPaiDun = 13;
    //总的牌数量
    this.STSTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.STSTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.STSTMJRoomDealCardCount = this.STSTMJRoomJoinCount * this.STSTMJRoomDealPerPosCardCount;
};
var YFCGMJ = function () {
	//参与的人数
	this.YFCGMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YFCGMJRoomPaiDun = 13;
	//总的牌数量
	this.YFCGMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YFCGMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YFCGMJRoomDealCardCount = this.YFCGMJRoomJoinCount * this.YFCGMJRoomDealPerPosCardCount;
};
var STMJ = function () {
    //参与的人数
    this.STMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.STMJRoomPaiDun = 13;
    //总的牌数量
    this.STMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.STMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.STMJRoomDealCardCount = this.STMJRoomJoinCount * this.STMJRoomDealPerPosCardCount;
};
var QCDG = function () {
    //参与的人数
    this.QCDGRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QCDGRoomPaiDun = 13;
    //总的牌数量
    this.QCDGRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QCDGRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QCDGRoomDealCardCount = this.QCDGRoomJoinCount * this.QCDGRoomDealPerPosCardCount;
};
var QYPHMJ = function () {
    //参与的人数
    this.QYPHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QYPHMJRoomPaiDun = 13;
    //总的牌数量
    this.QYPHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QYPHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QYPHMJRoomDealCardCount = this.QYPHMJRoomJoinCount * this.QYPHMJRoomDealPerPosCardCount;
};
var BFMJ = function () {
    //参与的人数
    this.BFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.BFMJRoomPaiDun = 13;
    //总的牌数量
    this.BFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.BFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.BFMJRoomDealCardCount = this.BFMJRoomJoinCount * this.BFMJRoomDealPerPosCardCount;
};
var HFBZMJ = function () {
	//参与的人数
	this.HFBZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HFBZMJRoomPaiDun = 13;
	//总的牌数量
	this.HFBZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HFBZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HFBZMJRoomDealCardCount = this.HFBZMJRoomJoinCount * this.HFBZMJRoomDealPerPosCardCount;
};
var CYLYMJ = function () {
    //参与的人数
    this.CYLYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CYLYMJRoomPaiDun = 13;
    //总的牌数量
    this.CYLYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CYLYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CYLYMJRoomDealCardCount = this.CYLYMJRoomJoinCount * this.CYLYMJRoomDealPerPosCardCount;
};
var DTMJ = function () {
    //参与的人数
    this.DTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DTMJRoomPaiDun = 13;
    //总的牌数量
    this.DTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DTMJRoomDealCardCount = this.DTMJRoomJoinCount * this.DTMJRoomDealPerPosCardCount;
};
var CZCZMJ = function () {
	//参与的人数
	this.CZCZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CZCZMJRoomPaiDun = 13;
	//总的牌数量
	this.CZCZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CZCZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CZCZMJRoomDealCardCount = this.CZCZMJRoomJoinCount * this.CZCZMJRoomDealPerPosCardCount;
};
var TSDG = function () {
    //参与的人数
    this.TSDGRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TSDGRoomPaiDun = 13;
    //总的牌数量
    this.TSDGRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TSDGRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TSDGRoomDealCardCount = this.TSDGRoomJoinCount * this.TSDGRoomDealPerPosCardCount;
};
var PHMJ = function () {
    //参与的人数
    this.PHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PHMJRoomPaiDun = 13;
    //总的牌数量
    this.PHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PHMJRoomDealCardCount = this.PHMJRoomJoinCount * this.PHMJRoomDealPerPosCardCount;
};
var XSY = function () {
    //参与的人数
    this.XSYRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XSYRoomPaiDun = 13;
    //总的牌数量
    this.XSYRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XSYRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XSYRoomDealCardCount = this.XSYRoomJoinCount * this.XSYRoomDealPerPosCardCount;
};
var XSY = function () {
    //参与的人数
    this.XSYRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XSYRoomPaiDun = 13;
    //总的牌数量
    this.XSYRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XSYRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XSYRoomDealCardCount = this.XSYRoomJoinCount * this.XSYRoomDealPerPosCardCount;
};
var WZQSMJ = function () {
	//参与的人数
	this.WZQSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WZQSMJRoomPaiDun = 13;
	//总的牌数量
	this.WZQSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WZQSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WZQSMJRoomDealCardCount = this.WZQSMJRoomJoinCount * this.WZQSMJRoomDealPerPosCardCount;
};
var JZWZMJ = function () {
    //参与的人数
    this.JZWZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JZWZMJRoomPaiDun = 13;
    //总的牌数量
    this.JZWZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JZWZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JZWZMJRoomDealCardCount = this.JZWZMJRoomJoinCount * this.JZWZMJRoomDealPerPosCardCount;
};
var GJMJ = function () {
    //参与的人数
    this.GJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GJMJRoomPaiDun = 13;
    //总的牌数量
    this.GJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GJMJRoomDealCardCount = this.GJMJRoomJoinCount * this.GJMJRoomDealPerPosCardCount;
};
var GDCZMJ = function () {
	//参与的人数
	this.GDCZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.GDCZMJRoomPaiDun = 13;
	//总的牌数量
	this.GDCZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.GDCZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.GDCZMJRoomDealCardCount = this.GDCZMJRoomJoinCount * this.GDCZMJRoomDealPerPosCardCount;
};
var ASMJ = function () {
    //参与的人数
    this.ASMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ASMJRoomPaiDun = 13;
    //总的牌数量
    this.ASMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ASMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ASMJRoomDealCardCount = this.ASMJRoomJoinCount * this.ASMJRoomDealPerPosCardCount;
};
var HW = function () {
    //参与的人数
    this.HWRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HWRoomPaiDun = 13;
    //总的牌数量
    this.HWRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HWRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HWRoomDealCardCount = this.HWRoomJoinCount * this.HWRoomDealPerPosCardCount;
};
var QBSK = function () {
    //参与的人数
    this.QBSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QBSKRoomPaiDun = 13;
    //总的牌数量
    this.QBSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QBSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QBSKRoomDealCardCount = this.QBSKRoomJoinCount * this.QBSKRoomDealPerPosCardCount;
};
var SCPK = function () {
    //参与的人数
    this.SCPKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCPKRoomPaiDun = 13;
    //总的牌数量
    this.SCPKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCPKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCPKRoomDealCardCount = this.SCPKRoomJoinCount * this.SCPKRoomDealPerPosCardCount;
};
var WXZMMJ = function () {
	//参与的人数
	this.WXZMMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WXZMMJRoomPaiDun = 13;
	//总的牌数量
	this.WXZMMJRoomAllCardCount = 136;
	//发牌阶段每个人领取卡牌数量
	this.WXZMMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WXZMMJRoomDealCardCount = this.WXZMMJRoomJoinCount * this.WXZMMJRoomDealPerPosCardCount;
};
var LNSYMJ = function () {
	//参与的人数
	this.LNSYMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LNSYMJRoomPaiDun = 13;
	//总的牌数量
	this.LNSYMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LNSYMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LNSYMJRoomDealCardCount = this.LNSYMJRoomJoinCount * this.LNSYMJRoomDealPerPosCardCount;
};
var ST = function () {
    //参与的人数
    this.STRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.STRoomPaiDun = 13;
    //总的牌数量
    this.STRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.STRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.STRoomDealCardCount = this.STRoomJoinCount * this.STRoomDealPerPosCardCount;
};
var YCSDR = function () {
    //参与的人数
    this.YCSDRRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YCSDRRoomPaiDun = 13;
    //总的牌数量
    this.YCSDRRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YCSDRRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YCSDRRoomDealCardCount = this.YCSDRRoomJoinCount * this.YCSDRRoomDealPerPosCardCount;
};
var HLDMJ = function () {
	//参与的人数
	this.HLDMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.HLDMJRoomPaiDun = 13;
	//总的牌数量
	this.HLDMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.HLDMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.HLDMJRoomDealCardCount = this.HLDMJRoomJoinCount * this.HLDMJRoomDealPerPosCardCount;
};
var BSMJ = function () {
    //参与的人数
    this.BSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.BSMJRoomPaiDun = 13;
    //总的牌数量
    this.BSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.BSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.BSMJRoomDealCardCount = this.BSMJRoomJoinCount * this.BSMJRoomDealPerPosCardCount;
};
var TCPFMJ = function () {
    //参与的人数
    this.TCPFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TCPFMJRoomPaiDun = 13;
    //总的牌数量
    this.TCPFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TCPFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TCPFMJRoomDealCardCount = this.TCPFMJRoomJoinCount * this.TCPFMJRoomDealPerPosCardCount;
};
var QJFBBMJ = function () {
	//参与的人数
	this.QJFBBMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.QJFBBMJRoomPaiDun = 13;
	//总的牌数量
	this.QJFBBMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.QJFBBMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.QJFBBMJRoomDealCardCount = this.QJFBBMJRoomJoinCount * this.QJFBBMJRoomDealPerPosCardCount;
};

var CP = function () {
    //参与的人数
    this.CPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CPRoomPaiDun = 13;
    //总的牌数量
    this.CPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CPRoomDealCardCount = this.CPRoomJoinCount * this.CPRoomDealPerPosCardCount;
};
var XYWSK = function () {
    //参与的人数
    this.XYWSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XYWSKRoomPaiDun = 13;
    //总的牌数量
    this.XYWSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XYWSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XYWSKRoomDealCardCount = this.XYWSKRoomJoinCount * this.XYWSKRoomDealPerPosCardCount;
};
var CXYXMJ = function () {
	//参与的人数
	this.CXYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.CXYXMJRoomPaiDun = 13;
	//总的牌数量
	this.CXYXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.CXYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.CXYXMJRoomDealCardCount = this.CXYXMJRoomJoinCount * this.CXYXMJRoomDealPerPosCardCount;
};
var DSMJ = function () {
	//参与的人数
	this.DSMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.DSMJRoomPaiDun = 13;
	//总的牌数量
	this.DSMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.DSMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.DSMJRoomDealCardCount = this.DSMJRoomJoinCount * this.DSMJRoomDealPerPosCardCount;
};
var YCSGMJ = function () {
    //参与的人数
    this.YCSGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YCSGMJRoomPaiDun = 13;
    //总的牌数量
    this.YCSGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YCSGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YCSGMJRoomDealCardCount = this.YCSGMJRoomJoinCount * this.YCSGMJRoomDealPerPosCardCount;
};
var JMJSMJ = function () {
    //参与的人数
    this.JMJSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JMJSMJRoomPaiDun = 13;
    //总的牌数量
    this.JMJSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JMJSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JMJSMJRoomDealCardCount = this.JMJSMJRoomJoinCount * this.JMJSMJRoomDealPerPosCardCount;
};
var JXYZ = function () {
    //参与的人数
    this.JXYZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JXYZRoomPaiDun = 13;
    //总的牌数量
    this.JXYZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JXYZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JXYZRoomDealCardCount = this.JXYZRoomJoinCount * this.JXYZRoomDealPerPosCardCount;
};
var YCFXMJ = function () {
	//参与的人数
	this.YCFXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.YCFXMJRoomPaiDun = 13;
	//总的牌数量
	this.YCFXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.YCFXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.YCFXMJRoomDealCardCount = this.YCFXMJRoomJoinCount * this.YCFXMJRoomDealPerPosCardCount;
};
var SCNJMJ = function () {
    //参与的人数
    this.SCNJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCNJMJRoomPaiDun = 13;
    //总的牌数量
    this.SCNJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCNJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCNJMJRoomDealCardCount = this.SCNJMJRoomJoinCount * this.SCNJMJRoomDealPerPosCardCount;
};
var NBCXMJ = function () {
    //参与的人数
    this.NBCXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NBCXMJRoomPaiDun = 13;
    //总的牌数量
    this.NBCXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NBCXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NBCXMJRoomDealCardCount = this.NBCXMJRoomJoinCount * this.NBCXMJRoomDealPerPosCardCount;
};
var THKB = function () {
    //参与的人数
    this.THKBRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.THKBRoomPaiDun = 13;
    //总的牌数量
    this.THKBRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.THKBRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.THKBRoomDealCardCount = this.THKBRoomJoinCount * this.THKBRoomDealPerPosCardCount;
};
var PTMJ = function () {
    //参与的人数
    this.PTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PTMJRoomPaiDun = 13;
    //总的牌数量
    this.PTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PTMJRoomDealCardCount = this.PTMJRoomJoinCount * this.PTMJRoomDealPerPosCardCount;
};
var KLMJ = function () {
	//参与的人数
	this.KLMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.KLMJRoomPaiDun = 13;
	//总的牌数量
	this.KLMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.KLMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.KLMJRoomDealCardCount = this.KLMJRoomJoinCount * this.KLMJRoomDealPerPosCardCount;
};
var QWWES = function () {
    //参与的人数
    this.QWWESRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QWWESRoomPaiDun = 13;
    //总的牌数量
    this.QWWESRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QWWESRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QWWESRoomDealCardCount = this.QWWESRoomJoinCount * this.QWWESRoomDealPerPosCardCount;
};
var YFMJ = function () {
    //参与的人数
    this.YFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YFMJRoomPaiDun = 13;
    //总的牌数量
    this.YFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YFMJRoomDealCardCount = this.YFMJRoomJoinCount * this.YFMJRoomDealPerPosCardCount;
};
var JAYXDDZ = function () {
    //参与的人数
    this.JAYXDDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JAYXDDZRoomPaiDun = 13;
    //总的牌数量
    this.JAYXDDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JAYXDDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JAYXDDZRoomDealCardCount = this.JAYXDDZRoomJoinCount * this.JAYXDDZRoomDealPerPosCardCount;
};
var GAST = function () {
    //参与的人数
    this.GASTRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GASTRoomPaiDun = 13;
    //总的牌数量
    this.GASTRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GASTRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GASTRoomDealCardCount = this.GASTRoomJoinCount * this.GASTRoomDealPerPosCardCount;
};
var HEBMJ = function () {
    //参与的人数
    this.HEBMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HEBMJRoomPaiDun = 13;
    //总的牌数量
    this.HEBMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HEBMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HEBMJRoomDealCardCount = this.HEBMJRoomJoinCount * this.HEBMJRoomDealPerPosCardCount;
};
var PYSFT = function () {
    //参与的人数
    this.PYSFTRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PYSFTRoomPaiDun = 13;
    //总的牌数量
    this.PYSFTRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PYSFTRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PYSFTRoomDealCardCount = this.PYSFTRoomJoinCount * this.PYSFTRoomDealPerPosCardCount;
};
var SXZJMJ = function () {
    //参与的人数
    this.SXZJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SXZJMJRoomPaiDun = 13;
    //总的牌数量
    this.SXZJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SXZJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SXZJMJRoomDealCardCount = this.SXZJMJRoomJoinCount * this.SXZJMJRoomDealPerPosCardCount;
};
var SCGAMJ = function () {
    //参与的人数
    this.SCGAMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCGAMJRoomPaiDun = 13;
    //总的牌数量
    this.SCGAMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCGAMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCGAMJRoomDealCardCount = this.SCGAMJRoomJoinCount * this.SCGAMJRoomDealPerPosCardCount;
};
var SXMJ = function () {
    //参与的人数
    this.SXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SXMJRoomPaiDun = 13;
    //总的牌数量
    this.SXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SXMJRoomDealCardCount = this.SXMJRoomJoinCount * this.SXMJRoomDealPerPosCardCount;
};
var LWMJ = function () {
    //参与的人数
    this.LWMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LWMJRoomPaiDun = 13;
    //总的牌数量
    this.LWMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LWMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LWMJRoomDealCardCount = this.LWMJRoomJoinCount * this.LWMJRoomDealPerPosCardCount;
};
var WABJMJ = function () {
	//参与的人数
	this.WABJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.WABJMJRoomPaiDun = 13;
	//总的牌数量
	this.WABJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.WABJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.WABJMJRoomDealCardCount = this.WABJMJRoomJoinCount * this.WABJMJRoomDealPerPosCardCount;
};
var XJBJMJ = function () {
    //参与的人数
    this.XJBJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XJBJMJRoomPaiDun = 13;
    //总的牌数量
    this.XJBJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XJBJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XJBJMJRoomDealCardCount = this.XJBJMJRoomJoinCount * this.XJBJMJRoomDealPerPosCardCount;
};
var YCHP = function () {
    //参与的人数
    this.YCHPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YCHPRoomPaiDun = 13;
    //总的牌数量
    this.YCHPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YCHPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YCHPRoomDealCardCount = this.YCHPRoomJoinCount * this.YCHPRoomDealPerPosCardCount;
};
var SSE = function () {
	//参与的人数
	this.SSERoomJoinCount = 3;
	//每个人前面牌蹲数量
	this.SSERoomPaiDun = 23;
	//总的牌数量
	this.SSERoomAllCardCount = 130;
	//发牌阶段每个人领取卡牌数量
	this.SSERoomDealPerPosCardCount = 23;
	//发出去的牌数量
	this.SSERoomDealCardCount = this.SSERoomJoinCount * this.SSERoomDealPerPosCardCount;
};
var SDZZMJ = function () {
    //参与的人数
    this.SDZZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SDZZMJRoomPaiDun = 13;
    //总的牌数量
    this.SDZZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SDZZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SDZZMJRoomDealCardCount = this.SDZZMJRoomJoinCount * this.SDZZMJRoomDealPerPosCardCount;
};
var LGMJ = function () {
    //参与的人数
    this.LGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LGMJRoomPaiDun = 13;
    //总的牌数量
    this.LGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LGMJRoomDealPerPosCardCount = 16;
    //发出去的牌数量
    this.LGMJRoomDealCardCount = this.LGMJRoomJoinCount * this.LGMJRoomDealPerPosCardCount;
};
var LSYJMJ = function () {
	//参与的人数
	this.LSYJMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LSYJMJRoomPaiDun = 13;
	//总的牌数量
	this.LSYJMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LSYJMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LSYJMJRoomDealCardCount = this.LSYJMJRoomJoinCount * this.LSYJMJRoomDealPerPosCardCount;
};
var CDP = function () {
    //参与的人数
    this.CDPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CDPRoomPaiDun = 13;
    //总的牌数量
    this.CDPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CDPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CDPRoomDealCardCount = this.CDPRoomJoinCount * this.CDPRoomDealPerPosCardCount;
};
var CDXZMJ = function () {
    //参与的人数
    this.CDXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CDXZMJRoomPaiDun = 13;
    //总的牌数量
    this.CDXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CDXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CDXZMJRoomDealCardCount = this.CDXZMJRoomJoinCount * this.CDXZMJRoomDealPerPosCardCount;
};
var LZXZMJ = function () {
    //参与的人数
    this.LZXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LZXZMJRoomPaiDun = 13;
    //总的牌数量
    this.LZXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LZXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LZXZMJRoomDealCardCount = this.LZXZMJRoomJoinCount * this.LZXZMJRoomDealPerPosCardCount;
};
var WFBH = function () {
    //参与的人数
    this.WFBHRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WFBHRoomPaiDun = 13;
    //总的牌数量
    this.WFBHRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WFBHRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WFBHRoomDealCardCount = this.WFBHRoomJoinCount * this.WFBHRoomDealPerPosCardCount;
};
var PXMJ = function () {
    //参与的人数
    this.PXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PXMJRoomPaiDun = 13;
    //总的牌数量
    this.PXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PXMJRoomDealCardCount = this.PXMJRoomJoinCount * this.PXMJRoomDealPerPosCardCount;
};
var SDLCMJ = function () {
    //参与的人数
    this.SDLCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SDLCMJRoomPaiDun = 13;
    //总的牌数量
    this.SDLCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SDLCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SDLCMJRoomDealCardCount = this.SDLCMJRoomJoinCount * this.SDLCMJRoomDealPerPosCardCount;
};
var ZJGMJ = function () {
    //参与的人数
    this.ZJGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZJGMJRoomPaiDun = 13;
    //总的牌数量
    this.ZJGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZJGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZJGMJRoomDealCardCount = this.ZJGMJRoomJoinCount * this.ZJGMJRoomDealPerPosCardCount;
};
var ZJTZMJ = function () {
	//参与的人数
	this.ZJTZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.ZJTZMJRoomPaiDun = 13;
	//总的牌数量
	this.ZJTZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.ZJTZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.ZJTZMJRoomDealCardCount = this.ZJTZMJRoomJoinCount * this.ZJTZMJRoomDealPerPosCardCount;
};
var SYS = function () {
    //参与的人数
    this.SYSRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SYSRoomPaiDun = 13;
    //总的牌数量
    this.SYSRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SYSRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SYSRoomDealCardCount = this.SYSRoomJoinCount * this.SYSRoomDealPerPosCardCount;
};
var CNMJ = function () {
    //参与的人数
    this.CNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CNMJRoomPaiDun = 13;
    //总的牌数量
    this.CNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CNMJRoomDealCardCount = this.CNMJRoomJoinCount * this.CNMJRoomDealPerPosCardCount;
};
var DZZJ = function () {
    //参与的人数
    this.DZZJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DZZJRoomPaiDun = 13;
    //总的牌数量
    this.DZZJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DZZJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DZZJRoomDealCardCount = this.DZZJRoomJoinCount * this.DZZJRoomDealPerPosCardCount;
};
var SDHZMJ = function () {
	//参与的人数
	this.SDHZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.SDHZMJRoomPaiDun = 13;
	//总的牌数量
	this.SDHZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.SDHZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.SDHZMJRoomDealCardCount = this.SDHZMJRoomJoinCount * this.SDHZMJRoomDealPerPosCardCount;
};
var XLHZMJ = function () {
    //参与的人数
    this.XLHZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XLHZMJRoomPaiDun = 13;
    //总的牌数量
    this.XLHZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XLHZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XLHZMJRoomDealCardCount = this.XLHZMJRoomJoinCount * this.XLHZMJRoomDealPerPosCardCount;
};
var PYDD = function () {
    //参与的人数
    this.PYDDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PYDDRoomPaiDun = 13;
    //总的牌数量
    this.PYDDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PYDDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PYDDRoomDealCardCount = this.PYDDRoomJoinCount * this.PYDDRoomDealPerPosCardCount;
};
var NCAYMJ = function () {
    //参与的人数
    this.NCAYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NCAYMJRoomPaiDun = 13;
    //总的牌数量
    this.NCAYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NCAYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NCAYMJRoomDealCardCount = this.NCAYMJRoomJoinCount * this.NCAYMJRoomDealPerPosCardCount;
};
var KSMJ = function () {
    //参与的人数
    this.KSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.KSMJRoomPaiDun = 13;
    //总的牌数量
    this.KSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.KSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.KSMJRoomDealCardCount = this.KSMJRoomJoinCount * this.KSMJRoomDealPerPosCardCount;
};
var SYSYBP = function () {
    //参与的人数
    this.SYSYBPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SYSYBPRoomPaiDun = 13;
    //总的牌数量
    this.SYSYBPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SYSYBPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SYSYBPRoomDealCardCount = this.SYSYBPRoomJoinCount * this.SYSYBPRoomDealPerPosCardCount;
};
var TAMJ = function () {
    //参与的人数
    this.TAMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TAMJRoomPaiDun = 13;
    //总的牌数量
    this.TAMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TAMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TAMJRoomDealCardCount = this.TAMJRoomJoinCount * this.TAMJRoomDealPerPosCardCount;
};
var DPHMJ = function () {
    //参与的人数
    this.DPHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DPHMJRoomPaiDun = 13;
    //总的牌数量
    this.DPHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DPHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DPHMJRoomDealCardCount = this.DPHMJRoomJoinCount * this.DPHMJRoomDealPerPosCardCount;
};
var QDJT = function () {
    //参与的人数
    this.QDJTRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QDJTRoomPaiDun = 13;
    //总的牌数量
    this.QDJTRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QDJTRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QDJTRoomDealCardCount = this.QDJTRoomJoinCount * this.QDJTRoomDealPerPosCardCount;
};
var LSXZMJ = function () {
	//参与的人数
	this.LSXZMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.LSXZMJRoomPaiDun = 13;
	//总的牌数量
	this.LSXZMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.LSXZMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.LSXZMJRoomDealCardCount = this.LSXZMJRoomJoinCount * this.LSXZMJRoomDealPerPosCardCount;
};
var JAYXMJ = function () {
	//参与的人数
	this.JAYXMJRoomJoinCount = 4;
	//每个人前面牌蹲数量
	this.JAYXMJRoomPaiDun = 13;
	//总的牌数量
	this.JAYXMJRoomAllCardCount = 144;
	//发牌阶段每个人领取卡牌数量
	this.JAYXMJRoomDealPerPosCardCount = 13;
	//发出去的牌数量
	this.JAYXMJRoomDealCardCount = this.JAYXMJRoomJoinCount * this.JAYXMJRoomDealPerPosCardCount;
};
var XSDQ = function () {
    //参与的人数
    this.XSDQRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XSDQRoomPaiDun = 13;
    //总的牌数量
    this.XSDQRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XSDQRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XSDQRoomDealCardCount = this.XSDQRoomJoinCount * this.XSDQRoomDealPerPosCardCount;
};
var LHGMMJ = function () {
    //参与的人数
    this.LHGMMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LHGMMJRoomPaiDun = 13;
    //总的牌数量
    this.LHGMMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LHGMMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LHGMMJRoomDealCardCount = this.LHGMMJRoomJoinCount * this.LHGMMJRoomDealPerPosCardCount;
};
var HCNG = function () {
    //参与的人数
    this.HCNGRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HCNGRoomPaiDun = 13;
    //总的牌数量
    this.HCNGRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HCNGRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HCNGRoomDealCardCount = this.HCNGRoomJoinCount * this.HCNGRoomDealPerPosCardCount;
};
var JTMJ = function () {
    //参与的人数
    this.JTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JTMJRoomPaiDun = 13;
    //总的牌数量
    this.JTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JTMJRoomDealCardCount = this.JTMJRoomJoinCount * this.JTMJRoomDealPerPosCardCount;
};
var YBGXMJ = function () {
    //参与的人数
    this.YBGXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YBGXMJRoomPaiDun = 13;
    //总的牌数量
    this.YBGXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YBGXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YBGXMJRoomDealCardCount = this.YBGXMJRoomJoinCount * this.YBGXMJRoomDealPerPosCardCount;
};
var JTPDK = function () {
    //参与的人数
    this.JTPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JTPDKRoomPaiDun = 13;
    //总的牌数量
    this.JTPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JTPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JTPDKRoomDealCardCount = this.JTPDKRoomJoinCount * this.JTPDKRoomDealPerPosCardCount;
};
var XWMJ = function () {
    //参与的人数
    this.XWMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XWMJRoomPaiDun = 13;
    //总的牌数量
    this.XWMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XWMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XWMJRoomDealCardCount = this.XWMJRoomJoinCount * this.XWMJRoomDealPerPosCardCount;
};
var TZPDK = function () {
    //参与的人数
    this.TZPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TZPDKRoomPaiDun = 13;
    //总的牌数量
    this.TZPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TZPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TZPDKRoomDealCardCount = this.TZPDKRoomJoinCount * this.TZPDKRoomDealPerPosCardCount;
};
var WJMJ = function () {
    //参与的人数
    this.WJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WJMJRoomPaiDun = 13;
    //总的牌数量
    this.WJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WJMJRoomDealCardCount = this.WJMJRoomJoinCount * this.WJMJRoomDealPerPosCardCount;
};
var QDBH = function () {
    //参与的人数
    this.QDBHRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QDBHRoomPaiDun = 13;
    //总的牌数量
    this.QDBHRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QDBHRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QDBHRoomDealCardCount = this.QDBHRoomJoinCount * this.QDBHRoomDealPerPosCardCount;
};
var TJTGMJ = function () {
    //参与的人数
    this.TJTGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TJTGMJRoomPaiDun = 13;
    //总的牌数量
    this.TJTGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TJTGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TJTGMJRoomDealCardCount = this.TJTGMJRoomJoinCount * this.TJTGMJRoomDealPerPosCardCount;
};
var HAXYMJ = function () {
    //参与的人数
    this.HAXYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HAXYMJRoomPaiDun = 13;
    //总的牌数量
    this.HAXYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HAXYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HAXYMJRoomDealCardCount = this.HAXYMJRoomJoinCount * this.HAXYMJRoomDealPerPosCardCount;
};
var ZYMJ = function () {
    //参与的人数
    this.ZYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZYMJRoomPaiDun = 13;
    //总的牌数量
    this.ZYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZYMJRoomDealCardCount = this.ZYMJRoomJoinCount * this.ZYMJRoomDealPerPosCardCount;
};
var NTCP = function () {
    //参与的人数
    this.NTCPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NTCPRoomPaiDun = 23;
    //总的牌数量
    this.NTCPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NTCPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NTCPRoomDealCardCount = this.NTCPRoomJoinCount * this.NTCPRoomDealPerPosCardCount;
};
var LNJZMJ = function () {
    //参与的人数
    this.LNJZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LNJZMJRoomPaiDun = 13;
    //总的牌数量
    this.LNJZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LNJZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LNJZMJRoomDealCardCount = this.LNJZMJRoomJoinCount * this.LNJZMJRoomDealPerPosCardCount;
};
var JSSNMJ = function () {
    //参与的人数
    this.JSSNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JSSNMJRoomPaiDun = 13;
    //总的牌数量
    this.JSSNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JSSNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JSSNMJRoomDealCardCount = this.JSSNMJRoomJoinCount * this.JSSNMJRoomDealPerPosCardCount;
};
var JYESSZ = function () {
    //参与的人数
    this.JYESSZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JYESSZRoomPaiDun = 13;
    //总的牌数量
    this.JYESSZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JYESSZRoomDealPerPosCardCount = 23;
    //发出去的牌数量
    this.JYESSZRoomDealCardCount = this.JYESSZRoomJoinCount * this.JYESSZRoomDealPerPosCardCount;
};
var XCMJ = function () {
    //参与的人数
    this.XCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XCMJRoomPaiDun = 13;
    //总的牌数量
    this.XCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XCMJRoomDealCardCount = this.XCMJRoomJoinCount * this.XCMJRoomDealPerPosCardCount;
};
var HZBDMJ = function () {
    //参与的人数
    this.HZBDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HZBDMJRoomPaiDun = 13;
    //总的牌数量
    this.HZBDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HZBDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HZBDMJRoomDealCardCount = this.HZBDMJRoomJoinCount * this.HZBDMJRoomDealPerPosCardCount;
};
var BDJHMJ = function () {
    //参与的人数
    this.BDJHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.BDJHMJRoomPaiDun = 13;
    //总的牌数量
    this.BDJHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.BDJHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.BDJHMJRoomDealCardCount = this.BDJHMJRoomJoinCount * this.BDJHMJRoomDealPerPosCardCount;
};
var XCPDK = function () {
    //参与的人数
    this.XCPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XCPDKRoomPaiDun = 13;
    //总的牌数量
    this.XCPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XCPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XCPDKRoomDealCardCount = this.XCPDKRoomJoinCount * this.XCPDKRoomDealPerPosCardCount;
};
var HSHHMJ = function () {
    //参与的人数
    this.HSHHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HSHHMJRoomPaiDun = 13;
    //总的牌数量
    this.HSHHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HSHHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HSHHMJRoomDealCardCount = this.HSHHMJRoomJoinCount * this.HSHHMJRoomDealPerPosCardCount;
};
var MSMJ = function () {
    //参与的人数
    this.MSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.MSMJRoomPaiDun = 13;
    //总的牌数量
    this.MSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.MSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.MSMJRoomDealCardCount = this.MSMJRoomJoinCount * this.MSMJRoomDealPerPosCardCount;
};
var DYKKFMJ = function () {
    //参与的人数
    this.DYKKFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DYKKFMJRoomPaiDun = 13;
    //总的牌数量
    this.DYKKFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DYKKFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DYKKFMJRoomDealCardCount = this.DYKKFMJRoomJoinCount * this.DYKKFMJRoomDealPerPosCardCount;
};
var TZJJMJ = function () {
    //参与的人数
    this.TZJJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TZJJMJRoomPaiDun = 13;
    //总的牌数量
    this.TZJJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TZJJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TZJJMJRoomDealCardCount = this.TZJJMJRoomJoinCount * this.TZJJMJRoomDealPerPosCardCount;
};
var NFSD = function () {
    //参与的人数
    this.NFSDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NFSDRoomPaiDun = 13;
    //总的牌数量
    this.NFSDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NFSDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NFSDRoomDealCardCount = this.NFSDRoomJoinCount * this.NFSDRoomDealPerPosCardCount;
};
var GCMJ = function () {
    //参与的人数
    this.GCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GCMJRoomPaiDun = 13;
    //总的牌数量
    this.GCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GCMJRoomDealCardCount = this.GCMJRoomJoinCount * this.GCMJRoomDealPerPosCardCount;
};
var SCBZMJ = function () {
    //参与的人数
    this.SCBZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCBZMJRoomPaiDun = 13;
    //总的牌数量
    this.SCBZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCBZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCBZMJRoomDealCardCount = this.SCBZMJRoomJoinCount * this.SCBZMJRoomDealPerPosCardCount;
};
var DYZP = function () {
    //参与的人数
    this.DYZPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DYZPRoomPaiDun = 13;
    //总的牌数量
    this.DYZPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DYZPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DYZPRoomDealCardCount = this.DYZPRoomJoinCount * this.DYZPRoomDealPerPosCardCount;
};
var LYHMJ = function () {
    //参与的人数
    this.LYHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LYHMJRoomPaiDun = 13;
    //总的牌数量
    this.LYHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LYHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LYHMJRoomDealCardCount = this.LYHMJRoomJoinCount * this.LYHMJRoomDealPerPosCardCount;
};
var XGCGMJ = function () {
    //参与的人数
    this.XGCGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XGCGMJRoomPaiDun = 13;
    //总的牌数量
    this.XGCGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XGCGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XGCGMJRoomDealCardCount = this.XGCGMJRoomJoinCount * this.XGCGMJRoomDealPerPosCardCount;
};
var SCDYMJ = function () {
    //参与的人数
    this.SCDYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCDYMJRoomPaiDun = 13;
    //总的牌数量
    this.SCDYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCDYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCDYMJRoomDealCardCount = this.SCDYMJRoomJoinCount * this.SCDYMJRoomDealPerPosCardCount;
};
var TLMJ = function () {
    //参与的人数
    this.TLMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.TLMJRoomPaiDun = 13;
    //总的牌数量
    this.TLMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.TLMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.TLMJRoomDealCardCount = this.TLMJRoomJoinCount * this.TLMJRoomDealPerPosCardCount;
};
var ZZDMZ = function () {
    //参与的人数
    this.ZZDMZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZZDMZRoomPaiDun = 13;
    //总的牌数量
    this.ZZDMZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZZDMZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZZDMZRoomDealCardCount = this.ZZDMZRoomJoinCount * this.ZZDMZRoomDealPerPosCardCount;
};
var LCBJMJ = function () {
    //参与的人数
    this.LCBJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LCBJMJRoomPaiDun = 13;
    //总的牌数量
    this.LCBJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LCBJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LCBJMJRoomDealCardCount = this.LCBJMJRoomJoinCount * this.LCBJMJRoomDealPerPosCardCount;
};
var QJHHMJ = function () {
    //参与的人数
    this.QJHHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QJHHMJRoomPaiDun = 13;
    //总的牌数量
    this.QJHHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QJHHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QJHHMJRoomDealCardCount = this.QJHHMJRoomJoinCount * this.QJHHMJRoomDealPerPosCardCount;
};
var FDPK = function () {
    //参与的人数
    this.FDPKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.FDPKRoomPaiDun = 13;
    //总的牌数量
    this.FDPKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.FDPKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.FDPKRoomDealCardCount = this.FDPKRoomJoinCount * this.FDPKRoomDealPerPosCardCount;
};
var YFBS = function () {
    //参与的人数
    this.YFBSRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YFBSRoomPaiDun = 13;
    //总的牌数量
    this.YFBSRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YFBSRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YFBSRoomDealCardCount = this.YFBSRoomJoinCount * this.YFBSRoomDealPerPosCardCount;
};
var YAXZMJ = function () {
    //参与的人数
    this.YAXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YAXZMJRoomPaiDun = 13;
    //总的牌数量
    this.YAXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YAXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YAXZMJRoomDealCardCount = this.YAXZMJRoomJoinCount * this.YAXZMJRoomDealPerPosCardCount;
};
var SCGXMJ = function () {
    //参与的人数
    this.SCGXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCGXMJRoomPaiDun = 13;
    //总的牌数量
    this.SCGXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCGXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCGXMJRoomDealCardCount = this.SCGXMJRoomJoinCount * this.SCGXMJRoomDealPerPosCardCount;
};
var SCGXMJ = function () {
    //参与的人数
    this.SCGXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCGXMJRoomPaiDun = 13;
    //总的牌数量
    this.SCGXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCGXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCGXMJRoomDealCardCount = this.SCGXMJRoomJoinCount * this.SCGXMJRoomDealPerPosCardCount;
};
var EQW = function () {
    //参与的人数
    this.EQWRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.EQWRoomPaiDun = 13;
    //总的牌数量
    this.EQWRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.EQWRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.EQWRoomDealCardCount = this.EQWRoomJoinCount * this.EQWRoomDealPerPosCardCount;
};
var ESMJ = function () {
    //参与的人数
    this.ESMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ESMJRoomPaiDun = 13;
    //总的牌数量
    this.ESMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ESMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ESMJRoomDealCardCount = this.ESMJRoomJoinCount * this.ESMJRoomDealPerPosCardCount;
};
var YKMJ = function () {
    //参与的人数
    this.YKMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YKMJRoomPaiDun = 13;
    //总的牌数量
    this.YKMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YKMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YKMJRoomDealCardCount = this.YKMJRoomJoinCount * this.YKMJRoomDealPerPosCardCount;
};
var QJHZMJ = function () {
    //参与的人数
    this.QJHZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QJHZMJRoomPaiDun = 13;
    //总的牌数量
    this.QJHZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QJHZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QJHZMJRoomDealCardCount = this.QJHZMJRoomJoinCount * this.QJHZMJRoomDealPerPosCardCount;
};
var HBCXMJ = function () {
    //参与的人数
    this.HBCXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HBCXMJRoomPaiDun = 13;
    //总的牌数量
    this.HBCXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HBCXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HBCXMJRoomDealCardCount = this.HBCXMJRoomJoinCount * this.HBCXMJRoomDealPerPosCardCount;
};
var WDMJ = function () {
    //参与的人数
    this.WDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WDMJRoomPaiDun = 13;
    //总的牌数量
    this.WDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WDMJRoomDealCardCount = this.WDMJRoomJoinCount * this.WDMJRoomDealPerPosCardCount;
};
var MSXLMJ = function () {
    //参与的人数
    this.MSXLMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.MSXLMJRoomPaiDun = 13;
    //总的牌数量
    this.MSXLMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.MSXLMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.MSXLMJRoomDealCardCount = this.MSXLMJRoomJoinCount * this.MSXLMJRoomDealPerPosCardCount;
};
var WSBEA = function () {
    //参与的人数
    this.WSBEARoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WSBEARoomPaiDun = 13;
    //总的牌数量
    this.WSBEARoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WSBEARoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WSBEARoomDealCardCount = this.WSBEARoomJoinCount * this.WSBEARoomDealPerPosCardCount;
};
var QJPDK = function () {
    //参与的人数
    this.QJPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QJPDKRoomPaiDun = 13;
    //总的牌数量
    this.QJPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QJPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QJPDKRoomDealCardCount = this.QJPDKRoomJoinCount * this.QJPDKRoomDealPerPosCardCount;
};
var LNASMJ = function () {
    //参与的人数
    this.LNASMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LNASMJRoomPaiDun = 13;
    //总的牌数量
    this.LNASMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LNASMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LNASMJRoomDealCardCount = this.LNASMJRoomJoinCount * this.LNASMJRoomDealPerPosCardCount;
};
var HZZMJ = function () {
    //参与的人数
    this.HZZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HZZMJRoomPaiDun = 13;
    //总的牌数量
    this.HZZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HZZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HZZMJRoomDealCardCount = this.HZZMJRoomJoinCount * this.HZZMJRoomDealPerPosCardCount;
};
var WXTDHMJ = function () {
    //参与的人数
    this.WXTDHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WXTDHMJRoomPaiDun = 13;
    //总的牌数量
    this.WXTDHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WXTDHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WXTDHMJRoomDealCardCount = this.WXTDHMJRoomJoinCount * this.WXTDHMJRoomDealPerPosCardCount;
};
var HJMJ = function () {
    //参与的人数
    this.HJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HJMJRoomPaiDun = 13;
    //总的牌数量
    this.HJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HJMJRoomDealCardCount = this.HJMJRoomJoinCount * this.HJMJRoomDealPerPosCardCount;
};
var SJCCMJ = function () {
    //参与的人数
    this.SJCCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SJCCMJRoomPaiDun = 13;
    //总的牌数量
    this.SJCCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SJCCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SJCCMJRoomDealCardCount = this.SJCCMJRoomJoinCount * this.SJCCMJRoomDealPerPosCardCount;
};
var SCNCMJ = function () {
    //参与的人数
    this.SCNCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCNCMJRoomPaiDun = 13;
    //总的牌数量
    this.SCNCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCNCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCNCMJRoomDealCardCount = this.SCNCMJRoomJoinCount * this.SCNCMJRoomDealPerPosCardCount;
};
var JSJYMJ = function () {
    //参与的人数
    this.JSJYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JSJYMJRoomPaiDun = 13;
    //总的牌数量
    this.JSJYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JSJYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JSJYMJRoomDealCardCount = this.JSJYMJRoomJoinCount * this.JSJYMJRoomDealPerPosCardCount;
};
var XZDDMJ = function () {
    //参与的人数
    this.XZDDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XZDDMJRoomPaiDun = 13;
    //总的牌数量
    this.XZDDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XZDDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XZDDMJRoomDealCardCount = this.XZDDMJRoomJoinCount * this.XZDDMJRoomDealPerPosCardCount;
};
var RGJAMJ = function () {
    //参与的人数
    this.RGJAMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.RGJAMJRoomPaiDun = 13;
    //总的牌数量
    this.RGJAMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.RGJAMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.RGJAMJRoomDealCardCount = this.RGJAMJRoomJoinCount * this.RGJAMJRoomDealPerPosCardCount;
};
var LCZP = function () {
    //参与的人数
    this.LCZPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LCZPRoomPaiDun = 13;
    //总的牌数量
    this.LCZPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LCZPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LCZPRoomDealCardCount = this.LCZPRoomJoinCount * this.LCZPRoomDealPerPosCardCount;
};
var YBXZMJ = function () {
    //参与的人数
    this.YBXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YBXZMJRoomPaiDun = 13;
    //总的牌数量
    this.YBXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YBXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YBXZMJRoomDealCardCount = this.YBXZMJRoomJoinCount * this.YBXZMJRoomDealPerPosCardCount;
};
var HBHSMJ = function () {
    //参与的人数
    this.HBHSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HBHSMJRoomPaiDun = 13;
    //总的牌数量
    this.HBHSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HBHSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HBHSMJRoomDealCardCount = this.HBHSMJRoomJoinCount * this.HBHSMJRoomDealPerPosCardCount;
};
var LCPDK = function () {
    //参与的人数
    this.LCPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.LCPDKRoomPaiDun = 13;
    //总的牌数量
    this.LCPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.LCPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.LCPDKRoomDealCardCount = this.LCPDKRoomJoinCount * this.LCPDKRoomDealPerPosCardCount;
};
var JMSMJ = function () {
    //参与的人数
    this.JMSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JMSMJRoomPaiDun = 13;
    //总的牌数量
    this.JMSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JMSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JMSMJRoomDealCardCount = this.JMSMJRoomJoinCount * this.JMSMJRoomDealPerPosCardCount;
};
var XLBBP = function () {
    //参与的人数
    this.XLBBPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XLBBPRoomPaiDun = 13;
    //总的牌数量
    this.XLBBPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XLBBPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XLBBPRoomDealCardCount = this.XLBBPRoomJoinCount * this.XLBBPRoomDealPerPosCardCount;
};
var GGMJ = function () {
    //参与的人数
    this.GGMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GGMJRoomPaiDun = 13;
    //总的牌数量
    this.GGMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GGMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GGMJRoomDealCardCount = this.GGMJRoomJoinCount * this.GGMJRoomDealPerPosCardCount;
};
var JSTXMJ = function () {
    //参与的人数
    this.JSTXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JSTXMJRoomPaiDun = 13;
    //总的牌数量
    this.JSTXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JSTXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JSTXMJRoomDealCardCount = this.JSTXMJRoomJoinCount * this.JSTXMJRoomDealPerPosCardCount;
};
var GLMJ = function () {
    //参与的人数
    this.GLMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GLMJRoomPaiDun = 13;
    //总的牌数量
    this.GLMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GLMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GLMJRoomDealCardCount = this.GLMJRoomJoinCount * this.GLMJRoomDealPerPosCardCount;
};
var PZHXZMJ = function () {
    //参与的人数
    this.PZHXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PZHXZMJRoomPaiDun = 13;
    //总的牌数量
    this.PZHXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PZHXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PZHXZMJRoomDealCardCount = this.PZHXZMJRoomJoinCount * this.PZHXZMJRoomDealPerPosCardCount;
};
var NXHSMJ = function () {
    //参与的人数
    this.NXHSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NXHSMJRoomPaiDun = 13;
    //总的牌数量
    this.NXHSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NXHSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NXHSMJRoomDealCardCount = this.NXHSMJRoomJoinCount * this.NXHSMJRoomDealPerPosCardCount;
};
var GFMJ = function () {
    //参与的人数
    this.GFMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GFMJRoomPaiDun = 13;
    //总的牌数量
    this.GFMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GFMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GFMJRoomDealCardCount = this.GFMJRoomJoinCount * this.GFMJRoomDealPerPosCardCount;
};
var WXPDK = function () {
    //参与的人数
    this.WXPDKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WXPDKRoomPaiDun = 13;
    //总的牌数量
    this.WXPDKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WXPDKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WXPDKRoomDealCardCount = this.WXPDKRoomJoinCount * this.WXPDKRoomDealPerPosCardCount;
};
var SDDMJ = function () {
    //参与的人数
    this.SDDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SDDMJRoomPaiDun = 13;
    //总的牌数量
    this.SDDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SDDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SDDMJRoomDealCardCount = this.SDDMJRoomJoinCount * this.SDDMJRoomDealPerPosCardCount;
};
var HCMJ = function () {
    //参与的人数
    this.HCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HCMJRoomPaiDun = 13;
    //总的牌数量
    this.HCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HCMJRoomDealCardCount = this.HCMJRoomJoinCount * this.HCMJRoomDealPerPosCardCount;
};
var JJWNMJ = function () {
    //参与的人数
    this.JJWNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JJWNMJRoomPaiDun = 13;
    //总的牌数量
    this.JJWNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JJWNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JJWNMJRoomDealCardCount = this.JJWNMJRoomJoinCount * this.JJWNMJRoomDealPerPosCardCount;
};
var YXMDMJ = function () {
    //参与的人数
    this.YXMDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YXMDMJRoomPaiDun = 13;
    //总的牌数量
    this.YXMDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YXMDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YXMDMJRoomDealCardCount = this.YXMDMJRoomJoinCount * this.YXMDMJRoomDealPerPosCardCount;
};
var DYXLMJ = function () {
    //参与的人数
    this.DYXLMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DYXLMJRoomPaiDun = 13;
    //总的牌数量
    this.DYXLMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DYXLMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DYXLMJRoomDealCardCount = this.DYXLMJRoomJoinCount * this.DYXLMJRoomDealPerPosCardCount;
};
var XJTMJ = function () {
    //参与的人数
    this.XJTMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XJTMJRoomPaiDun = 13;
    //总的牌数量
    this.XJTMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XJTMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XJTMJRoomDealCardCount = this.XJTMJRoomJoinCount * this.XJTMJRoomDealPerPosCardCount;
};
var KJMJ = function () {
    //参与的人数
    this.KJMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.KJMJRoomPaiDun = 13;
    //总的牌数量
    this.KJMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.KJMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.KJMJRoomDealCardCount = this.KJMJRoomJoinCount * this.KJMJRoomDealPerPosCardCount;
};
var WXQWZMJ = function () {
    //参与的人数
    this.WXQWZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WXQWZMJRoomPaiDun = 13;
    //总的牌数量
    this.WXQWZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WXQWZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WXQWZMJRoomDealCardCount = this.WXQWZMJRoomJoinCount * this.WXQWZMJRoomDealPerPosCardCount;
};
var ZQMJ = function () {
    //参与的人数
    this.ZQMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZQMJRoomPaiDun = 13;
    //总的牌数量
    this.ZQMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZQMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZQMJRoomDealCardCount = this.ZQMJRoomJoinCount * this.ZQMJRoomDealPerPosCardCount;
};
var JXDD = function () {
    //参与的人数
    this.JXDDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JXDDRoomPaiDun = 13;
    //总的牌数量
    this.JXDDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JXDDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JXDDRoomDealCardCount = this.JXDDRoomJoinCount * this.JXDDRoomDealPerPosCardCount;
};
var QJWSK = function () {
    //参与的人数
    this.QJWSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QJWSKRoomPaiDun = 13;
    //总的牌数量
    this.QJWSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QJWSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QJWSKRoomDealCardCount = this.QJWSKRoomJoinCount * this.QJWSKRoomDealPerPosCardCount;
};
var WWMJ = function () {
    //参与的人数
    this.WWMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WWMJRoomPaiDun = 13;
    //总的牌数量
    this.WWMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WWMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WWMJRoomDealCardCount = this.WWMJRoomJoinCount * this.WWMJRoomDealPerPosCardCount;
};
var SCLSMJ = function () {
    //参与的人数
    this.SCLSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SCLSMJRoomPaiDun = 13;
    //总的牌数量
    this.SCLSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SCLSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SCLSMJRoomDealCardCount = this.SCLSMJRoomJoinCount * this.SCLSMJRoomDealPerPosCardCount;
};
var HGXSMJ = function () {
    //参与的人数
    this.HGXSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HGXSMJRoomPaiDun = 13;
    //总的牌数量
    this.HGXSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HGXSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HGXSMJRoomDealCardCount = this.HGXSMJRoomJoinCount * this.HGXSMJRoomDealPerPosCardCount;
};
var SNMJ = function () {
    //参与的人数
    this.SNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SNMJRoomPaiDun = 13;
    //总的牌数量
    this.SNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SNMJRoomDealCardCount = this.SNMJRoomJoinCount * this.SNMJRoomDealPerPosCardCount;
};
var AHJXMJ = function () {
    //参与的人数
    this.AHJXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AHJXMJRoomPaiDun = 13;
    //总的牌数量
    this.AHJXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AHJXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AHJXMJRoomDealCardCount = this.AHJXMJRoomJoinCount * this.AHJXMJRoomDealPerPosCardCount;
};
var GFWSK = function () {
    //参与的人数
    this.GFWSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GFWSKRoomPaiDun = 13;
    //总的牌数量
    this.GFWSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GFWSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GFWSKRoomDealCardCount = this.GFWSKRoomJoinCount * this.GFWSKRoomDealPerPosCardCount;
};
var YJLYMJ = function () {
    //参与的人数
    this.YJLYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YJLYMJRoomPaiDun = 13;
    //总的牌数量
    this.YJLYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YJLYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YJLYMJRoomDealCardCount = this.YJLYMJRoomJoinCount * this.YJLYMJRoomDealPerPosCardCount;
};
var JTQWZMJ = function () {
    //参与的人数
    this.JTQWZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JTQWZMJRoomPaiDun = 13;
    //总的牌数量
    this.JTQWZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JTQWZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JTQWZMJRoomDealCardCount = this.JTQWZMJRoomJoinCount * this.JTQWZMJRoomDealPerPosCardCount;
};
var JZXSMJ = function () {
    //参与的人数
    this.JZXSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JZXSMJRoomPaiDun = 13;
    //总的牌数量
    this.JZXSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JZXSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JZXSMJRoomDealCardCount = this.JZXSMJRoomJoinCount * this.JZXSMJRoomDealPerPosCardCount;
};
var GYXZMJ = function () {
    //参与的人数
    this.GYXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GYXZMJRoomPaiDun = 13;
    //总的牌数量
    this.GYXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GYXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GYXZMJRoomDealCardCount = this.GYXZMJRoomJoinCount * this.GYXZMJRoomDealPerPosCardCount;
};
var SRYYMJ = function () {
    //参与的人数
    this.SRYYMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SRYYMJRoomPaiDun = 13;
    //总的牌数量
    this.SRYYMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SRYYMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SRYYMJRoomDealCardCount = this.SRYYMJRoomJoinCount * this.SRYYMJRoomDealPerPosCardCount;
};
var CXDZ = function () {
    //参与的人数
    this.CXDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CXDZRoomPaiDun = 13;
    //总的牌数量
    this.CXDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CXDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CXDZRoomDealCardCount = this.CXDZRoomJoinCount * this.CXDZRoomDealPerPosCardCount;
};
var QXWQ = function () {
    //参与的人数
    this.QXWQRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QXWQRoomPaiDun = 13;
    //总的牌数量
    this.QXWQRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QXWQRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QXWQRoomDealCardCount = this.QXWQRoomJoinCount * this.QXWQRoomDealPerPosCardCount;
};
var BHMJ = function () {
    //参与的人数
    this.BHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.BHMJRoomPaiDun = 13;
    //总的牌数量
    this.BHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.BHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.BHMJRoomDealCardCount = this.BHMJRoomJoinCount * this.BHMJRoomDealPerPosCardCount;
};
var NNMJ = function () {
    //参与的人数
    this.NNMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.NNMJRoomPaiDun = 13;
    //总的牌数量
    this.NNMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.NNMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.NNMJRoomDealCardCount = this.NNMJRoomJoinCount * this.NNMJRoomDealPerPosCardCount;
};
var ZYXZMJ = function () {
    //参与的人数
    this.ZYXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.ZYXZMJRoomPaiDun = 13;
    //总的牌数量
    this.ZYXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.ZYXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.ZYXZMJRoomDealCardCount = this.ZYXZMJRoomJoinCount * this.ZYXZMJRoomDealPerPosCardCount;
};
var QSJ = function () {
    //参与的人数
    this.QSJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QSJRoomPaiDun = 13;
    //总的牌数量
    this.QSJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QSJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QSJRoomDealCardCount = this.QSJRoomJoinCount * this.QSJRoomDealPerPosCardCount;
};
var GDCSMJ = function () {
    //参与的人数
    this.GDCSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.GDCSMJRoomPaiDun = 13;
    //总的牌数量
    this.GDCSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.GDCSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.GDCSMJRoomDealCardCount = this.GDCSMJRoomJoinCount * this.GDCSMJRoomDealPerPosCardCount;
};
var HNHZMJ = function () {
    //参与的人数
    this.HNHZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HNHZMJRoomPaiDun = 13;
    //总的牌数量
    this.HNHZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HNHZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HNHZMJRoomDealCardCount = this.HNHZMJRoomJoinCount * this.HNHZMJRoomDealPerPosCardCount;
};
var DQDZ = function () {
    //参与的人数
    this.DQDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DQDZRoomPaiDun = 13;
    //总的牌数量
    this.DQDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DQDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DQDZRoomDealCardCount = this.DQDZRoomJoinCount * this.DQDZRoomDealPerPosCardCount;
};
var WLCBMJ = function () {
    //参与的人数
    this.WLCBMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WLCBMJRoomPaiDun = 13;
    //总的牌数量
    this.WLCBMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WLCBMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WLCBMJRoomDealCardCount = this.WLCBMJRoomJoinCount * this.WLCBMJRoomDealPerPosCardCount;
};
var XSWSK = function () {
    //参与的人数
    this.XSWSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.XSWSKRoomPaiDun = 13;
    //总的牌数量
    this.XSWSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.XSWSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.XSWSKRoomDealCardCount = this.XSWSKRoomJoinCount * this.XSWSKRoomDealPerPosCardCount;
};
var AHLXMJ = function () {
    //参与的人数
    this.AHLXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AHLXMJRoomPaiDun = 13;
    //总的牌数量
    this.AHLXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AHLXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AHLXMJRoomDealCardCount = this.AHLXMJRoomJoinCount * this.AHLXMJRoomDealPerPosCardCount;
};
var HXDZ = function () {
    //参与的人数
    this.HXDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HXDZRoomPaiDun = 13;
    //总的牌数量
    this.HXDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HXDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HXDZRoomDealCardCount = this.HXDZRoomJoinCount * this.HXDZRoomDealPerPosCardCount;
};
var SWTDHMJ = function () {
    //参与的人数
    this.SWTDHMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SWTDHMJRoomPaiDun = 13;
    //总的牌数量
    this.SWTDHMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SWTDHMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SWTDHMJRoomDealCardCount = this.SWTDHMJRoomJoinCount * this.SWTDHMJRoomDealPerPosCardCount;
};
var DBWSK = function () {
    //参与的人数
    this.DBWSKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DBWSKRoomPaiDun = 13;
    //总的牌数量
    this.DBWSKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DBWSKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DBWSKRoomDealCardCount = this.DBWSKRoomJoinCount * this.DBWSKRoomDealPerPosCardCount;
};
var WHBH = function () {
    //参与的人数
    this.WHBHRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WHBHRoomPaiDun = 13;
    //总的牌数量
    this.WHBHRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WHBHRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WHBHRoomDealCardCount = this.WHBHRoomJoinCount * this.WHBHRoomDealPerPosCardCount;
};
var YLMJ = function () {
    //参与的人数
    this.YLMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YLMJRoomPaiDun = 13;
    //总的牌数量
    this.YLMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YLMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YLMJRoomDealCardCount = this.YLMJRoomJoinCount * this.YLMJRoomDealPerPosCardCount;
};
var YNLCMJ = function () {
    //参与的人数
    this.YNLCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YNLCMJRoomPaiDun = 13;
    //总的牌数量
    this.YNLCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YNLCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YNLCMJRoomDealCardCount = this.YNLCMJRoomJoinCount * this.YNLCMJRoomDealPerPosCardCount;
};
var PEMJ = function () {
    //参与的人数
    this.PEMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.PEMJRoomPaiDun = 13;
    //总的牌数量
    this.PEMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.PEMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.PEMJRoomDealCardCount = this.PEMJRoomJoinCount * this.PEMJRoomDealPerPosCardCount;
};
var DSP = function () {
    //参与的人数
    this.DSPRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DSPRoomPaiDun = 13;
    //总的牌数量
    this.DSPRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DSPRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DSPRoomDealCardCount = this.DSPRoomJoinCount * this.DSPRoomDealPerPosCardCount;
};
var DZXZMJ = function () {
    //参与的人数
    this.DZXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.DZXZMJRoomPaiDun = 13;
    //总的牌数量
    this.DZXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.DZXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.DZXZMJRoomDealCardCount = this.DZXZMJRoomJoinCount * this.DZXZMJRoomDealPerPosCardCount;
};
var BSYZF = function () {
    //参与的人数
    this.BSYZFRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.BSYZFRoomPaiDun = 13;
    //总的牌数量
    this.BSYZFRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.BSYZFRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.BSYZFRoomDealCardCount = this.BSYZFRoomJoinCount * this.BSYZFRoomDealPerPosCardCount;
};
var AHJSMJ = function () {
    //参与的人数
    this.AHJSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.AHJSMJRoomPaiDun = 13;
    //总的牌数量
    this.AHJSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.AHJSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.AHJSMJRoomDealCardCount = this.AHJSMJRoomJoinCount * this.AHJSMJRoomDealPerPosCardCount;
};
var JLPK = function () {
    //参与的人数
    this.JLPKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JLPKRoomPaiDun = 13;
    //总的牌数量
    this.JLPKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JLPKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JLPKRoomDealCardCount = this.JLPKRoomJoinCount * this.JLPKRoomDealPerPosCardCount;
};
var HSPK = function () {
    //参与的人数
    this.HSPKRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HSPKRoomPaiDun = 13;
    //总的牌数量
    this.HSPKRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HSPKRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HSPKRoomDealCardCount = this.HSPKRoomJoinCount * this.HSPKRoomDealPerPosCardCount;
};
var RAR = function () {
    //参与的人数
    this.RARRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.RARRoomPaiDun = 13;
    //总的牌数量
    this.RARRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.RARRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.RARRoomDealCardCount = this.RARRoomJoinCount * this.RARRoomDealPerPosCardCount;
};
var FKBD = function () {
    //参与的人数
    this.FKBDRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.FKBDRoomPaiDun = 13;
    //总的牌数量
    this.FKBDRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.FKBDRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.FKBDRoomDealCardCount = this.FKBDRoomJoinCount * this.FKBDRoomDealPerPosCardCount;
};
var QWMJ = function () {
    //参与的人数
    this.QWMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QWMJRoomPaiDun = 13;
    //总的牌数量
    this.QWMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QWMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QWMJRoomDealCardCount = this.QWMJRoomJoinCount * this.QWMJRoomDealPerPosCardCount;
};
var YNBSMJ = function () {
    //参与的人数
    this.YNBSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.YNBSMJRoomPaiDun = 13;
    //总的牌数量
    this.YNBSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.YNBSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.YNBSMJRoomDealCardCount = this.YNBSMJRoomJoinCount * this.YNBSMJRoomDealPerPosCardCount;
};
var SWPMMJ = function () {
    //参与的人数
    this.SWPMMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SWPMMJRoomPaiDun = 13;
    //总的牌数量
    this.SWPMMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SWPMMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SWPMMJRoomDealCardCount = this.SWPMMJRoomJoinCount * this.SWPMMJRoomDealPerPosCardCount;
};
var SHJSMJ = function () {
    //参与的人数
    this.SHJSMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SHJSMJRoomPaiDun = 13;
    //总的牌数量
    this.SHJSMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SHJSMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SHJSMJRoomDealCardCount = this.SHJSMJRoomJoinCount * this.SHJSMJRoomDealPerPosCardCount;
};
var QHDMJ = function () {
    //参与的人数
    this.QHDMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.QHDMJRoomPaiDun = 13;
    //总的牌数量
    this.QHDMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.QHDMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.QHDMJRoomDealCardCount = this.QHDMJRoomJoinCount * this.QHDMJRoomDealPerPosCardCount;
};
var CBDG = function () {
    //参与的人数
    this.CBDGRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CBDGRoomPaiDun = 13;
    //总的牌数量
    this.CBDGRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CBDGRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CBDGRoomDealCardCount = this.CBDGRoomJoinCount * this.CBDGRoomDealPerPosCardCount;
};
var JXZXMJ = function () {
    //参与的人数
    this.JXZXMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JXZXMJRoomPaiDun = 13;
    //总的牌数量
    this.JXZXMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JXZXMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JXZXMJRoomDealCardCount = this.JXZXMJRoomJoinCount * this.JXZXMJRoomDealPerPosCardCount;
};
var WZXZMJ = function () {
    //参与的人数
    this.WZXZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.WZXZMJRoomPaiDun = 13;
    //总的牌数量
    this.WZXZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.WZXZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.WZXZMJRoomDealCardCount = this.WZXZMJRoomJoinCount * this.WZXZMJRoomDealPerPosCardCount;
};
var JXNCMJ = function () {
    //参与的人数
    this.JXNCMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.JXNCMJRoomPaiDun = 13;
    //总的牌数量
    this.JXNCMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.JXNCMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.JXNCMJRoomDealCardCount = this.JXNCMJRoomJoinCount * this.JXNCMJRoomDealPerPosCardCount;
};
var HXDZMJ = function () {
    //参与的人数
    this.HXDZMJRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.HXDZMJRoomPaiDun = 13;
    //总的牌数量
    this.HXDZMJRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.HXDZMJRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.HXDZMJRoomDealCardCount = this.HXDZMJRoomJoinCount * this.HXDZMJRoomDealPerPosCardCount;
};
var SRDZ = function () {
    //参与的人数
    this.SRDZRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.SRDZRoomPaiDun = 13;
    //总的牌数量
    this.SRDZRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.SRDZRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.SRDZRoomDealCardCount = this.SRDZRoomJoinCount * this.SRDZRoomDealPerPosCardCount;
};
var CSMSY = function () {
    //参与的人数
    this.CSMSYRoomJoinCount = 4;
    //每个人前面牌蹲数量
    this.CSMSYRoomPaiDun = 13;
    //总的牌数量
    this.CSMSYRoomAllCardCount = 144;
    //发牌阶段每个人领取卡牌数量
    this.CSMSYRoomDealPerPosCardCount = 13;
    //发出去的牌数量
    this.CSMSYRoomDealCardCount = this.CSMSYRoomJoinCount * this.CSMSYRoomDealPerPosCardCount;
};
// ###.var_=function()_Flag

//-----基础---
Color.apply(ShareDefine, []);
Common.apply(ShareDefine, []);
GM.apply(ShareDefine, []);
Order.apply(ShareDefine, []);
Code.apply(ShareDefine, []);
Timer.apply(ShareDefine, []);
Chat.apply(ShareDefine, []);
Model.apply(ShareDefine, []);
Form.apply(ShareDefine, []);
Hero.apply(ShareDefine, []);
Effect.apply(ShareDefine, []);
SDK.apply(ShareDefine, []);
Mail.apply(ShareDefine, []);
Game.apply(ShareDefine, []);
//-----项目---
Rank.apply(ShareDefine, []);
Room.apply(ShareDefine, []);
MaJiang.apply(ShareDefine, []);
HZMJ.apply(ShareDefine, []);
LBHZMJ.apply(ShareDefine, []);
WNMJ.apply(ShareDefine, []);
LYMJ.apply(ShareDefine, []);
ZJJHMJ.apply(ShareDefine, []);
HBYXMJ.apply(ShareDefine, []);
XMMJ.apply(ShareDefine, []);
XYMJ.apply(ShareDefine, []);
FZMJ.apply(ShareDefine, []);
SMMJ.apply(ShareDefine, []);
QZMJ.apply(ShareDefine, []);
NAMJ.apply(ShareDefine, []);
SSMJ.apply(ShareDefine, []);
ZZMJ.apply(ShareDefine, []);
PTMJ.apply(ShareDefine, []);
NDMJ.apply(ShareDefine, []);
NPMJ.apply(ShareDefine, []);
NPGZMJ.apply(ShareDefine, []);
PT13MJ.apply(ShareDefine, []);
ZJMJ.apply(ShareDefine, []);
YGMJ.apply(ShareDefine, []);
WZMJ.apply(ShareDefine, []);
HNZZMJ.apply(ShareDefine, []);
NJLHMJ.apply(ShareDefine, []);
WNYH.apply(ShareDefine, []);
YCMJ.apply(ShareDefine, []);
PXZZMJ.apply(ShareDefine, []);
PX258MJ.apply(ShareDefine, []);
JSYZMJ.apply(ShareDefine, []);
LPMJ.apply(ShareDefine, []);
XLQMJ.apply(ShareDefine, []);
YXMJ.apply(ShareDefine, []);
YTMJ.apply(ShareDefine, []);
QDMJ.apply(ShareDefine, []);
YXTDH.apply(ShareDefine, []);
HBMJ.apply(ShareDefine, []);
BDYXMJ.apply(ShareDefine, []);
HNXYMJ.apply(ShareDefine, []);
TCMJ.apply(ShareDefine, []);
PBYHMJ.apply(ShareDefine, []);
SDFJMJ.apply(ShareDefine, []);
PNYHMJ.apply(ShareDefine, []);
YHZMJ.apply(ShareDefine, []);
BDMJ.apply(ShareDefine, []);
DYMJ.apply(ShareDefine, []);
SYMJ.apply(ShareDefine, []);
YCMJ.apply(ShareDefine, []);
FDMJ.apply(ShareDefine, []);
ZPMJ.apply(ShareDefine, []);
TDHMJ.apply(ShareDefine, []);
AYMJ.apply(ShareDefine, []);
SGMJ.apply(ShareDefine, []);
NAMJ.apply(ShareDefine, []);
TZMJ.apply(ShareDefine, []);
DX.apply(ShareDefine, []);
NHMJ.apply(ShareDefine, []);
ZJQZMJ.apply(ShareDefine, []);
JXFZMJ.apply(ShareDefine, []);
HNCSMJ.apply(ShareDefine, []);
HAMJ.apply(ShareDefine, []);
JMHHMJ.apply(ShareDefine, []);
CHMJ.apply(ShareDefine, []);
TWMJ.apply(ShareDefine, []);
TZKZMJ.apply(ShareDefine, []);
DCZBMJ.apply(ShareDefine, []);
DCWDMJ.apply(ShareDefine, []);
ZA13MJ.apply(ShareDefine, []);
ZA16MJ.apply(ShareDefine, []);
ZASS.apply(ShareDefine, []);
XHMJ.apply(ShareDefine, []);
XHBBMJ.apply(ShareDefine, []);
TBZFBMJ.apply(ShareDefine, []);
JNMJ.apply(ShareDefine, []);
NYKWXMJ.apply(ShareDefine, []);
XGKWXMJ.apply(ShareDefine, []);
HNXCMJ.apply(ShareDefine, []);
LZMJ.apply(ShareDefine, []);
FJYXMJ.apply(ShareDefine, []);
BYZP.apply(ShareDefine, []);
HHHGW.apply(ShareDefine, []);
ZJQZSK.apply(ShareDefine, []);
HSMJ.apply(ShareDefine, []);
SDLYMJ.apply(ShareDefine, []);
CZMJ.apply(ShareDefine, []);
YZMJ.apply(ShareDefine, []);
SRMJ.apply(ShareDefine, []);
LBMJ.apply(ShareDefine, []);
RQMJ.apply(ShareDefine, []);
CSMJ.apply(ShareDefine, []);
XPLP.apply(ShareDefine, []);
HZWMJ.apply(ShareDefine, []);
XTMJ.apply(ShareDefine, []);
XPPHZ.apply(ShareDefine, []);
PXPHZ.apply(ShareDefine, []);
RCMJ.apply(ShareDefine, []);
JDZMJ.apply(ShareDefine, []);
BZMJ.apply(ShareDefine, []);
BZTDH.apply(ShareDefine, []);
GYZJMJ.apply(ShareDefine, []);
DTLGFMJ.apply(ShareDefine, []);
SHQMMJ.apply(ShareDefine, []);
JSTDHMJ.apply(ShareDefine, []);
ZGMJ.apply(ShareDefine, []);
NBMJ.apply(ShareDefine, []);
SWMJ.apply(ShareDefine, []);
GDJYMJ.apply(ShareDefine, []);
SQMJ.apply(ShareDefine, []);
JYMJ.apply(ShareDefine, []);
HTMJ.apply(ShareDefine, []);
THGJMJ.apply(ShareDefine, []);
HNPDSMJ.apply(ShareDefine, []);
JSXYMJ.apply(ShareDefine, []);
PZMJ.apply(ShareDefine, []);
HNJYMJ.apply(ShareDefine, []);
JSYCMJ.apply(ShareDefine, []);
JSSQMJ.apply(ShareDefine, []);
JSHAMJ.apply(ShareDefine, []);
WXMJ.apply(ShareDefine, []);
JSCZMJ.apply(ShareDefine, []);
LYGMJ.apply(ShareDefine, []);
HNJZMJ.apply(ShareDefine, []);
GYMJ.apply(ShareDefine, []);
PYMJ.apply(ShareDefine, []);
AHMJ.apply(ShareDefine, []);
XZMJ.apply(ShareDefine, []);
JSGYMJ.apply(ShareDefine, []);
AHPHZ.apply(ShareDefine, []);
XXMJ.apply(ShareDefine, []);
HNAYMJ.apply(ShareDefine, []);
NCMJ.apply(ShareDefine, []);
ZKMJ.apply(ShareDefine, []);
GAMJ.apply(ShareDefine, []);
TGMJ.apply(ShareDefine, []);
HNHBMJ.apply(ShareDefine, []);
LHMJ.apply(ShareDefine, []);
JJMJ.apply(ShareDefine, []);
FYMJ.apply(ShareDefine, []);
GDMJ.apply(ShareDefine, []);
GSJMJ.apply(ShareDefine, []);
BZQZMJ.apply(ShareDefine, []);
FYDDZMJ.apply(ShareDefine, []);
HSTDHMJ.apply(ShareDefine, []);
CCMJ.apply(ShareDefine, []);
QZKHMJ.apply(ShareDefine, []);
PCMJ.apply(ShareDefine, []);
JLMJ.apply(ShareDefine, []);
ZJHZMJ.apply(ShareDefine, []);
XJXZMJ.apply(ShareDefine, []);
YSMJ.apply(ShareDefine, []);
ZZPH.apply(ShareDefine, []);
KFMJ.apply(ShareDefine, []);
NJMJ.apply(ShareDefine, []);
JAMJ.apply(ShareDefine, []);
XJLSHMJ.apply(ShareDefine, []);
YZYZMJ.apply(ShareDefine, []);
LXMJ.apply(ShareDefine, []);
CXMJ.apply(ShareDefine, []);
LS13579.apply(ShareDefine, []);
LSKJJMJ.apply(ShareDefine, []);
LSLWZMJ.apply(ShareDefine, []);
JCMJ.apply(ShareDefine, []);
FXMJ.apply(ShareDefine, []);
HBTDHMJ.apply(ShareDefine, []);
HBHBMJ.apply(ShareDefine, []);
NXKWMJ.apply(ShareDefine, []);
YZGYMJ.apply(ShareDefine, []);
SQSYMJ.apply(ShareDefine, []);
AQMJ.apply(ShareDefine, []);
JDMJ.apply(ShareDefine, []);
ZJWZMJ.apply(ShareDefine, []);
SZMJ.apply(ShareDefine, []);
ZJSHZMJ.apply(ShareDefine, []);
WHMJ.apply(ShareDefine, []);
YGJZMJ.apply(ShareDefine, []);
TMHHMJ.apply(ShareDefine, []);
JXMJ.apply(ShareDefine, []);
LCMJ.apply(ShareDefine, []);
QZCSMJ.apply(ShareDefine, []);
JCHHMJ.apply(ShareDefine, []);
LSMJ.apply(ShareDefine, []);
YSZMJ.apply(ShareDefine, []);
YXBZMJ.apply(ShareDefine, []);
YCTJMJ.apply(ShareDefine, []);
CQHSZMJ.apply(ShareDefine, []);
HBWHMJ.apply(ShareDefine, []);
JSNYZMJ.apply(ShareDefine, []);
ZZNSB.apply(ShareDefine, []);
AK159MJ.apply(ShareDefine, []);
YLDGZMJ.apply(ShareDefine, []);
DLQHMJ.apply(ShareDefine, []);
LLFYMJ.apply(ShareDefine, []);
LPSMJ.apply(ShareDefine, []);
SXHTMJ.apply(ShareDefine, []);
SXLSMJ.apply(ShareDefine, []);
DZMJ.apply(ShareDefine, []);
DKGMJ.apply(ShareDefine, []);
GZMJ.apply(ShareDefine, []);
XFGZMJ.apply(ShareDefine, []);
JXNDMJ.apply(ShareDefine, []);
GNMJ.apply(ShareDefine, []);
HNMJ.apply(ShareDefine, []);
MMMJ.apply(ShareDefine, []);
RJMJ.apply(ShareDefine, []);
DNMJ.apply(ShareDefine, []);
LNMJ.apply(ShareDefine, []);
FCMJ.apply(ShareDefine, []);
HFMJ.apply(ShareDefine, []);
MASMJ.apply(ShareDefine, []);
YJMJ.apply(ShareDefine, []);
XHZMJ.apply(ShareDefine, []);
QYMJ.apply(ShareDefine, []);
XL2VS2MJ.apply(ShareDefine, []);
XJMJ.apply(ShareDefine, []);
FZJXMJ.apply(ShareDefine, []);
JMGGHMJ.apply(ShareDefine, []);
SCMJ.apply(ShareDefine, []);
YTYJMJ.apply(ShareDefine, []);
YDDGMJ.apply(ShareDefine, []);
NKBHMJ.apply(ShareDefine, []);
JMSKMJ.apply(ShareDefine, []);
LKMJ.apply(ShareDefine, []);
JZMJ.apply(ShareDefine, []);
LAMJ.apply(ShareDefine, []);
XYXMJ.apply(ShareDefine, []);
FZGCMJ.apply(ShareDefine, []);
XXFQMJ.apply(ShareDefine, []);
MZMJ.apply(ShareDefine, []);
AHHNMJ.apply(ShareDefine, []);
LYGCMJ.apply(ShareDefine, []);
DXBJMJ.apply(ShareDefine, []);
GCBGMJ.apply(ShareDefine, []);
TXMJ.apply(ShareDefine, []);
ZKLYMJ.apply(ShareDefine, []);
XYSCMJ.apply(ShareDefine, []);
GSMJ.apply(ShareDefine, []);
SXMMJ.apply(ShareDefine, []);
GXMJ.apply(ShareDefine, []);
PDSYXMJ.apply(ShareDefine, []);
ZMDMJ.apply(ShareDefine, []);
ZXMJ.apply(ShareDefine, []);
NZMJ.apply(ShareDefine, []);
XYGSMJ.apply(ShareDefine, []);
WGFHMJ.apply(ShareDefine, []);
DZSJZMJ.apply(ShareDefine, []);
SSPMJ.apply(ShareDefine, []);
A3PK.apply(ShareDefine, []);
GLZP.apply(ShareDefine, []);
YXSRDDZ.apply(ShareDefine, []);
YXDDZ.apply(ShareDefine, []);
GXCDD.apply(ShareDefine, []);
XYXXMJ.apply(ShareDefine, []);
DEMOMJ.apply(ShareDefine, []);
XXTDHMJ.apply(ShareDefine, []);
NYTHMJ.apply(ShareDefine, []);
FCTDHMJ.apply(ShareDefine, []);
HZJDMJ.apply(ShareDefine, []);
XYHCMJ.apply(ShareDefine, []);
YHMJ.apply(ShareDefine, []);
GLQZMJ.apply(ShareDefine, []);
YYMJ.apply(ShareDefine, []);
YZCHZ.apply(ShareDefine, []);
QJFXJMJ.apply(ShareDefine, []);
TJMJ.apply(ShareDefine, []);
YJNXMJ.apply(ShareDefine, []);
GFT258MJ.apply(ShareDefine, []);
HNSYMJ.apply(ShareDefine, []);
XTLHMJ.apply(ShareDefine, []);
XSMJ.apply(ShareDefine, []);
GSLZMJ.apply(ShareDefine, []);
LFPHMJ.apply(ShareDefine, []);
HYLYMJ.apply(ShareDefine, []);
HNYJMJ.apply(ShareDefine, []);
TJTJMJ.apply(ShareDefine, []);
NMGYZMJ.apply(ShareDefine, []);
BAMJ.apply(ShareDefine, []);
AHHBMJ.apply(ShareDefine, []);
SFPHMJ.apply(ShareDefine, []);
JCAHMJ.apply(ShareDefine, []);
XNMJ.apply(ShareDefine, []);
HYHSMJ.apply(ShareDefine, []);
JSMJ.apply(ShareDefine, []);
SDJNMJ.apply(ShareDefine, []);
ZCMJ.apply(ShareDefine, []);
NYXXMJ.apply(ShareDefine, []);
TBHMJ.apply(ShareDefine, []);
PDSLSMJ.apply(ShareDefine, []);
NXMJ.apply(ShareDefine, []);
RZMJ.apply(ShareDefine, []);
CZDZMJ.apply(ShareDefine, []);
JAWZ.apply(ShareDefine, []);
THBBZ.apply(ShareDefine, []);
ZGQZMJ.apply(ShareDefine, []);
SD.apply(ShareDefine, []);
SQYCMJ.apply(ShareDefine, []);
MYMJ.apply(ShareDefine, []);
PDSJXMJ.apply(ShareDefine, []);
AFMJ.apply(ShareDefine, []);
STSTMJ.apply(ShareDefine, []);
YFCGMJ.apply(ShareDefine, []);
STMJ.apply(ShareDefine, []);
QCDG.apply(ShareDefine, []);
QYPHMJ.apply(ShareDefine, []);
BFMJ.apply(ShareDefine, []);
HFBZMJ.apply(ShareDefine, []);
CYLYMJ.apply(ShareDefine, []);
DTMJ.apply(ShareDefine, []);
CZCZMJ.apply(ShareDefine, []);
TSDG.apply(ShareDefine, []);
PHMJ.apply(ShareDefine, []);
XSY.apply(ShareDefine, []);
WZQSMJ.apply(ShareDefine, []);
JZWZMJ.apply(ShareDefine, []);
GJMJ.apply(ShareDefine, []);
GDCZMJ.apply(ShareDefine, []);
ASMJ.apply(ShareDefine, []);
HW.apply(ShareDefine, []);
QBSK.apply(ShareDefine, []);
SCPK.apply(ShareDefine, []);
WXZMMJ.apply(ShareDefine, []);
LNSYMJ.apply(ShareDefine, []);
ST.apply(ShareDefine, []);
YCSDR.apply(ShareDefine, []);
HLDMJ.apply(ShareDefine, []);
BSMJ.apply(ShareDefine, []);
TCPFMJ.apply(ShareDefine, []);
QJFBBMJ.apply(ShareDefine, []);
CP.apply(ShareDefine, []);
XYWSK.apply(ShareDefine, []);
CXYXMJ.apply(ShareDefine, []);
YCSGMJ.apply(ShareDefine, []);
JMJSMJ.apply(ShareDefine, []);
DSMJ.apply(ShareDefine, []);
JXYZ.apply(ShareDefine, []);
YCFXMJ.apply(ShareDefine, []);
SCNJMJ.apply(ShareDefine, []);
NBCXMJ.apply(ShareDefine, []);
THKB.apply(ShareDefine, []);
PTMJ.apply(ShareDefine, []);
KLMJ.apply(ShareDefine, []);
QWWES.apply(ShareDefine, []);
YFMJ.apply(ShareDefine, []);
JAYXDDZ.apply(ShareDefine, []);
GAST.apply(ShareDefine, []);
HEBMJ.apply(ShareDefine, []);
PYSFT.apply(ShareDefine, []);
SXZJMJ.apply(ShareDefine, []);
SCGAMJ.apply(ShareDefine, []);
SXMJ.apply(ShareDefine, []);
LWMJ.apply(ShareDefine, []);
WABJMJ.apply(ShareDefine, []);
XJBJMJ.apply(ShareDefine, []);
YCHP.apply(ShareDefine, []);
SSE.apply(ShareDefine, []);
SDZZMJ.apply(ShareDefine, []);
LGMJ.apply(ShareDefine, []);
LSYJMJ.apply(ShareDefine, []);
CDP.apply(ShareDefine, []);
CDXZMJ.apply(ShareDefine, []);
LZXZMJ.apply(ShareDefine, []);
WFBH.apply(ShareDefine, []);
PXMJ.apply(ShareDefine, []);
SDLCMJ.apply(ShareDefine, []);
ZJGMJ.apply(ShareDefine, []);
ZJTZMJ.apply(ShareDefine, []);
SYS.apply(ShareDefine, []);
CNMJ.apply(ShareDefine, []);
DZZJ.apply(ShareDefine, []);
SDHZMJ.apply(ShareDefine, []);
XLHZMJ.apply(ShareDefine, []);
PYDD.apply(ShareDefine, []);
NCAYMJ.apply(ShareDefine, []);
KSMJ.apply(ShareDefine, []);
SYSYBP.apply(ShareDefine, []);
TAMJ.apply(ShareDefine, []);
DPHMJ.apply(ShareDefine, []);
QDJT.apply(ShareDefine, []);
LSXZMJ.apply(ShareDefine, []);
JAYXMJ.apply(ShareDefine, []);
XSDQ.apply(ShareDefine, []);
LHGMMJ.apply(ShareDefine, []);
HCNG.apply(ShareDefine, []);
JTMJ.apply(ShareDefine, []);
YBGXMJ.apply(ShareDefine, []);
JTPDK.apply(ShareDefine, []);
XWMJ.apply(ShareDefine, []);
TZPDK.apply(ShareDefine, []);
WJMJ.apply(ShareDefine, []);
QDBH.apply(ShareDefine, []);
TJTGMJ.apply(ShareDefine, []);
HAXYMJ.apply(ShareDefine, []);
ZYMJ.apply(ShareDefine, []);
NTCP.apply(ShareDefine, []);
LNJZMJ.apply(ShareDefine, []);
JSSNMJ.apply(ShareDefine, []);
JYESSZ.apply(ShareDefine, []);
XCMJ.apply(ShareDefine, []);
HZBDMJ.apply(ShareDefine, []);
BDJHMJ.apply(ShareDefine, []);
XCPDK.apply(ShareDefine, []);
HSHHMJ.apply(ShareDefine, []);
MSMJ.apply(ShareDefine, []);
DYKKFMJ.apply(ShareDefine, []);
TZJJMJ.apply(ShareDefine, []);
NFSD.apply(ShareDefine, []);
GCMJ.apply(ShareDefine, []);
SCBZMJ.apply(ShareDefine, []);
DYZP.apply(ShareDefine, []);
LYHMJ.apply(ShareDefine, []);
XGCGMJ.apply(ShareDefine, []);
SCDYMJ.apply(ShareDefine, []);
TLMJ.apply(ShareDefine, []);
ZZDMZ.apply(ShareDefine, []);
LCBJMJ.apply(ShareDefine, []);
QJHHMJ.apply(ShareDefine, []);
FDPK.apply(ShareDefine, []);
YFBS.apply(ShareDefine, []);
YAXZMJ.apply(ShareDefine, []);
SCGXMJ.apply(ShareDefine, []);
SCGXMJ.apply(ShareDefine, []);
EQW.apply(ShareDefine, []);
ESMJ.apply(ShareDefine, []);
YKMJ.apply(ShareDefine, []);
QJHZMJ.apply(ShareDefine, []);
HBCXMJ.apply(ShareDefine, []);
WDMJ.apply(ShareDefine, []);
MSXLMJ.apply(ShareDefine, []);
WSBEA.apply(ShareDefine, []);
QJPDK.apply(ShareDefine, []);
LNASMJ.apply(ShareDefine, []);
HZZMJ.apply(ShareDefine, []);
WXTDHMJ.apply(ShareDefine, []);
HJMJ.apply(ShareDefine, []);
SJCCMJ.apply(ShareDefine, []);
SCNCMJ.apply(ShareDefine, []);
JSJYMJ.apply(ShareDefine, []);
XZDDMJ.apply(ShareDefine, []);
RGJAMJ.apply(ShareDefine, []);
LCZP.apply(ShareDefine, []);
YBXZMJ.apply(ShareDefine, []);
HBHSMJ.apply(ShareDefine, []);
LCPDK.apply(ShareDefine, []);
JMSMJ.apply(ShareDefine, []);
XLBBP.apply(ShareDefine, []);
GGMJ.apply(ShareDefine, []);
JSTXMJ.apply(ShareDefine, []);
GLMJ.apply(ShareDefine, []);
PZHXZMJ.apply(ShareDefine, []);
NXHSMJ.apply(ShareDefine, []);
GFMJ.apply(ShareDefine, []);
WXPDK.apply(ShareDefine, []);
SDDMJ.apply(ShareDefine, []);
HCMJ.apply(ShareDefine, []);
JJWNMJ.apply(ShareDefine, []);
YXMDMJ.apply(ShareDefine, []);
DYXLMJ.apply(ShareDefine, []);
XJTMJ.apply(ShareDefine, []);
KJMJ.apply(ShareDefine, []);
WXQWZMJ.apply(ShareDefine, []);
ZQMJ.apply(ShareDefine, []);
JXDD.apply(ShareDefine, []);
QJWSK.apply(ShareDefine, []);
WWMJ.apply(ShareDefine, []);
SCLSMJ.apply(ShareDefine, []);
HGXSMJ.apply(ShareDefine, []);
AHJXMJ.apply(ShareDefine, []);
SNMJ.apply(ShareDefine, []);
GFWSK.apply(ShareDefine, []);
YJLYMJ.apply(ShareDefine, []);
JTQWZMJ.apply(ShareDefine, []);
JZXSMJ.apply(ShareDefine, []);
GYXZMJ.apply(ShareDefine, []);
SRYYMJ.apply(ShareDefine, []);
CXDZ.apply(ShareDefine, []);
QXWQ.apply(ShareDefine, []);
BHMJ.apply(ShareDefine, []);
NNMJ.apply(ShareDefine, []);
ZYXZMJ.apply(ShareDefine, []);
QSJ.apply(ShareDefine, []);
GDCSMJ.apply(ShareDefine, []);
HNHZMJ.apply(ShareDefine, []);
DQDZ.apply(ShareDefine, []);
WLCBMJ.apply(ShareDefine, []);
XSWSK.apply(ShareDefine, []);
AHLXMJ.apply(ShareDefine, []);
HXDZ.apply(ShareDefine, []);
SWTDHMJ.apply(ShareDefine, []);
DBWSK.apply(ShareDefine, []);
WHBH.apply(ShareDefine, []);
YLMJ.apply(ShareDefine, []);
YNLCMJ.apply(ShareDefine, []);
PEMJ.apply(ShareDefine, []);
DSP.apply(ShareDefine, []);
DZXZMJ.apply(ShareDefine, []);
BSYZF.apply(ShareDefine, []);
AHJSMJ.apply(ShareDefine, []);
JLPK.apply(ShareDefine, []);
HSPK.apply(ShareDefine, []);
RAR.apply(ShareDefine, []);
FKBD.apply(ShareDefine, []);
QWMJ.apply(ShareDefine, []);
YNBSMJ.apply(ShareDefine, []);
SWPMMJ.apply(ShareDefine, []);
SHJSMJ.apply(ShareDefine, []);
QHDMJ.apply(ShareDefine, []);
CBDG.apply(ShareDefine, []);
JXZXMJ.apply(ShareDefine, []);
WZXZMJ.apply(ShareDefine, []);
JXNCMJ.apply(ShareDefine, []);
HXDZMJ.apply(ShareDefine, []);
SRDZ.apply(ShareDefine, []);
CSMSY.apply(ShareDefine, []);
// ###.apply(ShareDefine, [])_Flag

/**
 * 绑定模块外部方法
 */
exports.GetModel = function () {
	return ShareDefine;
}