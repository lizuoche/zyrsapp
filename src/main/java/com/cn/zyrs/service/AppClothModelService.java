package com.cn.zyrs.service;


import java.util.List;

import com.cn.zyrs.domain.AppClothModel;

public interface AppClothModelService {
	//添加服装模型
	int addAppClothModel(AppClothModel clothModel);
	
	//删除服装模型
	int delAppClothModel(String modelId);
	
	//修改服装模型
	int upAppClothModel(AppClothModel appClothModel);
	
	//查询所有服装模型
	List<AppClothModel> getAllAppClothModel(AppClothModel appClothModel,String page,String di);
}
