var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/User/Invite/getActivityInviteToken', function(req, res, next) {
    var data =Mock.mock({
        'list|20':[{
            'id|+1':1,
            'serial_number|1-100':1,
            'warn_number|1-100':1,
            'warn_name|1':['流水线编排服务异常','磁盘占用超过阈值'],
            'warn_level|1':['紧急','重要'],
            'warn_detail':'环境IP:10.114.123.12,服务名称:XX',
            'create_time':Random.datetime(),
            'finish_time':Random.datetime(),
            'contact|4':'abc'
        }]
    });
    res.json(require('../json/getActivityInviteToken.json'))
});

module.exports = router;



