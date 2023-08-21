package org.kosta.fourguys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.ReplyVO;

@Mapper
public interface ReplyMapper {

	public int insertReply(ReplyVO replyVO);

	public List<ReplyVO> findReplyByNo(int boardNo);

}
