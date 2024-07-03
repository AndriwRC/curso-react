import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type={completed ? 'complete-icon--completed' : 'complete-icon'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
