import React from 'react';
import { ToDoItem } from '../ToDo/ToDoItem';
import { ToDoList } from '../ToDo/ToDoList';
import { dummyArray } from '../../constants';

import { render } from '@testing-library/react';
import { uuid } from 'uuidv4';

const testTodo = {
  id: 1,
  task: 'Eat dinner',
  done: false,
};

describe('TodoItem', () => {
  it('Should render', () => {
    const renderContent = <ToDoItem todo={testTodo} handleRemoveItem={void 0} handleUpdateItem={void 0} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});

describe('TodoList', () => {
  it('Should render', () => {
    const renderContent = (
      <ToDoList key={uuid()} todos={dummyArray} onTodoDeleteStateUpdate={void 0} onTodoUpdateStateUpdate={void 0} />
    );
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
