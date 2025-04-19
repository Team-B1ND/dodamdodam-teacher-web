import {TD, TR} from "@b1nd/b1nd-dodamdodam-ui";
import {sortAndFilterStudents} from "utils/NightStudy/SortAndFIlterStudents";
import {MemberItemTR} from "components/Member/MemberItem/style";
import {addPhoneHyphen} from "utils/common/addPhoneHyphen";
import NightStudyBanButton from "../NightStudyBanButton";
import {StudentTD} from "./style";
import {changeBanToBool} from "utils/NightStudy/NightStudyBan";
import {StudentBanType} from "types/NightStudy/nightstudy.type";
import React from "react";

interface StudentProps {
  studentsInfo: StudentBanType[];
  searchValue: string;
  selectGrade: number;
  selectBan: string;
}

const Student = ({ studentsInfo, searchValue, selectGrade, selectBan }: StudentProps) => {
  return (
    <>
      {sortAndFilterStudents(studentsInfo, searchValue, selectGrade, changeBanToBool(selectBan)).map(
        (item) =>
          <TR key={item.id} customStyle={MemberItemTR}>
            <TD customStyle={StudentTD}>{item.name}</TD>
            <TD customStyle={StudentTD}>
              {item.grade}학년 {item.room}반{" "}
              {item.number}번
            </TD>
            <TD customStyle={StudentTD}>{addPhoneHyphen(item.phone)}</TD>
            <TD customStyle={StudentTD}>
              <NightStudyBanButton student={item} />
            </TD>
          </TR>
      )}
    </>
  );
};

export default Student;
