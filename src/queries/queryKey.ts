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
    getOffBaseTodayLeave: "/out-sleeping/valid",
  },
  nightstudy: {
    getPendingNightStudy: "/night-study/pending",
    getNightStudyList: "/night-study",
  },
  schedule: {
    getSchedules: (page: number) => ["schedule/getSchedule", page],
    getSchedulesByPeriod: (startDate: string, endDate: string) => [
      "schedule/getScheduleByPeriod",
      `${startDate}~${endDate}`,
    ],
  },
});
