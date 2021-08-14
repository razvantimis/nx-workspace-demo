import { ProvideAuth } from './store/auth';
import MainApp from './views/MainApp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';

export function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <MainApp />
          </PrivateRoute>
        </Switch>
    </Router>
    </ProvideAuth >
  );
}

export default App;
