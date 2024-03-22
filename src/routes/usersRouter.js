import express from "express";
import controller from "../controllers/usersController.js";
const userRouter = express.Router();

userRouter.post("/ecommerce", controller.create);
userRouter.get("/ecommerce", controller.read);
userRouter.get("/ecommerce/:id", controller.searchUser);
userRouter.put("/ecommerce/:id", controller.update);
userRouter.delete("/ecommerce/:id", controller.remove);

export default userRouter;
