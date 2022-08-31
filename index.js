const express = require("express");
const db = require("./products.js");
const app = express();

// middleware https://expressjs.com/es/api.html#express.urlencoded
app.use(express.urlencoded());
// middleware https://expressjs.com/es/api.html#express.json
app.use(express.json());

const DB = new db("data");

// * get all products
app.get("/products", async (req, res) => {
  const data = await DB.getAll();
  return res.send(data);
});
// * get products random
app.get("/productRandom", async (req, res) => {
  const data = await DB.getRandomProducts();
  return res.send(`<div>
    <h1>Title${data.title}</h1>
    <h3>$${data.price}</h3>
    <h3>id:${data.id}</h3>
    <img src=${data.url} alt=${data.title} width="460" height="345">
  </div>`);
});

// * listen
const server = app.listen(8080, () => {
  console.log("servidor de express iniciado");
});

server.on("error", (error) => {
  console.log(`Error! ${error}`);
});
