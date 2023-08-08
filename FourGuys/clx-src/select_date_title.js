/************************************************
 * 3.Dialog_Popup.js
 * Created at 2021. 3. 29. 오후 3:05:35.
 *
 * @author csj
 ************************************************/

/*
 * "플래너 만들기" 버튼(createBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onCreateBtnClick(e) {
	var createBtn = e.control;
	var startDate = app.lookup("dti1").dateValue;
	var endDate = app.lookup("dti2").dateValue;
	const travelDate = (endDate - startDate)/(1000*60*60*24)+1
	app.close(travelDate);
}