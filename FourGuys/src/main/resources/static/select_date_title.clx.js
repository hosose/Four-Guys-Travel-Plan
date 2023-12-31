/*
 * App URI: select_date_title
 * Source Location: select_date_title.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("select_date_title", { 
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
			 * "플래너 만들기" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onCreateBtnClick(e) {
				var createBtn = e.control;
				var submission = app.lookup("createPlanner");
				var startDate = app.lookup("dti1").dateValue;
				var endDate = app.lookup("dti2").dateValue;
				if (startDate==null||endDate==null){
					alert("날짜를 선택해주세요");
					return false;
					
				}
					submission.send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onCreatePlannerSubmitSuccess(e) {
				var createPlanner = e.control;
				var responseData = createPlanner.getMetadata("plannerVO");
				app.close(responseData.plannerNo);
			}

			/*
			 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
			 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onDti1ValueChange(e) {
				var dti1 = e.control;
				var startDateInput = app.lookup("dti1");
				var startDate = app.lookup("dti1").dateValue;
				var endDate = app.lookup("dti2").dateValue;
				if (endDate == null) {} else if (endDate < startDate) {
					alert("종료일보다 시작일이 늦습니다.");
					startDateInput.value = null;
				}
			}

			/*
			 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
			 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
			 */
			function onDti2ValueChange(e) {
				var dti2 = e.control;
				var endDateInput = app.lookup("dti2");
				var startDate = app.lookup("dti1").dateValue;
				var endDate = app.lookup("dti2").dateValue;
				if (endDate == null) {} else if (endDate < startDate) {
					alert("시작일보다 종료일이 빠릅니다.");
					endDateInput.value = null;
				}
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var startDate = app.lookup("dti1");
				var endDate = app.lookup("dti2");
				startDate.minDate = new Date();
				endDate.minDate = new Date();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("plannerVO");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "PLANNER_NO",
						"dataType": "string"
					},
					{
						"name": "ID",
						"dataType": "string"
					},
					{
						"name": "PLANNER_TITLE",
						"dataType": "string"
					},
					{
						"name": "PLANNER_START_DATE",
						"dataType": "string"
					},
					{
						"name": "PLANNER_LAST_DAY",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_1);
			var dataMap_1 = new cpr.data.DataMap("plannerDM");
			dataMap_1.parseData({
				"columns" : [
					{"name": "plannerTitle"},
					{"name": "plannerStartDate"},
					{"name": "plannerLastDate"}
				]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("createPlanner");
			submission_1.action = "createPlanner";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onCreatePlannerSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onCreatePlannerSubmitSuccess);
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
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button("createBtn");
			button_1.value = "플래너 만들기";
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
			if(typeof onCreateBtnClick == "function") {
				button_1.addEventListener("click", onCreateBtnClick);
			}
			container.addChild(button_1, {
				"bottom": "50px",
				"left": "200px",
				"width": "180px",
				"height": "40px"
			});
			
			var output_1 = new cpr.controls.Output("titleoutput");
			output_1.value = "여행 제목";
			output_1.style.css({
				"font-family" : "AppleSDGothicNeoB00",
				"text-align" : "center"
			});
			container.addChild(output_1, {
				"top": "50px",
				"left": "50px",
				"width": "100px",
				"height": "40px"
			});
			
			var output_2 = new cpr.controls.Output("dateoutput");
			output_2.value = "여행 기간";
			output_2.style.css({
				"font-family" : "AppleSDGothicNeoB00",
				"text-align" : "center"
			});
			container.addChild(output_2, {
				"top": "150px",
				"left": "50px",
				"width": "100px",
				"height": "40px"
			});
			
			var inputBox_1 = new cpr.controls.InputBox("titleInput");
			inputBox_1.placeholder = "제목을 입력해주세요.";
			inputBox_1.style.css({
				"font-family" : "AppleSDGothicNeoB00"
			});
			inputBox_1.bind("value").toDataMap(app.lookup("plannerDM"), "plannerTitle");
			container.addChild(inputBox_1, {
				"top": "50px",
				"left": "200px",
				"width": "267px",
				"height": "40px"
			});
			
			var dateInput_1 = new cpr.controls.DateInput("dti1");
			dateInput_1.style.css({
				"font-family" : "AppleSDGothicNeoB00"
			});
			dateInput_1.bind("value").toDataMap(app.lookup("plannerDM"), "plannerStartDate");
			if(typeof onDti1ValueChange == "function") {
				dateInput_1.addEventListener("value-change", onDti1ValueChange);
			}
			container.addChild(dateInput_1, {
				"top": "150px",
				"left": "200px",
				"width": "110px",
				"height": "40px"
			});
			
			var dateInput_2 = new cpr.controls.DateInput("dti2");
			dateInput_2.style.css({
				"font-family" : "AppleSDGothicNeoB00"
			});
			dateInput_2.bind("value").toDataMap(app.lookup("plannerDM"), "plannerLastDate");
			if(typeof onDti2ValueChange == "function") {
				dateInput_2.addEventListener("value-change", onDti2ValueChange);
			}
			container.addChild(dateInput_2, {
				"top": "150px",
				"left": "357px",
				"width": "110px",
				"height": "40px"
			});
			
			var output_3 = new cpr.controls.Output();
			output_3.value = "~";
			output_3.style.css({
				"font-size" : "30px",
				"font-family" : "AppleSDGothicNeoB00"
			});
			container.addChild(output_3, {
				"top": "150px",
				"left": "320px",
				"width": "27px",
				"height": "40px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "플래너 만들기";
	cpr.core.Platform.INSTANCE.register(app);
})();
