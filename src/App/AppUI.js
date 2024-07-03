import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn';
import { LoadingTodoList } from '../LoadingTodoList';
import { ErrorAlert } from '../ErrorAlert';
import { EmptyTodoList } from '../EmptyTodoList';

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <header className="header">
        <h1>Hola, Andriw!</h1>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </header>

      <TodoList>
        {loading && <LoadingTodoList />}
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
