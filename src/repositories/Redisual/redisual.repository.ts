import { OutResponse } from 'types/Out/out.type';

export interface RedisualRepository {
  getResdisual(): Promise<OutResponse>;
}
