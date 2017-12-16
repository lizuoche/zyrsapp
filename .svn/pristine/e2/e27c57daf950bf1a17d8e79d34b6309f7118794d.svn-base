package com.cn.zyrs.wsservice;

import java.util.List;

import javax.jws.WebService;

import org.apache.ibatis.annotations.Param;

import com.cn.zyrs.domain.AppClothDict;

@WebService
public interface AppWsClothDictService {
	// 查询数据字典
	List<AppClothDict> getAllAppClothDict(@Param("dictid") String dictid, @Param("dictcode") String dictcode,@Param("dictname") String dictname, String page, String di);
}
