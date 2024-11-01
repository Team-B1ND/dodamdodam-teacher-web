import { BusDateParam } from "repositories/Bus/BusRepository";
import { PointType } from "types/Point/point.type";

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: "/bus",
    busList: (page: number) => ["/bus/list", page],
    busDate: (param: BusDateParam) => ["/bus/date", param],
  },
  member: {
    getAllMember: "/members",
    getTeachers: "/members/teacher",
    getMyMember: "/member/my",
  },
  offbasepass: {
    getOffBasePass: (date: string) => ["/out-going", date],
  },
  offbaseleave: {
    getOffBaseLeave: (endAt: string) => ["/out-sleeping", endAt],
    getOffBaseTodayLeave: "/out-sleeping/valid",
  },
  offbasemeal: {
    getMealDemand: (date: string) => ["/out-going/meal-demand", date]
  },
  nightstudy: {
    getPendingNightStudy: "/night-study/pending",
    getNightStudyList: "/night-study",
  },
  schedule: {
    getSchedules: ["schedule/getSchedule"],
    getSchedulesByPeriod: (startDate: string, endDate: string) => [
      "schedule/getScheduleByPeriod",
      `${startDate}~${endDate}`,
    ],
  },
  point: {
    getAllMemberPoint: (type: string) => ["point/getAllMemberPoint", type],
    getReasons: (type: PointType) => ["point/getPointReasons", type],
    getPointScoreByStudentId: (studentId: number) => [
      "point/getPointScoreByStudnetId",
      studentId,
    ],
  },
});
