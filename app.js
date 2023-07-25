const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");
// Configuracion Middleware con el Servidor de Autorización
const jwtCheck = auth({
  audience: 'http://127.0.0.1:3000/api/libros',
  issuerBaseURL: 'https://dev-lir2hnalo5r6my50.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});
const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
//Configuramos el middleware de autenticacion
app.use("/libros",  jwtCheck, librosRouter);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
