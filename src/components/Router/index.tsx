import { Routes, Route } from "react-router-dom";
import MemberPage from "../../pages/MemberPage";
import BusPage from "../../pages/Bus/BusPage";
import BusListPage from "../../pages/Bus/BusListPage";
import BusDatePage from "../../pages/Bus/BusDatePage";
import Auth from "../Auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/member" element={<MemberPage />} />
      <Route path="/bus" element={<BusPage />} />
      <Route path="/bus-list" element={<BusListPage />} />
      <Route path="/bus-date" element={<BusDatePage />} />
    </Routes>
  );
};

export default Router;
