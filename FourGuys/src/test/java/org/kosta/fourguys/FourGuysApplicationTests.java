package org.kosta.fourguys;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.MemberMapper;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FourGuysApplicationTests {
	private MemberMapper memberMapper;
	@Autowired
	public FourGuysApplicationTests(MemberMapper memberMapper) {
		super();
		this.memberMapper = memberMapper;
	}

	@Test
	void contextLoads() {
	}
	@Test
	void login() {
		System.out.println(memberMapper.Login("hosose", "a"));
		memberMapper.Login("hosose", "a");
	}
	@Test
	void insert() {
		MemberVO memberVO = new MemberVO("sky","a","문승우","수지구청","dnflcld123@naver.com","010-2926-4418","1996-08-24 00:00:00.0");
		memberMapper.registerMember(memberVO);
	}
}
