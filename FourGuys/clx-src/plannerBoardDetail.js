/*
 * 루트 컨테이너에서 load 이벤트 발생 시 호출.
 * 앱이 최초 구성된후 최초 랜더링 직후에 발생하는 이벤트 입니다.
 */
function onBodyLoad(e) {
	var currentUrl = location.href;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	app.lookup("plannerBoardNoDM").setValue("BOARD_NO", boardNo);
	app.lookup("increaseHitsSM").send();
	app.lookup("boardDetailSM").send();
	app.lookup("replyListSM").send();
}

/*
 * 그리드에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onGrd4Click(e) {
	var grd4 = e.control;
	var grid = app.lookup("grd4");
	var embp = app.lookup("ep1");
	var mapx = grid.getSelectedRow().getValue("mapx");
	var mapy = grid.getSelectedRow().getValue("mapy");
	var title = grid.getSelectedRow().getValue("title");
	var firstimage = grid.getSelectedRow().getValue("firstimage");
	var embp_mapx = embp.setPageProperty("mapx",mapx);
	var embp_mapy = embp.setPageProperty("mapy",mapy);
	var embp_title = embp.setPageProperty("title",title);
	var embp_firstimage = embp.setPageProperty("firstimage",firstimage);
	embp.callPageMethod("panTo");
}



/*
 * 그리드에서 cell-click 이벤트 발생 시 호출.
 * Grid의 Cell 클릭시 발생하는 이벤트.
 */
function onGrd3CellClick(e) {
	var grd3 = e.control;
	var grid = app.lookup("grd3");
	var planDate = grid.getSelectedRow().getValue("planDate");
	app.lookup("createPlanDM").setValue("planDate", planDate);
	app.lookup("getTitle").send();
}

/*
 * "수정" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e) {
	var currentUrl = location.href;
	var button = e.control;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	location.href="updateBoardForm/"+boardNo;

}

/*
 * "삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick2(e) {
	var button = e.control;
	var currentUrl = location.href;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	if(!confirm("삭제하시겠습니까?")){
		alert("취소되었습니다")
		location.href="boardDetailPage/"+boardNo;
	}else{
		app.lookup("deleteBoardSM").send();
		alert("삭제되었습니다");
		location.href="planner-board-list.clx";
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onBoardDetailSMSubmitSuccess2(e) {
	var boardDetailSM = e.control;
	var plannerNo = app.lookup("grd1").getRow(0).getValue("plannerNo");
	app.lookup("plannerNoDM").setValue("plannerNo", plannerNo);
	app.lookup("getDay").send();
	var vo = boardDetailSM.getMetadata("MemberVO");
	var editBtn = app.lookup("editBtn");
	var deleteBtn = app.lookup("deleteBtn");
	var grid = app.lookup("grd1");
	var value = grid.getRow(0).getValue("replyId");
	if(vo["replyId"]==value){
		editBtn.visible = true;
		deleteBtn.visible=true;
	}
	app.lookup("snippet").value = app.lookup("boardDetail").getValue(0, "boardContent");
}

/*
 * "댓글 등록" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick3(e) {
	var button = e.control;
	app.lookup("insertReplySM").send();
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onInsertReplySMSubmitSuccess(e) {
	var insertReplySM = e.control;
	var currentUrl = location.href;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	location.href = "boardDetailPage/" + boardNo;
}

/*
 * "댓글 삭제" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick4(e) {
	var button = e.control;
	var currentUrl = location.href;
	var boardNo = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
	if (!confirm("삭제하시겠습니까?")) {
		alert("취소되었습니다");
	} else {
		var replyNo = app.lookup("grd5").getSelectedRow().getValue("replyNo");
		app.lookup("replyBoardNoDM").setValue("REPLY_NO", replyNo);
		app.lookup("deleteReplySM").send();
		alert("삭제되었습니다");
		location.href="boardDetailPage/"+boardNo;
	}
}

/*
 * 서브미션에서 submit-success 이벤트 발생 시 호출.
 * 통신이 성공하면 발생합니다.
 */
function onDeleteReplySMSubmitSuccess(e){
	var deleteReplySM = e.control;
	var boardDetailSM = e.control;
	var replyNo = app.lookup("grd5").getRow(0).getValue("replyNo");
	app.lookup("replyBoardNoDM").setValue("replyNo", replyNo);
}

/*
 * "댓글 수정" 버튼(replyEdit)에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onReplyEditClick(e){
	var replyEdit = e.control;
//	app.openDialog("replyEdit", {width : 800, height : 300}, function(dialog){
//		dialog.ready(function(dialogApp){
//			
//		});
//	}).then(function(returnValue){
//		;
//	});
	if (confirm("수정하시겠습니까?")){
		app.lookup("editReplySM").send();
		location.reload();
	}
}
