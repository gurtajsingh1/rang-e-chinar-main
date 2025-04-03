import PageLayout from "../../../Components/PageLayout";
import { EventCategoryList } from "../../../constants/events";
import CategoryCard from "../components/CategoryCard";

export default function EventCategory() {
  return (
    <PageLayout 
      title={"Events"} 
      imgUrl={"/events/events.jpg"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Events", path: "/events" }
      ]}
    >
      <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
        {EventCategoryList.map((item, index) => (
          <CategoryCard key={item.id} index={index} title={item.title} url={item.url} img={item.img} />
        ))}
        
      </div>
    </PageLayout>
  );
}
