package org.kosta.fourguys.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberVO {
	private String id;
	private String password;
	private String name;
	private String address;
	private String email;
	private String phone;
	private int birth;
}