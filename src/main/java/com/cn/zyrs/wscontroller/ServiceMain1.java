package com.cn.zyrs.wscontroller;

import javax.jws.WebService;
import javax.xml.ws.Endpoint;

import com.cn.zyrs.wsservice.AppWsClothDictService;
import com.cn.zyrs.wsserviceimpl.AppWsClothDictServiceImpl;

@WebService
public class ServiceMain1 {
	public static void main(String args[]) {
		AppWsClothDictService hw = new AppWsClothDictServiceImpl();
		hw.getAllAppClothDict("ip", null, null, null, null);
		Endpoint.publish("http://192.168.1.199:9916/fkjava1", hw);
	}
}
