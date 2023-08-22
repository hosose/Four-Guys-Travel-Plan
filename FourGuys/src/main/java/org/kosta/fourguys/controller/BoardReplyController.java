package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.ReplyService;
import org.kosta.fourguys.vo.MemberVO;
import org.kosta.fourguys.vo.ReplyVO;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BoardReplyController {
	private final ReplyService replyService;

	@PostMapping("insertReply")
	public View insertReply(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		ParameterGroup plannerBoardNoDM = dataRequest.getParameterGroup("plannerBoardNoDM");
		ParameterGroup replyDM = dataRequest.getParameterGroup("replyDM");
		int boardNo = Integer.parseInt(plannerBoardNoDM.getValue("BOARD_NO"));
		String replyContent = replyDM.getValue("REPLY_CONTENT");
		String replyDate = replyDM.getValue("REPLY_DATE");
		ReplyVO reply = new ReplyVO();
		reply.setBoardNo(boardNo);
		reply.setReplyContent(replyContent);
		reply.setId(id);
		reply.setReplyDate(replyDate);
		dataRequest.setResponse("boardReply", replyService.insertReply(reply));
		return new JSONDataView();
	}

	@GetMapping("findReplyBoardByNo")
	public View findReplyBoardByNo(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerBoardNoDM = dataRequest.getParameterGroup("plannerBoardNoDM");
		int boardNo = Integer.parseInt(plannerBoardNoDM.getValue("BOARD_NO"));
		boolean success = true;
		HttpSession session = request.getSession(false);
		MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
		Map<String, Object> initParam = new HashMap<>();
		session = request.getSession(true);
		session.setAttribute("memberVO", memberVO);
		initParam.put("MemberVO", memberVO);
		dataRequest.setResponse("boardReply", replyService.findReplyByNo(boardNo));
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}

	@DeleteMapping("deleteReply")
	public View deleteReply(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup replyNoParam = dataRequest.getParameterGroup("replyBoardNoDM");
		int replyNo = Integer.parseInt(replyNoParam.getValue("REPLY_NO"));
		ReplyVO replyVO = new ReplyVO();
		replyVO.setReplyNo(replyNo);
		dataRequest.setResponse("boardReply", replyService.deleteReply(replyVO));
		return new JSONDataView();
	}
}
