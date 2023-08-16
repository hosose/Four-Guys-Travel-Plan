package org.kosta.fourguys.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.PlanMapper;
import org.kosta.fourguys.mapper.PlannerBoardMapper;
import org.kosta.fourguys.mapper.PlannerMapper;
import org.kosta.fourguys.vo.PlanVO;
import org.kosta.fourguys.vo.PlannerBoardVO;
import org.kosta.fourguys.vo.PlannerVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PlannerTest {
	@Autowired
	private PlannerMapper plannerMapper;
	@Autowired
	private PlanMapper planMapper;
	@Autowired
	private PlannerBoardMapper plannerBoardMapper;

	@Test
	public void createPlanner() {
		PlannerVO plannerVO = new PlannerVO();
		plannerVO.setId("hosose");
		plannerVO.setPlannerTitle("제주제주");
		plannerVO.setPlannerStartDate("2023-08-30");
		plannerVO.setPlannerLastDay("2023-09-02");
//		int result = plannerMapper.createPlanner(plannerVO);
//		Assertions.assertEquals(1, result);
	}

	@Test
	public void createPlans() {
		int no = 9;
		int day = plannerMapper.findDayByPlannerId(no);
		PlanVO planVO = new PlanVO();
		for (int i = 1; i <= day; i++) {
			planVO.setPlannerNo(no);
			planVO.setPlanDate(i);
//			planMapper.createPlans(planVO);
		}
	}

	@Test
	public void getDay() {
		int plannerNo = 72;
		ArrayList<PlanVO> planList = planMapper.getDayByPlannerNo(plannerNo);
		System.out.println(planList);
	}

	@Test
	public void createPlan() {
		int plannerNo = 131;
		int planDate = 2;
		int contentId = 126460;
		PlanVO plan = new PlanVO();
		plan.setPlanDate(planDate);
		plan.setPlannerNo(plannerNo);
		plan.setContentId(contentId);
		System.out.println(planMapper.createPlan(plan));
	}

	@Test
	public void deletePlan() {
		int plannerNo = 148;
		int contentId = 127870;
		PlanVO plan = new PlanVO();
		plan.setPlannerNo(plannerNo);
		plan.setContentId(contentId);
		System.out.println(planMapper.deletePlan(plan));
	}

	@Test
	public void getPlansByDate() {
		int plannerNo = 148;
		int planDate = 2;
		PlanVO selectedPlan = new PlanVO();
		selectedPlan.setPlannerNo(plannerNo);
		selectedPlan.setPlanDate(planDate);
		ArrayList<PlanVO> planList = planMapper.getPlansByDate(selectedPlan);
		System.out.println(planList);
	}

	@Test
	public void savePlannerByNo() {
		int plannerNo = 147;
		PlannerVO savePlanner = new PlannerVO();
		savePlanner.setPlannerNo(plannerNo);
		int result = plannerMapper.savePlannerByNo(savePlanner);
		System.out.println(result);
	}

	@Test
	public void findPlannerBoardByNo() {
		int boardNo = 1;
		ArrayList<PlannerBoardVO> boardList = plannerBoardMapper.findPlannerBoardByNo(boardNo);
		System.out.println(boardList);
	}

	@Test
	public void editBoardById() {
		String id = "hosose";
		PlannerBoardVO editPlanner = new PlannerBoardVO();
		editPlanner.setId(id);
		editPlanner.setBoardNo(3);
		editPlanner.setBoardTitle("asd");
		editPlanner.setBoardContent("바뀌나");
		int result = plannerBoardMapper.editBoardById(editPlanner);
		System.out.println(result);
	}

	@Test
	public void findCompletePlanner() {
		PlannerVO plannerVO = new PlannerVO();
		plannerVO.setId("java");
		plannerVO.setCompleteFlag("완성");
		List<PlannerVO> testVO = plannerMapper.findCompletePlanner(plannerVO);
		// System.out.println(testVO);
	}

	@Test
	public void findNotCompletePlanner() {
		PlannerVO plannerVO = new PlannerVO();
		plannerVO.setId("java");
		plannerVO.setCompleteFlag("미완성");
		List<PlannerVO> testVO = plannerMapper.findCompletePlanner(plannerVO);
		// System.out.println(testVO);

	}
}
