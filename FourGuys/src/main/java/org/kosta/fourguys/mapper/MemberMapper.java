package org.kosta.fourguys.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.MemberVO;

@Mapper
public interface MemberMapper {
	public int registerMember(MemberVO memberVO);
	public int updateMember(MemberVO memberVO);
	public MemberVO Login(String id,String password);
}
