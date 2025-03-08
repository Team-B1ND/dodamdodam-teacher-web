import { useState } from "react";
import ClubItemList from "./ClubContext/ClubItemList";
import NoClub from "./ClubContext/NoClub";
import * as S from "./style";
import { DodamSegmentedButton, DodamFilledButton } from "@b1nd/dds-web";

const ClubMain = () => {
  const [isActive, setIsActive] = useState(true);

  const changeClubPage = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <S.ClubMainContainer>
      <S.ClubManageFont>동아리 개설 관리</S.ClubManageFont>
      <S.ClubMenuButtonContainer>
        <S.WrapSegmentedButton>
          <DodamSegmentedButton
            num={1}
            type="inline"
            data={[
              { text: "창체 동아리", isAtv: isActive},
              { text: "자율 동아리", isAtv: !isActive},
            ]}
            width={204}
            height={44}
            onClick={changeClubPage}
          />
        </S.WrapSegmentedButton>

        <DodamFilledButton
          text="일괄 승인"
          textTheme={"staticWhite"}
          size={"Medium"}
          typography={["Body2", "Medium"]}
          enabled={false}
          width={97}
          customStyle={{ height: "38px" }}
        />
      </S.ClubMenuButtonContainer>
      <S.MainClubListContainer>
        {isActive ? <ClubItemList item="CREATIVE_ACTIVITY_CLUB"/> : <ClubItemList item="SELF_DIRECT_ACTIVITY_CLUB"/>}
      </S.MainClubListContainer>
    </S.ClubMainContainer>
  );
};

export default ClubMain;