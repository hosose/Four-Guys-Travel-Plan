package org.kosta.fourguys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.PlannerBoardVO;

@Mapper
public interface PlannerBoardMapper {

	public List<PlannerBoardVO> findPlannerBoardByNo(int boardNo);

	int updateBoard(PlannerBoardVO plannerBoardVO);

	List<PlannerBoardVO> getPlannerBoardList();

	int createPlannerBoard(PlannerBoardVO plannerBoardVO);

	public int increaseBoardHits(int boardNo);

	public int deleteBoard(PlannerBoardVO plannerBoardVO);
}