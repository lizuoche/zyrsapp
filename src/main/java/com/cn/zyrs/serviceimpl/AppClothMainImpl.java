package com.cn.zyrs.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppClothMainModel;
import com.cn.zyrs.mapper.ClothMainModelMapper;
import com.cn.zyrs.service.AppClothMainService;
/**
 * 创建标识：张祥
 * 创建时间：20171114
 */
@Service("clothMainModelService")
public class AppClothMainImpl implements AppClothMainService {
	
	@Resource(name = "clothMainModelMapper")
	private ClothMainModelMapper clothMainModelMapper;
	
	//添加服装主模型
    @Override
	public int addAppClothMainModel(AppClothMainModel appClothMainModel) {
		return this.clothMainModelMapper.insertAppClothMainModel(appClothMainModel);

	}

    //删除服装主模型
	@Override
	public int delAppClothMainModel(String clothMainModelId) {
		return this.clothMainModelMapper.deleteAppClothMainModel(clothMainModelId);
	}
	
	//修改服装服装主模型
	@Override
	public int upAppClothMainModel(AppClothMainModel appClothMainModel) {
		return this.clothMainModelMapper.updateAppClothMainModel(appClothMainModel);
	}

	//查询所有服装主模型
	@Override
	public List<AppClothMainModel> getAllAppClothMainModel(AppClothMainModel appClothMainModel, String page, String di) {
		return this.clothMainModelMapper.getAppClothMainModel(appClothMainModel,page,di);
	}
}
