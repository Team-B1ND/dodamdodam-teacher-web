import { useState, Dispatch, SetStateAction } from "react";
import * as S from "./style";
import {
  DodamCheckBox,
  CheckmarkCircleFilled,
  Clock,
  DodamModal,
  XmarkCircle,
} from "@b1nd/dds-web";
import DetailClub from "../../DetailClub";
import { Club } from "types/Club/club.type";
import useClubSelection from "hooks/Club/useClubSelection";

interface ClubItemProps {
  value: Club;
  isEnded: boolean;
  selectedClubIds: number[];
  setSelectedClubIds: Dispatch<SetStateAction<number[]>>;
}

const ClubItem = ({ value, isEnded, selectedClubIds, setSelectedClubIds }: ClubItemProps) => {
  const { isChecked, toggleSelection } = useClubSelection(selectedClubIds, setSelectedClubIds, value.id);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.ClubItemWrap key={value.id}>
        {isEnded && (
          <S.WrapCheckBox>
            <DodamCheckBox
              onClick={toggleSelection}
              isDisabled={isChecked}
            />
          </S.WrapCheckBox>
        )}

        <S.WrapClubName>
          <S.ClubName onClick={() => setIsModalOpen(true)}>
            {value?.name}
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
            <CheckmarkCircleFilled color={"statusPositive"} />
          ) : value.state === "REJECTED" ? (
            <XmarkCircle color={"statusNegative"} />
          ) : (
            <Clock />
          )
        )
        : (
          <div>{value.teacher?.name || '미정'}</div>
        ) 
        }
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
