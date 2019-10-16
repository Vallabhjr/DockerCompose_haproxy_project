var express = require('express');

var app = express();

var port = process.env.PORT || 8000;

// allow CORS -> https://enable-cors.org/server_expressjs.html
app.use('*', function(req, res, next) {
     res.header('Access-Control-Allow-Origin', "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

var api = require('./app/routes/api')(app,express);
var amulApi = require('./app/routes/amul')(app,express);

app.use('/api',api);
app.use('/amul', amulApi);

app.get('*',function(req,res){
    res.status(200).json({
        'message' : 'Welcome to Comics Geek!'
    })
});

app.listen(port, function(err){
    if(err)
    {
        console.log(err);
    }
    console.log('Server started @ PORT : ',port);
});
