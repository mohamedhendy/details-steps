import { makeStyles } from "@material-ui/core/styles";
import { appDrawerWidth } from "../../globals";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  toolbar: theme.mixins.toolbar,
  pageHeader: {},
  content: {
    padding: theme.spacing(0, 3, 3),
    width: `calc(100% - ${appDrawerWidth}px)`,
  },
  headerDivider: {
    marginBlock: theme.spacing(2),
  },
  title: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  breadcrumbs: {
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "400",
  },
  BreadcrumbsArrow: {
    fontSize: "24px !important",
  },
}));
