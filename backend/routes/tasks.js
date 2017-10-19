var express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['books']);

//get all books
router.get('/', function(req,res,next){
    db.books.find(function(err, books){
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});
module.exports = router;