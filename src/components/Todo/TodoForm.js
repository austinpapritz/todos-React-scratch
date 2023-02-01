import '../../App.css';
import { Button } from '@mui/material';
import { useContext, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { createTodo } from '../../services/items.js';

export default function TodoForm() {
  const [description, setDescription] = useState('');
  const { setTodos } = useContext(TodoContext);

  const handleNewTodo = async () => {
    try {
      const todo = await createTodo(description);
      setTodos((prev) => [...prev, todo]);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className="form-container">
      <input
        className="todo-input"
        type="text"
        placeholder="new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button variant="contained" className="submit-btn" onClick={handleNewTodo}>
        Add
      </Button>
    </div>
  );
}
