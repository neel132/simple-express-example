import express from "express";
import * as controller from "../controllers/todo.controller.js";
import asyncHandler  from "../middlewares/asyncHandler.js";
import { validateTodo } from "../middlewares/validate.middleware.js";
const router = express.Router();

router.get('/', asyncHandler(controller.getAll));
router.get('/:id', asyncHandler(controller.getOne));
router.post('/', validateTodo, asyncHandler(controller.create));
router.put('/:id', validateTodo, asyncHandler(controller.update));
router.delete('/:id', asyncHandler(controller.remove));

export default router;