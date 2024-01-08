import Test from "../Test";
import { Routes, Route } from "react-router-dom";
import MemberPage from "../../pages/MemberPage";
import BusPage from "../../pages/Bus/BusPage";
import BusListPage from "../../pages/Bus/BusListPage";
import BusDatePage from "../../pages/Bus/BusDatePage";
import ScheduleMange from "../Schedule/ScheduleManage";
import ScheduleTimeTable from "../Schedule/ScheduleTimeTable";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/member" element={<MemberPage />} />
      <Route path="/bus" element={<BusPage />} />
      <Route path="/bus-list" element={<BusListPage />} />
      <Route path="/bus-date" element={<BusDatePage />} />
      <Route path="/schedule" element={<ScheduleMange />} />
      <Route path="/schedule-time-table" element={<ScheduleTimeTable />} />
    </Routes>
  );
};

export default Router;
