import TableAttribute from "components/common/TableAttribute";
import ProjectNightStudyList from "./ProjectNightStudyList";
import { PROJECT_NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";

const ProjectNightStudyToday = () => {
  return (
    <>
      <TableAttribute constant={PROJECT_NIGHTSTUDY_ALLOW_ITEMS}>
        <ProjectNightStudyList />
      </TableAttribute>
    </>
  );
};

export default ProjectNightStudyToday;
