import * as S from './style';
import { Avatar } from '@b1nd/dds-web';
import {
  CheckmarkCircleFilled,
  CheckmarkCircleLine,
} from '@b1nd/dds-web';
import { useTheme } from 'styled-components';
import { Student } from 'types/Member/member.type';

interface MemberItemProps {
  student: Student;
  profileImage: string | null;
  pickerStatus?: boolean;
  onClick?: (studentId: number) => void;
}

const MemberItem = ({
  student,
  profileImage,
  pickerStatus,
  onClick,
}: MemberItemProps) => {
  const { id, name, grade, room } = student;
  const theme = useTheme();

  return (
    <S.MemberItemContainer>
      {!profileImage ? (
        <Avatar size="large" />
      ) : (
        <S.MemberItemProfileImage src={profileImage} />
      )}
      <S.MemberInfoContainer>
        {name}
        <S.MemberGradeAndRoom>
          {grade}-{room}
        </S.MemberGradeAndRoom>
      </S.MemberInfoContainer>
      <S.MemberItemBar />
      {onClick && (
        <S.MemberItemIconContainer onClick={() => onClick(id)} style={{ cursor: 'pointer' }}>
          {pickerStatus ? (
            <CheckmarkCircleFilled color={theme.primaryNormal} />
          ) : (
            <CheckmarkCircleLine color={theme.lineNormal} />
          )}
        </S.MemberItemIconContainer>
      )}
    </S.MemberItemContainer>
  );
};

export default MemberItem;
