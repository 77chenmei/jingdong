// 关闭页面广告
var topad = document.querySelector('.top-ad');
//通过获取class名来获取需要关闭的标签
var adclose = document.querySelector('.adc');
//通过获取class名来获取关闭按钮的标签
adclose.onclick = function(){
  topad.style.display = 'none';
  //点击关闭按钮，关闭页面上方的广告
}
//----------------------------------------------------
//点击登录
$(document).ready(function(){
  $('.login').click(function(){
    self.location = 'login.html';
  })
//点击 注册
  $('.register').click(function(){
    self.location = 'register.html';
  })
})
//--------------------------------------------------------
//banner center 中的大图片的轮播和切换
//一图片轮播
var imgs = document.getElementById('imgs');
var img = imgs.querySelector('img');
//通过获取父集获取轮播的图片标签
var ul = document.getElementById('banner-ul');
var li = ul.querySelectorAll('li');
//通过获取父集获取轮播的小圆点标签
timer();
//将定时器放入函数中，通过不停的调用函数，来触发计时器
function timer(){
  var i = 1;
  // 定义局部变量，图片的名字从1开始；
  time = setInterval(function(){
  //图片不停的变化
  if(i<9){
    img.src ='img/index/bg'+ i +'.jpg';
  }else{
    i = 1;//自增大于等于9时，将i重新赋值
    img.src ='img/index/bg'+ i +'.jpg';
  }
  //小圆点的颜色不停的变化
  for(var a=0;a<li.length;a++){
    //图片和小圆点对应
    if(a == i-1){
       li[a].style.backgroundColor='red';
    }else{
      li[a].style.backgroundColor='#fff';
    }
  }
  i++;
},2000)
}
//二图片点击切换
function test(a){
  clearInterval(time)
  var b =0;
  //定义一个局部变量，用于判断鼠标离开小圆点时，
  //是移动到了另外一个小圆点,还是离开了这个标签外
  for(var i=1;i<=a;i++){
    //鼠标点击的li标签对应的图片出现，其他图片消失
    if(i==a){
      b =i;//当点击小圆点中的任意一个点时，给b赋值
      document.getElementById('l'+i).style.backgroundColor='red';
      img.src ='img/index/bg'+ i +'.jpg';
    }else{
      document.getElementById('l'+i).style.backgroundColor='#fff';
      }
  }
  //鼠标离开小圆点颜色的变化
  for(var j=1;j<=8;j++){
    //小圆点对应图片的变化进行变化
    if(j==b&&b!=0){
      //鼠标离开当前点时，如果b的值还是触发事件时的那个索引值，表示鼠标离开了
      //整个img的界面，此时当前小圆点颜色仍为红色，不变化，并且触发定时器，进行图片的轮播
       document.getElementById('l'+j).style.backgroundColor='red';
       timer();
      }else{
        //如果此时b被赋予了新值，则表示鼠标移动到了另外一个小圆点上去了，此时的小圆点需要变化颜色
        document.getElementById('l'+j).style.backgroundColor='#fff';
      }
  } 
}
//----------------------------------------------
// banner_right_sever
var sever = document.querySelector('.son11');
var mod = document.querySelector('.sever1');
var sever_c = document.querySelector('.sever_c');
sever.onmouseover =function(){
  mod.style.display = 'block';
}
sever_c.onclick =function(){
  mod.style.display = 'none';
}
//------------------------------------------------------
//京东秒杀中img-banner 图片切换
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
//---------------------------------------------------------
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
      document.getElementById('cir'+i).style.backgroundColor='#c8c8c8';
    }
  }
  for(var j=1;j<=3;j++){
    if(j==b&&b!=0){
      document.getElementById('cir'+j).style.backgroundColor='red';
    }else{
      document.getElementById('cir'+j).style.backgroundColor='#c8c8c8';
    }
  }
  
}
//--------------------------------------------------------------
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
//------------------------------------------------------------------------
//need 中的a标签onmouseover的时会有光影出现
var cover = document.querySelectorAll('.cover');
for(var i = 0; i<cover.length; i++){
   cover[i].onmouseover = function(){
        this.style.background ='rgba(0,0,0,0)';
   }
     cover[i].onmouseout = function(){
      this.style.background ='rgba(0,0,0,0.2)';
    }
}
//----------------------------------------------------------------------
//爱生活中的扫码进入手机
var lm = document.querySelectorAll('.lm');
var lmphone =document.querySelectorAll('.lmphone');
for(var i =0;i<lmphone.length;i++){
  lmphone[i].index = i;
  lmphone[i].onmouseover =function(){
    var p = this.index;
    lm[p].style.display = 'block';
    lmphone[p].onmouseout =function(){
      lm[p].style.display = 'none';
    }
    lm[p].onmouseout =function(){
      lm[p].style.display = 'none';
    }
  }

}
//------------------------------------------------------------
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
//----------------------------------------------------------
// 获取当前屏幕的高度
window.onload=function(){
  var right_nav = document.querySelector('.right_nav');
  var jdm_toolbar_middle = document.querySelector('.jdm-toolbar-middle');
   var right_border_mian = document.querySelector('.right_border_mian');
  var h=document.body.clientHeight;
  // right_nav.style.height = h+ 'px';
  // jdm_toolbar_middle.style.top = h/3 +'px';
  right_border_mian.style.height = (h-40) + 'px';
}
//-----------------------------------------------------------------
//页面右侧导航条的show/hidden
var jdm_toolbar_header = document.querySelector('.jdm-toolbar-header');
var right_border = document.querySelector('.right_border');
var tp =document.querySelector('.tp');
var showHiden = false;
jdm_toolbar_header.onclick=function(){
  if(showHiden){
    tp.style.display = 'none';
    showHiden = false;
  }else{
    right_border.style.right = '0';
    tp.style.display = 'block';
    showHiden = true;
  }
}
//------------------------------------------------------------------------ 
//页面右侧导航条中点击X关闭右侧导航
var right_border_head_close = document.querySelector('.right_border_head_close');
right_border_head_close.onclick = function(){
  tp.style.display = 'none';
}

