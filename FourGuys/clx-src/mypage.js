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
	var PASSWORD = app.lookup("PASSWORD");
	var NAME = app.lookup("NAME");
	var ADDR = app.lookup("ADDR");
	var PHONE = app.lookup("PHONE");
	let strengthBadge = app.lookup("password_check");
	if(PASSWORD.value.trim() == "") {
		alert("비밀번호를 입력해주세요");
		PASSWORD.focus();
	}else if(NAME.value.trim() == "") {
		alert("이름을 입력해주세요");
		NAME.focus();
	}else if(ADDR.value.trim() == "") {
		alert("주소을 입력해주세요");
		ADDR.focus();
	}else if(PHONE.value.trim() == "") {
		alert("휴대폰 번호를 입력해주세요");
		PHONE.focus();
	}else if(strengthBadge.value=="Weak"){
		alert("비밀번호를 다시 입력해주세요.");
		PASSWORD.focus();
	}else{
		updateMember();
	}
	
}
function updateMember(){
	var submission = app.lookup("updateMember");
	submission.send();
}

function StrengthChecker(PasswordParameter) {
	let strengthBadge = app.lookup("password_check");
	let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
	let mediumPassword = new RegExp('(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{8,}');
	if (strongPassword.test(PasswordParameter)) {
		strengthBadge.style.css("background-color",  "green");
		strengthBadge.style.css("color","white");
		strengthBadge.value="Strong";
		strengthBadge.redraw();
	} else if (mediumPassword.test(PasswordParameter)) {
		strengthBadge.style.css("background-color",  "blue");
		strengthBadge.style.css("color","white");
		strengthBadge.value = 'Medium';
		strengthBadge.redraw();
	} else {
		strengthBadge.style.css("background-color",  "red");
		strengthBadge.style.css("color","white");
		strengthBadge.value = 'Weak';
		strengthBadge.redraw();
  }
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onFindMyPageSubmitSuccess(e){
	var findMyPage = e.control;
	var meta = findMyPage.getMetadata("memberVO");
	if(meta != null){
		var ID = app.lookup("ID");
		var passwd = app.lookup("PASSWORD");
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
		location.href="";
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onUpdateMemberSubmitSuccess(e){
	var updateMember = e.control;
	alert("수정되었습니다.");
	location.href="";
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

/*
 * "계정 탈퇴" 버튼(btn1)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function ondeleteBtnClick(e){
	var deleteBtn = e.control;
	var intro = "탈퇴 하시겠습니까?"
	var initValue = {
		"msg": intro
	}
	app.openDialog("deleteMember", {
		width: 400,
		height: 150,
		headerVisible: false
	}, function(dialog) {
		dialog.ready(function(dialogApp) {
			// 필요한 경우, 다이얼로그의 앱이 초기화 된 후, 앱 속성을 전달하십시오.
			dialogApp.initValue = initValue;
		});
	}).then(function(returnValue) {
		alert(JSON.stringify(returnValue));
	});
}

/*
 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
 * 변경된 value가 저장된 후에 발생하는 이벤트.
 */
function onID(e){
	var iD = e.control;
	alert("아이디는 수정이 불가능 합니다.");
}

/*
 * 데이트 인풋에서 value-change 이벤트 발생 시 호출.
 * Dateinput의 value를 변경하여 변경된 값이 저장된 후에 발생하는 이벤트.
 */
function onBIRTH(e){
	var bIRTH = e.control;
	alert("생일은 수정이 불가능 합니다.");
}

/*
 * 인풋 박스에서 value-change 이벤트 발생 시 호출.
 * 변경된 value가 저장된 후에 발생하는 이벤트.
 */
function onEMAIL(e){
	var eMAIL = e.control;
	alert("이메일은 수정이 불가능 합니다.");
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onPASSWORDBlur(e){
	var pASSWORD = e.control;
	var ipb_password_lookUp = app.lookup("PASSWORD");
	var passwordOutput = app.lookup("password_output");
	let strengthBadge = app.lookup("password_check");
	StrengthChecker(ipb_password_lookUp.value);
	if (ipb_password_lookUp.value.length < 8) {
		alert("비밀번호는 8자이상으로 작성해주세요");
		passwordOutput.value = "비밀번호는 8자이상으로 작성해주세요";
		ipb_password_lookUp.focus();
	}else if(strengthBadge.value=="Weak"){
		passwordOutput.value="1개이상의 특수문자가 필요합니다.";
	} else {
		passwordOutput.value = " ";
	}
}
/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onNAMEBlur(e){
	var NAME = e.control;
	var ipb_name_lookUp = app.lookup("NAME");
	var nameOutput = app.lookup("name__output");
	if (ipb_name_lookUp.value.trim() == "") {
		nameOutput.value = "이름은 필수로 작성해주세요";
	} else {
		nameOutput.value = " ";
	}
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onADDRBlur(e){
	var aDDR = e.control;
	var ipb_address_lookUp = app.lookup("ADDR");
	var addressOutput = app.lookup("addr__output");
	if (ipb_address_lookUp.value.trim() == "") {
		addressOutput.value = "주소는 필수로 작성해주세요";
	} else {
		addressOutput.value = " ";
	}
}

/*
 * 마스크 에디터에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onPHONEBlur(e){
	var pHONE = e.control;
	var mse_phone_lookUp = app.lookup("PHONE");
	var phoneOutput = app.lookup("phone__output");
	if (mse_phone_lookUp.value.trim() == "") {
		phoneOutput.value = "핸드폰 번호는 필수로 작성해주세요";
	} else {
		phoneOutput.value = " ";
	}
}
