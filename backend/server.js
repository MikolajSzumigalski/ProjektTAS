//Z frameworkiem EXPRESS
const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require('body-parser');
//
const passport = require('passport');

//
const app = express();
app.use(cors());

const port = 4000;

var index = require('./routes/index');
var books = require('./routes/books');
//
var users = require('./routes/users');

app.set('views', path.join(__dirname,'views'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname + 'client')));

//Body Parser
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', books);
//
app.use('/users', users);

//pasport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})




