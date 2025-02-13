import { Role } from 'types/Member/member.type';

export const roleTransform = (role: Role) => {
  switch (role) {
    case 'STUDENT':
      return '학생';
    case 'ADMIN':
      return '학부모';
    case 'TEACHER':
      return '선생님';
    case 'ADMIN':
      return '관리자';
    default:
      return '';
  }
};
