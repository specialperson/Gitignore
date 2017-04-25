/**
 * Created by dllo on 17/4/25.
 */
// 1.引入express
var express = require('express');
// 2.通过express 创建路由
var router = express.Router();
// 3.路由访问, 回调函数
router.get('/',function (req,res) {
    res.render('losePass');
});
// 4.模块导出 路由
module.exports = router;