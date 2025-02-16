import { dodamAxios } from 'libs/Axios/customAxios';
import { NoticeRepository, NoticeWriteData } from './NoticeRepository';

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice(data: NoticeWriteData): Promise<void> {
    await dodamAxios.post('/notice', data);
  }

  public async upload(params: FormDataEntryValue): Promise<{ data: { data: string } }> {
    const { data } = await dodamAxios.post('/upload', params);
    return data;
  }
}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
