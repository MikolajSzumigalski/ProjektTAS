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
router.get('/books', function(req,res,next){
    db.books.find(function(err, books){
        if(err){
            res.send(err);
        }
		//res.setHeader("status", 200)
        //console.log(JSON.stringify(books).substring(1, JSON.stringify(books).length-1));
		//data = JSON.stringify(books).substring(1, JSON.stringify(books).length-1);
		//res.json(books);
		//console.log(data);
		//dane = '{"status":"200 OK","data":' + JSON.stringify(books)+ '}';
		//console.log(dane);
		dane =  '{"status":"200 OK","data":'+JSON.stringify(books)+'}';
		//res.writeHead(200).json(books);
		//res.status(200).json(books)
		//res.send(dane);
		res.send(dane);
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
module.exports = router;