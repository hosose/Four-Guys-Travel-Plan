package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.vo.PlannerVO;
import org.springframework.stereotype.Service;

@Service
public interface PlannerService {

	int createPlanner(PlannerVO plannerVO);

	public int findDayByPlannerId(int no);

	int savePlannerByNo(PlannerVO savePlanner);

	int cancelPlannerByNo(PlannerVO cancelPlanner);
	
	public List<PlannerVO> findCompletePlanner(PlannerVO plannerVO);
	
	public List<PlannerVO> findNotCompletePlanner(PlannerVO plannerVO);



}