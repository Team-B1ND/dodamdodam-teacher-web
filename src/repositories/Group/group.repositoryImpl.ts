import { dodamAxios } from 'libs/Axios/customAxios';
import { GroupRepository, GroupWriteData } from './group.repository';

class GroupRepositoryImpl implements GroupRepository {
  public async createGroup(group: GroupWriteData): Promise<void> {
    await dodamAxios.post('/divisions', group);
  }
}

const groupRepositroy = new GroupRepositoryImpl();
export default groupRepositroy;
