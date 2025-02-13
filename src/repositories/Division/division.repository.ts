import { DivisionResponse } from "types/Division/division.type";

export interface DivisionRepository {
  getDivisionList(lastId: number, limit: number, keyword: string): Promise<DivisionResponse>;
}
