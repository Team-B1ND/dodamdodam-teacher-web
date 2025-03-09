import { useEffect, useState, Dispatch, SetStateAction } from "react";
import * as S from "./style";
import {
  DodamCheckBox,
  CheckmarkCircleFilled,
  Clock,
  DodamModal,
  DodamColor,
} from "@b1nd/dds-web";
import DetailClub from "../../DetailClub";
import { Club } from "types/Club/club.type";

interface ClubItemProps {
  value: Club;
  isEnded: boolean;
  selectedClubIds: number[];
  setSelectedClubIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const ClubItem = ({
  value,
  isEnded,
  selectedClubIds,
  setSelectedClubIds,
}: ClubItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(selectedClubIds.includes(value.id));
  }, [selectedClubIds, value.id]);

  const handleCheckboxClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    if (newCheckedState) {
      if (!selectedClubIds.includes(value.id)) {
        setSelectedClubIds((prev) => [...prev, value.id]);
      }
    } else {
      setSelectedClubIds((prev) => prev.filter((id) => id !== value.id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.ClubItemWrap key={value.id}>
        {isEnded && (
          <S.WrapCheckBox>
            <DodamCheckBox
              onClick={handleCheckboxClick}
              isDisabled={isChecked}
            />
          </S.WrapCheckBox>
        )}

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
        {isEnded ? (
          value.state === "ALLOWED" ? (
            <CheckmarkCircleFilled color={DodamColor.green50} />
          ) : (
            <Clock />
          )
        ) : (
          <div>{value.name || "미정"}</div>
        )}
      </S.ClubItemWrap>
      <DodamModal isOpen={isModalOpen} background>
        <DetailClub
          close={() => {
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
