package org.kosta.fourguys.service;

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
	public List<PlannerBoardVO> findPlannerBoardByNo(int plannerBoardNo) {
		return plannerBoardMapper.findPlannerBoardByNo(plannerBoardNo);
	}

	@Override
	public List<PlannerBoardVO> getPlannerBoardList() {
		return plannerBoardMapper.getPlannerBoardList();
	}

	@Override
	public int createPlannerBoard(PlannerBoardVO plannerBoardVO) {
		return plannerBoardMapper.createPlannerBoard(plannerBoardVO);
	}

	@Override
	public int updateBoard(PlannerBoardVO plannerBoardVO) {
		return plannerBoardMapper.updateBoard(plannerBoardVO);
	}

	@Override
	public int increaseBoardHits(int boardNo) {
		return plannerBoardMapper.increaseBoardHits(boardNo);
	}
}