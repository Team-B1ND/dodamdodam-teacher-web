import { Close, DodamDivider } from "@b1nd/dds-web";
import styled from "styled-components";
import * as S from "../style";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

interface ProjectModalProps {
  close: () => void;
}

const SkeletonBase = styled.div`
  ${skeletonAnimtaion}
  border-radius: 4px;
`;

const TitleSkeleton = styled(SkeletonBase)`
  width: 70%;
  height: 28px;
  margin-bottom: 8px;
`;

const DescriptionSkeleton = styled(SkeletonBase)`
  width: 90%;
  height: 16px;
  margin-bottom: 4px;
`;

const DetailLabelSkeleton = styled(SkeletonBase)`
  width: 50px;
  height: 16px;
  margin-bottom: 8px;
`;

const DetailValueSkeleton = styled(SkeletonBase)`
  width: 120px;
  height: 18px;
`;

const ParticipantSkeleton = styled(SkeletonBase)`
  width: 150px;
  height: 16px;
  margin-bottom: 8px;
`;

const ProjectNightStudySkeletonModal = ({ close }: ProjectModalProps) => {
  return (
    <S.ProjectModalWrap>
      <S.ModalHeader>
        <S.CloseButton onClick={close}>
          <Close $svgStyle={{ cursor: "pointer" }} />
        </S.CloseButton>
      </S.ModalHeader>

      <S.ContentSection>
        <S.TitleSection>
          <TitleSkeleton />
        </S.TitleSection>

        <div style={{ marginBottom: "16px" }}>
          <DescriptionSkeleton />
          <DescriptionSkeleton style={{ width: "80%" }} />
        </div>

        <DodamDivider type="Small" />

        <S.DetailsContainer>
          <S.DetailsColumn>
            <S.DetailItem>
              <DetailLabelSkeleton />
              <DetailValueSkeleton />
            </S.DetailItem>

            <S.DetailItem>
              <DetailLabelSkeleton />
              <DetailValueSkeleton />
            </S.DetailItem>

            <S.DetailItem>
              <DetailLabelSkeleton />
              <DetailValueSkeleton />
            </S.DetailItem>
          </S.DetailsColumn>

          <S.ParticipantsColumn>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
              <DetailLabelSkeleton style={{ marginRight: "8px", marginBottom: 0 }} />
              <SkeletonBase style={{ width: "40px", height: "16px" }} />
            </div>
            <div>
              <ParticipantSkeleton />
              <ParticipantSkeleton style={{ width: "130px" }} />
            </div>
          </S.ParticipantsColumn>
        </S.DetailsContainer>
      </S.ContentSection>
    </S.ProjectModalWrap>
  );
};

export default ProjectNightStudySkeletonModal;