package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.kosta.fourguys.service.MemberService;
import org.kosta.fourguys.vo.MemberVO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;

	@PostMapping("/login")
	public View login(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		ParameterGroup loginParam = dataRequest.getParameterGroup("loginParam");
		String id = loginParam.getValue("id");
		String password = loginParam.getValue("password");
		boolean success = false;
		MemberVO memberVO = new MemberVO();
		memberVO.setId(id);
		memberVO.setPassword(password);
		MemberVO result = memberService.login(memberVO);
		Map<String, Object> initParam = new HashMap<>();
		if (result == null) {
			initParam.put("message", "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\r\n" + "입력하신 내용을 다시 확인해주세요.");
		} else {
			HttpSession session = request.getSession(true);
			session.setAttribute("memberVO", result);
			initParam.put("uri", "/");
			success = true;
		}
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}
	@GetMapping("/findMyPage")
	public View findMyPage(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		MemberVO memberVO = null;
		HttpSession session = request.getSession(false);
		Map<String, Object> initParam = new HashMap<>();
		boolean success = false;
		if (session != null) {
			memberVO = (MemberVO) session.getAttribute("memberVO");
			initParam.put("findMyPageis", memberVO);
			success = true;
		} else {
			initParam.put("message", "로그인하셔야 합니다.");
		}
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}

	@GetMapping("/loginCheck")
	public View loginCheck(DataRequest dataRequest, HttpServletRequest request,
			HttpServletResponse httpServletResponse) {
		HttpSession session = request.getSession(false);
		Map<String, Object> initParam = new HashMap<>();
		boolean success = false;
		if (session != null) {
			MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
			initParam.put("memberVO", memberVO);
			success = true;
		} else {
			initParam.put("message", "로그인하셔야 합니다.");
		}
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}

	@PostMapping("/register")
	public ResponseEntity<String> registerMember(@RequestBody MemberVO memberVO) {
		memberService.registerMember(memberVO);
		return new ResponseEntity<String>(memberVO.getId() + "님 회원가입 완료했습니다.", HttpStatus.OK);
	}

	@PutMapping("updateMember")
	public View updateMember(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		boolean success = false;
		HttpSession session = request.getSession(false);
		ParameterGroup member = dataRequest.getParameterGroup("member");
		MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
		String Phone = member.getValue("phone");
		String password = member.getValue("password");
		String address = member.getValue("address");
		String email = member.getValue("email");
		String name= member.getValue("name");
		memberVO.setPhone(Phone);
		memberVO.setPassword(password);
		memberVO.setAddress(address);
		memberVO.setName(name);
		memberVO.setEmail(email);
		int result = memberService.updateMember(memberVO);
		Map<String, Object> initParam = new HashMap<>();
		if (result == 0) {
			initParam.put("message", "수정 실패");
		} else {
			session.setAttribute("memberVO", memberVO);
			initParam.put("update", memberVO);
			success = true;
		}
		dataRequest.setMetadata(success, initParam);
		return new JSONDataView();
	}
	@PostMapping("/logout")
	public View logout(HttpServletRequest request,HttpServletResponse response, DataRequest dataRequest) {
		Map<String, Object> message = new HashMap<String, Object>();
		HttpSession session= request.getSession(false);
		//System.out.println(session);
		if(session!=null) {
			session.invalidate();
		}
		message.put("uri", "/");
		dataRequest.setMetadata(true, message);
		return new JSONDataView();
	}
	@DeleteMapping("deleteMember")
	public View deleteMember(HttpServletRequest request,HttpServletResponse response, DataRequest dataRequest) {
		Map<String, Object> message = new HashMap<String, Object>();
		HttpSession session= request.getSession(false);
		//ParameterGroup member = dataRequest.getParameterGroup("member");
		MemberVO memberVO = (MemberVO) session.getAttribute("memberVO");
		memberService.deleteMember(memberVO);
		if(session!=null) {
			session.invalidate();
		}
		message.put("uri", "/");
		dataRequest.setMetadata(true, message);
		return new JSONDataView();
	}
}






