import { dodamAxios } from 'libs/Axios/customAxios'
import {
  DivisionWriteData,
  DivisionDetail,
  DivisionMemberStatus,
  DivisionMemberResponse,
  DivisionResponse,
  AddMemberData,
  DivisionRepository,
} from './division.repository'

class DivisionRepositoryImpl implements DivisionRepository {
  public async createDivision(division: DivisionWriteData): Promise<void> {
    await dodamAxios.post('/divisions', division)
  }
  public async addMember({ id, memberIdList }: AddMemberData): Promise<void> {
    await dodamAxios.post(
      `/divisions/${id}/members?memberIdList=${memberIdList}`
    )
  }
  public async getDivision(
    pageParam: number,
    keyword: string
  ): Promise<DivisionResponse> {
    const { data } = await dodamAxios.get(
      `/divisions?lastId=${pageParam}&limit=10&keyword=${keyword}`
    )
    return data
  }
  public async getMyDivision(
    pageParam: number,
    keyword: string
  ): Promise<DivisionResponse> {
    const { data } = await dodamAxios.get(
      `/divisions/my?lastId=${pageParam}&limit=10&keyword=${keyword}`
    )
    return data
  }
  public async getDivisionDetail(id: number): Promise<DivisionDetail> {
    const { data } = await dodamAxios.get(`/divisions/${id}`)
    return data
  }

  public async getDivisionMember(
    status: DivisionMemberStatus,
    id: number
  ): Promise<DivisionMemberResponse> {
    const { data } = await dodamAxios.get(
      `/divisions/${id}/members?status=${status}`
    )
    return data
  }

  public async patchDivisionMemberStatus(
    status: DivisionMemberStatus,
    id: number,
    memberId: number[]
  ): Promise<void> {
    await dodamAxios.patch(
      `/divisions/${id}/members?idList=${memberId}&status=${status}`
    )
  }
}

const divisionRepository = new DivisionRepositoryImpl()
export default divisionRepository
