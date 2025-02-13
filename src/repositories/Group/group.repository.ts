import { Group } from "types/Group/group.type";
import { Role } from "types/Member/member.type";
export interface GroupRepository {
  createGroup: (group: GroupWriteData) => Promise<void>;
  getGroup: (pageParam:number) => Promise<GroupResponse>;
  getMyGroup: (pageParam:number) => Promise<GroupResponse>;
  getGroupDetail: (id: number) => Promise<GroupDetail>;
  getGroupMember: (status: GroupMemberStatus, id: number) => Promise<GroupMemberResponse>;
  patchGroupMemberStatus: (status: GroupMemberStatus, id: number, memberId: number[]) => Promise<void>;
}
export interface GroupResponse {
  data:Group[]
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
  role: Role;
}

export interface GroupMemberResponse {
  data: GroupMember[];
}
