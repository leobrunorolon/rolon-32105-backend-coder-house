const express = require("express");
const { Router } = express;
const router = Router();
const Carts = require("../db/carts");
const carts = new Carts("./data/carts.json");
const errorObj = require("../utils/errorObj");

//TODO: Crea un carrito y devuelve su id
router.post("/", (req, res) => {
  try {
    const data = req.body;
    carts.save(data);
    res.redirect("/");
  } catch (err) {
    res.status(404).send(err);
    console.log(errorObj);
  }
});

//TODO: Vacia un carrito y lo elimina
router.delete("/:id/", (req, res) => {
  try {
    const { id } = req.params;
    res.send(carts.deleteById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err.msg);
    console.log(errorObj);
  }
});

//TODO: Me permite lista todos los productos guardados en el carrito
router.get("/:id/products", (req, res) => {
  try {
    const { id } = req.params;
    const prodNuevo = req.body;
    const idInt = parseInt(id);
    res.send(carts.updateById(idInt, prodNuevo));
  } catch (err) {
    res.status(404).send(err.msg);
    console.log(errorObj);
  }
});
//TODO: Para incorporar productos al carrito por su id
router.post("/:id/products", (req, res) => {
  try {
    const data = req.body;
    carts.save(data);
    res.redirect("/");
  } catch (err) {
    res.status(404).send(err);
    console.log(errorObj);
  }
});
//TODO: Eliminar un producto del carrito por su id de carrito y de producto
router.delete("/:id/products/:id_prod", (req, res) => {
  try {
    const { id, id_prod } = req.params;
    res.send(carts.deleteProducts(parseInt(id), parseInt(id_prod)));
  } catch (err) {
    res.status(404).send(err.msg);
    console.log(errorObj);
  }
});

module.exports = router;
