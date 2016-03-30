// 项目展示页

// guide 模板
var guideTpl = require('../tpl/guide.string');


// 使用swiper动作
require('../lib/swiper.js');



// 定义guide视图
QApp.defineView('guide', {

	html : guideTpl,

	plugins : ['delegated'],

	bindActions : {
		'tap.gotoIndex' : function(){
			QApp.open('index');
		}
	},

	bindEvents : {
		'beforeShow' : function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: false,
			});        
		}
	}
});