$(function() {
	doSearch();
});

// 截取字符串显示
function getInterceptedStr(sSource, iLen) {
	if (sSource.replace(/[^x00-xff]/g, "xx").length <= iLen) {
		return sSource;
	}
	var ELIDED = "...";

	var str = "";
	var l = 0;
	var schar;
	for (var i = 0; schar = sSource.charAt(i); i++) {
		str += schar;
		l += (schar.match(/[^x00-xff]/) != null ? 2 : 1);
		if (l >= iLen - ELIDED.length) {
			break;
		}
	}
	str += ELIDED;

	return str;
}

// 查找裤子款式配置
function doSearch() {
	$
			.ajax({
				type : "post",
				url : "../../parts/getStyle",
				data : {
					"type" : "trousers",
//					"enName" : "collar"
				},
				dataType : "json",
				async : false,
				success : function(data) {
					if (data.success) {
						var templateList = data.result;

						var tbody = $("#tbody");
						tbody.empty();
						if (templateList.length > 0) {
							var tabhtml = "";
							for (var i = 0; i < templateList.length; i++) {
								var template = templateList[i];
								var dssid = template.id;
								tabhtml += "<tr>"
										+ "<td><input type='checkbox' name='check' value='"
										+ dssid
										+ "'/></td>"
										+ "<td>"
										+ template.stylename
										+ "</td>"
										+ "<td>"
										+ template.assetbundle
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.yaotou,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.kujiao,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.cekoudai,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.houkoudai,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.kouyan,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.small_image,10)
										+ "</td>"
										+ "<td>"
										+ getInterceptedStr(template.big_image,10)
										+ "</td>"
										+ "<td>"
										+ template.jsonname
										+ "</td>"
										+ "<td>"
										+ "<div class='button-group'><a class='button border-red' onclick='del("
										+ '"trousers_'
										+ dssid
										+ '"'
										+ ")'><span class='icon-trash-o'></span>删除</a></div>"
										+ "<div class='button-group'><a class='button border-red' onclick='update("
										+ '"trousers_'
										+ dssid
										+ '"'
										+ ")'><span class='icon-trash-o'></span>修改</a></div>"
										+ "<div class='button-group'><a class='button border-green' onclick='trousersDetailToJson("
										+ '"trousers_'
										+ dssid
										+ '"'
										+ ")'><span class='icon-trash-o' style='width:100px'></span>生成JSON</a></div>"
										+ "</td>" + "</tr>"

							}
							tbody.append(tabhtml);
						}
					}
				}
			});
}

// 删除
function del(ids) {
	// 获取选中的id号
	if (ids==null||ids==''){
		ids='';
		var length = $("input[name='check']:checked").length;
		if (length < 1) {
			layer.alert("请选择信息!", {
				icon : 2
			});
			return false;
		}
		 var el = document.getElementsByTagName('input');
		 var len = el.length;
		 for (var i = 0; i < len; i++) {
			 if ((el[i].type == "checkbox") && (el[i].name == 'check') && (el[i].checked)){
				 ids =ids + el[i].value+",";
			 }
		 }
	}else{
		ids=ids.split('_')[1];
	}
	layer.confirm("确定要删除吗？", {
		btn : [ '确定','取消' ],// 可以无限个按钮

	}, function() {
		deldteSpare(ids);
	});

}

//批量删除
function deldteSpare(ids) {
    	 $.ajax({
 			url : "../../parts/deleteStyle",
 			type : "post",
 			dataType : "json",
 			data : {
 				"type" : "trousers",
 				"ids" : ids
 			},
 			async : false,
 			success : function(data) {
 				if (data.success) {
 					layer.alert("删除信息成功！", {
 						icon : 1
 					});
 					window.location.reload();
 				} else {
 					layer. alert("删除信息失败！",{
 						icon :2
 					});
 				}
 			},
 		});
}


// 新增
function add() {
	layer.open({
		type : 2,
		area : [ '1000px', '800px' ],
		title : "新增裤子款式",
		shadeClose : false, // 点击遮罩关闭
		content : '../action/addStyle.jsp?type=trousers'
	});
}

