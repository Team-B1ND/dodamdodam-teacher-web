import { Suspense } from "react";
import TableAttribute from "components/common/TableAttribute";
import ProjectNightStudyList from "./ProjectNightStudyList";
import { PROJECT_NIHGTSTUDY_ITEM } from "constants/LateNight/latenight.constant";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import SkeletonComponent from "components/common/Skeleton";

const ProjectNightStudyToday = () => {
  return (
    <>
      <TableAttribute constant={PROJECT_NIHGTSTUDY_ITEM}>
        <DodamErrorBoundary text="프로젝트를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent height={100} />}>
            <ProjectNightStudyList />
          </Suspense>
        </DodamErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default ProjectNightStudyToday;