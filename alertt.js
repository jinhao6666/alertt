function alertt(str){
	var body1=document.getElementsByTagName('body')[0];
	body1.appendChild(document.createElement("div")).className='alertt';
	var div1=document.getElementsByClassName('alertt')[0];
	div1.appendChild(document.createElement("div"));
	var div2=div1.getElementsByTagName('div')[0];
	div1.style.cssText='width: 100vw;height: 100vh;position: fixed;top: 0;left: 0;z-index: 1000;background: rgba(255, 255, 255, 0.4);';
	div2.style.cssText='width:350px;height:200px;margin: 0 auto;padding:10px 20px;margin-top:100px;background: #FFF;border: 10px solid rgba(0, 0, 0, 0.7);border-radius: 10px;font-size: 18px;text-align:right;';
	div2.appendChild(document.createElement("span"));
	span1=div2.getElementsByTagName('span')[0];
	span1.innerText='x';
	span1.style.cssText='cursor:pointer;';
	span1.onclick=function(){
		div1.style.display='none';
	}
	div2.appendChild(document.createElement("p"));
	p1=div2.getElementsByTagName('p')[0];
	p1.innerText=str;
	p1.style.textAlign='center';
};
alertt('欢迎使用本插件，请在script中调用alertt函数，可在alertt中填写弹出内容');