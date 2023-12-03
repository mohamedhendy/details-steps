import { CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUser, getUsers, validateTokens, signout } from "./lib/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setUserData } from "./store/authReducer";
import "./assets/styles/style.css";
import Loading from "./components/Loading";
import Router from "./router";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (validateTokens()) {
      getUser()
        .then((data) => {
          dispatch(setUserData(data));
          setLoading(false);
        })
        .catch(() => {
          signout();
          window.location.replace("/signin");
        });
    } else {
      setLoading(false);
      if (window.location.pathname !== "/signin") {
        window.location.replace("/signin");
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (userData.pk) {
      getUsers().then((data) => {
        dispatch(setUsers(data));
      });
    }
  }, [dispatch, userData.pk]);

  return (
    <>
      <CssBaseline />
      {loading ? <Loading /> : <Router />}
    </>
  );
}

export default App;
