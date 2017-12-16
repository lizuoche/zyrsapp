package com.cn.zyrs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothStoreFabric;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
public interface ClothStoreFabricMapper {
 
    //添加服装面料
//    int insertAppClothButton(AppClothButton appClothButton);
    
    //删除服装面料
//    int deleteAppClothButton(String clothButtonId);
    
    //修改服装面料
    int updateAppClothStoreFabric(AppClothStoreFabric appClothStoreFabric);
    
    //查询全部服装面料
    List<AppClothStoreFabric> getAppClothStoreFabric(String page, String di);
    
    //根据ID查询面料
    List<AppClothStoreFabric> getAppClothStoreFabricById(@Param("fabricid")String fabricid);
    
    //根据查询条件查询对应面料
    List<AppClothStoreFabric> getAppClothStoreFabricBy(@Param("fabriccode")String fabriccode,@Param("brandname")String brandname,@Param("clothfabriciscomplete")String clothfabriciscomplete);
}