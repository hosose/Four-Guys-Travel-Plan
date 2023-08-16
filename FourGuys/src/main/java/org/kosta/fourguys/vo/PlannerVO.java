package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlannerVO {
	private int plannerNo;
	private String id;
	private String plannerTitle;
	private String plannerStartDate;
	private String plannerLastDay;
	private String completeFlag;
}
