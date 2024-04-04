import axios from "axios";
import { MemberRepository, MemberSignUpParam } from "./MemberRepository";
import { dodamTestAxios, dodamV6Axios } from "libs/Axios/customAxios";
import { MemberResponse, MyMemberResponse } from "types/Member/member.type";

class MemberRepositoryImpl implements MemberRepository {
  public async getAllMemberList(): Promise<MemberResponse> {
    const { data } = await dodamTestAxios.get("/member/all");
    return data;
  }

  public async postMemberJoinTeacher(param: MemberSignUpParam): Promise<void> {
    await axios.post(
      `${process.env.REACT_APP_DODAM_TEST_SERVER_V6}/member/join-teacher`,
      param
    );
  }

  public async getMyMember(): Promise<MyMemberResponse> {
    const { data } = await dodamTestAxios.get("/member/my");
    return data;
  }
}

export default new MemberRepositoryImpl();
