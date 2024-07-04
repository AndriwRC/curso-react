import React from 'react';
import './LoadingTodoItem.css';

function LoadingTodoItem() {
  return (
    <>
      <li className="todo-item todo-item--loading animate__beating-neutral">
        <span className="item-loading__icon animate__beating-neutral"></span>
        <p className="item__text item__text--loading animate__beating-neutral"></p>
        <span className="item-loading__icon animate__beating-neutral"></span>
      </li>
    </>
  );
}

export { LoadingTodoItem };
