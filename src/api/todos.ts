import { ITodo, ITodoList } from '../common/interfaces/todo';

export const todoItems: Array<ITodo> = [
  {
    title: 'Nấu cơm 1',
    completed: false,
    todoListId: '1',
    id: '1',
  },
  {
    title: 'Nấu cơm 2',
    completed: false,
    todoListId: '1',
    id: '2',
  },
  {
    title: 'Nấu cơm 3',
    completed: false,
    todoListId: '1',
    id: '3',
  },
];

export const todoList: Array<ITodoList> = [
  {
    id: '1',
    title: 'Ngày 1',
    userId: '1',
  },
  {
    id: '2',
    title: 'Ngày 2',
    userId: '1',
  },
  {
    id: '3',
    title: 'Ngày 3',
    userId: '1',
  },
];

export const getTodoList = (id?: string) => new Promise((resolve) => {
  setTimeout(() => {
    if (id) {
      const arr = todoList.filter((item) => item.id === id);
      if (arr.length === 0) resolve(null);
      resolve(arr);
    } else {
      resolve(todoList);
    }
  }, 1000);
});

export const getListTodoItemByTodoListId = (id: string) => new Promise((resolve) => {
  setTimeout(() => {
    const arr = todoItems.filter((item) => item.id === id);
    resolve(arr);
  }, 1000);
});

export default null;
