import * as S from "./style";
import { CSSObject } from 'styled-components';

interface SkeletonProps {
  length?:number;
  height: number;
  customStyle?: CSSObject;
}

const SkeletonComponent = ({ length=15, height, customStyle }: SkeletonProps) => {
  return (
    <S.BusSkeletonContainer>
      {Array.from({ length }).map((_, idx) => (
        <S.BusSkeletonItem height={height} key={idx} customStyle={customStyle!} />
      ))}
    </S.BusSkeletonContainer>
  );
};

export default SkeletonComponent;
