/*
 * App URI: register
 * Source Location: register.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("register", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * register.js
			 * Created at 2023. 8. 4. 오후 3:28:09.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * "회원등록" 버튼(register)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onRegisterClick(e) {
				var register = e.control;
				
				var id = app.lookup("ipb_id");
				var password = app.lookup("ipb_password");
				var name = app.lookup("ipb_name");
				var birth = app.lookup("dti_birth");
				var address = app.lookup("ipb_address");
				var email = app.lookup("ipb_email");
				var phone = app.lookup("mse_phone");
				var checkDuplicateId = app.lookup("checkDuplicateId");
				var checkCount = checkDuplicateId.getMetadata("checkCount");
				let strengthBadge = app.lookup("password_check");
				if (id.value.trim() == "") {
					alert("ID 값을 입력해주세요");
					id.focus();
				} else if (password.value.trim() == "") {
					alert("PASSWORD 값을 입력해주세요");
					password.focus();
				} else if (name.value.trim() == "") {
					alert("이름 값을 입력해주세요");
					name.focus();
				} else if (birth.value.trim() == "") {
					alert("생년월일을 입력해주세요");
					birth.focus();
				} else if (address.value.trim() == "") {
					alert("주소 값을 입력해주세요");
					address.focus();
				} else if (email.value.trim() == "") {
					alert("이메일 값을 입력해주세요");
					email.focus();
				} else if (phone.value.trim() == "") {
					alert("휴대폰 값을 입력해주세요");
					phone.focus();
				} else if (checkCount == null) {
					alert("중복확인을 눌러주세요");
				} else if (checkCount > 0) {
					alert("ID 가 중복됩니다. 중복을 확인해주세요.");
				}else if(!isEmail(email.value)){
					alert("이메일 형식에 맞게 입력해주세요");
					email.focus();
				}else if(strengthBadge.value=="Weak"){
					alert("PASSWORD 값을 다시 입력해주세요.");
					password.focus();
				} else {
					memberRegister();
				}
			}

			function memberRegister() {
				var subRegister = app.lookup("subRegister");
				subRegister.send();
			}
			function isEmail(asValue) {
				// 이메일 형식에 맞게 입력했는지 체크
				let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
				return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
			}
			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onSubRegisterSubmitSuccess(e) {
				var subRegister = e.control;
				var uri = subRegister.getMetadata("registerSuccess");
				if (uri != null) {
					alert("회원가입을 축하드립니다.");
					location.href = uri;
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onIpb_idBlur(e) {
				var ipb_id = e.control;
				var ipb_id_lookUp = app.lookup("ipb_id");
				var idOutput = app.lookup("idOutput");
				if (ipb_id_lookUp.value.trim() == "") {
					idOutput.value = "id는 필수로 작성해주세요";
					
				} else {
					idOutput.value = " ";
					
				}
			}
			function StrengthChecker(PasswordParameter) {
				let password = app.lookup("ipb_password");
				let strengthBadge = app.lookup("password_check");
				var passwordOutput = app.lookup("passwordOutput");
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
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onIpb_passwordBlur(e) {
				var ipb_password = e.control;
				var ipb_password_lookUp = app.lookup("ipb_password");
				var passwordOutput = app.lookup("passwordOutput");
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
			function onIpb_nameBlur(e) {
				var ipb_name = e.control;
				var ipb_name_lookUp = app.lookup("ipb_name");
				var nameOutput = app.lookup("nameOutput");
				if (ipb_name_lookUp.value.trim() == "") {
					nameOutput.value = "이름은 필수로 작성해주세요";
					
				} else {
					nameOutput.value = " ";
					
				}
			}

			/*
			 * 데이트 인풋에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onDti_birthBlur(e) {
				var dti_birth = e.control;
				var dti_birth_lookUp = app.lookup("dti_birth");
				var birthOutput = app.lookup("birthOutput");
				if (dti_birth_lookUp.value.trim() == "") {
					birthOutput.value = "생년월일은 필수로 작성해주세요";
					
				} else {
					birthOutput.value = " ";
					
				}
				
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onIpb_addressBlur(e) {
				var ipb_address = e.control;
				var ipb_address_lookUp = app.lookup("ipb_address");
				var addressOutput = app.lookup("addressOutput");
				if (ipb_address_lookUp.value.trim() == "") {
					addressOutput.value = "주소는 필수로 작성해주세요";
				} else {
					addressOutput.value = " ";
				}
			}

			/*
			 * 인풋 박스에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onIpb_emailBlur(e) {
				var ipb_email = e.control;
				var ipb_email_lookUp = app.lookup("ipb_email");
				var emailOutput = app.lookup("emailOutput");
				if (ipb_email_lookUp.value.trim() == "") {
					emailOutput.value = "이메일 주소는 필수로 작성해주세요";
				}else if(!isEmail(ipb_email_lookUp.value)){
					emailOutput.value = "이메일 형식에 맞게 작성해주세요";
				} else {
					emailOutput.value = " ";
					
				}
			}

			/*
			 * 마스크 에디터에서 blur 이벤트 발생 시 호출.
			 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
			 */
			function onMse_phoneBlur(e) {
				var mse_phone = e.control;
				var mse_phone_lookUp = app.lookup("mse_phone");
				var phoneOutput = app.lookup("phoneOutput");
				if (mse_phone_lookUp.value.trim() == "") {
					phoneOutput.value = "핸드폰 번호는 필수로 작성해주세요";
				} else {
					phoneOutput.value = " ";
				}
			}

			/*
			 * "중복확인" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				checkDuplicateId();
			}

			function checkDuplicateId() {
				var checkDuplicateId = app.lookup("checkDuplicateId");
				checkDuplicateId.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onCheckDuplicateIdSubmitSuccess(e) {
				var checkDuplicateId = e.control;
				var checkCount = checkDuplicateId.getMetadata("checkCount");
				var idOutput = app.lookup("idOutput");
				var ipb_id = app.lookup("ipb_id");
				
				if (checkCount > 0) {
					alert("아이디가 중복됩니다.");
					idOutput.value = "아이디가 중복됩니다.";

				} else {
					alert("아이디를 생성할 수 있습니다.");
					idOutput.value = "";
				}
				
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var birth = app.lookup("dti_birth");
				birth.maxDate = new Date();
			};
			// End - User Script
			
			// Header
			var dataMap_1 = new cpr.data.DataMap("dm_register");
			dataMap_1.parseData({
				"columns" : [
					{"name": "id"},
					{"name": "name"},
					{"name": "password"},
					{"name": "address"},
					{"name": "birth"},
					{"name": "email"},
					{"name": "phone"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("subRegister");
			submission_1.async = false;
			submission_1.action = "register";
			submission_1.addRequestData(dataMap_1);
			if(typeof onSubRegisterSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onSubRegisterSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("checkDuplicateId");
			submission_2.async = false;
			submission_2.method = "get";
			submission_2.action = "checkDuplicateId";
			submission_2.addRequestData(dataMap_1);
			if(typeof onCheckDuplicateIdSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onCheckDuplicateIdSubmitSuccess);
			}
			app.register(submission_2);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"border-bottom-style" : "none",
				"border-top-style" : "none",
				"background-color" : "#FAFAFA",
				"border-right-style" : "none",
				"width" : "100%",
				"height" : "100%",
				"border-left-style" : "none"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"border-right-style" : "solid",
				"background-color" : "rgba(255, 255, 255, 0.6)",
				"border-bottom-color" : "#f0f0f0",
				"border-left-style" : "solid",
				"border-left-color" : "#f0f0f0",
				"border-top-color" : "#f0f0f0",
				"border-bottom-style" : "solid",
				"border-right-color" : "#f0f0f0",
				"border-top-style" : "solid"
			});
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_2);
			(function(container){
				var output_1 = new cpr.controls.Output();
				output_1.value = "ID";
				output_1.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "26px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "26px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "26px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb_id");
				inputBox_1.placeholder = "ID";
				inputBox_1.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("dm_register"), "id");
				if(typeof onIpb_idBlur == "function") {
					inputBox_1.addEventListener("blur", onIpb_idBlur);
				}
				container.addChild(inputBox_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "26px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "26px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "26px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb_password");
				inputBox_2.secret = true;
				inputBox_2.placeholder = "PASSWORD";
				inputBox_2.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				inputBox_2.bind("value").toDataMap(app.lookup("dm_register"), "password");
				if(typeof onIpb_passwordBlur == "function") {
					inputBox_2.addEventListener("blur", onIpb_passwordBlur);
				}
				if(typeof onIpb_passwordInput == "function") {
					inputBox_2.addEventListener("input", onIpb_passwordInput);
				}
				container.addChild(inputBox_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "87px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "87px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "87px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb_name");
				inputBox_3.placeholder = "이름";
				inputBox_3.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				inputBox_3.bind("value").toDataMap(app.lookup("dm_register"), "name");
				if(typeof onIpb_nameBlur == "function") {
					inputBox_3.addEventListener("blur", onIpb_nameBlur);
				}
				container.addChild(inputBox_3, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "145px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "145px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "145px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var inputBox_4 = new cpr.controls.InputBox("ipb_address");
				inputBox_4.placeholder = "주소";
				inputBox_4.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				inputBox_4.bind("value").toDataMap(app.lookup("dm_register"), "address");
				if(typeof onIpb_addressBlur == "function") {
					inputBox_4.addEventListener("blur", onIpb_addressBlur);
				}
				container.addChild(inputBox_4, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "260px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "260px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "260px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var inputBox_5 = new cpr.controls.InputBox("ipb_email");
				inputBox_5.placeholder = "email@fourguys.com";
				inputBox_5.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				inputBox_5.bind("value").toDataMap(app.lookup("dm_register"), "email");
				if(typeof onIpb_emailBlur == "function") {
					inputBox_5.addEventListener("blur", onIpb_emailBlur);
				}
				container.addChild(inputBox_5, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "319px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "319px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "319px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("mse_phone");
				maskEditor_1.mask = "(000)0000-0000";
				maskEditor_1.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				maskEditor_1.bind("value").toDataMap(app.lookup("dm_register"), "phone");
				if(typeof onMse_phoneBlur == "function") {
					maskEditor_1.addEventListener("blur", onMse_phoneBlur);
				}
				container.addChild(maskEditor_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "377px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "377px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "377px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var button_1 = new cpr.controls.Button("register");
				button_1.value = "회원등록";
				button_1.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"font-weight" : "normal",
					"border-left-style" : "none",
					"font-size" : "25px",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				if(typeof onRegisterClick == "function") {
					button_1.addEventListener("click", onRegisterClick);
				}
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "446px",
							"left": "255px",
							"width": "200px",
							"height": "50px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "446px",
							"left": "125px",
							"width": "98px",
							"height": "50px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "446px",
							"left": "87px",
							"width": "68px",
							"height": "50px"
						}
					]
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "PASSWORD";
				output_2.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "87px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "87px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "87px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "이름";
				output_3.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_3, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "145px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "145px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "145px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "주소";
				output_4.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_4, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "260px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "260px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "260px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var dateInput_1 = new cpr.controls.DateInput("dti_birth");
				dateInput_1.placeholder = "생년월일";
				dateInput_1.style.css({
					"background-color" : "#f7f8f9",
					"border-right-style" : "none",
					"border-radius" : "5px",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				dateInput_1.bind("value").toDataMap(app.lookup("dm_register"), "birth");
				if(typeof onDti_birthBlur == "function") {
					dateInput_1.addEventListener("blur", onDti_birthBlur);
				}
				container.addChild(dateInput_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "203px",
							"left": "276px",
							"width": "200px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "203px",
							"left": "135px",
							"width": "98px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "203px",
							"left": "94px",
							"width": "68px",
							"height": "30px"
						}
					]
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "생년월일";
				output_5.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_5, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "203px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "203px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "203px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "이메일";
				output_6.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_6, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "318px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "318px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "318px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "휴대폰번호";
				output_7.style.css({
					"border-right-style" : "none",
					"border-bottom-color" : "#ffffff",
					"color" : "#AAAAAA",
					"border-left-style" : "none",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-top-style" : "none",
					"text-align" : "center"
				});
				container.addChild(output_7, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "377px",
							"left": "171px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "377px",
							"left": "83px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "377px",
							"left": "58px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_8 = new cpr.controls.Output("passwordOutput");
				output_8.value = "";
				output_8.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_8, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "116px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "116px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "116px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "중복확인";
				button_2.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoM00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "26px",
							"left": "486px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "26px",
							"left": "237px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "26px",
							"left": "166px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
				var output_9 = new cpr.controls.Output("idOutput");
				output_9.value = "";
				output_9.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_9, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "55px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "55px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "55px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_10 = new cpr.controls.Output("nameOutput");
				output_10.value = "";
				output_10.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_10, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "174px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "174px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "174px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_11 = new cpr.controls.Output("birthOutput");
				output_11.value = "";
				output_11.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_11, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "231px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "231px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "231px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_12 = new cpr.controls.Output("addressOutput");
				output_12.value = "";
				output_12.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_12, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "289px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "289px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "289px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_13 = new cpr.controls.Output("emailOutput");
				output_13.value = "";
				output_13.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_13, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "348px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "348px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "348px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_14 = new cpr.controls.Output("phoneOutput");
				output_14.value = "";
				output_14.style.css({
					"color" : "#F40909",
					"font-family" : "AppleSDGothicNeoEB00",
					"text-align" : "center"
				});
				container.addChild(output_14, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "406px",
							"left": "171px",
							"width": "305px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "406px",
							"left": "83px",
							"width": "149px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "406px",
							"left": "58px",
							"width": "104px",
							"height": "30px"
						}
					]
				});
				var output_15 = new cpr.controls.Output("password_check");
				output_15.style.css({
					"font-family" : "AppleSDGothicNeoM00",
					"text-align" : "center"
				});
				container.addChild(output_15, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "87px",
							"left": "486px",
							"width": "100px",
							"height": "30px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "87px",
							"left": "237px",
							"width": "49px",
							"height": "30px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "87px",
							"left": "166px",
							"width": "34px",
							"height": "30px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "73px",
						"bottom": "47px",
						"width": "706px",
						"left": "calc(50% - 353px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "73px",
						"bottom": "47px",
						"width": "345px",
						"left": "calc(50% - 172px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "73px",
						"bottom": "47px",
						"width": "241px",
						"left": "calc(50% - 120px)"
					}
				]
			});
			
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "5px",
						"left": "20px",
						"width": "194px",
						"height": "78px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "5px",
						"left": "10px",
						"width": "95px",
						"height": "78px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "5px",
						"left": "7px",
						"width": "66px",
						"height": "78px"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "회원가입";
	cpr.core.Platform.INSTANCE.register(app);
})();
