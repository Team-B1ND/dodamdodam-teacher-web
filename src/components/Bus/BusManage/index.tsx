import { useState } from "react";
import * as S from "./style";
import { DodamFilledButton, DodamFilledTextField, Close } from "@b1nd/dds-web";
import { useGetAllMemberListQuery } from "queries/Member/member.query";
import MemberItem from "./MemberItem";
import { StudentAndTeacher } from "types/Member/member.type";
import { useCreateBusBoardMutation } from "queries/Bus/bus.query";
import { useRecoilValue } from "recoil";
import { SelectBusDataAtom } from "stores/Bus/bus.store";
import { BusStudentParam } from "repositories/Bus/BusRepository";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import SkeletonComponent from "components/common/Skeleton";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";

interface BusManageProps {
  onClose: () => void;
}

const BusManage = ({ onClose }: BusManageProps) => {
  const [searchData, setSearchData] = useState<string>("");
  const { data, isLoading } = useGetAllMemberListQuery(); 
  const members: StudentAndTeacher[] = data?.data ?? [];
  const [studentId, setStudentId] = useState<number[]>([]);
  const addBusMember = useCreateBusBoardMutation();
  const bus = useRecoilValue(SelectBusDataAtom);
  const busId = bus.bus.id;
  const queryClient = useQueryClient();

  const addBusBusBoard = ({ studentId, busId }: BusStudentParam) => {
    addBusMember.mutate(
      { studentId, busId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("성공적으로 인원 수정이 완료되었습니다.");
          queryClient.invalidateQueries(QUERY_KEYS.bus.detail)
        },
        onError: () => {
          B1ndToast.showError("수정 도중 오류가 발생했습니다.");
        },
      }
    );
  };

  const handleSelect = (id: number) => {
    setStudentId((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const filtered = members
    .filter(
      (m) =>
        m.role === "STUDENT" &&
        m.status === "ACTIVE" &&
        m.student !== null &&
        !studentId.includes(m.student.id) &&
        m.name.includes(searchData)
    )
    .sort((a, b) => {
      if (!a.student || !b.student) return 0;
      return (
        a.student.grade - b.student.grade || a.student.room - b.student.room
      );
    });

  const selected = members
    .filter(
      (m) =>
        m.student !== null &&
        studentId.includes(m.student.id) &&
        m.role === "STUDENT" &&
        m.status === "ACTIVE"
    )
    .sort((a, b) => {
      if (!a.student || !b.student) return 0;
      return (
        a.student.grade - b.student.grade || a.student.room - b.student.room
      );
    });

  return (
    <S.CreateBusMemberContainer>
      <S.BusMemberHeader>
        <p>인원 수정</p>
        <div onClick={onClose} style={{ cursor: "pointer" }}>
          <Close />
        </div>
      </S.BusMemberHeader>
      <S.CreateBusMemberWrap>
        <S.CreateBusMemberSearch>
          <DodamFilledTextField
            type="text"
            label=""
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            onRemoveClick={() => setSearchData("")}
            placeholder="이름으로 검색"
          />
          <S.CreateBusMemberList>
            {isLoading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonComponent
                    key={index}
                    height={48}
                    customStyle={{ borderRadius: "8px", marginBottom: "12px" }}
                  />
                ))
              : filtered.map((item) => {
                  if (!item.student) return null;
                  return (
                    <MemberItem
                    key={item.id}
                    student={item.student}
                    profileImage={item.profileImage}
                    pickerStatus={false}
                    onClick={() => handleSelect(item.student!.id)}
                  />
                  );
                })}
          </S.CreateBusMemberList>
        </S.CreateBusMemberSearch>

        <S.CreateBusMemberSelected>
        {selected.map((item) => {
            if (!item.student) return null;
            return (
              <MemberItem
              key={item.id}
              student={item.student}
              profileImage={item.profileImage}
              pickerStatus={true}
              onClick={() => handleSelect(item.student!.id)}
            />
            );
          })}
        </S.CreateBusMemberSelected>
      </S.CreateBusMemberWrap>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <DodamFilledButton
          size={"Medium"}
          width={88}
          backgroundColorType="Primary"
          text="수정 완료"
          typography={["Body2", "Bold"]}
          textTheme={"staticWhite"}
          customStyle={{ width: "fit-content", marginTop: "18px" }}
          enabled={studentId.length !== 0}
          onClick={() => addBusBusBoard({ studentId, busId })}
        />
      </div>
    </S.CreateBusMemberContainer>
  );
};

export default BusManage;
