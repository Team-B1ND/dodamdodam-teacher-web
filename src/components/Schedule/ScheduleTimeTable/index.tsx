import { Button, SectionHeader } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";

const ScheduleTimeTable = () => {
  return (
    <S.Container>
      <SectionHeader
        title="학사일정 시간표 관리"
        subTitle="학사 일정 시간표를 관리 할 수 있습니다"
      >
        <Button ButtonType="agree">추가하기</Button>
      </SectionHeader>
    </S.Container>
  );
};

export default ScheduleTimeTable;
