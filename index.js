const express = require("express");

const app = express();
let contador = 0;
app.get("/", (req, res) => {
  res.send('<h1 style="color:blue">Bienvenido al servidor de Express</h1>');
});

app.get("/visitas", (req, res) => {
  contador++;
  res.send(`<h1 style="color:blue">La cantidad es de ${contador} visitas</h1>`);
});

app.get("/fyh", (req, res) => {
  res.send({ fecha: "8/09/1990" });
});

// * listen
const server = app.listen(8080, () => {
  console.log("servidor de express iniciado");
});

server.on("error", (error) => {
  console.log(`Error! ${error}`);
});
