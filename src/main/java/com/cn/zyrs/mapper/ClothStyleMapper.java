package com.cn.zyrs.mapper;

import java.util.List;

import com.cn.zyrs.domain.AppClothStyle;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
public interface ClothStyleMapper {
 
    //添加服装风格个
    int insertAppClothStyle(AppClothStyle appClothStyle);
    
    //删除服装风格
    int deleteAppClothStyle(String clothStyleId);
    
    //修改服装风格
    int updateAppClothStyle(AppClothStyle appClothStyle);
    
    //查询全部服装风格
    List<AppClothStyle> getAppClothStyle(AppClothStyle appClothStyle, String page, String di);

}