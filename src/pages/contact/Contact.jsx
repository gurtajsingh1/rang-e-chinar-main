import PageLayout from "../../Components/PageLayout";
import ContactCard from "./components/ContactCard";
import { teams } from "../../constants/contacts";

export default function Contact() {
  return (
    <PageLayout
      title={"Contact"}
      imgUrl={"/contact.jpg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Contact", path: "/contact" }
      ]}
    >
        
        {/* Content container with autumn-themed styling */}
        <div className="relative z-10 pt-8 pb-16">
          {Object.keys(teams).map((teamKey) => (
            <Section key={teamKey} teamname={teamKey} teamMembers={teams[teamKey]} len={teams[teamKey].length} />
          ))}
        </div>
    </PageLayout>
  );
}

const Section = ({ teamname, teamMembers, len }) => (
  <div className="mb-16">
    <div className="text-center text-4xl md:text-5xl overflow-visible font-bold font-figtree textShadow-md text-amber-400 my-8">
      {teamname} {len != 1 ? "Team" : ""}
    </div>
    <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
      {teamMembers.map((team, index) => (
        <div key={index} className="transform transition-all duration-300 hover:scale-105">
          <ContactCard 
            {...team} 
            cardClass="bg-gradient-to-br from-amber-700/70 to-red-800/70 backdrop-blur-sm border border-amber-500/30"
          />
        </div>
      ))}
    </div>
  </div>
);