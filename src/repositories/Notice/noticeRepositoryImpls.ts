import { dodamAxios } from 'libs/Axios/customAxios';
import { NoticeRepository, NoticeWriteData } from './noticeRepositorys';
import { NoticeResponse } from 'types/Notice/notice.type';

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice(data: NoticeWriteData): Promise<void> {
    await dodamAxios.post('/notice', data);
  }
  public async getNotice(pageParam = 0, keyword?: string): Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(`/notice?lastId=${pageParam}&limit=10&status=CREATED&keyword=${keyword}`, {
    });
    return data;
  }
  public async getDivisionNotice(pageParam = 0, selectCategory?:number):Promise<NoticeResponse> {
    const { data } = await dodamAxios.get(`/notice/${selectCategory}/division?id=${selectCategory}&lastId=${pageParam}&limit=10`)
    return data;
  }
  public async upload(params: FormDataEntryValue): Promise<{ data: { data: string } }> {
    const { data } = await dodamAxios.post('/upload', params);
    return data;
  }

}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
