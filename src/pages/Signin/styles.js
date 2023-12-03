import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    minHeight: "100%",
  },
  title: {
    textAlign: "center",
    lineHeight: "36px",
    letterSpacing: "0.15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: "12px",
    marginTop: "40px",
    backgroundColor: "white",
    padding: "48px",
  },
  formTitle: {
    marginBottom: "16px",
    textAlign: "left",
    lineHeight: "70px",
    letterSpacing: "0.25px",
  },
  formInput: {
    marginBottom: 20,
    "& > div": {
      width: "100%",
    },
  },
}));
