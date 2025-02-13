import { DivisionResponse } from "types/Division/division.type";

export interface NoticeRepository {
  getDivisionList(lastId: number, limit: number, keyword: string): Promise<DivisionResponse>;
}
