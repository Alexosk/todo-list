import { findTodoItem, capitalizeFirstLetter } from './helpers';
import { dummyArray } from '../constants';

describe('FindTodoItem', () => {
  const id = 1;
  const invalidId = 15;
  const todoItem = { _id: 1, task: 'Clean apartment', done: false };

  it('Should return todoItem if incoming ID is a match', () => {
    expect(findTodoItem(id, dummyArray)).toEqual(todoItem);
  });

  it('Should return null if incoming ID is not a match', () => {
    expect(findTodoItem(invalidId, dummyArray)).toBe(null);
  });
});

describe('Capitalize first letter', () => {
  const string = 'clean apartment';
  const emptyString = '';

  it('Should return string with capitalized first letter', () => {
    expect(capitalizeFirstLetter(string)).toEqual('Clean apartment');
  });

  it('Should return nothing if a string is empty', () => {
    expect(capitalizeFirstLetter(emptyString)).toEqual('');
  });
});

// TODO: Write tests for detectBrowser function
