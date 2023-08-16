/*
 * App URI: deleteMember
 * Source Location: deleteMember.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("deleteMember", { 
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

			/*
			 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function ondeleteBtnClick(e){
				var deleteBtn = e.control;
				var submission = app.lookup("deleteMember");
				submission.send();
				app.close();
				alert("회원 탈퇴가 완료되었습니다.");
				location.href="";
			}

			/*
			 * "취소" 버튼(cancelBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCancelBtnClick(e){
				var cancelBtn = e.control;
				app.close();
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
			var submission_1 = new cpr.protocols.Submission("deleteMember");
			submission_1.method = "delete";
			submission_1.action = "deleteMember";
			if(typeof onDeleteMemberSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onDeleteMemberSubmitSuccess);
			}
			if(typeof onDeleteMemberSubmitError == "function") {
				submission_1.addEventListener("submit-error", onDeleteMemberSubmitError);
			}
			app.register(submission_1);
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
<<<<<<< HEAD
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var output_1 = new cpr.controls.Output("intro1");
			output_1.value = "";
			output_1.style.css({
				"font-weight" : "bold",
				"vertical-align" : "middle",
				"font-size" : "30px",
				"font-family" : "AppleSDGothicNeoEB00",
				"text-align" : "center"
			});
			container.addChild(output_1, {
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
			
			var button_1 = new cpr.controls.Button("deleteBtn");
			button_1.value = "탈퇴";
			button_1.style.css({
				"background-color" : "#FF0000",
				"border-right-style" : "none",
				"background-repeat" : "no-repeat",
				"text-shadow" : "none",
				"color" : "#FFFFFF",
				"border-left-style" : "none",
				"font-size" : "18px",
				"border-bottom-style" : "none",
				"background-image" : "none",
				"font-style" : "normal",
				"border-top-style" : "none"
			});
			if(typeof ondeleteBtnClick == "function") {
				button_1.addEventListener("click", ondeleteBtnClick);
			}
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"bottom": "23px",
						"left": "20px",
						"width": "180px",
						"height": "25px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"bottom": "23px",
						"left": "10px",
						"width": "88px",
						"height": "25px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"bottom": "23px",
						"left": "7px",
						"width": "62px",
						"height": "25px"
					}
				]
			});
			
			var button_2 = new cpr.controls.Button("cancelBtn");
			button_2.value = "취소";
			button_2.style.css({
				"background-color" : "#306DC6",
				"border-right-style" : "none",
				"background-repeat" : "no-repeat",
				"text-shadow" : "none",
				"color" : "#FFFFFF",
				"border-left-style" : "none",
				"font-size" : "18px",
				"border-bottom-style" : "none",
				"background-image" : "none",
				"font-style" : "normal",
				"border-top-style" : "none"
			});
			if(typeof onCancelBtnClick == "function") {
				button_2.addEventListener("click", onCancelBtnClick);
			}
			container.addChild(button_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"bottom": "23px",
						"left": "210px",
						"width": "180px",
						"height": "25px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"bottom": "23px",
						"left": "103px",
						"width": "88px",
						"height": "25px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"bottom": "23px",
						"left": "72px",
						"width": "62px",
						"height": "25px"
					}
				]
=======
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button("deleteBtn");
			button_1.value = "탈퇴";
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
			if(typeof ondeleteBtnClick == "function") {
				button_1.addEventListener("click", ondeleteBtnClick);
			}
			container.addChild(button_1, {
				"bottom": "23px",
				"left": "20px",
				"width": "180px",
				"height": "25px"
			});
			
			var output_1 = new cpr.controls.Output("intro1");
			output_1.value = "";
			output_1.style.css({
				"font-weight" : "bold",
				"font-size" : "35px"
			});
			container.addChild(output_1, {
				"top": "5px",
				"left": "20px",
				"width": "370px",
				"height": "150px"
			});
			
			var button_2 = new cpr.controls.Button("cancelBtn");
			button_2.value = "취소";
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
			if(typeof onCancelBtnClick == "function") {
				button_2.addEventListener("click", onCancelBtnClick);
			}
			container.addChild(button_2, {
				"bottom": "23px",
				"left": "210px",
				"width": "180px",
				"height": "25px"
>>>>>>> refs/heads/feat-myplanList
			});
			if(typeof onBodyLoad2 == "function"){
				app.addEventListener("load", onBodyLoad2);
			}
		}
	});
	app.title = "회원탈퇴";
	cpr.core.Platform.INSTANCE.register(app);
})();