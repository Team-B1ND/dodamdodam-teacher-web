import { BusDateParam } from "repositories/Bus/BusRepository";

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: "/bus",
    busList: (page: number) => ["/bus/list", page],
    busDate: (param: BusDateParam) => ["/bus/date", param],
  },
  member: {
    getAllMember: "/members",
    getTeachers: "/members/teacher",
  },
  offbasepass: {
    getOffBasePass: (date: string) => ["/out-going", date],
  },
  offbaseleave: {
    getOffBaseLeave: (date: string) => ["/out-sleeping", date],
  },
  nightstudy: {
    getPendingNightStudy: "/nightstudy/pending",
    getNightStudyList: "/nightstudy",
  },
});
