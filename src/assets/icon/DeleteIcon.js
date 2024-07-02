import { TodoIcon } from './TodoIcon';

function DeleteIcon({ onDelete }) {
  return <TodoIcon type={'delete-icon'} onClick={onDelete} />;
}

export { DeleteIcon };
