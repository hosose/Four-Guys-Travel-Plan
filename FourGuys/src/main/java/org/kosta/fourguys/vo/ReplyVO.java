package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReplyVO {
	private int replyNo;
	private int boardNo;
	private String replyContent;
	private String replyDate;
	private String Id;
}
