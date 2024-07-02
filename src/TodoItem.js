import './styles/TodoItem.css';
import { CompleteIcon } from './assets/icon/CompleteIcon';
import { DeleteIcon } from './assets/icon/DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
      <CompleteIcon completed={completed} onComplete={onComplete} />

      <p className="item__text">{text}</p>

      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
