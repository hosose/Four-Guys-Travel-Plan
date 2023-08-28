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
				var grid = app.lookup("selectedContentGrd");
				var embp = app.lookup("ep1");
				var mapx = grid.getSelectedRow().getValue("mapx");
				var mapy = grid.getSelectedRow().getValue("mapy");
				var title = grid.getSelectedRow().getValue("title");
				var firstimage = grid.getSelectedRow().getValue("firstimage");
				var embp_mapx = embp.setPageProperty("mapx", mapx);
				var embp_mapy = embp.setPageProperty("mapy", mapy);
				var embp_title = embp.setPageProperty("title", title);
				var embp_firstimage = embp.setPageProperty("firstimage", firstimage);
				embp.callPageMethod("panTo");
			}

			/*
			 * 그리드에서 cell-click 이벤트 발생 시 호출.
			 * Grid의 Cell 클릭시 발생하는 이벤트.
			 */
			function onGrd3CellClick(e) {
				var grd3 = e.control;
				var grid = app.lookup("dayGrd");
				var planDate = grid.getSelectedRow().getValue("planDate");
				app.lookup("planDM").setValue("planDate", planDate);
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
				location.href = "updateBoardForm/" + boardNo;
				
			}

			/*
			 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick2(e) {
				var button = e.control;
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				if (!confirm("삭제하시겠습니까?")) {
					alert("취소되었습니다")
					location.href = "boardDetailPage/" + boardNo;
				} else {
					app.lookup("deleteBoardSM").send();
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onBoardDetailSMSubmitSuccess2(e) {
				var boardDetailSM = e.control;
				app.lookup("titleOutput").redraw();
				app.lookup("createDateOutput").redraw();
				app.lookup("idOutput").redraw();
				var plannerNo = app.lookup("boardDetail").getRow(0).getValue("plannerNo");
				var createrId = app.lookup("boardDetail").getRow(0).getValue("id");
				app.lookup("plannerNoDM").setValue("plannerNo", plannerNo);
				app.lookup("getDay").send();
				var vo = boardDetailSM.getMetadata("MemberVO");
				var editBtn = app.lookup("editBtn");
				var deleteBtn = app.lookup("deleteBtn");
				if (vo["id"] == createrId) {
					editBtn.visible = true;
					deleteBtn.visible = true;
				}
				app.lookup("snippet").value = app.lookup("boardDetail").getValue(0, "boardContent");
			}

			/*
			 * "댓글 등록" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick3(e) {
				var button = e.control;
				app.lookup("insertReplySM").send();
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onInsertReplySMSubmitSuccess(e) {
				var insertReplySM = e.control;
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				location.href = "boardDetailPage/" + boardNo;
			}

			/*
			 * "댓글 삭제" 버튼에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onButtonClick4(e) {
				var button = e.control;
				var currentUrl = location.href;
				var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
				if (!confirm("삭제하시겠습니까?")) {
					alert("취소되었습니다");
				} else {
					var replyNo = app.lookup("replyGrd").getSelectedRow().getValue("replyNo");
					app.lookup("replyBoardNoDM").setValue("REPLY_NO", replyNo);
					app.lookup("deleteReplySM").send();
					alert("삭제되었습니다");
					location.href = "boardDetailPage/" + boardNo;
				}
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDeleteReplySMSubmitSuccess(e) {
				var deleteReplySM = e.control;
				var boardDetailSM = e.control;
				var replyNo = app.lookup("replyGrd").getRow(0).getValue("replyNo");
				app.lookup("replyBoardNoDM").setValue("replyNo", replyNo);
			}

			/*
			 * "댓글 수정" 버튼(replyEdit)에서 click 이벤트 발생 시 호출.
			 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
			 */
			function onReplyEditClick(e) {
				var replyEdit = e.control;
				if (confirm("수정하시겠습니까?")) {
					app.lookup("editReplySM").send();
					location.reload();
				}
			}

			/*
			 * 서브미션에서 submit-error 이벤트 발생 시 호출.
			 * 통신 중 문제가 생기면 발생합니다.
			 */
			function onDeleteBoardSMSubmitError(e) {
				var deleteBoardSM = e.control;
				alert("삭제하지 못하였습니다.");
			}

			/*
			 * 서브미션에서 submit-success 이벤트 발생 시 호출.
			 * 통신이 성공하면 발생합니다.
			 */
			function onDeleteBoardSMSubmitSuccess(e) {
				var deleteBoardSM = e.control;
				alert("삭제되었습니다");
				location.href = "planner-board-list.clx";
			}
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
						"name": "replyId",
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
			
			var dataMap_4 = new cpr.data.DataMap("selectTitleDM");
			dataMap_4.parseData({
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
			app.register(dataMap_4);
			
			var dataMap_5 = new cpr.data.DataMap("editBoardDM");
			dataMap_5.parseData({});
			app.register(dataMap_5);
			
			var dataMap_6 = new cpr.data.DataMap("replyDM");
			dataMap_6.parseData({
				"columns" : [
					{"name": "REPLY_CONTENT"},
					{"name": "REPLY_DATE"},
					{"name": "ID"}
				]
			});
			app.register(dataMap_6);
			
			var dataMap_7 = new cpr.data.DataMap("replyBoardNoDM");
			dataMap_7.parseData({
				"columns" : [{
					"name": "REPLY_NO",
					"dataType": "number"
				}]
			});
			app.register(dataMap_7);
			
			var dataMap_8 = new cpr.data.DataMap("MemberVO");
			dataMap_8.parseData({
				"columns" : [{"name": "id"}]
			});
			app.register(dataMap_8);
			var submission_1 = new cpr.protocols.Submission("boardDetailSM");
			submission_1.method = "get";
			submission_1.action = "boardDetail";
			submission_1.addRequestData(dataMap_1);
			submission_1.addResponseData(dataSet_1, false);
			if(typeof onBoardDetailSMSubmitSuccess2 == "function") {
				submission_1.addEventListener("submit-success", onBoardDetailSMSubmitSuccess2);
			}
			app.register(submission_1);
			
			var submission_2 = new cpr.protocols.Submission("getDay");
			submission_2.method = "get";
			submission_2.action = "getDay";
			submission_2.addRequestData(dataMap_2);
			submission_2.addResponseData(dataSet_2, false);
			app.register(submission_2);
			
			var submission_3 = new cpr.protocols.Submission("getTitle");
			submission_3.method = "get";
			submission_3.action = "selectPlansByDate";
			submission_3.addRequestData(dataMap_2);
			submission_3.addRequestData(dataMap_3);
			submission_3.addResponseData(dataSet_3, false);
			app.register(submission_3);
			
			var submission_4 = new cpr.protocols.Submission("editBoard");
			submission_4.method = "put";
			submission_4.action = "editBoard";
			submission_4.addRequestData(dataSet_1);
			app.register(submission_4);
			
			var submission_5 = new cpr.protocols.Submission("increaseHitsSM");
			submission_5.action = "increaseBoardHits";
			submission_5.addRequestData(dataMap_1);
			app.register(submission_5);
			
			var submission_6 = new cpr.protocols.Submission("deleteBoardSM");
			submission_6.method = "delete";
			submission_6.action = "deleteBoard";
			submission_6.addRequestData(dataMap_1);
			submission_6.addResponseData(dataSet_1, false);
			if(typeof onDeleteBoardSMSubmitError == "function") {
				submission_6.addEventListener("submit-error", onDeleteBoardSMSubmitError);
			}
			if(typeof onDeleteBoardSMSubmitSuccess == "function") {
				submission_6.addEventListener("submit-success", onDeleteBoardSMSubmitSuccess);
			}
			app.register(submission_6);
			
			var submission_7 = new cpr.protocols.Submission("insertReplySM");
			submission_7.method = "post";
			submission_7.action = "insertReply";
			submission_7.addRequestData(dataMap_6);
			submission_7.addRequestData(dataMap_1);
			submission_7.addResponseData(dataSet_4, false);
			if(typeof onInsertReplySMSubmitSuccess == "function") {
				submission_7.addEventListener("submit-success", onInsertReplySMSubmitSuccess);
			}
			app.register(submission_7);
			
			var submission_8 = new cpr.protocols.Submission("replyListSM");
			submission_8.method = "get";
			submission_8.action = "findReplyBoardByNo";
			submission_8.addRequestData(dataMap_1);
			submission_8.addResponseData(dataSet_4, false);
			submission_8.addResponseData(dataMap_8, false);
			if(typeof onReplyListSMSubmitSuccess == "function") {
				submission_8.addEventListener("submit-success", onReplyListSMSubmitSuccess);
			}
			app.register(submission_8);
			
			var submission_9 = new cpr.protocols.Submission("deleteReplySM");
			submission_9.method = "delete";
			submission_9.action = "deleteReply";
			submission_9.addRequestData(dataMap_7);
			submission_9.addResponseData(dataSet_4, false);
			if(typeof onDeleteReplySMSubmitSuccess == "function") {
				submission_9.addEventListener("submit-success", onDeleteReplySMSubmitSuccess);
			}
			app.register(submission_9);
			
			var submission_10 = new cpr.protocols.Submission("editReplySM");
			submission_10.method = "put";
			submission_10.action = "editReply";
			submission_10.addRequestData(dataSet_4);
			if(typeof onEditReplySMSubmitSuccess == "function") {
				submission_10.addEventListener("submit-success", onEditReplySMSubmitSuccess);
			}
			app.register(submission_10);
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
			var verticalLayout_1 = new cpr.controls.layouts.VerticalLayout();
			container.setLayout(verticalLayout_1);
			
			// UI Configuration
			var userDefinedControl_1 = new udc.logo();
			container.addChild(userDefinedControl_1, {
				"width": "239px",
				"height": "70px"
			});
			
			var group_1 = new cpr.controls.Container("grp2");
			var responsiveXYLayout_1 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_1.setLayout(responsiveXYLayout_1);
			(function(container){
				var output_1 = new cpr.controls.Output("titleOutput");
				output_1.style.css({
					"font-weight" : "bolder",
					"font-size" : "35px",
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "center"
				});
				output_1.bind("value").toDataSet(app.lookup("boardDetail"), "boardTitle", 0);
				container.addChild(output_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "0px",
							"width": "967px",
							"height": "58px",
							"left": "calc(50% - 483px)"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "0px",
							"width": "472px",
							"height": "58px",
							"left": "calc(50% - 236px)"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "0px",
							"width": "331px",
							"height": "58px",
							"left": "calc(50% - 165px)"
						}
					]
				});
				var output_2 = new cpr.controls.Output("createDateOutput");
				output_2.style.css({
					"font-weight" : "bold",
					"font-size" : "14px",
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "left"
				});
				output_2.bind("value").toDataSet(app.lookup("boardDetail"), "boardCreateDate", 0);
				container.addChild(output_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "57px",
							"left": "358px",
							"width": "150px",
							"height": "42px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "57px",
							"left": "175px",
							"width": "73px",
							"height": "42px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "57px",
							"left": "122px",
							"width": "51px",
							"height": "42px"
						}
					]
				});
				var grid_1 = new cpr.controls.Grid("dayGrd");
				grid_1.init({
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
								cell.bind("fieldLabel").toDataMap(app.lookup("planDM"), "planDate");
							}
						}]
					}
				});
				grid_1.style.css({
					"font-family" : "AppleSDGothicNeoB00"
				});
				if(typeof onGrd3CellClick == "function") {
					grid_1.addEventListener("cell-click", onGrd3CellClick);
				}
				container.addChild(grid_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "109px",
							"left": "20px",
							"width": "120px",
							"height": "375px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "109px",
							"left": "10px",
							"width": "59px",
							"height": "375px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "109px",
							"left": "7px",
							"width": "41px",
							"height": "375px"
						}
					]
				});
				var button_1 = new cpr.controls.Button("deleteBtn");
				button_1.visible = false;
				button_1.value = "삭제";
				button_1.style.css({
					"background-color" : "#98dde3",
					"border-radius" : "5px",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				if(typeof onButtonClick2 == "function") {
					button_1.addEventListener("click", onButtonClick2);
				}
				container.addChild(button_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "38px",
							"right": "0px",
							"width": "56px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "38px",
							"right": "0px",
							"width": "27px",
							"height": "20px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "38px",
							"right": "0px",
							"width": "19px",
							"height": "20px"
						}
					]
				});
				var output_3 = new cpr.controls.Output("idOutput");
				output_3.style.css({
					"font-weight" : "bold",
					"font-size" : "14px",
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "left"
				});
				output_3.bind("value").toDataSet(app.lookup("boardDetail"), "id", 0);
				container.addChild(output_3, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "57px",
							"left": "88px",
							"width": "150px",
							"height": "42px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "57px",
							"left": "43px",
							"width": "73px",
							"height": "42px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "57px",
							"left": "30px",
							"width": "51px",
							"height": "42px"
						}
					]
				});
				var grid_2 = new cpr.controls.Grid("selectedContentGrd");
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
								cell.text = "관광지 목록";
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
				grid_2.style.css({
					"font-family" : "AppleSDGothicNeoB00"
				});
				if(typeof onGrd4Click == "function") {
					grid_2.addEventListener("click", onGrd4Click);
				}
				container.addChild(grid_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "109px",
							"left": "150px",
							"width": "150px",
							"height": "375px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "109px",
							"left": "73px",
							"width": "73px",
							"height": "375px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "109px",
							"left": "51px",
							"width": "51px",
							"height": "375px"
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
							"top": "109px",
							"right": "20px",
							"left": "310px",
							"height": "375px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "109px",
							"right": "10px",
							"left": "151px",
							"height": "375px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "109px",
							"right": "7px",
							"left": "106px",
							"height": "375px"
						}
					]
				});
				var button_2 = new cpr.controls.Button("editBtn");
				button_2.visible = false;
				button_2.value = "수정";
				button_2.style.css({
					"background-color" : "#98dde3",
					"border-radius" : "5px",
					"border-right-style" : "none",
					"background-repeat" : "no-repeat",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-family" : "AppleSDGothicNeoEB00",
					"border-bottom-style" : "none",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				if(typeof onButtonClick == "function") {
					button_2.addEventListener("click", onButtonClick);
				}
				container.addChild(button_2, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "0px",
							"right": "0px",
							"width": "58px",
							"height": "20px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "0px",
							"right": "0px",
							"width": "28px",
							"height": "20px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "0px",
							"right": "0px",
							"width": "20px",
							"height": "20px"
						}
					]
				});
				var output_4 = new cpr.controls.Output();
				output_4.value = "작성자 : ";
				output_4.style.css({
					"font-weight" : "bold",
					"font-size" : "14px",
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "right"
				});
				container.addChild(output_4, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "57px",
							"left": "29px",
							"width": "60px",
							"height": "42px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "57px",
							"left": "14px",
							"width": "29px",
							"height": "42px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "57px",
							"left": "10px",
							"width": "21px",
							"height": "42px"
						}
					]
				});
				var output_5 = new cpr.controls.Output();
				output_5.value = "작성일 : ";
				output_5.style.css({
					"font-weight" : "bold",
					"font-size" : "14px",
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "right"
				});
				container.addChild(output_5, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "57px",
							"left": "259px",
							"width": "100px",
							"height": "42px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "57px",
							"left": "126px",
							"width": "49px",
							"height": "42px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "57px",
							"left": "89px",
							"width": "34px",
							"height": "42px"
						}
					]
				});
			})(group_1);
			container.addChild(group_1, {
				"autoSize": "none",
				"width": "1024px",
				"height": "489px"
			});
			
			var group_2 = new cpr.controls.Container("boardContentGrp");
			group_2.style.css({
				"border-right-style" : "solid",
				"border-bottom-color" : "#e1e1e1",
				"border-left-style" : "solid",
				"border-left-color" : "#e1e1e1",
				"border-top-color" : "#e1e1e1",
				"border-bottom-style" : "solid",
				"border-right-color" : "#e1e1e1",
				"border-top-style" : "solid"
			});
			var verticalLayout_2 = new cpr.controls.layouts.VerticalLayout();
			group_2.setLayout(verticalLayout_2);
			(function(container){
				var hTMLSnippet_1 = new cpr.controls.HTMLSnippet("snippet");
				container.addChild(hTMLSnippet_1, {
					"autoSize": "height",
					"width": "900px",
					"height": "120px"
				});
			})(group_2);
			container.addChild(group_2, {
				"autoSize": "both",
				"width": "900px",
				"height": "128px",
				"minWidth": 900
			});
			
			var group_3 = new cpr.controls.Container("grp3");
			var responsiveXYLayout_2 = new cpr.controls.layouts.ResponsiveXYLayout();
			group_3.setLayout(responsiveXYLayout_2);
			(function(container){
				var inputBox_1 = new cpr.controls.InputBox("replyContentIpb");
				inputBox_1.style.css({
					"font-family" : "AppleSDGothicNeoB00",
					"text-align" : "left"
				});
				inputBox_1.bind("value").toDataMap(app.lookup("replyDM"), "REPLY_CONTENT");
				container.addChild(inputBox_1, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "0px",
							"left": "10px",
							"width": "860px",
							"height": "40px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "0px",
							"left": "5px",
							"width": "420px",
							"height": "40px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "0px",
							"left": "3px",
							"width": "294px",
							"height": "40px"
						}
					]
				});
				var button_3 = new cpr.controls.Button("replyRegisterBtn");
				button_3.value = "댓글 등록";
				button_3.style.css({
					"background-color" : "#98dde3",
					"border-right-style" : "none",
					"text-shadow" : "none",
					"color" : "#FFFFFF",
					"border-left-style" : "none",
					"font-size" : "18px",
					"border-bottom-style" : "none",
					"font-family" : "AppleSDGothicNeoB00",
					"background-image" : "none",
					"border-top-style" : "none"
				});
				if(typeof onButtonClick3 == "function") {
					button_3.addEventListener("click", onButtonClick3);
				}
				container.addChild(button_3, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "0px",
							"left": "880px",
							"width": "120px",
							"height": "40px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "0px",
							"left": "430px",
							"width": "59px",
							"height": "40px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "0px",
							"left": "301px",
							"width": "41px",
							"height": "40px"
						}
					]
				});
				var grid_3 = new cpr.controls.Grid("replyGrd");
				grid_3.init({
					"dataSet": app.lookup("boardReply"),
					"autoRowHeight": "all",
					"resizableColumns": "none",
					"clickMode": "edit",
					"columns": [
						{
							"width": "85px",
							"visible": false
						},
						{"width": "85px"},
						{"width": "395px"},
						{"width": "131px"},
						{
							"width": "37px",
							"visible": true
						},
						{
							"width": "41px",
							"visible": true
						}
					],
					"header": {
						"rows": [{"height": "24px"}],
						"cells": [
							{
								"constraint": {"rowIndex": 0, "colIndex": 0},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = true;
									cell.targetColumnName = "replyNo";
									cell.text = "댓글번호";
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "replyId";
									cell.text = "아이디";
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "replyContent";
									cell.text = "내용";
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.filterable = false;
									cell.sortable = false;
									cell.targetColumnName = "replyDate";
									cell.text = "댓글 등록 날짜";
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.text = "";
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.style.css({
										"border-right-style" : "none",
										"background-color" : "#F8F8F8",
										"border-left-style" : "none"
									});
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
									cell.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none"
									});
									cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyNo", 0);
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 1},
								"configurator": function(cell){
									cell.columnName = "replyId";
									cell.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none"
									});
									cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyId", 0);
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 2},
								"configurator": function(cell){
									cell.columnName = "replyContent";
									cell.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none"
									});
									cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyContent", 0);
									cell.control = (function(){
										var inputBox_2 = new cpr.controls.InputBox("ipb2");
										inputBox_2.style.css({
											"font-family" : "AppleSDGothicNeoB00",
											"text-align" : "center"
										});
										inputBox_2.bind("readOnly").toExpression("replyId != #MemberVO.id ? true : false");
										inputBox_2.bind("value").toDataColumn("replyContent");
										return inputBox_2;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 3},
								"configurator": function(cell){
									cell.columnName = "replyDate";
									cell.style.css({
										"border-right-style" : "none",
										"border-left-style" : "none"
									});
									cell.bind("fieldLabel").toDataSet(app.lookup("boardReply"), "replyDate", 0);
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 4},
								"configurator": function(cell){
									cell.style.css({
										"border-right-style" : "none",
										"border-radius" : "50px",
										"background-color" : "#FFFFFF",
										"border-left-style" : "none",
										"border-bottom-style" : "none",
										"background-image" : "none",
										"border-top-style" : "none",
										"padding-right" : "5px"
									});
									cell.control = (function(){
										var button_4 = new cpr.controls.Button("replyEdit");
										button_4.value = "댓글 수정";
										button_4.style.css({
											"background-color" : "#98dde3",
											"border-radius" : "50px",
											"text-shadow" : "none",
											"color" : "#FFFFFF",
											"background-image" : "none"
										});
										button_4.bind("visible").toExpression("replyId == #MemberVO.id ? true : false");
										if(typeof onReplyEditClick == "function") {
											button_4.addEventListener("click", onReplyEditClick);
										}
										return button_4;
									})();
									cell.controlConstraint = {};
								}
							},
							{
								"constraint": {"rowIndex": 0, "colIndex": 5},
								"configurator": function(cell){
									cell.style.css({
										"border-right-style" : "none",
										"border-radius" : "50px",
										"background-color" : "#FFFFFF",
										"border-left-style" : "none",
										"border-bottom-style" : "none",
										"background-image" : "none",
										"border-top-style" : "none"
									});
									cell.control = (function(){
										var button_5 = new cpr.controls.Button("replyDelete");
										button_5.value = "댓글 삭제";
										button_5.style.css({
											"background-color" : "#98dde3",
											"border-radius" : "50px",
											"text-shadow" : "none",
											"color" : "#FFFFFF",
											"background-image" : "none"
										});
										button_5.bind("visible").toExpression("replyId == #MemberVO.id ? true : false");
										if(typeof onButtonClick4 == "function") {
											button_5.addEventListener("click", onButtonClick4);
										}
										return button_5;
									})();
									cell.controlConstraint = {};
								}
							}
						]
					}
				});
				grid_3.style.css({
					"font-family" : "AppleSDGothicNeoB00"
				});
				container.addChild(grid_3, {
					positions: [
						{
							"media": "all and (min-width: 1024px)",
							"top": "52px",
							"right": "0px",
							"left": "0px",
							"height": "265px"
						}, 
						{
							"media": "all and (min-width: 500px) and (max-width: 1023px)",
							"top": "52px",
							"right": "0px",
							"left": "0px",
							"height": "265px"
						}, 
						{
							"media": "all and (max-width: 499px)",
							"top": "52px",
							"right": "0px",
							"left": "0px",
							"height": "265px"
						}
					]
				});
			})(group_3);
			container.addChild(group_3, {
				"autoSize": "none",
				"width": "1024px",
				"height": "337px"
			});
			if(typeof onBodyLoad == "function"){
				app.addEventListener("load", onBodyLoad);
			}
		}
	});
	app.title = "플랜 게시판 상세보기";
	cpr.core.Platform.INSTANCE.register(app);
})();
