var express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
const bodyParser = require('body-parser');
var db =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['books']);
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json());
router.get('/books', function(req,res,next){
    db.books.find(function(err, books){
        if(err){
            res.send(err);
        }
		dane = '{"status":"200","data":' + JSON.stringify(books)+ '}';
		jsonik=JSON.parse(dane);
		res.send(jsonik);
    });
});

router.get('/find/:id', function(req, res, next){
    db.books.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});

router.get('/remove/:id', function(req, res, next){
    db.books.remove({_id : mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }
       res.json({status:"deleted"});
    });
});

router.get('/insert/:data2', function(req, res, next){
	console.log(toString(data2));
   db.books.insert(data2, function(err, books){
        if(err){
            res.send(err);
        }
    console.log("1 document inserted");
        res.json(books);
    });
});


router.get('/insert', function(req, res, next){
	var myobj = { name:"Harry Potter i Zakon Feniksa",author:"J.K.Rowling",price:34,image:"https://static.intelimedia.pl/sub/Harry-Potter-i-Zakon-Feniksa-audiobook-CD-audio-_bn36549.jpg",describtion:"Harry Potter jest głównym bohaterem książki J.K. Rowling pt. „Harry Potter i więzień Azkabanu”. Harry stracił swoich rodziców gdy miał",count:36};
    db.books.insert(myobj, function(err, books){
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});


module.exports = router;