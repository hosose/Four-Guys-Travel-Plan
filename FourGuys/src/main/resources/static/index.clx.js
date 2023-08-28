/*
 * App URI: index
 * Source Location: index.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("index", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * index.js
			 * Created at 2023. 8. 3. 오전 9:48:58.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("ds1");
			dataSet_1.parseData({
				"columns" : [
					{"name": "column1"},
					{"name": "column2"}
				]
			});
			app.register(dataSet_1);
			var submission_1 = new cpr.protocols.Submission("sms1");
			submission_1.async = false;
			submission_1.action = "/hello";
			submission_1.addParameter("param0", null);
			submission_1.addRequestData(dataSet_1);
			submission_1.addResponseData(dataSet_1, false);
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
				"background-color" : "#FFFFFF",
				"width" : "100%",
				"height" : "100%",
				"border-left-style" : "none"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var image_1 = new cpr.controls.Image("jejuImg1");
			image_1.src = "images/harubang.jpg";
			image_1.style.css({
				"opacity" : "70%"
			});
			container.addChild(image_1, {
				"top": "0px",
				"right": "0px",
				"bottom": "0px",
				"left": "0px"
			});
			
			var output_1 = new cpr.controls.Output("text1");
			output_1.value = "여행 계획을\r\n";
			output_1.style.setClasses(["output1"]);
			output_1.style.css({
				"color" : "#FFFFFF",
				"font-size" : "50px",
				"font-family" : "AppleSDGothicNeoB00",
				"font-style" : "normal",
				"text-align" : "left"
			});
			container.addChild(output_1, {
				"top": "320px",
				"left": "172px",
				"width": "819px",
				"height": "59px"
			});
			
			var output_2 = new cpr.controls.Output("text2");
			output_2.value = "TRAVEL and PLAN 스케줄링";
			output_2.style.setClasses(["output1"]);
			output_2.style.css({
				"background-color" : "#98dde3",
				"color" : "#FFFFFF",
				"font-size" : "50px",
				"font-family" : "AppleSDGothicNeoB00",
				"font-style" : "normal",
				"background-image" : "none",
				"text-align" : "right"
			});
			container.addChild(output_2, {
				"top": "389px",
				"left": "172px",
				"width": "608px",
				"height": "59px"
			});
			
			var output_3 = new cpr.controls.Output("text3");
			output_3.value = "을 통해";
			output_3.style.setClasses(["output1"]);
			output_3.style.css({
				"color" : "#FFFFFF",
				"font-size" : "50px",
				"font-family" : "AppleSDGothicNeoB00",
				"font-style" : "normal"
			});
			container.addChild(output_3, {
				"top": "389px",
				"left": "779px",
				"width": "650px",
				"height": "59px"
			});
			
			var output_4 = new cpr.controls.Output("text4");
			output_4.value = "작성해 보세요!";
			output_4.style.setClasses(["output1"]);
			output_4.style.css({
				"color" : "#FFFFFF",
				"font-size" : "50px",
				"font-family" : "AppleSDGothicNeoB00",
				"font-style" : "normal"
			});
			container.addChild(output_4, {
				"top": "458px",
				"left": "172px",
				"width": "650px",
				"height": "59px"
			});
			
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				"top": "20px",
				"left": "50px",
				"width": "196px",
				"height": "77px"
			});
			
			var userDefinedControl_2 = new udc.header_nav();
			container.addChild(userDefinedControl_2, {
				"top": "20px",
				"right": "20px",
				"width": "623px",
				"height": "77px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "index";
	cpr.core.Platform.INSTANCE.register(app);
})();
