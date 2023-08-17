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
	var plannerGrd = app.lookup("grd1");
	var plannerNo = plannerGrd.getSelectedRow().getValue("plannerNo");
	app.close(plannerNo);
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	app.lookup("getPlannerSM").send();
}
