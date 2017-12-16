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

//获取要修改的面料ID
function doSearch() {
	$.ajax({
		type : "post",
		url : "clothfabric/getAllClothFabricById",
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
					$("#fabricid").val(res.fabricid),
					$("#fabriccode").val(res.fabriccode),
					$("#fabricname").val(res.fabricname),
					$("#clothfabricfilename").val(res.clothfabricfilename),
					$("#clothfabricfileurl").val(res.clothfabricfileurl),
					$("#clothfabricfilemd5").val(res.clothfabricfilemd5),
					$("#clothfabricfiletools").val(res.clothfabricfiletools),
					$("#clothfabricimagename").val(res.clothfabricimagename),
					$("#clothfabricimageurl").val(res.clothfabricimageurl),
					$("#clothfabricimagemd5").val(res.clothfabricimagemd5),
					$("#clothfabricimagesize").val(res.clothfabricimagesize),
					$("#clothfabriciscomplete").val(res.clothfabriciscomplete),
		        tbody.append(tabhtml);
			}
		}
	});
}

//面料保存修改
function updatesave() {
	// 验证参数
//	if ($("#dictcode").val() == "") {
//		$("#dictcodeError").html("<font style='color:red'>请输入数据字典编码!</font>");
//		$("#dictcode").focus();
//		return false;
//	}
//	if ($("#dictname").val() == "") {
//		$("#dictnameError").html("<font style='color:red'>请输入数据字典名称!</font>");
//		$("#dictcode").focus();
//		return false;
//	}
//	
//	if ($("#dictcodeError").html() != "") {
//		$("#dictcode").focus();
//		return false;
//	}
//	if ($("#dictnameError").html() != "") {
//		$("#dictname").focus();
//		return false;
//	}
	
	layer.confirm("确定修改吗？", function() {
	       $.ajax({
			url : "clothfabric/updateClothFabricById",
			type : "post",
			dataType : "json",
			data : {
                "id" : id,
				"clothfabricfilename" : $("#clothfabricfilename").val(),
				"clothfabricfileurl" : $("#clothfabricfileurl").val(),
				"clothfabricfilemd5" : $("#clothfabricfilemd5").val(),
				"clothfabricfiletools" : $("#clothfabricfiletools").val(),
				"clothfabricimagename" : $("#clothfabricimagename").val(),
				"clothfabricimageurl" : $("#clothfabricimageurl").val(),
				"clothfabricimagemd5" : $("#clothfabricimagemd5").val(),
				"clothfabricimagesize" : $("#clothfabricimagesize").val()
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


