package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.PlannerBoardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PlannerBoardController {
	private final PlannerBoardService plannerBoardService;

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
}
