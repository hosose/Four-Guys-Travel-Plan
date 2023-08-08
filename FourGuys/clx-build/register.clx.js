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
			 * "회원등록" 버튼(btn2)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onBtn2Click(e){
				var btn2 = e.control;
				var submission = app.lookup("sms1");
				var dataSet = app.lookup("Member");
				submission.send();
				alert("회원가입이 완료되었습니다.");
				location.href="/";
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("Member");
			dataSet_1.parseData({
				"columns" : [
					{"name": "ID"},
					{"name": "PASSWORD"},
					{"name": "NAME"},
					{"name": "BIRTH"},
					{"name": "ADDRESS"},
					{"name": "EMAIL"},
					{"name": "PHONE"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.action = "/register";
			submission_1.addRequestData(dataSet_1);
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"border-bottom-style" : "none",
				"border-top-style" : "none",
				"border-right-style" : "none",
				"width" : "100%",
				"height" : "100%",
				"border-left-style" : "none"
			});
			
			// Layout
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image();
			image_1.src = "images/ocean.jpg";
			container.addChild(image_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "0px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "0px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "0px",
						"right": "0px",
						"bottom": "0px",
						"left": "0px"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container();
			group_1.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#f0f0f0",
				"border-left-style" : "solid",
				"border-left-color" : "#f0f0f0",
				"border-top-color" : "#f0f0f0",
				"border-bottom-style" : "solid",
				"border-right-color" : "#f0f0f0",
				"border-top-style" : "solid"
			});
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
			(function(container){
				var image_2 = new cpr.controls.Image();
				image_2.src = "images/Four_Guys.png";
				container.addChild(image_2, {
					"top": "20px",
					"width": "479px",
					"height": "77px",
					"left": "calc(50% - 239px)"
				});
				var output_1 = new cpr.controls.Output();
				output_1.value = "ID";
				output_1.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"top": "157px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				inputBox_1.bind("value").toDataSet(app.lookup("Member"), "ID", 0);
				container.addChild(inputBox_1, {
					"top": "157px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var inputBox_2 = new cpr.controls.InputBox("ipb2");
				inputBox_2.secret = true;
				inputBox_2.bind("value").toDataSet(app.lookup("Member"), "PASSWORD", 0);
				container.addChild(inputBox_2, {
					"top": "187px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var inputBox_3 = new cpr.controls.InputBox("ipb3");
				inputBox_3.bind("value").toDataSet(app.lookup("Member"), "NAME", 0);
				container.addChild(inputBox_3, {
					"top": "217px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var inputBox_4 = new cpr.controls.InputBox("ipb4");
				inputBox_4.bind("value").toDataSet(app.lookup("Member"), "ADDRESS", 0);
				container.addChild(inputBox_4, {
					"top": "277px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var inputBox_5 = new cpr.controls.InputBox("ipb6");
				inputBox_5.bind("value").toDataSet(app.lookup("Member"), "EMAIL", 0);
				container.addChild(inputBox_5, {
					"top": "307px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var maskEditor_1 = new cpr.controls.MaskEditor("mse1");
				maskEditor_1.mask = "XXX-XXXX-XXXX";
				maskEditor_1.bind("value").toDataSet(app.lookup("Member"), "PHONE", 0);
				container.addChild(maskEditor_1, {
					"top": "337px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var button_1 = new cpr.controls.Button("btn2");
				button_1.value = "회원등록";
				if(typeof onBtn2Click == "function") {
					button_1.addEventListener("click", onBtn2Click);
				}
				container.addChild(button_1, {
					"top": "392px",
					"left": "181px",
					"width": "200px",
					"height": "50px"
				});
				var output_2 = new cpr.controls.Output();
				output_2.value = "PASSWORD";
				output_2.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"top": "187px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var output_3 = new cpr.controls.Output();
				output_3.value = "이름";
				output_3.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_3, {
					"top": "217px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "주소";
				output_4.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_4, {
					"top": "277px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var dateInput_1 = new cpr.controls.DateInput("dti1");
				dateInput_1.bind("value").toDataSet(app.lookup("Member"), "BIRTH", 0);
				container.addChild(dateInput_1, {
					"top": "247px",
					"left": "182px",
					"width": "200px",
					"height": "25px"
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "생년월일";
				output_5.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_5, {
					"top": "247px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var output_6 = new cpr.controls.Output();
				output_6.value = "이메일";
				output_6.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_6, {
					"top": "307px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
				var output_7 = new cpr.controls.Output();
				output_7.value = "휴대폰번호";
				output_7.style.css({
					"border-right-style" : "solid",
					"border-bottom-color" : "#ffffff",
					"color" : "#FFFFFF",
					"border-left-style" : "solid",
					"border-left-color" : "#ffffff",
					"border-top-color" : "#ffffff",
					"border-right-color" : "#ffffff",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_7, {
					"top": "337px",
					"left": "77px",
					"width": "100px",
					"height": "25px"
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "82px",
						"bottom": "240px",
						"width": "524px",
						"left": "calc(50% - 262px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "82px",
						"bottom": "240px",
						"width": "256px",
						"left": "calc(50% - 128px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "82px",
						"bottom": "240px",
						"width": "179px",
						"left": "calc(50% - 89px)"
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
		}
	});
	app.title = "register";
	cpr.core.Platform.INSTANCE.register(app);
})();
