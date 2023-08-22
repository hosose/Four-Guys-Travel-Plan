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
function onBodyLoad(e) {
	
	var currentUrl = location.href;
	var plannerNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	
	app.lookup("plannerNoDM").setValue("plannerNo", plannerNo);
	app.lookup("planDetail").send();
	app.lookup("searchbtn").click();
	app.lookup("getContentIdList").send();
	
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
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onGetDaySubmitSuccess(e) {
	var getDay = e.control;
	var grid = app.lookup("selectedContentGrd");
	grid.selectRows([0]);
	//app.lookup("planDateOutput").value=1;
	app.lookup("planDM").setValue("planDate", 1);
	
}

/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd3CellClick(e) {
	var grd3 = e.control;
	var grid = app.lookup("dayGrd");
	//var plannerNo = app.lookup("plannerNo").value;
	var planDate = grid.getSelectedRow().getValue("planDate");
	//app.lookup("planDateOutput").value=planDate;
	app.lookup("planDM").setValue("planDate", planDate);
	app.lookup("getTitle").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onPlanDetailSubmitSuccess(e) {
	var planDetail = e.control;
	app.lookup("getDay").send();
	
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
 * 그리드에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onGrd2Click(e) {
	var grd2 = e.control;
	
	var grid = app.lookup("contentGrd");
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
 * 그리드에서 row-check 이벤트 발생 시 호출.
 * Grid의 행 선택 컬럼(columnType=checkbox)이 체크 되었을 때 발생하는 이벤트.
 */
function onGrd2RowCheck(e) {
	var grd2 = e.control;
	var grid = app.lookup("contentGrd");
	var contentId = grid.getSelectedRow().getValue("contentid");
	app.lookup("planDM").setValue("contentid", contentId);
	app.lookup("createPlan").send();
	
}

/*
 * 그리드에서 row-uncheck 이벤트 발생 시 호출.
 * Grid의 행 선택 컬럼(columnType=checkbox)이 체크 해제되었을 때 발생하는 이벤트.
 */
function onGrd2RowUncheck(e) {
	var grd2 = e.control;
	var contentId = grd2.getSelectedRow().getValue("contentid");
	app.lookup("planDM").setValue("contentid", contentId);
	app.lookup("deletePlan").send();
	
}

/*
 * 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	app.lookup("savePlanner").send();
	alert("수정되었습니다");
	location.href = "/myplan";
}

/*
 * 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	app.lookup("cancelPlanner").send();
	alert("취소되었습니다");
	location.href = "selectDestinationForm";
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onAreaListSubmitSuccess(e) {
	var areaList = e.control;
	var grid = app.lookup("contentGrd")
	var plannerDetail = app.lookup("plannerDetail");
	var list = [];
	for (let i = 0; i < plannerDetail.getRowCount(); i++) {
		var contentId = plannerDetail.getRow(i).getValue("contentId");
		list.push(contentId);
		
	}
	for (var j = 0; j < grid.getRowCount(); j++) {
		var contentIdd = grid.getRow(j).getValue("contentid");
		//console.log(contentIdd);
		if (list.indexOf(contentIdd) != -1) {
			grid.setCheckRowIndex(j, true);
		}
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onGetContentIdListSubmitSuccess(e) {
	var getContentIdList = e.control;
	var grd2 = app.lookup("contentGrd");
	for (var i = 0; i < grd2.getRowCount(); i++) {
		var contentIdd = grd2.getRow(i).getValue("contentid");
		
	}
	
}