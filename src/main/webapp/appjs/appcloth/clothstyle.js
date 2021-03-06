$(function() {
	doSearch();
});

// 截取字符串显示
//function getInterceptedStr(sSource, iLen) {
//	if (sSource.replace(/[^x00-xff]/g, "xx").length <= iLen) {
//		return sSource;
//	}
//	var ELIDED = "...";
//
//	var str = "";
//	var l = 0;
//	var schar;
//	for (var i = 0; schar = sSource.charAt(i); i++) {
//		str += schar;
//		l += (schar.match(/[^x00-xff]/) != null ? 2 : 1);
//		if (l >= iLen - ELIDED.length) {
//			break;
//		}
//	}
//	str += ELIDED;
//
//	return str;
//}

//新增服装款式
function add(enName) {
	
	layer.open({
		type : 2,
		area : [ '950px', '630px' ],
		title : "新增服装款式",
		shadeClose : false, // 点击遮罩关闭
		content : '../appcloth/addclothstyle.jsp?enName=' + enName
	});
}

//保存服装款式
function save() {
    layer.confirm("确定新增服装款式？", function() {
		var id = null;
		
//		//获取单选框的值
//		var issell=null;
//		var el = document.getElementsByTagName('input');
//		var len = el.length;
//		for (var i = 0; i < len; i++) {
//			if ((el[i].type == "radio") && (el[i].name == 'issell')
//					&& (el[i].checked)) {
//				issell = el[i].value;
//			}
//		}
		$.ajax({
			
			url : "clothstyle/addClothStyle",
			type : "post",
			dataType : "json",
			data : {
				"clothstylerank" : $("#clothstylerank").val(),
				"clothstylecnname" : $("#clothstylecnname").val(),
				"clothstyleengname" : $("#clothstyleengname").val(),
				"clothstylebyclothclass" : $("#clothstylebyclothclass").val(),
				"clothstylebyclothpart1" : $("#clothstylebyclothpart1").val(),
				"clothstylebyclothmodel" : $("#clothstylebyclothmodel").val(),
				"clothstylebyclothpart2" : $("#clothstylebyclothpart2").val(),
				"clothstylebymlmaterial" : $("#clothstylebymlmaterial").val(),
				"clothstyleistrue" : $("#clothstyleistrue").val(),
				"clothstyleimageurl" : $("#clothstyleimageurl").val(),
				"clothstyleimagename" : $("#clothstyleimagename").val(),
				"clothstyleimagemd5" : $("#clothstyleimagemd5").val(),
				"clothstyleplatform" : $("#clothstyleplatform").val()
			},
			async : false,
			success : function(data) {
				if (data.success) {
					layer.alert("新增服装款式成功!", {
						icon : 1
					});
				} else {
					layer.alert("新增服装款式失败!", {
					});
				}
				parent.location.reload();
			},
			error : function(data) {
			}
		});
	});
}

// 查询全部服装类型
function doSearch() {
	$.ajax({
			type : "post",
		    url : "../../clothstyle/getClothStyle",
			data : {
				//"type" : "goods",
				//"enName" : "tie"
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
								var dssid = template.clothstyleid;
								
								tabhtml += "<tr>"
										+ "<td><input type='checkbox' name='check' value='"
										+ dssid
										+ "'/></td>"
										+ "<td>"
										+ template.clothstylerank
										+ "</td>"
										+ "<td>"
										+ template.clothstylecnname
										+ "</td>"
										+ "<td>"
										+ template.clothstyleengname
										+ "</td>"
										+ "<td>"
										+ template.clothstylebyclothclass
										+ "</td>"
										+ "<td>"
										+ template.clothstylebyclothpart1
										+ "</td>"
										+ "<td>"
										+ template.clothstylebyclothmodel
										+ "</td>"
										+ "<td>"
										+ template.clothstylebyclothpart2
										+ "</td>"
										+ "<td>"
										+ template.clothstylebymlmaterial
										+ "</td>"
										+ "<td>"
										+ template.clothstyleistrue
										+ "</td>"
										+ "<td>"
										+ template.clothstyleimageurl
										+ "</td>"
										+ "<td>"
										+ template.clothstyleimagename
										+ "</td>"
										+ "<td>"
										+ template.clothstyleimagemd5
										+ "</td>"
										+ "<td>"
										+ template.clothstyleplatform
										+ "</td>"
										
										+ "<td>"
//										+ getInterceptedStr(template.salecode, 20)
										+""//暂时用不到的字段 设为空
										+ "</td>"
										+ "<td>"
										+ "<div class='button-group'><a class='button border-red' onclick='del("
										+ '"goods_'
										+ dssid
										+ '"'
										+ ")'><span class='icon-trash-o'></span>删除</a></div>"
										+ "<div class='button-group'><a class='button border-red' onclick='update("
										+ '"tie_'
										+ dssid
										+ '"'
										+ ")'><span class='icon-trash-o'></span>修改</a></div>"
										+ "</td>" + 
										"</tr>"

							}
							tbody.append(tabhtml);
						}
					}
			   }
		});
}

