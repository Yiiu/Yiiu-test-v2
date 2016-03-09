//
var zhanshi = new Object();
/* 按钮 */
zhanshi.anniu = 
		(function(){
			var xia = document.getElementById('xia');		//按钮
			xia.addEventListener('click',function(e){

			},false)
		})()
/*zhanshi.kuai,color
 *1.查找大块和小块
 *2.小块加上绿色，大块加上蓝色
 *
 */
zhanshi.kuai = {
	color:(function(){
			var xiao = document.getElementsByClassName('kuai_xiao');	//小块
			var da = document.getElementsByClassName('kuai_da');		//大块
			for(var i=0;i<xiao.length;i++){
				xiao[i].style.background = "#339966";
			}
			for(var i=0;i<da.length;i++){
				da[i].style.background = "#069";
			}			
		})()
}
zhanshi.data = {
	
}
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

function classxg(elem,ClassName,NewClassName){
	var cls = elem.className;
	var inew = new RegExp(ClassName);
	if(new.test(cls)){
		alert(1)
	}
}
*/