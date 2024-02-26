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
      비고: "",
    },
  ]);

  useEffect(() => {
    if (NightStudyToday?.data) {
      const newData = NightStudyToday.data.map((data: NightStudyType) => ({
        이름: data.student.name,
        반번호: `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`,
        심자체크: "",
        복귀체크: "",
        비고: "",
      }));
      setNightStudyInfo(newData);
    }
  }, [NightStudyToday]);

  return { NightStudyData, NightStudyInfo };
};
