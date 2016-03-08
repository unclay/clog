var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/*
 * @field type {Number} 数据类型 0:pv 1:err
 */
var ClogSchema = new Schema({
	ip:         { type: String, index: true },
	type:       { type: Number, index: true },
    url:        { type: String, index: true },
    ref:        { type: String, index: true },
	ua:                 String,
	query:              String,
	createtime:         Date,
	del_flag:   { type: Number, default: 0 }  // 0正常 1删除
});

module.exports = function(options){
    options = options || {};
    mongoose.connect(options.url, options.error || function(err){
    	console.error(err);
    });
    mongoose.model('Clog', ClogSchema);
}