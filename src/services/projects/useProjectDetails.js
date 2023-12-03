import axios from "../../axios";

export const projectDetails = async () => {
  return await axios
    .get("api/v1/projects/50", { withCredentials: true })
    .then((response) => response.data);
};
