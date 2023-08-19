import { MemberRepository } from "./member.repository";
import { dodamV6Axios } from "../../libs/Axios/customAxios";
import { MemberListType } from "../../types/Member/member.type";

class MemberRepositoryImpl implements MemberRepository {
  public async getAllMemberList(): Promise<MemberListType> {
    const { data } = await dodamV6Axios.get("/members");
    return data;
  }
}

export default new MemberRepositoryImpl();
