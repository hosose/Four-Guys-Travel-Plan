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
		plannerVO.setPlannerLastDay(plannerLastDate);
		plannerService.createPlanner(plannerVO);
		planService.createPlans(plannerVO.getPlannerNo());
		initParam.put("plannerVO", plannerVO);
		dataRequest.setMetadata(true, initParam);
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
		ParameterGroup planDM = dataRequest.getParameterGroup("planDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String contentId = planDM.getValue("contentid");
		String planDate = planDM.getValue("planDate");
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
		ParameterGroup planDM = dataRequest.getParameterGroup("planDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String planDate = planDM.getValue("planDate");
		PlanVO selectedPlan = new PlanVO();
		selectedPlan.setPlanDate(Integer.parseInt(planDate));
		selectedPlan.setPlannerNo(plannerNo);
		dataRequest.setResponse("selectedPlan", planService.getPlansByDate(selectedPlan));
		return new JSONDataView();
	}

	@DeleteMapping("deletePlan")
	public View deletePlan(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		ParameterGroup planDM = dataRequest.getParameterGroup("planDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		String planDate = planDM.getValue("planDate");
		String contentId = planDM.getValue("contentid");
		PlanVO plan = new PlanVO();
		plan.setPlannerNo(plannerNo);
		plan.setPlanDate(Integer.parseInt(planDate));
		plan.setContentId(Integer.parseInt(contentId));
		planService.deletePlan(plan);
		dataRequest.setResponse("selectedPlan", planService.getPlansByDate(plan));
		return new JSONDataView();
	}

	@PostMapping("savePlanner")
	public View savePlannerByNo(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		PlannerVO savePlanner = new PlannerVO();
		savePlanner.setPlannerNo(plannerNo);
		plannerService.savePlannerByNo(savePlanner);
		return new JSONDataView();
	}

	@PostMapping("cancelPlanner")
	public View cancelPlannerByNo(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		PlannerVO cancelPlanner = new PlannerVO();
		cancelPlanner.setPlannerNo(plannerNo);
		plannerService.cancelPlannerByNo(cancelPlanner);
		return new JSONDataView();
	}

	@GetMapping("findCompletePlanner")
	public View findCompletePlanner(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		PlannerVO plannerVO = new PlannerVO();
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		plannerVO.setId(id);
		plannerVO.setCompleteFlag("완성");
		dataRequest.setResponse("completePlannerVO", plannerService.findCompletePlanner(plannerVO));
		return new JSONDataView();
	}

	@GetMapping("findNotCompletePlanner")
	public View findNotCompletePlanner(DataRequest dataRequest, HttpServletResponse response,
			HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		PlannerVO plannerVO = new PlannerVO();
		String id = null;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			id = memberVO.getId();
		} else {
			String uri = "login.clx";
			return new UIView(uri);
		}
		plannerVO.setId(id);
		plannerVO.setCompleteFlag("미완성");
		dataRequest.setResponse("notCompletePlannerVO", plannerService.findNotCompletePlanner(plannerVO));
		return new JSONDataView();
	}

	@GetMapping("/myPlanDetail/{plannerNo}")
	public View getMyPlanDetailPage(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
		return new UIView("myPlanDetail.clx");
	}

	@GetMapping("/planDetail")
	public View findPlannerByNo(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
		ParameterGroup plannerDetailParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerDetailParam.getValue("plannerNo"));
		dataRequest.setResponse("plannerDetail", plannerService.findPlannerByNo(plannerNo));
		return new JSONDataView();
	}

	@DeleteMapping("deletePlanner")
	public View deletePlanner(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session == null) {
			String uri = "login.clx";
			return new UIView(uri);
		}
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		plannerService.deletePlannerByNo(plannerNo);
		return new JSONDataView();
	}

	@GetMapping("getContentIdList")
	public View getContentId(DataRequest dataRequest, HttpServletResponse response, HttpServletRequest request) {
		ParameterGroup plannerNoParam = dataRequest.getParameterGroup("plannerNoDM");
		int plannerNo = Integer.parseInt(plannerNoParam.getValue("plannerNo"));
		dataRequest.setResponse("plannerDetail", plannerService.getContentIdListByPlannerNo(plannerNo));
		return new JSONDataView();
	}
}