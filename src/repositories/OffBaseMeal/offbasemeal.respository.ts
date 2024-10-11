import { OffBaseMealResponse } from "types/OffBaseMeal/offbasemeal.type";

export interface OffBaseMealRepository {
  getMealDemand(date: string): Promise<OffBaseMealResponse>;
}
