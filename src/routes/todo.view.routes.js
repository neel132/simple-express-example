import express from 'express';
import { renderTodoPage } from '../controllers/todo.view.controller.js';

const router = express.Router();

router.get('/', renderTodoPage);

export default router;