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
  outgoing: {
    getOutGOing: (date: string) => ["/out-going", date],
  },
  outsleeping: {
    getOutSleeping: (endAt: string) => ["/out-sleeping", endAt],
    getTodayOutSleeping: "/out-sleeping/valid",
  },
  offbasemeal: {
    getMealDemand: (date: string) => ["/out-going/meal-demand", date],
  },
  redisual: {
    getResidual: "/out-sleeping/redisual",
  },
  nightstudy: {
    getPendingNightStudy: "/night-study/pending",
    getNightStudyList: "/night-study",
  },
  division: {
    getDivisionList: (lastId: number, limit: number, keyword: string) => ["/division", lastId.toString(), limit.toString(), keyword],
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
