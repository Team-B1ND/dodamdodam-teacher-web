import { Response } from "types/util/response.type";
export interface PointReasonResponse extends Response {
  data: {
    pointReason: {
      idx: number;
      name: string;
      point: number;
      type: number;
      target: number;
    }[];
  };
}

export interface PointResponse extends Response {
  data: Point[];
}

export interface Point {
  id: number;
  type: "BONUS" | "MINUS" | "OFFSET";
  place: "DORMITORY" | "SCHOOl";
  reason: string;
  score: number;
  student: {
    id: number;
    member: {
      id: string;
      name: string;
      email: string;
      role: string;
      status: string;
      joinDate: string;
      profileImage: string;
    };
    classroom: {
      id: number;
      grade: number;
      room: number;
      place: {
        id: number;
        name: string;
        type: {
          id: number;
          name: string;
        };
      };
    };
    number: number;
    phone: string;
  };
  teacher: {
    id: number;
    member: {
      id: string;
      name: string;
      email: string;
      role: string;
      status: string;
      joinDate: string;
      profileImage: string;
    };
    tel: string;
    position: string;
    phone: string;
  };
  given_date: string;
}
