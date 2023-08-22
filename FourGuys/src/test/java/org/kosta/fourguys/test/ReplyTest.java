package org.kosta.fourguys.test;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.kosta.fourguys.mapper.ReplyMapper;
import org.kosta.fourguys.vo.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ReplyTest {
	@Autowired
	private ReplyMapper replyMapper;

	@Test
	public void insertReply() {
		int boardNo = 2;
		String replyContent = "gk";
		String Id = "hosose";
		ReplyVO replyVO = new ReplyVO();
		replyVO.setBoardNo(boardNo);
		replyVO.setReplyContent(replyContent);
		replyVO.setReplyId(Id);
		// replyMapper.insertReply(replyVO);
	}

	@Test
	public void findReplyBoardByNo() {
		int boardNo = 43;
		List<ReplyVO> replyList = replyMapper.findReplyByNo(boardNo);
		System.out.println(replyList);
	}

	@Test
	public void deleteReply() {
		int replyNo = 41;
		// replyMapper.deleteReply(replyNo);
	}
}
