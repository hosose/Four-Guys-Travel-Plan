/************************************************
 * mypage.js
 * Created at 2023. 8. 4. 오전 9:40:38.
 *
 * @author USER
 ************************************************/
/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var findMyPage = app.lookup("findMyPage");
	findMyPage.send();
}

/*
 * "수정하기" 버튼(btn2)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onBtn2Click(e){
	var btn2 = e.control;
	var submission = app.lookup("updateMember");
	submission.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onFindMyPageSubmitSuccess(e){
	var findMyPage = e.control;
	var meta = findMyPage.getMetadata("findMyPageis");
	if(meta != null){
		var ID = app.lookup("ID");
		var passwd = app.lookup("Pass");
		var ADDR = app.lookup("ADDR");
		var BIRTH = app.lookup("BIRTH");
		var NAME = app.lookup("NAME");
		var EMAIL = app.lookup("EMAIL");
		var PHONE = app.lookup("PHONE");
		ID.value=meta["id"];
		passwd.value=meta["password"];
		ADDR.value=meta["address"];
		BIRTH.value=meta["birth"];
		EMAIL.value=meta["email"];
		PHONE.value=meta["phone"];
		NAME.value=meta["name"];
	}else{
		alert("없다");
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateMemberSubmitSuccess(e){
	var updateMember = e.control;
	alert("수정되었습니다.");
	location.href="/";
}

/*
 * 서브미션에서 submit-error 이벤트 발생 시 호출.
 * 통신 중 문제가 생기면 발생합니다.
 */
function onUpdateMemberSubmitError(e){
	var updateMember = e.control;
	var msg = updateMember.getMetadata("message");
	if (msg != null) {
		alert(msg);
	}
}
