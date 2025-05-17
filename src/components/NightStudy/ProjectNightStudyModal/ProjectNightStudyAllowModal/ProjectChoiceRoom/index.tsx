import * as S from "./style";
import { DodamCheckBox } from "@b1nd/dds-web";
import { useEffect } from "react";
import { PROJECT_LAB_ROOMS, PROJECT_LAB_ROOM_MAP } from "./constant";
import { useAvailableProjectLabs } from "hooks/NightStudy/NightStudyProjectAllow/useAvailableProjectLabs";


interface ProjectChoiceProps {
  projectType: "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";
  selectedRoom: string | null;
  setSelectedRoom: (room: string | null) => void;
}

const ProjectChoiceRoom = ({
  projectType,
  selectedRoom,
  setSelectedRoom,
}: ProjectChoiceProps) => {
  const { isRoomAvailable, getRoomDateRange } =
    useAvailableProjectLabs(projectType);

  const handleCheck = (room: string, state : boolean) => {
    if(state){
      setSelectedRoom(selectedRoom === room ? null : room);
    }
  };

  const formatDateRange = (start: string, end: string): string => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const format = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;

    return `${format(startDate)} ~ ${format(endDate)}`;
  };

  useEffect(() => {
    console.log(selectedRoom);
  }, [selectedRoom]);

  return (
    <S.RoomsContainer>
      {PROJECT_LAB_ROOMS.map((label) => {
        const code = PROJECT_LAB_ROOM_MAP[label];
        const isAvailable = isRoomAvailable(code);
        const dateRange = getRoomDateRange(code)!;

        return (
          <S.WrapRoomTagAndExplain key={code}>
            <S.WrapRoomTag>
              <DodamCheckBox
                isDisabled={selectedRoom === code && isAvailable}
                onClick={() => handleCheck(code, isAvailable)}
              />
              <S.RoomLabel
                isAvailable={isAvailable}
                isSelected={selectedRoom === code}
              >
                {label}
              </S.RoomLabel>
            </S.WrapRoomTag>
            <S.StatusText isAvailable={isAvailable}>
              {isAvailable
                ? "실 지정 가능"
                : `${formatDateRange(dateRange.start, dateRange.end)}`}
            </S.StatusText>
          </S.WrapRoomTagAndExplain>
        );
      })}
    </S.RoomsContainer>
  );
};

export default ProjectChoiceRoom;
