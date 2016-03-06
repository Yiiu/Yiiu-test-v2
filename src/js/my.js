function test(){
	var test = document.getElementsByTagName('header')[0];
	var cls = test.className;
	if(!/test/.test(cls)){
		cls += "test";
	}else{
		cls = "";
	}
	return test.className = cls;
}
/*
elem 元素 ClassName 要修改的name NewClassName 要修改成的值
1.获取元素的classname。
2.与传入的classname比较，如果不符合，返回。如果符合，继续修改。
3.修改classname，假如修改的值为空，那么修改为空
4.返回classname.
*/
function classxg(elem,ClassName,NewClassName){
	var cls = elem.className;
	var new = new RegExp(ClassName);
	if(new.test(cls)){
		alert(1)
	}
}