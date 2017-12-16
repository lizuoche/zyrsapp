package com.cn.zyrs.service;


import java.util.List;

import com.cn.zyrs.domain.AppClothStyle;

public interface AppClothStyleService {
	//添加服装风格
	int addAppClothStyle(AppClothStyle clothStyle);
	
	//删除服装风格
	int delAppClothStyle(String styleId);
	
	//修改服装风格
	int upAppClothStyle(AppClothStyle clothStyle);
	
	//查询所有服装风格
	List<AppClothStyle> getAllAppClothStyle(AppClothStyle clothStyle,String page,String di);
}
