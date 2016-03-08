// 建立Clog数据模型
require('./database')({
	url: process.env.DBURL || 'mongodb://blog:123456@127.0.0.1:27017/blog'
});
var restify = require('restify');
var url = require('url');
var mongoose = require('mongoose');

var server = restify.createServer({
	name: 'clog',
	version: '1.0.0'
});
server.use(restify.queryParser());
// 数据收集
server.get('/c.gif', function(req, res, next){
	var ip = (req.headers['x-forwarded-for'] ||
				req.connection.remoteAddress ||
				req.socket.remoteAddress ||
				req.connection.socket.remoteAddress).match(/(\d{1,3}\.){3}\d{1,3}/gi);
	var type = req.params.t; // 采集数据的类型，1pv，2err，3todo
	var referer  = req.headers.referer;
	if( !!type && type > 0 && !!referer ){
		mongoose.model('Clog').create({
			ip:         !!ip[0] ? ip[0] : this.ip,
			type:       type,
			url:        referer,
			ref:        req.params.ref,
			ua:         req.headers['user-agent'],
			query:      url.parse(req.url).query,
			createtime: new Date()
		}, function(err, doc){
			res.send(204);
		});
	}
	return false;
});

server.listen(process.env.CLOGPORT || 1200, function(){
	console.log('%s listening at %s', server.name, server.url);
});