/*
 * App URI: editBoardDetail
 * Source Location: editBoardDetail.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("editBoardDetail", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * plannerBoardDetail.js
			 * Created at 2023. 8. 14. 오전 9:40:31.
			 *
			 * @author iedl9
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/")+1 );
			   	app.lookup("boardNo").value = 1;
			   	app.lookup("plannerNo").value = 201;
				app.lookup("boardDetailSM").send();	
				app.lookup("getDay").send();
			}

			/*
			 * 그리드에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onGrd4Click(e){
				var grd4 = e.control;
				var grid = app.lookup("grd4");
				var embp = app.lookup("ep1");
				var mapx = grid.getSelectedRow().getValue("mapx");
				var mapy = grid.getSelectedRow().getValue("mapy");
				var title = grid.getSelectedRow().getValue("title");
				var embp_mapx = embp.setPageProperty("mapx",mapx);
				var embp_mapy = embp.setPageProperty("mapy",mapy);
				var embp_title = embp.setPageProperty("title",title);
				embp.callPageMethod("panTo");
			}


			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onGetDaySubmitSuccess(e){
				var getDay = e.control;
				var grid = app.lookup("grd4");
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
				var plannerNo = app.lookup("plannerNo").value;
				var planDate = grid.getSelectedRow().getValue("planDate");
				app.lookup("planDateOutput").value=planDate;
				app.lookup("getTitle").send();
			}

			/*
			 * "수정" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e){
				var button = e.control;
				location.href="";
			}

			/*
			 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e){
				var button = e.control;
				
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("boardDetail");
			dataSet_1.parseData({
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
					}
				]
			});
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("planDate");
			dataSet_2.parseData({
				"columns" : [
					{"name": "planDate"},
					{"name": "planNo"},
					{"name": "plannerNo"},
					{"name": "contentId"}
				]
			});
			app.register(dataSet_2);
			
			var dataSet_3 = new cpr.data.DataSet("selectedPlan");
			dataSet_3.parseData({
				"columns" : [
					{
						"name": "planDate",
						"dataType": "number"
					},
					{
						"name": "plannerNo",
						"dataType": "number"
					},
					{
						"name": "planNo",
						"dataType": "number"
					},
					{
						"name": "contentId",
						"dataType": "number"
					},
					{"name": "title"},
					{
						"name": "mapx",
						"dataType": "string"
					},
					{
						"name": "mapy",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_3);
			var dataMap_1 = new cpr.data.DataMap("plannerBoardNoDM");
			dataMap_1.parseData({
				"columns" : [{
					"name": "BOARD_NO",
					"dataType": "number"
				}]
			});
			app.register(dataMap_1);
			
			var dataMap_2 = new cpr.data.DataMap("dm1");
			dataMap_2.parseData({
				"columns" : [
					{"name": "id"},
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
					}
				]
			});
			app.register(dataMap_2);
			
			var dataMap_3 = new cpr.data.DataMap("plannerNoDM");
			dataMap_3.parseData({
				"columns" : [{"name": "plannerNo"}]
			});
			app.register(dataMap_3);
			
			var dataMap_4 = new cpr.data.DataMap("createPlanDM");
			dataMap_4.parseData({
				"columns" : [
					{"name": "contentid"},
					{"name": "planDate"}
				]
			});
			app.register(dataMap_4);
			
			var dataMap_5 = new cpr.data.DataMap("selectTitleDM");
			dataMap_5.parseData({
				"columns" : [
					{
						"name": "plannerNo",
						"dataType": "number"
					},
					{
						"name": "planDate",
						"dataType": "number"
					},
					{"name": "title"}
				]
			});
			app.register(dataMap_5);
			
			var dataMap_6 = new cpr.data.DataMap("editBoardDM");
			dataMap_6.parseData({});
			app.register(dataMap_6);
			var submission_1 = new cpr.protocols.Submission("boardDetailSM");
			submission_1.method = "get";
			submission_1.action = "boardDetail";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onBoardDetailSMSubmitSuccess == "function") {
				submission_1.addEventListener("submit-success", onBoardDetailSMSubmitSuccess);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("selectDate");
			submission_2.method = "get";
			submission_2.action = "selectPlansByDate";
			submission_2.addRequestData(dataMap_3);
			submission_2.addResponseData(dataSet_3, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("getDay");
			submission_3.method = "get";
			submission_3.action = "getDay";
			submission_3.addRequestData(dataMap_3);
			submission_3.addRequestData(dataMap_4);
			submission_3.addResponseData(dataSet_2, false);
			if(typeof onGetDaySubmitSuccess == "function") {
				submission_3.addEventListener("submit-success", onGetDaySubmitSuccess);
			}
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("getTitle");
			submission_4.method = "get";
			submission_4.action = "selectPlansByDate";
			submission_4.addRequestData(dataMap_3);
			submission_4.addRequestData(dataMap_4);
			submission_4.addResponseData(dataSet_3, false);
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("editBoard");
			submission_5.method = "put";
			submission_5.action = "editBoard";
			submission_5.addRequestData(dataSet_1);
			app.register(submission_5);
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
				"top": "20px",
				"left": "20px",
				"width": "300px",
				"height": "120px"
			});
			
			var output_1 = new cpr.controls.Output("boardNo");
			output_1.visible = false;
			output_1.bind("value").toDataMap(app.lookup("plannerBoardNoDM"), "BOARD_NO");
			container.addChild(output_1, {
				"top": "20px",
				"left": "191px",
				"width": "100px",
				"height": "20px"
			});
			
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.init({
				"dataSet": app.lookup("boardDetail"),
				"columns": [
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"},
					{"width": "100px"}
				],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "id";
								cell.text = "id";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerNo";
								cell.text = "plannerNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "boardNo";
								cell.text = "boardNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "boardTitle";
								cell.text = "boardTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "boardCreateDate";
								cell.text = "boardCreateDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "boardHits";
								cell.text = "boardHits";
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
								cell.columnName = "id";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "plannerNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "boardNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "boardTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "boardCreateDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.columnName = "boardHits";
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				"top": "139px",
				"right": "10px",
				"left": "10px",
				"height": "50px"
			});
			
			var grid_2 = new cpr.controls.Grid("grd2");
			grid_2.init({
				"dataSet": app.lookup("boardDetail"),
				"columns": [{"width": "100px"}],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.filterable = false;
							cell.sortable = false;
							cell.targetColumnName = "boardContent";
							cell.text = "boardContent";
						}
					}]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.columnName = "boardContent";
						}
					}]
				}
			});
			container.addChild(grid_2, {
				"top": "197px",
				"right": "10px",
				"left": "10px",
				"height": "50px"
			});
			
			var embeddedPage_1 = new cpr.controls.EmbeddedPage("ep1");
			embeddedPage_1.src = "thirdparty/maps/kakaoMapAPI.html";
			container.addChild(embeddedPage_1, {
				"top": "339px",
				"right": "10px",
				"bottom": "129px",
				"left": "500px"
			});
			
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
				"top": "268px",
				"bottom": "10px",
				"left": "10px",
				"width": "200px"
			});
			
			var grid_4 = new cpr.controls.Grid("grd4");
			grid_4.init({
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
							cell.text = "선택한 여행지";
						}
					}]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.columnName = "title";
							cell.bind("fieldLabel").toDataSet(app.lookup("selectedPlan"), "title", 0);
						}
					}]
				}
			});
			if(typeof onGrd4Click == "function") {
				grid_4.addEventListener("click", onGrd4Click);
			}
			container.addChild(grid_4, {
				"top": "268px",
				"bottom": "10px",
				"left": "220px",
				"width": "200px"
			});
			
			var output_2 = new cpr.controls.Output("plannerNo");
			output_2.visible = false;
			output_2.bind("value").toDataMap(app.lookup("plannerNoDM"), "plannerNo");
			container.addChild(output_2, {
				"top": "8px",
				"left": "191px",
				"width": "100px",
				"height": "20px"
			});
			
			var group_1 = new cpr.controls.Container("slt");
			group_1.visible = false;
			var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("selectTitleDM"));
			group_1.setBindContext(dataMapContext_1);
			var xYLayout_2 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_2);
			(function(container){
				var output_3 = new cpr.controls.Output("plannerNoOutput");
				output_3.bind("value").toDataMap(app.lookup("plannerNoDM"), "plannerNo");
				container.addChild(output_3, {
					"top": "22px",
					"left": "70px",
					"width": "100px",
					"height": "20px"
				});
				var output_4 = new cpr.controls.Output("planDateOutput");
				output_4.visible = false;
				output_4.bind("value").toDataMap(app.lookup("createPlanDM"), "planDate");
				container.addChild(output_4, {
					"top": "3px",
					"left": "30px",
					"width": "100px",
					"height": "20px"
				});
			})(group_1);
			container.addChild(group_1, {
				"top": "8px",
				"left": "20px",
				"width": "179px",
				"height": "43px"
			});
			
			var button_1 = new cpr.controls.Button();
			button_1.value = "삭제";
			if(typeof onButtonClick2 == "function") {
				button_1.addEventListener("click", onButtonClick2);
			}
			container.addChild(button_1, {
				"top": "40px",
				"right": "10px",
				"width": "100px",
				"height": "20px"
			});
			
			var button_2 = new cpr.controls.Button();
			button_2.value = "수정";
			if(typeof onButtonClick == "function") {
				button_2.addEventListener("click", onButtonClick);
			}
			container.addChild(button_2, {
				"top": "8px",
				"right": "10px",
				"width": "100px",
				"height": "20px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "editBoardDetail";
	cpr.core.Platform.INSTANCE.register(app);
})();