import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Divider } from "@material-ui/core";
import { useStyles } from "./styles";
import TopBar from "../../components/TopBar";
import AppDrawer from "../../components/AppDrawer";

const Homepage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/signin");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData?.pk, dispatch]);

  return (
    isAuthenticated && (
      <div className={classes.container}>
        <TopBar />
        <AppDrawer />
        <main className={classes.content}>
          <Typography variant="h1" className={classes.pageHeader}>
            Portfolio Pro
          </Typography>
          <Divider className={classes.headerDivider} />
          <Typography variant="body1" className={classes.title}>
            Welcome {userData?.first_name} to homepage!
          </Typography>
        </main>
      </div>
    )
  );
};

export default Homepage;
