const express           = require('express');
const bodyParser        = require('body-parser');
const app               = express();
const MongoClient       = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://janusz:qwerty@ds125365.mlab.com:25365/uamtas', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3001, () => {
        console.log('klient mongo na 3001')
    });
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
    console.log("serwer express na 3000")
});

app.get('/', (req, res) => {
    db.collection('books').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('index.ejs', {ksiazki: result})
    })
  })

app.post('/ksiazki', (req, res) => {
    db.collection('books').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('dodano do bazy');
        res.redirect('/');
    })
});


