package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.stereotype.Service;

@Service
public interface PlannerBoardService {

	public List<PlannerBoardVO> findPlannerBoardByNo(int plannerBoardNo);

	int createPlannerBoard(PlannerBoardVO plannerBoardVO);

	List<PlannerBoardVO> getPlannerBoardList();

	int updateBoard(PlannerBoardVO plannerBoardVO);
}