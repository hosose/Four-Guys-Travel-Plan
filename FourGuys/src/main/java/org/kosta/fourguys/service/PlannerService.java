package org.kosta.fourguys.service;

import org.kosta.fourguys.vo.PlannerVO;
import org.springframework.stereotype.Service;

@Service
public interface PlannerService {

	int createPlanner(PlannerVO plannerVO);

	public int findDayByPlannerId(int no);

	int savePlannerByNo(PlannerVO savePlanner);

}