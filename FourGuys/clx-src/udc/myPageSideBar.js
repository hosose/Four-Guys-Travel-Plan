/************************************************
 * myPageSideBar.js
 * Created at 2023. 8. 4. 오후 3:21:32.
 *
 * @author USER
 ************************************************/

/**
 * UDC 컨트롤이 그리드의 뷰 모드에서 표시할 텍스트를 반환합니다.
 */
exports.getText = function(){
	return "";
};

/*
 * "MYPAGE" 버튼(MyPageBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onMyPageBtnClick(e){
	var myPageBtn = e.control;
	location.href="mypage";
}

/*
 * "MYPLAN" 버튼(MyPlanBtn)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onMyPlanBtnClick(e){
	var myPlanBtn = e.control;
	location.href="myplan";
}
