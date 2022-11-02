import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.TIPO);
const daos = {
  mongo: async () => {
    const { default: DAOCartMongo } = await import("./cartes/DAOCartMongo.js");
    const { default: DAOProductsMongo } = await import(
      "./products/DAOProductsMongo.js"
    );
    return {
      cartDAO: new DAOCartMongo(),
      productsDAO: new DAOProductsMongo(),
    };
  },
  mem: async () => {
    const { default: DAOCartMem } = await import("./cart/DAOCartMem.js");
    const { default: DAOProductsMem } = await import(
      "./products/DAOProductsMem.js"
    );
    return {
      cartDAO: new DAOCartMem(),
      productsDAO: new DAOProductsMem(),
    };
  },
  firebase: async () => {
    const { default: DAOCartMem } = await import("./cart/DAOCartFirebase.js");
    const { default: DAOProductsMem } = await import(
      "./products/DAOProductsFirebase.js"
    );
    return {
      cartDAO: new DAOCartFirebase(),
      productsDAO: new DAOProductsFirebase(),
    };
  },
};

export default daos[process.env.TIPO];
