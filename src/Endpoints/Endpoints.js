const crudId = '41331aa6814c48c6a733b9fee324a569'; // Add yor CRUD id here from www.crudcrud.com
const url = `https://crudcrud.com/api/${crudId}/todos`;

export const getTodos = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log('Error: Get Todos: Switch to a new CrudId', err.message));
};

export const createTodo = (task) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task,
      done: false,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log('Error: Create Todo: Switch to a new CrudId', err.message));
};

export const updateTodo = (todoItem) => {
  const id = todoItem._id;
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task: todoItem.task,
      done: todoItem.done,
    }),
  })
    .then(() => todoItem)
    .catch((err) => console.log('Error: Update Todo: Switch to a new CrudId', err.message));
};

export const deleteTodo = (todoItem) => {
  const id = todoItem._id;
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(() => todoItem)
    .catch((err) => console.log('Error: Delete Todo: Switch to a new CrudId', err.message));
};
