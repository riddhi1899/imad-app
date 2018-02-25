var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: '	chauhanriddhi1999',
    databade: '	chauhanriddhi1999',
    host: 'http://db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var ArticleOne={
    title:"Article One | Riddhi Chauhan",
    heading:"Article One",
    date: "14 feb 2018 ",
    content: 
    `
        <div>
        <p>
            Hello Everyone , Welcome to my first article page. Hope you love reading it.
        </p>
        <p>
            Thank you for reading my fist article page and hope you loved it.
        </p>
        <p>
            Have a great day ahead!
            Love Riddhi
        </p>
        </div>
    `
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
var htmlTemplate=`
<html>
    <head>
        <title>
            Article One  | Riddhi Chauhan
        </title>
        <meta name="viewport" content="width=device-width, initial-sacle=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="\">Home</a>
        </div>
        <hr/>
        <h3>
            $(heading)
        </h3>
        <div>
            $(date)
        </div>
            $(content)
        </div>
    </body>
</html>
`;
return html|Template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool= new Pool(config);
app.get('/test-db',function(req, res){
   //make a select reques
   //return the data
   pool.query('SELECT * FROM test',function(err,result){
       if (err){
           res.status(500).send(err.toString());
       }
       res.send(JSON.stringify(result));
   })
});

app.get('/article-one',function(req, res) {
    res.send(createTemplate(ArticleOne));
});
app.get('/article-two',function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
