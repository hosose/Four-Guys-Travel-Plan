/*
 * App URI: dest-popup
 * Source Location: dest-popup.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("dest-popup", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * 3.Dialog_Popup.js
			 * Created at 2021. 3. 29. 오후 3:05:35.
			 *
			 * @author csj
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad2(e) {
				var vcDialog = app.getHost();
				if (vcDialog) {
					/*다이얼로그의 initValue 가져오기*/
					var voInitValue = app.getHostProperty("initValue");
					/*해당 값이 Null인지 여부를 체크하여 반환한다. */
					if (voInitValue) {
						/*initValue 내의 msg 값을 아웃풋에 표시*/
						app.lookup("intro1").value = voInitValue["msg"];
					}
				}
			}
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["cl-form-group"]);
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
			var button_1 = new cpr.controls.Button();
			button_1.value = "일정 만들기";
			button_1.style.css({
				"background-color" : "#306DC6",
				"border-right-style" : "none",
				"background-repeat" : "no-repeat",
				"color" : "#FFFFFF",
				"border-left-style" : "none",
				"font-size" : "18px",
				"border-bottom-style" : "none",
				"background-image" : "none",
				"font-style" : "normal",
				"border-top-style" : "none"
			});
			container.addChild(button_1, {
				"bottom": "50px",
				"left": "50px",
				"width": "155px",
				"height": "25px"
			});
			
			var image_1 = new cpr.controls.Image();
			image_1.src = "images/harubang2.jpg";
			container.addChild(image_1, {
				"top": "45px",
				"right": "20px",
				"width": "220px",
				"height": "220px"
			});
			
			var output_1 = new cpr.controls.Output("intro1");
			output_1.value = "";
			container.addChild(output_1, {
				"top": "5px",
				"left": "20px",
				"width": "300px",
				"height": "300px"
			});
			if(typeof onBodyLoad2 == "function"){
				app.addEventListener("load", onBodyLoad2);
			}
		}
	});
	app.title = "대한민국 제주";
	cpr.core.Platform.INSTANCE.register(app);
})();
