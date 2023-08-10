package org.kosta.fourguys.service;

import java.util.ArrayList;

import org.kosta.fourguys.mapper.PlanMapper;
import org.kosta.fourguys.mapper.PlannerMapper;
import org.kosta.fourguys.vo.PlanVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {
	private final PlanMapper planMapper;
	private final PlannerMapper plannerMapper;

	@Override
	public int createPlans(int no) {
		PlanVO planVO = new PlanVO();
		int day = plannerMapper.findDayByPlannerId(no);
		for (int i = 1; i <= day; i++) {
			planVO.setPlannerNo(no);
			planVO.setPlanDate(i);
			planMapper.createPlans(planVO);
		}
		return 1;
	}

	@Override
	public ArrayList<PlanVO> getDayByPlannerNo(int plannerNo) {
		return planMapper.getDayByPlannerNo(plannerNo);
	}

	@Override
	public int createPlan(PlanVO plan) {
		return planMapper.createPlan(plan);
	}

	@Override
	public ArrayList<PlanVO> getPlansByDate(PlanVO selectedPlan) {
		return planMapper.getPlansByDate(selectedPlan);
	}
}
