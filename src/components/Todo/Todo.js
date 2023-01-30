import TodoList from './TodoList';

import { useUser } from '../../context/UserContext';
import { Redirect } from 'react-router-dom';

export default function Todo() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="alpha-container">
      <div className="todo-container">
        <TodoList />
      </div>
    </div>
  );
}
