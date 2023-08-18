package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanVO {
	private int planNo;
	private int plannerNo;
	private int planDate;
	private int contentId;
	private String title;
	private String mapx;
	private String mapy;
	private String firstimage;
}
