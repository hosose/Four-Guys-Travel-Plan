package org.kosta.fourguys;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
<<<<<<< HEAD
<<<<<<< HEAD
import org.kosta.fourguys.service.MemberService;
=======
import org.kosta.fourguys.mapper.MemberMapper;
>>>>>>> refs/heads/feature/mypage
=======
import org.kosta.fourguys.service.MemberService;
>>>>>>> branch 'main' of https://github.com/hosose/Four-Guys-Travel-Plan.git
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class FourGuysApplicationTests {
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
	private MemberMapper memberMapper;
	@Autowired
	public FourGuysApplicationTests(MemberMapper memberMapper) {
		super();
		this.memberMapper = memberMapper;
	}
>>>>>>> refs/heads/feature/mypage
=======
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

>>>>>>> branch 'main' of https://github.com/hosose/Four-Guys-Travel-Plan.git

	@Test
	void contextLoads() {
	}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> branch 'main' of https://github.com/hosose/Four-Guys-Travel-Plan.git
	
	

=======
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
>>>>>>> refs/heads/feature/mypage
}
