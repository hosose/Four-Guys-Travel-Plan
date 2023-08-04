/// start - udc.header
/*
 * UDC Qualified Name: udc.header
 * App URI: udc/header
 * Source Location: udc/header.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function(){
	// App Declaration
		var internalApp = new cpr.core.App("udc/header", { 
			onPrepare: function(loader) {
			},
			onCreate: function(/* cpr.core.AppInstance */ app, exports) {
				var linker = {};
				// Start - User Script
				/************************************************
				 * header.js
				 * Created at 2023. 8. 3. 오후 3:47:55.
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
					"border-top-style" : "none",
					"border-top-color" : "#306dc6",
					"border-right-style" : "none",
					"top" : "0px",
					"left" : "0px",
					"border-bottom-style" : "none",
					"border-right-color" : "#306dc6",
					"border-left-color" : "#306dc6",
					"border-bottom-color" : "#306dc6",
					"width" : "100%",
					"height" : "100%",
					"border-left-style" : "none",
					"background-color" : "transparent"
				});
				
				// Layout
				var xYLayout_1 = new cpr.controls.layouts.XYLayout();
				container.setLayout(xYLayout_1);
				
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
				container.addChild(button_1, {
					"top": "10px",
					"left": "10px",
					"width": "153px",
					"height": "51px"
				});
				
				var button_2 = new cpr.controls.Button("login");
				button_2.value = "Login";
				button_2.style.css({
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
				container.addChild(button_2, {
					"top": "13px",
					"right": "365px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_3 = new cpr.controls.Button();
				button_3.value = "플래너 게시판";
				button_3.style.css({
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
				container.addChild(button_3, {
					"top": "13px",
					"right": "224px",
					"width": "131px",
					"height": "45px"
				});
				
				var button_4 = new cpr.controls.Button();
				button_4.value = "플랜 생성";
				button_4.style.css({
					"border-right-style" : "none",
					"color" : "#FFFFFF",
					"border-bottom-color" : "#ffffff",
					"border-left-color" : "#ffffff",
					"font-size" : "18px",
					"border-right-color" : "#ffffff",
					"font-style" : "normal",
					"border-top-style" : "none",
					"background-color" : "#306DC6",
					"background-repeat" : "no-repeat",
					"border-left-style" : "none",
					"border-top-color" : "#ffffff",
					"border-bottom-style" : "none",
					"background-image" : "none"
				});
				container.addChild(button_4, {
					"top": "13px",
					"right": "83px",
					"width": "131px",
					"height": "45px"
				});
			}
		});
	internalApp.title = "header";
	
	// Type declaration for header
	cpr.utils.Util.ensurePackage("udc").header = function(id){
		cpr.controls.UDCBase.call(this, "udc.header", internalApp, id);
	};
	
	udc.header.prototype = Object.create(cpr.controls.UDCBase.prototype);
	Object.defineProperty(udc.header.prototype, "type", {
		get : function(){
			return "udc.header";
		},
		
		configurable: true
	});
	
	// App Properties
	
	// Register type into the Platform and package
	cpr.core.Platform.INSTANCE.register(internalApp);
})();
/// end - udc.header
