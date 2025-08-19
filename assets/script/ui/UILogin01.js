/*
    UILogin01 登陆界面
*/
var app = require("app");  //这里require含义是引入，导入名为'app'的模块

cc.Class({  //这里定义了一个'cc.Classs'的类
    extends: require("BaseForm"),  //意味这个类继承了'BaseForm'的属性

    properties: {  //下面定义了一些属性
        btnLogin: cc.Button,  //btnLogin这是一个'cc.Button'属性
        btnLoginxl: cc.Button,  // 这里同样是一个'cc.button'属性
        toggle_agrgee: cc.Toggle, //这里是一个'cc.toggle'属性
        btn_userAgree: cc.Button,  //这里同样是一个'cc.button属性
        btnMobile: cc.Button,  //这里也同样是一个'button'属性
        mobile: cc.Node,  //这里是一个'cc.node'属性
        logo: cc.Node,  //这里也同样是一个'cc.node'属性
        logoSprite: [cc.SpriteFrame],  //这是一个'cc.SpriteFrame'
        //EditBoxAccount: cc.EditBox,
        //EditBoxPsw: cc.EditBox,
    },

    //这段代码用于初始化功能的函数'OnCreateInit'在这个函数中是一系列变量的初始化
    OnCreateInit: function () {
        this.NetManager = app.NetManager();  //通过app.NetManager()来创建一个NetManager对象，并将其赋值给this.NetManager。
        this.HeroAccountManager = app.HeroAccountManager();//哎，搞半天这里要添加进来，
        this.NetWork = app.NetWork();  //通过app.NetWork()来创建一个NetWork对象，并将其赋值给this.NetWork。
        this.SDKManager = app.SDKManager();  //通过app.SDKManager()来创建一个SDKManager对象，并将其赋值给this.SDKManager。
        this.LocalDataManager = app.LocalDataManager();  //通过app.LocalDataManager()来创建一个LocalDataManager对象，并将其赋值给this.LocalDataManager。
    //接下来，通过this.RegEvent方法注册了一些事件和相应的处理函数。
        this.RegEvent("CodeError", this.Event_CodeError);//可能是与代码错误相关的事件。
        this.RegEvent("DoLogin", this.Event_DoLogin);//可能是触发登录操作的事件。
        this.RegEvent("ConnectFail", this.Event_ConnectFail);//可能是网络连接失败的事件。
        this.RegEvent("ChangeBtnState", this.Event_ChangeBtnState);//可能是改变按钮状态的事件。
        this.NetManager = app.NetManager();//这里感觉是多余的，因为上面已经创建过'NetManager'对象，脑壳疼。。。
    },
    //这是一个事件处理函数，名为Event_CodeError。它用于处理名为"CodeError"的事件，并根据事件的参数（event）中的"Code"值执行不同的逻辑。
    Event_CodeError: function (event) {
        let argDict = event;//这一行将事件参数event赋值给一个变量argDict。这样做是为了方便在接下来的代码中访问事件参数中的数据。
        let code = argDict["Code"];//这一行从argDict中获取名为"Code"的值，并将其赋值给变量code。假设事件参数中包含了一个名为"Code"的键，它用于表示错误代码或状态码。
        if (code == this.ShareDefine.KickOut_ServerClose) {//这是一个条件语句，用于检查错误代码code是否等于this.ShareDefine.KickOut_ServerClose。如果条件成立，将会执行相应的逻辑。
            this.WaitForConfirm("Code_10016", [], [], this.ShareDefine.ConfirmYN)// 'this.WaitForConfirm'方法显示一个确认框，提示用户错误信息，并等待用户确认。
        } else if (code == 5122) {//如果前面的条件不成立，代码将继续检查code是否等于5122。如果条件成立，表示错误代码为5122，将执行相应的逻辑。
            //没有绑定闲聊登录，调用微信登录
            app.SysNotifyManager().ShowSysMsg("该账号未绑定闲聊", [], 3);
            this.SDKManager.LoginBySDK();
        } else if (code == 5123) {//同上，这个条件检查错误代码是否等于5123，如果是，可能执行一些处理。
            // app.SysNotifyManager().ShowSysMsg("闲聊登录失败",[],3);
        } else if (code = 5124) {//这里有一个错误，条件判断使用了单个等号（=）而不是双等号（==）。这将导致这个条件始终为真，无论code的值是什么，都会执行这段代码块的逻辑。应该改为使用双等号（==）进行比较，以正确地判断code是否等于5124。
            // app.SysNotifyManager().ShowSysMsg("闲聊登录失败",[],3);
        }
    },

    //连接服务器失败
    Event_ConnectFail: function (event) {//是一个事件处理函数，名为Event_ConnectFail。它用于处理名为"ConnectFail"的事件，并在该事件发生时执行一系列操作。
        this.UpdateAccessPoint();//这一行调用this.UpdateAccessPoint()方法。根据方法的名字，它可能是用于更新访问点或网络连接的方法。该方法的具体功能需要查看其在其他地方的定义和实现。
        // let argDict = event;
        // if(!argDict['bCloseByLogout'])
        // this.ShowSysMsg("Net_ConnectFail");
        app.Client.OnEvent("ChangeBtnState", { "state": 0 });//这一行代码通过app.Client.OnEvent方法触发名为"ChangeBtnState"的事件，并传递了一个包含"state"属性值为0的对象作为事件参数。这可能是用于改变按钮状态的操作，传递的参数中的"state"属性值0可能表示某种按钮状态。
        //关闭模态层
        app.Client.OnEvent("ModalLayer", "ReceiveNet");//这一行代码通过app.Client.OnEvent方法触发名为"ModalLayer"的事件，并传递了字符串"ReceiveNet"作为事件参数。这可能是用于关闭模态层的操作，"ReceiveNet"可能是表示接收网络数据的标识。
    },

    //设置登录按钮的可点击状态
    Event_ChangeBtnState: function (event) {//这是一个事件处理函数，名为Event_ChangeBtnState。它用于处理名为"ChangeBtnState"的事件，并根据事件参数中的"state"值改变按钮的状态。
        let BtnState = event["state"];//这一行从事件参数event中获取名为"state"的值，并将其赋值给变量BtnState。这个"state"值可能表示按钮的状态，通常情况下，它可能是一个数值，比如0或1，用于表示不同的按钮状态。
        this.SysLog("Event_ChangeBtnState BtnState:%s", BtnState);//这一行代码通过调用this.SysLog方法输出日志信息，打印BtnState的值到日志。这样有助于在调试过程中查看按钮状态的变化。
        if (BtnState == 1) {//这是一个条件语句，根据BtnState的值来判断按钮状态应该是什么。
            this.btnLogin.interactable = 0;//如果BtnState的值为1，将把this.btnLogin（可能是一个登录按钮）的interactable属性设置为0，这将使按钮不可交互，即无法点击。
            this.btnLogin.enableAutoGrayEffect = 1;//同时，也将把this.btnLogin的enableAutoGrayEffect属性设置为1，这可能是启用按钮的自动灰化效果，使按钮看起来处于禁用状态。
            this.btnLoginxl.interactable = 0;//同样地，对于this.btnLoginxl（可能是另一种登录按钮），如果BtnState的值为1，将设置其不可交互。
            this.btnLoginxl.enableAutoGrayEffect = 1;//也将启用this.btnLoginxl的自动灰化效果。
        } else {//如果BtnState的值不是1，即为其他值，将执行else中的逻辑。
            this.btnLogin.interactable = 1;//这里将把this.btnLogin的interactable属性设置为1，使按钮变为可交互状态。
            this.btnLogin.enableAutoGrayEffect = 0;//同时，禁用this.btnLogin的自动灰化效果。
            this.btnLoginxl.interactable = 1;//对于this.btnLoginxl，将设置其为可交互状态。
            this.btnLoginxl.enableAutoGrayEffect = 0;//同时，禁用this.btnLoginxl的自动灰化效果。
            //关闭模态层
            app.Client.OnEvent("ModalLayer", "ReceiveNet");//在BtnState的值不为1时，执行这一行代码，通过app.Client.OnEvent方法触发名为"ModalLayer"的事件，并传递字符串"ReceiveNet"作为事件参数。这可能是用于关闭模态层的操作，"ReceiveNet"可能是表示接收网络数据的标识。
        }
    },
    OnShow: function () {//这是一个对象的OnShow方法。这个方法用于在页面显示时执行一系列操作。
        this.ChangeLogo();//这一行代码调用了ChangeLogo()方法。这个方法可能是用于更改页面的logo展示，具体的功能需要查看ChangeLogo()方法在其他地方的定义和实现。
        this.ShowWeiXinLogin();//这一行代码调用了ShowWeiXinLogin()方法。这个方法可能是用于显示与微信登录相关的UI元素，可能是在特定情况下展示微信登录按钮或其他与微信登录相关的内容。具体的功能需要查看ShowWeiXinLogin()方法在其他地方的定义和实现。
        this.ShowLoginWayBtn();//这一行代码调用了ShowLoginWayBtn()方法。这个方法可能是用于显示登录方式的按钮，可能是在特定情况下展示登录方式选择按钮，例如“使用账号登录”、“使用手机登录”等。具体的功能需要查看ShowLoginWayBtn()方法在其他地方的定义和实现。
        this.toggle_agrgee.isChecked = true;//这一行代码将toggle_agrgee的isChecked属性设置为true，将复选框或开关按钮设为被选中状态。这可能是在特定情况下默认选中某个复选框或开关按钮。

        //这一行代码从LocalDataManager中获取名为"preLoadClubForm"的配置属性值，并将其赋值给变量preLoadClubForm。这个值可能是预加载的亲友圈首页的信息，用于后续的判断。
        let preLoadClubForm = this.LocalDataManager.GetConfigProperty("SysSetting", "preLoadClubForm");
        if(preLoadClubForm!=""){//这是一个条件语句，判断preLoadClubForm的值是否为空字符串（即是否有预加载的亲友圈首页信息）。
            this.FormManager.CreateForm(preLoadClubForm);//如果有预加载的亲友圈首页信息，将调用FormManager的CreateForm方法，并传递preLoadClubForm作为参数，以创建预加载的亲友圈首页。
        }

    },
    //这是一个对象的ShowWeiXinLogin方法。这个方法用于显示与微信登录相关的UI元素。
    ShowWeiXinLogin: function () {
        this.mobile.active = false;//这一行代码将this.mobile节点的active属性设置为false，这将隐藏this.mobile节点。这里假设this.mobile节点可能是与手机相关的UI元素，通过将其active属性设为false，使其在页面中不显示。
        this.btnLogin.node.active = true;//这一行代码将this.btnLogin.node节点的active属性设置为true，这将显示this.btnLogin.node节点。这里假设this.btnLogin.node节点可能是一个登录按钮，通过将其active属性设为true，使其在页面中显示出来。
        // this.btnMobile.node.active=true;//这是一行被注释掉的代码，不会执行。这行代码可能是用于显示与手机登录相关的按钮，但由于被注释掉了，所以不会执行。
    },

    //这是一个对象的ShowLoginWayBtn方法。这个方法用于根据特定条件显示不同的登录方式按钮。
    ShowLoginWayBtn: function () {
        // let isAndroid = app.ComTool().IsAndroid();//这是被注释掉的一段代码，看起来是用于判断当前设备是否为Android设备，从而根据不同的设备类型显示不同的登录方式按钮。由于这段代码被注释掉了，所以不会被执行。
        // if(isAndroid) {
        let appName = cc.sys.localStorage.getItem('appName');//这一行代码从本地存储中获取名为'appName'的值，并将其赋值给变量appName。这个值可能是一个应用名称或标识，用于后续的判断。
        let isShowLineLoginBtn = appName == "baodao";//这一行代码将isShowLineLoginBtn设置为一个布尔值，它的值取决于appName是否等于"baodao"。如果appName的值等于"baodao"，isShowLineLoginBtn将设置为true，否则将设置为false。

        this.node.getChildByName("btn_login").active = !isShowLineLoginBtn;//这一行代码根据isShowLineLoginBtn的值来设置名为"btn_login"的子节点的active属性。如果isShowLineLoginBtn为false，即appName不等于"baodao"，则"btn_login"按钮将会显示（active为true）。否则，"btn_login"按钮将不会显示（active为false）。
        this.node.getChildByName("btn_login_line").active = isShowLineLoginBtn;//这一行代码根据isShowLineLoginBtn的值来设置名为"btn_login_line"的子节点的active属性。如果isShowLineLoginBtn为true，即appName等于"baodao"，则"btn_login_line"按钮将会显示（active为true）。否则，"btn_login_line"按钮将不会显示（active为false）。
        // } else {
        //     this.node.getChildByName("btn_login").active = true;
        //     this.node.getChildByName("btn_login_line").active = false;
        // }
    },

    WeiXinLogin: function () {//这是一个对象的WeiXinLogin方法。这个方法用于执行微信登录的操作。
        app.Client.OnEvent("ChangeBtnState", { "state": 1 });//这一行代码通过app.Client.OnEvent方法触发名为"ChangeBtnState"的事件，并传递了一个包含"state"属性值为1的对象作为事件参数。这可能是用于改变按钮状态的操作，传递的参数中的"state"属性值1可能表示某种按钮状态。
        this.SDKManager.LoginBySDK();//这一行代码调用了SDKManager的LoginBySDK方法，可能是用于执行通过SDK进行微信登录的操作。具体的功能需要查看LoginBySDK方法在其他地方的定义和实现。
        var OnTimer = function (passSecond) {//这是一个匿名函数（无名函数）的定义。它接受一个参数passSecond，但在这个方法中没有使用到。
            app.HeroAccountManager().IsDoLogining(false);//可能是用于在定时器触发后，将IsDoLogining状态设置为false。具体的功能需要查看IsDoLogining方法在HeroAccountManager对象中的定义和实现。
        };
        this.scheduleOnce(OnTimer, 5.0);//这一行代码用于调度一个一次性的定时器，在5秒后触发OnTimer匿名函数。
    },
    //初始化连接
    InitConnectServer: function () {//是一个对象的InitConnectServer方法。这个方法用于初始化连接服务器，并在需要时进行网络连接。
        //初始化连接服务器
        if (this.NetWork.Connected() == false) {//这是一个条件语句，用于判断当前是否已经连接到服务器。this.NetWork.Connected()是一个方法，可能用于检查是否已经建立网络连接。如果条件成立，即当前未连接到服务器，则进入条件块中的逻辑。
            app.Client.OnEvent("ModalLayer", "OpenNet");//这一行代码通过app.Client.OnEvent方法触发名为"ModalLayer"的事件，并传递了字符串"OpenNet"作为事件参数。这可能是用于打开一个模态层（对话框或加载界面）来提示用户正在进行网络连接的操作。
            let clientConfig = app.Client.GetClientConfig();//这一行代码获取客户端配置信息，可能是从app.Client对象中获取客户端的配置数据。
            this.gameServerIP = clientConfig["GameServerIP"];//这一行代码从客户端配置信息中获取名为"GameServerIP"的值，并将其赋值给this.gameServerIP。这个值可能是游戏服务器的IP地址。
            this.gameServerPort = clientConfig["GameServerPort"];//这一行代码从客户端配置信息中获取名为"GameServerPort"的值，并将其赋值给this.gameServerPort。这个值可能是游戏服务器的端口号。
            let CheckUrl = "http://" + this.gameServerIP + ":88/myip.php";//这一行代码构建了一个用于检查网络连接的URL地址，使用了之前获取的游戏服务器IP地址和端口号。"http://" + this.gameServerIP + ":88/myip.php"拼接出一个完整的URL。
            this.SendHttpRequest(CheckUrl, "", "GET", {});//这一行代码调用了SendHttpRequest方法，可能用于发送HTTP请求，这里是用于检查网络连接。它将之前构建的CheckUrl作为URL参数，使用GET请求方法，且不带任何数据参数。
        }
    },
    //是一个对象的SendHttpRequest方法。这个方法用于发送HTTP请求，并处理请求的结果。
    SendHttpRequest: function (serverUrl, argString, requestType, sendPack) {
        //这是一个条件判断语句，通过app.ControlManager().IsOpenVpn()方法来判断是否开启了VPN连接。如果开启了VPN连接，则直接返回，不继续执行后面的代码。这可能是为了在开启VPN连接时不进行HTTP请求。
        if (app.ControlManager().IsOpenVpn()) {
            return;
        }//
        // app.NetRequest().SendHttpRequest(serverUrl, argString, requestType, sendPack, 3000,
        //     (serverUrl, responseText)=>{ // success
        //         app.Client.OnEvent("ModalLayer", "ReceiveNet");
        //         that.OnReceiveHttpPack(serverUrl, responseText);
        //     },
        //     (serverUrl, readyState, status)=>{ // fail

        //     },
        //     (serverUrl, readyState, status)=>{ // timeout
        //         app.Client.OnEvent("ModalLayer", "ReceiveNet");
        //         app.HeroAccountManager().UpdateAccessPoint();
        //     },
        //     (serverUrl, readyState, status)=>{ // error
        //         app.Client.OnEvent("ModalLayer", "ReceiveNet");
        //         app.HeroAccountManager().UpdateAccessPoint();
        //     }
        // );

        var url = [serverUrl, argString].join("");//这一行代码将serverUrl和argString拼接成完整的请求URL地址，赋值给变量url。
        var dataStr = JSON.stringify(sendPack);//这一行代码将sendPack对象转换成JSON格式的字符串，赋值给变量dataStr。这个字符串可能是用于作为HTTP请求的数据部分。
        //每次都实例化一个，否则会引起请求结束，实例被释放了
        let timeOut = false;//这一行代码声明了一个布尔变量timeOut，初始值为false。它可能是用于标记请求是否超时的状态。
        var httpRequest = new XMLHttpRequest();//这一行代码创建了一个新的XMLHttpRequest对象，用于发送HTTP请求。
        httpRequest.timeout = 3000;//这一行代码设置请求的超时时间为3000毫秒（即3秒）。
        httpRequest.open(requestType, url, true);//这一行代码初始化HTTP请求，使用requestType（通常是"GET"或"POST"）来指定请求方法，url为请求的URL地址，true表示该请求是异步的（即不会阻塞其他代码的执行）。
        //服务器json解码
        //httpRequest.setRequestHeader("Content-Type", "application/json");
        var that = this;//这一行代码将this保存到变量that中，这是为了在后面的函数中能够访问到外部作用域中的this。
        httpRequest.onerror = function () {//这是一个错误处理函数，当HTTP请求发生错误时（例如网络错误或跨域问题），这个函数将会被调用。
            that.ErrLog("httpRequest.error:%s", url);//调用that（即之前保存的this）的ErrLog方法，可能是用于记录错误日志或输出错误信息。url是之前拼接好的请求URL。
            app.Client.OnEvent("ModalLayer", "ReceiveNet");//触发名为"ModalLayer"的事件，可能是用于接收网络连接状态的事件，例如在网络连接时关闭加载界面或模态层。
            app.HeroAccountManager().UpdateAccessPoint();//调用app.HeroAccountManager()对象的UpdateAccessPoint方法，可能是用于更新访问点或网络连接状态的处理。
            //that.InitConnectServer();
        };
        httpRequest.ontimeout = function () {//这是一个超时处理函数，当HTTP请求超时时，这个函数将会被调用。
            timeOut = true;//将之前声明的timeOut变量设置为true，可能是用于标记请求是否超时。
            app.Client.OnEvent("ModalLayer", "ReceiveNet");//触发名为"ModalLayer"的事件，可能是用于接收网络连接状态的事件，例如在网络连接时关闭加载界面或模态层。
            app.HeroAccountManager().UpdateAccessPoint();//调用app.HeroAccountManager()对象的UpdateAccessPoint方法，可能是用于更新访问点或网络连接状态的处理。
            //that.InitConnectServer();
        };
        httpRequest.onreadystatechange = function () {//这是一个状态变化处理函数，当HTTP请求的状态变化时，这个函数将会被调用。在该函数内部：如果请求成功并且响应已经完全接收：
            //执行成功
            // that.ErrLog("httpRequest.status:%s", httpRequest.status);
            // that.ErrLog("httpRequest.readyState:%s", httpRequest.readyState);
            if (httpRequest.status == 200) {//这一行代码检查HTTP请求的状态是否为200，表示请求成功。HTTP状态码200表示OK，即服务器成功处理了请求。
                if (httpRequest.readyState == 4) {//这一行代码检查HTTP请求的readyState是否为4，表示响应已经完全接收。
                    app.Client.OnEvent("ModalLayer", "ReceiveNet");//这一行代码触发名为"ModalLayer"的事件，可能用于接收网络连接状态的事件，例如在网络连接时关闭加载界面或模态层。
                    that.OnReceiveHttpPack(serverUrl, httpRequest.responseText);//这一行代码调用了OnReceiveHttpPack方法，将serverUrl和httpRequest.responseText作为参数传递给它。这个方法可能是用于处理接收到的HTTP响应数据。
                    // if(that.NetWork.Connected()==false){
                    // 	console.log("服务器还没连接...");
                    // 	that.NetWork.InitWebSocket(that.gameServerIP, that.gameServerPort, that.OnWebSocketEvent.bind(that), that.OnConnectSuccess.bind(that));
                    // }else{
                    // 	console.log("服务器已经连接成功...");
                    // }
                }
            }
        };
        httpRequest.send(dataStr);//是用于发送HTTP请求的语句。在上述JavaScript代码中，当状态变化处理函数（httpRequest.onreadystatechange）被调用时，如果满足特定条件（请求成功并且响应已经完全接收），则会执行这个语句。

    },
    //服务器连接成功
    OnConnectSuccess: function (isReconnecting) {//是一个名为OnConnectSuccess的方法。这个方法在成功连接到服务器后被调用，用于执行一系列操作。
        //关闭模态层
        app.Client.OnEvent("ModalLayer", "ReceiveNet");//这一行代码触发名为"ModalLayer"的事件，可能用于接收网络连接状态的事件，例如在成功连接服务器时关闭加载界面或模态层。
        // app.Client.OnEvent("ConnectSuccess", {"ServerName":"GameServer", "IsReconnecting":isReconnecting});
        //闲聊登录
        let XlOpenID = this.LocalDataManager.GetConfigProperty("Account", "XlOpenID");//这一行代码从本地数据管理器中获取名为"Account"的配置，并获取名为"XlOpenID"的值。XlOpenID可能是一个用于闲聊登录的标识符。
        if (XlOpenID) {
            app.XLAppManager().SendLoginByXLAuthorization(XlOpenID);//这是一个条件判断语句，根据之前获取的XlOpenID的值来执行不同的登录操作。
        } else {
            //尝试微信登录
            let accessTokenInfo = this.LocalDataManager.GetConfigProperty("Account", "AccessTokenInfo");//这一行代码从本地数据管理器中获取名为"Account"的配置，并获取名为"AccessTokenInfo"的值。accessTokenInfo可能是一个包含上次登录微信授权的一些信息的对象。
            //这两行代码声明了变量sdkToken和sdkAccountID，初始值分别为空字符串和0。
            let sdkToken = "";
            let sdkAccountID = 0;
            //直接登录服务器
            if (accessTokenInfo) {//这是一个条件判断语句，如果accessTokenInfo存在（即获取了有效的上次登录微信授权信息），则执行条件块中的逻辑。
                //这两行代码从accessTokenInfo对象中获取"SDKToken"和"AccountID"的值，分别赋给sdkToken和sdkAccountID。这些值可能是用于直接登录服务器的授权缓存token和账户ID。
                sdkToken = accessTokenInfo["SDKToken"];
                sdkAccountID = accessTokenInfo["AccountID"];
            }
            if (sdkAccountID && sdkToken) {//这是一个条件判断语句，如果sdkAccountID和sdkToken都有有效值（即非空字符串和非零数值），则执行条件块中的逻辑。
                //使用上次的授权缓存token
                app.WeChatAppManager().SendLoginByWeChatAuthorization(sdkToken, sdkAccountID);//调用app.WeChatAppManager()对象的SendLoginByWeChatAuthorization方法，并将sdkToken和sdkAccountID作为参数传递给它。这可能用于使用微信授权缓存token登录服务器。
            }
        }
    },
    OnReceiveHttpPack: function (serverUrl, httpResText) {//这是一个名为OnReceiveHttpPack的方法，用于处理接收到的HTTP响应数据。
        try {
            let serverPack = JSON.parse(httpResText);//这一行代码尝试将httpResText（HTTP响应的文本数据）解析为JSON格式的数据，赋值给serverPack变量。serverPack可能是一个包含服务器返回的数据的JSON对象。

 //if (serverPack["code"] == 0) { ... } else { ... }：这是一个条件判断语句，根据serverPack中的code属性的值来执行不同的操作。
//如果serverPack的code属性的值为0，表示服务器返回的数据为成功状态。
//如果serverPack的code属性的值不为0，表示服务器返回的数据为失败状态。
//如果服务器返回的数据为成功状态（serverPack["code"] == 0）：

//进入第一个条件块，根据serverUrl的不同执行不同的操作：
//如果serverUrl等于this.yanzhengUrl，表示这是验证URL的响应数据，执行以下操作：
//获取名为'btn_yzm'的子节点，并将其隐藏（active = false）。
//初始化计时器的计时值为60（this.lb_times = 60）。
//使用this.schedule方法，每隔1秒调用一次this.ShowYanZhengMaTime方法，可能用于更新显示倒计时时间。
//使用this.scheduleOnce方法，延时60秒后执行一个回调函数，将之前隐藏的'btn_yzm'节点显示出来（active = true），并将计时值重置为0（this.lb_times = 0）。
//如果serverUrl等于this.checkCodeUrl，表示这是验证码URL的响应数据，但是这个条件块的代码被注释掉了。可能是原本用于处理验证码的逻辑，但目前被注释掉了。
//如果服务器返回的数据为失败状态（serverPack["code"]不为0）：

//进入第二个条件块，调用this.ShowSysMsg(serverPack.msg);方法，显示服务器返回的错误信息（serverPack.msg）。
//catch (error) { ... }：这是一个异常捕获块，用于捕获可能发生的异常错误。如果在解析httpResText为JSON时出现错误，将不会抛出错误而是在这里进行捕获，代码块内不做任何处理。

//综合来说，这段JavaScript代码用于处理接收到的HTTP响应数据：

//首先，尝试将HTTP响应文本httpResText解析为JSON格式数据，并根据serverPack中的code属性的值来判断响应数据的成功或失败状态。
//如果响应数据为成功状态，根据serverUrl的不同执行不同的操作，例如处理验证码的相关逻辑。
//如果响应数据为失败状态，显示服务器返回的错误信息。
//但需要注意的是，部分逻辑可能已经被注释掉，其中处理验证码的相关逻辑被注释掉了。另外，处理验证码的部分代码被隐藏，可能在被调用的方法中。
            if (serverPack["code"] == 0) {
                if (this.yanzhengUrl == serverUrl) {
                    let btn_yzm = this.mobile.getChildByName('btn_yzm');
                    btn_yzm.active = false;
                    this.lb_times = 60;
                    this.schedule(this.ShowYanZhengMaTime, 1);
                    this.scheduleOnce(function () {
                        btn_yzm.active = true;
                        this.lb_times = 0;
                    }, 60);
                } else if (this.checkCodeUrl == serverUrl) {
                    //let that=this;
                    //this.SDKManager.LoginByMobile(this.phoneNo,this.phoneNo);
                    /*//提交手机号码给服务端
                    this.NetManager.SendPack("game.CPlayerPhone",{"phone":this.phoneNo},function(success){
                        that.HideNode('phone');
                    },function(error){

                    });*/
                }
            } else {
                this.ShowSysMsg(serverPack.msg);
            }
        }
        catch (error) {

        }
    },
    //这是一个方法名，表示处理HTTP请求连接失败的逻辑。
    OnConnectHttpFail: function (serverUrl, readyState, status) {
    //serverUrl：表示连接失败的HTTP请求的目标URL。
    //表示HTTP请求的当前状态。这是一个整数值，可能是以下几种状态：
    //0: 请求未初始化
    //1: 服务器连接已建立
    //2: 请求已接收
    //3: 请求处理中
    //4: 请求已完成，且响应已就绪
    //status表示HTTP请求的响应状态码。这是一个整数值，通常HTTP响应的状态码有以下几种常见值：
    //200: OK，表示成功处理请求
    //404: Not Found，表示请求的资源不存在
    //500: Internal Server Error，表示服务器内部错误

    },
    ShowYanZhengMaTime: function () {//这是一个方法，用于实现验证码倒计时的功能。
        let lb_time = this.mobile.getChildByName('lb_yzm').getComponent(cc.Label);//获取名为'lb_yzm'的子节点，并通过cc.Label组件获取该节点的标签组件lb_time。
        this.lb_times = this.lb_times - 1;//将this.lb_times减1，即验证码倒计时值减1。
        //如果this.lb_times小于等于0，表示验证码倒计时已经结束，这时取消调度this.ShowYanZhengMaTime，将验证码标签设置为空字符串，退出方法。
        //否则，将this.lb_times的值显示在验证码标签上。
        if (this.lb_times <= 0) {
            this.unschedule(this.ShowYanZhengMaTime);
            lb_time.string = "";
            return;
        }
        lb_time.string = this.lb_times + "";
    },
    //这是一个方法，用于执行登录操作。在当前的代码中，它调用了WeiXinLogin方法，可能是执行微信登录的操作。
    Event_DoLogin: function () {
        this.WeiXinLogin();
    },
    //首先，获取名为'edit_phone'的子节点，通过cc.EditBox组件获取输入手机号码的文本内容。
    //如果手机号码为空，则显示"请填写手机号码"的错误提示，并退出方法。
    //如果手机号码不为空，使用checkPhone方法检查手机号码的格式是否正确。如果手机号码格式不正确，则显示"电话号码有误"的错误提示，并退出方法。
    //获取名为'edit_yzm'的子节点，通过cc.EditBox组件获取输入的验证码文本内容。
    //如果验证码为空，则显示"请填写验证码"的错误提示，并退出方法。
    //如果手机号码和验证码都不为空，调用SDKManager.LoginByMobile(phone, code)方法，可能用于通过手机号码和验证码登录。
    //将手机号码和验证码以对象的形式存储在本地缓存中，用于后续使用。
    btn_login_duanxin: function () {
        let phone = this.mobile.getChildByName('edit_phone').getComponent(cc.EditBox).string;
        if (!phone) {
            this.ShowSysMsg('请填写手机号码');
            return;
        }
        let checkPhone = this.checkPhone(phone);
        if (checkPhone == false) {
            this.ShowSysMsg('电话号码有误');
            return;
        }
        let code = this.mobile.getChildByName('edit_yzm').getComponent(cc.EditBox).string;
        if (!code) {
            this.ShowSysMsg('请填写验证码');
            return;
        }
        this.SDKManager.LoginByMobile(phone, code);
        //本地缓存一下
        this.LocalDataManager.SetConfigProperty("Account", "AccountMobile", { "SDKToken": code, "mobile": phone });
    },
    //websocket事件回掉
    //这是一个方法，用于处理WebSocket事件的回调。
    //首先，触发名为"ModalLayer"的事件
    //然后，调用NetManager.OnWebSocketEvent(eventName, arg)方法，将WebSocket事件名称和参数传递给NetManager对象的OnWebSocketEvent方法
    OnWebSocketEvent: function (eventName, arg) {
        app.Client.OnEvent("ModalLayer", "ReceiveNet");
        this.NetManager.OnWebSocketEvent(eventName, arg);
    },
    //---------点击函数---------------------
    //这是一个名为OnClick的方法，用于处理按钮点击事件。方法接受两个参数：btnName表示按钮的名称，btnNode表示按钮节点。
    OnClick: function (btnName, btnNode) {
        if (btnName == "btn_login") {//这是一个条件判断语句，根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_login"，表示点击了登录按钮。
            //首先，检查用户是否勾选了同意条款的复选框（toggle_agrgee），如果未勾选，则显示"MSG_NOT_USER_AGREE"的提示信息，并退出方法。
            //如果用户已勾选同意条款，调用WeiXinLogin方法，可能是执行微信登录的操作。
            if (!this.toggle_agrgee.isChecked) {
                this.ShowSysMsg("MSG_NOT_USER_AGREE");
                return;
            }
            this.WeiXinLogin();
        }

        //新增加一个游客登录
        else if (btnName == "btnRnm"){
            this.Click_btnRnm();
            }

        else if (btnName == "btn_login_line") {//这是另一个条件判断语句，根据btnName的值来执行不同的操作。
            // 如果按钮名称为"btn_login_line"，表示点击了另一个登录按钮，可能是特定于Line SDK的登录按钮。
            // 首先，检查是否是原生平台（cc.sys.isNative），如果不是原生平台，直接返回，不进行后续的登录操作。
            // 接着，检查用户是否勾选了同意条款的复选框（toggle_agrgee），如果未勾选，则显示"MSG_NOT_USER_AGREE"的提示信息，并退出方法。
            // 如果用户已勾选同意条款，触发名为"ChangeBtnState"的事件，将按钮状态设为1（可能用于禁用按钮）。
            // 调用SDKManager.LoginByLineSDK()方法，可能是执行Line SDK登录的操作。
            // 定义一个名为OnTimer的函数，在5秒后执行以下操作：
            // 调用app.HeroAccountManager().IsDoLogining(false)方法，可能是设置登录状态为false，表示登录已经完成。
            if (!cc.sys.isNative) {
                return;
           }
           if (!this.toggle_agrgee.isChecked) {
                this.ShowSysMsg("MSG_NOT_USER_AGREE");
               return;
           }
           app.Client.OnEvent("ChangeBtnState", { "state": 1 });
           this.SDKManager.LoginByLineSDK();
            var OnTimer = function (passSecond) {
                app.Client.OnEvent("ChangeBtnState", {"state":0});
                app.HeroAccountManager().IsDoLogining(false);
            };
           this.scheduleOnce(OnTimer, 5.0);
       }
        //这是另一个条件判断语句，根据btnName的值来执行不同的操作。
        else if (btnName == "btn_login_facebook") {
            //如果按钮名称为"btn_login_facebook"，表示点击了Facebook登录按钮。
            //首先，检查是否是原生平台（cc.sys.isNative），如果不是原生平台，直接返回，不进行后续的登录操作。
            //接着，检查用户是否勾选了同意条款的复选框（toggle_agrgee），如果未勾选，则显示"MSG_NOT_USER_AGREE"的提示信息，并退出方法。
            //如果用户已勾选同意条款，触发名为"ChangeBtnState"的事件，将按钮状态设为1（可能用于禁用按钮）。
            //调用SDKManager.LoginByFacebookSDK()方法，可能是执行Facebook SDK登录的操作。
            //定义一个名为OnTimer的函数，在5秒后执行以下操作：
            //调用app.HeroAccountManager().IsDoLogining(false)方法，可能是设置登录状态为false，表示登录已经完成。
            if (!cc.sys.isNative) {
                return;
            }
            if (!this.toggle_agrgee.isChecked) {
                this.ShowSysMsg("MSG_NOT_USER_AGREE");
                return;
            }
            app.Client.OnEvent("ChangeBtnState", { "state": 1 });
            this.SDKManager.LoginByFacebookSDK();
            var OnTimer = function (passSecond) {
                //app.Client.OnEvent("ChangeBtnState", {"state":0});
                app.HeroAccountManager().IsDoLogining(false);
            };
            this.scheduleOnce(OnTimer, 5.0);
        }
        //这是另一个条件判断语句，根据btnName的值来执行不同的操作。
        else if (btnName == "btn_login_xl") {
              //如果按钮名称为"btn_login_xl"，表示点击了闲聊登录按钮。
              //首先，检查是否是原生平台（cc.sys.isNative），如果不是原生平台，直接返回，不进行后续的登录操作。
              //接着，检查用户是否勾选了同意条款的复选框（toggle_agrgee），如果未勾选，则显示"MSG_NOT_USER_AGREE"的提示信息，并退出方法。
              //如果用户已勾选同意条款，触发名为"ChangeBtnState"的事件，将按钮状态设为1（可能用于禁用按钮）。
              //调用SDKManager.LoginByXLSDK()方法，可能是执行闲聊 SDK登录的操作。
              //定义一个名为OnTimer的函数，在5秒后执行以下操作：
            if (!cc.sys.isNative) {
                // let code="770b90b81d6fadc19a60ba2a8907805e";
                // let dataDict=[];
                // dataDict['ErrCode']=0;
                // dataDict['Code']=code;
                // app.XLAppManager().OnNativeNotifyXLLogin(dataDict);

                return;
            }
            if (!this.toggle_agrgee.isChecked) {
                this.ShowSysMsg("MSG_NOT_USER_AGREE");
                return;
            }
            app.Client.OnEvent("ChangeBtnState", { "state": 1 });
            this.SDKManager.LoginByXLSDK();
            var OnTimer = function (passSecond) {
                //app.Client.OnEvent("ChangeBtnState", {"state":0});
                app.HeroAccountManager().IsDoLogining(false);
            };
            this.scheduleOnce(OnTimer, 5.0);
        }
        //这是另一个条件判断语句，根据btnName的值来执行不同的操作。
        else if (btnName == "btn_mobile") {
           //如果按钮名称为"btn_mobile"，表示点击了手机号码登录按钮。
           //首先，将"btnLogin"按钮和"btnMobile"按钮的节点设置为不可见，将"mobile"节点设置为可见，显示手机号码登录界面。
           //接着，尝试从本地缓存中获取手机号码登录信息（AccountMobile），如果存在则进行自动登录。
           //如果有手机号码登录信息，从中获取SDKToken和手机号码。
           //调用SDKManager.LoginByMobile(mobile, sdkToken)方法，可能是执行手机号码登录的操作，用于自动登录。
            this.btnLogin.node.active = false;
            this.btnMobile.node.active = false;
            this.mobile.active = true;
            let accessTokenInfo = this.LocalDataManager.GetConfigProperty("Account", "AccountMobile");
            if (accessTokenInfo) {
                let sdkToken = accessTokenInfo["SDKToken"];
                let mobile = accessTokenInfo["mobile"];
                //let sdkAccountID = accessTokenInfo["AccountID"];
                this.SDKManager.LoginByMobile(mobile, sdkToken);
            }
        }
        else if (btnName == "btn_back") {//根据btnName的值来执行不同的操作。
            //this.NetManager.Disconnect();
            //如果按钮名称为"btn_back"，表示点击了返回按钮，用于从手机号码登录界面返回到原始登录界面。
            //首先，将"btnLogin"按钮和"btnMobile"按钮的节点设置为可见，将"mobile"节点设置为不可见，恢复原始登录界面。
            this.btnLogin.node.active = true;
            this.btnMobile.node.active = true;
            this.mobile.active = false;
        }
        else if (btnName == "btn_yzm") {//根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_yzm"，表示点击了获取验证码按钮。
            //调用click_btn_yzm()方法，可能是执行获取验证码的操作。
            this.click_btn_yzm();
        }
        else if (btnName == "btn_login_duanxin") {//根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_login_duanxin"，表示点击了短信验证码登录按钮。
            //调用btn_login_duanxin()方法，可能是执行短信验证码登录的操作。
            this.btn_login_duanxin();
        }
        else if (btnName == 'btn_user_agree') {//根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_user_agree"，表示点击了用户协议按钮。
            //调用FormManager.ShowForm("UIFuWuTiaoKuan")方法，可能是显示用户协议界面。
            this.FormManager.ShowForm("UIFuWuTiaoKuan");
        }
        else if ('btn_facebookShareLink' == btnName) {// 调试分享 //根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_facebookShareLink"，表示点击了分享链接到Facebook的按钮。
            //首先，从客户端配置中获取分享标题、描述和分享链接URL（WeChatShareTitle、WeChatShareDesc、WeChatAppShareUrl）。
            //获取当前角色的英雄ID（heroID）和城市ID（cityId）。
            //将英雄ID和城市ID添加到分享链接URL的末尾。
            //调用SDKManager.ShareFacebookLink(title, desc, weChatAppShareUrl)方法，可能是执行分享链接到Facebook的操作，传递分享标题、描述和分享链接URL作为参数。
            let title = app.Client.GetClientConfigProperty("WeChatShareTitle");
            let desc = app.Client.GetClientConfigProperty("WeChatShareDesc");
            let weChatAppShareUrl = app.Client.GetClientConfigProperty("WeChatAppShareUrl");
            console.log("Click_btn_facebook: cfg weChatAppShareUrl: ", weChatAppShareUrl);
            let heroID = app.HeroManager().GetHeroProperty("pid");
            console.log("Click_btn_facebook: heroID: ", heroID);
            let cityId = app.HeroManager().GetHeroProperty("cityId");
            weChatAppShareUrl = weChatAppShareUrl + heroID + "&cityid=" + cityId;
            console.log("Click_btn_facebook:", title);
            console.log("Click_btn_facebook:", desc);
            console.log("Click_btn_facebook:", weChatAppShareUrl);

            this.SDKManager.ShareFacebookLink(title, desc, weChatAppShareUrl);
        }
        else if ('btn_facebookShareImage' == btnName) {// 调试分享  //根据btnName的值来执行不同的操作。
            //如果按钮名称为"btn_facebookShareImage"，表示点击了分享图片到Facebook的按钮。
            //调用SDKManager.ShareFacebookImage()方法，可能是执行分享图片到Facebook的操作。
            this.SDKManager.ShareFacebookImage();
        }
        else {
                            console.error("OnClick not find:%s", btnName);//如果按钮名称不匹配上述条件，则输出错误日志，表示找不到对应的按钮点击处理。
        }
    },
    UpdateAccessPoint: function () {//这是一个方法UpdateAccessPoint()，用于更新访问点（AccessPoint）的值。访问点可能是一个标识，用于记录当前的访问状态或连接状态。代码根据当前访问点的值进行循环更新。
        //从本地数据管理器中获取名为"Account"的配置，并获取名为"AccessPoint"的值。这个值表示当前的访问点状态。
        let AccessPoint = app.LocalDataManager().GetConfigProperty("Account", "AccessPoint");
        //然后，代码通过一系列的条件语句，根据当前访问点的值来更新访问点：

       //如果AccessPoint的值为0，则将其更新为1。
       //如果AccessPoint的值为1，则将其更新为2。
       //如果AccessPoint的值为2，则将其更新为3。
       //如果AccessPoint的值为3，则将其更新为0。
        if (AccessPoint == 0) {
            app.LocalDataManager().SetConfigProperty("Account", "AccessPoint", 1);
        } else if (AccessPoint == 1) {
            app.LocalDataManager().SetConfigProperty("Account", "AccessPoint", 2);
        } else if (AccessPoint == 2) {
            app.LocalDataManager().SetConfigProperty("Account", "AccessPoint", 3);
        } else if (AccessPoint == 3) {
            app.LocalDataManager().SetConfigProperty("Account", "AccessPoint", 0);
        }
    },
    Click_btnRnm:function(){
        this.HeroAccountManager.OneKeyRegAccount();
    },

    OnEditBoxBegin:function(sender){

	    //如果点击了密码输入,则清除token标示
	    /*if(sender == this.EditBoxPsw){
		    this.isToken = 0;
		    sender.string = "";
	    }*/
    },
    checkPhone: function (phone) {//是一个名为checkPhone的方法，用于验证输入的手机号码是否符合特定的格式规则。该方法根据手机号码的格式进行验证，并根据不同的规则返回不同的结果。
        //这是第一个条件判断语句，用正则表达式验证手机号码是否符合中国大陆的格式规则。

       //如果手机号码不满足中国大陆格式规则，则不做任何操作，继续下一个条件判断。
       //如果手机号码满足中国大陆格式规则，则返回1，表示是中国大陆的手机号码。
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            //不是国内
        } else {
            return 1;
        }
        //这是第二个条件判断语句，用正则表达式验证手机号码是否符合台湾地区的格式规则。
        //如果手机号码不满足台湾地区格式规则，则不做任何操作，继续下一个条件判断。
        //如果手机号码满足台湾地区格式规则，则返回2，表示是台湾地区的手机号码。
        if (!(/^09\d{8}$/.test(phone))) {
            //不是台湾
        } else {
            return 2;
        }
        //这是第三个条件判断语句，用正则表达式验证手机号码是否符合台湾地区的格式规则（带有国际区号00886）。
        //如果手机号码不满足台湾地区带国际区号格式规则，则不做任何操作，继续下一个条件判断。
        //如果手机号码满足台湾地区带国际区号格式规则，则返回3，表示是台湾地区的手机号码。
        if (!(/^00886\d{9}$/.test(phone))) {
            //不是台湾
        } else {
            return 3;
        }
        return false;//如果手机号码不符合以上三个格式规则中的任何一个，则返回false，表示不是中国大陆或台湾地区的手机号码。
    },
    //是一个名为click_btn_yzm的方法，用于处理点击获取验证码的操作。该方法首先验证手机号码的格式，然后根据手机号码的格式选择不同的短信模板，最后发送获取验证码的请求。
    click_btn_yzm: function () {
        let phone = this.mobile.getChildByName('edit_phone').getComponent(cc.EditBox).string;//从页面中获取手机号码输入框的内容。
        //如果手机号码为空，弹出提示信息"请填写手机号码"，并返回，不执行后续操作。
        if (!phone) {
            this.ShowSysMsg('请填写手机号码');
            return;
        }
        let checkPhone = this.checkPhone(phone);//调用之前定义的checkPhone方法，验证手机号码的格式，并将结果保存在checkPhone变量中。
        //如果checkPhone的值为false，表示手机号码格式不正确，弹出提示信息"电话号码有误"，并返回，不执行后续操作。
        if (checkPhone == false) {
            this.ShowSysMsg('电话号码有误');
            return;
        }
        //根据不同的checkPhone值（1、2、3）选择不同的短信模板：

       //如果checkPhone的值为2（台湾手机号码），则将短信模板设置为"SMS_194050862"，并在手机号码前添加国际区号"00886"。
       //如果checkPhone的值为3（带国际区号的台湾手机号码），则将短信模板设置为"SMS_194050862"。
        let sms_temple = "SMS_154085055";//
        if (checkPhone == 2) {
            //台湾手机
            sms_temple = "SMS_194050862";
            //00886
            phone = "00886" + phone.substr(1);
        }
        if (checkPhone == 3) {
            //台湾手机
            sms_temple = "SMS_194050862";
        }
        this.yanzhengUrl = "http://code.qicaiqh.com/SendCode";//获取验证码：URL为"http://code.qicaiqh.com/SendCode"。

        //构建发送获取验证码请求的参数SendPack：

        //mobile字段为手机号码。
        //sms_temple字段为短信模板，根据前面的条件选择不同的模板。
        let SendPack = {

            "mobile": phone,
            "sms_temple": sms_temple,
        };
        this.SendHttpRequest(this.yanzhengUrl, "?mobile=" + phone + "&sms_temple=" + sms_temple, "GET", {});
    },
});
