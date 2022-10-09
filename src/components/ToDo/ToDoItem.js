import React from 'react';
import { Button } from '../Button';
import Trash from '../../img/trash.png';
import { detectBrowser, capitalizeFirstLetter } from '../../utils/helpers';

import './toDo.scss';

const ToDoItem = ({ todo, handleRemoveItem, handleUpdateItem }) => {
  const todoId = todo._id;
  const isMobile = detectBrowser() === 'is-mobile';

  return (
    <div className="todo-item">
      <p onClick={() => handleUpdateItem(todoId)} className={todo.done ? 'is-strike-through' : ''}>
        {capitalizeFirstLetter(todo.task)}
      </p>
      <div className={`action-button ${isMobile ? 'is-mobile' : ''}`}>
        <Button onClick={() => handleRemoveItem(todoId)} img={Trash} label="remove" className="is-remove-btn" />
      </div>
    </div>
  );
};

export { ToDoItem };
