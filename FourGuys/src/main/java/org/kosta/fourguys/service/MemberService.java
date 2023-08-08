package org.kosta.fourguys.service;

import org.kosta.fourguys.vo.MemberVO;
import org.springframework.stereotype.Service;

@Service
public interface MemberService {

	public void registerMember(MemberVO memberVO);

	public int updateMember(MemberVO memberVO);

	public MemberVO login(MemberVO memberVO);
}
