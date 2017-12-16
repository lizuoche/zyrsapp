<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="<%=basePath%>css/zhome.css" />
<link rel="stylesheet" href="<%=basePath%>css/zpop.css" />
<link rel="stylesheet" href="<%=basePath%>css/table.css" />
<link rel="stylesheet" href="<%=basePath%>css/style.css" />
<script type="text/javascript" src="<%=basePath%>js/jquery-1.11.2.js"></script>
<script type="text/javascript" src="<%=basePath%>js/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=path%>/appjs/appcloth/clothbutton.js"></script>
<script type="text/javascript" src="<%=path%>/appjsp/appcommon/selectclothclass.js"></script>
<script type="text/javascript" src="<%=basePath%>js/layer/layer.js"></script>
<script type="text/javascript" src="<%=path%>/appjsp/appcommon/storage.js"></script>
<style type="text/css">
.up {
	background-image: url("images/button_small.png");
	height: 28px;
	border: 1px;
	color: white;
	padding-top: 5px;
	cursor: pointer;
	display: block;
}

.bg {
	loat: left;
	width: 80px;
	height: 28px;
	z-index: 2999;
	top: 150px;
	left: 570px;
	background-color: #FFF;
	filter: alpha(opacity = 0);
	-moz-opacity: 0.0;
	-khtml-opacity: 0.0;
	opacity: 0.0;
	position: absolute;
	cursor: pointer;
	background-color: #FFF;
	cursor: pointer;
}

.bodyPop label {
	width: 110px;
}

</style>
</head>

<body>
	<div class="bodyPop">
			<table class="table">
				<tr>
					<td class="lable" ><span>中文名：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttoncnname" name="clothbuttoncnname"/> 
						<label id="clothbuttoncnnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>英文名：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonengname"	name="clothbuttonengname"/> 
						<label id="clothbuttonengnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>所属服装类型：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonbyclothclass"	name="clothbuttonbyclothclass"/> 
						<label id="clothbuttonbyclothclassError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>按钮部位名称：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttoncnpartname"	name="clothbuttoncnpartname"/> 
						<label id="clothbuttoncnpartnameError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>服装按钮所属部位：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonbyclothpart"	name="clothbuttonbyclothpart"/> 
						<label id="clothbuttonbyclothpartError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable" ><span>服装按钮名称：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonname" name="clothbuttonname"/> 
						<label id="clothbuttonnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>模型还是材质：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonmorg"	name="clothbuttonmorg"/> 
						<label id="clothbuttonmorgError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>按钮是否可用：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonistrue"	name="clothbuttonistrue"/> 
						<label id="clothbuttonistrueError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>按钮图片名称：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonimagename"	name="clothbuttonimagename"/> 
						<label id="clothbuttonimagenameError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>按钮图片url：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonimageurl"	name="clothbuttonimageurl"/> 
						<label id="clothbuttonimageurlError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>图片md5：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonimagemd5"	name="clothbuttonimagemd5"/> 
						<label id="clothbuttonimagemd5Error" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>按钮所属平台：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonplatform"	name="clothbuttonplatform"/> 
						<label id="clothbuttonplatformError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>屏幕尺寸：</span></td>
					<td >
						<input type="text" required="required" id="clothbuttonscreenresolution"	name="clothbuttonscreenresolution"/> 
						<label id="clothbuttonscreenresolutionError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				
				
			</table>

			<div align="center">
				<input type="button" onclick="save()" value="保存" />
			</div>
	</div>

</body>
</html>