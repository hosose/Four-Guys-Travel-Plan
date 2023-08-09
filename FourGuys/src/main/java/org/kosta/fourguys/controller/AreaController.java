package org.kosta.fourguys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.kosta.fourguys.service.AreaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AreaController {
	private final AreaService areaService;
	
	@GetMapping("/findAllArea")
	public View findAllArea(DataRequest dataRequest, HttpServletRequest request,HttpServletResponse response) {
		ParameterGroup search = dataRequest.getParameterGroup("areaSearch");
		String areaSearch = search.getValue("title");
		dataRequest.setResponse("jeju", areaService.findAllArea(areaSearch));
		return new JSONDataView();
	}
}
