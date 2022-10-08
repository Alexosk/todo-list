import React from 'react';
import { deleteTodo } from '../../Endpoints/Endpoints';
import ToDoItem from './ToDoItem';
import { updateTodo } from '../../Endpoints/Endpoints';
import { findTodoItem } from '../../utils/helpers';

const ToDoList = ({ todos, onTodoDeleteStateUpdate, onTodoUpdateStateUpdate }) => {
  const handleRemoveItem = (id) => {
    if (!id) return;
    const todoItem = findTodoItem(id, todos);
    deleteTodo(todoItem).then(() => {
      onTodoDeleteStateUpdate(todoItem);
    });
  };

  const handleUpdateItem = (id) => {
    if (!id) return;

    const todoItem = findTodoItem(id, todos);
    todoItem.done = !todoItem.done;

    updateTodo(todoItem).then(() => {
      onTodoUpdateStateUpdate(todos);
    });
  };

  return (
    <div className="todo-list">
      {todos &&
        todos.map((todo) => {
          return (
            <ToDoItem
              key={todo._id}
              todo={todo}
              handleRemoveItem={handleRemoveItem}
              handleUpdateItem={handleUpdateItem}
            />
          );
        })}
    </div>
  );
};

export default ToDoList;
