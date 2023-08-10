package org.kosta.fourguys.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.AreaVO;

@Mapper
public interface AreaMapper {
	public List<AreaVO> findAllArea(String title);
	
}
