import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn';
import { LoadingTodoItem } from '../LoadingTodoItem';
import { ErrorAlert } from '../ErrorAlert';
import { EmptyTodoList } from '../EmptyTodoList';
import { TodoContext } from '../Context';

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <>
      <header className="header">
        <h1>Hola, Andriw!</h1>
        <TodoCounter />
        <TodoSearch />
      </header>

      <TodoList>
        {loading && (
          <>
            <LoadingTodoItem />
            <LoadingTodoItem />
            <LoadingTodoItem />
          </>
        )}
        {error && <ErrorAlert message={'Ocurrió un error'} />}
        {!loading && searchedTodos.length === 0 && <EmptyTodoList />}

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

export { AppUI };
