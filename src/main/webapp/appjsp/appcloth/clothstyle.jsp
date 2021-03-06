<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
	String basePath = request.getContextPath();
	String path = request.getScheme() + "://" + request.getServerName()
			+ ":" + request.getServerPort() + basePath;
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="<%=path%>/css/pintuer.css">
<link rel="stylesheet" href="<%=path%>/css/admin.css">
<script type="text/javascript" src="<%=path%>/js/jquery-1.11.2.js"></script>
<script type="text/javascript" src="<%=path%>/js/pintuer.js"></script>
<script type="text/javascript" src="<%=path%>/appjs/appcloth/clothstyle.js"></script>
<script type="text/javascript" src="<%=path%>/js/layer/layer.js"></script>
</head>
<body>
		<div class="panel admin-panel">
			<div class="panel-head">
				<strong class="icon-reorder"> 基础数据&nbsp;●&nbsp;模型</strong>
			</div>
			<div class="padding border-bottom">
				<ul class="search">
					<li>
						<button type="button" class="button border-green" id="add" onclick='add("goods_cravat")'>
							<span class="icon-check"></span> 新增
						</button><input id= "type" type="hidden" value = "collar">
						<button type="button" class="button border-green" id="checkall">
							<span class="icon-check"></span> 全选
						</button>
						<button type="button" class="button border-red" id="del" onclick='del()'>
							<span class="icon-trash-o"></span> 批量删除
						</button> 
						
						<button type="button" class="button border-green" onclick='goodsToJson("cravat")'>
							<span class="icon-check"></span> 生成JSON
						</button>
						<button type="button" class="button border-green" onclick='goodsDetailToJson("cravat")'>
							<span class="icon-check"></span> 生成品牌详情JSON
						</button>
					</li>
				</ul>
			</div>
			<table class="table table-hover text-center">
				<tr>
					<th width="120">ID</th>
					<th>服装风格序号</th>
					<th>中文名</th>
					<th>英文名</th>
					<th>服装按钮所属服装类型</th>
					<th>服装部位（供选择1）</th>
					<th>服装模型</th>
					<th>服装部位（供选择2）</th>
					<th>面料编号</th>
					<th>服装风格是否可用</th>
					<th>服装风格图片url</th>
					<th>服装风格图片名称</th>
					<th>服装风格md5</th>
					<th>服装类型适用平台</th>
				</tr>

				<tbody id="tbody"></tbody>
				<tr>
					<td colspan="13"><div class="pagelist">
							<a href="">上一页</a> <span class="current">1</span><a href="">2</a><a
								href="">3</a><a href="">下一页</a><a href="">尾页</a>
						</div></td>
				</tr>
			</table>
		</div>
</body>
</html>