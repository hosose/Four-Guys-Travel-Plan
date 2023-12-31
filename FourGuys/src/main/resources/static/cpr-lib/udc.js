/// start - udc.alert
/*
 * UDC Qualified Name: udc.alert
 * App URI: udc/alert
 * Source Location: udc/alert.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/alert", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * alert.js
				 * Created at 2023. 8. 28. 오후 5:28:27.
				 *
				 * @author USER
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					// TODO: 그리드의 뷰 모드에서 표시할 텍스트를 반환하는 하는 코드를 작성해야 합니다.
					return "";
				};;
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1024px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px"
				});
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
				// UI Configuration
				var output_1 = new cpr.controls.Output();
				output_1.value = "공사중입니다.";
				output_1.style.css({
					"font-size" : "25px",
					"font-family" : "@AppleSDGothicNeoB00",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"top": "20px",
					"left": "20px",
					"width": "260px",
					"height": "230px"
				});
				
				var button_1 = new cpr.controls.Button();
				button_1.value = "닫기";
				button_1.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-family" : "@AppleSDGothicNeoB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				container.addChild(button_1, {
					"top": "260px",
					"left": "20px",
					"width": "260px",
					"height": "20px"
				});
			}
		});
	internalApp.title = "다른지역 막기";
	
	// Type declaration for alert
	cpr.utils.Util.ensurePackage("udc").alert = function(id){
		cpr.controls.UDCBase.call(this, "udc.alert", internalApp, id);
	};
	
	udc.alert.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.alert.prototype, "type", {
		get : function(){
			return "udc.alert";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.alert
/// start - udc.header_nav
/*
 * UDC Qualified Name: udc.header_nav
 * App URI: udc/header_nav
 * Source Location: udc/header_nav.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/header_nav", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * header_nav.js
				 * Created at 2023. 8. 4. 오전 9:42:41.
				 *
				 * @author USER
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function() {
					return "";
				};
	
				/*
				 * "플랜 생성" 버튼(create_plan)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onCreate_planClick(e) {
					var create_plan = e.control;
					location.href = "/selectDestinationForm"
				}
	
				/*
				 * "Login" 버튼(login)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onLoginClick(e) {
					var login = e.control;
					location.href = "/loginForm";
				}
	
				/*
				 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
				 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
				 */
				function onBodyLoad(e){
					var subLogin = app.lookup("loginCheck");
					subLogin.send();
				}
	
				/*
				 * 서브미션에서 submit-success 이벤트 발생 시 호출.
				 * 통신이 성공하면 발생합니다.
				 */
				function onLoginCheckSubmitSuccess(e){
					var loginCheck = e.control;
					var vo = loginCheck.getMetadata("memberVO");
					var loginBtn = app.lookup("loginBtn");
					var logoutBtn = app.lookup("logoutBtn");
					var MyPageBtn = app.lookup("myPageBtn");
					if(vo){
						loginBtn.visible = false;
						logoutBtn.visible = true;
						MyPageBtn.visible = true;
					}
				}
	
				/*
				 * "마이페이지" 버튼(MyPageBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onMyPageBtnClick(e){
					var MyPageBtn = e.control;
					location.href = "mypage";
				}
				/*
				 * "Logout" 버튼(logoutBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onLogoutBtnClick(e){
					var logoutBtn = e.control;
					var subLogout = app.lookup("subLogout");
					subLogout.send();
				}
	
				/*
				 * 서브미션에서 submit-success 이벤트 발생 시 호출.
				 * 통신이 성공하면 발생합니다.
				 */
				function onSubLogoutSubmitSuccess(e){
					var subLogout = e.control;
					var uri = subLogout.getMetadata("uri");
					if (uri != null) {
					location.href=uri
					}
				}
	
				/*
				 * "플래너 게시판" 버튼(boardBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onBoardBtnClick2(e){
					var boardBtn = e.control;
					location.href="planner-board-list.clx";
				};
				// End - User Script
				
				// Header
				var submission_1 = new cpr.protocols.Submission("loginCheck");
				submission_1.method = "get";
				submission_1.action = "loginCheck";
				if(typeof onLoginCheckSubmitSuccess == "function") {
					submission_1.addEventListener("submit-success", onLoginCheckSubmitSuccess);
				}
				app.register(submission_1);
				
				var submission_2 = new cpr.protocols.Submission("subLogout");
				submission_2.async = false;
				submission_2.action = "logout";
				if(typeof onSubLogoutSubmitSuccess == "function") {
					submission_2.addEventListener("submit-success", onSubLogoutSubmitSuccess);
				}
				app.register(submission_2);
				app.supportMedia("all and (min-width: 1024px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px"
				});
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
				// UI Configuration
				var button_1 = new cpr.controls.Button("loginBtn");
				button_1.value = "Login";
				button_1.style.css({
					"background-color" : "#98DDE3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onLoginClick == "function") {
					button_1.addEventListener("click", onLoginClick);
				}
				container.addChild(button_1, {
					"top": "20px",
					"right": "20px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_2 = new cpr.controls.Button("boardBtn");
				button_2.visible = true;
				button_2.value = "플래너 게시판";
				button_2.style.css({
					"background-color" : "#98DDE3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onBoardBtnClick2 == "function") {
					button_2.addEventListener("click", onBoardBtnClick2);
				}
				container.addChild(button_2, {
					"top": "20px",
					"right": "161px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_3 = new cpr.controls.Button("createBtn");
				button_3.value = "플랜 생성";
				button_3.style.css({
					"border-right-style" : "none",
					"color" : "#FFFFFF",
					"border-bottom-color" : "#ffffff",
					"border-left-color" : "#ffffff",
					"font-size" : "18px",
					"border-right-color" : "#ffffff",
					"font-style" : "normal",
					"border-top-style" : "none",
					"background-color" : "#98DDE3",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"border-left-style" : "none",
					"border-top-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none"
				});
				if(typeof onCreate_planClick == "function") {
					button_3.addEventListener("click", onCreate_planClick);
				}
				container.addChild(button_3, {
					"top": "20px",
					"right": "302px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_4 = new cpr.controls.Button("logoutBtn");
				button_4.visible = false;
				button_4.value = "Logout";
				button_4.style.css({
					"background-color" : "#98DDE3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onLogoutBtnClick == "function") {
					button_4.addEventListener("click", onLogoutBtnClick);
				}
				container.addChild(button_4, {
					"top": "20px",
					"right": "20px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_5 = new cpr.controls.Button("myPageBtn");
				button_5.visible = false;
				button_5.value = "마이페이지";
				button_5.style.css({
					"background-color" : "#98DDE3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onMyPageBtnClick == "function") {
					button_5.addEventListener("click", onMyPageBtnClick);
				}
				container.addChild(button_5, {
					"top": "20px",
					"right": "443px",
					"width": "131px",
					"height": "45px"
				});
				if(typeof onBodyLoad == "function"){
					app.addEventListener("load", onBodyLoad);
				}
			}
		});
	internalApp.title = "해더";
	
	// Type declaration for header_nav
	cpr.utils.Util.ensurePackage("udc").header_nav = function(id){
		cpr.controls.UDCBase.call(this, "udc.header_nav", internalApp, id);
	};
	
	udc.header_nav.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.header_nav.prototype, "type", {
		get : function(){
			return "udc.header_nav";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.header_nav
/// start - udc.logo
/*
 * UDC Qualified Name: udc.logo
 * App URI: udc/logo
 * Source Location: udc/logo.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/logo", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * logo.js
				 * Created at 2023. 8. 4. 오전 9:40:39.
				 *
				 * @author USER
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					return "";
				};
	
				/*
				 * 버튼(logo)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onLogoClick(e){
					var logo = e.control;
					location.href="/"
				};
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1024px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px"
				});
				
				// Layout
				var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
				container.setLayout(responsiveXYLayout_1);
				
				// UI Configuration
				var button_1 = new cpr.controls.Button("logo");
				button_1.value = "";
				button_1.style.css({
					"border-right-style" : "none",
					"background-color" : "transparent",
					"background-size" : "cover",
					"border-left-style" : "none",
					"border-bottom-style" : "none",
					"background-position" : "center",
					"background-image" : "url('images/Four_Guys-removebg-preview.png')",
					"border-top-style" : "none"
				});
				if(typeof onLogoClick == "function") {
					button_1.addEventListener("click", onLogoClick);
				}
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "10px",
							"left": "10px",
							"width": "153px",
							"height": "51px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "10px",
							"left": "5px",
							"width": "75px",
							"height": "51px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "10px",
							"left": "3px",
							"width": "52px",
							"height": "51px"
						}
					]
				});
			}
		});
	internalApp.title = "로고";
	
	// Type declaration for logo
	cpr.utils.Util.ensurePackage("udc").logo = function(id){
		cpr.controls.UDCBase.call(this, "udc.logo", internalApp, id);
	};
	
	udc.logo.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.logo.prototype, "type", {
		get : function(){
			return "udc.logo";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.logo
/// start - udc.myPageSideBar
/*
 * UDC Qualified Name: udc.myPageSideBar
 * App URI: udc/myPageSideBar
 * Source Location: udc/myPageSideBar.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/myPageSideBar", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * myPageSideBar.js
				 * Created at 2023. 8. 4. 오후 3:21:32.
				 *
				 * @author USER
				 ************************************************/
	
				/**
				 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
				 */
				exports.getText = function(){
					return "";
				};
	
				/*
				 * "MYPAGE" 버튼(MyPageBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onMyPageBtnClick(e){
					var myPageBtn = e.control;
					location.href="mypage";
				}
	
				/*
				 * "MYPLAN" 버튼(MyPlanBtn)에서 click 이벤트 발생 시 호출.
				 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
				 */
				function onMyPlanBtnClick(e){
					var myPlanBtn = e.control;
					location.href="myplan";
				};
				// End - User Script
				
				// Header
				app.supportMedia("all and (min-width: 1024px)", "default");
				app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
				app.supportMedia("all and (max-width: 499px)", "mobile");
				
				// Configure root container
				var container = app.getContainer();
				container.style.css({
					"width" : "100%",
					"top" : "0px",
					"height" : "100%",
					"left" : "0px",
					"color" : "#FFFFFF"
				});
				
				// Layout
				var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
				container.setLayout(responsiveXYLayout_1);
				
				// UI Configuration
				var button_1 = new cpr.controls.Button("MyPageBtn");
				button_1.value = "MYPAGE";
				button_1.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onMyPageBtnClick == "function") {
					button_1.addEventListener("click", onMyPageBtnClick);
				}
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "125px",
							"left": "0px",
							"width": "145px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "125px",
							"left": "0px",
							"width": "71px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "125px",
							"left": "0px",
							"width": "50px",
							"height": "50px"
						}
					]
				});
				
				var button_2 = new cpr.controls.Button("MyPlanBtn");
				button_2.value = "MYPLAN";
				button_2.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"font-style" : "normal",
					"border-top-style" : "none"
				});
				if(typeof onMyPlanBtnClick == "function") {
					button_2.addEventListener("click", onMyPlanBtnClick);
				}
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "65px",
							"left": "1px",
							"width": "144px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "65px",
							"left": "0px",
							"width": "70px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "65px",
							"left": "0px",
							"width": "49px",
							"height": "50px"
						}
					]
				});
			}
		});
	internalApp.title = "사이드바";
	
	// Type declaration for myPageSideBar
	cpr.utils.Util.ensurePackage("udc").myPageSideBar = function(id){
		cpr.controls.UDCBase.call(this, "udc.myPageSideBar", internalApp, id);
	};
	
	udc.myPageSideBar.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.myPageSideBar.prototype, "type", {
		get : function(){
			return "udc.myPageSideBar";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.myPageSideBar
