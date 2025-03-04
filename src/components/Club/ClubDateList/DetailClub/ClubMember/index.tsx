import { Avatar } from "@b1nd/dds-web";
import * as S from "./style";

const ClubMember = () => {
  return (
    <S.ParentsClubMember>
      <S.WrapClubMember>
        <Avatar size="large" />
        <div>
          <S.StudentName>김민규</S.StudentName>
          <S.StudentClass>1-1</S.StudentClass>
        </div>
      </S.WrapClubMember>
    </S.ParentsClubMember>
  );
};

export default ClubMember;
