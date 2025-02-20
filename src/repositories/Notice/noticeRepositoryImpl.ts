import { dodamAxios } from 'libs/Axios/customAxios'
import { NoticeRepository, NoticeWriteData } from './noticeRepository'
import { NoticeResponse } from 'types/Notice/notice.type'

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice(data: NoticeWriteData): Promise<void> {
    await dodamAxios.post('/notice', data)
  }
  public async getNotice(
    pageParam: number,
    keyword?: string
  ): Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(
      `/notice?lastId=${
        pageParam === 0 ? null : pageParam
      }&limit=10&status=CREATED&divisionId=${keyword ? null : undefined}`
    )
    return data
  }

  public async getDivisionNotice(
    pageParam: number,
    selectCategory?: number
  ): Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(
      `/notice/division?id=${selectCategory ? selectCategory : ''}&lastId=${
        pageParam ? pageParam : ''
      }&limit=10`
    )
    return data
  }

  public async upload(
    params: FormDataEntryValue
  ): Promise<{data: string}> {
    const { data } = await dodamAxios.post(
      `/upload`,
      { file: params },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return data
  }

  public async delete(id: string): Promise<void> {
    await dodamAxios.delete(`/notice/${id}`)
  }
}

const noticeRepositoryImpl = new NoticeRepositoryImpl()
export default noticeRepositoryImpl
