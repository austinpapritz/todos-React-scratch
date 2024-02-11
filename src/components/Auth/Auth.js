import { NavLink, Redirect, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Auth.css';
import { useState } from 'react';
import { authUser } from '../../services/auth';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  if (user) {
    return <Redirect to="/list" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth box">
      <nav className="panel">
        <div className="panel-heading">Welcome to Alchemy Todo List</div>
        <div className="panel-tabs">
          <NavLink className="nav-link" to="/auth/sign-in">
            Sign In
          </NavLink>
          <NavLink className="nav-link" to="/auth/sign-up">
            Sign Up
          </NavLink>
        </div>
        <div className="panel-block">
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
          </div>
        </div>
        <div className="control">
          <button onClick={submitAuth} className="button">
            Submit
          </button>
        </div>
      </nav>
    </div>
  );
}
