import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

/* material-ui */
import { Breadcrumbs, Typography, Link } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

/* styles */
import { useStyles } from "./styles";

/* components*/
import TopBar from "../../components/TopBar";
import AppDrawer from "../../components/AppDrawer";
import ProjectDetails from "../../components/project/details";

const ProjectPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userData = useSelector((state) => state.auth.userData);
  const breadcrumbs = [
    <Link
      className={classes.breadcrumbs}
      underline="hover"
      key="1"
      color="inherit"
      href="/"
    >
      SPM
    </Link>,
    <Link
      className={classes.breadcrumbs}
      underline="hover"
      key="2"
      color="inherit"
      href="/"
    >
      Portfolio 1 View
    </Link>,
    <Typography className={classes.breadcrumbs} key="3">
      Project 1
    </Typography>,
  ];
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
          <Breadcrumbs
            separator={
              <Icon className={classes.BreadcrumbsArrow}>
                keyboard_arrow_right
              </Icon>
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <ProjectDetails />
        </main>
      </div>
    )
  );
};

export default ProjectPage;
