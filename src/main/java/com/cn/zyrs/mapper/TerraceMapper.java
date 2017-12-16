package com.cn.zyrs.mapper;

import java.util.List;

import com.cn.zyrs.domain.AppTerrace;

public interface TerraceMapper {
 
    //添加适用平台
    int insertTerrace(AppTerrace appTerrace);
    
    //删除适用平台
    int deleteTerrace(String terraceId);
    
    //修改适用平台
    int updateTerrace(AppTerrace appTerrace);
    
    //查询全部适用平台
    List<AppTerrace> getAppTerrace(AppTerrace appTerrace, String page, String di);

}