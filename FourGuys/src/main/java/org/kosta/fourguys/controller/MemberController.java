package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

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
	@RequestMapping("/registerMember")
	public View registerMember(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) throws Exception {
		ParameterGroup registerparam = dataRequest.getParameterGroup("register");
		Map<String, Object> message = new HashMap<String, Object>();
		String id = registerparam.getValue("id");
		String name=registerparam.getValue("id");
		String password=registerparam.getValue("id");
		String address =registerparam.getValue("id");
		String birth =registerparam.getValue("id");
		String email=registerparam.getValue("id");
		String phone=registerparam.getValue("id");
		MemberVO memberVO = new MemberVO(id, name, password, address, birth, email, phone);
		memberService.registerMember(memberVO);
		message.put("uri", "index");
		dataRequest.setMetadata(true, message);
		return new JSONDataView();
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