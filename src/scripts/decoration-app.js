// 引入QApp依赖
require('QApp');

// 引导展示页
require('./views/action/guide.js');
require('./views/action/index.js');




// 设定APP首个出现的页面
QApp.config({
  indexView: 'guide'
});
