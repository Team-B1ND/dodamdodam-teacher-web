import { MemberResponse, MyMemberResponse } from 'types/Member/member.type'

export interface MemberRepository {
  getAllMemberList(): Promise<MemberResponse>
  postMemberJoinTeacher(param: MemberSignUpParam): Promise<void>
  getMyMember(): Promise<MyMemberResponse>
  reqAuthCode: (AuthCodeReq: AuthCodeReqProps) => Promise<void>
  authCodeVerify: (AuthCodeSend: AuthCodeSendProps) => Promise<void>
}

export interface MemberSignUpParam {
  id: string
  email: string
  name: string
  phone: string
  pw: string
  checkPw: string
  position: string
  tel: string
}

type AuthType = 'EMAIL' | 'PHONE'

export interface AuthCodeReqProps {
  identifier: string
  AuthType: AuthType
}

export interface AuthCodeSendProps {
  identifier: string
  AuthType: AuthType
  authCode: number
  UserAgent: string
}
