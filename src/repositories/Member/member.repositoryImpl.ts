import { MemberListType } from "@src/types/Member/member.type";
import { MemberRepository } from "./member.repository";
import { dodamV6Axios } from "../../libs/Axios/customAxios";

class MemberRepositoryImpl implements MemberRepository {
  public async getAllMemberList(): Promise<MemberListType> {
    const { data } = await dodamV6Axios.get("/members");
    return data;
  }
}

export default new MemberRepositoryImpl();
