import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <h2>My Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label className="checkbox">
            <input type="checkbox" checked={todo.complete} />
            {todo.description}
          </label>
        </div>
      ))}
    </>
  );
}
