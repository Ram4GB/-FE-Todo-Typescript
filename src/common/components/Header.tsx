/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import logo from '../../logo.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="header__wrap-logo">
            <img src={logo} alt="todo_logo" title="Logo của app todo list" className="header__logo" />
            <div className="header__title-app">Todo App</div>
          </div>
          <div className="header__group-action-right">
            <ul className="header__action-links">
              <li className="header__action-link-item">
                <a className="header__action-link-text" href="/"><i className="fas fa-sign-out-alt" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
