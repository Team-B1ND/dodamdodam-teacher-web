import * as S from './style';
import {useGetAllMemberListQuery} from "queries/Member/member.query";
import {changeGrade} from "utils/Member/changeGrade";
import {TBody} from "@b1nd/b1nd-dodamdodam-ui";
import Student from "./Student";

interface NightStudyBanProps {
  searchValue: string;
  selectedGrade: string;
}

const NightStudyBanItem = ({
  searchValue,
  selectedGrade,
}: NightStudyBanProps) => {
  const { data: studentsInfo } = useGetAllMemberListQuery({
    suspense: true,
  });

  return (
    <TBody customStyle={S.StudentTBody}>
      <Student
        studentsInfo={studentsInfo?.data!!}
        searchValue={searchValue}
        selectGrade={changeGrade(selectedGrade)}
      />
    </TBody>
  )
}

export default NightStudyBanItem