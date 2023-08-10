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
			function onBodyLoad(e){	
				app.lookup("searchbtn").click();
			}

			/*
			 * "검색" 버튼(searchbtn)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onSearchbtnClick(e){
				var searchbtn = e.control;
					app.lookup("areaList").send();	
			}

			/*
			 * 인풋 박스에서 keydown 이벤트 발생 시 호출.
			 * 사용자가 키를 누를 때 발생하는 이벤트. 키코드 관련 상수는 {@link cpr.events.KeyCode}에서 참조할 수 있습니다.
			 */
			function onTitleSearchKeydown(e){
				var titleSearch = e.control;
				if(e.keyCode == cpr.events.KeyCode.ENTER){
					var Searchbtn = app.lookup("searchbtn");
					Searchbtn.click();
				}
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
			var dataMap_1 = new cpr.data.DataMap("areaSearch");
			dataMap_1.parseData({
				"columns" : [{"name": "title"}]
			});
			app.register(dataMap_1);
			var submission_1 = new cpr.protocols.Submission("subSave");
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
				container.addChild(button_1, {
					"colIndex": 0,
					"rowIndex": 0,
					"verticalAlign": "top"
				});
				var button_2 = new cpr.controls.Button();
				button_2.value = "취소";
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
					{"width": "100px"}
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
								cell.text = "여행지 목록";
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
			container.addChild(grid_1, {
				"top": "73px",
				"left": "360px",
				"width": "200px",
				"height": "680px"
			});
			
			var grid_2 = new cpr.controls.Grid("grd1");
			grid_2.init({
				"columns": [{"width": "137px"}],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.text = "선택한 여행지 목록";
						}
					}]
				},
				"detail": {
					"rows": [{"height": "24px"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
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
				var linkedComboBox_1 = new cpr.controls.LinkedComboBox("lcb1");
				container.addChild(linkedComboBox_1, {
					"top": "0px",
					"left": "0px",
					"width": "120px",
					"height": "20px"
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
