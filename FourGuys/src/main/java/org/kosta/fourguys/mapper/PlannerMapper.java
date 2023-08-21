package org.kosta.fourguys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.PlanVO;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.kosta.fourguys.vo.PlannerVO;

@Mapper
public interface PlannerMapper {
	public int createPlanner(PlannerVO plannerVO);

	public int findDayByPlannerId(int no);

	public int savePlannerByNo(PlannerVO savePlanner);

	public int cancelPlannerByNo(PlannerVO cancelPlanner);

	public List<PlannerVO> findCompletePlanner(PlannerVO plannerVO);

	public List<PlannerVO> findNotCompletePlanner(PlannerVO plannerVO);

	public List<PlannerVO> getPlannerById(String id);
	
	public List<PlannerVO> findPlannerByNo(int plannerNo);
	
	public int deletePlannerByNo(int plannerNo);
	
	public List<PlanVO> getContentIdListByPlannerNo(int plannerNo);

}