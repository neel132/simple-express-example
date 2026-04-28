import * as service from "../services/todo.service.js";

export const renderTodoPage = (req, res) => {
  const todos = service.getTodos();
  res.render('todos', { todos });
}