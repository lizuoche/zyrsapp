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
<script type="text/javascript" src="<%=path%>/appjsp/clothmodel/clothmodel.js"></script>
<script type="text/javascript" src="<%=path%>/appjsp/appcommon/selectclothclass.js"></script>
<script type="text/javascript" src="<%=basePath%>js/layer/layer.js"></script>
<script type="text/javascript" src="<%=path%>/appjsp/appcommon/storage.js"></script>
<script type="text/javascript" src="<%=path%>/appjs/appcloth/uploadclothmodel.js"></script>
<script type="text/javascript" src="<%=path%>/appjs/appcloth/uploadclothmodelimage.js"></script>
<script type="text/javascript" src="<%=path%>/appjsp/appcommon/selectclothclass.js"></script>
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
					<td class="lable" ><span>模型中文名：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelcnname" name="clothmodelcnname"/> 
						<label id="clothmodelcnnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>服装模型英文名：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelengname"	name="clothmodelengname"/> 
						<label id="clothmodelengnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<!-- 
				<tr>
					<td class="lable"><span>所属服装类型：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelbyclothclass"	name="clothmodelbyclothclass"/> 
						<label id="clothmodelbyclothclassError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				 -->
				<tr>
					<td class="lable"><span>所属服装类型：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelbyclothclass"	name="clothmodelbyclothclass"  onclick="changeClothClass()"/> 
						<label id="clothmodelbyclothclassError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable"><span>所属服装部位：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelbyclothpart"	value ="上身和下身" name="clothmodelbyclothpart"/> 
						<label id="clothmodelbyclothpartError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<!-- 
				<tr>
					<td class="lable"><span>所属服装平台：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelbyplatform"	name="clothmodelbyplatform"/> 
						<label id="clothmodelbyplatformError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				 -->
				
				<tr>
					<td class="lable"><span>所属平台：</span></td>
					<!-- 
					<td >
						<input type="text" required="required" id="cmmplatform"	name="cmmplatform"/> 
						<label id="cmmplatformError" style="width: 200px; text-align: left;"></label>
					</td>
					 -->
					<td>
						<select id="clothmodelbyplatform"  name="clothmodelbyplatform" style="width: 200px">
						     <option value="请选择所属平台">请选择所属平台</option>
	                         <option value="PC">PC</option>
						     <option value="Android">Android</option>
						     <option value="IOS">IOS</option>
					    </select> 
					</td>
				</tr>
				
				<tr>
					<td class="lable" ><span>服装模型名：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelname" name="clothmodelname"/> 
						<label id="clothmodelnameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<!-- 
				<tr>
					<td class="lable"><span>模型文件名：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelfilename"	name="clothmodelfilename"/> 
						<label id="clothmodelfilenameError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				-->
				<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
				<tr>
					<td class="lable" ><span>模型文件名：</span></td>
					<td >
						<input type="text" readonly="readonly" id=clothmodelfilename style="width: 400px" value=""/>
						<label class="up" for="fileToUpload2" style="width: 80px;">
							<input id="fileToUpload2" style="" class="bg" type="file" name="upfile2"> 
							<span style="float: left; margin-left: 5px" >上传模型</span>
						</label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>模型url：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelurl"	name="clothmodelurl"/> 
						<label id="clothmodelurlError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>模型md5：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelmd5"	name="clothmodelmd5"/> 
						<label id="clothmodelmd5Error" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				
				
				<!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
			    <!-- 
				<tr>
					<td class="lable"><span>模型图片名：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelimagename"	name="clothmodelimagename"/> 
						<label id="clothpartstyleError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				-->
				
				<tr>
					<td class="lable" ><span>模型图片名：</span></td>
					<td >
						<input type="text" readonly="readonly" id=clothmodelimagename style="width: 400px" value=""/>
						<label class="up" for="fileToUpload1" style="width: 80px;">
							<input id="fileToUpload1" style="" class="bg" type="file" name="upfile"> 
							<span style="float: left; margin-left: 5px">上传图片</span>
						</label>
					</td>
				</tr>
				
				
				<tr>
					<td class="lable"><span>模型图片url：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelimageurl"	name="clothmodelimageurl"/> 
						<label id="clothmodelimageurlError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>模型图片MD5：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelimagemd5"	name="clothmodelimagemd5"/> 
						<label id="clothmodelimagemd5Error" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				<tr>
					<td class="lable"><span>受影响部位：</span></td>
					<td >
						<input type="text" required="required" id="clothmodeldifferentedpart"	name="clothmodeldifferentedpart" /> 
						<label id="clothmodeldifferentedpartError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				
				<tr>
					<td class="lable" ><span>影响部位：</span></td>
					<td >
						<input type="text" required="required" id="clothmodeldifferentspart" name="clothmodeldifferentspart"/> 
						<label id="clothmodeldifferentspartError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				<tr>
					<td class="lable"><span>模型作者：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelauthor"	name="clothmodelauthor"/> 
						<label id="clothmodelauthorError" style="width: 200px; text-align: left;"></label>
					</td>
				</tr>
				 
				 
				 <tr>
					<td class="lable"><span>上传者：</span></td>
					<td >
						<input type="text" required="required" id="clothmodeluploadname"	name="clothmodeluploadname"/> 
						<label id="clothmodeluploadnameError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				<tr>
					<td class="lable"><span>模型版本：</span></td>
					<td >
						<input type="text" required="required" id="clothmodelversion"	name="clothmodelversion"/> 
						<label id="clothmodelversionError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				
				 <!-- 
				<tr>
					<td class="lable" ><span>服装部位所属服装类型：</span></td>
					<td >
						<select id="clothpartclass" name="clothpartclass" onclick="changeClothClass()">  
						   <!-- 
						     <option value="1">1</option>  
						    <option value="0">1</option> 
						    --> 
						    <!--<input type="text" id="val"><input type="button" value="设置" onclick="fun()"> 
						</select>  
						<label id="clothpartclassError" style="width: 100px; text-align: left;"></label> 
					</td>
				</tr>
				 -->
				 <!--
				<tr>
					<td class="lable"><span>服装部位编码：</span></td>
					<td >
						<input type="text" required="required" id="clothpartcode"	name="clothpartcode"/> 
						<label id="clothpartcodeError" style="width: 200px; text-align: left;"></label></td>
				</tr>
				  -->
				<!--  
				<tr>
					<td class="lable"><span>模型是否可用：</span></td>
					<td>
						<select id="clothmodelistrue"  name="clothmodelistrue" style="width: 200px">
						     <option value="是">是</option>
	                         <option value="否">否</option>
						 </select> 
					</td>
                </tr>
                -->
			</table>

			<div align="center">
				<input type="button" onclick="save()" value="保存" />
			</div>
	</div>

</body>
</html>