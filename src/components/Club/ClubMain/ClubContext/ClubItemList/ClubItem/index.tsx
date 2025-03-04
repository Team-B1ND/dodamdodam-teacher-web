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
import useMemberLeader from "hooks/Club/useMemberLeader";

const ClubItem = ({ value }: ClubProps) => {
  const {memberLeader} = useMemberLeader(value.id);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <div>
      <S.ClubItemWrap>
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
        <S.WhoClubLeader>{memberLeader?.grade}{memberLeader?.room}{memberLeader?.number as number < 10 ? "0" + memberLeader?.number : memberLeader?.number} {memberLeader?.name}</S.WhoClubLeader>
        <S.StateClub />
        {value.state === "ALLOWED" ? (
          <CheckmarkCircleFilled color="#00C265" />
        ) : (
          <Clock />
        )}
      </S.ClubItemWrap>
      <DodamModal
        isOpen={isModalOpen}
        close={handleCloseModal}
        background={true}
      >
        <DetailClub close={handleCloseModal} />
      </DodamModal>
    </div>
  );
};

export default ClubItem;
