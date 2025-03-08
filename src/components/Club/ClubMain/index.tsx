import { useState } from "react";
import ClubItemList from "./ClubContext/ClubItemList";
import * as S from "./style";
import { DodamSegmentedButton, DodamFilledButton } from "@b1nd/dds-web";
import { useGetTimeQuery } from "queries/Club/club.query";
import { useClubMutation } from "queries/Club/club.query";




const ClubMain = () => {
  const [isActive, setIsActive] = useState(true);
  const { mutate } = useClubMutation();
  const [selectedClubIds, setSelectedClubIds] = useState<number[]>([]);
  const [isClickedCreative, setIsClickedCreative] = useState(false); 
  const [isClickedSelfDirect, setIsClickedSelfDirect] = useState(false); 
  const { data, isLoading } = useGetTimeQuery()


  const changeClubPage = () => {
    setIsActive((prev) => !prev);
    setIsClickedCreative(false); 
    setIsClickedSelfDirect(false);
  };

  const handleBulkAllowButton = () => {
    console.log({status : "ALLOWED", clubIds: selectedClubIds})
    mutate({ status: "ALLOWED", clubIds: selectedClubIds });
  };
  const date = new Date
  const today = date.toLocaleDateString().replace(/. /g, '-0').replace('.', '')
  if(isLoading) return <div>Loading..</div>

  return (
    <S.ClubMainContainer>
      <S.ClubManageFont>동아리 개설 관리</S.ClubManageFont>
      <S.ClubMenuButtonContainer>
        <S.WrapSegmentedButton>
          <DodamSegmentedButton
            num={1}
            type="inline"
            data={[
              { text: "창체 동아리", isAtv: isActive },
              { text: "자율 동아리", isAtv: !isActive },
            ]}
            width={204}
            height={44}
            onClick={changeClubPage}
          />
        </S.WrapSegmentedButton>
        {data!.createEnd > today
        && (
          <DodamFilledButton
            text="일괄 승인"
            textTheme={"staticWhite"}
            size={"Medium"}
            typography={["Body2", "Medium"]}
            enabled={selectedClubIds.length > 0}
            width={97}
            customStyle={{ height: "38px" }}
            onClick={handleBulkAllowButton}/>
        )}
      </S.ClubMenuButtonContainer>
      <S.MainClubListContainer>
        {isActive ? (
          <ClubItemList
            itemType="CREATIVE_ACTIVITY_CLUB"
            selectedClubIds={selectedClubIds}
            setSelectedClubIds={setSelectedClubIds}
            isClicked={isClickedCreative}
            setIsClicked={setIsClickedCreative}
            isEnded={data!.createEnd > today}
          />
        ) : (
          <ClubItemList
            itemType="SELF_DIRECT_ACTIVITY_CLUB"
            selectedClubIds={selectedClubIds}
            setSelectedClubIds={setSelectedClubIds}
            isClicked={isClickedSelfDirect}
            setIsClicked={setIsClickedSelfDirect}
            isEnded={data!.createEnd > today}
          />
        )}
      </S.MainClubListContainer>
    </S.ClubMainContainer>
  );
};


export default ClubMain;
