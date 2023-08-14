/************************************************
 * register.js
 * Created at 2023. 8. 4. 오후 3:28:09.
 *
 * @author USER
 ************************************************/

/*
 * "회원등록" 버튼(register)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onRegisterClick(e) {
	var register = e.control;
	
	var id = app.lookup("ipb_id");
	var password = app.lookup("ipb_password");
	var name = app.lookup("ipb_name");
	var birth = app.lookup("dti_birth");
	var address = app.lookup("ipb_address");
	var email = app.lookup("ipb_email");
	var phone = app.lookup("mse_phone");
	var checkDuplicateId = app.lookup("checkDuplicateId");
	var checkCount = checkDuplicateId.getMetadata("checkCount");
	let strengthBadge = app.lookup("password_check");
	if (id.value.trim() == "") {
		alert("ID 값을 입력해주세요");
		id.focus();
	} else if (password.value.trim() == "") {
		alert("PASSWORD 값을 입력해주세요");
		password.focus();
	} else if (name.value.trim() == "") {
		alert("이름 값을 입력해주세요");
		name.focus();
	} else if (birth.value.trim() == "") {
		alert("생년월일을 입력해주세요");
		birth.focus();
	} else if (address.value.trim() == "") {
		alert("주소 값을 입력해주세요");
		address.focus();
	} else if (email.value.trim() == "") {
		alert("이메일 값을 입력해주세요");
		email.focus();
	} else if (phone.value.trim() == "") {
		alert("휴대폰 값을 입력해주세요");
		phone.focus();
	} else if (checkCount == null) {
		alert("중복확인을 눌러주세요");
	} else if (checkCount > 0) {
		alert("ID 가 중복됩니다. 중복을 확인해주세요.");
	}else if(!isEmail(email.value)){
		alert("이메일 형식에 맞게 입력해주세요");
		email.focus();
	}else if(strengthBadge.value=="Weak"){
		alert("PASSWORD 값을 다시 입력해주세요.");
		password.focus();
	} else {
		memberRegister();
	}
}

function memberRegister() {
	var subRegister = app.lookup("subRegister");
	subRegister.send();
}
function isEmail(asValue) {
	// 이메일 형식에 맞게 입력했는지 체크
	let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우에만 true 리턴
}
/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onSubRegisterSubmitSuccess(e) {
	var subRegister = e.control;
	
	var uri = subRegister.getMetadata("registerSuccess");
	
	if (uri != null) {
		alert("회원가입을 축하드립니다.");
		location.href = uri;
	}
	
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onIpb_idBlur(e) {
	var ipb_id = e.control;
	var ipb_id_lookUp = app.lookup("ipb_id");
	var idOutput = app.lookup("idOutput");
	if (ipb_id_lookUp.value.trim() == "") {
		idOutput.value = "id는 필수로 작성해주세요";
		
	} else {
		idOutput.value = " ";
		
	}
}
function StrengthChecker(PasswordParameter) {
	let password = app.lookup("ipb_password");
	let strengthBadge = app.lookup("password_check");
	var passwordOutput = app.lookup("passwordOutput");
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
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onIpb_passwordBlur(e) {
	var ipb_password = e.control;
	var ipb_password_lookUp = app.lookup("ipb_password");
	var passwordOutput = app.lookup("passwordOutput");
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
function onIpb_nameBlur(e) {
	var ipb_name = e.control;
	var ipb_name_lookUp = app.lookup("ipb_name");
	var nameOutput = app.lookup("nameOutput");
	if (ipb_name_lookUp.value.trim() == "") {
		nameOutput.value = "이름은 필수로 작성해주세요";
		
	} else {
		nameOutput.value = " ";
		
	}
}

/*
 * 데이트 인풋에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onDti_birthBlur(e) {
	var dti_birth = e.control;
	var dti_birth_lookUp = app.lookup("dti_birth");
	var birthOutput = app.lookup("birthOutput");
	if (dti_birth_lookUp.value.trim() == "") {
		birthOutput.value = "생년월일은 필수로 작성해주세요";
		
	} else {
		birthOutput.value = " ";
		
	}
	
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onIpb_addressBlur(e) {
	var ipb_address = e.control;
	var ipb_address_lookUp = app.lookup("ipb_address");
	var addressOutput = app.lookup("addressOutput");
	if (ipb_address_lookUp.value.trim() == "") {
		addressOutput.value = "주소는 필수로 작성해주세요";
		
	} else {
		addressOutput.value = " ";
		
	}
}

/*
 * 인풋 박스에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onIpb_emailBlur(e) {
	var ipb_email = e.control;
	var ipb_email_lookUp = app.lookup("ipb_email");
	var emailOutput = app.lookup("emailOutput");
	if (ipb_email_lookUp.value.trim() == "") {
		emailOutput.value = "이메일 주소는 필수로 작성해주세요";
	}else if(!isEmail(ipb_email_lookUp.value)){
		emailOutput.value = "이메일 형식에 맞게 작성해주세요";
	} else {
		emailOutput.value = " ";
		
	}
}

/*
 * 마스크 에디터에서 blur 이벤트 발생 시 호출.
 * 컨트롤이 포커스를 잃은 후 발생하는 이벤트.
 */
function onMse_phoneBlur(e) {
	var mse_phone = e.control;
	var mse_phone_lookUp = app.lookup("mse_phone");
	var phoneOutput = app.lookup("phoneOutput");
	if (mse_phone_lookUp.value.trim() == "") {
		phoneOutput.value = "핸드폰 번호는 필수로 작성해주세요";
		
	} else {
		phoneOutput.value = " ";
		
	}
	
}

/*
 * "중복확인" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var button = e.control;
	checkDuplicateId();
}

function checkDuplicateId() {
	var checkDuplicateId = app.lookup("checkDuplicateId");
	checkDuplicateId.send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onCheckDuplicateIdSubmitSuccess(e) {
	var checkDuplicateId = e.control;
	var checkCount = checkDuplicateId.getMetadata("checkCount");
	var idOutput = app.lookup("idOutput");
	var ipb_id = app.lookup("ipb_id");
	
	if (checkCount > 0) {
		alert("아이디가 중복됩니다.");
		idOutput.value = "아이디가 중복됩니다.";

	} else {
		alert("아이디를 생성할 수 있습니다.");
		idOutput.value = "";
	}
	
}

/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e){
	var birth = app.lookup("dti_birth");
	birth.maxDate = new Date();
}
