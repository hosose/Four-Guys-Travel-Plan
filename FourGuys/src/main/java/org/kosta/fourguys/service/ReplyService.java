package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.vo.ReplyVO;

public interface ReplyService {

	public int insertReply(ReplyVO replyVO);

	public List<ReplyVO> findReplyByNo(int boardNo);

	public int deleteReply(ReplyVO replyNo);
}
