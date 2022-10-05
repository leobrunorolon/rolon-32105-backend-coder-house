const fs = require("fs");

class Carts {
  constructor(archivo) {
    this.archivo = archivo;
  }

  saveCart(objeto) {
    const contenido = fs.readFileSync(this.archivo, "utf-8");
    const carts = JSON.parse(contenido);
    const id = carts.length + 1;
    const products = [];
    products.push(...objeto);
    const cart = { id, products: products };
    carts.push(cart);
    fs.writeFileSync(this.archivo, JSON.stringify(carts, null, 2));
    return id;
  }

  getCartsById(id) {
    const data = fs.readFileSync(this.archivo, "utf-8");
    const dataParseada = JSON.parse(data);
    const objeto = dataParseada.find((objeto) => objeto.id === id);
    return objeto;
  }

  getAllCarts() {
    const data = fs.readFileSync(this.archivo, "utf-8");
    const dataParseada = JSON.parse(data);
    return dataParseada;
  }

  deleteCartsById(id) {
    const data = fs.readFileSync(this.archivo, "utf-8");
    const dataParseada = JSON.parse(data);
    const dataFiltrada = dataParseada.filter((objeto) => objeto.id !== id);
    const dataString = JSON.stringify(dataFiltrada);
    fs.writeFileSync(this.archivo, dataString);
    return dataFiltrada;
  }

  deleteProducts(id, id_prod) {
    const data = fs.readFileSync(this.archivo, "utf-8");
    const dataParseada = JSON.parse(data);
    const findCart = dataParseada.find((cart) => cart.id == id);
    const deleteProduct = findCart.filter((product) => product.id !== id_prod);
    const newData = { ...data, products: deleteProduct };
    const dataString = JSON.stringify(deleteProduct);
    fs.writeFileSync(this.archivo, dataString);
    return newData;
  }

  deleteAll() {
    fs.writeFileSync(this.archivo, "[]");
    return "[]";
  }

  getRandom() {
    const data = fs.readFileSync(this.archivo, "utf-8");
    const dataParseada = JSON.parse(data);
    let random = dataParseada[Math.floor(Math.random() * dataParseada.length)];
    return random;
  }

  updateById(id, objetoNuevo) {
    const data = fs.readFileSync(this.archivo, "utf-8");
    let dataParseada = JSON.parse(data);
    let productoViejo = dataParseada.find((objeto) => objeto.id === id);
    let mensaje = "Se reemplazo el producto";
    if (productoViejo === undefined) {
      throw { msg: "404 Not found" };
    }
    let productosFiltrados = dataParseada.filter((objeto) => objeto.id !== id);
    productoViejo = { id, ...objetoNuevo };
    productosFiltrados.push(productoViejo);
    fs.writeFileSync(this.archivo, JSON.stringify(productosFiltrados, null, 2));
    return mensaje;
  }

  addCart(objeto) {
    const contenido = fs.readFileSync(this.archivo, "utf-8");
    const carts = JSON.parse(contenido);
    const id = carts.length + 1;
    const cart = { id, products: [...objeto] };
    carts.push(cart);
    fs.writeFileSync(this.archivo, JSON.stringify(carts, null, 2));
    return id;
  }
}

module.exports = Carts;
