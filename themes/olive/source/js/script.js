/* all pure javascript no jquery */





var lastScrollTop = 0;
if (document.addEventListener) {
    document.addEventListener("scroll", scroll, false);
} else {
    document.onscroll = scroll();
}
function scroll() { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var main = document.querySelector('.main-body');  //中间部分
    var viewportOffset = main.getBoundingClientRect();
    var top = viewportOffset.top;
    if (st > lastScrollTop) {
        if (top < 0) {
            //隐藏顶栏
            var header = document.querySelector('.main-header');
            header.style.display = 'none';
            // 显示返回顶部
            var scrollBar=document.querySelector('.toTop-btn');
            scrollBar.style.display='block';
            var share=document.querySelector('.share-content');
            if(share!==null)
            {
            share.style.display='block';
            }
        }
    } else {
        var header = document.querySelector('.main-header');
            header.style.display = 'flex';
        if (top > 50) {
            //显示顶栏
            
            //隐藏返回顶部
            var scrollBar=document.querySelector('.toTop-btn');
            scrollBar.style.display='none';

        }
    }
    lastScrollTop = st;
}
/* 直接写在javascript里面页面会闪一下 ，从白色过度到另一个颜色  */
  //  window.onload=function(){
  
    //}

    var toTopBtn=document.querySelector('.toTop-btn');
    // btn
    toTopBtn.onclick=function(){
    window.scrollTo(0,0);
    }


    var title=document.title;
    window.onblur=function(){
       
       document.title="See You Again ●'◡'●";  //离开本页面
    }
    window.onfocus=function(){
       document.title=title;    //切换回本页面
    }


    /* 
    可以产生二维码了
   
    http://service.weibo.com/share/share.php?url=

    这个时候可以使用事件冒泡



    */
    var weiboUrl='http://service.weibo.com/share/share.php?url='+document.location.href+'&title='+document.title;
    var twitterUrl='http://twitter.com/home/?status='+'我发现了这篇好文章  '+document.title+','+'  分享给你'+'http://hktkdy.com/quiz-about-focus';
    var shareAll=document.querySelector('.share-content');
    var qrcode=document.getElementById("qrcode");
    if(shareAll!==null)
    {
    shareAll.onclick=function(e){
        
        switch(e.target.id)
        {
            case 'toweixin' :
            var img=qrcode.querySelector('img');
            if(img==null)
            {
            new QRCode(qrcode, {
            text: document.location.href,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
            } );

            var img=qrcode.querySelector('img');
            img.setAttribute('id','qrcodeImg');
            }
            qrcode.style.display='block';

            break;
            case 'toweibo' :window.open(weiboUrl);break;
            case 'totwitter' :window.open(twitterUrl);break;
        }
    } 
    }
   /*当在屏幕上点击时，如果没有点击二维码区域或者分享到微信区域，则默认隐藏。*/
   window.onclick=function(e){
    if(e.target.id!=="qrcodeImg"&&e.target.id!=="toweixin")
    {
        if(qrcode!==null)
        {
        qrcode.style.display='none';
        }
    }
   }

   //打赏功能实现

   var rewardQr=document.querySelector(".reward-qr");
   var rewardBtn=document.querySelector(".reward-btn");
   if(rewardQr!==null)
   {
    rewardBtn.onhover=function(){
    console.log('sss');
    rewardQr.style.display="block";
    }
   }

   // 白天黑夜模式 
   var lightmode=document.querySelector(".lightmode");
    lightmode.onclick=function(){                                               
    document.body.classList.toggle("night");
    if(document.body.classList.contains("night"))
    {
    localStorage.setItem("night",true);
    }
    else{
        localStorage.setItem("night",false);
    }
   }

   //黑夜模式，不等load完毕直接触发

    
// select the target node
var target = document.body;
// create an observer instance
var observer = new MutationObserver(function() {
  var night=localStorage.getItem('night');
    if(night==="true")
    {
        document.body.classList.add("night");
        lightmode.innerHTML='<a href="javascript:;" target="_blank">'+
                                    '<i class="fa fa-sun-o" aria-hidden="true"></i>'+
                                    '开灯'+
                                    '</a>';
                                }
    
    else{
        lightmode.innerHTML='<a href="javascript:;" target="_blank">'+
                                    '<i class="fa fa-moon-o" aria-hidden="true"></i>'+
                                    '关灯'+
                                    '</a>';
                                }   
});
 
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
observer.observe(target, config);