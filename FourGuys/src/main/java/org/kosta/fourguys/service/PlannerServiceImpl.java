package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.mapper.PlannerMapper;
import org.kosta.fourguys.vo.PlanVO;
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
	public List<PlannerVO> getPlannerById(String id) {
		return plannerMapper.getPlannerById(id);
	}

	@Override
	public List<PlannerVO> findCompletePlanner(PlannerVO plannerVO) {
		return plannerMapper.findCompletePlanner(plannerVO);
	}

	@Override
	public List<PlannerVO> findNotCompletePlanner(PlannerVO plannerVO) {
		return plannerMapper.findNotCompletePlanner(plannerVO);
	}

	@Override
	public List<PlannerVO> findPlannerByNo(int plannerNo) {
		
		return plannerMapper.findPlannerByNo(plannerNo);
	}

	@Override
	public int deletePlannerByNo(int plannerNo) {
		
		return plannerMapper.deletePlannerByNo(plannerNo);
	}

	@Override
	public List<PlanVO> getContentIdListByPlannerNo(int plannerNo) {
		
		return plannerMapper.getContentIdListByPlannerNo(plannerNo);
	}

}