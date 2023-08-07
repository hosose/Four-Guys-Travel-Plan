package org.kosta.fourguys.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	@GetMapping("/")
	public String home() {
		return "index.clx";
	}

	@GetMapping("/selectDestinationForm")
	public String hello() {
		return "select_dest.clx";
	}

	@GetMapping("/login")
	public String login() {
		return "login.clx";
	}

	@GetMapping("/register")
	public String register() {
		return "register.clx";
	}

}
