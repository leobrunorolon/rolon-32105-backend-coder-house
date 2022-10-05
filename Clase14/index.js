const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const fs = require("fs");
const fsPromise = fs.promises;
const productsRouter = require("./src/router/products.js");
const cartsRouter = require("./src/router/carts.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/views",
    defaultLayout: "index",
  })
);

//TODO: HANDLE BARS VIEWS

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("root", {
    layout: "root",
    title: "Página principal",
    Precio: "Precio",
    addProd: "Añadir Producto",
  });
});

app.use("/products", productsRouter);
app.use("/carts", cartsRouter);

app.listen(8080, () => {
  console.log("Server ON");
});
