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
        }
    } else {
        if (top > 50) {
            //显示顶栏
            var header = document.querySelector('.main-header');
            header.style.display = 'block';
            //隐藏返回顶部
            var scrollBar=document.querySelector('.toTop-btn');
            scrollBar.style.display='none';

        }
    }
    lastScrollTop = st;
}
/* 直接写在javascript里面页面会闪一下 ，从白色过度到另一个颜色  */
    window.onload=function(){
    var article=document.getElementsByTagName('article');
    if(!article.length)
    {
        document.body.style.backgroundColor="#f4f5f5";
    }
    }

    var toTopBtn=document.querySelector('.toTop-btn');
    // btn
    toTopBtn.onclick=function(){
    window.scrollTo(0,0);
    }