package com.cn.zyrs.serviceimpl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.zyrs.domain.AppDepartMent;
import com.cn.zyrs.mapper.DeptLoginMapper;
import com.cn.zyrs.service.AppDeptLoginService;

@Service("deptLoginService")
public class AppDeptLoginImpl implements AppDeptLoginService {
	
	@Resource(name="deptLoginMapper")
	private DeptLoginMapper deptLoginMapper;

		
//	public UserLogin getUserLoginInfo(String username, String password) {
//		return this.userLoginMapper.getUserLoginInfo(username,password);
//	}

	@Override
	public AppDepartMent getDeptLogin(String deptname, String deptcode) {
		return this.deptLoginMapper.getDeptLoginInfo(deptname,deptcode);
	}

}
