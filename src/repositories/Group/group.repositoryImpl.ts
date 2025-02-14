import { dodamAxios } from 'libs/Axios/customAxios';
import {
  GroupRepository,
  GroupWriteData,
  GroupDetail,
  GroupMemberStatus,
  GroupMemberResponse,
  GroupResponse,
} from './group.repository';

class GroupRepositoryImpl implements GroupRepository {
  public async createGroup(group: GroupWriteData): Promise<void> {
    await dodamAxios.post('/divisions', group);
  }
  public async getGroup(pageParam: number = 0, keyword: string): Promise<GroupResponse> {
    const { data } = await dodamAxios.get(`/divisions?lastId=${pageParam}&limit=10&keyword=${keyword}`);
    return data;
  }
  public async getMyGroup(pageParam: number = 0, keyword: string): Promise<GroupResponse> {
    const { data } = await dodamAxios.get(`/divisions/my?lastId=${pageParam}&limit=10&keyword=${keyword}`);
    return data;
  }
  public async getGroupDetail(id: number): Promise<GroupDetail> {
    const { data } = await dodamAxios.get(`/divisions/${id}`);
    return data;
  }

  public async getGroupMember(status: GroupMemberStatus, id: number): Promise<GroupMemberResponse> {
    const { data } = await dodamAxios.get(`/divisions/${id}/members?status=${status}`);
    return data;
  }

  public async patchGroupMemberStatus(status: GroupMemberStatus, id: number, memberId: number[]): Promise<void> {
    await dodamAxios.patch(`/divisions/${id}/members?idList=${memberId}&status=${status}`);
  }
}

const groupRepositroy = new GroupRepositoryImpl();
export default groupRepositroy;
