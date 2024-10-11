import { dodamAxios } from "libs/Axios/customAxios";
import { OffBaseMealRepository } from "./offbasemeal.respository";
import { OffBaseMealResponse } from "types/OffBaseMeal/offbasemeal.type";

class OffBaseMealRepositoryImpl implements OffBaseMealRepository {
  public async getMealDemand(date: string): Promise<OffBaseMealResponse> {
    const { data } = await dodamAxios.get(`/out-going/meal-demand?date=${date}`);
    return data;
  }
}

export default new OffBaseMealRepositoryImpl();