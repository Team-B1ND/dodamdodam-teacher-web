import { Routes, Route } from 'react-router-dom'
import MemberPage from 'pages/MemberPage'
import BusListPage from 'pages/Bus/BusListPage'
import AuthPage from 'pages/Auth/AuthPage'
import OffBasePassPage from 'pages/Out/OutGoingPage'
import OffBaseLeavePage from 'pages/Out/OutSleepingPage'
import TodayOffBaseLeavePage from 'pages/Out/TodayOutSleepingPage'
import { NightStudyAllowPage } from 'pages/NightStudy/NightStudyAllowPage'
import { NightStudyTodayPage } from 'pages/NightStudy/NightStudyTodayPage'
import {NightStudyBanPage} from "pages/NightStudy/NightStudyBanPage";
import PointScore from 'components/Point/PointScore'
import PointReason from 'components/Point/PointReason'
import ScheduleManage from 'components/Schedule/ScheduleManage'
import OffbaseRedisualPage from 'pages/Out/RedisualPage'
import NoticePageTemplate from 'components/common/NoticePageTemplate'
import NoticePage from 'pages/Notice/Main/noticePages'
import NoticeWritePage from 'pages/Notice/Write/noticeWritePages'
import DivisionPage from 'pages/Notice/Division/divisionPage'
import ClubManagePage from 'pages/Club/ClubManagePage'
import ApplicateTeacherPage from 'pages/Club/ApplicateTeacherPage'
import ProjectNightStudyAllowPage from 'pages/NightStudy/ProjectNightStudyAllowPage'
import ProjectNightStudyTodayPage from 'pages/NightStudy/ProjectNightStudyTodayPage'

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
      <Route path='/nightStudy-project-allow' element={<ProjectNightStudyAllowPage />} />
      <Route path='/nightStudy-ban' element={<NightStudyBanPage />} />
      <Route path='/nightStudy-today' element={<NightStudyTodayPage />} />
      <Route path='/nightStudy-project-today' element={<ProjectNightStudyTodayPage/>} />
      <Route path='/PointScore' element={<PointScore />} />
      <Route path='/PointReason' element={<PointReason />} />
      <Route path='/Schedule' element={<ScheduleManage />} />

      <Route path='/notice' element={<NoticePageTemplate />}>
        <Route index element={<NoticePage />} />
        <Route path='write' element={<NoticeWritePage />} />
        <Route path='division' element={<DivisionPage />} />
        {/* <Route path="group/:id" element={<GroupDetail />} /> */}
      </Route>

      <Route path='/club/manage' element={<ClubManagePage />} />
      <Route path='/club/applicate' element={<ApplicateTeacherPage />} />
    </Routes>
  )
}

export default Router
