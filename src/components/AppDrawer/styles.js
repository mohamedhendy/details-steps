import { makeStyles } from "@material-ui/core/styles";
import { appDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
    zIndex: 1,
    overflow: "hidden",
  },
  drawerPaper: {
    width: appDrawerWidth,
    overflowX: "hidden",
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: appDrawerWidth,
    minHeight: "78px !important",
    "& img": {
      height: 70,
      padding: 7,
      marginLeft: 2,
    },
  },
  drawerTitle: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  drawerHeaderOpenIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 64,
    "& img": {
      height: 70,
    },
  },
  listItem: {
    overflow: "hidden",
    paddingLeft: 20,
    width: 240,
    minHeight: 70,
    "&.Mui-selected, &.Mui-selected:hover": {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
  },
  listItemIcon: {
    ".Mui-selected > &": {
      color: theme.palette.common.white,
    },
  },
  listItemText: {
    "& > span": {
      fontSize: "14px",
    },
  },

  drawerOpen: {
    width: 240,
    zIndex: 1000,
    transition: "width 0.2s",
    "& .MuiListItemText-root": {
      display: "block",
    },
  },
}));
