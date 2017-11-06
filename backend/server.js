//Z frameworkiem EXPRESS
const express = require('express')
path = require('path')
bodyParser = require('body-parser')
const app = express()
const port = 8080

var index = require('./routes/index');
var books = require('./routes/books');

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
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})




