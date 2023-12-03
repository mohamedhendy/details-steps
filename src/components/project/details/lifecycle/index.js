import { Icon, CircularProgress, Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import "./stepper.css";

const ProjectLifeCycle = ({ data }) => {
  const classes = useStyles();
  const Steps = [
    "ideating",
    "assessing",
    "initiating",
    "planning",
    "executing",
    "closing",
    "realizing",
  ];
  return (
    <>
      <Typography variant="h3" className={classes.cycleTitle}>
        Project’s Lifecycle
      </Typography>
      <ul id="progress">
        {Steps &&
          data &&
          Steps.map((step, i) => (
            <li key={i} className={i === data?.stage ? "active" : ""}>
              <Box display="flex" alignItems="center" flexDirection="row">
                <Box mr="16px" style={{ textTransform: "capitalize" }}>
                  {" "}
                  {step}{" "}
                </Box>
                <Box
                  position="relative"
                  display="inline-flex"
                  className="completeProgress"
                >
                  <CircularProgress
                    variant="determinate"
                    value={data[`${step}_progress`]}
                    thickness={4}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="caption" component="div">
                      <span style={{ fontSize: "10px" }}>
                        {" "}
                        {data[`${step}_progress`]}%
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <span
                className={`completed ${
                  i > data?.stage || i === Steps.length - 1 ? "d-none" : ""
                }`}
              >
                <Icon style={{ color: "#fff", fontSize: "1rem" }}>done</Icon>
              </span>
              <span
                className={`completed not-completed ${
                  i < data?.stage || i === Steps.length - 1 ? "d-none" : ""
                }`}
              >
                <Icon style={{ color: "#616161", fontSize: "1.5rem" }}>
                  chevron_right
                </Icon>
              </span>
            </li>
          ))}
      </ul>
      <Typography variant="h4" className={classes.overTxt}>
        Overal Progress <b>14%</b>
      </Typography>
    </>
  );
};

export default ProjectLifeCycle;
