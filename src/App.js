import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth.js';
import { useUser } from './context/UserContext.js';

import Todo from './components/Todo/Todo.js';
import Header from './components/Header/Header.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/list" component={Todo} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/list" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
