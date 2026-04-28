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

export const updateTodo = (id, data) => {
  const todo = todos.find(t => t.id === Number(id));
  if(!todo) return null;

  todo.title = data.title ?? todo.title;
  todo.completed = data.completed ?? todo.completed;

  return todo;
}

export const deleteTodo = (id) => {
  const index = todos.findIndex(t => t.id === Number(id));
  if(index === -1) return false;

  todos.splice(index, 1);
  return true;
}