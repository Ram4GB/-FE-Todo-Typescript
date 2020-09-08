import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import TodoItem from '../common/components/TodoItem';
import { getListTodoItemByTodoListId } from '../api/todos';
import loadingAnimation from '../common/assets/animations/loading2.json';

interface IProps {
  idListTodo: string | null
}

export default function TodoContainer(props: IProps) {
  const { idListTodo } = props;
  const [todos, setTodos] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      if (!idListTodo) return null;
      setLoading(true);
      const result = await getListTodoItemByTodoListId(idListTodo);
      setLoading(false);
      return setTodos(result);
    }
    getData();
  }, [idListTodo]);

  const renderTodos = () => todos && todos.map((item: any) => (
    <TodoItem todo={{
      title: item.title, completed: item.completed, id: item.id, todoListId: item.todoListId,
    }}
    />
  ));

  return (
    <div className="list-todo">
      {loading ? (
        <Lottie
          animationData={loadingAnimation}
          style={{
            width: 150,
            height: 150,
            display: 'block',
            margin: 'auto',
          }}
        />
      ) : renderTodos()}
    </div>
  );
}
