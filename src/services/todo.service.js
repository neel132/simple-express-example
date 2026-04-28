import todos from "../data/todo.data.js";

export const getTodos = () => todos;

export const getTodoById = (id) => todos.find(t => t.id === Number(id))