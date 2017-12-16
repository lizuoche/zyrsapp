package com.cn.zyrs.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cn.zyrs.domain.AppClothModel;
import com.cn.zyrs.domain.ResultJsonBean;
import com.cn.zyrs.service.AppClothModelService;

@Controller
@RequestMapping("/models")
public class AppClothModelController {

	Logger log = Logger.getLogger(AppClothModelController.class);
	@Resource(name = "clothModelService")
	private AppClothModelService clothModelService;
    
	//增加新的服装模型
	@ResponseBody
	@RequestMapping("/addModels")
	public ResultJsonBean addColthModel(HttpServletRequest request, HttpServletResponse response) {
		AppClothModel clothModel = new AppClothModel();
        ResultJsonBean rjb = null;
	        // 入参
			String chinesename = request.getParameter("chinesename");
			String englishname = request.getParameter("englishname");
			String clothclass = request.getParameter("clothclass");
			String clothpart = request.getParameter("clothpart");
			String url = request.getParameter("url");
			String istrue = request.getParameter("istrue");
			String limitsize = request.getParameter("limitsize");
			String clothmodelfilename = request.getParameter("clothmodelfilename");
			String md5file = request.getParameter("md5file");
			String holdpart = request.getParameter("holdpart");
			String byholdpart = request.getParameter("byholdpart");
			String clothmodelsex = request.getParameter("clothmodelsex");
			
			clothModel.setChinesename(chinesename);
			clothModel.setEnglishname(englishname);
			clothModel.setClothclass(clothclass);
			clothModel.setClothpart(clothpart);
			clothModel.setUrl(url);
			clothModel.setIstrue(istrue);
			clothModel.setLimitsize(limitsize);
			clothModel.setClothmodelfilename(clothmodelfilename);
			clothModel.setMd5file(md5file);
			clothModel.setHoldpart(holdpart);
			clothModel.setByholdpart(byholdpart);
			clothModel.setClothmodelsex(clothmodelsex);
			clothModelService.addAppClothModel(clothModel);
		return rjb;
	}
    
	//查询所有服装模型
	@ResponseBody
	@RequestMapping("/getClothModels")
	public ResultJsonBean getAllClothModel(HttpServletRequest request,HttpServletResponse response) {
		ResultJsonBean rjb = null;
		AppClothModel colthModel = new AppClothModel();
        List<AppClothModel> colthModelList = this.clothModelService.getAllAppClothModel(colthModel,null,null);
		rjb = new ResultJsonBean(true, colthModelList, "1", "服装模型查询成功！");
		return rjb;
    }
	
	//删除所选服装模型
	@ResponseBody
	@RequestMapping("/delClothModels")
	public ResultJsonBean delClothModel(HttpServletRequest request,HttpServletResponse response) {
		String modelId = request.getParameter("ids");
		System.out.println(modelId+"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
		ResultJsonBean rjb = null;
        int res1 = this.clothModelService.delAppClothModel(modelId);
		if(res1==1){
			log.info("服装模型删除成功！");
			rjb = new ResultJsonBean(true, res1, "1", "服装模型删除成功！");
			return rjb;
		}else{
			log.error("服装模型删除失败！");
			rjb = new ResultJsonBean(false, res1, "-1", "服装模型删除失败！");
			return rjb;
		}
    }
}
