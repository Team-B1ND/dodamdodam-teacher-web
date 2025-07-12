export interface BusDateAndListResponse {
    message: string,
    status: 0
    data: [
      {
        id: number,
        name: string
      },
    ]
}

export interface BusMemberType {
  boardingType: "BOARDED" | "UNBOARDED" | "BEFORE_BOARDING";
  seat: number;
  student: {
    id: number;
    name: string;
    grade: number;
    room: number;
    number: number;
    code: string;
  };
}

export interface BusDetailResponse {
  id: number;
  name: string;
  users: BusMemberType[]; 
}

export interface BusPassengerType {
  busName: string;
  busMember: BusMemberType[];
}

export interface BusBasicInfoType {
  id: number;
  busName: string;
  description: string;
  peopleLimit: number;
  leaveTime: string;
  timeRequired: string;
}
