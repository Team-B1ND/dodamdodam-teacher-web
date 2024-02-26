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
    getOffBasePass: (date: string) => ["/out/date", date],
  },
  nightstudy: {
    getPendingNightStudy: "/nightstudy/pending",
    getNightStudyList: "/nightstudy",
  },
  schedule: {
    getSchedules: (page: number) => ["schedule/getSchedule", page],
    getSchedulesByPeriod: (startDate: string, endDate: string) => [
      "schedule/getScheduleByPeriod",
      `${startDate}~${endDate}`,
    ],
  },
});
