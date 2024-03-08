import { MemberRepository, MemberSignUpParam } from "./MemberRepository";
import { dodamTestAxios, dodamV6Axios } from "libs/Axios/customAxios";
import { MemberListType } from "types/Member/member.type";

class MemberRepositoryImpl implements MemberRepository {
  public async getAllMemberList(): Promise<MemberListType> {
    const { data } = await dodamV6Axios.get("/members");
    return data;
  }

  public async postMemberJoinTeacher(param: MemberSignUpParam): Promise<void> {
    await dodamTestAxios.post("/member/join-teacher", param);
  }
}

export default new MemberRepositoryImpl();
