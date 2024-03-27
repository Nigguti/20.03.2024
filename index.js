const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Site Rodando");
});

app.get("/cadastro", function(res, req){
    res.send("Cadastro do Usuário");
    res.send("Login: --- ");
    res.send("senha: ----");
});

app.get("/login", function(res, req){
    res.send("Login: ---");
    res.send("Senha: ----");
})

app.listen(3030, function () {
    console.log("Rodando: http://localhost:3030");
});