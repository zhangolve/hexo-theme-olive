

# 关于主题和特色

1.我所知的首个具有「夜晚模式」的HEXO主题

2. [Medium](https://www.medium.com) 、[知乎专栏](http://www.zhihu.com)、[掘金专栏](https://juejin.im) 风格的文章页面，让读者注意力尽可能放到文章本身上。

3. 本主题不支持IE6，7，8，9，使用IE6,7,8,9浏览时，页面会有相应警告信息。

# 功能

- 对IE浏览器的检测和警告
- 不支持多说评论系统（废话，它都已经关张了），支持disqus评论系统
- 以相对时间显示文章的发布时间
- 文章页的阅读时间统计
- 版权信息的可配置
- 分享功能支持微信、微博、推特，在文章左侧
- 文章的打赏功能（目前支持支付宝）
- 针对文章较多，标签较多的情况，只显示前十个标签展示
- 可配置的谷歌分析，用于分析网站数据
- 夜晚模式
- 移动端的简洁设计
- 博客首页文章中图片缩略图展示
- 用户离开本博客页面后的标题彩蛋



# 致谢

- [掘金](https://www.juejin.im/) ，本博客首页的最初设计思路很多借（chao）鉴（xi）于此
- [medium](https://www.medium.com) ,非常好的文章页设计，我最初的很多思路同样借（chao）鉴（xi）于此
- [HEXO.IO](https://hexo.io/zh-cn/docs/) ，Hexo 官方文档，给我提供了很多参考
- [写一个自己的Hexo主题](https://segmentfault.com/a/1190000006057336) ,这篇16年7月份的文章，对我最初写这个主题很有参考价值
- [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) ，hexo的官方主题，虽然本身很丑，但是代码逻辑很清晰，给了我很大的参考
- [hexo-theme-next wiki](https://github.com/iissnan/hexo-theme-next/wiki) ，我在编写本主题代码的时候，并没有参考这个主题，但是当我想要写一下本主题的配置的时候，发现这个主题的wiki已经说得很详细了。表示感谢。



# 其他

这几年玩hexo博客系统，也写了很多相关的文章，从写过的这些文字也能够看出来个人的进步。
如果你第一次使用hexo搭建博客，无论是技术人，还是文艺青年，可以参考阅读下面的文章

- [用github结合hexo建立个人博客的几点注意及参考资料](http://hktkdy.com/2014/05/25/201405/0525/)
- [在hexo博客中添加其他项目主页](http://hktkdy.com/2014/09/07/201409/0907/)
- [【hexo】博文引用块（blockquote）改进](http://hktkdy.com/2015/05/15/201505/0506/) ,这篇是当年没有系统学习前端之前写的了，如今看来，雕虫小技，小菜一碟了。
- [hexo博客主题更换为kael](http://hktkdy.com/2015/01/01/201501/0101/)
- [【Hexo】文章末尾添加微信公众号二维码](http://hktkdy.com/2016/04/22/201604/blog-end-add-wechat/) 

当然，前面是我个人的总结，我认为值得推荐的教程：

[史上最详细的Hexo博客搭建图文教程](https://xuanwo.org/2015/03/26/hexo-intor/)



# 目录结构

 
	│  LICENSE
	│  readme.md
	│  _config.yml
	│
	├─languages
	│      default.yml
	│      fr.yml
	│      nl.yml
	│      no.yml
	│      ru.yml
	│      zh-CN.yml
	│      zh-TW.yml
	│
	                   
	layout                          
	 │  archive.ejs                 
	 │  category.ejs                
	 │  index.ejs       首页            
	 │  layout.ejs                  
	 │  page.ejs                    
	 │  post.ejs                    
	 │  tag.ejs                     
	 │                              
	 ├─_partial                     
	 │  │  after-footer.ejs          
	 │  │  archive-post.ejs         
	 │  │  archive.ejs              
	 │  │  article.ejs              
	 │  │  footer.ejs    footer模板           
	 │  │  friends.ejs   右侧友情链接模板           
	 │  │  google-analytics.ejs     谷歌分析模板
	 │  │  head.ejs      网站头部引用模板           
	 │  │  header.ejs    网站头部导航栏模板           
	 │  │  iewarn.esj    低版本ie浏览器警告信息模板           
	 │  │  share.ejs     文章分享模板           
	 │  │  social.ejs    右侧社交网路信息模板           
	 │  │                           
	 │  └─post                      
	 │   ---    category.ejs  分类      
	 │   ---    copyright.ejs 文章版权声明      
	 │   ---    date.ejs      日期      
	 │   ---    disqus.ejs    第三方评论disqus      
	 │   ---    money.ejs     打赏      
	 │   ---    nav.ejs       导航       
	 │   ---    tags.ejs      标签      
	 │   ---    title.ejs     文章题目      
	 │                              
	 └─_widget                      
	     --- archive.ejs            
	     --- category.ejs           
	     --- recent_posts.ejs       
	                                         
	source    资源文件夹                   
	  │  favicon.png    网站标题栏上的图标            
	  │                             
	  ├─css                         
	  │  │  night.styl   夜晚模式样式           
	  │  │  style.styl   主样式           
	  │  │  _variables.styl   styl变量     
	  │  │                          
	  │  ├─fonts   本地字体文件夹                 
	  │  │      fontawesome-webfont.
	  │  │      fontawesome-webfont.
	  │  │      fontawesome-webfont.
	  │  │      fontawesome-webfont.
	  │  │      FontAwesome.otf     
	  │  │                          
	  │  └─_partial                 
	  │          archive.styl   首页样式    
	  │          article.styl   文章页面样式    
	  │          copyright.styl 版权说明样式    
	  │          footer.styl    底部footer样式    
	  │          header.styl    头部导航样式    
	  │          highlight.styl 代码高亮样式    
	  │          iewarn.styl    低版本ie浏览器警告样式    
	  │          money.styl     打赏功能样式    
	  │          share.styl     分享功能样式    
	  │                             
	  ├─img                         
	  │  ---    bottom.png   文章页面分割线图片          
	  │  ---    logo.jpg     网站logo图片           
	  │                             
	  └─js                          
	       ---   iewarn.js    低版本ie浏览器检测脚本         
	       ---   lightmode.js 灯光模式切换脚本         
	       ---   qrcode.js    网站链接二维码生成脚本         
	       ---   script.js    网站主js脚本         
	                                

# 环境

$ hexo version
hexo: 3.1.1
os: Windows_NT 10.0.14393 win32 ia32
http_parser: 2.6.0
node: 5.5.0
v8: 4.6.85.31
uv: 1.8.0
zlib: 1.2.8
ares: 1.10.1-DEV
icu: 56.1
modules: 47
openssl: 1.0.2e




