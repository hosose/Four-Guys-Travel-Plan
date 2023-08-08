/************************************************
 * register.js
 * Created at 2023. 8. 4. 오후 3:28:09.
 *
 * @author USER
 ************************************************/

/*
 * "회원등록" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(e){
	var btn2 = e.control;
	var submission = app.lookup("sms1");
	var dataSet = app.lookup("Member");
	submission.send();
	alert("회원가입이 완료되었습니다.");
	location.href="/";
}
