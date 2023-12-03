import {
  IconButton,
  Icon,
  Box,
  Divider,
  Grid,
  Paper,
  Avatar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
const ProjectStage = ({ data, source }) => {
  const classes = useStyles();
  return (
    <div className={classes.stage}>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Typography variant="h4" className={classes.mainStageTitle}>
            Ideating Stage
          </Typography>
        </Box>
        {data?.stage_status === "review_asked" && (
          <>
            <Box p={1}>
              <b>Stage Gate Review</b>
            </Box>
            <Box>
              <IconButton
                className={classes.checkButtons}
                p={0}
                aria-label="delete"
                color="secondary"
              >
                <Icon>clear</Icon>
              </IconButton>
              <span className={classes.midLine}></span>
              <IconButton
                className={classes.checkButtons}
                p={0}
                aria-label="delete"
              >
                <Icon style={{ color: "#4caf50" }}>done</Icon>
              </IconButton>
            </Box>
          </>
        )}
      </Box>
      <Divider style={{ marginTop: "17px", marginBottom: "40px" }} />
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <Typography variant="h4" className={classes.stageSectionTitle}>
            Stage Details
          </Typography>
          <Paper className={classes.paper} style={{ minHeight: "87px" }}>
            <Typography variant="h6" className={classes.stageCardTitle}>
              Stage SPI
            </Typography>
            <div>
              <b className={classes.SPI}>{data?.assessing_spi}%</b>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Typography
            variant="h4"
            className={classes.stageSectionTitle}
            style={{ opacity: 0 }}
          >
            .
          </Typography>
          <Paper className={classes.paper} style={{ minHeight: "87px" }}>
            <Typography variant="h6" className={classes.stageCardTitle}>
              Source
            </Typography>
            <div>
              <Box display="flex" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.small}
                />
                {source?.full_name}
              </Box>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h4" className={classes.stageSectionTitle}>
            Related Forms
          </Typography>
          <Paper className={classes.paper} style={{ padding: "8px 16px" }}>
            <div>
              <Box display="flex" alignItems="center">
                <Box flexGrow={1}>
                  <Box display="flex" alignItems="center">
                    <Icon style={{ color: "#FFB400" }}>warning</Icon>
                    <span className={classes.ProjectIdea}>Project Idea</span>
                  </Box>
                </Box>
                <Box>
                  <IconButton
                    variant="contained"
                    className={classes.EditButton}
                  >
                    <Icon>edit</Icon>
                  </IconButton>
                </Box>
              </Box>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectStage;
