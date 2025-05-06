import { BusDateParam } from 'repositories/Bus/BusRepository'
import { DivisionMemberStatus } from 'repositories/Division/division.repository'
import { PointType } from 'types/Point/point.type'

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: '/bus',
    busList: (page: number) => ['/bus/list', page],
    busDate: '/bus/date',
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
    getPendingNightStudyProject : '/night-study/project/pending',
    getNightStudyBanMember: '/night-study/members',
    getNightStudyAllowedProjects : '/night-study/project/allowed'
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
  division: {
    getDivisionList: (lastId: number, limit: number, keyword: string) => [
      '/division',
      lastId.toString(),
      limit.toString(),
      keyword,
    ],
    getDivision: '/division',
    getDivisionDetail: (id: number) => ['/division', id],
    getDivisionMember: (status: DivisionMemberStatus, id: number) => [
      '/division/members',
      status,
      id,
    ],
    patchDivisionMemberStatus: (status: DivisionMemberStatus, id: number) => [
      '/division/members',
      status,
      id,
    ],
  },
  club: {
    getClubs: '/clubs',
    getClub: '/detailClub',
    getMembers: '/getMembers',
    patchClubsState: '/patchClub',
    getTime: '/clubTime',
  },
})
