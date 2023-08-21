package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.mapper.ReplyMapper;
import org.kosta.fourguys.vo.ReplyVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService {
	private final ReplyMapper replyMapper;

	@Override
	public int insertReply(ReplyVO replyVO) {
		return replyMapper.insertReply(replyVO);

	}

	@Override
	public List<ReplyVO> findReplyByNo(int boardNo) {
		return replyMapper.findReplyByNo(boardNo);
	}

	@Override
	public int deleteReply(ReplyVO replayNo) {
		return replyMapper.deleteReply(replayNo);
	}
}
