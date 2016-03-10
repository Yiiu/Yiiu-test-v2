//
var zhanshi = new Object();
/* 按钮 */
zhanshi.anniu = 
		(function(){
			var xia = document.getElementById('xia');		//按钮
			var tui = document.getElementById('tui');
			xia.addEventListener('click',function(e){
				 zhanshi.qiehuan()
			},false)
			tui.addEventListener('click',function(e){
				 zhanshi.qiehuan()
			},false)
		})()
/* nnd打到最后才发现忘了注释，连自己都忘记在做什么了 */
 zhanshi.qiehuan = 
 		function(){
 			var box = document.getElementsByClassName('box')[0];		//box
 			var header = document.getElementsByTagName('header')[0];	//header
 			var zhanshi = document.getElementsByClassName('test-mask')[0]
 			var hopacity = 100;			//首页的透明度控制
 			var zopacity = 0;			//展示的透明度控制
 			var ho = 0;					//首页的透明度控制
 			var zo = 100;				//展示的透明度控制
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
 			}else{
 				/* 隐藏header，显示zhanshi */
 					var iset = setInterval(function(){
 						if(zhanshi.style.opacity == 0){
 							header.className = header.className.replace(/none/,'');
 							box.className = box.className.replace(/fu/,'zhu');
 							zhanshi.className = 'test-mask none';
 							clearInterval(iset);
 						}else{ 
 							zo-=10;
 							zhanshi.style.opacity = zo/100;
 						}
 						if(header.style.opacity!=1){
	 						ho+=10;
	 						header.style.opacity = ho/100;
 						}
 					},60)
  			}
 		}
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
	name:["Photo-Gallery","Photo-Gallery-3D"],
	href:[""]
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