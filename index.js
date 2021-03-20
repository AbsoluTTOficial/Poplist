const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Seja Bem-vindo");
});

app.get("/sobre", function(req, res){
    res.send('')
})

app.listen(3000, function(){
    console.log("Servidor rodando na url http://localhost:3000");
});