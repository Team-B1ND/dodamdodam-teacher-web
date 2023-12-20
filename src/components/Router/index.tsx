import Test from "../Test";
import { Routes, Route } from "react-router-dom";
import MemberPage from "../../pages/MemberPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/member" element={<MemberPage />} />
    </Routes>
  );
};

export default Router;
