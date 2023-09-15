const express = require("express");
const productsController = require("../controllers/products.controller");

const productsRouter = express.Router();

productsRouter.get("/addProduct", productsController.addProduct);

productsRouter.post("/addToCard", productsController.addToCard);

productsRouter.post("/removeProduct", productsController.removeProduct);

productsRouter.post("/addImg", productsController.addImg);

productsRouter.get("/getAllProducts", productsController.getAllProducts);

productsRouter.get("/getProductInfo", productsController.getProductInfo);

productsRouter.get("/getUserCard", productsController.getUserCard);

module.exports = productsRouter;
