import { Routes, Route } from 'react-router-dom'
import MemberPage from 'pages/MemberPage'
import BusListPage from 'pages/Bus/BusListPage'
import AuthPage from 'pages/Auth/AuthPage'
import OffBasePassPage from 'pages/Out/OutGoingPage'
import OffBaseLeavePage from 'pages/Out/OutSleepingPage'
import TodayOffBaseLeavePage from 'pages/Out/TodayOutSleepingPage'
import { NightStudyAllowPage } from 'pages/NightStudy/NightStudyAllowPage'
import { NightStudyTodayPage } from 'pages/NightStudy/NightStudyTodayPage'
import PointScore from 'components/Point/PointScore'
import PointReason from 'components/Point/PointReason'
import ScheduleManage from 'components/Schedule/ScheduleManage'
import OffbaseRedisualPage from 'pages/Out/RedisualPage'
import NoticePageTemplate from 'components/common/NoticePageTemplate'
import NoticePage from 'pages/Notice/Main/noticePages'
import NoticeWritePage from 'pages/Notice/Write/noticeWritePages'
import GroupPage from 'pages/Notice/Group/groupPage'
import GroupDetail from 'components/Group/GroupDetail'
import { Suspense } from 'react'
import BusInfo from 'components/Bus/BusInfo'
// import WaitingMember from 'components/Group/WaitingMember';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthPage />} />
      <Route path='/member' element={<MemberPage />} />
      <Route path='/bus' element={<BusListPage />} />
      <Route path='/offbase-pass' element={<OffBasePassPage />} />
      <Route path='/offbase-leave' element={<OffBaseLeavePage />} />
      <Route path='/offbase-leave-ing' element={<TodayOffBaseLeavePage />} />
      <Route path='/offbase-redisual' element={<OffbaseRedisualPage />} />
      <Route path='/nightStudy-allow' element={<NightStudyAllowPage />} />
      <Route path='/nightStudy-today' element={<NightStudyTodayPage />} />
      <Route path='/PointScore' element={<PointScore />} />
      <Route path='/PointReason' element={<PointReason />} />
      <Route path='/Schedule' element={<ScheduleManage />} />

      <Route path='/notice' element={<NoticePageTemplate />}>
        <Route index element={<NoticePage />} />
        <Route path='write' element={<NoticeWritePage />} />
        <Route path='group' element={<GroupPage />} />
        {/* <Route path="group/:id" element={<GroupDetail />} /> */}
      </Route>
    </Routes>
  )
}

export default Router
