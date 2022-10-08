import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ToDoList } from './components/ToDo';
import TextInput from './components/TextInput/TextInput';
import { Button } from './components/Button';
import { Text } from './components/Text.js';
import { getTodos, createTodo, deleteTodo } from './Endpoints/Endpoints';
import { detectBrowser } from './utils/helpers';

import './App.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const isMobile = detectBrowser() === 'is-mobile';

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

  return (
    <div className={`App ${isMobile ? 'is-mobile' : ''}`}>
      <div className="app-container">
        <Header title="todo app" />
        <TextInput addTask={addTask} />
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

export default App;
