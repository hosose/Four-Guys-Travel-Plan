package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.PlannerBoardService;
import org.kosta.fourguys.vo.MemberVO;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.web.bind.annotation.GetMapping;
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
}
