import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import TabView from "./Tabview";
import PropTypes from "prop-types";


export default function EventDetailsLayout({data, index}) {
  const descriptions = data["Description"].split(";").map(desc => desc.trim()).filter(desc => desc !== "");
  return (
    <PageLayout 
      title={data["Event Name"]} 
      imgUrl={`/common/conpetition.jpeg`}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        {label: "Competitions", path: "/events/competitions"},
        { label: data["Event Name"], path: `/events/competitions/${index}` }
      ]}
    >
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-[#F5E1C6] ">
        <div className="mb-4">
          <p className="font-bold font-figtree text-4xl md:text-5xl text-[#B45309] mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          {data["isWomen"] && 
            <p className="text-[#064641] font-semibold font-extrabold font-kodeMono text-md overflow-visible mb-2 ">
              Exclusively for Women
            </p>
          }
          {
            descriptions.map((desc, index) => (
              <p key={index} className="text-base mb-2 text-[#064641] font-semibold">{desc}</p>
            ))
          }
          {data["Submission Url"] && <p className="text-base font-bold mb-2">Submit your videos here: <a className="text-blue-500 ml-2" href={data["Submission Url"]}>Animated Video Submission Url</a></p>}
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[#B45309] font-figtree text-3xl overflow-visible mb-4">Timing</p>
          <p className="text-[#064641] mb-2">
            {data["Start Time"]} - {data["End Time"]} , Day {data["Day"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[#B45309] font-figtree text-3xl overflow-visible mb-4">Venue</p>
          <p className="text-[#064641] mb-2">
            {data["Venue"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[#B45309] font-figtree text-3xl overflow-visible mb-4">
            Entry Fee
          </p>
          <p className="text-[#064641] mb-2">
            <span className="font-bold text-[#064641] mr-2">Entry Fee:</span>
            {data["Outside Entry Fee"] === ""
              ? "Free to all"
              : `₹ ${data["Outside Entry Fee"]}`}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 md:px-8 py-2 text-sm md:text-[#F5E1C6] rounded-md font-semibold text-[#F5E1C6] bg-[#D97706] border-[#D97706] shadow-lg focus:outline-none text-center mb-4">
            <Link
              to={"https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?%2fAcademic%2fEvent%2fEventRegistrationDetails.aspx"}
            >
              Register
            </Link>
          </button>
          <button className="px-6 md:px-8 py-2 text-sm md:text-[#F5E1C6] rounded-md font-semibold text-[#F5E1C6] bg-[#D97706] border-[#D97706] shadow-lg focus:outline-none text-center mb-4">
            <Link
              to={"/register/nit-register"}
            >
              Register: NIT Students
            </Link>
          </button>
        </div>
        <div className="mb-4">
          <p className="text-[#064641] mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold text-[#064641]">
              <li>
                {data["Lead Name"]} ({data["Lead Contact Number"]})
              </li>
          </ul>
        </div>

        {/* Tabs */}
        <div>
          <TabView data={data} />
        </div>
      </div>
    </PageLayout>
  );
}

EventDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};