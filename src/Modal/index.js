import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../Context';
import { ReactComponent as XMark } from '../TodoIcon/svg/x-mark.svg';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal__container">
      <div className="modal">
        <span className="modal-icon" onClick={() => setOpenModal(false)}>
          <XMark />
        </span>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };
