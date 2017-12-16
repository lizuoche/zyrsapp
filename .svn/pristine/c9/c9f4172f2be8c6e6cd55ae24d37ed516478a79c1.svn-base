package com.cn.zyrs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothDict;

public interface ClothDictMapper {
 
    //添加数据字典
    int insertAppClothDict(AppClothDict appClothDict);
    
    //删除数据字典
    int deleteAppClothDict(String clothDictId);
    
    //修改数据字典
    int updateAppClothDict(AppClothDict clothDict);
    
    //查询全部数据字典
//    List<AppClothDict> getAppClothDict(AppClothDict appClothDict, String page, String di);
    List<AppClothDict> getAppClothDict(@Param("dictid")String dictid,@Param("dictcode")String dictcode, @Param("dictname")String dictname, String page, String di);
    
//    public AddrInfo getAddrInfo(@Param("corpId")int corpId, @Param("addrId")int addrId);

}