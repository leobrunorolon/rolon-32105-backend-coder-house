const frase = "Hola mundo como estas";

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * /api/
app.get("/api/getFrase", (req, res) => {
  res.send({ frase });
});

app.get("/api/getLetra/:num", (req, res) => {
  const { num } = req.params;
  res.send(frase[num - 1]);
});

// ** put
app.put("/usuario/:id", (req, res) => {
  res.send({ metodo: put, body: req.body, params: req.params });
});

app.delete("/usuario/:id", (req, res) => {
  res.send({ metodo: "delete", params: req.params });
});

app.listen(8080, () => {
  console.log("inicializado");
});
