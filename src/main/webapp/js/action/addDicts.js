var queryStr = location.href.substring(location.href.indexOf("?") + 1);
var parameters = queryStr.split("=");
var type = parameters[1].split("_")[0];
var enName = parameters[1].split("_")[1];
$(function() {
	upload();
	$("#styleName").val(enName);
});


//改变服装模型
function changeModelClass(){
	alert("ttttttttttttttttttttttt");
}

// 保存
function save() {
	
	// 验证参数
	if ($("#dictcode").val() == "") {
		$("#dictcodeError").html("<font style='color:red'>请输入数据字典编码!</font>");
		$("#dictcode").focus();
		return false;
	}
	if ($("#dictname").val() == "") {
		$("#dictnameError").html("<font style='color:red'>请输入数据字典名称!</font>");
		$("#dictname").focus();
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

	
	layer.confirm("确定新增吗？", function() {
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
			url : "dicts/addDicts",
			type : "post",
			dataType : "json",
			data : {
				"dictcode" : $("#dictcode").val(),
				"dictname" : $("#dictname").val()
			},
			async : false,
			success : function(data) {
				if (data.success) {
					layer.alert("新增信息成功!", {
						icon : 1
					});
				} else {
					layer.alert("新增信息失败!", {
					});
				}
				parent.location.reload();
			},
			error : function(data) {
			}
		});
	});
	
}

// 验证品牌英文名是否为空
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
		$("#bomNameError").html("<font style='color:red'>请输入商品名称!</font>");
		$("#bomName").focus();
	}
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

function del(id) {
	if (confirm("您确定要删除吗?")) {

	}
}

$("#checkall").click(function() {
	$("input[name='id[]']").each(function() {
		if (this.checked) {
			this.checked = false;
		} else {
			this.checked = true;
		}
	});
})


// 上传文件
function upload() {
	// 选择文件之后执行上传
	$('#fileToUpload1').on('change', function() {
		$.ajaxFileUpload({
			url : 'goods/upload',
			type : 'post',
			data : {
				"type" : enName
			},
			secureuri : false,
			fileElementId : 'fileToUpload1',// file标签的id
			dataType : 'json',// 返回数据的类型
			success : function(data) {
				$("#smallimage").val(data.name);
			},
			error : function(data, status, e) {
				layer.alert(e, {
					icon : 2
				});
			}
		});
	});
}