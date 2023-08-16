package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AreaVO {
	private int contentid;
	private String mapx;
	private String mapy;
	private String cat1;
	private String title;
}
