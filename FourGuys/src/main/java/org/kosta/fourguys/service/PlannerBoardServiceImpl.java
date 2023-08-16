package org.kosta.fourguys.service;

import java.util.ArrayList;
import java.util.List;

import org.kosta.fourguys.mapper.PlannerBoardMapper;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlannerBoardServiceImpl implements PlannerBoardService {
	private final PlannerBoardMapper plannerBoardMapper;

	@Override
	public ArrayList<PlannerBoardVO> findPlannerBoardByNo(int plannerBoardNo) {
		return plannerBoardMapper.findPlannerBoardByNo(plannerBoardNo);
	}

	@Override
	public int editBoardById(PlannerBoardVO editPlanner) {
		return plannerBoardMapper.editBoardById(editPlanner);
	}

	@Override
	public List<PlannerBoardVO> getPlannerBoardList() {
		return plannerBoardMapper.getPlannerBoardList();
	}

	@Override
	public int createPlannerBoard(PlannerBoardVO plannerBoardVO) {
		return plannerBoardMapper.createPlannerBoard(plannerBoardVO);
	}
}
