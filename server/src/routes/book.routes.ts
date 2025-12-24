import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller";
import { Router } from "express";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
