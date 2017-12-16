package com.cn.zyrs.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppClothButton;
import com.cn.zyrs.mapper.ClothButtonMapper;
import com.cn.zyrs.service.AppClothButtonService;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
@Service("clothButtonService")
public class AppClothButtonImpl implements AppClothButtonService {
	
	@Resource(name = "clothButtonMapper")
	private ClothButtonMapper clothButtonMapper;
	
	//添加服装按钮
	@Override
    public int addAppClothButton(AppClothButton appClothButton) {
		return this.clothButtonMapper.insertAppClothButton(appClothButton);

	}

    //删除服装按钮
//	@Override
//	public int delAppClothButton(String clothButtonId) {
//		return this.clothButtonMapper.deleteAppClothButton(clothButtonId);
//	}
	
	//修改服装按钮
//	@Override
//	public int upAppClothButton(AppClothButton appClothButton) {
//		return this.clothButtonMapper.updateAppClothButton(appClothButton);
//	}

	//查询所有服装按钮
	@Override
	public List<AppClothButton> getAllAppClothButton(AppClothButton appClothButton, String page, String di) {
		return this.clothButtonMapper.getAppClothButton(appClothButton,page,di);
	}
}
