package org.kosta.fourguys.service;

import org.kosta.fourguys.vo.MemberVO;
import org.springframework.stereotype.Service;

@Service
public interface MemberService {
	public int registerMember(MemberVO memberVO);
	public int updateMember(MemberVO memberVO);
	public MemberVO Login(String id,String password);
	public int deleteMember(String id);
}
