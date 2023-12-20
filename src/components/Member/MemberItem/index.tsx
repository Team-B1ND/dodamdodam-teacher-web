import React from "react";
import { TBody } from "@b1nd/b1nd-dodam-ui";
import { useGetAllMemberListQuery } from "../../../queries/Member/member.query";
import * as S from "./style";
import Student from "./Student";
import Teacher from "./Teacher";
import { useRecoilValue } from "recoil";
import {
  MemberSearch,
  MemberSelectGrade,
} from "../../../stores/Member/member.store";
import { changeGrade } from "../../../utils/Member/changeGrade";

function MemberItem() {
  const { data: studentsInfo } = useGetAllMemberListQuery({
    suspense: true,
  });
  const selectValue = useRecoilValue(MemberSelectGrade);
  const searchValue = useRecoilValue(MemberSearch);
  return (
    <TBody customStyle={S.MemberTBody}>
      <Student
        studentsInfo={studentsInfo?.data.students!!}
        searchValue={searchValue}
        selectValue={changeGrade(selectValue)}
      />
      <Teacher
        teachersInfo={studentsInfo?.data.teachers!!}
        searchValue={searchValue}
        selectValue={changeGrade(selectValue)}
      />
    </TBody>
  );
}

export default React.memo(MemberItem);
