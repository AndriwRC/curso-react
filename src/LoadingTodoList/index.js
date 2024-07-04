import React from 'react';
import './LoadingTodoList.css';

function LoadingTodoList() {
  return (
    <>
      <li className="todo-item todo-item--loading animate__beating-neutral">
        <span className="item-loading__icon animate__beating-neutral"></span>
        <p className="item__text item__text--loading animate__beating-neutral"></p>
        <span className="item-loading__icon animate__beating-neutral"></span>
      </li>
      <li className="todo-item todo-item--loading animate__beating-neutral">
        <span className="item-loading__icon animate__beating-neutral"></span>
        <p className="item__text item__text--loading animate__beating-neutral"></p>
        <span className="item-loading__icon animate__beating-neutral"></span>
      </li>
      <li className="todo-item todo-item--loading animate__beating-neutral">
        <span className="item-loading__icon animate__beating-neutral"></span>
        <p className="item__text item__text--loading animate__beating-neutral"></p>
        <span className="item-loading__icon animate__beating-neutral"></span>
      </li>
    </>
  );
}

export { LoadingTodoList };
