import React from 'react';
import { ReactComponent as CheckOutline } from '../TodoIcon/svg/check-outline.svg';
import './EmptyTodoList.css';

function EmptyTodoList() {
  return (
    <>
      <h3 className="empty-list__title">
        ¡Genial! Ya no tienes tareas pendientes.
      </h3>
      <CheckOutline className="empty-list__icon" />
    </>
  );
}

export { EmptyTodoList };
