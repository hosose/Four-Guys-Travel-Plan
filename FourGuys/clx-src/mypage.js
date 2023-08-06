/************************************************
 * mypage.js
 * Created at 2023. 8. 4. 오전 9:40:38.
 *
 * @author USER
 ************************************************/

/*
 * "패스워드변경" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn1Click(e){
	var btn1 = e.control;
	var submission = app.lookup("updatePassword");
	var inputBox = app.lookup("Pass");
	submission.getRequestData(inputBox.value);
	console.log(inputBox.value);
	submission.send();
	}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var submission = app.lookup("findMyPage");
	submission.send();
}

/*
 * "수정하기" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(e){
	var btn2 = e.control;
	var ADDR = app.lookup("ADDR").value;
	var BIRTH = app.lookup("BIRTH").value;
	var EMAIL = app.lookup("EMAIL").value;
	var PHONE = app.lookup("PHONE").value;
	var NAME = app.lookup("NAME").value;
	
	var submission = app.lookup("updateAll");
	submission.getRequestData(ADDR,BIRTH,EMAIL,NAME,PHONE);
	submission.send();
}
