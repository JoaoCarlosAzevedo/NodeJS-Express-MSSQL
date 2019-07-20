//Inicializando os modulos do NODE.JS
const express =   require('express')
                , app = express()
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require('cors');
const basicAuth = require('express-basic-auth')
 
// Middlewares

//Toda requisicao tem que passar login e senha com BasicAuth
app.use(basicAuth({
    users: { [process.env.API_LOGIN]: process.env.API_PASS }
}))

app.use(bodyParser.json()); 
app.use(cors()) 
app.use('/',router)

// middleware de tratamento de erro
app.use((err, req, res, next) => { 
    console.error(err.stack);
	res.status(500).json({ error: err.toString() });
});
 
module.exports = app; 