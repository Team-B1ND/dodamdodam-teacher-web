import { Group } from "types/Group/group.type";
import { Role } from "types/Member/member.type";
export interface GroupRepository {
  createGroup: (group: GroupWriteData) => Promise<void>;
  addMember: ({ id, memberIdList }: AddMemberData) => Promise<void>;
  getGroup: (pageParam: number, keyword: string) => Promise<GroupResponse>;
  getMyGroup: (pageParam: number, keyword: string) => Promise<GroupResponse>;
  getGroupDetail: (id: number) => Promise<GroupDetail>;
  getGroupMember: (
    status: GroupMemberStatus,
    id: number
  ) => Promise<GroupMemberResponse>;
  patchGroupMemberStatus: (
    status: GroupMemberStatus,
    id: number,
    memberId: number[]
  ) => Promise<void>;
}
export interface GroupResponse {
  data: Group[];
}

export type GroupMemberStatus = "PENDING" | "ALLOWED" | "REJECTED";

export interface GroupWriteData {
  name: string;
  description: string;
}

export interface AddMemberData {
  id: number;
  memberIdList: string[];
}

export interface GroupDetail {
  data: {
    id: number;
    divisionName: string;
    description: string;
    myPermission: string;
  };
}

export type Permission = "READER" | "WRITER" | "ADMIN";

export interface GroupMember {
  id: number;
  memberId: string;
  memberName: string;
  profileImage: string;
  permission: Permission;
  grade: number;
  room: number;
  number: number;
  role: Role;
}

export interface GroupMemberType extends GroupMember {
  isAtv: boolean;
}

export interface GroupMemberResponse {
  data: GroupMember[];
}
