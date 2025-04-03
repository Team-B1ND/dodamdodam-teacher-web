import { BusDateParam } from 'repositories/Bus/BusRepository'
import { GroupMemberStatus } from 'repositories/Group/group.repository'
import { PointType } from 'types/Point/point.type'

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: '/bus',
    busPreset: '/bus/preset',
    busPresetById: (id: number) => ['/bus/preset', id],
    busPeriod: '/bus/time',
    busListByPeriod: (timeId: number) => ['/bus/time', timeId],
    busList: (page: number) => ['/bus/list', page],
    busDate: '/bus/date',
    studentByBusId: (id: number) => [`/bus/${id}/student/ACTIVE`, id],
    busSeats: (id: number) => [`/bus/${id}/seats`, id],
  },
  member: {
    getAllMember: '/members',
    getTeachers: '/members/teacher',
    getMyMember: '/member/my',
  },
  outgoing: {
    getOutGOing: (date: string) => ['/out-going', date],
  },
  outsleeping: {
    getOutSleeping: (endAt: string) => ['/out-sleeping', endAt],
    getTodayOutSleeping: '/out-sleeping/valid',
  },
  offbasemeal: {
    getMealDemand: (date: string) => ['/out-going/meal-demand', date],
  },
  redisual: {
    getResidual: '/out-sleeping/redisual',
  },
  nightstudy: {
    getPendingNightStudy: '/night-study/pending',
    getNightStudyList: '/night-study',
  },
  division: {
    getDivisionList: (lastId: number, limit: number, keyword: string) => [
      '/division',
      lastId.toString(),
      limit.toString(),
      keyword,
    ],
  },
  schedule: {
    getSchedules: ['schedule/getSchedule'],
    getSchedulesByPeriod: (startDate: string, endDate: string) => [
      'schedule/getScheduleByPeriod',
      `${startDate}~${endDate}`,
    ],
  },
  point: {
    getAllMemberPoint: (type: string) => ['point/getAllMemberPoint', type],
    getReasons: (type: PointType) => ['point/getPointReasons', type],
    getPointScoreByStudentId: (studentId: number) => [
      'point/getPointScoreByStudnetId',
      studentId,
    ],
  },
  notice: {
    notice: '/notice',
    noticeWrite: '/notice',
  },
  group: {
    getGroup: '/division',
    getGroupDetail: (id: number) => ['/division', id],
    getGroupMember: (status: GroupMemberStatus, id: number) => [
      '/division/members',
      status,
      id,
    ],
    patchGroupMemberStatus: (status: GroupMemberStatus, id: number) => [
      '/division/members',
      status,
      id,
    ],
  },
})
