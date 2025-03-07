import { BusDateAndListResponse } from 'types/Bus/bus.type'
import {
  BusDateParam,
  BusModifyParam,
  BusRepository,
  BusUpdateParam,
} from './BusRepository'
import { dodamAxios } from 'libs/Axios/customAxios'

class BusRepositoryImpl implements BusRepository {
  public async getAllBusList(page: number): Promise<BusDateAndListResponse> {
    const { data } = await dodamAxios.get(`/bus`)
    return data
  }

  public async getBusDate(
    param: BusDateParam
  ): Promise<BusDateAndListResponse> {
    const { year, month, day } = param
    const { data } = await dodamAxios.get(
      `/bus/date?year=${year}&month=${month}&day=${day}`
    )
    return data
  }

  public async createBus(param: BusUpdateParam): Promise<void> {
    await dodamAxios.post('/bus', param)
  }

  public async createBusPreset(param: BusUpdateParam): Promise<void> {
    await dodamAxios.post('/bus/preset', param)
  }

  public async modifyBus({ busId, param }: BusModifyParam): Promise<void> {
    await dodamAxios.patch(`/bus/${busId}`, param)
  }

  public async deleteBus(id: number): Promise<void> {
    await dodamAxios.delete(`/bus/${id}`)
  }
}

const busRepositoryImpl = new BusRepositoryImpl()
export default busRepositoryImpl
