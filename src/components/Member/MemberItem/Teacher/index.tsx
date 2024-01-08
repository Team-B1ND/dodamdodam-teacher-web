import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { TeacherType } from "../../../../types/Member/member.type";
import { MemberImage, MemberItemTR, MemberTD, ScrollEmailText } from "../style";
import profileImg from "../../../../assets/profileImg.svg";
import { addPhoneHyphen } from "../../../../utils/Member/addPhoneHyphen";
import { searchName } from "../../../../utils/common/searchName";

interface Props {
  teachersInfo: TeacherType[];
  searchValue: string;
  selectGrade: number;
}

const Teacher = ({ teachersInfo, searchValue, selectGrade }: Props) => {
  return (
    <>
      {(selectGrade === 0 || selectGrade === 4) &&
        teachersInfo
          .filter((data) => searchName(data.member.name, searchValue))
          .map((teacher) => (
            <TR key={teacher.id} customStyle={MemberItemTR}>
              <TD customStyle={MemberTD}>
                <MemberImage
                  src={teacher.member.profileImage || profileImg}
                  alt="이미지 없음"
                />
              </TD>
              <TD customStyle={MemberTD}>{teacher.member.name}</TD>
              <TD customStyle={MemberTD}>선생님</TD>
              <TD customStyle={MemberTD}>{teacher.member.id}</TD>
              <TD customStyle={MemberTD}>
                <ScrollEmailText>{teacher.member.email}</ScrollEmailText>
              </TD>
              <TD customStyle={MemberTD}>{addPhoneHyphen(teacher.phone)}</TD>
              <TD customStyle={MemberTD}>{teacher.position}</TD>
            </TR>
          ))}
    </>
  );
};

export default Teacher;
