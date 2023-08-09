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
function f_onCopyRow() {
    // 소스(Source) 그리드의 선택된 행(Row)의 데이터를 타겟(Target) 그리드로 복사한다.
    // 단, 복사할려는 데이터가 타겟 그리드에 이미 존재하는 경우에는 복사하지 않는다.(중복 복사 방지)
    util.Grid.copyToGridData(app, "grd2", "grd1");
}
* /

