import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class DAOProductsMongo extends ContenedorMongo {
  constructor() {
    // * super = padre/ContenedorMongo
    super("products", {
      name: String,
      stock: Number,
      image: String,
      types: { type: [], default: [] },
    });
  }
  // async findByName(name) {
  //   console.log(this.db);
  //   return await this.db.findOne({ name });
  // }
}
export default DAOProductsMongo;
