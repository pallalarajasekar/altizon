/**
 * Created by itsme on 2/4/16.
 */

/**
 * Created by pallali on 24/3/16.
 */
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.get('/fv', function(req, res){
    res.render("formvalidate")
})
app.get('/de', function(req, res){
    res.render("directiveExample")
})

app.get('/overiew', function(req, res){
    res.render("overiew")
})
app.get('/ups', function(req, res){
    res.render("ups")
})

app.get('/tank', function(req, res){
    res.render("tank")
})

app.get('/build', function(req, res){
    res.render("build")
})

app.get('/alarm', function(req, res){
    res.render("alarm")
})

app.get('/ticket', function(req, res){
    res.render("ticket")
})

app.get('/aups', function(req, res){
    res.render("aups")
})

app.get('/atank', function(req, res){
    res.render("atank")
})

app.get('/abuild', function(req, res){
    res.render("abuild")
})

app.get('/tups', function(req, res){
    res.render("tups")
})

app.get('/ttank', function(req, res){
    res.render("ttank")
})

app.get('/tbuild', function(req, res){
    res.render("tbuild")
})