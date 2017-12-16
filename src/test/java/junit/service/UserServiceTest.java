package junit.service;

import javax.annotation.Resource;

import com.cn.zyrs.domain.AppClothModel;
import com.cn.zyrs.service.AppClothModelService;

import junit.test.SpringTestCase;
@Resource(name = "clothModerlService")


public class UserServiceTest extends SpringTestCase{
	
	@Resource
	private AppClothModelService clothModerlService; 
	AppClothModel colthModel = new AppClothModel();
	
//	colthModel.setModelid("111")
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
//	colthModel.setModelid("111");
	
//	return null;

}
