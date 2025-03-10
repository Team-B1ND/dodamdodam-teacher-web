import axios from 'axios'
import {
  AuthCodeReqProps,
  AuthCodeSendProps,
  MemberRepository,
  MemberSignUpParam,
} from './MemberRepository'
import { dodamAxios } from 'libs/Axios/customAxios'
import { MemberResponse, MyMemberResponse } from 'types/Member/member.type'
import CONFIG from '../../config/config.json'

class MemberRepositoryImpl implements MemberRepository {
  public async getAllMemberList(): Promise<MemberResponse> {
    const { data } = await dodamAxios.get('/member/status?status=ACTIVE')
    return data
  }

  public async postMemberJoinTeacher(
    param: Omit<MemberSignUpParam, 'checkPw'>
  ): Promise<void> {
    await axios.post(`${CONFIG.SERVER}/member/join-teacher`, param)
  }

  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamAxios.get('/member/my')
    return data
  }

  public async reqAuthCode(AuthCodeReq: AuthCodeReqProps): Promise<void> {
    await axios.post(
      `${CONFIG.SERVER}/member/auth-code/${AuthCodeReq.AuthType}`,
      { identifier: AuthCodeReq.identifier }
    )
  }

  public async authCodeVerify(AuthCodeSend: AuthCodeSendProps): Promise<void> {
    await axios.post(
      `${CONFIG.SERVER}/member/auth-code/${AuthCodeSend.AuthType}/verify`,
      {
        identifier: AuthCodeSend.identifier,
        authCode: AuthCodeSend.authCode
      },
      {
        headers: {
          "User-Agent": AuthCodeSend.UserAgent
        }
      }
    );
  }
}

const memberRepositoryImpl = new MemberRepositoryImpl()
export default memberRepositoryImpl
