import express from "express";
import controller from "../controllers/storesController.js";
const storesRouter = express.Router();

storesRouter.post("/ecommerce", controller.create);
storesRouter.get("/ecommerce", controller.read);
storesRouter.get("/ecommerce/:id", controller.searchByStore);
storesRouter.put("/ecommerce/:id", controller.update);
storesRouter.delete("/ecommerce/:id", controller.remove);

export default storesRouter;
