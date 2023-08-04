/*
 * App URI: myPageMyInfo
 * Source Location: myPageMyInfo.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("myPageMyInfo", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * myPageMyInfo.js
			 * Created at 2023. 8. 3. 오후 3:15:22.
			 *
			 * @author USER
			 ************************************************/;
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"background-color" : "#D23A3A",
				"border-radius" : "2px",
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var group_2 = new cpr.controls.Container();
				group_2.style.css({
					"background-color" : "#FFFFFF",
					"border-radius" : "1px"
				});
				var xYLayout_3 = new cpr.controls.layouts.XYLayout();
				group_2.setLayout(xYLayout_3);
				(function(container){
					var button_1 = new cpr.controls.Button();
					button_1.value = "나의 정보";
					container.addChild(button_1, {
						"top": "298px",
						"left": "43px",
						"width": "120px",
						"height": "34px"
					});
					var button_2 = new cpr.controls.Button();
					button_2.value = "나의 일정";
					container.addChild(button_2, {
						"top": "378px",
						"left": "43px",
						"width": "120px",
						"height": "34px"
					});
					var button_3 = new cpr.controls.Button();
					button_3.value = "나의 일정게시판";
					container.addChild(button_3, {
						"top": "459px",
						"left": "43px",
						"width": "120px",
						"height": "34px"
					});
				})(group_2);
				container.addChild(group_2, {
					"top": "0px",
					"bottom": "0px",
					"left": "0px",
					"width": "200px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "0px",
				"bottom": "0px",
				"left": "0px",
				"width": "200px"
			});
		}
	});
	app.title = "myPageMyInfo";
	cpr.core.Platform.INSTANCE.register(app);
})();
