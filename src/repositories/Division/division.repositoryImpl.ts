import { dodamAxios } from "libs/Axios/customAxios";
import { DivisionRepository } from "./division.repository";
import { DivisionResponse } from "types/Division/division.type";

class DivisionRepositoryImpl implements DivisionRepository {
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

const divisionRepositoryImpl = new DivisionRepositoryImpl();
export default divisionRepositoryImpl;
