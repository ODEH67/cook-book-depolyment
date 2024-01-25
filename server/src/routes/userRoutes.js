import express from "express";
import {
    handleListUsers,
    handleAddUser,
    handleDeleteUser,
    handleEditUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/list", handleListUsers);
router.post("/add", handleAddUser);
router.put("/edit", handleEditUser);
router.delete("/delete/:id", handleDeleteUser);

export default router;