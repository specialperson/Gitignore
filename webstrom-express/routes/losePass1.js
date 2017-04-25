/**
 * Created by dllo on 17/4/25.
 */

var express = require('express');
var queryStr = require('querystring');
var url = require('url');
var router = express.Router();

var mysql = require('mysql');

// options 创建连接的参数
var options = {
    user: 'root',
    password: '123456',
    host: 'localhost',
    port: 3306,
    database: 'HTML5',
    charset: 'utf8'
};
// 1.创建连接器
var connection = mysql.createConnection(options);
// 2.连接器建立连接
connection.connect(function (error) {
    if(error){
        console.log('连接失败');
        console.log(error);
    }else{
        console.log('连接成功');
    }
});



router.get('/',function (req,res) {
    // res.render('losePass1');

    var urlObj = url.parse(req.url);
    var queryAll = urlObj.query;
    var query = queryStr.parse(queryAll);
    console.log(query);
    var username = query.username;
    var password = query.password;
    var newpassword = query.newpassword;
    console.log(username);
    console.log(password);
    console.log(newpassword);

    if(password==newpassword){
        var updateSQL = 'update user SET password=\'password\' where username=\'username\'';
        console.log(updateSQL);
        connection.query(updateSQL,function (error) {
            if(error){
                console.log('更新失败');
                console.log(error);
            }else{
                res.send('修改成功');
            }
        });
    }else{
        res.send('修改失败');
    }


});
// 4.模块导出 路由
module.exports = router;