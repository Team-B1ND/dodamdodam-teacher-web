import * as S from "./style";
import { Close, DodamDivider } from "@b1nd/dds-web";
import NightStudyIcon from "../../../assets/icons/NightStudy/LateNight.svg";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";

interface ProjectModalProps {
  close: () => void;
  project: ProjectStudyType;
}

const ProjectNightStudyModal = ({ close, project }: ProjectModalProps) => {
  return (
    <S.ProjectModalWrap>
      <div onClick={close}>
        <Close $svgStyle={{ cursor: "pointer" }} />
      </div>

      <div>
        <img src={NightStudyIcon} alt="심야자습 아이콘" />
      </div>

      <S.NightStudyTitle>{project.name}</S.NightStudyTitle>
      <S.NightStudyReason>
        {project.description}
      </S.NightStudyReason>
      <DodamDivider type="Small" />

      <S.NightStudyFlex>
        <div style={{ marginRight: "50px" }}>
          <div>
            <S.NightStudyStartConatiner>
              <S.NightStudyOption>시작일</S.NightStudyOption>
              <S.NightStudyDate>{project.startAt}</S.NightStudyDate>
            </S.NightStudyStartConatiner>
            <S.NightStudyFlex>
              <S.NightStudyOption>종료일</S.NightStudyOption>
              <S.NightStudyDate>{project.endAt}</S.NightStudyDate>
            </S.NightStudyFlex>
            <S.NightStudyFlex>
              <S.NightStudyOption>장소</S.NightStudyOption>
              <S.NightStudyDate>{project.room}</S.NightStudyDate>
            </S.NightStudyFlex>
            <S.NightStudyFlex>
              <S.NightStudyOption>심자시간</S.NightStudyOption>
              <S.NightStudyDate>
                {project.type === "NIGHT_STUDY_PROJECT_1" ? "심야자습 프로젝트 1" : "심야자습 프로젝트 2"}
              </S.NightStudyDate>
            </S.NightStudyFlex>
          </div>
        </div>
        <S.NightStudyPeople>
          <S.NightStudyOption>참여인원</S.NightStudyOption>
          <S.NightStudyFlex>
            <S.NightStudyOption>리더</S.NightStudyOption>
            <S.NightStudyDate>
              {project.leader.grade}학년 {project.leader.room}반 {project.leader.name}
            </S.NightStudyDate>
          </S.NightStudyFlex>
        </S.NightStudyPeople>
      </S.NightStudyFlex>
    </S.ProjectModalWrap>
  );
};

export default ProjectNightStudyModal;