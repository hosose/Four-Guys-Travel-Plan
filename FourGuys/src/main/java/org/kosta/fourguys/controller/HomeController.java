package org.kosta.fourguys.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.spring.JSONDataView;

@Controller
public class HomeController {
	@GetMapping("/")
	public View home(DataRequest dataRequest, HttpServletRequest request, HttpServletResponse httpServletResponse) {
		HttpSession session = request.getSession(false);
		Map<String, Object> initParam = new HashMap<>();
		initParam.put("memberVO", session.getAttribute("memberVO"));
		dataRequest.setMetadata(true, initParam);
		return new JSONDataView();
	}

	@GetMapping("/selectDestinationForm")
	public String hello() {
		return "select_dest.clx";
	}

}
