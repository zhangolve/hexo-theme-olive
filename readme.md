

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
- 安卓Chrome 系浏览器的状态栏主题颜色设置
- Add to home screen 添加网站到桌面

# 展示

直接访问我的个人博客去看喽： [http://hktkdy.com](http://hktkdy.com)

移动端可复制网站或扫描下方二维码


![](http://7ktu2f.com1.z0.glb.clouddn.com/hktkdycom.png)


**需要注意的是：由于博客搭建在Github Pages上面，如果您的访问速度不理想，可能并非是博客主题系统本身的问题，而是服务器的问题。**



# 你为什么要选择这个主题

好了，前面简单罗列了这个主题的特色和功能点。现在问题来了，如果你正在使用hexo博客系统书写博客，可能正在用一个其他的主题，那么凭什么要花时间，换一个其他的的主题呢？

我认为除了以上的特色和功能点之外，还是看个人的喜好和风格。

对我来讲，我个人是喜好偏向知乎专栏风格的文章页面的，我认为这样的设计让我更专注于阅读，然而其他的主题，很少有在这一点上有令我满意的，如果你喜欢这样的风格，或许你会喜欢这个主题。

对我来讲，有点朋友圈的文章的味道。甭管你喜不喜欢朋友圈里那些被转发的10万+，你都应该对朋友圈很是熟悉。据我了解，这个主题，有那么点味道，当然，并不浓厚。我自己也不会写那种「标题党」的文章。如果你喜欢这样的风格，或许你会喜欢这个主题。

对我来讲，我喜欢淡色系，但是淡色系在夜晚的时候又会很让人头疼。因此，这个主题又加入了「夜晚模式」，据我所知，这也是首个Hexo主题里含有夜晚模式的。如果你认为夜晚模式是必不可少的，或许你会喜欢这个主题。

当然，如果以上所说所有如果都不能成为一个你选择它的理由的话。那么我要说，就因为他够小众，你觉得跟别人撞衫尴尬吗？如果尴尬，跟别人用同一个博客主题为什么就不尴尬呢，选择它，或许会让你撞衫的几率更小。哈哈。


然而，让人不喜欢的理由也很多，这个主题在细节之处的打磨还不够，有些地方还比较粗糙。

# 使用

## 安装

$ git clone https://github.com/zhangolve/hexo-theme-olive.git themes/olive
配置

修改hexo根目录下的 _config.yml ： theme: olive




## 环境

需要注意的是，我自己的运行环境是：

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


没有对其他运行环境进行测试，如果此主题不能正常使用，请向我反馈，不胜感激。



## 更新

	cd themes/olive
	git pull

# 配置

主题配置文件在主目录下的_config.yml，请根据自己需要修改使用。 

请安装好之后，手动打开_config.yml 文件，里面针对每一项配置都有较为详细的说明.





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

# 一些扯淡的话

[一些扯淡的话](https://github.com/zhangolve/hexo-theme-olive/blob/master/little-talk.md)


# Q&A

## 1.国际化是如何配置的？为什么你的博客界面是中文的,我使用你这个主题，我的博客界面上还有很多英文或乱码显示?

博客的国际化这一块，是在hexo 博客系统根目录下的_config.yml文件中进行配置的，在我的博客中默认已经有了这个配置，因此之前也并未在此说明，如果你的_config.yml 文件中没有这方面的配置，请自行添加，例如：


	language: zh-CN



则，当前博客页面上的一些控件，例如上下页信息，发布时间等信息都将以简体中文的方式来显示。具体的所有语言类型可以在主题目下的languages文件夹下查看，每一个文件名即为一种语言选项。如果您未在博客系统根目录下的_config.yml 中设置语言选项，则默认将以英文的方式来显示控件信息。


## 我第一次接触Hexo博客系统，我也不是学习计算机的，我就想用你的主题尽快配置出来一个美观好用的博客，你有没有文档方便我查看?

我上面也已经说了，主题配置文件在主目录下的_config.yml，请根据自己需要修改使用。这个这个文件里的每一项都有详细的说明，只要按照规则去配置，就能很快地搞出一个美观的博客。

当然，如果你是第一次接触Hexo博客系统，可以一开始配置Hexo 就会很费时，因为我也是这么过来的，也推荐你看看我上面提到的一些文章。


## 首页的订阅我，关于我在配置文件里都有设置，为什么点击之后是404?

情况是这样的，我的推荐是你能够支持RSS的订阅和一个「关于我」的界面展示。

RSS订阅要求安装Hexo插件，我也推荐你能够安装sitemap插件，这也有助于你的站点更好地被搜索引擎检索，这方面的内容，推荐你看一下[站点地图](http://blog.csdn.net/u010053344/article/details/50706790)  以及[Hexo教程4](http://www.jianshu.com/p/bb35e703f9bf) 这两篇文章，总结而言，安装起来并不复杂。

而「关于我」的界面，也需要你自己写一个「关于我」的页面，不然当然不可能凭空产生一个这样的页面。
需要在博客根目录下的source文件夹下建立一个about文件夹，在这里面添加一个index.md文件，在里面输入你自定义的个人介绍内容。

具体也可以看我下面的这个演示

![](http://7ktu2f.com1.z0.glb.clouddn.com/aboutme.gif)


## 为什么我的本地图片不能正常显示？

从上图也可以看出来，支付宝的图片位置在博客根目录source文件夹下的img文件夹内，而非theme文件夹下的source文件夹。我给定的模板中，支付宝图片位置与其他图片位置不同，你也可以修改图片位置。

当加上引号之后，是相对于主题目录下source文件夹而言的路径设置

比如：headerpic: "/img/logo.jpg"

则你需要把你的logo.jpg 文件放到   \hexo(博客根目录)\themes\olive\source\img

而如果是 alipay: /img/alipay.jpg

你需要把你的图片放到 \hexo(博客根目录)\source\img 目录之下




## 出现404就算了，为什么页面还这么丑。

如果出现了404，如果你使用的是Github pages，那么404将会显示Github 官方的404页面，我推荐使用腾讯公益404，还是我上图中的示例，你应该已经看到了在source文件夹中，有一个404.md文件，如果你的这个文件夹下没有这个文件，请创建之，在这个404.md 文件内添加这样一段代码：


	<script type="text/javascript" src="http://www.qq.com/404/search_children.js" charset="utf-8"></script>


然后为了测试你的这个404页面是否正常，如果是在本地，请访问 localhost:4000/404.html ，如果已经部署完毕，请访问你的网址后缀404.html ，比如我的博客： hktkdy.com/404.html



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
	                                






