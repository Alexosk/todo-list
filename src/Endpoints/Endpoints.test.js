import { createTodo, getTodos, deleteTodo, updateTodo } from './Endpoints';
import { dummyArray } from '../constants';

describe('GET /todos', () => {
  it('Should return all todo items', async () => {
    fetch.mockResponseOnce(JSON.stringify(dummyArray));

    const onGetTodos = await getTodos();

    expect(onGetTodos).toEqual(dummyArray);
  });

  it('Should return an empty array', async () => {
    fetch.mockResponseOnce(JSON.stringify([]));

    const onGetTodos = await getTodos();
    expect(onGetTodos).toEqual([]);
  });
});

describe('POST /todos', () => {
  // TODO: Write more test scenarios
  const task = 'Play guitar';
  const newTodo = { _id: 7, task: 'Play guitar', done: false };

  it('Should create a new todo item', async () => {
    fetch.mockResponseOnce(JSON.stringify(newTodo));

    const onCreateTodo = await createTodo(task);
    expect(onCreateTodo).toEqual(newTodo);
  });
});

describe('PUT /todos/id', () => {
  // TODO: Write more test scenarios
  const updatedTodoItem = { _id: 7, task: 'Play guitar', done: false };

  it('Should update a todo item', async () => {
    fetch.mockResponseOnce(JSON.stringify(updatedTodoItem));

    const onUpdateTodo = await updateTodo(updatedTodoItem);
    expect(onUpdateTodo).toBe(updatedTodoItem);
  });
});

describe('DELETE /todos/id', () => {
  // TODO: Write more test scenarios
  const todoItem = { _id: 7, task: 'Play guitar', done: false };

  it('Should delete a todo item', async () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    const onDeleteTodo = await deleteTodo(todoItem);
    expect(onDeleteTodo).toEqual(todoItem);
  });
});
