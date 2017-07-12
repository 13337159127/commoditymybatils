//把id和提示语存放到obj对象里面
function traget() {
	var obj = new Object();
	obj["Id"] = "请输入id";
	obj["name"] = "请输入商品名称";
	obj["price"] = "请输入商品价格";
	obj["much"] = "请输入数量";
	obj["period"] = "请输入保质期";
	obj["yiedly"] = "请输入生产地";
	return obj;
}
//判断：如果为空，元素如果为空，则弹出输入框
function judge(obj) {
	var Id = document.getElementById("Id");
	if (Id.value == "") {
		alert(obj["Id"]);
		Id.focus();
		return;
	}
	var name = document.getElementById("name");
	if (name.value == "") {
		alert(obj["name"]);
		name.focus();
		return;
	}
	var price = document.getElementById("price");
	if (price.value == "") {
		alert(obj["price"]);
		price.focus();
		return;
	}
	var much = document.getElementById("much");
	if (much.value == "") {
		alert(obj["much"]);
		much.focus();
		return;
	}
	var period = document.getElementById("period");
	if (period.value == "") {
		alert(obj["period"]);
		period.focus();
		return;
	}
	var yiedly = document.getElementById("yiedly");
	if (yiedly.value == "") {
		alert(obj["yiedly"]);
		yiedly.focus();
		return;
	} 
}

//调用方法
function method(){
	var obj = traget();
	judge(obj);
}

function print(){
	method();
	document.getElementById("addcommodity").submit();
}