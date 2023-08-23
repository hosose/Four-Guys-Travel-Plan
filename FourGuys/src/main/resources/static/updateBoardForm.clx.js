/*
 * App URI: updateBoardForm
 * Source Location: updateBoardForm.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("updateBoardForm", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * planner-board-form.js
			 * Created at 2023. 8. 16. 오전 11:05:08.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				app.lookup("loginCheck").send();
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				app.lookup("plannerBoardNoDM").setValue("BOARD_NO", boardNo);
				app.lookup("boardDetailSM").send();
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onLoginCheckSubmitError(e) {
				var loginCheck = e.control;
				var message = loginCheck.getMetadata("message");
				alert(message);
				location.href = "loginForm";
			}

			/*
			 * 그리드에서 cell-click 이벤트 발생 시 호출.
			 * Grid의 Cell 클릭시 발생하는 이벤트.
			 */
			function onDayGrdCellClick(e) {
				var dayGrd = e.control;
				var planDate = dayGrd.getSelectedRow().getValue("planDate");
				app.lookup("createPlanDM").setValue("planDate", planDate);
				app.lookup("selectDate").send();
			}

			/*
			 * "수정" 버튼(selectBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onSelectBtnClick(e) {
				var selectBtn = e.control;
				app.lookup("updateBoardSM").send();
				location.href = "planner-board-list.clx";
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onCreatePlannerBoardSMSubmitSuccess(e) {
				var createPlannerBoardSM = e.control;
				var url = createPlannerBoardSM.getMetadata("url");
				location.href = url;
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardDetailSMSubmitSuccess(e) {
				var boardDetailSM = e.control;
				var plannerNo = app.lookup("boardDetail").getRow(0).getValue("plannerNo");
				app.lookup("plannerNoDM").setValue("plannerNo", plannerNo);
				app.lookup("dayBtnSM").send();
				setTimeout(() => getContent(), 700);
			}

			/*
			 * "Button" 버튼(PasteBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function getContent() {
				var ep1 = app.lookup("ep1");
				var boardContentValue = app.lookup("boardDetail").getRow(0).getValue("boardContent");
				if (boardContentValue == "" || boardContentValue == null) return false;
				ep1.callPageMethod("pasteHTML", boardContentValue);
			}

			function print(psEventType) {
				var vcLblVal = app.lookup("lblVal");
				if (vcLblVal.value == null) {
					vcLblVal.value = "";
				}
				var vsText = psEventType;
				vcLblVal.value = vsText;
			}

			/*
			 * 서브미션에서 before-submit 이벤트 발생 시 호출.
			 * 통신을 시작하기전에 발생합니다.
			 */
			function onUpdateBoardSMBeforeSubmit(e) {
				var updateBoardSM = e.control;
				var vcEditor = app.lookup("ep1");
				var html = vcEditor.callPageMethod("showHTML");
				print(html);
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("planDate");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "planDate",
						"dataType": "string"
					},
					{
						"name": "plannerNo",
						"dataType": "string"
					},
					{
						"name": "planNo",
						"dataType": "string"
					},
					{
						"name": "contentId",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("selectedPlan");
			dataSet_2.parseData({
				"columns" : [
					{
						"name": "planDate",
						"dataType": "string"
					},
					{
						"name": "plannerNo",
						"dataType": "string"
					},
					{
						"name": "planNo",
						"dataType": "string"
					},
					{
						"name": "contentId",
						"dataType": "string"
					},
					{"name": "title"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("plannerBoard");
			dataSet_3.parseData({
				"columns" : [
					{
						"name": "boardNo",
						"dataType": "number"
					},
					{
						"name": "PLANNER_NO",
						"dataType": "number"
					},
					{
						"name": "ID",
						"dataType": "string"
					},
					{
						"name": "BOARD_HITS",
						"dataType": "number"
					},
					{
						"name": "BOARD_CREATE_DATE",
						"dataType": "string"
					},
					{
						"name": "board_Content",
						"dataType": "string"
					},
					{
						"name": "boardTitle",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("boardDetail");
			dataSet_4.parseData({
				"columns" : [
					{
						"name": "id",
						"dataType": "string"
					},
					{
						"name": "plannerNo",
						"dataType": "number"
					},
					{"name": "boardContent"},
					{
						"name": "boardNo",
						"dataType": "number"
					},
					{"name": "boardTitle"},
					{"name": "boardCreateDate"},
					{
						"name": "boardHits",
						"dataType": "number"
					},
					{
						"name": "RNo",
						"dataType": "number"
					}
				]
			});
			app.register(dataSet_4);
			var dataMap_1 = new cpr.data.DataMap("boardDM");
			dataMap_1.parseData({
				"columns" : [
					{"name": "boardTitle"},
					{"name": "boardContent"},
					{
						"name": "boardNo",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("plannerNoDM");
			dataMap_2.parseData({
				"columns" : [{"name": "plannerNo"}]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("createPlanDM");
			dataMap_3.parseData({
				"columns" : [
					{"name": "contentid"},
					{"name": "planDate"}
				]
			});
			app.register(dataMap_3);
			
			var dataMap_4 = new cpr.data.DataMap("plannerBoardNoDM");
			dataMap_4.parseData({
				"columns" : [{
					"name": "BOARD_NO",
					"dataType": "number"
				}]
			});
			app.register(dataMap_4);
			
			var dataMap_5 = new cpr.data.DataMap("updateBoardDM");
			dataMap_5.parseData({
				"columns" : [
					{"name": "boardTitle"},
					{"name": "boardContent"},
					{
						"name": "boardNo",
						"dataType": "number"
					}
				]
			});
			app.register(dataMap_5);
			var submission_1 = new cpr.protocols.Submission("loginCheck");
			submission_1.method = "get";
			submission_1.action = "loginCheck";
			if(typeof onLoginCheckSubmitError == "function") {
				submission_1.addEventListener("submit-error", onLoginCheckSubmitError);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("dayBtnSM");
			submission_2.method = "get";
			submission_2.action = "getDay";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataSet_1, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("selectDate");
			submission_3.method = "get";
			submission_3.action = "selectPlansByDate";
			submission_3.addRequestData(dataMap_2);
			submission_3.addRequestData(dataMap_3);
			submission_3.addResponseData(dataSet_2, false);
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("createPlannerBoardSM");
			submission_4.action = "createPlannerBoard";
			submission_4.addRequestData(dataMap_1);
			submission_4.addRequestData(dataMap_2);
			if(typeof onCreatePlannerBoardSMSubmitSuccess == "function") {
				submission_4.addEventListener("submit-success", onCreatePlannerBoardSMSubmitSuccess);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("updateBoardSM");
			submission_5.method = "put";
			submission_5.action = "updateBoard";
			submission_5.addRequestData(dataSet_4);
			if(typeof onUpdateBoardSMBeforeSubmit == "function") {
				submission_5.addEventListener("before-submit", onUpdateBoardSMBeforeSubmit);
			}
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("boardDetailSM");
			submission_6.method = "get";
			submission_6.action = "boardDetail";
			submission_6.addRequestData(dataMap_4);
			submission_6.addResponseData(dataSet_4, false);
			if(typeof onBoardDetailSMSubmitSuccess == "function") {
				submission_6.addEventListener("submit-success", onBoardDetailSMSubmitSuccess);
			}
			app.register(submission_6);
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
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				"top": "10px",
				"left": "10px",
				"width": "196px",
				"height": "77px"
			});
			
			var userDefinedControl_2 = new udc.header_nav();
			container.addChild(userDefinedControl_2, {
				"top": "10px",
				"right": "20px",
				"width": "623px",
				"height": "77px"
			});
			
			var group_1 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "0px";
			formLayout_1.rightMargin = "0px";
			formLayout_1.bottomMargin = "0px";
			formLayout_1.leftMargin = "0px";
			formLayout_1.horizontalSpacing = "0px";
			formLayout_1.verticalSpacing = "0px";
			formLayout_1.setColumns(["120px", "1fr"]);
			formLayout_1.setRows(["75px", "200px", "1fr"]);
			group_1.setLayout(formLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("titleOutput");
				output_1.value = "제목";
				output_1.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"border-left-style" : "solid",
					"font-size" : "25px",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"bottomSpacing": 5
				});
				var output_2 = new cpr.controls.Output("contentOutput");
				output_2.value = "내용";
				output_2.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"border-left-style" : "solid",
					"font-size" : "25px",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 2,
					"topSpacing": 5
				});
				var grid_1 = new cpr.controls.Grid("placeGrd");
				grid_1.init({
					"dataSet": app.lookup("selectedPlan"),
					"columns": [{"width": "100px"}],
					"header": {
						"rows": [{"height": "45px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "title";
								cell.text = "관광지";
								cell.style.css({
									"background-color" : "#FFFFFF",
									"background-repeat" : "repeat",
									"color" : "#2DCEB9",
									"font-weight" : "bolder",
									"font-size" : "20px",
									"background-image" : "none"
								});
							}
						}]
					},
					"detail": {
						"rows": [{"height": "35px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "title";
							}
						}]
					}
				});
				grid_1.bind("readOnly").toDataColumn("title");
				grid_1.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"border-left-style" : "solid",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid"
				});
				container.addChild(grid_1, {
					"colIndex": 1,
					"rowIndex": 1,
					"leftSpacing": 2
				});
				var grid_2 = new cpr.controls.Grid("boardTitle");
				grid_2.init({
					"dataSet": app.lookup("boardDetail"),
					"columns": [{"width": "100px"}],
					"detail": {
						"rows": [{"height": "70px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "boardTitle";
								cell.style.css({
									"font-size" : "35px"
								});
								cell.control = (function(){
									var inputBox_1 = new cpr.controls.InputBox("ipb1");
									inputBox_1.bind("value").toDataColumn("boardTitle");
									return inputBox_1;
								})();
								cell.controlConstraint = {};
							}
						}]
					}
				});
				grid_2.style.css({
					"font-size" : "30px",
					"text-align" : "center"
				});
				container.addChild(grid_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
				var embeddedPage_1 = new cpr.controls.EmbeddedPage("ep1");
				embeddedPage_1.src = "thirdparty/smarteditor/SmartEditor2.html";
				if(typeof onEp1Load2 == "function") {
					embeddedPage_1.addEventListener("load", onEp1Load2);
				}
				container.addChild(embeddedPage_1, {
					"colIndex": 1,
					"rowIndex": 2
				});
				var grid_3 = new cpr.controls.Grid("dayGrd");
				grid_3.init({
					"dataSet": app.lookup("planDate"),
					"columns": [{"width": "100px"}],
					"header": {
						"rows": [{"height": "45px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "planDate";
								cell.text = "DAY";
								cell.style.css({
									"background-color" : "#ffffff",
									"background-repeat" : "repeat",
									"color" : "#2DCEB9",
									"font-weight" : "bolder",
									"font-size" : "20px",
									"background-image" : "none"
								});
							}
						}]
					},
					"detail": {
						"rows": [{"height": "24px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "planDate";
							}
						}]
					}
				});
				grid_3.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"font-weight" : "bolder",
					"border-left-style" : "solid",
					"border-bottom-style" : "solid",
					"border-top-style" : "solid"
				});
				if(typeof onDayGrdCellClick == "function") {
					grid_3.addEventListener("cell-click", onDayGrdCellClick);
				}
				container.addChild(grid_3, {
					"colIndex": 0,
					"rowIndex": 1
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "158px",
				"bottom": "100px",
				"width": "1000px",
				"left": "calc(50% - 500px)"
			});
			
			var button_1 = new cpr.controls.Button("selectBtn");
			button_1.value = "수정";
			button_1.style.css({
				"background-color" : "#98dde3",
				"border-right-style" : "none",
				"background-repeat" : "no-repeat",
				"color" : "#FFFFFF",
				"border-left-style" : "none",
				"font-size" : "25px",
				"border-bottom-style" : "none",
				"background-image" : "none",
				"font-style" : "normal",
				"border-top-style" : "none"
			});
			if(typeof onSelectBtnClick == "function") {
				button_1.addEventListener("click", onSelectBtnClick);
			}
			container.addChild(button_1, {
				"bottom": "30px",
				"width": "200px",
				"height": "60px",
				"left": "calc(50% - 100px)"
			});
			
			var button_2 = new cpr.controls.Button("PasteBtn");
			button_2.visible = false;
			button_2.value = "Button";
			if(typeof onPasteBtnClick == "function") {
				button_2.addEventListener("click", onPasteBtnClick);
			}
			container.addChild(button_2, {
				"top": "66px",
				"left": "237px",
				"width": "10px",
				"height": "10px"
			});
			
			var output_3 = new cpr.controls.Output("lblVal");
			output_3.visible = false;
			output_3.bind("value").toDataSet(app.lookup("boardDetail"), "boardContent", 0);
			container.addChild(output_3, {
				"top": "86px",
				"left": "257px",
				"width": "10px",
				"height": "10px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "updateBoardForm";
	cpr.core.Platform.INSTANCE.register(app);
})();
