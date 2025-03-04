import { Permission } from 'repositories/Group/group.repository';

export const groupPermissionTransform = (permission: Permission) => {
  if (permission === 'READER') return '멤버';
  if (permission === 'WRITER') return '부관리자';
  if (permission === 'ADMIN') return '관리자';
};
