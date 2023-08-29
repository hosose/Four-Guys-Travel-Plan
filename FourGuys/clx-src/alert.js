/************************************************
 * ALDT.js
 * Created at 2023. 8. 29. 오전 9:46:08.
 *
 * @author USER
 ************************************************/
/*
 * "닫기" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	app.close();
}