// 修改
function update(id) {
	layer.open({
		type : 2,
		area : [ '1000px', '800px' ],
		title : "修改裤子款式",
		shadeClose : false, // 点击遮罩关闭
		content : '../action/updateStyle.jsp?id=' + id
	});
}

//裤子款式配置生成JSON文件
function styleToJson() {
	layer.confirm("确定要生成吗？", {
		btn : [ '确定','取消' ],// 可以无限个按钮

	}, function() {
		//生成JSON
		
		    	 $.ajax({
		 			url : "../../parts/styleToJson",
		 			type : "post",
		 			dataType : "json",
		 			data : {
		 				"type" : "trousers"
		 			},
		 			async : false,
		 			success : function(data) {
		 				if (data.success) {
		 					layer.alert("JSON文件生成成功！", {
		 						icon : 1
		 					});
		 				} else {
		 					layer. alert("JSON文件生成失败！",{
		 						icon :2
		 					});
		 				}
		 			},
		 		});
	});
}


//款式配置详情生成JSON文件
function trousersDetailToJson(ids) {
	var id = ids.split('_')[1];
	var styleName = null;
	var assetbundle = null;
	var yaotou = null;
	var frontdart = null;
	var kujiao = null;
	var cekoudai = null;
	var houkoudai = null;
	var kouyan = null;
	//附选条件
	var suitbom = null;
	var insidebom = null;
	var shirtbom = null;
	var tiebom = null;
	var kouyanbom = null;
	var botouyanbom = null;
	var suitbutton = null;
	var shirtbutton = null;
	var vestbutton = null;
	var trousersbutton = null;
	var tie = null;
	var cravat = null;
	// 查询款式配置详情
	$.ajax({
		type : "post",
		url : "../../parts/getStyle",
		data : {
			"id" : id,
			"type" : "trousers"
		},
		dataType : "json",
		async : false,
		success : function(data) {
			if (data.success) {
				var res = data.result[0];
				styleName = res.stylename;
				assetbundle = res.assetbundle;
				yaotou = res.yaotou;
				frontdart = res.frontdart;
				kujiao = res.kujiao;
				cekoudai = res.cekoudai;
				houkoudai = res.houkoudai;
				kouyan = res.kouyan;
				
				
				suitbom = res.suitbom;
				insidebom = res.insidebom;
				shirtbom = res.shirtbom;
				tiebom = res.tiebom;
				kouyanbom = res.tiebom = res.tiebom;;
				botouyanbom = res.botouyanbom;
				suitbutton = res.suitbutton;
				shirtbutton = res.shirtbutton;
				vestbutton = res.vestbutton;
				trousersbutton = res.trousersbutton;
				tie = res.tie;
				cravat = res.cravat;

				// 生成JSON文件
				$.ajax({
					url : "../../parts/detailToJson",
					type : "post",
					dataType : "json",
					data : {
						// "id" : id,
						"type" : "trousers",
						"styleName" : styleName,
						"assetbundle" : assetbundle,
						"yaotou" : yaotou,
						"frontdart" : frontdart,
						"kujiao" : kujiao,
						"cekoudai" : cekoudai,
						"houkoudai" : houkoudai,
						"kouyan" : kouyan,
						
						"suitbom" : suitbom,
						"insidebom" : insidebom,
						"shirtbom" : shirtbom,
						"tiebom" : tiebom,
						"kouyanbom" : kouyanbom,
						"botouyanbom" : botouyanbom,
						"tiebom" : tiebom,
						"suitbutton" : suitbutton,
						"shirtbutton" : shirtbutton,
						"vestbutton" : vestbutton,
						"trousersbutton" : trousersbutton,
						"tie" : tie,
						"cravat" : cravat
					},
					async : false,
					success : function(data) {
						if (data.success) {
							layer.alert("JSON文件生成成功！", {
								icon : 1
							});
						} else {
							layer.alert("JSON文件生成失败！", {
								icon : 2
							});
						}
					},
				});

			}
		}
	});
}
