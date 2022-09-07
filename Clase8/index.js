const express = require("express");
const app = express();
const fs = require("fs");
const productosRouter = require("./productos");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(__dirname + "/assets"));

app.use("/api/productos", productosRouter);

app.listen(8080, () => {
  console.log("Server ON");
});
