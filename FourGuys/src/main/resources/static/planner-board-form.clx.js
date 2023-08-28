/*
 * App URI: planner-board-form
 * Source Location: planner-board-form.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("planner-board-form", { 
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
				app.openDialog("select_planner", {
					width: 600,
					height: 450
				}, function(dialog) {
					dialog.ready(function(dialogApp) {});
				}).then(function(returnValue) {
					var plannerNoDM = app.lookup("plannerNoDM");
					plannerNoDM.setValue("plannerNo", returnValue);
					app.lookup("dayBtnSM").send()
				});
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
				app.lookup("planDM").setValue("planDate", planDate);
				app.lookup("selectDate").send();
			}

			/*
			 * "등록" 버튼(selectBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onSelectBtnClick(e) {
				var selectBtn = e.control;
				app.lookup("createPlannerBoardSM").send();
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
			 * 서브미션에서 before-submit 이벤트 발생 시 호출.
			 * 통신을 시작하기전에 발생합니다.
			 */
			function onCreatePlannerBoardSMBeforeSubmit(e){
				var createPlannerBoardSM = e.control;
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
			var dataMap_1 = new cpr.data.DataMap("boardDM");
			dataMap_1.parseData({
				"columns" : [
					{"name": "title"},
					{"name": "content"}
				]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("plannerNoDM");
			dataMap_2.parseData({
				"columns" : [{"name": "plannerNo"}]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("planDM");
			dataMap_3.parseData({
				"columns" : [
					{"name": "contentid"},
					{"name": "planDate"}
				]
			});
			app.register(dataMap_3);
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
			if(typeof onCreatePlannerBoardSMBeforeSubmit == "function") {
				submission_4.addEventListener("before-submit", onCreatePlannerBoardSMBeforeSubmit);
			}
			app.register(submission_4);
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
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			container.setLayout(responsiveXYLayout_1);
			
			// UI Configuration
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "10px",
						"left": "10px",
						"width": "196px",
						"height": "77px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "10px",
						"left": "5px",
						"width": "96px",
						"height": "77px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "10px",
						"left": "3px",
						"width": "67px",
						"height": "77px"
					}
				]
			});
			
			var userDefinedControl_2 = new udc.header_nav();
			container.addChild(userDefinedControl_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "10px",
						"right": "20px",
						"width": "623px",
						"height": "77px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "10px",
						"right": "10px",
						"width": "304px",
						"height": "77px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "10px",
						"right": "7px",
						"width": "213px",
						"height": "77px"
					}
				]
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
					"font-family" : "AppleSDGothicNeoB00",
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
					"font-family" : "AppleSDGothicNeoB00",
					"border-top-style" : "solid",
					"text-align" : "center"
				});
				container.addChild(output_2, {
					"colIndex": 0,
					"rowIndex": 2,
					"topSpacing": 5
				});
				var inputBox_1 = new cpr.controls.InputBox("titleIpb");
				inputBox_1.placeholder = "제목을 입력해주세요.";
				inputBox_1.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"padding-top" : "5px",
					"border-left-style" : "solid",
					"padding-left" : "5px",
					"font-size" : "25px",
					"padding-bottom" : "5px",
					"border-bottom-style" : "solid",
					"font-family" : "AppleSDGothicNeoB00",
					"border-top-style" : "solid",
					"padding-right" : "5px"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("boardDM"), "title");
				container.addChild(inputBox_1, {
					"colIndex": 1,
					"rowIndex": 0,
					"colSpan": 1,
					"rowSpan": 1,
					"bottomSpacing": 5,
					"leftSpacing": 3
				});
				var grid_1 = new cpr.controls.Grid("dayGrd");
				grid_1.init({
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
									"background-color" : "#FFFFFF",
									"color" : "#2DCEB9",
									"font-size" : "20px"
								});
							}
						}]
					},
					"detail": {
						"rows": [{"height": "35px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnName = "planDate";
								cell.style.css({
									"font-weight" : "normal"
								});
							}
						}]
					}
				});
				grid_1.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"font-weight" : "bolder",
					"border-left-style" : "solid",
					"border-bottom-style" : "solid",
					"font-family" : "AppleSDGothicNeoB00",
					"border-top-style" : "solid"
				});
				if(typeof onDayGrdCellClick == "function") {
					grid_1.addEventListener("cell-click", onDayGrdCellClick);
				}
				container.addChild(grid_1, {
					"colIndex": 0,
					"rowIndex": 1,
					"colSpan": 1,
					"rowSpan": 1,
					"rightSpacing": 2
				});
				var grid_2 = new cpr.controls.Grid("placeGrd");
				grid_2.init({
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
				grid_2.style.css({
					"border-right-style" : "solid",
					"border-radius" : "5px",
					"border-left-style" : "solid",
					"border-bottom-style" : "solid",
					"font-family" : "AppleSDGothicNeoB00",
					"border-top-style" : "solid"
				});
				container.addChild(grid_2, {
					"colIndex": 1,
					"rowIndex": 1,
					"leftSpacing": 2
				});
				var embeddedPage_1 = new cpr.controls.EmbeddedPage("ep1");
				embeddedPage_1.src = "thirdparty/smarteditor/SmartEditor2.html";
				container.addChild(embeddedPage_1, {
					"colIndex": 1,
					"rowIndex": 2,
					"colSpan": 1,
					"rowSpan": 1
				});
			})(group_1);
			container.addChild(group_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "158px",
						"bottom": "100px",
						"width": "1000px",
						"left": "calc(50% - 500px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "158px",
						"bottom": "100px",
						"width": "488px",
						"left": "calc(50% - 244px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "158px",
						"bottom": "100px",
						"width": "342px",
						"left": "calc(50% - 171px)"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button("selectBtn");
			button_1.value = "등록";
			button_1.style.css({
				"border-right-style" : "none",
				"color" : "#FFFFFF",
				"font-size" : "25px",
				"font-style" : "normal",
				"border-top-style" : "none",
				"background-color" : "#98dde3",
				"border-radius" : "5px",
				"background-repeat" : "no-repeat",
				"text-shadow" : "none",
				"border-left-style" : "none",
				"border-bottom-style" : "none",
				"font-family" : "AppleSDGothicNeoB00",
				"background-image" : "none"
			});
			if(typeof onSelectBtnClick == "function") {
				button_1.addEventListener("click", onSelectBtnClick);
			}
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"bottom": "30px",
						"width": "200px",
						"height": "60px",
						"left": "calc(50% - 100px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"bottom": "30px",
						"width": "98px",
						"height": "60px",
						"left": "calc(50% - 49px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"bottom": "30px",
						"width": "68px",
						"height": "60px",
						"left": "calc(50% - 34px)"
					}
				]
			});
			
			var output_3 = new cpr.controls.Output("lblVal");
			output_3.visible = false;
			output_3.bind("value").toDataMap(app.lookup("boardDM"), "content");
			container.addChild(output_3, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "120px",
						"left": "12px",
						"width": "896px",
						"height": "28px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "120px",
						"left": "6px",
						"width": "438px",
						"height": "28px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "120px",
						"left": "4px",
						"width": "306px",
						"height": "28px"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "플랜 게시판 작성페이지";
	cpr.core.Platform.INSTANCE.register(app);
})();
