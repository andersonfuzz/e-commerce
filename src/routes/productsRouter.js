import express from "express";
import controller from "../controllers/productsController.js";
const productsRouter = express.Router();

productsRouter.post("/ecommerce", controller.create);
productsRouter.get("/ecommerce", controller.read);
productsRouter.get("/ecommerce/:id", controller.searchProduct);
productsRouter.put("/ecommerce/:id", controller.update);
productsRouter.delete("/ecommerce/:id", controller.remove);

export default productsRouter;
