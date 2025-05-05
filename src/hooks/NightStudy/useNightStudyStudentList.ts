import { useGetNightStudyList } from "queries/NightStudy/nightstudy.query";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { NightStudyDataAtom } from "stores/NightStudy/nightstudy.store";
import { NightStudyType } from "types/NightStudy/nightstudy.type";

export const useNightStudyStudentList = () => {
  const { data: NightStudyToday } = useGetNightStudyList();

  const NightStudyData = useRecoilValue(NightStudyDataAtom);
  const [NightStudyInfo, setNightStudyInfo] = useState([
    {
      이름: "",
      반번호: "",
      심자체크: "",
      복귀체크: "",
      핸드폰여부: "",
    },
  ]);

  useEffect(() => {
    if (NightStudyToday?.data) {
      const newData = NightStudyToday.data.map((data: NightStudyType) => ({
        이름: data.student.name,
        반번호:
          data.student.number < 10
            ? `${data.student.grade}${data.student.room}0${data.student.number}`
            : `${data.student.grade}${data.student.room}${data.student.number}`,
        심자체크: "",
        복귀체크: "",
        핸드폰여부: data.doNeedPhone ? "O" : "X",
      }));
      setNightStudyInfo(newData);
    }
  }, [NightStudyToday]);

  return { NightStudyData, NightStudyInfo };
};
