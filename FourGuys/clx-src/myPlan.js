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