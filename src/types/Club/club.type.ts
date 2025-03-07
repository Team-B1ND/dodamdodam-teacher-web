

export interface ClubResponse {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  subject: string;
  image: string;
  type: "CREATIVE_ACTIVITY_CLUB" | "SELF_DIRECT_ACTIVITY_CLUB";
  teacher: string;
  state: "ALLOWED" | "PENDING" | "REJECTED" | "WAITING" | "DELETED";
}

export interface ClubProps {
  value: ClubResponse;
}

export interface ClubMember{
  id: number;
  status: "ALLOWED" | "PENDING" | "REJECTED" | "WAITING" | "DELETED";
  permission: "CLUB_MEMBER" | "CLUB_LEADER";
  studentId: string;
  name: string;
  grade: number;
  room: number;
  number: number;
  profileImage: null;
}

export interface ClubState {
  clubIds: number[];
  state : 'ALLOWED' | 'PENDING' | 'REJECTED' | 'DELETED';
  reason : string;
}
