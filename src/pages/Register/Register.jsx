import RegisterHome from "./pages/RegisterHome";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../../Components/ScrollToTop";
import EventRegister from "./pages/EventRegister";

export default function Register() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RegisterHome />} />
        <Route path="nit-register" element={<EventRegister />} />
      </Routes>
    </>
  );
}
