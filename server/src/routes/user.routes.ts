import {
  createUser,
  GetUserById,
  GetAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post("/", createUser);
router.get("/", GetAllUsers);
router.get("/:id", GetUserById);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
