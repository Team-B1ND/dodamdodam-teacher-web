import * as S from "./style";
import { Close, DodamDivider } from "@b1nd/dds-web";
import NightStudyIcon from "../../../assets/icons/NightStudy/LateNight.svg";
import { useGetNightStudyProjectDetail } from "queries/NightStudy/nightstudy.query";
import ProjectNightStudySkeletonModal from "./ProjectNightStudySkeletonModal";

interface ProjectModalProps {
  close: () => void;
  projectId: number;
}

const ProjectNightStudyModal = ({ close, projectId }: ProjectModalProps) => {
  const { data, isLoading } = useGetNightStudyProjectDetail({ id: projectId });

  if (isLoading || !data) {
    return <ProjectNightStudySkeletonModal close={close} />;
  }

  const formatParticipants = () => {
    return data.students.map((student) => (
      <S.ModalParticipant>
        {student.grade}학년 {student.room}반 {student.name}
      </S.ModalParticipant>
    ));
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
          <h2>{data.project?.name}</h2>
          <S.ModalTag>
            {data.project?.type === "NIGHT_STUDY_PROJECT_1"
              ? "· 심자1"
              : "· 심자2"}
          </S.ModalTag>
        </S.TitleSection>

        <p>{data.project?.description}</p>

        <DodamDivider type="Small" />

        <S.DetailsContainer>
          <S.DetailsColumn>
            <S.DetailItem>
              <S.ModalLabel>시작일</S.ModalLabel>
              <span>{data.project?.startAt}</span>
            </S.DetailItem>

            <S.DetailItem>
              <S.ModalLabel>종료일</S.ModalLabel>
              <span>{data.project?.endAt}</span>
            </S.DetailItem>
          </S.DetailsColumn>

          <S.ParticipantsColumn>
            <S.ModalLabel>참여인원</S.ModalLabel>
            <span>({data.students?.length || 0}명)</span>
            <S.ParticipantsList>{formatParticipants()}</S.ParticipantsList>
          </S.ParticipantsColumn>
        </S.DetailsContainer>
      </S.ContentSection>
    </S.ProjectModalWrap>
  );
};

export default ProjectNightStudyModal;
