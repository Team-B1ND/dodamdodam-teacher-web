import { useState } from "react";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useGivePointStudentQuery } from "queries/Point/query";

const useGivePointStudent = () => {
  const mutation = useGivePointStudentQuery();
  const [givePointData, setGivePointData] = useState({
    giveDate: "",
    place: "",
    reason: "",
    score: 0,
    type: "",
  });
  const [studentList, setStudentList] = useState<number[]>([]);

  const onChangeGivePointData = () => {};

  const onSetStudentList = (id: number) => {
    if (studentList.includes(id)) {
      setStudentList(studentList.filter((item) => item !== id));
    } else {
      setStudentList((prev) => [...prev, id]);
    }
  };

  const onSubmitGivePointStudent = () => {
    mutation.mutate(
      {
        issueAt: "",
        reasonId: 0,
        studentIds: [0],
      },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("부여가 되었습니다");
        },
        onError: () => {
          B1ndToast.showError("서버에러...");
        },
      }
    );
  };
  return {
    givePointData,
    studentList,
    onSetStudentList,
    onSubmitGivePointStudent,
  };
};

export default useGivePointStudent;
