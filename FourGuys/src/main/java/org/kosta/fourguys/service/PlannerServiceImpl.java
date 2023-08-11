package org.kosta.fourguys.service;

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

}
