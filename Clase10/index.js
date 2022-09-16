const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const fs = require("fs");
const fsPromise = fs.promises;
const Contenedor = require("./contenedor");
const constructor = new Contenedor("./productos.json");
const productosRouter = require("./productos");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", express.static(__dirname + "/assets"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/views",
    defaultLayout: "main",
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

app.get("/productos", (req, res) => {
  res.render("productos", {
    layout: "productos",
    title: "Productos",
    compras: constructor.getAll().sort((a, b) => a.id - b.id),
    noProd: "No hay productos",
  });
});

//TODO: PUG VIEWS

// app.set("views", __dirname + "/views");
// app.set("view engine", "pug");
// app.get("/", (req, res) => {
//   res.render("root", {
//     layout: "root",
//     title: "Página principal",
//     Precio: "Precio",
//     addProd: "Añadir Producto",
//   });
// });

// app.get("/productos", (req, res) => {
//   res.render("productos", {
//     layout: "productos",
//     title: "Productos",
//     compras: constructor.getAll().sort((a, b) => a.id - b.id),
//     noProd: "No hay productos",
//   });
// });

//TODO: EJS VIEWS

// app.set("views", __dirname + "/views");
// app.set("view engine", "ejs");
// app.get("/", (req, res) => {
//   res.render("root", {
//     layout: "root",
//     title: "Página principal",
//     Precio: "Precio",
//     addProd: "Añadir Producto",
//   });
// });

// app.get("/productos", (req, res) => {
//   res.render("productos", {
//     layout: "productos",
//     title: "Productos",
//     compras: constructor.getAll().sort((a, b) => a.id - b.id),
//     noProd: "No hay productos",
//   });
// });

app.use("/productos", productosRouter);

app.listen(8080, () => {
  console.log("Server ON");
});
