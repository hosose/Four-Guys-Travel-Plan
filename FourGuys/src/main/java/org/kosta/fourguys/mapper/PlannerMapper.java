package org.kosta.fourguys.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.PlannerVO;

@Mapper
public interface PlannerMapper {
	public int createPlanner(PlannerVO plannerVO);

	public int findDayByPlannerId(int no);

	public int savePlannerByNo(PlannerVO savePlanner);

	public int cancelPlannerByNo(PlannerVO cancelPlanner);

}
