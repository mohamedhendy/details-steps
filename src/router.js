import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage/index";
import ProjectPage from "./pages/project/index";
import Signin from "./pages/Signin/index";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.auth.userData);
  const GuardedRoute = ({ component: Component, authorizedRoles, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authorizedRoles.includes(user?.role?.name) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/signin"} exact component={Signin} />
        <GuardedRoute
          path={"/"}
          exact
          component={Homepage}
          authorizedRoles={[
            "Strategy Manager",
            "Portfolio Manager",
            "Functional Manager",
            "Project Manager",
            "project owner",
          ]}
        />
        <GuardedRoute
          path={"/Project"}
          exact
          component={ProjectPage}
          authorizedRoles={[
            "Strategy Manager",
            "Portfolio Manager",
            "Functional Manager",
            "Project Manager",
            "project owner",
          ]}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
