const { Router } = require("express");

// const recipeRoute = require("./recipe");
const productRoute = require("./product");

const router = Router();

// router.use("/recipes", recipeRoute);
router.use("/product", productRoute);

module.exports = router;
