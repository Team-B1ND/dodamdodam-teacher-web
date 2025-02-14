import { dodamAxios } from 'libs/Axios/customAxios';
import { NoticeRepository, NoticeWriteData } from './NoticeRepository';
import { NoticeResponse } from 'types/Notice/notice.type';

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice(data: NoticeWriteData): Promise<void> {
    await dodamAxios.post('/notice', data);
  }
  public async getNotice(pageParam: number = 0, keyword?: string): Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(`/notice?lastId=${pageParam}&limit=10&status=CREATED&keyword=${keyword}`, {
    });
    return data;
  }
  public async getDivisionNotice(pageParam: number = 0, selectCategory?:number):Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(`/notice/${selectCategory}/division?id=${selectCategory}&lastId=${pageParam}&limit=10`)
    return data;
  }

}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
