package org.kosta.fourguys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.spring.UIView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PlannerController {
	@GetMapping("/plannerForm")
	public View plannerForm(HttpServletResponse response, HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		String uri = "";
		if (session != null)
			uri = "planner.clx";
		else
			uri = "login.clx";
		return new UIView(uri);
	}
}
