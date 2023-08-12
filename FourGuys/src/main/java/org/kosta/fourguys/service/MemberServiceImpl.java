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
	public int registerMember(MemberVO memberVO) {
		return memberMapper.registerMember(memberVO);
	}

	@Override
	public int updateMember(MemberVO memberVO) {
		return memberMapper.updateMember(memberVO);
	}

	@Override
	public MemberVO login(MemberVO memberVO) {
		return memberMapper.login(memberVO);
	}

	@Override


	public int checkDuplicateId(String id) {

		return memberMapper.checkDuplicateId(id);
	}

	public int deleteMember(MemberVO memberVO) {
		return memberMapper.deleteMember(memberVO);


	}
}
