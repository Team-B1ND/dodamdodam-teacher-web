import { SectionHeader } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";

interface ProviderProps {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

const SectionHeaderProvider = ({
  title,
  subTitle,
  children,
}: ProviderProps) => {
  return (
    <S.Container>
      <SectionHeader title={title} subTitle={subTitle} />
      <>{children}</>
    </S.Container>
  );
};
export default SectionHeaderProvider;
