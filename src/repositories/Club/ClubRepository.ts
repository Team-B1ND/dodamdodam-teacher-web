import { BaseResponse, ClubDetailResponse, Member, ClubResponse, ClubState } from "types/Club/club.type";

export interface ClubRepository {
  getClubs(): Promise<ClubResponse>;
  getClub(id: number): Promise<ClubDetailResponse>;
  getMembers(id : number): Promise<BaseResponse<Member>>;
  patchClubState(data: ClubState): Promise<void>; 
}
