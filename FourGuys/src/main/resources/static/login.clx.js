/*
 * App URI: login
 * Source Location: login.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("login", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/*
			 * "LOGIN" 버튼(btnLogin)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtnLoginClick(e) {
				var btnLogin = e.control;
				memberLogin();
			}

			function memberLogin() {
				var subLogin = app.lookup("subLogin");
				subLogin.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSubLoginSubmitSuccess(e) {
				var subLogin = e.control;
				var uri = subLogin.getMetadata("uri");
				if (uri != null) {
				location.href=uri
				}
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onSubLoginSubmitError(e) {
				var subLogin = e.control;
				var msg = subLogin.getMetadata("message");
				if (msg != null) {
					alert(msg);
				}
				app.lookup("idInput").value = "";
				app.lookup("passwordInput").value = "";
				app.lookup("idInput").focus();
			}

			/*
			 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
			 * 사용자가 키를 누를 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
			 */
			function onPasswordInputKeydown(e){
				/**
				 * @type cpr.controls.InputBox
				 */
				var passwordInput = e.control;
				if(e.keyCode == cpr.events.KeyCode.ENTER){
					var loginBtn = app.lookup("btnLogin");
					loginBtn.click();	
				}
			}

			/*
			 * "회원가입" 버튼(register)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onRegisterClick2(e){
				var register = e.control;
					location.href = "/registerForm";
				
			};
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("loginParam");
			dataMap_1.parseData({
				"columns" : [
					{"name": "id"},
					{"name": "password"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("subLogin");
			submission_1.async = false;
			submission_1.action = "login";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSubLoginSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onSubLoginSubmitSuccess);
			}
			if(typeof onSubLoginSubmitError == "function") {
				submission_1.addEventListener("submit-error", onSubLoginSubmitError);
			}
			app.register(submission_1);
			app.supportMedia("all", "main");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-image" : "none",
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image();
			image_1.src = "images/harubang3.jpg";
			container.addChild(image_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
			
			var group_1 = new cpr.controls.Container("container");
			group_1.style.setClasses(["login-box"]);
			group_1.style.css({
				"background-color" : "tarnsparent",
				"border-right-style" : "solid",
				"border-bottom-color" : "#ffffff",
				"border-left-style" : "solid",
				"border-left-color" : "#ffffff",
				"border-top-color" : "#ffffff",
				"border-right-color" : "#ffffff",
				"border-bottom-style" : "solid",
				"border-top-style" : "solid"
			});
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.topMargin = "50";
			formLayout_1.rightMargin = "50";
			formLayout_1.bottomMargin = "50";
			formLayout_1.leftMargin = "50";
			formLayout_1.setColumns(["1fr"]);
			formLayout_1.setRows(["50px", "20px", "30px", "30px", "30px", "30px"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("idInput");
				inputBox_1.tooltip = "ID를 입력하세요";
				inputBox_1.placeholder = "ID";
				inputBox_1.style.css({
					"font-family" : "AppleSDGothicNeoB00"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("loginParam"), "id");
				container.addChild(inputBox_1, {
					"colIndex": 0,
					"rowIndex": 2,
					"verticalAlign": "fill"
				});
				var inputBox_2 = new cpr.controls.InputBox("passwordInput");
				inputBox_2.tooltip = "비밀번호를 입력하세요";
				inputBox_2.secret = true;
				inputBox_2.placeholder = "PW";
				inputBox_2.style.css({
					"font-family" : "AppleSDGothicNeoB00"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("loginParam"), "password");
				if(typeof onPasswordInputKeydown == "function") {
					inputBox_2.addEventListener("keydown", onPasswordInputKeydown);
				}
				container.addChild(inputBox_2, {
					"colIndex": 0,
					"rowIndex": 3,
					"verticalAlign": "fill"
				});
				var image_2 = new cpr.controls.Image();
				image_2.src = "theme/images/logo.png";
				container.addChild(image_2, {
					"colIndex": 0,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1
				});
				var button_1 = new cpr.controls.Button("btnLogin");
				button_1.value = "LOGIN";
				button_1.style.setClasses(["login"]);
				button_1.style.css({
					"background-color" : "#306dc6",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none"
				});
				if(typeof onBtnLoginClick == "function") {
					button_1.addEventListener("click", onBtnLoginClick);
				}
				container.addChild(button_1, {
					"colIndex": 0,
					"rowIndex": 4
				});
				var button_2 = new cpr.controls.Button("register");
				button_2.value = "회원가입";
				button_2.style.setClasses(["register"]);
				button_2.style.css({
					"background-color" : "#306dc6",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none"
				});
				if(typeof onRegisterClick2 == "function") {
					button_2.addEventListener("click", onRegisterClick2);
				}
				container.addChild(button_2, {
					"colIndex": 0,
					"rowIndex": 5
				});
			})(group_1);
			container.addChild(group_1, {
				"width": "350px",
				"height": "300px",
				"left": "calc(50% - 175px)",
				"top": "calc(50% - 150px)"
			});
			
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				"top": "8px",
				"left": "20px",
				"width": "183px",
				"height": "74px"
			});
		}
	});
	app.title = "로그인";
	cpr.core.Platform.INSTANCE.register(app);
})();
