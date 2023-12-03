import { useState } from "react";
import clsx from "clsx";
import { useHistory, useLocation } from "react-router-dom";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./styles";
import menuLogo from "./spm_logo1.svg";

const AppDrawer = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.drawerHeader}>
        <img src={menuLogo} alt="Logo" />
      </div>

      <Divider />
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => history.push("/")}
          selected={location.pathname === "/"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>home</Icon>
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={"Home"} />
        </ListItem>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => history.push("/Project")}
          selected={location.pathname === "/Project"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon>star</Icon>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={"Portfolio Projects View"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
