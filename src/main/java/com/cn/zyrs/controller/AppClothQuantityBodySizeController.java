package com.cn.zyrs.controller;


import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cn.zyrs.domain.AppClothQuantityBodySize;
import com.cn.zyrs.domain.ResultJsonBean;
import com.cn.zyrs.service.AppClothQuantityBodySizeService;
/**
 * 创建标识：张祥
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/clothQuantityBodySize")
public class AppClothQuantityBodySizeController {

	Logger log = Logger.getLogger(AppClothQuantityBodySizeController.class);
	@Resource(name = "clothQuantityBodySizeService")
	private AppClothQuantityBodySizeService clothQuantityBodySizeService;
	
	//查询所有量体字段信息
//	@ResponseBody
//	@RequestMapping("/getClothQuantityBodySize")
//	public ResultJsonBean getAllQuantityBodySize(HttpServletRequest request,HttpServletResponse response) {
//		ResultJsonBean rjb = null;
//		AppClothQuantityBodySize clothQuantityBodySize = new AppClothQuantityBodySize();
//        List<AppClothQuantityBodySize> colthQuantityBodySizeList = this.clothQuantityBodySizeService.getAllAppClothQuantityBodySize(clothQuantityBodySize, null, null);
//		rjb = new ResultJsonBean(true, colthQuantityBodySizeList, "1", "量体字段信息查询成功！");
//		return rjb;
//    }
	
	
	
    
	//增加新的服装模型
	@ResponseBody
	@RequestMapping("/addClothQuantityBodySize")
	public ResultJsonBean addClothQuantityBodySize(HttpServletRequest request, HttpServletResponse response) {
		ResultJsonBean rjb = null;
		AppClothQuantityBodySize clothQuantityBodySize = new AppClothQuantityBodySize();
		
	        // 入参
		    String ltxxid = request.getParameter("ltxxid");
			String chinesename = request.getParameter("chinesename");
			String englishname = request.getParameter("englishname");
			String bodystyle = request.getParameter("bodystyle");
			String sex = request.getParameter("sex");
			clothQuantityBodySize.setLtxxid(ltxxid);
			clothQuantityBodySize.setChinesename(chinesename);
			clothQuantityBodySize.setEnglishname(englishname);
			clothQuantityBodySize.setBodystyle(bodystyle);
			clothQuantityBodySize.setSex(sex);
			int res = -1;
			res = this.clothQuantityBodySizeService.addAppClothQuantityBodySize(clothQuantityBodySize);

			if (res == 1) {
				log.info("新增数据成功！");
				rjb = new ResultJsonBean(true, res, "1", "新增数据成功！");
			} else {
				log.error("新增数据失败！");
				rjb = new ResultJsonBean(false, res, "-1", "新增数据失败！");
			}
			
		return rjb;
	}
    
	
	
//	//删除所选量体信息
//	@ResponseBody
//	@RequestMapping("/delClothQuantityBodySize")
//	public ResultJsonBean delClothClass(HttpServletRequest request,HttpServletResponse response) {
//		String clothLtxxId = request.getParameter("ids");
//		ResultJsonBean rjb = null;
//        int res1 = this.clothQuantityBodySizeService.delAppClothQuantityBodySize(clothLtxxId);
//		if(res1==1){
//			log.info("删除成功！");
//			rjb = new ResultJsonBean(true, res1, "1", "删除成功！");
//			return rjb;
//		}else{
//			log.error("删除失败！");
//			rjb = new ResultJsonBean(false, res1, "-1", "删除失败！");
//			return rjb;
//		}
//    }
//	
	
	//根据id查询服装类型
//	@ResponseBody
//	@RequestMapping("/getAllClothClassById")
//	public ResultJsonBean getAllClothClassById(HttpServletRequest request,HttpServletResponse response) {
//		ResultJsonBean rjb = null;
//		String clothclassid = request.getParameter("id");
//        List<AppClothClass> colthClassList = this.clothClassService.getAllAppClothClassById(clothclassid);
//		rjb = new ResultJsonBean(true, colthClassList, "1", "服装模型查询成功！");
//		return rjb;
//    }
//	
//	//修改保存数据类型
//	@ResponseBody
//	@RequestMapping("/updateClothClass")
//	public ResultJsonBean updateDicts(HttpServletRequest request,HttpServletResponse response) {
//		ResultJsonBean rjb = null;
//		String clothclassid = request.getParameter("id");
//        String clothclasscnname = request.getParameter("clothclasscnname");
//        String clothclassengname = request.getParameter("clothclassengname");
//		String clothclasssex = request.getParameter("clothclasssex");
//		String clothclassistrue = request.getParameter("clothclassistrue");
//		String clothclasscode = request.getParameter("clothclasscode");
//		
//		AppClothClass colthClass = new AppClothClass();
//		colthClass.setClothclassid(clothclassid);
//		colthClass.setClothclasscnname(clothclasscnname);
//		colthClass.setClothclassengname(clothclassengname);
//		colthClass.setClothclasssex(clothclasssex);
//		colthClass.setClothclassistrue(clothclassistrue);
//		colthClass.setClothclasscode(clothclasscode);
//		int res = -1;
//		res = this.clothClassService.upAppClothClass(colthClass);
//
//		if (res == 1) {
//			log.info("修改服装类型成功！");
//			rjb = new ResultJsonBean(true, res, "1", "修改服装类型成功！");
//		} else {
//			log.error("修改服装类型失败！");
//			rjb = new ResultJsonBean(false, res, "-1", "修改服装类型失败！");
//		}
//		return rjb;
//    }
	
	//生成服装类型json文件
//		@ResponseBody
//		@RequestMapping("/clothClassToJson")
//		public ResultJsonBean clothClassToJson(HttpServletRequest request,HttpServletResponse response) {
//			ResultJsonBean rjb = null;
//
//			String type = request.getParameter("type");
//
//			String rootPath = request.getSession().getServletContext().getRealPath("/");
//			System.out.println(rootPath+"++++++++++++++++++++++++++++++++++获取服务器上得路径+++++++++++++++++++++++++++++++++++++");
//
//			Map<String, String> map = new HashMap<String, String>();
//			AppClothClass colthClass = new AppClothClass();
//			map.put("type", type);
//
////			List<SuitStyle> ssl = null;
////			List<TrousersStyle> tsl = null;
////			List<ShirtStyle> ssl1 = null;
////			List<VestStyle> vsl = null;
////			if ("suit".equalsIgnoreCase(type)) {
////				DynamicDataSource.setCustomerType(DynamicDataSource.DATA_SOURCE_1);
////				ssl = this.partsService.getSuitStyle(map);
////				rjb = SuitStyleToJson(ssl, rootPath, "suit.json");
////			} 
//			
//			DynamicDataSource.setCustomerType(DynamicDataSource.DATA_SOURCE_1);
//			List<AppClothClass> colthClassList = this.clothClassService.getAllAppClothClass(colthClass, null, null);
////			rjb = SuitStyleToJson(ssl, rootPath, "suit.json");
//			rjb = new ResultJsonBean(true, colthClassList, "1", "服装模型查询成功！");
//			return rjb;
//	    }
		
}
