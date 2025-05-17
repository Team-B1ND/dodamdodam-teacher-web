import * as S from "./style";
import { Close, DodamFilledButton } from "@b1nd/dds-web";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";
import convertDateTime from "utils/Time/ConvertDateTime";
import ProjectChoiceRoom from "./ProjectChoiceRoom";
import { useState } from "react";
import { useApproveProjectNightStudy } from "hooks/NightStudy/NightStudyProjectAllow/useApproveProjectNightStudy";

interface ProjectAllowModalProps {
  close: () => void;
  project: ProjectStudyType;
}

const ProjectNightStudyAllowModal = ({
  close,
  project,
}: ProjectAllowModalProps) => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const {approve} = useApproveProjectNightStudy();

  return (
    <S.WrapModal>
      <div onClick={close} style={{ marginBottom: "5px" }}>
        <Close $svgStyle={{ cursor: "pointer" }} />
      </div>
      <p>랩실 지정</p>

      <S.WrapModalContent>
        <S.WrapModalHeaderContent>
          <div style={{ width: "80px" }}>
            <span>프로젝트명</span>
            <div>{project.name}</div>
          </div>

          <div style={{ width: "50px" }}>
            <span>진행 시간</span>
            <div>
              {project.type == "NIGHT_STUDY_PROJECT_1" ? "심자1" : "심자2"}
            </div>
          </div>

          <div style={{ width: "130px" }}>
            <span>시작일</span>
            <div>
              {convertDateTime.getDateTime(new Date(project.startAt), "date")}
            </div>
          </div>

          <div style={{ width: "130px" }}>
            <span>종료일</span>
            <div>
              <div>
                {convertDateTime.getDateTime(new Date(project.endAt), "date")}
              </div>
            </div>
          </div>
        </S.WrapModalHeaderContent>
        <S.WrapExplainRoom>
          <span>프로젝트 실 지정</span>
          <S.ExplainRoomTxt>한곳만 선택해주세요.</S.ExplainRoomTxt>
        </S.WrapExplainRoom>

        <ProjectChoiceRoom
          projectType={project.type}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      </S.WrapModalContent>

      <div style={{ display: "flex", justifyContent: "end" }}>
        <DodamFilledButton
          text="승인완료"
          backgroundColorType="Primary"
          size="Medium"
          width={88}
          textTheme="staticWhite"
          typography={["Body2", "Bold"]}
          customStyle={{ padding: "0", marginTop: "20px" }}
          onClick={()=>{approve({ id: project.id, room: selectedRoom! });}}
        />
      </div>
    </S.WrapModal>
  );
};

export default ProjectNightStudyAllowModal;
