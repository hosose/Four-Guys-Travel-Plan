/*
 * App URI: mypage
 * Source Location: mypage.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("mypage", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * mypage.js
			 * Created at 2023. 8. 4. 오전 9:40:38.
			 *
			 * @author USER
			 ************************************************/
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var findMyPage = app.lookup("findMyPage");
				findMyPage.send();
			}

			/*
			 * "수정하기" 버튼(btn2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn2Click(e){
				var btn2 = e.control;
				var PASSWORD = app.lookup("PASSWORD");
				var NAME = app.lookup("NAME");
				var ADDR = app.lookup("ADDR");
				var PHONE = app.lookup("PHONE");
				let strengthBadge = app.lookup("password_check");
				if(PASSWORD.value.trim() == "") {
					alert("비밀번호를 입력해주세요");
					PASSWORD.focus();
				}else if(NAME.value.trim() == "") {
					alert("이름을 입력해주세요");
					NAME.focus();
				}else if(ADDR.value.trim() == "") {
					alert("주소을 입력해주세요");
					ADDR.focus();
				}else if(PHONE.value.trim() == "") {
					alert("휴대폰 번호를 입력해주세요");
					PHONE.focus();
				}else if(strengthBadge.value=="Weak"){
					alert("비밀번호를 다시 입력해주세요.");
					PASSWORD.focus();
				}else{
					updateMember();
				}
				
			}
			function updateMember(){
				var submission = app.lookup("updateMember");
				submission.send();
			}

			function StrengthChecker(PasswordParameter) {
				let strengthBadge = app.lookup("password_check");
				let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
				let mediumPassword = new RegExp('(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}');
				if (strongPassword.test(PasswordParameter)) {
					strengthBadge.style.css("background-color",  "green");
					strengthBadge.style.css("color","white");
					strengthBadge.value="Strong";
					strengthBadge.redraw();
				} else if (mediumPassword.test(PasswordParameter)) {
					strengthBadge.style.css("background-color",  "blue");
					strengthBadge.style.css("color","white");
					strengthBadge.value = 'Medium';
					strengthBadge.redraw();
				} else {
					strengthBadge.style.css("background-color",  "red");
					strengthBadge.style.css("color","white");
					strengthBadge.value = 'Weak';
					strengthBadge.redraw();
			  }
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onFindMyPageSubmitSuccess(e){
				var findMyPage = e.control;
				var meta = findMyPage.getMetadata("memberVO");
				if(meta != null){
					var ID = app.lookup("ID");
					var passwd = app.lookup("PASSWORD");
					var ADDR = app.lookup("ADDR");
					var BIRTH = app.lookup("BIRTH");
					var NAME = app.lookup("NAME");
					var EMAIL = app.lookup("EMAIL");
					var PHONE = app.lookup("PHONE");
					ID.value=meta["id"];
					passwd.value=meta["password"];
					ADDR.value=meta["address"];
					BIRTH.value=meta["birth"];
					EMAIL.value=meta["email"];
					PHONE.value=meta["phone"];
					NAME.value=meta["name"];
				}else{
					location.href="";
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onUpdateMemberSubmitSuccess(e){
				var updateMember = e.control;
				alert("수정되었습니다.");
				location.href="";
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onUpdateMemberSubmitError(e){
				var updateMember = e.control;
				var msg = updateMember.getMetadata("message");
				if (msg != null) {
					alert(msg);
				}
			}

			/*
			 * "계정 탈퇴" 버튼(btn1)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function ondeleteBtnClick(e){
				var deleteBtn = e.control;
				var intro = "탈퇴 하시겠습니까?"
				var initValue = {
					"msg": intro
				}
				app.openDialog("deleteMember", {
					width: 400,
					height: 150,
					headerVisible: false
				}, function(dialog) {
					dialog.ready(function(dialogApp) {
						// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
						dialogApp.initValue = initValue;
					});
				}).then(function(returnValue) {
					alert(JSON.stringify(returnValue));
				});
			}

			/*
			 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
			 * 변경된 value가 저장된 후에 발생하는 이벤트.
			 */
			function onID(e){
				var iD = e.control;
				alert("아이디는 수정이 불가능 합니다.");
			}

			/*
			 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
			 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onBIRTH(e){
				var bIRTH = e.control;
				alert("생일은 수정이 불가능 합니다.");
			}

			/*
			 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
			 * 변경된 value가 저장된 후에 발생하는 이벤트.
			 */
			function onEMAIL(e){
				var eMAIL = e.control;
				alert("이메일은 수정이 불가능 합니다.");
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onPASSWORDBlur(e){
				var pASSWORD = e.control;
				var ipb_password_lookUp = app.lookup("PASSWORD");
				var passwordOutput = app.lookup("password_output");
				let strengthBadge = app.lookup("password_check");
				StrengthChecker(ipb_password_lookUp.value);
				if (ipb_password_lookUp.value.length < 8) {
					alert("비밀번호는 8자이상으로 작성해주세요");
					passwordOutput.value = "비밀번호는 8자이상으로 작성해주세요";
					ipb_password_lookUp.focus();
				}else if(strengthBadge.value=="Weak"){
					passwordOutput.value="1개이상의 특수문자가 필요합니다.";
				} else {
					passwordOutput.value = " ";
				}
			}
			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onNAMEBlur(e){
				var NAME = e.control;
				var ipb_name_lookUp = app.lookup("NAME");
				var nameOutput = app.lookup("name__output");
				if (ipb_name_lookUp.value.trim() == "") {
					nameOutput.value = "이름은 필수로 작성해주세요";
				} else {
					nameOutput.value = " ";
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onADDRBlur(e){
				var aDDR = e.control;
				var ipb_address_lookUp = app.lookup("ADDR");
				var addressOutput = app.lookup("addr__output");
				if (ipb_address_lookUp.value.trim() == "") {
					addressOutput.value = "주소는 필수로 작성해주세요";
				} else {
					addressOutput.value = " ";
				}
			}

			/*
			 * 마스크 에디터에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onPHONEBlur(e){
				var pHONE = e.control;
				var mse_phone_lookUp = app.lookup("PHONE");
				var phoneOutput = app.lookup("phone__output");
				if (mse_phone_lookUp.value.trim() == "") {
					phoneOutput.value = "핸드폰 번호는 필수로 작성해주세요";
				} else {
					phoneOutput.value = " ";
				}
			};
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("member");
			dataMap_1.parseData({
				"alterColumnLayout": "client",
				"columns": [
					{"name": "id"},
					{"name": "password"},
					{
						"name": "name",
						"dataType": "string"
					},
					{"name": "email"},
					{"name": "birth"},
					{"name": "phone"},
					{"name": "address"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("findMyPage");
			submission_1.method = "get";
			submission_1.action = "loginCheck";
			if(typeof onFindMyPageSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onFindMyPageSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("updateMember");
			submission_2.method = "put";
			submission_2.action = "/updateMember";
			submission_2.addRequestData(dataMap_1);
			if(typeof onUpdateMemberSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onUpdateMemberSubmitSuccess);
			}
			if(typeof onUpdateMemberSubmitError == "function") {
				submission_2.addEventListener("submit-error", onUpdateMemberSubmitError);
			}
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-image" : "none",
				"background-color" : "#fafafa",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "0px",
						"width": "170px",
						"height": "73px",
						"left": "calc(50% - 85px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"width": "83px",
						"height": "73px",
						"left": "calc(50% - 41px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"width": "58px",
						"height": "73px",
						"left": "calc(50% - 29px)"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container("grp5");
			group_1.style.css({
				"background-color" : "rgba(255, 255, 255, 0.6)"
			});
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "5px";
			formLayout_1.verticalSpacing = "5px";
			formLayout_1.setColumns(["1fr", "100px", "200px", "100px", "1fr"]);
			formLayout_1.setRows(["1fr", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "25px", "50px", "10px", "50px", "1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "아이디";
				output_1.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"colIndex": 1,
					"rowIndex": 1,
					"horizontalAlign": "center"
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "비밀번호";
				output_2.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"colIndex": 1,
					"rowIndex": 3,
					"horizontalAlign": "center"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "주소";
				output_3.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_3, {
					"colIndex": 1,
					"rowIndex": 5,
					"horizontalAlign": "center"
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "이름";
				output_4.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_4, {
					"colIndex": 1,
					"rowIndex": 7,
					"horizontalAlign": "center"
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "생년월일";
				output_5.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_5, {
					"colIndex": 1,
					"rowIndex": 9,
					"horizontalAlign": "center"
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "이메일";
				output_6.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_6, {
					"colIndex": 1,
					"rowIndex": 11,
					"horizontalAlign": "center"
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "휴대폰 번호";
				output_7.style.css({
					"background-color" : "#ffffff",
					"color" : "#AAAAAA",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none",
					"text-align" : "center"
				});
				container.addChild(output_7, {
					"colIndex": 1,
					"rowIndex": 13,
					"horizontalAlign": "center"
				});
				var inputBox_1 = new cpr.controls.InputBox("ID");
				inputBox_1.readOnly = true;
				inputBox_1.style.css({
					"background-color" : "#BFBFBF",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("member"), "id");
				if(typeof onID == "function") {
					inputBox_1.addEventListener("click", onID);
				}
				container.addChild(inputBox_1, {
					"colIndex": 2,
					"rowIndex": 1
				});
				var inputBox_2 = new cpr.controls.InputBox("PASSWORD");
				inputBox_2.secret = true;
				inputBox_2.style.css({
					"background-color" : "#f7f8f9",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("member"), "password");
				if(typeof onPASSWORDBlur == "function") {
					inputBox_2.addEventListener("blur", onPASSWORDBlur);
				}
				container.addChild(inputBox_2, {
					"colIndex": 2,
					"rowIndex": 3
				});
				var inputBox_3 = new cpr.controls.InputBox("ADDR");
				inputBox_3.style.css({
					"background-color" : "#f7f8f9",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				inputBox_3.bind("value").toDataMap(app.lookup("member"), "address");
				if(typeof onADDRBlur == "function") {
					inputBox_3.addEventListener("blur", onADDRBlur);
				}
				container.addChild(inputBox_3, {
					"colIndex": 2,
					"rowIndex": 5
				});
				var inputBox_4 = new cpr.controls.InputBox("NAME");
				inputBox_4.style.css({
					"background-color" : "#f7f8f9",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				inputBox_4.bind("value").toDataMap(app.lookup("member"), "name");
				if(typeof onNAMEBlur == "function") {
					inputBox_4.addEventListener("blur", onNAMEBlur);
				}
				container.addChild(inputBox_4, {
					"colIndex": 2,
					"rowIndex": 7
				});
				var inputBox_5 = new cpr.controls.InputBox("EMAIL");
				inputBox_5.readOnly = true;
				inputBox_5.style.css({
					"background-color" : "#BFBFBF",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				inputBox_5.bind("value").toDataMap(app.lookup("member"), "email");
				if(typeof onEMAIL == "function") {
					inputBox_5.addEventListener("click", onEMAIL);
				}
				container.addChild(inputBox_5, {
					"colIndex": 2,
					"rowIndex": 11
				});
				var dateInput_1 = new cpr.controls.DateInput("BIRTH");
				dateInput_1.readOnly = true;
				dateInput_1.style.css({
					"background-color" : "#BFBFBF",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				dateInput_1.bind("value").toDataMap(app.lookup("member"), "birth");
				if(typeof onBIRTH == "function") {
					dateInput_1.addEventListener("click", onBIRTH);
				}
				container.addChild(dateInput_1, {
					"colIndex": 2,
					"rowIndex": 9
				});
				var button_1 = new cpr.controls.Button("Update");
				button_1.value = "수정하기";
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
					"border-top-style" : "none"
				});
				if(typeof onBtn2Click == "function") {
					button_1.addEventListener("click", onBtn2Click);
				}
				container.addChild(button_1, {
					"colIndex": 1,
					"rowIndex": 16,
					"colSpan": 3,
					"rowSpan": 1
				});
				var button_2 = new cpr.controls.Button("deleteBtn");
				button_2.value = "계정 탈퇴";
				button_2.style.css({
					"background-color" : "#d27979",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none"
				});
				if(typeof ondeleteBtnClick == "function") {
					button_2.addEventListener("click", ondeleteBtnClick);
				}
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 18,
					"colSpan": 3,
					"rowSpan": 1
				});
				var output_8 = new cpr.controls.Output("password_check");
				output_8.style.css({
					"font-family" : "AppleSDGothicNeoM00",
					"text-align" : "center"
				});
				container.addChild(output_8, {
					"colIndex": 3,
					"rowIndex": 3
				});
				var output_9 = new cpr.controls.Output("password_output");
				output_9.style.css({
					"color" : "#FF0000",
					"text-align" : "center"
				});
				container.addChild(output_9, {
					"colIndex": 1,
					"rowIndex": 4,
					"colSpan": 3,
					"rowSpan": 1
				});
				var output_10 = new cpr.controls.Output("addr__output");
				output_10.style.css({
					"color" : "#FF0000",
					"text-align" : "center"
				});
				container.addChild(output_10, {
					"colIndex": 1,
					"rowIndex": 6,
					"colSpan": 3,
					"rowSpan": 1
				});
				var output_11 = new cpr.controls.Output("name__output");
				output_11.style.css({
					"color" : "#FF0000",
					"text-align" : "center"
				});
				container.addChild(output_11, {
					"colIndex": 1,
					"rowIndex": 8,
					"colSpan": 3,
					"rowSpan": 1
				});
				var output_12 = new cpr.controls.Output("phone__output");
				output_12.style.css({
					"color" : "#FF0000",
					"text-align" : "center"
				});
				container.addChild(output_12, {
					"colIndex": 1,
					"rowIndex": 14,
					"colSpan": 3,
					"rowSpan": 1
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("PHONE");
				maskEditor_1.mask = "(000)0000-0000";
				maskEditor_1.style.css({
					"background-color" : "#f7f8f9",
					"border-radius" : "5px",
					"font-size" : "18px",
					"font-family" : "AppleSDGothicNeoEB00",
					"background-image" : "none"
				});
				maskEditor_1.bind("value").toDataMap(app.lookup("member"), "phone");
				if(typeof onPHONEBlur == "function") {
					maskEditor_1.addEventListener("blur", onPHONEBlur);
				}
				container.addChild(maskEditor_1, {
					"colIndex": 2,
					"rowIndex": 13
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "100px",
						"right": "250px",
						"bottom": "100px",
						"left": "250px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "100px",
						"right": "122px",
						"bottom": "100px",
						"left": "122px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "100px",
						"right": "85px",
						"bottom": "100px",
						"left": "85px"
					}
				]
			});
			
			var userDefinedControl_2 = new udc.myPageSideBar();
			container.addChild(userDefinedControl_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "151px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "74px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"bottom": "0px",
						"left": "0px",
						"width": "52px"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "mypage";
	cpr.core.Platform.INSTANCE.register(app);
})();
