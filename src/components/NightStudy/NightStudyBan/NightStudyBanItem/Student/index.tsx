import {StudentAndTeacher} from "types/Member/member.type";
import {sortAndFilterStudents} from "utils/Member/SortAndFilterStudents";
import {TD, TR} from "@b1nd/b1nd-dodamdodam-ui";
import {MemberItemTR} from "components/Member/MemberItem/style";
import {addPhoneHyphen} from "utils/common/addPhoneHyphen";
import NightStudyBanButton from "../NightStudyBanButton";
import {StudentTD} from "../style";

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
              <TD customStyle={StudentTD}>{item.name}</TD>
              <TD customStyle={StudentTD}>
                {item.student?.grade}학년 {item.student?.room}반{" "}
                {item.student?.number}번
              </TD>
              <TD customStyle={StudentTD}>{addPhoneHyphen(item.phone)}</TD>
              <TD customStyle={StudentTD}>
                <NightStudyBanButton isDisabled={true}/>
              </TD>
            </TR>
          )
      )}
    </>
  );
};

export default Student;
