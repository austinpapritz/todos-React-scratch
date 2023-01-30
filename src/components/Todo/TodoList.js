import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { completeTodo } from '../../services/items.js';

export default function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);

  async function handleCompleted(todo) {
    const updatedTodo = await completeTodo(todo);
    setTodos((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo));
  }

  return (
    <>
      <h2>My Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label className="checkbox">
            <input type="checkbox" checked={todo.complete} onChange={() => handleCompleted(todo)} />
            {todo.description}
          </label>
        </div>
      ))}
    </>
  );
}
