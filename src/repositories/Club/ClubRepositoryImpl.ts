import {
  BaseResponse,
  ClubDetailResponse,
  Member,
  ClubResponse,
  ClubState,
  ClubTime,
} from 'types/Club/club.type'
import { ClubPeriodParam, ClubRepository } from './ClubRepository'
import { dodamAxios } from 'libs/Axios/customAxios'

class ClubRepositoryImpl implements ClubRepository {
  public async getClubs(): Promise<ClubResponse> {
    const { data } = await dodamAxios.get('/clubs/leaders')
    return data
  }

  public async getClub(id: number): Promise<ClubDetailResponse> {
    const { data } = await dodamAxios.get(`/clubs/${id}`)
    return data
  }

  public async getMembers(id: number): Promise<BaseResponse<Member>> {
    const { data } = await dodamAxios.get(`/clubs/${id}/members`)
    return data
  }

  public async patchClubState(data: ClubState) {
    await dodamAxios.patch(`/clubs/state`, data)
  }

  public async postClubPeriod(param: ClubPeriodParam): Promise<void> {
    await dodamAxios.post('/clubs/time', param)
  }

  public async getClubPeriod() {
    const { data } = await dodamAxios.get<BaseResponse<ClubTime>>(`/clubs/time`)
    return data.data
  }

  public async postApplicateTeacher(
    clubId: number,
    teacherName: string
  ): Promise<void> {
    await dodamAxios.post(`/clubs/${clubId}/teacher?name=${teacherName}`)
  }
}

const clubRepositoryImpl = new ClubRepositoryImpl()
export default clubRepositoryImpl
