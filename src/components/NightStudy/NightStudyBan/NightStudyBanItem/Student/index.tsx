import {StudentAndTeacher} from "types/Member/member.type";
import {sortAndFilterStudents} from "utils/Member/SortAndFilterStudents";
import {TD, TR} from "@b1nd/b1nd-dodamdodam-ui";
import {MemberItemTR, MemberTD} from "components/Member/MemberItem/style";
import {addPhoneHyphen} from "../../../../../utils/common/addPhoneHyphen";

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
              <TD customStyle={MemberTD}>{addPhoneHyphen(item.phone)}</TD>
            </TR>
          )
      )}
    </>
  );
};

export default Student;
