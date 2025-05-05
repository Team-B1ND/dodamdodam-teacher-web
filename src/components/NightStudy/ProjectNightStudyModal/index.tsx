import * as S from "./style";
import { Close, DodamDivider } from "@b1nd/dds-web";
import NightStudyIcon from "../../../assets/icons/NightStudy/LateNight.svg";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";

interface ProjectModalProps {
  close: () => void;
  project: ProjectStudyType;
}

const ProjectNightStudyModal = ({ close, project }: ProjectModalProps) => {
  const formatParticipants = () => {
    return project.participants.map((student, index) => (
      <S.ParticipantItem key={index}>
        {student.grade}학년 {student.room}반 {student.name}
      </S.ParticipantItem>
    ));
  };

  const getProjectTypeName = () => {
    return project.type === "NIGHT_STUDY_PROJECT_1" ? "• 심자1" : "• 심자2";
  };

  return (
    <S.ProjectModalWrap>
      <S.ModalHeader>
        <S.IconContainer>
          <img src={NightStudyIcon} alt="심야자습 아이콘" />
        </S.IconContainer>
        <S.CloseButton onClick={close}>
          <Close $svgStyle={{ cursor: "pointer" }} />
        </S.CloseButton>
      </S.ModalHeader>

      <S.ContentSection>
        <S.TitleSection>
          <S.NightStudyTitle>{project.name}</S.NightStudyTitle>
          <S.ProjectTypeTag>{getProjectTypeName()}</S.ProjectTypeTag>
        </S.TitleSection>

        <S.NightStudyReason>{project.description}</S.NightStudyReason>

        <DodamDivider type="Small" />

        <S.DetailsContainer>
          <S.DetailsColumn>
            <S.DetailItem>
              <S.DetailLabel>시작일</S.DetailLabel>
              <S.DetailValue>{project.startAt}</S.DetailValue>
            </S.DetailItem>

            <S.DetailItem>
              <S.DetailLabel>종료일</S.DetailLabel>
              <S.DetailValue>{project.endAt}</S.DetailValue>
            </S.DetailItem>

            <S.DetailItem>
              <S.DetailLabel>장소</S.DetailLabel>
              <S.DetailValue>{project.room}</S.DetailValue>
            </S.DetailItem>
          </S.DetailsColumn>

          <S.ParticipantsColumn>
            <div style={{marginBottom:"5px"}}>
              <S.DetailLabel>참여인원</S.DetailLabel>
              <S.MemberCount>({project.participants.length + 1}명)</S.MemberCount>
            </div>
            <S.ParticipantsList>
              <S.ParticipantItem>
                {project.leader.grade}학년 {project.leader.room}반{" "}
                {project.leader.name}
              </S.ParticipantItem>
              {formatParticipants()}
            </S.ParticipantsList>
          </S.ParticipantsColumn>
        </S.DetailsContainer>
      </S.ContentSection>
    </S.ProjectModalWrap>
  );
};

export default ProjectNightStudyModal;
