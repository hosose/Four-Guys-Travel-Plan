package org.kosta.fourguys.test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.AreaMapper;
import org.kosta.fourguys.mapper.MemberMapper;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
public class MemberTest {
	@Autowired
	MemberMapper memberMapper;
	@Autowired
	AreaMapper areaMapper;

	@Test
	public void diTest() {
		System.out.println(memberMapper);
	}

	@Test
	public void login() {
		String id = "hosose";
		String password = "a";
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setPassword(password);
		MemberVO result = memberMapper.login(vo);
		log.debug(result.toString());
		Assertions.assertNotNull(result);
	}

	@Test
	public void findAllArea() {
		// System.out.println(areaMapper.findAllArea("곽지"));
	}
}
