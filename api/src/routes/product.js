const { Router } = require("express");
const { Product } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, price, category, colors, sizes, discount } =
    req.body;

  try {
    if (!name) {
      return res
        .status(400)
        .send({ error: "Debe ingresar el nombre del producto" });
    }
    if (!price) {
      return res
        .status(400)
        .send({ error: "Debe ingresar el precio del producto" });
    }
    if (!category) {
      return res
        .status(400)
        .send({ error: "Debe ingresar la categoría a la que pertenece el producto" });
    }
    if (!colors) {
      return res
        .status(400)
        .send({ error: "Debe ingresar los colores del producto" });
    }
    if (!sizes) {
      return res
        .status(400)
        .send({ error: "Debe ingresar los talles del producto" });
    }

    let productCreate = await Product.create({
      name, price, category, colors, sizes, discount
    });

    res.json(productCreate);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
