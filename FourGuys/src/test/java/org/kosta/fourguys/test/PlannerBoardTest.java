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
	public void createPlannerBoard() {
		PlannerBoardVO plannerBoardVO = new PlannerBoardVO();
		String id = "hosose";
		plannerBoardVO.setId(id);
		plannerBoardVO.setBoardTitle("두명코스");
		plannerBoardVO.setBoardContent("둘이서 가면 아주 좋아요.");
		plannerBoardVO.setPlannerNo(183);
		int result = plannerBoardMapper.createPlannerBoard(plannerBoardVO);
		System.out.println(result);
	}
}
