var express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['tasks']);

//get all tasks
router.get('/', function(req,res,next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
module.exports = router;