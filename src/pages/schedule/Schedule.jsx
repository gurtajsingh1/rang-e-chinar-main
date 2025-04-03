import PageLayout from "../../Components/PageLayout";
import Tabview from "./components/Tabview";
export default function Schedule() {
  return (
    <PageLayout 
      title={"Event Timings"} 
      imgUrl={"/common/schedule.jpeg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Schedule", path: "/schedule" }
      ]}
    >
        <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
          <p className="font-semibold font-figtree textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">Schedule</p>
          <div>
            <Tabview tab1={"Day 1"} tab2={"Day 2"} />
          </div>
        </div>
    </PageLayout>
  );
}

