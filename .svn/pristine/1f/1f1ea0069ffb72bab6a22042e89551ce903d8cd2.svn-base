package com.cn.zyrs.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppClothStyle;
import com.cn.zyrs.mapper.ClothStyleMapper;
import com.cn.zyrs.service.AppClothStyleService;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
@Service("clothStyleService")
public class AppClothStyleImpl implements AppClothStyleService {
	
	@Resource(name = "clothStyleMapper")
	private ClothStyleMapper clothStyleMapper;
	
	//添加服装风格
	@Override
    public int addAppClothStyle(AppClothStyle appClothStyle) {
		return this.clothStyleMapper.insertAppClothStyle(appClothStyle);
    }

    //删除服装风格
    @Override
	public int delAppClothStyle(String clothStyleId) {
		return this.clothStyleMapper.deleteAppClothStyle(clothStyleId);
	}
	
	//修改服装风格
	@Override
	public int upAppClothStyle(AppClothStyle appClothStyle) {
		return this.clothStyleMapper.updateAppClothStyle(appClothStyle);
	}

	//查询所有服装风格
	@Override
	public List<AppClothStyle> getAllAppClothStyle(AppClothStyle appClothStyle, String page, String di) {
		return this.clothStyleMapper.getAppClothStyle(appClothStyle,page,di);
	}
}
