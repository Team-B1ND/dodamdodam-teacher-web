import { dodamAxios } from "libs/Axios/customAxios";
import { NoticeResponse } from "types/Notice/notice.type";

class NoticeRepositoryImpl {
    public async getNotice({ pageParam = 0 }):Promise<NoticeResponse>{
        const {data} = await dodamAxios.get(`/notice?lastId=${pageParam}&limit=10&status=CREATED`)
        return data;
    }
}

const NoticeRepository = new NoticeRepositoryImpl();
export default NoticeRepository;