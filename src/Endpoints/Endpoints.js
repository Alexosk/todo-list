const crudId = '4244075dd321462f953012a270bedb7f'; // Add yor CRUD id here from www.crudcrud.com
const url = `https://crudcrud.com/api/${crudId}/todos`;

export const getTodos = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
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
    .then((data) => data);
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
  }).then(() => todoItem);
};

export const deleteTodo = (todoItem) => {
  const id = todoItem._id;
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(() => todoItem);
};
