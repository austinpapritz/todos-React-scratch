import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>
          <label className="checkbox">
            <input className="m-1" type="checkbox" checked={item.complete} />
            {item.description}
          </label>
        </div>
      ))}
    </>
  );
}
