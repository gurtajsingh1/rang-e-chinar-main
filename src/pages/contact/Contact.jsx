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
      <div>
        {Object.keys(teams).map((teamKey) => (
          <Section key={teamKey} teamname={teamKey} teamMembers={teams[teamKey]} len={teams[teamKey].length} />
        ))}
      </div>
    </PageLayout>
  );
}


const Section = ({ teamname, teamMembers, len }) => (
  <div>
    <div className="text-center text-4xl md:text-5xl overflow-visible font-bold font-figtree textShadow-md text-white my-8">
      {teamname} {len != 1? "Team" : ""}
    </div>
    <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
      {teamMembers.map((team, index) => (
        <ContactCard key={index} {...team} />
      ))}
    </div>
  </div>
)
