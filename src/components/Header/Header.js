import './Header.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import { TodoContext } from '../../context/TodoContext.js';
import { Button } from '@mui/material';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useUser();
  const { setTodos } = useContext(TodoContext);

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      setTodos([]);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-title">✔️ Todo List ✔️ </h1>
      <a
        className={`navbar-burger ${isActive ? 'is-active' : ''}`}
        onClick={() => setIsActive((prev) => !prev)}
      ></a>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id="navbar-list">
        <div className="navbar-end">
          <div className="navbar-item">
            {!user && (
              <div className="buttons">
                <Link className="button" to="/auth/sign-up">
                  <strong>Sign up</strong>
                </Link>
                <Link className="button" to="/auth/sign-in">
                  <strong>Sign in</strong>
                </Link>
              </div>
            )}
            {user && (
              <div className="right-nav">
                <div>Welcome, {user.email}!</div>
                <Button variant="contained" className="button" onClick={handleLogout}>
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {}
    </nav>
  );
}