//页面右侧导航条中点击X关闭右侧导航
var right_border_ma1 = document.querySelector('.right_border_ma1');
right_border_ma1.onmouseover= function(){
  this.style.background = 'url(./img/index/right_border5.png)';
}
right_border_ma1.onmouseout= function(){
  this.style.background = 'url(./img/index/right_border2.png)';
}

var right_l = document.querySelectorAll('.right_border_nav_l');
for(var i=0;i<right_l.length;i++){
  right_l[i].onmouseover =function(){
    this.style.height = 80 + 'px';
  }
   right_l[i].onmouseover =function(){
    this.style.height = 32 + 'px';
  }
}

//秒杀倒计时
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var a = 14400;
setInterval(function(){
  if(a>=0){
    hour.innerHTML = parseInt(a/(60*60));
    minute.innerHTML = parseInt(a%(60*60)/60);
    second.innerHTML = parseInt(a%(60*60)%60); 
  }else{
    a = 14400;
  }
  
  a--;
},1000);

//京东直播图的轮播
//获取轮播的li标签
var liveBanner = document.querySelector('.live_banner');
var liveImg = liveBanner.querySelector('img');
//获取轮播小圆点的li标签
var liveCircle =document.querySelector('.live_cir');
var liCircle = liveCircle.querySelectorAll('li');
livetime()
function livetime(){
  var i = 1;
  tim = setInterval(function(){
  if(i<6){
      liveImg.src ='img/index/live'+ i +'.jpg';
  }else{
    i = 1;
    liveImg.src ='img/index/live'+ i +'.jpg';
  }
  for(var a=0;a<liCircle.length;a++){
    if(a == i-1){
       liCircle[a].style.backgroundColor='red';
    }else{
      liCircle[a].style.backgroundColor='#c7c7c7';
    }
  }
  i++;
},2000)
}

