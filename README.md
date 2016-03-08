# 数据采集器
采集web数据，用于统计pv，白屏时间，首屏时间等

# 使用方法
访问地址：/c.gif?t=0,ds=1920*1000

+ t   {number} 数据类型 1、pv，2、js_error，3、todo
+ ds  {string} 分辨率 例如：320*568
+ ref {string} 上个页面来源
+ ua  {string} 服务器处理
+ ip  {string} 服务器处理

# 技术支持
+ restify
+ mongoose
