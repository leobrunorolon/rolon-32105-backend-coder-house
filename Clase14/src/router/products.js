const express = require("express");
const { Router } = express;
const router = Router();
const Products = require("../db/products");
const products = new Products("../data/products.json");
const errorObj = require("../utils/errorObj");

//TODO: Me permite listar todos los productos dispinibles (disponible par usuarios y administradores)
router.get("/", (req, res) => {
  try {
    res.send(products.getAll());
  } catch (err) {
    res.status(404).send(err);
    console.log(errorObj);
  }
});
//TODO: Me permite mostrar un producto por su id (disponible par usuarios y administradores)
router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.send(products.getById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err);
    console.log(errorObj);
  }
});
const adminUser = true;
if (adminUser) {
  //TODO: Para incorporar producto por su id ( disponible para administradores)
  router.post("/", (req, res) => {
    try {
      const data = req.body;
      products.save(data);
      res.redirect("/");
    } catch (err) {
      res.status(404).send(err);
      console.log(errorObj);
    }
  });
  //TODO: Actualizar un producto por su id ( disponible para administradores)
  router.put("/:id", (req, res) => {
    try {
      const { id } = req.params;
      const { prodNuevo } = req.body;
      const idInt = parseInt(id);
      res.send(products.updateById(idInt, prodNuevo));
    } catch (err) {
      res.status(404).send(err.msg);
      console.log(errorObj);
    }
  });
  //TODO: Borrar un producto por su id ( disponible para administradores)
  router.delete("/:id", (req, res) => {
    try {
      const { id } = req.params;
      res.send(products.deleteById(parseInt(id)));
    } catch (err) {
      res.status(404).send(err.msg);
      console.log(errorObj);
    }
  });
}

module.exports = router;
