import React from 'react';
import './CreateTodoBtn.css';

function CreateTodoBtn({ setOpenModal }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      onClick={() => setOpenModal(true)}
      className="create-todo-btn"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM25.5 18C25.5 17.1716 24.8284 16.5 24 16.5C23.1716 16.5 22.5 17.1716 22.5 18V22.5H18C17.1716 22.5 16.5 23.1716 16.5 24C16.5 24.8284 17.1716 25.5 18 25.5H22.5V30C22.5 30.8284 23.1716 31.5 24 31.5C24.8284 31.5 25.5 30.8284 25.5 30V25.5H30C30.8284 25.5 31.5 24.8284 31.5 24C31.5 23.1716 30.8284 22.5 30 22.5H25.5V18Z"
      />
    </svg>
  );
}

export { CreateTodoBtn };
