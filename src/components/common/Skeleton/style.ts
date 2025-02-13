import styled,{CSSObject} from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const BusSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 14px;
`;

export const BusSkeletonItem = styled.div<{ 
  height: number, 
  customStyle: CSSObject 
  }>`
  width: 100%;
  height: ${(props) => props.height}px;
  ${skeletonAnimtaion};
  ${({ customStyle }) => customStyle}
`;
