import { ClubMember, ClubResponse, ClubState } from "types/Club/club.type";

export interface ClubRepository {
  getClubs(): Promise<ClubResponse[]>;
  getMember(id: number): Promise<ClubMember>;
  getClub(id: number): Promise<ClubResponse>;
  getMembers(id : number): Promise<ClubMember>;
}
