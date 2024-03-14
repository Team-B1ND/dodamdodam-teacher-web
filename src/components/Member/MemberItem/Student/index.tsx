import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { StudentAndTeacher } from "types/Member/member.type";
import { MemberItemTR, MemberTD, ScrollEmailText } from "../style";
import { addPhoneHyphen } from "utils/common/addPhoneHyphen";
import { sortAndFilterStudents } from "utils/Member/SortAndFilterStudents";

interface StudentProps {
  studentsInfo: StudentAndTeacher[];
  searchValue: string;
  selectGrade: number;
}

const Student = ({ studentsInfo, searchValue, selectGrade }: StudentProps) => {
  return (
    <>
      {sortAndFilterStudents(studentsInfo, searchValue, selectGrade).map(
        (item) =>
          item.role === "STUDENT" && (
            <TR key={item.id} customStyle={MemberItemTR}>
              <TD customStyle={MemberTD}>{item.name}</TD>
              <TD customStyle={MemberTD}>
                {item.student?.grade}학년 {item.student?.room}반{" "}
                {item.student?.number}번
              </TD>
              <TD customStyle={MemberTD}>{item.id}</TD>
              <TD customStyle={MemberTD}>
                <ScrollEmailText>{item.email}</ScrollEmailText>
              </TD>
              <TD customStyle={MemberTD}>{addPhoneHyphen(item.phone)}</TD>
              <TD customStyle={MemberTD}>학생</TD>
            </TR>
          )
      )}
    </>
  );
};

export default Student;
