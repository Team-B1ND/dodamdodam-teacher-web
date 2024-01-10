import * as S from "./style";
interface Props {
  backgroundColor: string;
  text: string;
}

const HomeScheduleHeaderColorSetItem = ({ backgroundColor, text }: Props) => {
  return (
    <S.HomeScheduleHeaderColorSetItemContainer>
      <S.HomeScheduleHeaderColorSetItemCircle
        backgroundColor={backgroundColor}
      />
      <S.HomeScheduleHeaderColorSetItemText>
        {text}
      </S.HomeScheduleHeaderColorSetItemText>
    </S.HomeScheduleHeaderColorSetItemContainer>
  );
};

export default HomeScheduleHeaderColorSetItem;
