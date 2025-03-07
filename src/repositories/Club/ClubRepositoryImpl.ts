import { ClubMember, ClubResponse, ClubState } from "types/Club/club.type";
import { ClubRepository } from "./ClubRepository";
import { dodamAxios } from "libs/Axios/customAxios";

class ClubRepositoryImpl implements ClubRepository {
  public async getClubs(): Promise<ClubResponse[]> {
    const { data } = await dodamAxios.get("/clubs");
    return data.data;
  }

  public async getMember(id: number): Promise<ClubMember> {
    const { data } = await dodamAxios.get(`/clubs/${id}/leader`);
    return data.data.data;
  }

  public async getClub(id: number): Promise<ClubResponse> {
    const { data } = await dodamAxios.get(`/clubs/${id}`);
    return data.data.data;
  }

  public async getMembers(id: number): Promise<ClubMember> {
    const { data } = await dodamAxios.get(`/clubs/${id}/members`);
    return data.data;
  }
}

export default ClubRepositoryImpl;
