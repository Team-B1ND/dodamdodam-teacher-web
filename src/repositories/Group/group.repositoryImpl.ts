import { dodamAxios } from 'libs/Axios/customAxios';
import {
  GroupRepository,
  GroupWriteData,
  GroupDetail,
  GroupMemberStatus,
  GroupMemberResponse,
} from './group.repository';

class GroupRepositoryImpl implements GroupRepository {
  public async createGroup(group: GroupWriteData): Promise<void> {
    await dodamAxios.post('/divisions', group);
  }
  public async getGroupDetail(id: number): Promise<GroupDetail> {
    const { data } = await dodamAxios.get(`/divisions/${id}`);
    return data;
  }

  public async getGroupMember(status: GroupMemberStatus, id: number): Promise<GroupMemberResponse> {
    const { data } = await dodamAxios.get(`/divisions/${id}/members?status=${status}`);
    return data;
  }
}

const groupRepositroy = new GroupRepositoryImpl();
export default groupRepositroy;
