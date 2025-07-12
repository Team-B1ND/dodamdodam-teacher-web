import { BusMemberType } from "types/Bus/bus.type";
import * as S from "./style"

const getBoardingStatusInfo = (type: string) => {
    switch (type) {
      case "BOARDED":
        return {
          text: "탑승 완료",
          colorType: "primaryNormal",
        };
      case "UNBOARDED":
        return {
          text: "미탑승자",
          colorType: "statusNegative",
        };
      case "BEFORE_BOARDING":
        return {
          text: "탑승 전",
          colorType: "labelNormal",
        };
      default:
        return {
          text: "",
          colorType: "",
        };
    }
    };

interface BusStudentItemProps {
    student: BusMemberType;
  }
  
  const BusStudentItem = ({ student }: BusStudentItemProps) => {
    const statusInfo = getBoardingStatusInfo(student.boardingType);
  
    return (
      <S.MemberCell>
        <S.MemberInfo>
          <S.MemberInfoWrap>
            <p>{student.student.name}</p>
            <span>
              {student.student.grade}학년 {student.student.room}반 {student.student.number}번
            </span>
          </S.MemberInfoWrap>
          <S.MemberRole colorType={statusInfo.colorType}>
            <div>{student.seat === null ? "미정" : `${student.seat}번 좌석`}</div>
            <span>{statusInfo.text}</span>
          </S.MemberRole>
        </S.MemberInfo>
      </S.MemberCell>
    );
  };
  
export default BusStudentItem