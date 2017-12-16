package com.cn.zyrs.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cn.zyrs.domain.AppClothStyle;
import com.cn.zyrs.domain.ResultJsonBean;
import com.cn.zyrs.service.AppClothStyleService;
/**
 * 创建标识：张祥
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/clothstyle")
public class AppClothStyleController {

	Logger log = Logger.getLogger(AppClothStyleController.class);
	@Resource(name = "clothStyleService")
	private AppClothStyleService clothStyleService;
	
	//查询所有服装类型
	@ResponseBody
	@RequestMapping("/getClothStyle")
	public ResultJsonBean getAllClothModel(HttpServletRequest request,HttpServletResponse response) {
		ResultJsonBean rjb = null;
		AppClothStyle colthStyle = new AppClothStyle();
        List<AppClothStyle> colthStyleList = this.clothStyleService.getAllAppClothStyle(colthStyle, null, null);
		rjb = new ResultJsonBean(true, colthStyleList, "1", "服装款式查询成功！");
		return rjb;
    }
    
	//增加新的服装风格
	@ResponseBody
	@RequestMapping("/addClothStyle")
	public ResultJsonBean addClothClass(HttpServletRequest request, HttpServletResponse response) {
		ResultJsonBean rjb = null;
		AppClothStyle colthStyle = new AppClothStyle();
            // 入参
			String clothstylerank = request.getParameter("clothstylerank");
			String clothstylecnname = request.getParameter("clothstylecnname");
			String clothstyleengname = request.getParameter("clothstyleengname");
			String clothstylebyclothclass = request.getParameter("clothstylebyclothclass");
			String clothstylebyclothpart1 = request.getParameter("clothstylebyclothpart1");
			String clothstylebyclothmodel = request.getParameter("clothstylebyclothmodel");
			String clothstylebyclothpart2 = request.getParameter("clothstylebyclothpart2");
			String clothstylebymlmaterial = request.getParameter("clothstylebymlmaterial");
			String clothstyleistrue = request.getParameter("clothstyleistrue");
			String clothstyleimageurl = request.getParameter("clothstyleimageurl");
			String clothstyleimagename = request.getParameter("clothstyleimagename");
			String clothstyleimagemd5 = request.getParameter("clothstyleimagemd5");
			String clothstyleplatform = request.getParameter("clothstyleplatform");
			
	        colthStyle.setClothstylerank(clothstylerank);
			colthStyle.setClothstylecnname(clothstylecnname);
			colthStyle.setClothstyleengname(clothstyleengname);
			colthStyle.setClothstylebyclothclass(clothstylebyclothclass);
			colthStyle.setClothstylebyclothpart1(clothstylebyclothpart1);
			colthStyle.setClothstylebyclothmodel(clothstylebyclothmodel);
			colthStyle.setClothstylebyclothpart2(clothstylebyclothpart2);
			colthStyle.setClothstylebymlmaterial(clothstylebymlmaterial);
			colthStyle.setClothstyleistrue(clothstyleistrue);
			colthStyle.setClothstyleimageurl(clothstyleimageurl);
			colthStyle.setClothstyleimagename(clothstyleimagename);
			colthStyle.setClothstyleimagemd5(clothstyleimagemd5);
			colthStyle.setClothstyleplatform(clothstyleplatform);
			
			
			int res = -1;
			res = this.clothStyleService.addAppClothStyle(colthStyle);

			if (res == 1) {
				log.info("新增数据类型成功！");
				rjb = new ResultJsonBean(true, res, "1", "新增数据类型成功！");
			} else {
				log.error("新增数据类型失败！");
				rjb = new ResultJsonBean(false, res, "-1", "新增数据类型失败！");
			}
			
		return rjb;
	}
//    
//	
//	
//	//删除所选服装类型
//	@ResponseBody
//	@RequestMapping("/delClothClass")
//	public ResultJsonBean delClothClass(HttpServletRequest request,HttpServletResponse response) {
//		String clothClassId = request.getParameter("ids");
//		System.out.println(clothClassId+"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
//		ResultJsonBean rjb = null;
//        int res1 = this.clothClassService.delAppClothClass(clothClassId);
//		if(res1==1){
//			log.info("服装类型删除成功！");
//			rjb = new ResultJsonBean(true, res1, "1", "服装类型删除成功！");
//			return rjb;
//		}else{
//			log.error("服装类型删除失败！");
//			rjb = new ResultJsonBean(false, res1, "-1", "服装类型删除失败！");
//			return rjb;
//		}
//    }
}
