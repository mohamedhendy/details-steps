import { useEffect, useState } from "react";
import { projectDetails } from "../../../services/projects/useProjectDetails.js";
import ProjectInfo from "./info";
import ProjectLifeCycle from "./lifecycle";
import ProjectStage from "./stage";
import { useSelector } from "react-redux";
import Loading from "../../Loading.js";
const ProjectDetails = () => {
  const [details, setDetails] = useState(null);
  const [sourceData, setSourceData] = useState(null);
  const userData = useSelector((state) => state.auth.users);
  useEffect(() => {
    projectDetails().then((data) => {
      setDetails(() => data);
      const selectSourceData = userData.filter(
        (res) => data?.idea_origin === res.pk
      )[0];
      setSourceData(() => selectSourceData);
    });
  }, [sourceData, userData]);
  return details ? (
    <>
      <ProjectInfo data={details} />
      <ProjectLifeCycle data={details} />
      <ProjectStage data={details} source={sourceData} />
    </>
  ) : (
    <Loading />
  );
};

export default ProjectDetails;
