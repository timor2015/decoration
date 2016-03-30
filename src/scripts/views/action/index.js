// 引入index模板
var indexTpl = require('../tpl/index.string');


// 定义index视图
QApp.defineView('index', {

	html : indexTpl,

	plugins : ['doms', 'delegated'],

	bindActions : {

	},

	bindEvents : {
		
	}
});