import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

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
