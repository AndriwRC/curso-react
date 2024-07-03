import { ReactComponent as Check } from './svg/check.svg';
import { ReactComponent as CheckOutline } from './svg/check-outline.svg';
import { ReactComponent as Trash } from './svg/trash.svg';

const iconTypes = {
  'complete-icon--completed': <Check />,
  'complete-icon': <CheckOutline />,
  'delete-icon': <Trash />,
};

function TodoIcon({ type, onClick }) {
  return (
    <span className={`item__${type}`} onClick={onClick}>
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
