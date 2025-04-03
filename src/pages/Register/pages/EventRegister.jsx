import PageLayout from "../../../Components/PageLayout";
import { FormLinks } from "../../../constants/events"
import FormCard from "../components/FormCard";
export default function EventRegister() {
  return (
    <PageLayout 
      title={"Event Registration - NIT Srinagar"} 
      imgUrl={"/common/register.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Register", path: "/register" },
        { label: "Event Registration", path: "/register/nit-register" }
      ]}
    >
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
        <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
          Choose Your Event
        </p>
        <div className="flex flex-col">
          {FormLinks.map((event, index) => (
            <FormCard key={index} title={event["Form Name"]} registerUrl={event["Form Url"]} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
