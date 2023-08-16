package org.kosta.fourguys.mapper;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.PlannerBoardVO;

@Mapper
public interface PlannerBoardMapper {

	public ArrayList<PlannerBoardVO> findPlannerBoardByNo(int boardNo);

	public int editBoardById(PlannerBoardVO editPlanner);

	List<PlannerBoardVO> getPlannerBoardList();

	int createPlannerBoard(PlannerBoardVO plannerBoardVO);

}
