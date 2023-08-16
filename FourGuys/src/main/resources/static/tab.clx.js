/*
 * App URI: tab
 * Source Location: tab.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("tab", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * tab.js
			 * Created at 2023. 8. 11. 오후 4:44:36.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				setSelectedTabItem();
			}
			/**
			 * appID를 통해 MDI 폴더의 TabItem을 선택하여 보여줍니다.
			 * @param {String} vsAppId
			 */
			function setSelectedTabItem() {
				/* appID를 통해 tabItem을 찾습니다. */
				var vcSampleMDIFolder = app.lookup("mdi1");
				var vcTabItem = vcSampleMDIFolder.findItemWithAppID("mypage2");
				
				/* 찾은 tabItem으로 선택하여 보여줍니다. */
				vcSampleMDIFolder.setSelectedTabItem(vcTabItem);
			}
			// End - User Script
			
			// Header
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.css({
				"width" : "100%",
				"height" : "100%"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var mDIFolder_1 = new cpr.controls.MDIFolder("mdi1");
			
			var tabItem_1 = (function(tabFolder){
				var tabItem_1 = new cpr.controls.TabItem();
				tabItem_1.text = "mypage";
				var embeddedApp_1 = new cpr.controls.EmbeddedApp("ea1");
				cpr.core.App.load("mypage", function(app) {
					if(app){
						embeddedApp_1.app = app;
					}
				});
				tabItem_1.content = embeddedApp_1;
				return tabItem_1;
			})(mDIFolder_1);
			mDIFolder_1.addTabItem(tabItem_1);
			
			var tabItem_2 = (function(tabFolder){
				var tabItem_2 = new cpr.controls.TabItem();
				tabItem_2.text = "mypage2";
				var embeddedApp_2 = new cpr.controls.EmbeddedApp("ea2");
				cpr.core.App.load("mypage2", function(app) {
					if(app){
						embeddedApp_2.app = app;
					}
				});
				tabItem_2.content = embeddedApp_2;
				return tabItem_2;
			})(mDIFolder_1);
			mDIFolder_1.addTabItem(tabItem_2);
			mDIFolder_1.setSelectedTabItem(tabItem_1);
			container.addChild(mDIFolder_1, {
				"top": "20px",
				"right": "20px",
				"bottom": "20px",
				"left": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "tab";
	cpr.core.Platform.INSTANCE.register(app);
})();
