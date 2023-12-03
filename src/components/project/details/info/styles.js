import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
export const useStyles = makeStyles((theme) => ({
  mainTitle: {
    fontSize: "2.125rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.5625rem",
    marginBottom: "10px",
    marginTop: "16px",
  },
  descTitle: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "0.875rem",
    fontWeight: 500,
    marginBottom: "8px",
  },
  descText: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    marginTop: 0,
    fontWeight: 400,
  },
  userInfo: {
    color: "#BDBDBD",
    fontSize: "0.875rem",
    lineHeight: "157%",
    flexWrap: "wrap",
  },
  grey: {
    color: grey[600],
  },
  InfoDivider: {
    marginTop: "24px",
    marginBottom: "32px",
  },
}));
