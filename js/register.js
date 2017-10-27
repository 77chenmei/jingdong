
 var ba1=document.getElementById('ba1');
 var ba2=document.getElementById('ba2');
 ba1.onclick =function(){
 	document.getElementById('email').style.display ='none';
 	ba2.style.display ='block';
 }
 ba2.onclick =function(){
 	document.getElementById('email').style.display ='block';
 	ba2.style.display ='none';
 }

var phoneA = document.getElementById('phoneA');
phoneA.onfocus=function(){
   document.getElementById('search').style.display ='block';
} 
phoneA.onblur=function(){
   document.getElementById('search').style.display ='none';
}

var val = document.getElementById('validator')
val.onclick =function(){
	this.src = "./img/register/yzm" +parseInt(Math.random()*10)+".png" ;
}

//点击立即登录触发事件
var reg=document.getElementById('register')
var inp = document.querySelectorAll('.inp');
var warn = document.querySelectorAll('.warn');
var box = document.querySelectorAll('.box');
reg.onclick=function(){
	console.log(inp[0])
	for(var j= 0;j<inp.length;j++){
		if(inp[j].value ==''){
		    warn[j].style.display = 'block';
		    box[j].style.borderColor = 'red';
		    break;
	    }
	}
	
}
for(var i=0;i<inp.length;i++){
	inp[i].index =i;
	var a =0;
	inp[i].onfocus = function(){
		a = this.index + 1;
    	document.getElementById('hint'+ a).style.display ='block';
    	document.getElementById('warn'+ a).style.display ='none';
    	box[a-1].style.borderColor = '#ddd';
	}
	inp[i].onblur = function(){
		a = this.index + 1;
    	document.getElementById('hint'+ a).style.display ='none';
    	if(inp[0].value !=''){
    		document.getElementById('wait').style.display ='block';
    	}else{
    		document.getElementById('wait').style.display ='none';
    	}
	}
}