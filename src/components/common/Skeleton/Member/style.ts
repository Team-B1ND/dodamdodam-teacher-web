import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const MemberSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 14px;
`;

export const MemberSkeletonItem = styled.div`
  width: 100%;
  height: 60px;
  ${skeletonAnimtaion};
`;
