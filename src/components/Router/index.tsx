import { Routes, Route } from "react-router-dom";
import MemberPage from "../../pages/MemberPage";
import BusListPage from "../../pages/Bus/BusListPage";
import BusDatePage from "../../pages/Bus/BusDatePage";
import AuthPage from "../../pages/Auth/AuthPage";
import OffBasePassPage from "../../pages/OffBase/OffBasePassPage";
import OffBaseLeavePage from "../../pages/OffBase/OffBaseLeavePage";
import TodayOffBaseLeavePage from "../../pages/OffBase/TodayOffBaseLeavePage";
import { NightStudyAllowPage } from "pages/NightStudy/NightStudyAllowPage";
import { NightStudyTodayPage } from "pages/NightStudy/NightStudyTodayPage";
import PointScore from "components/Point/PointScore";
import PointReason from "components/Point/PointReason";
import ScheduleManage from "components/Schedule/ScheduleManage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/member" element={<MemberPage />} />
      <Route path="/bus-list" element={<BusListPage />} />
      <Route path="/bus-date" element={<BusDatePage />} />
      <Route path="/offbase-pass" element={<OffBasePassPage />} />
      <Route path="/offbase-leave" element={<OffBaseLeavePage />} />
      <Route path="/offbase-leave-ing" element={<TodayOffBaseLeavePage />} />
      <Route path="/nightStudy-allow" element={<NightStudyAllowPage />} />
      <Route path="/nightStudy-today" element={<NightStudyTodayPage />} />
      <Route path="/PointScore" element={<PointScore />} />
      <Route path="/PointReason" element={<PointReason />} />
      <Route path="/Schedule" element={<ScheduleManage />} />
    </Routes>
  );
};

export default Router;
