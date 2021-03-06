package com.cn.zyrs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothModel;
import com.cn.zyrs.domain.AppClothStoreFabric;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
public interface ClothModelMapper {
 
    //添加模型
    int insertAppClothModel(AppClothModel appClothModel);
    
    //删除模型
    int deleteAppClothModel(String clothModelId);
    
    //修改服装模型
    int updateAppClothModel(AppClothModel appClothModel);
    
    //查询全部服装模型
    List<AppClothModel> getAppClothModel(AppClothModel appClothModel, String page, String di);
    
    //根据ID查询服装模型
    List<AppClothModel> getAppClothModelById(@Param("clothmodelid")String clothmodelid);

}