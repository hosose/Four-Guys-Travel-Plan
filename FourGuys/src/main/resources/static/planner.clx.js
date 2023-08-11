/*
 * App URI: planner
 * Source Location: planner.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("planner", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * planner.js
			 * Created at 2023. 8. 3. 오후 2:50:01.
			 *
			 * @author iedl9
			 ************************************************/
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				app.lookup("searchbtn").click();
				app.openDialog("select_date_title", {
					width: 600,
					height: 450
				}, function(dialog) {
					dialog.ready(function(dialogApp) {});
				}).then(function(returnValue) {
					var plannerNoOutput = app.lookup("plannerNo");
					plannerNoOutput.value = JSON.stringify(returnValue);
					app.lookup("dayBtnSM").send()
					app.lookup("loginCheck").send();
				});
			}


			/*
			 * "검색" 버튼(searchbtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onSearchbtnClick(e) {
				var searchbtn = e.control;
				app.lookup("areaList").send();
			}

			/*
			 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
			 * 사용자가 키를 누를 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
			 */
			function onTitleSearchKeydown(e) {
				var titleSearch = e.control;
				if (e.keyCode == cpr.events.KeyCode.ENTER) {
					var Searchbtn = app.lookup("searchbtn");
					Searchbtn.click();
				}
			}


			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDayBtnSMSubmitSuccess(e){
				var dayBtnSM = e.control;
				var grid = app.lookup("grd3");
				grid.selectRows([0]);
				app.lookup("planDateOutput").value=1;
			}

			/*
			 * 그리드에서 cell-click 이벤트 발생 시 호출.
			 * Grid의 Cell 클릭시 발생하는 이벤트.
			 */
			function onGrd3CellClick(e){
				var grd3 = e.control;
				var grid = app.lookup("grd3");
				var planDate = grid.getSelectedRow().getValue("planDate");
				app.lookup("planDateOutput").value=planDate;
				app.lookup("selectDate").send();
			}

			/*
			 * 그리드에서 row-check 이벤트 발생 시 호출.
			 * Grid의 행 선택 컬럼(columnType=checkbox)이 체크 되었을 때 발생하는 이벤트.
			 */
			function onGrd2RowCheck(e){
				var grd2 = e.control;
				var grid = app.lookup("grd2");
				var contentId = grid.getSelectedRow().getValue("contentid");
				app.lookup("contentIdOutput").value=contentId;
				app.lookup("createPlan").send();
			}



			/*
			 * "저장" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				app.lookup("savePlanner").send();
				alert("저장되었습니다");
				location.href="/mypage.clx";
			}

			/*
			 * "취소" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
				app.lookup("cancelPlanner").send();
				alert("취소되었습니다");
				location.href="selectDestinationForm";
			}
				app.lookup("createPlan").send();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("jeju");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "contentid",
						"dataType": "string"
					},
					{
						"name": "mapx",
						"dataType": "string"
					},
					{
						"name": "mapy",
						"dataType": "string"
					},
					{
						"name": "title",
						"dataType": "string"
					},
					{
						"name": "tel",
						"dataType": "string"
					},
					{
						"name": "firstimage",
						"dataType": "string"
					},
					{
						"name": "addr2",
						"dataType": "string"
					},
					{
						"name": "addr1",
						"dataType": "string"
					},
					{
						"name": "cat1",
						"dataType": "string"
					},
					{
						"name": "cat2",
						"dataType": "string"
					},
					{
						"name": "cat3",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("planDate");
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
					}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("selectedPlan");
			dataSet_3.parseData({
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
			app.register(dataSet_3);
			var dataMap_1 = new cpr.data.DataMap("areaSearch");
			dataMap_1.parseData({
				"columns" : [
					{"name": "title"},
					{"name": "contentId"}
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
			var submission_1 = new cpr.protocols.Submission("savePlanner");
			submission_1.action = "savePlanner";
			submission_1.addRequestData(dataMap_2);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("areaList");
			submission_2.method = "get";
			submission_2.action = "/findAllArea";
			submission_2.addRequestData(dataMap_1);
			submission_2.addResponseData(dataSet_1, false);
			if(typeof onAreaListSubmitSuccess == "function") {
				submission_2.addEventListener("submit-success", onAreaListSubmitSuccess);
			}
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("loginCheck");
			submission_3.method = "get";
			submission_3.action = "loginCheck";
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("dayBtnSM");
			submission_4.method = "get";
			submission_4.action = "getDay";
			submission_4.addRequestData(dataMap_2);
			submission_4.addResponseData(dataSet_2, false);
			if(typeof onDayBtnSMSubmitSuccess == "function") {
				submission_4.addEventListener("submit-success", onDayBtnSMSubmitSuccess);
			}
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("createPlan");
			submission_5.action = "createPlan";
			submission_5.addRequestData(dataMap_2);
			submission_5.addRequestData(dataMap_3);
			submission_5.addResponseData(dataSet_3, false);
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("selectDate");
			submission_6.method = "get";
			submission_6.action = "selectPlansByDate";
			submission_6.addRequestData(dataMap_3);
			submission_6.addRequestData(dataMap_2);
			submission_6.addResponseData(dataSet_3, false);
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("cancelPlanner");
			submission_7.method = "post";
			submission_7.action = "cancelPlanner";
			submission_7.addRequestData(dataMap_2);
			app.register(submission_7);
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
			var group_1 = new cpr.controls.Container();
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var textArea_1 = new cpr.controls.TextArea("txa2");
				textArea_1.value = "플래너 제목 :";
				textArea_1.style.css({
					"text-align" : "center"
				});
				container.addChild(textArea_1, {
					"top": "0px",
					"bottom": "0px",
					"left": "0px",
					"width": "185px"
				});
				var inputBox_1 = new cpr.controls.InputBox("ipb1");
				container.addChild(inputBox_1, {
					"top": "0px",
					"right": "0px",
					"left": "184px",
					"height": "22px"
				});
				var output_1 = new cpr.controls.Output("plannerNo");
				output_1.visible = false;
				output_1.bind("value").toDataMap(app.lookup("plannerNoDM"), "plannerNo");
				container.addChild(output_1, {
					"top": "0px",
					"left": "0px",
					"width": "100px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "20px",
				"left": "20px",
				"width": "848px",
				"height": "22px"
			});
			
			var group_2 = new cpr.controls.Container();
			var formLayout_1 = new cpr.controls.layouts.FormLayout();
			formLayout_1.scrollable = false;
			formLayout_1.topMargin = "5px";
			formLayout_1.rightMargin = "5px";
			formLayout_1.bottomMargin = "5px";
			formLayout_1.leftMargin = "5px";
			formLayout_1.horizontalSpacing = "25px";
			formLayout_1.verticalSpacing = "25px";
			formLayout_1.setColumns(["50px", "50px"]);
			formLayout_1.setRows(["25px"]);
			group_2.setLayout(formLayout_1);
			(function(container){
				var button_1 = new cpr.controls.Button();
				button_1.value = "저장";
				if(typeof onButtonClick == "function") {
					button_1.addEventListener("click", onButtonClick);
				}
				container.addChild(button_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"verticalAlign": "top"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "취소";
				if(typeof onButtonClick2 == "function") {
					button_2.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_2, {
					"colIndex": 1,
					"rowIndex": 0
				});
			})(group_2);
			container.addChild(group_2, {
				"top": "14px",
				"left": "867px",
				"width": "150px",
				"height": "33px"
			});
			
			var grid_1 = new cpr.controls.Grid("grd2");
			grid_1.init({
				"dataSet": app.lookup("jeju"),
				"columns": [
					{"width": "25px"},
					{"width": "100px"},
					{
						"width": "100px",
						"visible": false
					}
				],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnType = "checkbox";
								cell.filterable = false;
								cell.sortable = false;
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "title";
								cell.text = "관광지 목록";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "contentid";
								cell.text = "contentId";
							}
						}
					]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.columnType = "checkbox";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "title";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "contentid";
							}
						}
					]
				}
			});
			if(typeof onGrd2Mousedown == "function") {
				grid_1.addEventListener("mousedown", onGrd2Mousedown);
			}
			if(typeof onGrd2Dblclick == "function") {
				grid_1.addEventListener("dblclick", onGrd2Dblclick);
			}
			if(typeof onGrd2RowCheck == "function") {
				grid_1.addEventListener("row-check", onGrd2RowCheck);
			}
			container.addChild(grid_1, {
				"top": "73px",
				"left": "360px",
				"width": "200px",
				"height": "680px"
			});
			
			var grid_2 = new cpr.controls.Grid("grd1");
			grid_2.init({
				"dataSet": app.lookup("selectedPlan"),
				"columns": [{"width": "100px"}],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.filterable = false;
							cell.sortable = false;
							cell.targetColumnName = "title";
							cell.text = "title";
						}
					}]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.columnName = "title";
						}
					}]
				}
			});
			container.addChild(grid_2, {
				"top": "73px",
				"left": "150px",
				"width": "200px",
				"height": "680px"
			});
			
			var group_3 = new cpr.controls.Container();
			var xYLayout_3 = new cpr.controls.layouts.XYLayout();
			group_3.setLayout(xYLayout_3);
			(function(container){
				var grid_3 = new cpr.controls.Grid("grd3");
				grid_3.init({
					"dataSet": app.lookup("planDate"),
					"columns": [{"width": "100px"}],
					"header": {
						"rows": [{"height": "24px"}],
						"cells": [{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "planDate";
								cell.text = "DAY";
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
				if(typeof onGrd3CellClick == "function") {
					grid_3.addEventListener("cell-click", onGrd3CellClick);
				}
				container.addChild(grid_3, {
					"top": "0px",
					"bottom": "0px",
					"width": "120px",
					"left": "calc(50% - 60px)"
				});
			})(group_3);
			container.addChild(group_3, {
				"top": "73px",
				"left": "20px",
				"width": "120px",
				"height": "680px"
			});
			
			var textArea_2 = new cpr.controls.TextArea("txa1");
			textArea_2.value = "제주도 지역 검색";
			textArea_2.style.css({
				"text-align" : "center"
			});
			container.addChild(textArea_2, {
				"top": "47px",
				"left": "20px",
				"width": "259px",
				"height": "20px"
			});
			
			var inputBox_2 = new cpr.controls.InputBox("titleSearch");
			var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("areaSearch"));
			inputBox_2.setBindContext(dataMapContext_1);
			inputBox_2.bind("value").toDataMap(app.lookup("areaSearch"), "title");
			if(typeof onTitleSearchKeydown == "function") {
				inputBox_2.addEventListener("keydown", onTitleSearchKeydown);
			}
			container.addChild(inputBox_2, {
				"top": "47px",
				"left": "289px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_3 = new cpr.controls.Button("searchbtn");
			button_3.value = "검색";
			if(typeof onSearchbtnClick == "function") {
				button_3.addEventListener("click", onSearchbtnClick);
			}
			container.addChild(button_3, {
				"top": "47px",
				"left": "399px",
				"width": "100px",
				"height": "20px"
			});
			
			var output_2 = new cpr.controls.Output("planDateOutput");
			output_2.visible = false;
			output_2.bind("value").toDataMap(app.lookup("createPlanDM"), "planDate");
			container.addChild(output_2, {
				"top": "100px",
				"left": "150px",
				"width": "100px",
				"height": "20px"
			});
			
			var output_3 = new cpr.controls.Output("contentIdOutput");
			output_3.visible = false;
			output_3.bind("value").toDataMap(app.lookup("createPlanDM"), "contentid");
			container.addChild(output_3, {
				"top": "100px",
				"left": "249px",
				"width": "100px",
				"height": "20px"
			});
			
			var embeddedPage_1 = new cpr.controls.EmbeddedPage("ep1");
			embeddedPage_1.src = "thirdparty/maps/kakaoMapAPI.html";
			container.addChild(embeddedPage_1, {
				"top": "77px",
				"left": "570px",
				"width": "447px",
				"height": "671px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "planner";
	cpr.core.Platform.INSTANCE.register(app);
})();
