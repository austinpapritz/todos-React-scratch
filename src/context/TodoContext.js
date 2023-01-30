import { createContext, useEffect, useState } from 'react';
import { getListOfTodos } from '../services/items';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getListOfTodos();
        setTodos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, []);
  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
