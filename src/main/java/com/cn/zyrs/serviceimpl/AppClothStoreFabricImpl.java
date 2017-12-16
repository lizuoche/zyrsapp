package com.cn.zyrs.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppClothStoreFabric;
import com.cn.zyrs.mapper.ClothStoreFabricMapper;
import com.cn.zyrs.service.AppClothStoreFabricService;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
@Service("clothStoreFabricService")
public class AppClothStoreFabricImpl implements AppClothStoreFabricService {
	
	@Resource(name = "clothStoreFabricMapper")
	private ClothStoreFabricMapper clothStoreFabricMapper;
	
	//修改服装面料
	@Override
	public int upAppClothStoreFabric(AppClothStoreFabric appClothStoreFabric) {
		return this.clothStoreFabricMapper.updateAppClothStoreFabric(appClothStoreFabric);
	}

	//查询所有服装面料
	@Override
	public List<AppClothStoreFabric> getAllAppClothStoreFabric(String page, String di) {
		return this.clothStoreFabricMapper.getAppClothStoreFabric(page,di);
	}
	
	//根据id查询要修改的面料
	@Override
	public List<AppClothStoreFabric> getAllAppClothStoreFabricById(@Param("fabricid")String fabricid) {
		return this.clothStoreFabricMapper.getAppClothStoreFabricById(fabricid);
	}
	
	//根据查询条件查询所有面料
	@Override
	public List<AppClothStoreFabric> getAllAppClothStoreFabricBy(@Param("fabriccode")String fabriccode,@Param("brandname")String brandname,@Param("clothfabriciscomplete")String clothfabriciscomplete) {
		return this.clothStoreFabricMapper.getAppClothStoreFabricBy(fabriccode,brandname,clothfabriciscomplete);
	}
}
