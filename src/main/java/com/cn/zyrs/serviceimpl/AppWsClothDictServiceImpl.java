package com.cn.zyrs.serviceimpl;
import java.util.List;
import javax.annotation.Resource;
import javax.jws.WebService;
import org.springframework.stereotype.Service;
import com.cn.zyrs.domain.AppClothDict;
import com.cn.zyrs.mapper.ClothDictMapper;
import com.cn.zyrs.service.AppWsClothDictService;

@WebService(endpointInterface="com.cn.zyrs.service.AppWsClothDictService",serviceName="AppWsClothDictService")

//@WebService(serviceName="AppWsClothDictService")  

@Service("AppWsClothDictService")
public class AppWsClothDictServiceImpl implements AppWsClothDictService {
	
	@Resource(name = "clothDictMapper")
	private ClothDictMapper clothDictMapper;

	@Override
	public List<AppClothDict> getAppClothDictByCode(String dictcode) {
		System.out.println("+++++++++++++++++++++请求成功+++++++++++++++++++++++++++++++++");
		return null;
	}
}
