package org.kosta.fourguys.service;

import java.util.ArrayList;
import java.util.List;

import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.stereotype.Service;

@Service
public interface PlannerBoardService {

	public ArrayList<PlannerBoardVO> findPlannerBoardByNo(int plannerBoardNo);

	public int editBoardById(PlannerBoardVO editPlanner);

	List<PlannerBoardVO> getPlannerBoardList();
}
