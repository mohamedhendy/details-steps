import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { appDrawerWidth, insideDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    marginLeft: appDrawerWidth,
    width: `calc(100% - ${appDrawerWidth}px)`,
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 1,
  },
  appBarShift: {
    width: `calc(100% - ${appDrawerWidth}px - ${insideDrawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: insideDrawerWidth,
  },
  buttonsContainer: {
    display: "flex",
    marginLeft: "auto",
    padding: "8px",
    "& > hr": {
      marginInline: "16px",
      height: "auto",
      alignSelf: "center",
    },
  },
  icon: {
    color: grey[500],
  },
}));
