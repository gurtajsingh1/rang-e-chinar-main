import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";
import PropTypes from "prop-types";

export default function GamingEventDetailsLayout({ data, index }) {
  const rules = data["Rules"]
    .split(";")
    .map((rule) => rule.trim())
    .filter((rule) => rule !== "");
  return (
    <PageLayout 
      title={data["Event Name"]} 
      imgUrl={`/common/gamezone.jpeg`}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" },
        { label: "Gaming Zone", path: "/events/gaming-zone" },
        { label: data["Event Name"], path: `/events/gaming-zone/${index}` }
      ]}
    >
      <div className="px-4 md:px-12 py-4 md:py-12 font-playfair bg-background ShadowLarge">
        <div className="mb-4">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800  mb-3 overflow-visible">
            {data["Event Name"]}
          </p>
          <p className="text-base">{data["Description"]}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-gray-600 font-figtree textShadow-sm text-3xl overflow-visible mb-4">
            Timing
          </p>
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
              ? "Free"
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
          <h1 className="entry-header text-3xl font-semibold text-gray-600 font-figtree textShadow-sm mb-4 mt-4 mx-2 overflow-visible">
            Rules
          </h1>
          <div className="space-y-5 mx-4 font-semibold font-kodeMono">
            {rules.map((rule, index) => (
              <p key={index}>{rule}</p>
            ))}
          </div>

          {!data["prizes"] &&
            parseInt(data["Prizes"].replace(/[^0-9]/g, "")) > 800 && (
              <>
                <hr className="mt-4 border border-primary" />
                <h1 className="entry-header text-3xl tfont-semibold text-gray-600 font-figtree textShadow-sm mb-4 mt-4 mx-2 overflow-visible">
                  Prizes
                </h1>
                <div className="space-y-5 mx-4 font-semibold font-kodeMono">
                  {data["Prizes"]}
                </div>
              </>
            )}
        </div>
      </div>
    </PageLayout>
  );
}

GamingEventDetailsLayout.propTypes = {
  data: PropTypes.object.isRequired,
};
