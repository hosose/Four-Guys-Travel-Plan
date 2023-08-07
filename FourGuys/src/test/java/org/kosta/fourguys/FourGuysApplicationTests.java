package org.kosta.fourguys;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.kosta.fourguys.service.MemberService;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FourGuysApplicationTests {
	@Autowired
	MemberService memberService;

	@Test
	public void registerMemberTest() {
		String id ="javajava";
		String name="dfsdf";
		String password="dsf";
		
		int result= memberService.registerMember(new MemberVO(id, password, name, null, null, null, null));
		Assertions.assertEquals(1, result);
	}


	@Test
	void contextLoads() {
	}
	
	

}
