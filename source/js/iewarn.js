var browser=navigator.appName 
var b_version=navigator.appVersion 
var version=b_version.split(";"); 
if(version){
var trim_Version=version[1].replace(/[ ]/g,""); 
var iewarn=document.getElementById('iewarn');
}
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
{ 
	iewarn.style.display="block";
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
{ 
iewarn.style.display="block";
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
{ 
iewarn.style.display="block";
} 
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") 
{ 
iewarn.style.display="block";
} 