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
<script type="text/javascript" src="<%=path%>/appjs/appcloth/clothstyle.js"></script>
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
					<td class="lable" ><span>序号：</span></td>
					<td >
						<input type="text" required="required" id="clothstylerank" name="clothstylerank"/> 
						<label id="clothstylerankError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable" ><span>中文名：</span></td>
					<td >
						<input type="text" required="required" id="clothstylecnname" name="clothstylecnname"/> 
						<label id="clothstylecnnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>英文名：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleengname"	name="clothstyleengname"/> 
						<label id="clothstyleengnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>所属服装类型：</span></td>
					<td >
						<input type="text" required="required" id="clothstylebyclothclass"	name="clothstylebyclothclass"/> 
						<label id="clothstylebyclothclassError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>服装部位1：</span></td>
					<td >
						<input type="text" required="required" id="clothstylebyclothpart1"	name="clothstylebyclothpart1"/> 
						<label id="clothstylebyclothpart1Error" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>所属服装模型：</span></td>
					<td >
						<input type="text" required="required" id="clothstylebyclothmodel"	name="clothstylebyclothmodel"/> 
						<label id="clothstylebyclothmodelError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable"><span>服装部位2：</span></td>
					<td >
						<input type="text" required="required" id="clothstylebyclothpart2"	name="clothstylebyclothpart2"/> 
						<label id="clothstylebyclothpart2Error" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>取自面料material：</span></td>
					<td >
						<input type="text" required="required" id="clothstylebymlmaterial"	name=clothstylebymlmaterial/> 
						<label id="clothstylebymlmaterialError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>是否可用：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleistrue"	name=clothstyleistrue/> 
						<label id="clothstyleistrueError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>图片url：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleimageurl"	name=clothstyleimageurl/> 
						<label id="clothstyleimageurlError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>图片名称：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleimagename"	name=clothstyleimagename/> 
						<label id="clothstyleimagenameError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>图片md5：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleimagemd5"	name=clothstyleimagemd5/> 
						<label id="clothstyleimagemd5Error" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>适用平台：</span></td>
					<td >
						<input type="text" required="required" id="clothstyleplatform"	name=clothstyleplatform/> 
						<label id="clothstyleplatformError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				
			</table>

			<div align="center">
				<input type="button" onclick="save()" value="保存" />
			</div>
	</div>

</body>
</html>