import { Division } from 'types/Division/division.type'
import { Role } from 'types/Member/member.type'
export interface DivisionRepository {
  createDivision: (division: DivisionWriteData) => Promise<void>
  addMember: ({ id, memberIdList }: AddMemberData) => Promise<void>
  getDivision: (pageParam: number, keyword: string) => Promise<DivisionResponse>
  getMyDivision: (
    pageParam: number,
    keyword: string
  ) => Promise<DivisionResponse>
  getDivisionDetail: (id: number) => Promise<DivisionDetail>
  getDivisionMember: (
    status: DivisionMemberStatus,
    id: number
  ) => Promise<DivisionMemberResponse>
  patchDivisionMemberStatus: (
    status: DivisionMemberStatus,
    id: number,
    memberId: number[]
  ) => Promise<void>
}
export interface DivisionResponse {
  data: Division[]
}

export type DivisionMemberStatus = 'PENDING' | 'ALLOWED' | 'REJECTED'

export interface DivisionWriteData {
  name: string
  description: string
}

export interface AddMemberData {
  id: number
  memberIdList: string[]
}

export interface DivisionDetail {
  data: {
    id: number
    divisionName: string
    description: string
    myPermission: string
  }
}

export type Permission = 'READER' | 'WRITER' | 'ADMIN'

export interface DivisionMember {
  id: number
  memberId: string
  memberName: string
  profileImage: string
  permission: Permission
  grade: number
  room: number
  number: number
  role: Role
}

export interface DivisionMemberType extends DivisionMember {
  isAtv: boolean
}

export interface DivisionMemberResponse {
  data: DivisionMember[]
}
