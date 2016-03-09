//
var zhanshi = new Object();
/* 按钮 */
zhanshi.anniu = 
		(function(){
			var xia = document.getElementById('xia');		//按钮
			xia.addEventListener('click',function(e){
				 zhanshi.qiehuan()
			},false)
		})()
/*zhanshi.kuai,color
 *1.查找大块和小块
 *2.小块加上绿色，大块加上蓝色
 *
 */
 zhanshi.qiehuan = 
 		function(){
 			var box = document.getElementsByClassName('box')[0];		//box
 			var header = document.getElementsByTagName('header')[0];	//header
 			var zhanshi = document.getElementsByClassName('test-mask')[0]
 			var hopacity = 100;
 			var zopacity = 0;
 			if(/zhu/.test(box.className)){
 				/* 隐藏header，显示zhanshi */
 				var set = setInterval(function(){
 					var c = null;
 					if(header.style.opacity==0){
 						header.className = 'none';
 						box.className = box.className.replace(/zhu/,'fu');
 						zhanshi.className = zhanshi.className.replace(/ none/,'');
 						var iset = setInterval(function(){
 							if(zhanshi.style.opacity == 1){
 								clearInterval(iset);
 							}else{
 								zopacity+=10;
 								zhanshi.style.opacity = zopacity/100;
 							}
 						},60)
 						clearInterval(set);
 					}else{
 						hopacity-=10;
 						header.style.opacity = hopacity/100;
 					}
 				},60)
 				/* 显示展示 */
 			}
 		}
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
	name:["Photo-Gallery","Photo-Gallery-3D"],
	href:[""]
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