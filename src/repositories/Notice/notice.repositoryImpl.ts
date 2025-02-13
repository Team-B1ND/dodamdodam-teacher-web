import { dodamAxios } from "libs/Axios/customAxios";
import { CreateNoticeParam, NoticeRepository } from "./notice.repository";

class NoticeRepositoryImpl implements NoticeRepository {
  public async createNotice(param: CreateNoticeParam): Promise<void> {
    await dodamAxios.post("/notice", param);
  }
}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
