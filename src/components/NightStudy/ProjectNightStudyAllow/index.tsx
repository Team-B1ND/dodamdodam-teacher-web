import * as S from "./style";
import ProjectNightStudyList from "./ProjectNightStudyList";
import TableAttribute from "components/common/TableAttribute";
import { PROJECT_NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";
import { DodamFilledButton } from "@b1nd/dds-web";

const ProjectNightStudyAllow = () => {
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
        />
        <DodamFilledButton
          text="일괄 거절"
          backgroundColorType="Negative"
          size="Medium"
          textTheme={"staticWhite"}
          width={88}
          typography={["Body2", "Medium"]}
          customStyle={{ height: "38px" }}
        />
      </S.NightStudyAllowHeader>
      <TableAttribute constant={PROJECT_NIGHTSTUDY_ALLOW_ITEMS}>
        <ProjectNightStudyList />
      </TableAttribute>
    </>
  );
};

export default ProjectNightStudyAllow;
