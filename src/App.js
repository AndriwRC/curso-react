import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de Intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Voltear arroz', completed: false },
  { text: 'Usar estados derivados', completed: false },
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
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
