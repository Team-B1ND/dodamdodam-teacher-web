import {
  BaseResponse,
  ClubDetailResponse,
  Member,
  ClubResponse,
  ClubState,
  ClubTime,
} from 'types/Club/club.type'

export interface ClubRepository {
  getClubs(): Promise<ClubResponse>
  getClub(id: number): Promise<ClubDetailResponse>
  getMembers(id: number): Promise<BaseResponse<Member>>
  patchClubState(data: ClubState): Promise<void>
  postClubPeriod(param: ClubPeriodParam): Promise<void>
  postApplicateTeacher(clubId: number, teacherName: string): Promise<void>
}

export type ClubPeriodType = 'CLUB_CREATED' | 'CLUB_APPLICANT'

export interface ClubPeriodParam {
  type: ClubPeriodType
  start: string
  end: string
}
