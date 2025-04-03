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
        <div className="px-4 md:px-10 py-4 md:py-10 font-playfair">
          <p className="font-semibold font-figtree  text-4xl md:text-5xl text-[#D97706] mb-3 overflow-visible text-center">Schedule</p>
          <div>
            <Tabview tab1={"Day 1"} tab2={"Day 2"} />
          </div>
        </div>
    </PageLayout>
  );
}

