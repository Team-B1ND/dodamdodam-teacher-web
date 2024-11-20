import { OutResponse } from 'types/Out/out.type';
import { RedisualRepository } from './redisual.repository';
import { dodamAxios } from 'libs/Axios/customAxios';

class RedisualRepositoryImpl implements RedisualRepository {
  public async getResdisual(): Promise<OutResponse> {
    const { data } = await dodamAxios.get('/out-sleeping/residual');
    return data;
  }
}

const redisualRepositoryImpl = new RedisualRepositoryImpl();
export default redisualRepositoryImpl;
