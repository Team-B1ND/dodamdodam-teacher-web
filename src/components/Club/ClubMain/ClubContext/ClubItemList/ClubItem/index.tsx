import { useEffect, useState } from "react";
import * as S from "./style";
import {
  DodamCheckBox,
  CheckmarkCircleFilled,
  Clock,
  DodamModal,
} from "@b1nd/dds-web";
import DetailClub from "components/Club/ClubDateList/DetailClub";
import useMemberLeader from "hooks/Club/useMemberLeader";
import { ClubProps } from "types/Club/club.type";


const ClubItem = ({ value }: ClubProps) => {
  
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  const { memberLeader } = useMemberLeader(value.id);

  return (
    <>
              <S.ClubItemWrap key={value.id}>
                <S.WrapCheckBox>
                  <DodamCheckBox
                    onClick={handleCheckboxClick}
                    isDisabled={isChecked}
                  />
                </S.WrapCheckBox>

                <S.WrapClubName>
                  <S.ClubName onClick={() => setIsModalOpen(true)}>
                    {value.name}
                  </S.ClubName>
                </S.WrapClubName>

                <S.SubjectClub>{value.subject}</S.SubjectClub>

                <S.ShortDescription>{value.shortDescription}</S.ShortDescription>
                <S.WhoClubLeader>
                  {memberLeader?.grade}
                  {memberLeader?.room}
                  {memberLeader?.number && memberLeader.number < 10
                    ? `0${memberLeader.number}`
                    : memberLeader?.number}{" "}
                  {memberLeader?.name}
                </S.WhoClubLeader>
                <S.StateClub />
                {value.state === "ALLOWED" ? (
                  <CheckmarkCircleFilled color="#00C265" />
                ) : (
                  <Clock />
                )}
              </S.ClubItemWrap>
      <DodamModal isOpen={isModalOpen} close={handleCloseModal} background>
        <DetailClub close={handleCloseModal} />
      </DodamModal>
    </>
  );
};

export default ClubItem;
