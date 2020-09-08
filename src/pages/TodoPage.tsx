import React, { useState } from 'react';
import Sidebar from '../common/components/Sidebar';
import TodoContainer from '../containers/TodoContainer';

export default function Page() {
  const [idListTodo, setIdListTodo] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setIdListTodo(value);
  };

  return (
    <>
      <div className="todo-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 p-0">
              <Sidebar onChange={handleChange} />
            </div>
            <div className="col-lg-9 p-0">
              <div className="todo-page__content">
                <div className="todo-page__header">
                  <h3 className="todo-page__title">Todo name</h3>
                  <div className="todo-page__action-header">
                    <div className="todo-page__action-item">
                      <i className="fas fa-user-plus" />
                    </div>
                    <div className="todo-page__action-item">
                      <i className="fas fa-ellipsis-h" />
                    </div>
                  </div>
                </div>
                <TodoContainer idListTodo={idListTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
