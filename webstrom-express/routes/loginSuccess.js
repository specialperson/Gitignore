/**
 * Created by dllo on 17/4/24.
 */
var mysql = require('mysql');
var options = {
    connectionLimit: 3,
    user: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306,
    database: 'HTML5',
    charset: 'utf8'
};
var pool = mysql.createPool(options);



var express = require('express');
// 2.通过express 创建路由
var router = express.Router();
// 3.路由访问, 回调函数
router.post('/',function (req,res) {

    var username = req.body.username;
    var password = req.body.password;
    var user  ={
        username: username,
        password: password
    }
    pool.query('select * from user',function (error,results) {
        if(error){
            console.log('查询失败');
            console.log(error);
        }else{
            if(user.username == results[0].username && user.password == results[0].password){
                res.send('登录成功');
            }else{
                res.send('登录失败');
            }
        }
    });

});
// 4.模块导出 路由
module.exports = router;