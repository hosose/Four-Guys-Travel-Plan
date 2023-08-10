package org.kosta.fourguys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cleopatra.protocol.data.DataRequest;

@Controller
public class HomeController {
	@GetMapping("/")
	public String home(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		return "index.clx";
	}

	@GetMapping("/selectDestinationForm")
	public String hello() {
		return "select_dest.clx";
	}
	
	@GetMapping("/registerForm")
	public String registerForm() {
		return "register.clx";
	}

}
