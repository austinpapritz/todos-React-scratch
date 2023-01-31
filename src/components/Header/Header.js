import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
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
                <button className="button" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {}
    </nav>
  );
}
