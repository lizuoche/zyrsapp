package com.cn.zyrs.domain;

public class AppClothQuantityBodySize {
	// 量体信息ID
	private String ltxxid;
	// 中文名
	private String chinesename;
	// 英文名
	private String englishname;
	// 部位风格
	private String bodystyle;
    // 性别
	private String sex;

	public String getLtxxid() {
		return ltxxid;
	}

	public void setLtxxid(String ltxxid) {
		this.ltxxid = ltxxid;
	}

	public String getChinesename() {
		return chinesename;
	}

	public void setChinesename(String chinesename) {
		this.chinesename = chinesename;
	}

	public String getEnglishname() {
		return englishname;
	}

	public void setEnglishname(String englishname) {
		this.englishname = englishname;
	}

	public String getBodystyle() {
		return bodystyle;
	}

	public void setBodystyle(String bodystyle) {
		this.bodystyle = bodystyle;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
}