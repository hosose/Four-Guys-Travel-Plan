package org.kosta.fourguys.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.kosta.fourguys.vo.AreaVO;

@Mapper
public interface AreaMapper {
	public void registerArea(AreaVO areaVO);
}
