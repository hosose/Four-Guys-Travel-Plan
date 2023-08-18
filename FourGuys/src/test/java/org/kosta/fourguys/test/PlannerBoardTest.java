package org.kosta.fourguys.test;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.PlannerBoardMapper;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PlannerBoardTest {
	@Autowired
	private PlannerBoardMapper plannerBoardMapper;

	@Test
	public void getPlannerBoardList() {
		List<PlannerBoardVO> boardList = plannerBoardMapper.getPlannerBoardList();
		System.out.println(boardList);
	}

	@Test
	public void deleteBoard() {
		int boardNo = 6;
		PlannerBoardVO plannerBoardVO = new PlannerBoardVO();
		plannerBoardVO.setBoardNo(boardNo);
		System.out.println(plannerBoardMapper.deleteBoard(plannerBoardVO));
	}
}
