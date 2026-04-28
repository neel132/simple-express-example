import * as service from '../services/todo.service.js';

export const getAll = (req, res) => {
  res.json(service.getTodos());
}

export const getOne = (req, res, next) => {
  const todo = service.getTodoById(req.params.id);
  if (!todo) {
    return next(new Error('Todo not found'));
  }
  res.json(todo);
}

export const create = (req, res) => {
  const todo = service.createTodo(req.body);
  res.status(201).json(todo);
}