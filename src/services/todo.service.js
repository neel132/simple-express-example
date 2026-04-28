import todos from "../data/todo.data.js";
let currentId = 3;
export const getTodos = () => todos;

export const getTodoById = (id) => todos.find(t => t.id === Number(id))

export const createTodo = (data) => {
  const newTodo = {
    id: currentId++,
    title: data.title,
    completed: false
  }
  todos.push(newTodo);
  return newTodo;
}