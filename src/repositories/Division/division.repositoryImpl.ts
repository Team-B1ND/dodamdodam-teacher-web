import { dodamAxios } from "libs/Axios/customAxios";
import { NoticeRepository } from "./division.repository";
import { DivisionResponse } from "types/Division/division.type";

class NoticeRepositoryImpl implements NoticeRepository {
  public async getDivisionList(lastId: number, limit: number, keyword: string): Promise<DivisionResponse> {
    const { data } = await dodamAxios.get("/divisions", {
      params: {
        lastId,
        limit,
        keyword,
      }
    });
    return data;
  }
}

const noticeRepositoryImpl = new NoticeRepositoryImpl();
export default noticeRepositoryImpl;
