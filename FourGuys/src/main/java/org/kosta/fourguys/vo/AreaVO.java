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
	private String cat2;
	private String cat3;
	private String addr1;
	private String addr2;
	private String firstimage;
	private String title;
	private String tel;
}