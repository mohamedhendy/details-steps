import { AppBar, IconButton, Icon } from "@material-ui/core";
import { useStyles } from "./styles";
import clsx from "clsx";
import { signout } from "../../lib/auth.js";

const TopBar = ({ drawerIsOpen }) => {
  const classes = useStyles();

  const handleSignout = () => {
    signout();
    window.location.replace("/signin");
  };

  return (
    <AppBar
      id="main-top-bar"
      position="static"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerIsOpen,
      })}
    >
      <div className={classes.buttonsContainer}>
        <IconButton
          aria-label="filter"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleSignout}
        >
          <Icon className={classes.icon}>logout</Icon>
        </IconButton>
      </div>
    </AppBar>
  );
};

export default TopBar;
