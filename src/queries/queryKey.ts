export const QUERY_KEYS = Object.freeze({
  bus: {
    registeredBus: "/bus",
    bustList: "/bust/list",
    busDate: "/bus/date",
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
  },
});
