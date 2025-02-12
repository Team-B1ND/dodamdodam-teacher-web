export interface GroupRepository {
  createGroup: (group: GroupWriteData) => Promise<void>;
  getGroupDetail: (id: number) => Promise<GroupDetail>;
  getGroupMember: (status: GroupMemberStatus, id: number) => Promise<GroupMemberResponse>;
}

export type GroupMemberStatus = 'PENDING' | 'ALLOWED' | 'REJECTED';

export interface GroupWriteData {
  name: string;
  description: string;
}

export interface GroupDetail {
  data: {
    id: number;
    divisionName: string;
    description: string;
    myPermission: string;
  };
}

export type Permission = 'READER' | 'WRITER' | 'ADMIN';

export interface GroupMember {
  id: number;
  memberName: string;
  profileImage: string;
  permission: Permission;
  grade: number;
  room: number;
  number: number;
  role: 'TEACHER' | 'STUDENT' | 'ADMIN';
}

export interface GroupMemberResponse {
  data: GroupMember[];
}
