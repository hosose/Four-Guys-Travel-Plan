package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.PlanService;
import org.kosta.fourguys.service.PlannerService;
import org.kosta.fourguys.vo.MemberVO;
import org.kosta.fourguys.vo.PlanVO;
import org.kosta.fourguys.vo.PlannerVO;
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
public class PlannerController {
	private final PlannerService plannerService;
	private final PlanService planService;

	@GetMapping("/plannerForm")
	public View plannerForm(HttpServletResponse response, HttpServletRequest request) {
		String uri = "planner.clx";
		return new UIView(uri);
	}

	@PostMapping("/createPlanner")
	public View createPlanner(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerParam = dataRequest.getParameterGroup("plannerDM");
		HttpSession session = request.getSession(false);
		PlannerVO plannerVO = new PlannerVO();
		String id = null;
		Map<String, Object> initParam = new HashMap<>();
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		String plannerTitle = plannerParam.getValue("plannerTitle");
		String plannerStartDate = plannerParam.getValue("plannerStartDate");
		String plannerLastDate = plannerParam.getValue("plannerLastDate");
		plannerVO.setId(id);
		plannerVO.setPlannerTitle(plannerTitle);
		plannerVO.setPlannerStartDate(plannerStartDate);
		plannerVO.setPlannerLastDate(plannerLastDate);
		plannerService.createPlanner(plannerVO);
		planService.createPlans(plannerVO.getPlannerNo());
		initParam.put("plannerVO", plannerVO);
		dataRequest.setMetadata(true, initParam);
		dataRequest.setResponse("plannerVO", plannerVO);
		return new JSONDataView();
	}

	@GetMapping("/getDay")
	public View getDay(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		dataRequest.setResponse("planDate", planService.getDayByPlannerNo(plannerNo));
		return new JSONDataView();
	}

	@PostMapping("/createPlan")
	public View createPlan(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		ParameterGroup createPlanParam = dataRequest.getParameterGroup("createPlanDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String contentId = createPlanParam.getValue("contentid");
		String planDate = createPlanParam.getValue("planDate");
		PlanVO plan = new PlanVO();
		plan.setPlanDate(Integer.parseInt(planDate));
		plan.setPlannerNo(plannerNo);
		plan.setContentId(Integer.parseInt(contentId));
		planService.createPlan(plan);
		dataRequest.setResponse("selectedPlan", planService.getPlansByDate(plan));
		return new JSONDataView();
	}

	@GetMapping("selectPlansByDate")
	public View selectPlansByDate(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		ParameterGroup createPlanParam = dataRequest.getParameterGroup("createPlanDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String planDate = createPlanParam.getValue("planDate");
		PlanVO selectedPlan = new PlanVO();
		selectedPlan.setPlanDate(Integer.parseInt(planDate));
		selectedPlan.setPlannerNo(plannerNo);
		planService.getPlansByDate(selectedPlan);
		dataRequest.setResponse("selectedPlan", planService.getPlansByDate(selectedPlan));
		return new JSONDataView();
	}

	@DeleteMapping("deletePlan")
	public View deletePlan(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		ParameterGroup deletePlanParam = dataRequest.getParameterGroup("createPlanDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String planDate = deletePlanParam.getValue("planDate");
		String contentId = deletePlanParam.getValue("contentid");
		PlanVO plan = new PlanVO();
		plan.setPlannerNo(plannerNo);
		plan.setPlanDate(Integer.parseInt(planDate));
		plan.setContentId(Integer.parseInt(contentId));
		planService.deletePlan(plan);
		dataRequest.setResponse("selectedPlan", planService.getPlansByDate(plan));
		return new JSONDataView();
	}
}