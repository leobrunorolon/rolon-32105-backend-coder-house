const express = require("express");
const db = require("./products.js");
const app = express();

// middleware https://expressjs.com/es/api.html#express.urlencoded
app.use(express.urlencoded());
// middleware https://expressjs.com/es/api.html#express.json
app.use(express.json());
const palabras = ["Frase", "inicial"];

app.get("/api/frase", (req, res) => {
  res.send({ frase: palabras.join(" ") });
});

app.get("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  res.send({ buscada: palabras[pos - 1] });
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  palabras.push(palabra);
  res.send({ agregada: palabra, pos: palabras.length });
});

// * listen
const server = app.listen(8080, () => {
  console.log("servidor de express iniciado");
});

server.on("error", (error) => {
  console.log(`Error! ${error}`);
});
