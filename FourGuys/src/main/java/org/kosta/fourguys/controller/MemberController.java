package org.kosta.fourguys.controller;

import org.kosta.fourguys.service.MemberService;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Controller
@Slf4j
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;
	
	@PostMapping("/login/{id}&{password}")
	public ResponseEntity<MemberVO> login
	(@PathVariable String id,@PathVariable String password){
		MemberVO memberVO = memberService.Login(id, password);
		if(memberVO == null) {
			return new ResponseEntity<MemberVO>(HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<MemberVO>(memberVO,HttpStatus.OK);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> registerMember(@RequestBody MemberVO memberVO){
		memberService.registerMember(memberVO);
		return new ResponseEntity<String>(memberVO.getId()+"님 회원가입 완료했습니다.",HttpStatus.OK);
	}
	
	
	@PutMapping("updateMember")
	public ResponseEntity<String> updateMember(MemberVO memberVO){
		int result = memberService.updateMember(memberVO);
		if(result < 1)
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok().body(memberVO.getId()+"님 회원 수정되었습니다.");
	}
	@DeleteMapping("deleteMember")
	public ResponseEntity<String> deleteMember(String id){
		int result = memberService.deleteMember(id);
		if(result<1){
			return ResponseEntity.notFound().build();
		}else {
			return ResponseEntity.ok().body(id+"님 계정 삭제 되었습니다.");
		}
	}
}