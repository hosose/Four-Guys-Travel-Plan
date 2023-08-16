package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.PlannerBoardService;
import org.kosta.fourguys.service.PlannerService;
import org.kosta.fourguys.vo.MemberVO;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PlannerBoardController {
	private final PlannerBoardService plannerBoardService;
	private final PlannerService plannerService;

	@GetMapping("/boardDetail")
	public View findPlannerBoardByNo(DataRequest dataRequest, HttpServletResponse response,
			HttpServletRequest request) {
		ParameterGroup plannerBoardDetailParam = dataRequest.getParameterGroup("plannerBoardNoDM");
		int plannerBoardNo = Integer.parseInt(plannerBoardDetailParam.getValue("BOARD_NO"));
		plannerBoardService.findPlannerBoardByNo(plannerBoardNo);
		dataRequest.setResponse("boardDetail", plannerBoardService.findPlannerBoardByNo(plannerBoardNo));
		return new JSONDataView();
	}

	@PutMapping("editBoard")
	public View editBoardById(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup editParam = dataRequest.getParameterGroup("editBoardDM");
		HttpSession session = request.getSession(false);
		PlannerBoardVO plannerBoardVO = new PlannerBoardVO();
		String plannerBoardTitle = editParam.getValue("boardTitle");
		String plannerBoardContent = editParam.getValue("boardContent");
		Map<String, Object> initParam = new HashMap<>();
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		plannerBoardVO.setBoardContent(plannerBoardContent);
		plannerBoardVO.setBoardTitle(plannerBoardTitle);
		plannerBoardService.editBoardById(plannerBoardVO);
		initParam.put("plannerBoardVO", plannerBoardVO);
		dataRequest.setMetadata(true, initParam);
		dataRequest.setResponse("plannerBoardVO", plannerBoardVO);
		return new JSONDataView();
	}

	@GetMapping("/getPlannerBoardList")
	public View getPlannerBoardList(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		Map<String, Object> initParam = new HashMap<>();
		if (session == null) {
			initParam.put("message", "로그인이 필요합니다.");
			dataRequest.setMetadata(false, initParam);
		} else {
			dataRequest.setResponse("plannerBoardList", plannerBoardService.getPlannerBoardList());
			dataRequest.setResponse("plannerBoardList2", plannerBoardService.getPlannerBoardList());
		}
		return new JSONDataView();
	}

	@GetMapping("/boardDetailPage/{plannerNo}")
	public View getBoardDetailPage(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		return new UIView("plannerBoardDetail.clx");

	}

	@GetMapping("/createPlannerBoardForm")
	public View createPlannerBoardForm(DataRequest dataRequest, HttpServletResponse response,
			HttpServletRequest request) {
		return new UIView("planner-board-form.clx");
	}

	@GetMapping("/getPlannerById")
	public View getPlannerById(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		dataRequest.setResponse("plannerVO", plannerService.getPlannerById(id));
		return new JSONDataView();
	}

	@PostMapping("/createPlannerBoard")
	public View createPlannerBoard(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String id = null;
		Map<String, Object> initParam = new HashMap<>();
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		ParameterGroup boardParam = dataRequest.getParameterGroup("boardDM");
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		String title = boardParam.getValue("title");
		String content = boardParam.getValue("content");
		String plannerNo = plannerNoParam.getValue("plannerNo");
		PlannerBoardVO boardVO = new PlannerBoardVO();
		boardVO.setBoardTitle(title);
		boardVO.setBoardContent(content);
		boardVO.setPlannerNo(Integer.parseInt(plannerNo));
		boardVO.setId(id);
		plannerBoardService.createPlannerBoard(boardVO);
		initParam.put("url", "planner-board-list.clx");
		dataRequest.setMetadata(true, initParam);
		return new JSONDataView();
	}

}
