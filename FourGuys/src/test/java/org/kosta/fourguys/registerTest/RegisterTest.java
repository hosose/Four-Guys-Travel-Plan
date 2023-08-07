package org.kosta.fourguys.registerTest;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.kosta.fourguys.service.MemberService;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RegisterTest {

	@Autowired
	MemberService memberService;

	@Test
	public void registerMemberTest() {
		String id ="javajava";
		String name="자바";
		String password="dsf";
		String address ="오리역";
		String birth ="2012-4-3";
		String email="a@a.com";
		String phone="010-4848-7848";
		MemberVO memberVO = new MemberVO(id, name, password, address, birth, email, phone);
		System.out.println(memberVO);
		int result= memberService.registerMember(memberVO);
		
		Assertions.assertEquals(1, result);
	}

}
