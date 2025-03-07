import { Avatar } from "@b1nd/dds-web";
import * as S from "./style";

const ClubMemberItem = (props: {name: string, room: number, number : number}) => {
  return (
    <S.ParentsClubMember>
      <S.WrapClubMember>
        <Avatar size="large" />
            <div>
              <S.StudentName>{props.name}</S.StudentName>
              <S.StudentClass>
                {props.room}-{props.number}
              </S.StudentClass>
            </div>
      </S.WrapClubMember>
    </S.ParentsClubMember>
  );
};

export default ClubMemberItem;
