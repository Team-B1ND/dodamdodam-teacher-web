import { BusDateParam } from "../repositories/Bus/BusRepository";

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: "/bus",
    bustList: "/bust/list",
    busDate: (param: BusDateParam) => ["/bus/date", param],
  },
  member: {
    getAllMember: "/members",
    getTeachers: "/members/teacher",
  },
});
