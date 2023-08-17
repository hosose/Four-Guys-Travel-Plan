package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlannerBoardVO {
	private int rNo;
	private int boardNo;
	private int plannerNo;
	private String id;
	private String boardTitle;
	private String boardContent;
	private String boardCreateDate;
	private int boardHits;

}
