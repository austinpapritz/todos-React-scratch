import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
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
