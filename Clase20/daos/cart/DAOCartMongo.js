import ContenedorMongo from "../../contenedores/ContenedorMongo.js";

class DAOCartMongo extends ContenedorMongo {
  constructor() {
    // * super = padre/ContenedorMongo
    super("trainers", {
      name: String,
      pokemon: { type: [], required: true, default: [] },
    });
  }

  async addMoney() {}
}
export default DAOCartMongo;
