package org.kosta.fourguys.service;

import java.util.List;

import org.kosta.fourguys.mapper.AreaMapper;
import org.kosta.fourguys.vo.AreaVO;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class AreaServiceImpl implements AreaService{
	private final AreaMapper areaMapper;
	
	@Override
	public List<AreaVO> findAllArea(String title, String cat1) {
		return	areaMapper.findAllArea(title,cat1);
	}
}
