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
	
}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e){
	var button = e.control;
	
}
