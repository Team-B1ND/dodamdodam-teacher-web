import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetAllMemberListQuery } from "queries/Member/Member.query";
import * as S from "./style";
import Student from "./Student";
import Teacher from "./Teacher";
import { useRecoilValue } from "recoil";
import { MemberSearch, MemberSelectGrade } from "stores/Member/member.store";
import { changeGrade } from "utils/Member/changeGrade";

function MemberItem() {
  const { data: studentsInfo } = useGetAllMemberListQuery({
    suspense: true,
  });
  const selectGrade = useRecoilValue(MemberSelectGrade);
  const searchValue = useRecoilValue(MemberSearch);

  return (
    <TBody customStyle={S.MemberTBody}>
      <Student
        studentsInfo={studentsInfo?.data.students!!}
        searchValue={searchValue}
        selectGrade={changeGrade(selectGrade)}
      />
      <Teacher
        teachersInfo={studentsInfo?.data.teachers!!}
        searchValue={searchValue}
        selectGrade={changeGrade(selectGrade)}
      />
    </TBody>
  );
}

export default MemberItem;
