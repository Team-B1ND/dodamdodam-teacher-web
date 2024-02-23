import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { StudentType } from "types/Member/Member.type";
import { MemberImage, MemberItemTR, MemberTD, ScrollEmailText } from "../style";
import { addPhoneHyphen } from "utils/common/addPhoneHyphen";
import profileImg from "assets/profileImg.svg";
import { sortAndFilterStudents } from "utils/Member/SortAndFilterStudents";

interface StudentProps {
  studentsInfo: StudentType[];
  searchValue: string;
  selectGrade: number;
}

const Student = ({ studentsInfo, searchValue, selectGrade }: StudentProps) => {
  return (
    <>
      {sortAndFilterStudents(studentsInfo, searchValue, selectGrade).map(
        (student) => (
          <TR key={student.id} customStyle={MemberItemTR}>
            <TD customStyle={MemberTD}>
              <MemberImage src={profileImg} alt="이미지 없음" />
            </TD>
            <TD customStyle={MemberTD}>{student.member.name}</TD>
            <TD customStyle={MemberTD}>
              {student.classroom.grade}학년 {student.classroom.room}반
              {student.number}번
            </TD>
            <TD customStyle={MemberTD}>{student.member.id}</TD>
            <TD customStyle={MemberTD}>
              <ScrollEmailText>{student.member.email}</ScrollEmailText>
            </TD>
            <TD customStyle={MemberTD}>{addPhoneHyphen(student.phone)}</TD>
            <TD customStyle={MemberTD}>학생</TD>
          </TR>
        )
      )}
    </>
  );
};

export default Student;
