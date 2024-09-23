import { CSVData } from "components/Point/PointScore/PointScoreHeader/types";
import { useGetPointAllMemberQuery } from "queries/Point/point.query";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { PointSelectGrade, PointSelectRoom, PointStduentSearch } from "stores/Point/point.store";
import { Point, PointType } from "types/Point/point.type";
import { changeGrade, changeRoom } from "utils/Member/changeGrade";
import { sortStudentGrade } from "utils/Member/sortStudentGrade";
import { searchName } from "utils/common/searchName";

export const PointDataToCsvData = (pointQueryParams: string) => {
  const [pointData, setPointData] = useState<Point[]>([]);
  const [csvData, setCsvData] = useState<CSVData[]>([]);
  const searchValue = useRecoilValue(PointStduentSearch);
  const selectGrade = useRecoilValue(PointSelectGrade);
  const selectRoom = useRecoilValue(PointSelectRoom);

  const { data: studentPointData } = useGetPointAllMemberQuery(pointQueryParams, { suspense: true });

  useEffect(() => {
    const filteredData = studentPointData?.data
      .sort((student1, student2) => sortStudentGrade(student1.student!, student2.student))
      .filter((data) => data.student.grade === changeGrade(selectGrade) || changeGrade(selectGrade) === 0)
      .filter((data) => data.student?.room === changeRoom(selectRoom) || changeRoom(selectRoom) === 0)
      .filter((data) => searchName(data.student.name, searchValue));
    setPointData(filteredData!);
    const parsedCsvData = filteredData?.map((item) => ({
      이름: item.student.name,
      학년: item.student.grade,
      반: item.student.room,
      번호: item.student.number,
      상점: item.bonus,
      벌점: item.minus,
      상쇄점: item.offset,
    }));
    setCsvData(parsedCsvData!);
  }, [pointQueryParams]);

  return { csvData, pointData };
};
