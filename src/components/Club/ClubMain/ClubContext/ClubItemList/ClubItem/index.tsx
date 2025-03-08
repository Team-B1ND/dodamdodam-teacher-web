import { useEffect, useState } from "react";
import * as S from "./style";
import {
  DodamCheckBox,
  CheckmarkCircleFilled,
  Clock,
  DodamModal,
} from "@b1nd/dds-web";
import DetailClub from "components/Club/ClubDateList/DetailClub";
import { ClubProps } from "types/Club/club.type";

const ClubItem = ({ value }: ClubProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clubIds, setClubIds] = useState<number[]>([]);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    setClubIds((prevIds) => [...prevIds, value.id]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <S.ClubItemWrap key={value.id}>
        <S.WrapCheckBox>
          <DodamCheckBox onClick={handleCheckboxClick} isDisabled={isChecked} />
        </S.WrapCheckBox>

        <S.WrapClubName>
          <S.ClubName onClick={() => setIsModalOpen(true)}>
            {value.name}
          </S.ClubName>
        </S.WrapClubName>

        <S.SubjectClub>{value.subject}</S.SubjectClub>

        <S.ShortDescription>{value.shortDescription}</S.ShortDescription>
        <S.WhoClubLeader>
          {value.leader?.grade}
          {value.leader?.room}
          {value.leader?.number && value.leader.number < 10
            ? `0${value.leader.number}`
            : value.leader?.number}{" "}
          {value.leader?.name}
        </S.WhoClubLeader>
        <S.StateClub />
        {value.state === "ALLOWED" ? (
          <CheckmarkCircleFilled color="#00C265" />
        ) : (
          <Clock />
        )}
      </S.ClubItemWrap>
      <DodamModal isOpen={isModalOpen} background>
        <DetailClub
          close={() => {
            console.log("test");
            handleCloseModal();
          }}
          item={value.id}
          leader={value.leader}
        />
      </DodamModal>
    </>
  );
};

export default ClubItem;