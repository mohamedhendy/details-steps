import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  stage: {
    borderRadius: "16px",
    boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.13)",
    padding: "32px",
    backgroundColor: "#F5F5F5",
    marginTop: "32px",
  },
  mainStageTitle: {
    fontSize: "22px",
    margin: "0",
    fontWeight: 600,
  },
  checkButtons: {
    padding: "4px",
    backgroundColor: "#fff",
    borderRadius: "2px !important",
  },
  midLine: {
    backgroundColor: "#E0E0E0",
    width: "2px",
    height: "100%",
    display: "inline-block",
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: "16px",
    width: "100%",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: "5px",
  },
  stageSectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "25px",
    fontStyle: "normal",
    marginBottom: "32px",
  },
  stageCardTitle: {
    margin: 0,
    marginBottom: "8px",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
  },
  SPI: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#000",
  },
  EditButton: {
    color: "#3397FF",
    backgroundColor: "#007DFF14",
  },
  ProjectIdea: {
    fontSize: "16px",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: "150%" /* 24px */,
    marginLeft: "19px",
    marginRight: "70px",
  },
}));
