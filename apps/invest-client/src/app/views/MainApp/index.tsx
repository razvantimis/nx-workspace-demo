import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "../../components/Header";
import Dashboard from "../Dashboard";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );

}


export default MainApp;