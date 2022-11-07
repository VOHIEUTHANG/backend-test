import express from "express";
const router = express.Router();
import UserController from "../controller/user.controller.js";

router.get("/", UserController.getAllUserHandler);

router.get("/:id", UserController.getUserHandler);
router.post("/", UserController.insertUserHandler);
router.put("/:id", UserController.updateUserHandler);
router.delete("/:id", UserController.deleteUserHandler);

export default router;
