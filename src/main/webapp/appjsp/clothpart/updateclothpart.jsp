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
<script type="text/javascript" src="<%=path%>/appjs/clothpart/updateclothpart.js"></script>
<script type="text/javascript" src="<%=basePath%>js/layer/layer.js"></script>
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

td {
	text-align: left;
	}
</style>
</head>

<body>
	<div class="bodyPop">
			<table class="table">
			    <tr>
					<td class="lable" ><span>中文名：</span></td>
					<td >
						<input type="text" required="required" id="clothpartcnname" name="clothpartcnname"/> 
						<label id="clothpartcnnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable" ><span>英文名：</span></td>
					<td >
						<input type="text" required="required" id="clothpartengname" name="clothpartengname"/> 
						<label id="clothpartengnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable" ><span>服装部位风格：</span></td>
					<td >
						<input type="text" required="required" id="clothpartstyle" name="clothpartstyle"/> 
						<label id="clothpartstyleError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable" ><span>服装部位场合：</span></td>
					<td >
						<input type="text" required="required" id="clothpartoccasion" name="clothpartoccasion"/> 
						<label id="clothpartoccasionError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable" ><span>所属类型</span></td>
					<td >
						<input type="text" required="required" id="clothpartclass" name="clothpartclass"/> 
						<label id="clothpartclassError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable"><span>服装类型编码：</span></td>
					<td >
						<input type="text" required="required" id="clothpartcode"	name="clothpartcode"/> 
						<label id="clothpartcodeError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tbody id="tbody"></tbody>
			</table>

			<div align="center">
				<input type="button" onclick="updatesave()" value="修改" />
			</div>
	</div>

</body>
</html>