package com.cn.zyrs.service;


import java.util.List;

import com.cn.zyrs.domain.AppTerrace;

public interface AppTerraceService {
	//添加平台
	int addAppTerrace(AppTerrace terrace);
	
	//删除平台
	int delAppTerrace(String terrace);
	
	//修改平台
	int upAppTerrace(AppTerrace terrace);
	
	//查询平台
	List<AppTerrace> getAllAppTerrace(AppTerrace terrace,String page,String di);
}
