import * as S from "./style";
import { DodamCheckBox } from "@b1nd/dds-web";
import { useEffect, useState } from "react";
import { PROJECT_LAB_ROOMS, PROJECT_LAB_ROOM_MAP } from "./constant";
import { useAvailableProjectLabs } from "hooks/NightStudy/NightStudyProjectAllow/useAvailableProjectLabs";

interface ProjectChoiceProps {
  projectType: "NIGHT_STUDY_PROJECT_1" | "NIGHT_STUDY_PROJECT_2";
}

const ProjectChoiceRoom = ({ projectType }: ProjectChoiceProps) => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const { isRoomAvailable, getRoomDateRange } = useAvailableProjectLabs(projectType);

  const handleCheck = (room: string) => {
    setSelectedRoom((prev) => (prev === room ? null : room));
  };

  const formatDateRange = (start: string, end: string): string => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const format = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;

    return `${format(startDate)} ~ ${format(endDate)}`;
  };

  useEffect(()=>{
    console.log(selectedRoom)
  },[selectedRoom])
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
              isDisabled={selectedRoom === code}
              onClick={() => handleCheck(code)} 
            />
              <span>{label}</span>
            </S.WrapRoomTag>
            <p>
              {isAvailable
                ? "실 지정 가능"
                : `${formatDateRange(dateRange.start, dateRange.end)}`}
            </p>
          </S.WrapRoomTagAndExplain>
        );
      })}
    </S.RoomsContainer>
  );
};

export default ProjectChoiceRoom;
