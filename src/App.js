import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Voltear arroz', completed: true },
  { text: 'Usar estados derivados', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase().trim())
  );

  return (
    <>
      <header className="header">
        <h1>Hola, Andriw!</h1>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <nav className="tab-bar">
        <CreateTodoBtn />
      </nav>
    </>
  );
}

export default App;
