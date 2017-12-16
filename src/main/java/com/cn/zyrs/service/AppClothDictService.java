package com.cn.zyrs.service;


import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothDict;

public interface AppClothDictService {
	//添加服装数据字典
	int addAppClothDict(AppClothDict clothDict);
	
	//删除服装数据字典
	int delAppClothDict(String dictId);
	
	//修改服装数据字典
//	int upAppClothDict(@Param("dictcode")String dictcode, @Param("dictname")String dictname,@Param("dictid")String dictid);
	int upAppClothDict(AppClothDict clothDict);
	
	//查询所有服装数据字典
	List<AppClothDict> getAllAppClothDict(@Param("dictid")String dictid, @Param("dictcode")String dictcode, @Param("dictname")String dictname,String page,String di);
}
