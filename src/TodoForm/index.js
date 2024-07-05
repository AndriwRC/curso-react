import React from 'react';
import { ReactComponent as DocumentPlus } from '../TodoIcon/svg/document-plus.svg';
import './TodoForm.css';

function TodoForm() {
  return (
    <form className="new-todo-form">
      <label className="new-todo__label">
        <span>
          <DocumentPlus />
        </span>
        Agrega un nuevo TODO
      </label>
      <textarea
        className="new-todo__text"
        placeholder="Escribe tu nueva tarea"
      ></textarea>
      <div className="new-todo__btn-container">
        <button className="new-todo__btn new-todo__btn--add">AGREGAR</button>
        <button className="new-todo__btn new-todo__btn--cancel">
          CANCELAR
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
