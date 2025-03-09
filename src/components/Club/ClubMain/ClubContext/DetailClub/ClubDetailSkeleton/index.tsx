import styled from 'styled-components';
import { DodamShape } from '@b1nd/dds-web';
import { skeletonAnimtaion } from '@b1nd/b1nd-styled-components-util';


const ClubDetailSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonMiddleContainer>
        <div>
          <CloseButtonArea />
          
          <SkeletonDescriptionWrap>
            <div>
              <SkeletonTypeName />
              <SkeletonNameWrap>
                <SkeletonName />
                <SkeletonStatusIcon />
              </SkeletonNameWrap>
              <SkeletonShortDescription />
            </div>
            
            <SkeletonApprovalContainer>
              <SkeletonButtonWrap>
                <SkeletonButton />
                <SkeletonButton />
              </SkeletonButtonWrap>
              <SkeletonLeader />
            </SkeletonApprovalContainer>
          </SkeletonDescriptionWrap>
          <SkeletonBetweenLine />
          <SkeletonInfoDetail>
            <SkeletonMemberSection>
              <SkeletonSectionTitle />
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonMemberItem key={index} />
              ))}
            </SkeletonMemberSection>
            <SkeletonExplainSection>
              <SkeletonSectionTitle />
              <SkeletonExplainBox />
            </SkeletonExplainSection>
          </SkeletonInfoDetail>
        </div>
      </SkeletonMiddleContainer>
    </SkeletonContainer>
  );
};

export default ClubDetailSkeleton;




const SkeletonContainer = styled.div`
  width: 900px;
  height: 540px;
  background-color: #fff;
  ${DodamShape.Large}
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 2;
  margin-top: 15px;
`;

const SkeletonMiddleContainer = styled.div`
  width: 852px;
  height: auto;
  padding: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
`;


const CloseButtonArea = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  ${skeletonAnimtaion}
`;


const SkeletonDescriptionWrap = styled.div`
  display: flex;
  width: 852px;
  height: 111px;
  justify-content: space-between;
  padding-top: 20px;
`;


const SkeletonTypeName = styled.div`
  width: 120px;
  height: 20px;
  border-radius: 4px;
  ${skeletonAnimtaion}
`;


const SkeletonNameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;


const SkeletonName = styled.div`
  width: 200px;
  height: 32px;
  border-radius: 4px;
  ${skeletonAnimtaion}
`;


const SkeletonStatusIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${skeletonAnimtaion}
`;


const SkeletonShortDescription = styled.div`
  width: 400px;
  height: 24px;
  border-radius: 4px;
  margin-top: 8px;
  ${skeletonAnimtaion}
`;


const SkeletonApprovalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;


const SkeletonButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;


const SkeletonButton = styled.div`
  width: 97px;
  height: 38px;
  border-radius: 4px;
  ${skeletonAnimtaion}
`;


const SkeletonLeader = styled.div`
  width: 150px;
  height: 20px;
  border-radius: 4px;
  margin-bottom: 16px;
  ${skeletonAnimtaion}
`;


const SkeletonBetweenLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 35px 0;
  ${skeletonAnimtaion}
`;


const SkeletonInfoDetail = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;


const SkeletonMemberSection = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


const SkeletonSectionTitle = styled.div`
  width: 80px;
  height: 20px;
  border-radius: 4px;
  margin-bottom: 5px;
  ${skeletonAnimtaion}
`;


const SkeletonMemberItem = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 4px;
  ${skeletonAnimtaion}
`;


const SkeletonExplainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


const SkeletonExplainBox = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 4px;
  margin-top: 10px;
  ${skeletonAnimtaion}
`;