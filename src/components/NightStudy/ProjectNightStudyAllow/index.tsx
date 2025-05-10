import * as S from "./style";
import ProjectNightStudyList from "./ProjectNightStudyList";
import TableAttribute from "components/common/TableAttribute";
import { PROJECT_NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";
import { DodamFilledButton, DodamErrorBoundary } from "@b1nd/dds-web";
import useProjectNightStudyAllApproval from "hooks/NightStudy/NightStudyProjectAllow/useProjectNightStudyAllApproval";
import React, { Suspense } from "react";
import SkeletonComponent from "components/common/Skeleton";

const ProjectNightStudyAllow = () => {
  const { allApproveProjects, allRejectProjects } = useProjectNightStudyAllApproval();

  return (
    <>
      <S.NightStudyAllowHeader>
        <DodamFilledButton
          text="일괄 승인"
          backgroundColorType="Primary"
          size="Medium"
          textTheme={"staticWhite"}
          width={88}
          typography={["Body2", "Medium"]}
          customStyle={{ height: "38px", marginRight: "10px" }}
          onClick={allApproveProjects}
        />
        <DodamFilledButton
          text="일괄 거절"
          backgroundColorType="Negative"
          size="Medium"
          textTheme={"staticWhite"}
          width={88}
          typography={["Body2", "Medium"]}
          customStyle={{ height: "38px" }}
          onClick={allRejectProjects}
        />
      </S.NightStudyAllowHeader>
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