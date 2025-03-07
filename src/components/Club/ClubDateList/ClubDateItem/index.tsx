import { useState } from "react";
import * as S from "./style";
import { DodamDatePicker, DodamFilledButton } from "@b1nd/dds-web";
import dateTransform from "utils/Transform/dateTransform";

type ClubPeriodType = "create" | "applicant";

interface ClubDateProps {
  clubPeriodType: ClubPeriodType;
}

interface ClubTime {
  type: "CLUB_CREATE" | "CLUB_APPLICANT";
  start: Date;
  end: Date;
}

export const ClubDateItem: React.FC<ClubDateProps> = ({ clubPeriodType }) => {
  const title =
    clubPeriodType === "create" ? "동아리 개설 기간" : "동아리 신청 기간";
  const [clubDateStorage, setClubDateStorage] = useState<string>("");
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    setClubDateStorage(dateString);
  };

  return (
    <S.ClubDateWrapBox>
      <S.ClubTitle>{title}</S.ClubTitle>
      <S.ClubContainer>
        <S.WrapDatePicker>
          <span>시작일</span>
          <DodamDatePicker
            itemKey="club"
            onChange={handleDateChange}
            value={clubDateStorage || today}
            title="시작일"
            customStyle={{ marginRight: "20px" }}
          />
        </S.WrapDatePicker>
        <S.WrapDatePicker>
          <span>마감일</span>
          <DodamDatePicker
            itemKey="club"
            onChange={handleDateChange}
            value={clubDateStorage || today}
            title="마감일"
            customStyle={{ marginRight: "20px" }}
          />
        </S.WrapDatePicker>
      </S.ClubContainer>
      <DodamFilledButton
        size={"Small"}
        text={title + " 설정"}
        textTheme={"staticWhite"}
        typography={["Body2", "Medium"]}
        customStyle={{ marginTop: "20px" }}
      />
    </S.ClubDateWrapBox>
  );
};

export default ClubDateItem;
