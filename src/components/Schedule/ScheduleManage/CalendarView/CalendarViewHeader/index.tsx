import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import * as S from "./style";
import { Button } from "@b1nd/b1nd-dodamdodam-ui";
import ColorSetItem from "../ColorSetItem";
import { useOpenScheduleModal } from "hooks/Schedule/useOpenScheduleModal";
import { HOME_SCHEDULE_HEADER_COLORSET_LIST } from "components/Schedule/constant";

interface Props {
  date: string;
  nextMonth: () => void;
  prevMonth: () => void;
  todayMonth: () => void;
}

const CalendarViewHeader = ({
  date,
  nextMonth,
  prevMonth,
  todayMonth,
}: Props) => {
  const { openScheduleModalOverlay } = useOpenScheduleModal();
  return (
    <S.TopWrap>
      <S.TopLeftWrap>
        <S.ArrowButton onClick={prevMonth}>
          <RiArrowLeftSLine />
        </S.ArrowButton>
        <S.NowMonth>{date.slice(0, 7)}</S.NowMonth>
        <S.ArrowButton onClick={nextMonth}>
          <RiArrowRightSLine />
        </S.ArrowButton>
        <S.TodayButton onClick={todayMonth}>오늘</S.TodayButton>
        <Button ButtonType="agree">학사일정</Button>
        <Button ButtonType="cancel">휴일</Button>
        <Button
          ButtonType="disagreed"
          style={{ width: "130px" }}
          onClick={openScheduleModalOverlay}
        >
          일정 생성하기
        </Button>
      </S.TopLeftWrap>
      <S.ColorSetWrap>
        {HOME_SCHEDULE_HEADER_COLORSET_LIST.map((colorSet) => (
          <ColorSetItem {...colorSet} key={colorSet.backgroundColor} />
        ))}
      </S.ColorSetWrap>
    </S.TopWrap>
  );
};

export default CalendarViewHeader;
