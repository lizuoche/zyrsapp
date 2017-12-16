package com.cn.zyrs.domain;

public class AppTerrace {
	//平台id
	private String terraceid;
	//平台中文名 例如安卓
	private String cnterracename;
	//平台英文名 例如 android
    private String engterracename;
	public String getTerraceid() {
		return terraceid;
	}
	public void setTerraceid(String terraceid) {
		this.terraceid = terraceid;
	}
	public String getCnterracename() {
		return cnterracename;
	}
	public void setCnterracename(String cnterracename) {
		this.cnterracename = cnterracename;
	}
	public String getEngterracename() {
		return engterracename;
	}
	public void setEngterracename(String engterracename) {
		this.engterracename = engterracename;
	}
	
}