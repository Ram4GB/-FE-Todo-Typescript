import React from 'react';
import MainLayout from './MainLayout';
import TodoPage from '../../pages/TodoPage';
import { ITodoList } from '../interfaces/todo';

interface IProps {
  todoList: Array<ITodoList>
}

export const AppContext = React.createContext<IProps>({
  todoList: [],
});

export default function MainPage() {
  return (
    <MainLayout>
      <TodoPage />
    </MainLayout>
  );
}
