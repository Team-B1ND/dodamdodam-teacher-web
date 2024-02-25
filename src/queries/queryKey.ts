import { BusDateParam } from "repositories/Bus/BusRepository";

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: "/bus",
    bustList: (page: number) => ["/bust/list", page],
    busDate: (param: BusDateParam) => ["/bus/date", param],
  },
  member: {
    getAllMember: "/members",
    getTeachers: "/members/teacher",
  },
  offbasepass: {
    getOffBasePass: (date: string) => ["/out/date", date],
  },
  latenight: {
    getPendingLateNight: "/nightstudy/pending",
    getLateNightList: "/nightstudy",
  },
});
