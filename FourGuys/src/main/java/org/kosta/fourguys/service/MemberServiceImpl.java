package org.kosta.fourguys.service;

import org.kosta.fourguys.mapper.MemberMapper;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberMapper memberMapper;

	@Override
	public void registerMember(MemberVO memberVO) {
		memberMapper.registerMember(memberVO);
	}

	@Override
	public int updateMember(MemberVO memberVO) {
		return memberMapper.updateMember(memberVO);
	}

	@Override
	public MemberVO login(MemberVO memberVO) {
		return memberMapper.login(memberVO);
	}
}
