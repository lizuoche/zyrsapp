package com.cn.zyrs.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppClothClass;
import com.cn.zyrs.mapper.ClothClassMapper;
import com.cn.zyrs.service.AppClothClassService;

@Service("clothClassService")
public class AppClothClassImpl implements AppClothClassService {
	
	@Resource(name = "clothClassMapper")
	private ClothClassMapper clothClassMapper;
	
	//添加服装类型
    @Override
	public int addAppClothClass(AppClothClass appClothClass) {
		return this.clothClassMapper.insertAppClothClass(appClothClass);

	}

    //删除服装类型
	@Override
	public int delAppClothClass(String clothClassId) {
		return this.clothClassMapper.deleteAppClothClass(clothClassId);
	}
	
	//修改服装类型
	@Override
	public int upAppClothClass(AppClothClass appClothClass) {
		return this.clothClassMapper.updateAppClothClass(appClothClass);
	}

	//查询所有服装类型
	@Override
	public List<AppClothClass> getAllAppClothClass(AppClothClass appClothClass, String page, String di) {
		return this.clothClassMapper.getAppClothClass(appClothClass,page,di);
	}
}
