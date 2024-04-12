import express from "express";
import {
  createTodoController,
  deleteTodoController,
  getTodoController,
  getTodosController,
  updateTodoController,
} from "../controllers/todos-controller";

const router = express.Router();

router.get("/", getTodosController);
router.get("/:id", getTodoController);
router.post("/post", createTodoController);
router.patch("/patch/:id", updateTodoController);
router.delete("/delete/:id", deleteTodoController);

export default router;
