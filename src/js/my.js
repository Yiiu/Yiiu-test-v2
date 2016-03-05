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