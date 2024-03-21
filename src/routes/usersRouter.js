import express from "express";
import usersController from "../controllers/usersController.js";
const router = express.Router();

router.post("/ecommerce/users", usersController.create);
router.get("/ecommerce/users", usersController.read);
router.get("/ecommerce/users/:id", usersController.searchUser);
router.put("/ecommerce/users/:id", usersController.update);
router.delete("/ecommerce/users/:id", usersController.remove);

export default router;
