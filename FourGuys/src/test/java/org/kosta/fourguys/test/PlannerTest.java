package org.kosta.fourguys.test;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.PlanMapper;
import org.kosta.fourguys.mapper.PlannerMapper;
import org.kosta.fourguys.vo.PlanVO;
import org.kosta.fourguys.vo.PlannerVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class PlannerTest {
	@Autowired
	private PlannerMapper plannerMapper;
	@Autowired
	private PlanMapper planMapper;

	@Test
	public void createPlanner() {
		PlannerVO plannerVO = new PlannerVO();
		plannerVO.setId("hosose");
		plannerVO.setPlannerTitle("제주제주");
		plannerVO.setPlannerStartDate("2023-08-30");
		plannerVO.setPlannerLastDate("2023-09-02");
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
}
