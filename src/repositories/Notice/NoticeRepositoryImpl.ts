import { dodamAxios } from 'libs/Axios/customAxios';
import { NoticeRepository, NoticeWriteData } from './NoticeRepository';

class NoticeRepositoryImpl implements NoticeRepository {
  public async writeNotice(data: NoticeWriteData): Promise<void> {
    await dodamAxios.post('/notice', data);
  }
}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
