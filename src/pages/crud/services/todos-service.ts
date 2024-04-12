type Todo = {
  id: number;
  name: string;
  checked: boolean;
};
let NEXT_ID = 0
const todos: Todo[] = [{ id: 1, name: "Make bed", checked: false }];

export const getTodoList = () => {
  return todos;
};

export const getTodoById = (id: number) => {
  return todos.find((todo) => todo.id === id);
};

export const createTodo = (name: string) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    name,
    checked: false,
  };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, name: string, checked: boolean) => {
  const todo = getTodoById(id);
  if (todo) {
    todo.name = name;
    todo.checked = checked;
    return todo;
  }
  return null;
};

export const deleteTodo = (id: number) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};
