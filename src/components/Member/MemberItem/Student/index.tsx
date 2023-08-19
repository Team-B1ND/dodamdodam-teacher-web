import { Button, TD, TR } from "@b1nd/b1nd-dodam-ui";
import { StudentType } from "../../../../types/Member/member.type";
import { MemberImage, MemberItemTR, MemberTD, ScrollEmailText } from "../style";
import { addPhoneHyphen } from "../../../../utils/Member/addPhoneHyphen";
import profileImg from "../../../../assets/profileImg.svg";
import { SortAndFilterStudents } from "../../../../utils/Member/SortAndFilterStudents";

interface Props {
  studentsInfo: StudentType[];
  searchValue: string;
  selectValue: number;
}

const Student = ({ studentsInfo, searchValue, selectValue }: Props) => {
  return (
    <>
      {SortAndFilterStudents(studentsInfo, searchValue, selectValue).map(
        (student) => (
          <TR key={student.id} customStyle={MemberItemTR}>
            <TD customStyle={MemberTD}>
              <MemberImage
                src={student.member.profileImage || profileImg}
                alt="이미지 없음"
              />
            </TD>
            <TD customStyle={MemberTD}>{student.member.name}</TD>
            <TD customStyle={MemberTD}>
              {student.classroom.grade}학년 {student.classroom.room}반{" "}
              {student.number}번
            </TD>
            <TD customStyle={MemberTD}>{student.member.id}</TD>
            <TD customStyle={MemberTD}>
              <ScrollEmailText>{student.member.email}</ScrollEmailText>
            </TD>
            <TD customStyle={MemberTD}>{addPhoneHyphen(student.phone)}</TD>
            <TD customStyle={MemberTD}>{""}</TD>
          </TR>
        )
      )}
    </>
  );
};

export default Student;
