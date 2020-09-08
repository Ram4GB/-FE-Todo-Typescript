import React from 'react';
import Checkbox from './Checkbox';
import { ITodo } from '../interfaces/todo';
import BookmarkButton from './BookmarkButton';

interface IProps {
    todo: ITodo
}

export default function TodoItem(props: IProps) {
  const { todo } = props;
  return (
    <div className="list-todo__item">
      <Checkbox isChecked={todo.completed} />
      <div className="list-todo__item-title">{todo.title}</div>
      <BookmarkButton />
    </div>
  );
}
