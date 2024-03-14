import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { StudentAndTeacher } from "types/Member/member.type";
import { MemberItemTR, MemberTD, ScrollEmailText } from "../style";
import { addPhoneHyphen } from "utils/common/addPhoneHyphen";
import { searchName } from "utils/common/searchName";

interface TeacherProps {
  teachersInfo: StudentAndTeacher[];
  searchValue: string;
  selectGrade: number;
}

const Teacher = ({ teachersInfo, searchValue, selectGrade }: TeacherProps) => {
  return (
    <>
      {(selectGrade === 0 || selectGrade === 4) &&
        teachersInfo
          .filter((data) => searchName(data.name, searchValue))
          .map(
            (item) =>
              (item.role === "TEACHER" || item.role === "ADMIN") && (
                <TR key={item.id} customStyle={MemberItemTR}>
                  <TD customStyle={MemberTD}>{item.name}</TD>
                  <TD customStyle={MemberTD}>
                    {item.role === "ADMIN" ? "관리자" : "선생님"}
                  </TD>
                  <TD customStyle={MemberTD}>{item.id}</TD>
                  <TD customStyle={MemberTD}>
                    <ScrollEmailText>{item.email}</ScrollEmailText>
                  </TD>
                  <TD customStyle={MemberTD}>{addPhoneHyphen(item.phone)}</TD>
                  <TD customStyle={MemberTD}>{item.teacher?.position}</TD>
                </TR>
              )
          )}
    </>
  );
};

export default Teacher;
