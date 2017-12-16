var queryStr = location.href.substring(location.href.indexOf("?") + 1);
var parameters = queryStr.split("=");
var type = parameters[1].split("_")[0];
var id = parameters[1].split("_")[1];
var url = null;

$(function() {
	if(type=="tie"){
		url = "tie_commodity/";
	}else if(type=="cravat"){
		url = "cravat_commodity/";
	}else if(type=="shirtbutton"){
		url = "shirtbutton_commodity/";
	}else if(type=="suitbutton"){
		url = "suitbutton_commodity/";
	}else if(type=="trousersbutton"){
		url = "trousersbutton_commodity/";
	}else if(type=="vestbutton"){
		url = "vestbutton_commodity/";
	}
	doSearch();
});

$(function() {
	upload();
});

// 获取要修改的商品信息
function doSearch() {
	$.ajax({
		type : "post",
		url : "dicts/getClothDicts",
		data : {
			"id" : id,
		},
		dataType : "json",
		async : false,
		success : function(data) {
			if (data.success) {
				var res = data.result[0];
				var tbody = $("#tbody");
				tbody.empty();
				var tabhtml = "";
				$("#dictid").val(res.dictid);
				$("#dictcode").val(res.dictcode);
				$("#dictname").val(res.dictname);
		        tbody.append(tabhtml);
			}
		}
	});
}

// 数据字典修改保存
function save() {
	alert(id);
	// 验证参数
	if ($("#dictcode").val() == "") {
		$("#dictcodeError").html("<font style='color:red'>请输入数据字典编码!</font>");
		$("#dictcode").focus();
		return false;
	}
	if ($("#dictname").val() == "") {
		$("#dictnameError").html("<font style='color:red'>请输入数据字典名称!</font>");
		$("#dictcode").focus();
		return false;
	}
	
	
	if ($("#dictcodeError").html() != "") {
		$("#dictcode").focus();
		return false;
	}
	if ($("#dictnameError").html() != "") {
		$("#dictname").focus();
		return false;
	}
	
	
	
	layer.confirm("确定修改吗？", function() {
		$.ajax({
			url : "dicts/updateDicts",
			type : "post",
			dataType : "json",
			data : {
				"id" : id,
				"dictcode" : $("#dictcode").val(),
				"dictname" : $("#dictname").val(),
			},
			async : false,
			success : function(data) {
				if (data.success) {
					layer.alert("修改信息成功!", {
						icon : 1
					});
				} else {
					layer.alert("修改信息失败!", {
						icon : 2
					});
				}
				parent.location.reload();
			},
			error : function(data) {
			}
		});
	});
}

//验证品牌英文名是否为空
function checkBrandNameEN() {
	if ($("#brandNameEN").val() != "") {
		$("#brandNameENError").html("");
	} else {
		$("#brandNameENError").html("<font style='color:red'>请输入品牌英文名!</font>");
		$("#brandNameEN").focus();
	}
}

// 验证品牌中文名是否为空
function checkBrandNameCN() {
	if ($("#brandNameCN").val() != "") {
		$("#brandNameCNError").html("");
	} else {
		$("#brandNameCNError").html("<font style='color:red'>请输入品牌中文名!</font>");
		$("#brandNameCN").focus();
	}
}

//验证面料名称是否为空
function checkBomName() {
	if ($("#bomName").val() != "") {
		$("#bomNameError").html("");
	} else {
		$("#bomNameError").html("<font style='color:red'>请输入面料名称!</font>");
		$("#bomName").focus();
	}
}

// 验证商品编码是否已存在
function checkBomCode() {
	if ($("#bomCode").val() != "") {
		$("#bomCodeError").html("");
	} else {
		$("#bomCodeError").html("<font style='color:red'>请输入商品编码!</font>");
		$("#bomCode").focus();
		return;
	}
	$.ajax({
		type : "post",
		url : "parts/checkBomCode",
		data : {
//			"type" : type,
			"bomcode" : $("#bomCode").val()
		},
		dataType : "json",
		async : false,
		success : function(data) {
			if (data.success) {
				$("#bomCodeError").html("");
				return true;
			} else {
				$("#bomCodeError").html(
						"<font style='color:red'>面料编码已存在，请重新输入!</font>");
				$("#bomCode").focus();
				return false;
			}
		}
	});
}

//验证模型名称是否为空
function checkModelName() {
	if ($("#modelName").val() != "") {
		$("#modelNameError").html("");
	} else {
		$("#modelNameError").html("<font style='color:red'>请输入商品模型名称!</font>");
		$("#modelName").focus();
		return null;
	}
	
	//验证模型名称是否已经存在
	$.ajax({
		type : "post",
		url : "goods/checkModelName",
		data : {
			"type" : type,
			"modelName" : $("#modelName").val()
		},
		dataType : "json",
		async : false,
		success : function(data) {
			if (data.success) {
				$("#modelNameError").html("");
				return true;
			} else {
				$("#modelNameError").html(
						"<font style='color:red'>商品模型名称已存在，请重新输入!</font>");
				$("#modelName").focus();
				return false;
			}
		}
	});
	
	
}

// 上传文件
function upload() {
	// 选择文件之后执行上传
	$('#fileToUpload').on('change', function() {
		$.ajaxFileUpload({
			url : 'goods/upload1',
			type : 'post',
			data : {
					"id"   : id,
					"fileName" : $("#smallimage").val(),
					"type"   : type
			},
			secureuri : false,
			fileElementId : 'fileToUpload',// file标签的id
			dataType : 'json',// 返回数据的类型
			success : function(data) {
				$("#smallimage").val(data.name);
				setTimeout(function() {
					window.location.reload();
				}, 1500);
			},
			error : function(data, status, e) {
				layer.alert(e, {
					icon : 2
				});
			}
		});
	});

	

	// 选择文件之后执行上传
	$('#fileToUpload1').on('change', function() {
		$.ajaxFileUpload({
			url : 'parts/upload1',
			type : 'post',
			data : {
				"type" : type,
				"id"   : id,
				"fileName" : $("#bigimage").val(),
				"flag"	:	"bigimage"
			},
			secureuri : false,
			fileElementId : 'fileToUpload1',// file标签的id
			dataType : 'json',// 返回数据的类型
			success : function(data) {
				$("#bigimage").val(data.name);
				setTimeout(function() {
					window.location.reload();
				}, 1500);
			},
			error : function(data, status, e) {
				layer.alert(e, {
					icon : 2
				});
			}
		});
	});
	
	
	// 选择文件之后执行上传
	$('#fileToUpload2').on('change', function() {
		$.ajaxFileUpload({
			url : 'parts/upload1',
			type : 'post',
			data : {
				"type" : type,
				"id"   : id,
				"fileName" : $("#normalimage").val(),
				"flag"	:	"normalimage"
			},
			secureuri : false,
			fileElementId : 'fileToUpload2',// file标签的id
			dataType : 'json',// 返回数据的类型
			success : function(data) {
				$("#normalimage").val(data.name);
				setTimeout(function() {
					window.location.reload();
				}, 1500);
			},
			error : function(data, status, e) {
				layer.alert(e, {
					icon : 2
				});
			}
		});
	});

}