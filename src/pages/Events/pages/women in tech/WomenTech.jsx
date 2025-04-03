import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "../../../../Components/ScrollToTop";
import WomenHome from "./pages/WomenHome";
import WomenCompetitions from "./pages/WomenCompetitions";
import WomenTalks from "./pages/womenTalks";
import WomenEvents from "./pages/WomenEvents";
import TalksDetails from "./detailing/TalksDetails";
import EventsDetails from "./detailing/EventsDetails";
import CompetitionDetails from "./detailing/CompetitionDetails";

export default function WomenTech() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WomenHome />} />
        <Route path="/competitions" element={<WomenCompetitions />} />
        <Route path="/talks-and-workshops" element={<WomenTalks />} />
        <Route path="/women-events" element={<WomenEvents />} />
        <Route path="/talks-and-workshops/:index" element={<TalksDetails />} />
        <Route path="/competitions/:index" element={<CompetitionDetails />} />
        <Route path="/women-events/:index" element={<EventsDetails />} />
      </Routes>
    </>
  );
}
