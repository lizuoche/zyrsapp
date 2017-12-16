package com.cn.zyrs.controller;

import javax.jws.WebService;
import javax.xml.ws.Endpoint;

import com.cn.zyrs.domain.AppDepartMent;

//@Controller
//@RequestMapping("/models")
@WebService
public class WsDeptLoginlController {
	
//	/**
//	 * 供客户端调用的方法
//	 * @param name				传入参数
//	 * @return String			返回结果
//	 */
//	public String getValue(String name){
//		return "我叫："+name;
//	}
//	
	
	public String getDeptLogin(String deptname, String deptcode) {
		System.out.println(deptname);
		System.out.println(deptcode);
		if(deptname!=null && deptcode!=null) {
			return "sucess";
		}
		return deptcode;
		
	}

//	Logger log = Logger.getLogger(WsDeptLoginlController.class);
//	@Resource(name = "clothModelService")
//	private AppClothModelService clothModelService;
//
//	@ResponseBody
//	@RequestMapping("/addModels")
//	public ResultJsonBean addColthModel(HttpServletRequest request, HttpServletResponse response) {
//		AppClothModel clothModel = new AppClothModel();
//        ResultJsonBean rjb = null;
//
//		// 入参
//		String chinesename = request.getParameter("chinesename");
//		String englishname = request.getParameter("englishname");
//		String clothclass = request.getParameter("clothclass");
//		String clothpart = request.getParameter("clothpart");
//		String url = request.getParameter("url");
//		String istrue = request.getParameter("istrue");
//		String limitsize = request.getParameter("limitsize");
//		String clothmodelfilename = request.getParameter("clothmodelfilename");
//		String md5file = request.getParameter("md5file");
//		String holdpart = request.getParameter("holdpart");
//		String byholdpart = request.getParameter("byholdpart");
//		String clothmodelsex = request.getParameter("clothmodelsex");
//		System.out.println(englishname+"8888888888888888888888888888888888888888");
//		
//		clothModel.setChinesename(chinesename);
//		clothModel.setEnglishname(englishname);
//		clothModel.setClothclass(clothclass);
//		clothModel.setClothpart(clothpart);
//		clothModel.setUrl(url);
//		clothModel.setIstrue(istrue);
//		clothModel.setLimitsize(limitsize);
//		clothModel.setClothmodelfilename(clothmodelfilename);
//		clothModel.setMd5file(md5file);
//		clothModel.setHoldpart(holdpart);
//		clothModel.setByholdpart(byholdpart);
//		clothModel.setClothmodelsex(clothmodelsex);
//		clothModelService.addAppClothModel(clothModel);
//		return rjb;
//	}
	
	public static void main(String[] args) {
		Endpoint.publish("http://192.168.1.199:9090/Service/WsDeptLoginlController", new WsDeptLoginlController());
		
//		Endpoint.publish("http://localhost:8080/Service/Function",new Function()); 
		System.out.println("service success!");
	}
}