// 删除服装部位
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
		deleteSpare(ids);
	});
}

//批量删除服装部位
function deleteSpare(ids) {
	alert(ids);
	 $.ajax({
		url : "../../clothpart/delClothPart",
		type : "post",
		dataType : "json",
		data : {
//			"ids" : "ids",
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
				layer.alert("删除信息失败！",{
					icon :2
				});
			}
		},
	});
}




// 修改服装部位
function update(id) {
	layer.open({
		type : 2,
		area : [ '1000px', '700px' ],
		title : "修改服装部位",
		shadeClose : false, // 点击遮罩关闭
		content : '../action/updateGoods.jsp?id=' + id
	});
}


//领带生成品牌JSON
//function goodsToJson(type){
//	layer.confirm("确定要生成吗？", {
//		btn : [ '确定', '取消' ],// 可以无限个按钮
//
//	}, function() {
//		// 生成JSON
//
//		$.ajax({
//			url : "../../json/goodsToJson",
//			type : "post",
//			dataType : "json",
//			data : {
//				"type" : type
//			},
//			async : false,
//			success : function(data) {
//				if (data.success) {
//					layer.alert("JSON文件生成成功！", {
//						icon : 1
//					});
//				} else {
//					layer.alert("JSON文件生成失败！", {
//						icon : 2
//					});
//				}
//			},
//		});
//	});
//}


//西服面料品牌详情生成JSON文件
//function goodsDetailToJson(type) {
//	// 查询面料品牌详情
//	$.ajax({
//		type : "post",
//		url : "../../json/detailToJson",
//		data : {
//			"type" : type,
//		},
//		dataType : "json",
//		async : false,
//		success : function(data) {
//			if (data.success) {
//				layer.alert("JSON文件生成成功！", {
//					icon : 1
//				});
//			} else {
//				layer.alert("JSON文件生成失败！", {
//					icon : 2
//				});
//			}
//		}
//	});
//}

//选择服装类型
function changeClothClass(){
    parent.layer.open({
		type : 2,
		area : [ '1000px', '500px' ],
		title : "选择服装类型",
		shadeClose : false, // 点击遮罩关闭
        content : '../appcommon/selectclothclass.jsp',
        
        async : false,
		success : function(data) {
			if (data.success) {
				layer.alert("删除信息成功！", {
					icon : 1
				});
				document.getElementById("clothpartclass").value = "2222222222222222222222";
				window.location.reload();
			} else {
//				layer. alert("删除信息失败！",{
//					icon :2
//				});
				document.getElementById("clothpartclass").value = "5555555555555";
				var aa = window.LS.get("ids");
				
				document.getElementById("clothpartclass").value = aa;
//				document.getElementById("clothpartclass").value = ids;
			}
		},
    });
   
}

//function selectSpare(ids) {
//
////--关闭 当前页面 开始-- 
//var index = parent.layer.getFrameIndex(window.name); 
//parent.layer.close(index); 
//alert("ddd");
//}