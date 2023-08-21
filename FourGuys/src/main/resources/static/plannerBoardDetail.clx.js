/*
 * App URI: plannerBoardDetail
 * Source Location: plannerBoardDetail.clx
 *
 * This file was generated by eXBuilder6 compiler(1.0.4584), Don't edit manually.
 */
(function() {
	var app = new cpr.core.App("plannerBoardDetail", { 
		onPrepare: function(loader) {
		},
		onCreate: function(/* cpr.core.AppInstance */ app, exports) {
			var linker = {};
			// Start - User Script
			/*
			 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
			 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
			 */

			function onBodyLoad(e) {
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				app.lookup("plannerBoardNoDM").setValue("BOARD_NO", boardNo);
				app.lookup("increaseHitsSM").send();
				app.lookup("boardDetailSM").send();
				app.lookup("replyListSM").send();
			}	

			/*
			 * 그리드에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onGrd4Click(e) {
				var grd4 = e.control;
				var grid = app.lookup("grd4");
				var embp = app.lookup("ep1");
				var mapx = grid.getSelectedRow().getValue("mapx");
				var mapy = grid.getSelectedRow().getValue("mapy");
				var title = grid.getSelectedRow().getValue("title");
				var firstimage = grid.getSelectedRow().getValue("firstimage");
				var embp_mapx = embp.setPageProperty("mapx",mapx);
				var embp_mapy = embp.setPageProperty("mapy",mapy);
				var embp_title = embp.setPageProperty("title",title);
				var embp_firstimage = embp.setPageProperty("firstimage",firstimage);
				embp.callPageMethod("panTo");
			}



			/*
			 * 그리드에서 cell-click 이벤트 발생 시 호출.
			 * Grid의 Cell 클릭시 발생하는 이벤트.
			 */
			function onGrd3CellClick(e) {
				var grd3 = e.control;
				var grid = app.lookup("grd3");
				var planDate = grid.getSelectedRow().getValue("planDate");
				app.lookup("createPlanDM").setValue("planDate", planDate);
				app.lookup("getTitle").send();
			}

			/*
			 * "수정" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick(e) {
				var currentUrl = location.href;
				var button = e.control;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				location.href="updateBoardForm/"+boardNo;

			}


			/*
			 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				if(!confirm("삭제하시겠습니까?")){
					alert("취소되었습니다")
					location.href="boardDetailPage/"+boardNo;
				}else{
					app.lookup("deleteBoardSM").send();
					alert("삭제되었습니다");
					location.href="planner-board-list.clx";
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardDetailSMSubmitSuccess2(e) {
				var boardDetailSM = e.control;
				var plannerNo = app.lookup("grd1").getRow(0).getValue("plannerNo");
				app.lookup("plannerNoDM").setValue("plannerNo", plannerNo);
				app.lookup("getDay").send();
				var vo = boardDetailSM.getMetadata("MemberVO");
				var editBtn = app.lookup("editBtn");
				var deleteBtn = app.lookup("deleteBtn");
				var grid = app.lookup("grd1");
				var value = grid.getRow(0).getValue("id");
				if(vo["id"]==value){
					editBtn.visible = true;
					deleteBtn.visible=true;
				}
			}

			/*
			 * "댓글 등록" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e){
				var button = e.control;
				app.lookup("insertReplySM").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onInsertReplySMSubmitSuccess(e){
				var insertReplySM = e.control;
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				location.href="boardDetailPage/"+boardNo;
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
					},
					{
						"name": "RNo",
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
					},
					{"name": "firstimage"}
				]
			});
			app.register(dataSet_3);
			
			var dataSet_4 = new cpr.data.DataSet("boardReply");
			dataSet_4.parseData({
				"columns" : [
					{
						"name": "replyNo",
						"dataType": "number"
					},
					{
						"name": "boardNo",
						"dataType": "number"
					},
					{
						"name": "replyContent",
						"dataType": "string"
					},
					{
						"name": "replyDate",
						"dataType": "string"
					},
					{
						"name": "id",
						"dataType": "string"
					}
				]
			});
			app.register(dataSet_4);
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
					},
					{
						"name": "RNo",
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
			
			var dataMap_7 = new cpr.data.DataMap("replyDM");
			dataMap_7.parseData({
				"columns" : [
					{"name": "REPLY_CONTENT"},
					{"name": "REPLY_DATE"},
					{"name": "ID"}
				]
			});
			app.register(dataMap_7);
			var submission_1 = new cpr.protocols.Submission("boardDetailSM");
			submission_1.method = "get";
			submission_1.action = "boardDetail";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onBoardDetailSMSubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onBoardDetailSMSubmitSuccess2);
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
			submission_3.addResponseData(dataSet_2, false);
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
			
			var submission_6 = new cpr.protocols.Submission("increaseHitsSM");
			submission_6.action = "increaseBoardHits";
			submission_6.addRequestData(dataMap_1);
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("deleteBoardSM");
			submission_7.method = "delete";
			submission_7.action = "deleteBoard";
			submission_7.addRequestData(dataMap_1);
			submission_7.addResponseData(dataSet_1, false);
			app.register(submission_7);
			
			var submission_8 = new cpr.protocols.Submission("insertReplySM");
			submission_8.method = "post";
			submission_8.action = "insertReply";
			submission_8.addRequestData(dataMap_7);
			submission_8.addRequestData(dataMap_1);
			submission_8.addResponseData(dataSet_4, false);
			if(typeof onInsertReplySMSubmitSuccess == "function") {
				submission_8.addEventListener("submit-success", onInsertReplySMSubmitSuccess);
			}
			app.register(submission_8);
			
			var submission_9 = new cpr.protocols.Submission("replyListSM");
			submission_9.method = "get";
			submission_9.action = "findReplyBoardByNo";
			submission_9.addRequestData(dataMap_1);
			submission_9.addResponseData(dataSet_4, false);
			app.register(submission_9);
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
						"top": "20px",
						"left": "20px",
						"width": "299px",
						"height": "70px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "20px",
						"left": "10px",
						"width": "146px",
						"height": "70px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "20px",
						"left": "7px",
						"width": "102px",
						"height": "70px"
					}
				]
			});
			
			var output_1 = new cpr.controls.Output("boardNo");
			output_1.visible = false;
			output_1.bind("value").toDataMap(app.lookup("plannerBoardNoDM"), "BOARD_NO");
			container.addChild(output_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "20px",
						"left": "191px",
						"width": "100px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "20px",
						"left": "93px",
						"width": "49px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "20px",
						"left": "65px",
						"width": "34px",
						"height": "20px"
					}
				]
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
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "100px",
						"right": "10px",
						"left": "10px",
						"height": "50px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "100px",
						"right": "5px",
						"left": "5px",
						"height": "50px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "100px",
						"right": "3px",
						"left": "3px",
						"height": "50px"
					}
				]
			});
			
			var grid_2 = new cpr.controls.Grid("grd2");
			grid_2.init({
				"dataSet": app.lookup("boardDetail"),
				"autoRowHeight": "all",
				"columns": [{"width": "100px"}],
				"detail": {
					"rows": [{"height": "100%"}],
					"cells": [{
						"constraint": {"rowIndex": 0, "colIndex": 0},
						"configurator": function(cell){
							cell.columnName = "boardContent";
							cell.control = (function(){
								var hTMLSnippet_1 = new cpr.controls.HTMLSnippet();
								hTMLSnippet_1.value = "<p>HTML Snippet<\/p>";
								hTMLSnippet_1.bind("value").toDataColumn("boardContent");
								return hTMLSnippet_1;
							})();
							cell.controlConstraint = {
								"horizontalAlign": "fill",
								"verticalAlign": "fill",
								"width": 500,
								"height": 100
							};
						}
					}]
				}
			});
			container.addChild(grid_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "160px",
						"right": "10px",
						"left": "10px",
						"height": "98px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "160px",
						"right": "5px",
						"left": "5px",
						"height": "98px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "160px",
						"right": "3px",
						"left": "3px",
						"height": "98px"
					}
				]
			});
			
			var embeddedPage_1 = new cpr.controls.EmbeddedPage("ep1");
			embeddedPage_1.src = "thirdparty/maps/kakaoMapAPI.html";
			embeddedPage_1.scrolling = "no";
			container.addChild(embeddedPage_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "268px",
						"right": "10px",
						"left": "430px",
						"height": "245px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "268px",
						"right": "5px",
						"left": "210px",
						"height": "245px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "268px",
						"right": "3px",
						"left": "147px",
						"height": "245px"
					}
				]
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
							cell.style.css({
								"background-color" : "#FFFFFF",
								"color" : "#2DCEB9",
								"font-weight" : "bolder"
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
							cell.bind("fieldLabel").toDataMap(app.lookup("createPlanDM"), "planDate");
						}
					}]
				}
			});
			if(typeof onGrd3CellClick == "function") {
				grid_3.addEventListener("cell-click", onGrd3CellClick);
			}
			container.addChild(grid_3, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "268px",
						"left": "10px",
						"width": "200px",
						"height": "245px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "268px",
						"left": "5px",
						"width": "98px",
						"height": "245px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "268px",
						"left": "3px",
						"width": "68px",
						"height": "245px"
					}
				]
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
							cell.text = "선택 목록";
							cell.style.css({
								"background-color" : "#FFFFFF",
								"background-repeat" : "repeat",
								"color" : "#2DCEB9",
								"font-weight" : "bolder",
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
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "268px",
						"left": "220px",
						"width": "200px",
						"height": "245px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "268px",
						"left": "107px",
						"width": "98px",
						"height": "245px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "268px",
						"left": "75px",
						"width": "68px",
						"height": "245px"
					}
				]
			});
			
			var output_2 = new cpr.controls.Output("plannerNo");
			output_2.visible = false;
			output_2.bind("value").toDataMap(app.lookup("plannerNoDM"), "plannerNo");
			container.addChild(output_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "8px",
						"left": "191px",
						"width": "100px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "8px",
						"left": "93px",
						"width": "49px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "8px",
						"left": "65px",
						"width": "34px",
						"height": "20px"
					}
				]
			});
			
			var group_1 = new cpr.controls.Container("slt");
			group_1.visible = false;
			var dataMapContext_1 = new cpr.bind.DataMapContext(app.lookup("selectTitleDM"));
			group_1.setBindContext(dataMapContext_1);
			var xYLayout_1 = new cpr.controls.layouts.XYLayout();
			group_1.setLayout(xYLayout_1);
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
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "8px",
						"left": "20px",
						"width": "179px",
						"height": "43px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "8px",
						"left": "10px",
						"width": "87px",
						"height": "43px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "8px",
						"left": "7px",
						"width": "61px",
						"height": "43px"
					}
				]
			});
			
			var button_1 = new cpr.controls.Button("deleteBtn");
			button_1.visible = false;
			button_1.value = "삭제";
			if(typeof onButtonClick2 == "function") {
				button_1.addEventListener("click", onButtonClick2);
			}
			container.addChild(button_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "40px",
						"right": "10px",
						"width": "100px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "40px",
						"right": "5px",
						"width": "49px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "40px",
						"right": "3px",
						"width": "34px",
						"height": "20px"
					}
				]
			});
			
			var button_2 = new cpr.controls.Button("editBtn");
			button_2.visible = false;
			button_2.value = "수정";
			if(typeof onButtonClick == "function") {
				button_2.addEventListener("click", onButtonClick);
			}
			container.addChild(button_2, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "8px",
						"right": "10px",
						"width": "100px",
						"height": "20px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "8px",
						"right": "5px",
						"width": "49px",
						"height": "20px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "8px",
						"right": "3px",
						"width": "34px",
						"height": "20px"
					}
				]
			});
			
			var grid_5 = new cpr.controls.Grid("grd5");
			grid_5.init({
				"dataSet": app.lookup("boardReply"),
				"columns": [
					{"width": "85px"},
					{"width": "85px"},
					{"width": "150px"},
					{"width": "100px"},
					{"width": "85px"}
				],
				"header": {
					"rows": [{"height": "24px"}],
					"cells": [
						{
							"constraint": {"rowIndex": 0, "colIndex": 0},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "replyNo";
								cell.text = "댓글번호";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "boardNo";
								cell.text = "게시글 번호";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "replyContent";
								cell.text = "내용";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "replyDate";
								cell.text = "댓글 등록 날짜";
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.filterable = false;
								cell.sortable = false;
								cell.targetColumnName = "id";
								cell.text = "아이디";
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
								cell.columnName = "replyNo";
								cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyNo", 0);
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 1},
							"configurator": function(cell){
								cell.columnName = "boardNo";
								cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "boardNo", 0);
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 2},
							"configurator": function(cell){
								cell.columnName = "replyContent";
								cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyContent", 0);
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 3},
							"configurator": function(cell){
								cell.columnName = "replyDate";
								cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyDate", 0);
							}
						},
						{
							"constraint": {"rowIndex": 0, "colIndex": 4},
							"configurator": function(cell){
								cell.columnName = "id";
								cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "id", 0);
							}
						}
					]
				}
			});
			container.addChild(grid_5, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "575px",
						"left": "10px",
						"width": "905px",
						"height": "176px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "575px",
						"left": "5px",
						"width": "442px",
						"height": "176px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "575px",
						"left": "3px",
						"width": "309px",
						"height": "176px"
					}
				]
			});
			
			var inputBox_1 = new cpr.controls.InputBox("ipb1");
			inputBox_1.style.css({
				"text-align" : "center"
			});
			inputBox_1.bind("value").toDataMap(app.lookup("replyDM"), "REPLY_CONTENT");
			container.addChild(inputBox_1, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "523px",
						"left": "10px",
						"width": "725px",
						"height": "42px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "523px",
						"left": "5px",
						"width": "354px",
						"height": "42px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "523px",
						"left": "3px",
						"width": "248px",
						"height": "42px"
					}
				]
			});
			
			var button_3 = new cpr.controls.Button();
			button_3.value = "댓글 등록";
			if(typeof onButtonClick3 == "function") {
				button_3.addEventListener("click", onButtonClick3);
			}
			container.addChild(button_3, {
				positions: [
					{
						"media": "all and (min-width: 1024px)",
						"top": "523px",
						"left": "770px",
						"width": "100px",
						"height": "42px"
					}, 
					{
						"media": "all and (min-width: 500px) and (max-width: 1023px)",
						"top": "523px",
						"left": "376px",
						"width": "49px",
						"height": "42px"
					}, 
					{
						"media": "all and (max-width: 499px)",
						"top": "523px",
						"left": "263px",
						"width": "34px",
						"height": "42px"
					}
				]
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "plannerBoardDetail";
	cpr.core.Platform.INSTANCE.register(app);
})();
