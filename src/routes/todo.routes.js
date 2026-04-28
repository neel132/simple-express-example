import express from "express";
import * as controller from "../controllers/todo.controller.js";
import asyncHandler  from "../middlewares/asyncHandler.js";
const router = express.Router();

router.get('/', asyncHandler(controller.getAll));
router.get('/:id', asyncHandler(controller.getOne));
router.post('/', asyncHandler(controller.create));

export default router;