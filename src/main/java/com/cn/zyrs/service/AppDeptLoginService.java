package com.cn.zyrs.service;

import com.cn.zyrs.domain.AppDepartMent;

public abstract interface AppDeptLoginService {
	AppDepartMent getDeptLogin(String deptname, String deptcode);
}
