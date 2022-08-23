const fs = require("fs");

class baseDeDatos {
  // * solo se invoca cuando se crea instancia

  constructor(archivo) {
    this.archivo = archivo;
  }

  // ? read fs whit data es donde debe buscar
  async fsRead(file) {
    try {
      const read = await fs.promises.readFile(
        `${this.archivo}/${file}.json`,
        "utf-8"
      );
      const parse = JSON.parse(read);
      return parse;
    } catch (error) {
      [];
    }
  }
  // ? write fs data es lo que debe escribir file a donde
  async fsWrite(data, file) {
    try {
      const write = JSON.stringify(data);
      const writeFile = await fs.promises.writeFile(
        `${this.archivo}/${file}.json`,
        write
      );

      return writeFile;
    } catch (error) {
      [];
    }
  }
  // ? generate id in objetos
  generateId(data, obj) {
    const id = data.length + 1;
    const productId = {
      id: id,
      title: obj.title,
      price: obj.price,
      url: obj.url,
    };
    return productId;
  }
  // * get file by id
  async getByID(file, id) {
    const readFile = await fs.promises.readFile(
      `${this.archivo}/${file}.json`,
      "utf-8"
    );
    const parse = JSON.parse(readFile);
    const findId = parse.find((item) => item.id == id);

    return findId;
  }
  // ? get all in this case call products.json
  async getAll() {
    try {
      const all = await this.fsRead("products");
      return all;
    } catch (error) {
      return [];
    }
  }
  // ? delete by id
  async deleteById(file, id) {
    const delById = await fs.promises.readFile(
      `${this.archivo}/${file}.json`,
      "utf-8"
    );
    const parse = JSON.parse(delById);
    const deleteFile = parse.filter((item) => item.id !== id);
    const write = JSON.stringify(deleteFile);
    await fs.promises.writeFile(`${this.archivo}/${file}.json`, write);
    return deleteFile
      ? `Se elimino el id:${id} en file ${file}`
      : `No se encontro id:${id} en ${file} para eliminar`;
  }
  // * Delete all
  async deleteAll(file) {
    const all = await this.fsRead(file);
    const deleteFile = [];
    await this.fsWrite(deleteFile, file);
    return `Se elimino todo de file ${file}`;
  }
  // * create products
  async createProducts(obj) {
    try {
      const products = await this.fsRead("products");
      const productId = this.generateId(products, obj);
      products.push(productId);
      await this.fsWrite(products, "products");
      return products;
    } catch (error) {
      return [];
    }
  }
}
async function start() {
  const db = new baseDeDatos("data");
  //   create product whit id
  //   const productwhitId = await db.createProducts({
  //     title: "Fjallraven",
  //     price: 109.95,
  //     url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //   });
  //   console.log(productwhitId);

  //   get all products
  //   const products = await db.getAll();
  //   console.log(products);

  //find by id
  //   const findIdProducts = await db.getByID("products", 1);
  //   console.log(findIdProducts);

  // delete by id
  const deleteId = await db.deleteById("products", 3);
  console.log(deleteId);

  //   delete All products
  //   const deleteAllProduct = await db.deleteAll("products");
  //   console.log(deleteAllProduct);

  //read products
  //   console.log(await db.fsRead("products"));

  //   write function
  //   const name = "Bruno Rolon";
  //   const camada = "32105";
  //   console.log(
  //     await db.fsWrite(
  //       {
  //         alummno: name,
  //         camada: camada,
  //         saludo: `hola me llamo ${name} camada ${camada}`,
  //       },
  //       "saludo"
  //     )
  //   );
}

start();
