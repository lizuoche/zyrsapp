package com.cn.zyrs.service;


import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothStoreFabric;

public interface AppClothStoreFabricService {
	//添加按钮
//	int addAppClothStoreFabric(AppClothStoreFabric clothStoreFabric);
	
	//删除按钮
//	int delAppClothStoreFabric(String buttonId);
	
	//修改面料
	int upAppClothStoreFabric(AppClothStoreFabric clothStoreFabric);
	
	//查询所有面料
	List<AppClothStoreFabric> getAllAppClothStoreFabric(String page,String di);
	
	//根据id查询修改面料
	List<AppClothStoreFabric> getAllAppClothStoreFabricById(@Param("fabricid")String fabricid);
	
	//根据查询条件查询对应面料
	List<AppClothStoreFabric> getAllAppClothStoreFabricBy(@Param("fabriccode")String fabriccode,@Param("brandname")String brandname,@Param("clothfabriciscomplete")String clothfabriciscomplete);
}
