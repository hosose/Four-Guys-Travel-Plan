package org.kosta.fourguys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cleopatra.protocol.data.DataRequest;

@Controller
public class HomeController {
	@GetMapping("/")
	public String home(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		return "index.clx";
	}

	@GetMapping("/loginForm")
	public String loginForm(DataRequest dataRequest, HttpServletRequest request,
			HttpServletResponse httpServletResponse) {
		return "login.clx";
	}

	@GetMapping("/selectDestinationForm")
	public String hello() {
		return "select_dest.clx";
	}

	@GetMapping("/registerForm")
	public String registerForm() {
		return "register.clx";
	}

	@GetMapping("/mypage")
	public String mypage() {
		return "mypage.clx";
	}

	@GetMapping("/myplan")
	public String myplan(DataRequest dataRequest, HttpServletRequest request,
			HttpServletResponse httpServletResponse) {
		HttpSession session = request.getSession(false);
		if(session==null) {
			return "index.clx";
		}

		return "myPlan.clx";
	}

	@GetMapping("/PlanBoard")
	public String PlanBoard() {
		return "PlanBoard.clx";
	}
}
