import {changeGrade} from "utils/Member/changeGrade";
import {TBody} from "@b1nd/b1nd-dodamdodam-ui";
import Student from "./Student";
import {useGetBannedNightMemberListQuery} from "queries/NightStudy/nightstudy.query";
import React from "react";

interface NightStudyBanProps {
  searchValue: string;
  selectedGrade: string;
  onSelectStudent: () => void;
  selectedBan: string;
}

const NightStudyBanItem = ({
  onSelectStudent,
  searchValue,
  selectedGrade,
  selectedBan,
}: NightStudyBanProps) => {
  const { data: studentsInfo } = useGetBannedNightMemberListQuery({
    suspense: true,
  });

  return (
    <TBody customStyle={{
      width: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      <Student
        studentsInfo={studentsInfo?.data!!}
        searchValue={searchValue}
        selectGrade={changeGrade(selectedGrade)}
        selectBan={selectedBan}
        onSelectStudent={onSelectStudent}
      />
    </TBody>
  )
}

export default NightStudyBanItem