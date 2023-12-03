import { createTheme } from "@material-ui/core/styles";

export default createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
      },
    },
    MuiBreadcrumbs: {
      root: {
        fontSize: "22px",
        fontWeight: "normal",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "34px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "14px",
    },
  },
});
