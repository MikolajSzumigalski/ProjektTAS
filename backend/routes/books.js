var express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
const bodyParser = require('body-parser');
var db =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['books']);
var dbtest =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['test']);
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

router.post('/insert', function(req, res) {
	res.json({status:"data send"});
	var name = req.body.name;
	var author = req.body.author;
	var price = req.body.price;
	var image = req.body.image;
	var describtion = req.body.describtion;
	var count = req.body.count;
	var isbn = req.body.isbn;
    console.log("post received: %s %s", name, author, price);
	var data = {name: name, author: author, price: price,image: image, describtion: describtion, count: count, isbn: isbn };
	db.books.insert(data, function(err, books){
        if(err){
            return res.send(err);
        }
    console.log("1 document inserted");
	//res.json({ message: 'post created!' });
    });
});

module.exports = router;