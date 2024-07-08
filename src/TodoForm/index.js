import React from 'react';
import { TodoContext } from '../Context';
import { ReactComponent as DocumentPlus } from '../TodoIcon/svg/document-plus.svg';
import './TodoForm.css';

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoText, setNewTodoText] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim().length > 0) {
      addTodo(newTodoText);
    }
    setOpenModal(false);
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <label className="new-todo__label">
        <span>
          <DocumentPlus />
        </span>
        Agrega un nuevo TODO
      </label>
      <textarea
        className="new-todo__text"
        placeholder="Escribe tu nueva tarea"
        required
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      ></textarea>
      <div className="new-todo__btn-container">
        <button className="new-todo__btn new-todo__btn--add" type="submit">
          AGREGAR
        </button>
        <button
          className="new-todo__btn new-todo__btn--cancel"
          type="button"
          onClick={() => setOpenModal(false)}
        >
          CANCELAR
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
