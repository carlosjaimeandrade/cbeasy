const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const cubagemController = require("./cubagem/cubagemController")
const connection = require("./database/database")
var session = require('express-session');
const  flash  = require ('connect-flash');

//configurando o view engine
app.set('view engine', 'ejs');

// configurando o bory parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configurando os arquivos staticos
app.use(express.static('public'))

//autenticando a conexao e testando
connection.authenticate().then(() => {
    console.log("conectado com sucess")
}).catch(err => {
    console.log(err)
})

app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

app.use(flash());

app.use("/", cubagemController);

// rodando servidor
app.listen(8080, () => {
    console.log('servidor rodando')
});