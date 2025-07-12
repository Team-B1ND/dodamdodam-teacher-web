import { ArrowLeft } from "@b1nd/dds-web";
import * as S from "../style";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

interface BusInfoSkeletonProps {
  setSection: Dispatch<SetStateAction<string>>;
}


const SkeletonBox = styled.div<{ width?: string; height?: string; marginBottom?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "20px"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "8px"};
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  ${skeletonAnimtaion}
  border-radius: 8px;
`;

const SkeletonStudentItem = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 12px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  ${skeletonAnimtaion}
`;

const BusInfoSkeleton = ({ setSection}: BusInfoSkeletonProps) => {
  return (
    <S.WaitingMemberContainer>
      <S.WaitingMemberWrap>
        <S.WaitingMemberHeader>
          <S.BackIconWrap onClick={() => setSection("main")}>
            <ArrowLeft size={24} color="labelNormal" />
          </S.BackIconWrap>
          <S.WaitingMemberTitle>
            <div>
              <SkeletonBox width="200px" height="32px" marginBottom="8px" />
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <SkeletonBox width="88px" height="40px" marginBottom="0px" />
              <SkeletonBox width="88px" height="40px" marginBottom="0px" />
              <SkeletonBox width="88px" height="40px" marginBottom="0px" />
            </div>
          </S.WaitingMemberTitle>
        </S.WaitingMemberHeader>
        <S.WaitingMemberList>
          <S.ListWrap>
            <p>학생</p>
            <S.ListItemWrap>
              {Array.from({ length: 5}, (_, index) => (
                <SkeletonStudentItem key={index} />
              ))}
            </S.ListItemWrap>
          </S.ListWrap>
        </S.WaitingMemberList>
      </S.WaitingMemberWrap>
    </S.WaitingMemberContainer>
  );
};

export default BusInfoSkeleton;