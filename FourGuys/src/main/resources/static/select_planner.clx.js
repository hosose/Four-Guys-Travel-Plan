/*
 * App URI: select_planner
 * Source Location: select_planner.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("select_planner", { 
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
			 * "플래너 선택" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onSelectBtnClick(e){
				var createBtn = e.control;
				var plannerGrd = app.lookup("plannerGrd");
				var plannerNo = plannerGrd.getSelectedRow().getValue("plannerNo");
				app.close(plannerNo);
			}

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e){
				app.lookup("getPlannerSM").send();
			};
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("plannerVO");
			dataSet_1.parseData({
				"columns" : [
					{
						"name": "plannerNo",
						"dataType": "string"
					},
					{
						"name": "ID",
						"dataType": "string"
					},
					{
						"name": "plannerTitle",
						"dataType": "string"
					},
					{
						"name": "plannerStartDate",
						"dataType": "string"
					},
					{
						"name": "plannerLastDay",
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
			var submission_1 = new cpr.protocols.Submission("getPlannerSM");
			submission_1.method = "get";
			submission_1.action = "getPlannerById";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			app.supportMedia("all and (min-width: 1024px)", "default");
			app.supportMedia("all and (min-width: 500px) and (max-width: 1023px)", "tablet");
			app.supportMedia("all and (max-width: 499px)", "mobile");
			
			// Configure root container
			var container = app.getContainer();
			container.style.setClasses(["cl-form-group"]);
			container.style.css({
				"font-family" : "AppleSDGothicNeoB00",
				"width" : "100%",
				"top" : "0px",
				"height" : "100%",
				"left" : "0px"
			});
			
			// Layout
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			container.setLayout(xYLayout_1);
			
			// UI Configuration
			var button_1 = new cpr.controls.Button("selectBtn");
			button_1.value = "플래너 선택";
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
			if(typeof onSelectBtnClick == "function") {
				button_1.addEventListener("click", onSelectBtnClick);
			}
			container.addChild(button_1, {
				"bottom": "50px",
				"width": "180px",
				"height": "40px",
				"left": "calc(50% - 90px)"
			});
			
			var grid_1 = new cpr.controls.Grid("plannerGrd");
			grid_1.init({
				"dataSet": app.lookup("plannerVO"),
				"columns": [
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
								cell.targetColumnName = "plannerTitle";
								cell.text = "플래너 제목";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerStartDate";
								cell.text = "시작일";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerLastDay";
								cell.text = "종료일";
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
								cell.columnName = "plannerTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "plannerStartDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "plannerLastDay";
							}
						}
					]
				}
			});
			grid_1.style.css({
				"font-family" : "AppleSDGothicNeoB00"
			});
			container.addChild(grid_1, {
				"top": "20px",
				"width": "550px",
				"height": "250px",
				"left": "calc(50% - 275px)"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "플래너 선택";
	cpr.core.Platform.INSTANCE.register(app);
})();
