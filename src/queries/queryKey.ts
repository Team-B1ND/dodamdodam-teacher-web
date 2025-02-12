import { BusDateParam } from 'repositories/Bus/BusRepository';
import { GroupMemberStatus } from 'repositories/Group/group.repository';
import { PointType } from 'types/Point/point.type';

export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: '/bus',
    busList: (page: number) => ['/bus/list', page],
    busDate: (param: BusDateParam) => ['/bus/date', param],
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
    getPointScoreByStudentId: (studentId: number) => ['point/getPointScoreByStudnetId', studentId],
  },
  notice: {
    noticeWrite: '/notice',
  },
  group: {
    getGroupDetail: (id: number) => ['/division', id],
    getGroupMember: (status: GroupMemberStatus, id: number) => ['/division/members', status, id],
    patchGroupMemberStatus: (status: GroupMemberStatus, id: number) => ['/division/members', status, id],
  },
});
