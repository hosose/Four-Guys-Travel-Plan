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
	var submission = app.lookup("createPlanner");
	var startDate = app.lookup("dti1").dateValue;
	var endDate = app.lookup("dti2").dateValue;
	if (startDate==null||endDate==null){
		alert("날짜를 선택해주세요");
		return false;
		
	}
		submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCreatePlannerSubmitSuccess(e) {
	var createPlanner = e.control;
	var responseData = createPlanner.getMetadata("plannerVO");
	app.close(responseData.plannerNo);
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDti1ValueChange(e) {
	var dti1 = e.control;
	var startDateInput = app.lookup("dti1");
	var startDate = app.lookup("dti1").dateValue;
	var endDate = app.lookup("dti2").dateValue;
	if (endDate == null) {} else if (endDate < startDate) {
		alert("종료일보다 시작일이 늦습니다.");
		startDateInput.value = null;
	}
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onDti2ValueChange(e) {
	var dti2 = e.control;
	var endDateInput = app.lookup("dti2");
	var startDate = app.lookup("dti1").dateValue;
	var endDate = app.lookup("dti2").dateValue;
	if (endDate == null) {} else if (endDate < startDate) {
		alert("시작일보다 종료일이 빠릅니다.");
		endDateInput.value = null;
	}
}