var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article One | Subhashis Pal',
        date:'5 Aug, 2017',
        content:
        `   <p>This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.</p>
			<p>This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.</p>
			<p>This is Article one.This is Article one.This is Article one.This is Article one.This is Article one.</p>
        `
    },
    'artile-two':{
        title:'Article two | Subhashis Pal',
        date:'5 Aug, 2017',
        content:
        `   <p>This is Article one.This is Article two.This is Article two.This is Article two.This is Article two.</p>
			
        `
    },
    'article-three':{
        
        title:'Article two | Subhashis Pal',
        date:'5 Aug, 2017',
        content:
        `   <p>This is Article three.This is Article three.This is Article three.This is Article three.This is Article three.</p>
			
        `
    }
};

function createTemplate(data){
    var title=data.title;
    var date = data.date;
    var content = data.content;
    var htmlTemplate=
    `
        <html>
            <head>  
                <title>
                    $(title)
                </title>
            </head>
        </html>
    `;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.sendFile(path.join(_dirname,'ui','article-one.html')); 
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
