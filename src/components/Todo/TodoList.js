import '../../App.css';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { completeTodo, deleteItem, getListOfTodos } from '../../services/items.js';

export default function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);

  async function handleCompleted(todo) {
    //send todo to completeTodo to update backend
    const updatedTodo = await completeTodo(todo);
    setTodos((prevTodo) => (prevTodo.id === todo.id ? updatedTodo : prevTodo));

    //regrab the todos and set them
    const getTodos = await getListOfTodos();
    setTodos(getTodos);
  }

  return (
    <>
      <h2>My Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label className="checkbox">
            <input type="checkbox" checked={todo.complete} onChange={() => handleCompleted(todo)} />
            <p onClick={() => deleteItem(todo.id)}>{todo.description}</p>
          </label>
        </div>
      ))}
    </>
  );
}
