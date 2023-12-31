package org.kosta.fourguys.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.PlannerBoardService;
import org.kosta.fourguys.service.PlannerService;
import org.kosta.fourguys.vo.MemberVO;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.web.bind.annotation.DeleteMapping;
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
		boolean success = false;
		HttpSession session = request.getSession(false);
		MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
		ParameterGroup plannerBoardNoDM = dataRequest.getParameterGroup("plannerBoardNoDM");
		int plannerBoardNo = Integer.parseInt(plannerBoardNoDM.getValue("BOARD_NO"));
		Map<String, Object> initParam = new HashMap<>();
		List<PlannerBoardVO> result = plannerBoardService.findPlannerBoardByNo(plannerBoardNo);
		if (result != null) {
			session = request.getSession(true);
			session.setAttribute("memberVO", memberVO);
			initParam.put("MemberVO", memberVO);
			success = true;
		}
		dataRequest.setResponse("boardDetail", plannerBoardService.findPlannerBoardByNo(plannerBoardNo));
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}

	@PutMapping("updateBoard")
	public View updateBoard(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		ParameterGroup updateParam = dataRequest.getParameterGroup("boardDetail");
		String plannerBoardTitle = updateParam.getValue("boardTitle");
		String plannerBoardContent = updateParam.getValue("boardContent");
		int plannerBoardNo = Integer.parseInt(updateParam.getValue("boardNo"));
		PlannerBoardVO plannerBoardVO = new PlannerBoardVO();
		plannerBoardVO.setBoardContent(plannerBoardContent);
		plannerBoardVO.setBoardTitle(plannerBoardTitle);
		plannerBoardVO.setBoardNo(plannerBoardNo);
		plannerBoardVO.setId(id);
		plannerBoardService.updateBoard(plannerBoardVO);
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

	@GetMapping("/boardDetailPage/{boardNo}")
	public View getBoardDetailPage(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
		return new UIView("plannerBoardDetail.clx");
	}

	@GetMapping("/updateBoardForm/{boardNo}")
	public View updateBoardPage(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
		return new UIView("updateBoardForm.clx");
	}

	@GetMapping("/createPlannerBoardForm")
	public View createPlannerBoardForm(DataRequest dataRequest, HttpServletResponse response,
			HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
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

	@PostMapping("/increaseBoardHits")
	public View increaseBoardHits(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("memberVO") == null) {
			String uri = "login.clx";
			return new UIView(uri);
		} else {
			ParameterGroup boardNoParam = dataRequest.getParameterGroup("plannerBoardNoDM");
			int boardNo = Integer.parseInt(boardNoParam.getValue("BOARD_NO"));
			@SuppressWarnings("unchecked")
			ArrayList<Integer> plannerBoardNoList = (ArrayList<Integer>) session.getAttribute("plannerBoardNoList");
			if (plannerBoardNoList == null) {
				plannerBoardNoList = new ArrayList<>();
			}
			if (!plannerBoardNoList.contains(boardNo)) {
				plannerBoardService.increaseBoardHits(boardNo);
				plannerBoardNoList.add(boardNo);
				session.setAttribute("plannerBoardNoList", plannerBoardNoList);
			}
		}
		return new JSONDataView();
	}

	@DeleteMapping("deleteBoard")
	public View deleteBoard(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerBoardNoDM");
		int boardNo = Integer.parseInt(plannerNoParam.getValue("BOARD_NO"));
		PlannerBoardVO plannerBoardVO = new PlannerBoardVO();
		plannerBoardVO.setBoardNo(boardNo);
		plannerBoardService.deleteBoard(plannerBoardVO);
		return new JSONDataView();
	}
}