import { Routes, Route } from "react-router-dom";
import MemberPage from "../../pages/MemberPage";
import BusPage from "../../pages/Bus/BusPage";
import BusListPage from "../../pages/Bus/BusListPage";
import BusDatePage from "../../pages/Bus/BusDatePage";
import AuthPage from "../../pages/Auth/AuthPage";
import OffBasePassPage from "../../pages/OffBase/OffBasePassPage";
import OffBaseLeavePage from "../../pages/OffBase/OffBaseLeavePage";
import TodayOffBaseLeavePage from "../../pages/OffBase/TodayOffBaseLeavePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/member" element={<MemberPage />} />
      <Route path="/bus" element={<BusPage />} />
      <Route path="/bus-list" element={<BusListPage />} />
      <Route path="/bus-date" element={<BusDatePage />} />
      <Route path="/offbase-pass" element={<OffBasePassPage />} />
      <Route path="/offbase-leave" element={<OffBaseLeavePage />} />
      <Route path="/offbase-leave-ing" element={<TodayOffBaseLeavePage />} />
    </Routes>
  );
};

export default Router;
