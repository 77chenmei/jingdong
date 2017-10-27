// 实现登录界面和扫码登录界面的跳转
function test(a){
	var sm = document.getElementById('sm');
	var dl = document.getElementById('dl');
  var art = document.getElementById('art');
  var smm = document.getElementById('smm');
  var dll = document.getElementById('dll');
//   //扫码界面时：1.字体变化：颜色和加粗；
//   // 2.扫码的出现和登录界面的隐藏
//   //3.扫码界面时，整个登录界面的大小的变化
    if(a ==1){
    	sm.style.color = '#e4393c';
    	sm.style.fontWeight = 'bold';
    	dl.style.color = '#666';
    	dl.style.fontWeight = 'normal';
   	  smm.style.display="block";
   	  dll.style.display="none";
      art.style.height='390px';
    }
//     //扫码界面时：1.字体变化：颜色和加粗；
//     // 2.登录界面的出现和扫码界面的隐藏
    if(a==2){
    	dl.style.color = '#e4393c';
    	dl.style.fontWeight = 'bold';
    	sm.style.color = '#666';
    	sm.style.fontWeight = 'normal';
   		dll.style.display="block";
   		smm.style.display="none";
      art.style.height='360px';
    }
} 

// 控制输入框中图标的变化及控制X的出现及消失
var unm = document.querySelectorAll('.unm');
//获取输入框
for (var i=0;i<unm.length;i++){
  unm[i].index = i; //获取当前的索引
  var c=0;
  //输入框onclick事件触发
  unm[i].onclick=function(){
    c  =this.index + 1; //通过获取当前的索引来控制图标及X
    document.getElementById('icon' + c).style.backgroundPositionY= -48 +'px';
    //改变背景图片的位置
  }
  //输入框onmousemove事件触发(让它不停的判断输入框中是否为空)
  unm[i].onmousemove=function(){
    var  d  =this.index + 1;
    //控制X的出现及消失
    if(this.value !=''){
      document.getElementById('close' + d).style.display ='block';
    }else{
        document.getElementById('close' + d).style.display ='none';
      }
  }
  //输入框onblur事件触发
  unm[i].onblur=function(){
    var e  =this.index + 1;
    document.getElementById('icon' + c).style.backgroundPositionY= 0 +'px';
    if(this.value !=''){
      document.getElementById('close' + c).style.display ='block';
    }else{
        document.getElementById('close' + c).style.display ='none';
      }
  }
} 
//用户名和密码的变化
var username = document.getElementById('username');//用户名输入框
var password = document.getElementById('password');//密码输入框
var pp = document.getElementById('pp')//警示框
var a2= document.getElementById('a2');//密码外框
function require(){
  //账户名为空：
  if(username.value ==''){
    pp.style.display='block'; //警示框出现
    //密码为空
    if(password.value==''){
      document.getElementById('demo').innerHTML='请输入账户名和密码';//出现警示文字
      a2.style.borderColor='red'; //密码输入框的边框为红色
      return;
    }else{
        document.getElementById('demo').innerHTML='请输入账户名';//出现警示文字
      }
  }else if(password.value==''){
          pp.style.display='block';
          a2.style.borderColor='#bdbdbd'; 
          document.getElementById('demo').innerHTML='请输入密码';//出现警示文字
          return;
        }else if(username.value =='ccmm'&&password.value=='1234'){
                pp.style.display='none';//警示框关闭
                location.href='./index.html';//跳转到京东首页
              }else{
                  pp.style.display='block'; //警示框出现
                  document.getElementById('demo').innerHTML='密码或用户名输入错误';
                  a2.style.borderColor='red'; //密码输入框的边框为红色
                  document.getElementById('icon1').style.backgroundPositionY= -96 +'px';;
                  document.getElementById('icon2').style.backgroundPositionY= -96 +'px';;
                }
}

