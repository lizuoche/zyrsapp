package com.cn.zyrs.mapper;

import java.util.List;

import com.cn.zyrs.domain.AppClothButton;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
public interface ClothButtonMapper {
 
    //添加服装按钮
    int insertAppClothButton(AppClothButton appClothButton);
    
    //删除服装按钮
//    int deleteAppClothButton(String clothButtonId);
    
    //修改服装按钮
//    int updateAppClothButton(AppClothButton appClothButton);
    
    //查询全部服装按钮
    List<AppClothButton> getAppClothButton(AppClothButton appClothButton, String page, String di);

}