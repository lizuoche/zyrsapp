var queryStr = location.href.substring(location.href.indexOf("?") + 1);
var parameters = queryStr.split("=");
var type = parameters[1].split("_")[0];
var enName = parameters[1].split("_")[1];

$(function() {
//	uploadimage();
	//上传模型
	uploadmodel();
//	$("#styleName").val(enName);
});

//保存服装模型
//function save() {
//    layer.confirm("确定新增服装模型11？", function() {
//		var id = null;
//		
////		//获取单选框的值
////		var issell=null;
////		var el = document.getElementsByTagName('input');
////		var len = el.length;
////		for (var i = 0; i < len; i++) {
////			if ((el[i].type == "radio") && (el[i].name == 'issell')
////					&& (el[i].checked)) {
////				issell = el[i].value;
////			}
////		}
//		$.ajax({
//			
//			url : "clothmainmodel/addClothMainModel",
//			type : "post",
//			dataType : "json",
//			data : {
//				   "clothmainmodelcnname": $("#clothmainmodelcnname").val(),
//			       "clothmainmodelengname": $("#clothmainmodelengname").val(),
//			       "cmmbyclothclass": $("#cmmbyclothclass").val(),
//			       "cmmbodystyle": $("#cmmbodystyle").val(),
//			       "cmmplatform": $("#cmmplatform").val(),
//			       "clothmainmodelname": $("#clothmainmodelname").val(),
//			       "clothmainmodelurl": $("#clothmainmodelurl").val(),
//			       "clothmainmodelmd5": $("#clothmainmodelmd5").val(),
//			       "cmmimagename": $("#cmmimagename").val(),
//			       "cmmimageurl": $("#cmmimageurl").val(),
//			       "cmmimagemd5": $("#cmmimagemd5").val(),
//			       "cmmistrue": $("#cmmistrue").val()
//			},
//			async : false,
//			success : function(data) {
//				if (data.success) {
//					layer.alert("新增信息成功!", {
//						icon : 1
//					});
//				} else {
//					layer.alert("新增信息失败!", {
//					});
//				}
//				parent.location.reload();
//			},
//			error : function(data) {
//			}
//		});
//	});
//}





// 上传文件模型
function uploadmodel() {
	// 选择文件之后执行上传
	$('#fileToUpload2').on('change', function() {
		$.ajaxFileUpload({
			url : 'clothmodel/uploadmodel',
			type : 'post',
			data : {
				"type" : enName
			},
			secureuri : false,
			fileElementId : 'fileToUpload2',// file标签的id
			dataType : 'json',// 返回数据的类型
			success : function(data) {
				$("#clothmodelfilename").val(data.name);
				//模型url
				$("#clothmodelurl").val(data.clothmodelurl);
				//模型md5
				$("#clothmodelmd5").val(data.clothmodelmd5);
			},
			error : function(data, status, e) {
				layer.alert(e, {
					icon : 2
				});
			}
		});
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