package org.kosta.fourguys.service;

import java.util.ArrayList;

import org.kosta.fourguys.vo.PlanVO;

public interface PlanService {

	int createPlans(int no);

	public ArrayList<PlanVO> getDayByPlannerNo(int plannerNo);
}