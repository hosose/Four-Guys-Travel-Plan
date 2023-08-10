package org.kosta.fourguys.test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.kosta.fourguys.service.MemberService;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class RegisterTest {
	@Autowired
	MemberService memberService;

	@Test
	public void diTest() {
		System.out.println(memberService);
	}

	@Test
	public void register() {
		String id = "javava";
		String name = "aaa";
		String password = "a";
		String address = "a";
		String birth = "1949-8-4";
		String email = "a@a.com";
		String phone = "010-000-0000";

		MemberVO vo = new MemberVO(id, password, name, address, email, phone, birth);
		 int result = memberService.registerMember(vo);
		
		Assertions.assertEquals(1, result);
	}
	
	@Test
	public void idDuplicateCheck() {
		int result = memberService.checkDuplicateId("java");
		
		Assertions.assertEquals(1, result);
	}
}
