import { Route, Routes } from "react-router-dom";
import EventCategory from "./pages/EventCategory";
import Competitions from "./pages/Competitions";
import TalksAndWorkshops from "./pages/TalksAndWorkshops";
import Performances from "./pages/Performances";
import GamingZone from "./pages/GamingZone";
import EventDetails from "./pages/Detailing/EventDetails";
import { useEffect } from "react";
import ScrollToTop from "../../Components/ScrollToTop";
import GameZoneDetails from "./pages/Detailing/GameZoneDetails";
import PerformanceDetails from "./pages/Detailing/PerformanceDetails";
import TalksAndWorkshopsDetails from "./pages/Detailing/TalksAndWorkshopsDetails";
import WomenTech from "./pages/women in tech/WomenTech";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<EventCategory />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/talks-and-workshops" element={<TalksAndWorkshops />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="/gaming-zone" element={<GamingZone />} />
        <Route path="/women-in-tech/*" element={<WomenTech />} />
        <Route path="gaming-zone/:index" element={<GameZoneDetails />} />
        <Route path="competitions/:index" element={<EventDetails />} />
        <Route path="performances/:index" element={<PerformanceDetails />} />
        <Route path="talks-and-workshops/:index" element={<TalksAndWorkshopsDetails />} />
      </Routes>
    </>
  );
}
