 // 白天黑夜模式 
 //不要轻易使用观察者，容易造成浏览器崩溃 target=document.body很危险
 ;
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
    dayModeState();
   }

   //黑夜模式，不等load完毕直接触发

//必须保证当发生跳转的时候，只要继续在该站点，就仍然是该灯光模式，而不能刷新或者跳转后模式改变
function dayModeState() {
    var night=localStorage.getItem('night');
    if(night==="true")
    {
        document.body.classList.add("night");
        lightmode.innerHTML='<a href="javascript:;" >'+
                                    '<i class="fa fa-sun-o" aria-hidden="true"></i>'+
                                    '开灯'+
                                    '</a>';
                                }
    
    else{
        lightmode.innerHTML='<a href="javascript:;" >'+
                                    '<i class="fa fa-moon-o" aria-hidden="true"></i>'+
                                    '关灯'+
                                    '</a>';
                                }   
}


dayModeState();


// select the target node
//var target = document.querySelector(".lightmode");
// create an observer instance
//var observer = new MutationObserver(dayModeState);
 
// configuration of the observer:
//var config = { attributes: true, childList: true, characterData: true };
 
// pass in the target node, as well as the observer options
//observer.observe(target, config);