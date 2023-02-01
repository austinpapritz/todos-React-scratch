import { createContext, useEffect, useState } from 'react';
import { getListOfTodos } from '../services/items';
import { useUser } from './UserContext.js';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { user } = useUser();

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
  }, [user]);
  return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>;
};

export { TodoContext, TodoProvider };
