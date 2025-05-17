import ProjectNightStudyList from "./ProjectNightStudyList";
import TableAttribute from "components/common/TableAttribute";
import { PROJECT_NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import { Suspense } from "react";
import SkeletonComponent from "components/common/Skeleton";

const ProjectNightStudyAllow = () => {
  return (
    <>
      <TableAttribute constant={PROJECT_NIGHTSTUDY_ALLOW_ITEMS}>
        <DodamErrorBoundary text="프로젝트를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent height={100} />}>
            <ProjectNightStudyList />
          </Suspense>
        </DodamErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default ProjectNightStudyAllow;