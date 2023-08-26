import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Voltear arroz', completed: true },
];

function App() {
  return (
    <>
      <header class="header">
        <h1>Hola, Andriw!</h1>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />
      </header>

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoBtn />
    </>
  );
}

export default App;
