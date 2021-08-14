import { Redirect, Route, RouteProps } from "react-router-dom";
import { FunctionComponent } from "react";
import { useAuth } from "../store/auth";

const PrivateRoute: FunctionComponent<RouteProps> = ({ children, ...rest })  =>{
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;


