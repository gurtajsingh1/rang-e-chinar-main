import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PageLayout from "../../../../../Components/PageLayout";


export default function TalksDetailsLayout({data, index}) {
  const descriptions = data["Description"].split(";").map(desc => desc.trim()).filter(desc => desc !== "");
  return (
    <PageLayout 
      title={data["Event Name"]} 
      imgUrl={`/common/conpetition.jpeg`}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        {label: "Women In Tech", path: "/events/women-in-tech"},
        {label: "Talks And Workshops", path: "/events/women-in-tech/talks-and-workshops"},
        { label: data["Event Name"], path: `/events/women-in-tech/talks-and-workshops/${index}` }
      ]}
    >
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          {data["isWomen"] && 
            <p className="text-gray-800 font-extrabold font-kodeMono text-md overflow-visible mb-2">
              Exclusively for Women
            </p>
          }
          {
            descriptions.map((desc, index) => (
              <p key={index} className="text-base mb-2">{desc}</p>
            ))
          }
          {data["Submission Url"] && <p className="text-base font-bold mb-2">Submit your videos here: <a className="text-blue-500 ml-2" href={data["Submission Url"]}>Animated Video Submission Url</a></p>}
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Timing</p>
          <p className="text-base mb-2">
            {data["Start Time"]} - {data["End Time"]} , Day {data["Day"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">Venue</p>
          <p className="text-base mb-2">
            {data["Venue"]}
          </p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">
            Entry Fee
          </p>
          <p className="text-base mb-2">
            <span className="font-bold mr-2">Entry Fee:</span>
            {data["Outside Entry Fee"] === ""
              ? "Free to all"
              : `₹ ${data["Outside Entry Fee"]}`}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center mb-4">
            <Link
              to={"https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?%2fAcademic%2fEvent%2fEventRegistrationDetails.aspx"}
            >
              Register
            </Link>
          </button>
          <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-semibold text-gray-800 bg-primary border border-primary focus:outline-none text-center mb-4">
            <Link
              to={"/register/nit-register"}
            >
              Register: NIT Students
            </Link>
          </button>
        </div>
        <div className="mb-4">
          <p className="text-base mb-2">For Any Queries Contact</p>
          <ul className="list-disc list-inside pl-5 font-semibold">
              <li>
                {data["Lead Name"]} ({data["Lead Contact Number"]})
              </li>
          </ul>
        </div>

        <div className="BoxShadow mx-2 my-2 px-3 py-2 pb-12">
        <h1 className="entry-header text-3xl font-semibold text-gray-600 font-figtree textShadow-sm mb-4 mt-4 mx-2 overflow-visible">Speaker(s)</h1>
            <div className="space-y-5 mx-4 font-semibold font-kodeMono">
              <p>{data["Description about Instructor / Speaker"]}</p>
            </div>
        </div>
      </div>
    </PageLayout>
  );
}

TalksDetailsLayout.propTypes = {  
  data: PropTypes.object.isRequired,
};