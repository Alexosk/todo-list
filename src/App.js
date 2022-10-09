import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToDoList } from './components/ToDo';
import { TextInput } from './components/TextInput/TextInput';
import { Button } from './components/Button';
import { Text } from './components/Text.js';
import { getTodos, createTodo, deleteTodo } from './Endpoints/Endpoints';

import './App.scss';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  const onTodoDeleteStateUpdate = (todoItem) => {
    setTodos(todos.filter((item) => item._id !== todoItem._id));
  };

  const onTodoUpdateStateUpdate = (todoItem) => {
    const newState = todos.map((todo) => {
      if (todo._id === todoItem._id) {
        return { ...todoItem };
      }
      return todo;
    });

    setTodos(newState);
  };

  const addTask = (userInput) => {
    createTodo(userInput).then((data) => {
      let copy = [...todos];
      copy = [...copy, { _id: data._id, task: data.task, done: data.done }];
      setTodos(copy);
    });
  };

  const handleClearAll = () => {
    todos.map((todoItem) => {
      return deleteTodo(todoItem).then(() => {
        setTodos([]);
      });
    });
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.length <= 0) return;
    addTask(userInput);

    setUserInput('');
  };

  const handleSubmitKeydown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
      setUserInput('');
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <Header title="todo app" />
        <div className="input-container">
          <TextInput
            userInput={userInput}
            onKeyDown={handleSubmitKeydown}
            handleChange={handleChange}
            placeholder="Enter todo..."
          />
          <Button onClick={handleSubmit} label="+" className="is-submit-btn" />
        </div>
        {todos && todos.length > 0 ? (
          <>
            <ToDoList
              onTodoUpdateStateUpdate={onTodoUpdateStateUpdate}
              onTodoDeleteStateUpdate={onTodoDeleteStateUpdate}
              todos={todos}
            />
            <div className="footer">
              <Button className="clear-all-btn" onClick={handleClearAll} label="Clear all" />
            </div>
          </>
        ) : (
          <Text>No todos added</Text>
        )}
      </div>
    </div>
  );
};
