import { dodamAxios } from 'libs/Axios/customAxios';
import { GetScheduleByPeriodParam, ScheduleParam, ScheduleRepository } from './schedule.repository';
import { ScheduleResponse } from 'types/Schedule/schedule.type';
import { Response } from 'types/util/response.type';

class ScheduleRepositoryImpl implements ScheduleRepository {
  public async createSchedule(param: ScheduleParam): Promise<Response> {
    const { data } = await dodamAxios.post('/schedule', param);
    return data;
  }

  public async getSchedulesByKeyword(keyword: string): Promise<ScheduleResponse> {
    const { data } = await dodamAxios.get(`/schedule/search?keyword=${keyword}`);
    return data;
  }

  public async getScheduleByPeriod({ endAt, startAt }: GetScheduleByPeriodParam): Promise<ScheduleResponse> {
    const { data } = await dodamAxios.get(`/schedule/search?startAt=${startAt}&endAt=${endAt}`);
    return data;
  }

  public async deleteSchedulesById(id: number): Promise<Response> {
    const { data } = await dodamAxios.delete(`/schedule/${id}`);
    return data;
  }
}

const scheduleRepositoryImpl = new ScheduleRepositoryImpl();
export default scheduleRepositoryImpl;
