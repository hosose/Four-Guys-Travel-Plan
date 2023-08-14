package org.kosta.fourguys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.kosta.fourguys.service.PlannerBoardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

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
		System.out.println(plannerBoardNo);
		plannerBoardService.findPlannerBoardByNo(plannerBoardNo);
		dataRequest.setResponse("boardDetail", plannerBoardService.findPlannerBoardByNo(plannerBoardNo));
		return new JSONDataView();
	}
}
