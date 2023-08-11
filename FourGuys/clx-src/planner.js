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
 * 그리드에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onGrd2Click(e){
	var grd2 = e.control;
	var grid = app.lookup("grd2");
	var embp = app.lookup("ep1");
	var mapx = grid.getSelectedRow().getValue("mapx");
	var mapy = grid.getSelectedRow().getValue("mapy");
	var title = grid.getSelectedRow().getValue("title");
	var embp_mapx = embp.setPageProperty("mapx",mapx);
	var embp_mapy = embp.setPageProperty("mapy",mapy);
	var embp_title = embp.setPageProperty("title",title);
	embp.callPageMethod("panTo");
}