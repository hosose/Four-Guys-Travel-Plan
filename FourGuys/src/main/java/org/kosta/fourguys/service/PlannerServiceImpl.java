package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.mapper.PlannerMapper;
import org.kosta.fourguys.vo.PlannerVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlannerServiceImpl implements PlannerService {
	private final PlannerMapper plannerMapper;

	@Override
	public int createPlanner(PlannerVO plannerVO) {
		return plannerMapper.createPlanner(plannerVO);
	}

	@Override
	public int findDayByPlannerId(int no) {
		return plannerMapper.findDayByPlannerId(no);
	}

	@Override
	public int savePlannerByNo(PlannerVO savePlanner) {
		return plannerMapper.savePlannerByNo(savePlanner);

	}

	@Override
	public int cancelPlannerByNo(PlannerVO cancelPlanner) {
		return plannerMapper.cancelPlannerByNo(cancelPlanner);
	}

	

	@Override
	public List<PlannerVO> findCompletePlanner(PlannerVO plannerVO) {
		// TODO Auto-generated method stub
		return plannerMapper.findCompletePlanner(plannerVO);
	}

	@Override
	public List<PlannerVO> findNotCompletePlanner(PlannerVO plannerVO) {
		
		return plannerMapper.findNotCompletePlanner(plannerVO);
	}

}
