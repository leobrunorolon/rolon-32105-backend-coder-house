import { application } from "express";
import daos from "./daos/index.js";

(async () => {
  const { cartDAO, productsDAO } = await daos();
  await productsDAO.save({
    name: "Scisor",
    stock: 10,
    types: ["utiles", "education"],
  });
  console.log(await productsDAO.findAll());
})();

app.put("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await productsDAO.update(body);
  // {
  //     _id: new ObjectId("635c5fce4fb67fb7ebfc0c17"),
  //     name: 'Piplup',
  //     dex: 1,
  //     types: [ 'Grass', 'Poison' ],
  //     __v: 0
  //   }
});
