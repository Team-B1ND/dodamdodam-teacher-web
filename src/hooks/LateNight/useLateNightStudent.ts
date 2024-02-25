import { useGetLateNightList } from "queries/LateNight/latenight.query";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { LateNightDataAtom } from "stores/LateNight/latenight.store";
import { LateNightType } from "types/LateNight/latenight.type";

export const useLateNightStudent = () => {
  const { data: lateNightToday } = useGetLateNightList();

  const lateNightData = useRecoilValue(LateNightDataAtom);
  const [lateNightInfo, setLateNightInfo] = useState([
    {
      이름: "",
      반번호: "",
      심자체크: "",
      복귀체크: "",
      비고: "",
    },
  ]);

  useEffect(() => {
    if (lateNightToday?.data) {
      const newData = lateNightToday.data.map((data: LateNightType) => ({
        이름: data.student.name,
        반번호: `${data.student.grade}학년 ${data.student.room}반 ${data.student.number}번`,
        심자체크: "",
        복귀체크: "",
        비고: "",
      }));
      setLateNightInfo(newData);
    }
  }, [lateNightToday]);

  return { lateNightData, lateNightInfo };
};
