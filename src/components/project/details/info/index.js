import { Box, Icon, Chip, Divider, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const ProjectInfo = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.mainTitle}>
        {data?.portfolio_name}
      </Typography>
      <Box className={classes.userInfo} display="flex">
        <Box mr="8px">Function Manager</Box>
        <Box mr="4px">
          <Icon>account_circle</Icon>{" "}
        </Box>
        <Box className={classes.grey}>Assign</Box>
        <Box mx="12px">
          <Icon style={{ fontSize: 6 }}>circle</Icon>{" "}
        </Box>
        <Box mr="4px">Type</Box>
        <Box>
          <Chip
            px="20px"
            label={data?.type}
            style={{ fontSize: 13, height: "24px" }}
          />
        </Box>
        <Box mx="12px">
          <Icon style={{ fontSize: 6 }}>circle</Icon>{" "}
        </Box>
        <Box mr="4px">Last Modified</Box>
        <Box className={classes.grey}>
          {new Date(data?.updated_at).toLocaleString()}
        </Box>
      </Box>

      <Divider className={classes.InfoDivider} />

      <Typography variant="h3" className={classes.descTitle}>
        Description
      </Typography>
      <p className={classes.descText}>{data?.description}</p>
    </>
  );
};

export default ProjectInfo;
