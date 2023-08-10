package org.kosta.fourguys.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.PlanVO;

@Mapper
public interface PlanMapper {

	public int createPlans(PlanVO planVO);

	public ArrayList<PlanVO> getDayByPlannerNo(int plannerNo);

	public int createPlan(PlanVO plan);

	public ArrayList<PlanVO> getPlansByDate(PlanVO selectedPlan);

}
