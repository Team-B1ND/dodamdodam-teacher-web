import { SectionHeader } from "@b1nd/b1nd-dodamdodam-ui";
import { ReactNode } from "react";
import * as S from "./style";

interface Props {
  title: string;
  subTitle: string;
  children: ReactNode;
}

const PointProvider = ({ title, subTitle, children }: Props) => {
  return (
    <S.Container>
      <SectionHeader title={title} subTitle={subTitle} />
      <>{children}</>
    </S.Container>
  );
};

export default PointProvider;
