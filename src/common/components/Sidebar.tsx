/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import logo from '../../avatar.jpg';
import { getTodoList } from '../../api/todos';

interface IProps {
  onChange: (value: string) => void
}

export default function Sidebar(props: IProps) {
  const [listTodo, setListTodo] = useState<any>(null);
  const { onChange } = props;

  const getData = async () => {
    const result = await getTodoList();
    setListTodo(result);
  };

  useEffect(() => {
    getData();
  });

  const handleClickSideBarItem = (id: string) => {
    onChange(id);
  };

  const renderItemSidebar = () => listTodo && listTodo.map((item: any) => (
    <li onClick={() => handleClickSideBarItem(item.id)} key={item.id} className="sidebar__item">
      <span className="sidebar__icon"><i className="fas fa-align-justify" /></span>
      <span className="sidebar__name">{item.title}</span>
      {/* <span className="sidebar__number">3</span> */}
    </li>
  ));

  return (
    <div className="sidebar">
      <ul className="sidebar__wrapper">
        <li className="sidebar__item sidebar__item--default">
          <div>
            <img
              className="sidebar__avatar"
              src={logo}
              alt="Logo User"
              title="Username"
            />
          </div>
          <div className="sidebar__info-user">
            <div className="sidebar__info-username">Ninh Nguyễn</div>
            <div className="sidebar__info-user-email">ninhnguyen@gmail.com</div>
          </div>
        </li>
        {/* <li className="sidebar__item">
          <span className="sidebar__icon"><i className="fas fa-align-justify" /></span>
          <span className="sidebar__name">Mua sắm</span>
          <span className="sidebar__number">3</span>
        </li> */}
        {
          renderItemSidebar()
        }
      </ul>
    </div>
  );
}
