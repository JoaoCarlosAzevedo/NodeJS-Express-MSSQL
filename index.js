var app = require("./src/server")

//Configurando a aplicacao
var server = app.listen(process.env.PORT || 8081, function () {
    var port = server.address().port;
    console.log("Aplicacao rodando na porta: ", port);
 });




