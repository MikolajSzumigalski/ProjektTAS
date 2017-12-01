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
		dane = '{"status":"200","data":' + JSON.stringify(books)+ '}';
		jsonik=JSON.parse(dane);
		res.send(jsonik);
    });
});
router.get('/remove/:id', function(req, res, next){
    db.books.remove({_id : mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }
    });
});
router.post('/edit', function(req, res) {
    console.log("data edit");
	var _id = req.body._id;
	var name = req.body.name;
	var author = req.body.author;
	var price = req.body.price;
	var image = req.body.image;
	var describtion = req.body.describtion;
	var count = req.body.count;
	var isbn = req.body.isbn;
	console.log("post edited: %s %s", name, author);
	db.books.update({isbn: isbn}, {$set:{name: name, author: author, price: price,image: image, describtion: describtion, count: count}}, function(err, books) {
    if (err){
            res.send(err);
        }
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
	if(image == null){
		image = 'http://knowamerica.pl/img/brakOkladki.jpg';
	}
	var data = {name: name, author: author, price: price,image: image, describtion: describtion, count: count, isbn: isbn };
	db.books.insert(data, function(err, books){
        if(err){
            return res.send(err);
        }
    });
});
module.exports = router;