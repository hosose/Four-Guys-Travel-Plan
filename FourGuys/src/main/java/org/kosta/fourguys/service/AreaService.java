package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.vo.AreaVO;
import org.springframework.stereotype.Service;

@Service

public interface AreaService {

	List<AreaVO> findAllArea(String title);
	
}
