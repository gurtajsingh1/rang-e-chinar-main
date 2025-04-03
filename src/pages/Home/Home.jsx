import Footer from "../../Components/Footer";

import EventsSection from "./Components/Events";
import Hero from "./Components/Hero";
import About from "./Components/About";
import StickySocialSidebar from "./Components/StickySocialSidebar";

import Gallery from "./Components/Gallery";
import ExcitingEvents from "./Components/ExcitingEvents";


export default function Home() {
  return (
    <>
      
      <div className="content">
          <Hero />
          <About />
          <ExcitingEvents />
          <Gallery/>
          <StickySocialSidebar />
          <Footer />
      </div>
    </>
  );
}
