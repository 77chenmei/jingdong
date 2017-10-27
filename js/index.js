//banner 页面轮播图的切换
function test(a){
	var b =0;
 	for(var i=1;i<=a;i++){
 		//鼠标点击的li标签对应的图片出现，其他图片消失
 		if(i==a){
 			b =i;
 			document.getElementById('l'+i).style.backgroundColor='red';
      document.getElementById('img'+ i).style.display='block';
 		}else{
 			document.getElementById('img'+ i).style.display='none';
 			document.getElementById('l'+i).style.backgroundColor='#fff';
 			}
 	}
 	for(var j=1;j<=8;j++){
 		if(j==b&&b!=0){
 		   document.getElementById('l'+j).style.backgroundColor='red';
 	    }else{
 	    	document.getElementById('l'+j).style.backgroundColor='#fff';
 	    }
 	}
 	
}

//img-banner 图片切换
var c1 = document.getElementById('c1');//获取第一个点
var c2 = document.getElementById('c2'); //获取第二个点
var ibg = document.getElementById('img-banner'); //获取图片
var  a = 0; //定义一个变量，根据所获取的点获得值
//鼠标移动到时
function Mon(x,num){
	//点击第一个点的时候
   if(num == 1){
   	a=1; //点击第一个时，变量a赋值为1
   	x.style.backgroundColor='red';//改变点击点的颜色
    c2.style.backgroundColor='#342A2D';//没有被选中的点颜色
    ibg.style.background ='url(./img/index/banner1.jpg)';
    //改变图片的路径
   }
   if(num ==2){
   	a = 2; //点击第二个时，变量a赋值为2
   	x.style.backgroundColor='red';//改变点击点的颜色
    c1.style.backgroundColor='#342A2D';//没有被选中的点颜色
    ibg.style.background='url(./img/index/banner2.jpg)';
    //改变图片的路径
   }  
}
//鼠标离开时
function Mout(x,num){	
	// 鼠标离开第一个点并且去了第二点时
   if(num ==1 && a==2){
   	 x.style.backgroundColor='#342A2D';
     c2.style.backgroundColor='red';
   }
   //鼠标离开第二个点并且去了第一点时
	if(num ==2 && a==1){
   	 x.style.backgroundColor='#342A2D';
     c2.style.backgroundColor='red';
   }
}

//会买专辑 .an2 .anBox中的滚动
function mov(a){
  var b =0;
  for(var i=1;i<=a;i++){
    //鼠标点击的li标签对应的图片出现，其他图片消失
    if(i==a){
      b = i;
      document.getElementById('cir'+i).style.backgroundColor='red';
      document.getElementById('anBox'+ i).style.display='block';
    }else{
      document.getElementById('anBox'+ i).style.display='none';
      document.getElementById('cir'+i).style.backgroundColor='#fff';
    }
  }
  for(var j=1;j<=3;j++){
    if(j==b&&b!=0){
      document.getElementById('cir'+j).style.backgroundColor='red';
    }else{
      document.getElementById('cir'+j).style.backgroundColor='#fff';
    }
  }
  
}
// 觅me页面切换
function move(a){
  var b =0;
  for(var i=1;i<=a;i++){
    //鼠标点击的li标签对应的图片出现，其他图片消失
    if(i==a){
      b = i;
      document.getElementById('m'+i).style.backgroundColor='red';
      document.getElementById('min'+ i).style.display='block';
    }else{
      document.getElementById('min'+ i).style.display='none';
      document.getElementById('m'+i).style.backgroundColor='#c7c7c7';
    }
  }
  for(var j=1;j<=5;j++){
    if(j==b&&b!=0){
      document.getElementById('m'+j).style.backgroundColor='red';
    }else{
      document.getElementById('m'+j).style.backgroundColor='#c7c7c7';
    }
  }
  
}
//need 中的a标签onmouseover的时会有光影出现
// var needA = document.querySelectorAll('.need_a');
var cover = document.querySelectorAll('.cover');
// console.log(needA)
for(var i = 0; i<cover.length; i++){
   cover[i].onmouseover = function(){
    // for(var j = 0;j<cover.length;j++){
    //   if(i == j){
        this.style.background ='rgba(0,0,0,0)';
    //   }
    // }
   }
     cover[i].onmouseout = function(){
      this.style.background ='rgba(0,0,0,0.2)';
    }
}

//爱生活中的扫码进入手机
var lm = document.querySelector('.lm');
var lmphone =document.querySelector('.lmphone');
lmphone.onmouseover =function(){
  lm.style.display ='block';
}
lm.onmouseover =function(){
  this.style.display ='none';
}

//爱生活中的点击< >进行页面的切换
var pt_left = document.querySelector('.pt_left');
var pt_right = document.querySelector('.pt_right');
var pt= document.querySelectorAll('.pt_logo1')
var arry =[pt_left,pt_right];
for(var i =0;i<arry.length;i++){
  for(var j=0;j<pt.length;j++)
  arry[i].onclick = function(){
    if(i==j){
      pt[j].style.display ='block';
    }else{
      pt[j].style.display ='none';
    }
  }
}
