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
    return data.students.map((student, index) => (
      <S.ParticipantItem key={index}>
        {student.grade}학년 {student.room}반 {student.name}
      </S.ParticipantItem>
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
          <S.NightStudyTitle>{data.project?.name}</S.NightStudyTitle>
          <S.ProjectTypeTag></S.ProjectTypeTag>
        </S.TitleSection>

        <S.NightStudyReason>{data.project?.description}</S.NightStudyReason>

        <DodamDivider type="Small" />

        <S.DetailsContainer>
          <S.DetailsColumn>
            <S.DetailItem>
              <S.DetailLabel>시작일</S.DetailLabel>
              <S.DetailValue>{data.project?.startAt}</S.DetailValue>
            </S.DetailItem>

            <S.DetailItem>
              <S.DetailLabel>종료일</S.DetailLabel>
              <S.DetailValue>{data.project?.endAt}</S.DetailValue>
            </S.DetailItem>

            <S.DetailItem>
              <S.DetailLabel>장소</S.DetailLabel>
              <S.DetailValue>{data.project?.room}</S.DetailValue>
            </S.DetailItem>
          </S.DetailsColumn>

          <S.ParticipantsColumn>
            <S.DetailLabel>참여인원</S.DetailLabel>
            <S.MemberCount>({data.students?.length || 0}명)</S.MemberCount>
            <S.ParticipantsList>
              {data.students && data.students.length > 0 ? (
                formatParticipants()
              ) : (
                <S.ParticipantItem>참여자가 없습니다</S.ParticipantItem>
              )}
            </S.ParticipantsList>
          </S.ParticipantsColumn>
        </S.DetailsContainer>
      </S.ContentSection>
    </S.ProjectModalWrap>
  );
};

export default ProjectNightStudyModal;
