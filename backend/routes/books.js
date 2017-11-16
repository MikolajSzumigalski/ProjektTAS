var express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
const bodyParser = require('body-parser');
var db =  mongojs('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', ['books']);
//const app = express();
//get all books
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json());
router.get('/books', function(req,res,next){
    db.books.find(function(err, books){
        if(err){
            res.send(err);
        }
		//res.setHeader("status", 200)
        //console.log(JSON.stringify(books).substring(1, JSON.stringify(books).length-1));
		//data = JSON.stringify(books).substring(1, JSON.stringify(books).length-1);
		//res.json(books[0]);
		//console.log(data);
		dane = '{"status":"200","data":' + JSON.stringify(books)+ '}';
		//console.log(dane);
		//dane =  '{"status":"200 OK","data":'+JSON(books)+'}';
		//res.writeHead(200).json(books);
		//console.log(JSON.parse(dane));
		jsonik=JSON.parse(dane);
		res.send(jsonik);
		//res.send(dane);
		//res.send(dane);

        // finish the request
        //message: 'Welcome to the project-name api'
    //});
        //res.String(json(books)).substring(3,4);

    });
});
//get one book by id
router.get('/book/:id', function(req, res, next){
    db.books.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, books){
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});

router.get('/book/:author', function(req, res, next){
    db.books.findOne({author: author}, function(err, books){
        if(err){
            res.send(err);
        }
		console.log("author");
		console.log(author);
        res.json(books);
    });
});


module.exports = router;