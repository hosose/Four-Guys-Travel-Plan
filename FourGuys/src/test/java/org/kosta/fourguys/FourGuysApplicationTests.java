package org.kosta.fourguys;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FourGuysApplicationTests {
	@Autowired
	MemberService memberService;

	@Test
	void contextLoads() {
	}

}
