/*
 * App URI: myPlan
 * Source Location: myPlan.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("myPlan", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/************************************************
			 * myPlan.js
			 * Created at 2023. 8. 14. 오전 10:38:41.
			 *
			 * @author USER
			 ************************************************/

			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */
			function onBodyLoad(e) {
				app.lookup("findCompletePlanner").send();
				gridPaging();
				app.lookup("findNotCompletePlanner").send();
				gridPaging2();
				
			}

			/**
			 * 페이지인덱서 컨트롤을 사용하여 그리드의 데이터를 페이징합니다.
			 * @param {Number} vnPageRow
			 */
			function gridPaging() {
				var vcGridSample = app.lookup("grd1");
				var vcPageIndexer = app.lookup("completePaging");
				vcPageIndexer.redraw();
				
				/* 페이징의 첫번째 행 번호와 마지막 행 번호를 지정합니다. */
				var currentPageIndex = vcPageIndexer.currentPageIndex;
				var startRowIndex = (currentPageIndex - 1) * vcPageIndexer.pageRowCount;
				var endRowIndex = currentPageIndex * vcPageIndexer.pageRowCount;
				
				/* 페이징이 될 때마다 그리드의 첫번째 행의 번호를 지정해줍니다. */
				//vcGridSample.rowIndexerStartNum = (startRowIndex + 1);
				
				/* filter 조건을 통해 그리드를 페이징합니다. */
				vcGridSample.setFilter(startRowIndex + " < planNo && planNo <= " + endRowIndex);
			}

			function gridPaging2() {
				var vcGridSample = app.lookup("grd2");
				var vcPageIndexer = app.lookup("notCompletePaging");
				vcPageIndexer.redraw();
				
				/* 페이징의 첫번째 행 번호와 마지막 행 번호를 지정합니다. */
				var currentPageIndex = vcPageIndexer.currentPageIndex;
				var startRowIndex = (currentPageIndex - 1) * vcPageIndexer.pageRowCount;
				var endRowIndex = currentPageIndex * vcPageIndexer.pageRowCount;
				
				/* 페이징이 될 때마다 그리드의 첫번째 행의 번호를 지정해줍니다. */
				//vcGridSample.rowIndexerStartNum = (startRowIndex + 1);
				
				/* filter 조건을 통해 그리드를 페이징합니다. */
				vcGridSample.setFilter(startRowIndex + " < planNo && planNo <= " + endRowIndex);
			}

			/*
			 * 페이지 인덱서에서 selection-change 이벤트 발생 시 호출.
			 * Page index를 선택하여 선택된 페이지가 변경된 후에 발생하는 이벤트.
			 */
			function onCompletePagingSelectionChange(e) {
				var completePaging = e.control;
				gridPaging();
			}

			/*
			 * 페이지 인덱서에서 selection-change 이벤트 발생 시 호출.
			 * Page index를 선택하여 선택된 페이지가 변경된 후에 발생하는 이벤트.
			 */
			function onNotCompletePagingSelectionChange(e) {
				var notCompletePaging = e.control;
				gridPaging2();
				
			}



			/*
			 * "상세보기" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var button = e.control;
				var grd2 = app.lookup("grd2")
				var plannerNo = grd2.getSelectedRow().getValue("plannerNo");
				location.href = "myPlanDetail/" + plannerNo;
				
			}

			/*
			 * "상세보기" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				var grd1 = app.lookup("grd1")
				var plannerNo = grd1.getSelectedRow().getValue("plannerNo");
				location.href = "myPlanDetail/" + plannerNo;
			}
			// End - User Script
			
			// Header
			var dataSet_1 = new cpr.data.DataSet("completePlannerVO");
			dataSet_1.parseData({
				"columns" : [
					{"name": "planNo"},
					{
						"name": "plannerNo",
						"dataType": "string"
					},
					{
						"name": "id",
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
			(function(dataSet){
				var dataView_1 = new cpr.data.DataView("dvCompletePaging", dataSet);
				dataView_1.parseData({});
				app.register(dataView_1);
			})(dataSet_1);
			app.register(dataSet_1);
			
			var dataSet_2 = new cpr.data.DataSet("notCompletePlannerVO");
			dataSet_2.parseData({
				"columns" : [
					{"name": "planNo"},
					{
						"name": "plannerNo",
						"dataType": "string"
					},
					{
						"name": "id",
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
			(function(dataSet){
				var dataView_2 = new cpr.data.DataView("dvNotCompletePaging", dataSet);
				dataView_2.parseData({});
				app.register(dataView_2);
			})(dataSet_2);
			app.register(dataSet_2);
			var submission_1 = new cpr.protocols.Submission("findCompletePlanner");
			submission_1.async = false;
			submission_1.method = "get";
			submission_1.action = "findCompletePlanner";
			submission_1.addResponseData(dataSet_1, false);
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("findNotCompletePlanner");
			submission_2.async = false;
			submission_2.method = "get";
			submission_2.action = "findNotCompletePlanner";
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
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
			var image_1 = new cpr.controls.Image();
			image_1.src = "images/harubang4.png";
			image_1.style.css({
				"opacity" : "70%"
			});
			container.addChild(image_1, {
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
			
			var output_1 = new cpr.controls.Output();
			output_1.value = "완성";
			output_1.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#ffffff",
				"color" : "#FFFFFF",
				"border-left-style" : "solid",
				"border-left-color" : "#ffffff",
				"border-top-color" : "#ffffff",
				"border-bottom-style" : "solid",
				"border-right-color" : "#ffffff",
				"border-top-style" : "solid",
				"text-align" : "center"
			});
			container.addChild(output_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "85px",
						"width": "100px",
						"height": "30px",
						"left": "calc(50% - 50px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "85px",
						"width": "49px",
						"height": "30px",
						"left": "calc(50% - 24px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "85px",
						"width": "34px",
						"height": "30px",
						"left": "calc(50% - 17px)"
					}
				]
			});
			
			var output_2 = new cpr.controls.Output();
			output_2.value = "미완성";
			output_2.style.css({
				"border-right-style" : "solid",
				"color" : "#FFFFFF",
				"border-bottom-color" : "#ffffff",
				"border-left-style" : "solid",
				"border-left-color" : "#ffffff",
				"border-top-color" : "#ffffff",
				"border-bottom-style" : "solid",
				"border-right-color" : "#ffffff",
				"border-top-style" : "solid",
				"text-align" : "center"
			});
			container.addChild(output_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "428px",
						"width": "100px",
						"height": "30px",
						"left": "calc(50% - 50px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "428px",
						"width": "49px",
						"height": "30px",
						"left": "calc(50% - 24px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "428px",
						"width": "34px",
						"height": "30px",
						"left": "calc(50% - 17px)"
					}
				]
			});
			
			var grid_1 = new cpr.controls.Grid("grd1");
			grid_1.init({
				"dataSet": app.lookup("dvCompletePaging"),
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
								cell.targetColumnName = "planNo";
								cell.text = "planNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerTitle";
								cell.text = "plannerTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerStartDate";
								cell.text = "plannerStartDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerLastDay";
								cell.text = "plannerLastDay";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
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
								cell.columnName = "planNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "plannerTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "plannerStartDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "plannerLastDay";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.control = (function(){
									var button_1 = new cpr.controls.Button();
									button_1.value = "상세보기";
									if(typeof onButtonClick2 == "function") {
										button_1.addEventListener("click", onButtonClick2);
									}
									return button_1;
								})();
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.control = (function(){
									var button_2 = new cpr.controls.Button();
									button_2.value = "삭제";
									return button_2;
								})();
							}
						}
					]
				}
			});
			container.addChild(grid_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "125px",
						"width": "897px",
						"height": "146px",
						"left": "calc(50% - 448px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "125px",
						"width": "438px",
						"height": "146px",
						"left": "calc(50% - 219px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "125px",
						"width": "307px",
						"height": "146px",
						"left": "calc(50% - 153px)"
					}
				]
			});
			
			var grid_2 = new cpr.controls.Grid("grd2");
			grid_2.init({
				"dataSet": app.lookup("dvNotCompletePaging"),
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
								cell.targetColumnName = "planNo";
								cell.text = "planNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerTitle";
								cell.text = "plannerTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerStartDate";
								cell.text = "plannerStartDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "plannerLastDay";
								cell.text = "plannerLastDay";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
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
								cell.columnName = "planNo";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "plannerTitle";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "plannerStartDate";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "plannerLastDay";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.control = (function(){
									var button_3 = new cpr.controls.Button();
									button_3.value = "상세보기";
									if(typeof onButtonClick == "function") {
										button_3.addEventListener("click", onButtonClick);
									}
									return button_3;
								})();
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 5},
							"configurator": function(cell){
								cell.control = (function(){
									var button_4 = new cpr.controls.Button();
									button_4.value = "삭제";
									return button_4;
								})();
							}
						}
					]
				}
			});
			container.addChild(grid_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "468px",
						"width": "897px",
						"height": "146px",
						"left": "calc(50% - 448px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "468px",
						"width": "438px",
						"height": "146px",
						"left": "calc(50% - 219px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "468px",
						"width": "307px",
						"height": "146px",
						"left": "calc(50% - 153px)"
					}
				]
			});
			
			var pageIndexer_1 = new cpr.controls.PageIndexer("completePaging");
			pageIndexer_1.pageRowCount = 5;
			pageIndexer_1.bind("totalRowCount").toExpression("#completePlannerVO.getRowCount()");
			pageIndexer_1.init(1, 1, 1);
			if(typeof onCompletePagingSelectionChange == "function") {
				pageIndexer_1.addEventListener("selection-change", onCompletePagingSelectionChange);
			}
			container.addChild(pageIndexer_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "335px",
						"width": "408px",
						"height": "42px",
						"left": "calc(50% - 204px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "335px",
						"width": "199px",
						"height": "42px",
						"left": "calc(50% - 99px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "335px",
						"width": "139px",
						"height": "42px",
						"left": "calc(50% - 69px)"
					}
				]
			});
			
			var pageIndexer_2 = new cpr.controls.PageIndexer("notCompletePaging");
			pageIndexer_2.pageRowCount = 5;
			pageIndexer_2.bind("totalRowCount").toExpression("#notCompletePlannerVO.getRowCount()");
			pageIndexer_2.init(1, 1, 1);
			if(typeof onNotCompletePagingSelectionChange == "function") {
				pageIndexer_2.addEventListener("selection-change", onNotCompletePagingSelectionChange);
			}
			container.addChild(pageIndexer_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "628px",
						"width": "405px",
						"height": "40px",
						"left": "calc(50% - 202px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "628px",
						"width": "198px",
						"height": "40px",
						"left": "calc(50% - 99px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "628px",
						"width": "138px",
						"height": "40px",
						"left": "calc(50% - 69px)"
					}
				]
			});
			
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "20px",
						"width": "176px",
						"height": "76px",
						"left": "calc(50% - 88px)"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "20px",
						"width": "86px",
						"height": "76px",
						"left": "calc(50% - 43px)"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "20px",
						"width": "60px",
						"height": "76px",
						"left": "calc(50% - 30px)"
					}
				]
			});
			
			var userDefinedControl_2 = new udc.myPageSideBar();
			container.addChild(userDefinedControl_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "69px",
						"left": "20px",
						"width": "300px",
						"height": "300px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "69px",
						"left": "10px",
						"width": "146px",
						"height": "300px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "69px",
						"left": "7px",
						"width": "103px",
						"height": "300px"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "myPlan";
	cpr.core.Platform.INSTANCE.register(app);
})();
