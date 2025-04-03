import PageLayout from "../../../../../Components/PageLayout";
import CategoryCard from "../../../components/CategoryCard";
const womenCategory = [
    {
        id: 1,
        title: "Women Competitions",
        url: "competitions",
        img: "/events/competitions.jpeg",
      },
      {
        id: 2,
        title: "Women Talks",
        url: "talks-and-workshops",
        img: "/events/talks.jpeg",
      },
      {
        id: 3,
        title: "Women Events",
        url: "women-events",
        img: "/events/performance.jpeg",
      },
]

export default function WomenHome(){
    return(
        <PageLayout 
          title={"Women In Tech"} 
          imgUrl={'/common/women-in-tech.png'}
          breadcrumbs={[
            { label: "Home", path: "/" },
            { label: "Events", path: "/events" },
            {label: "Women In Tech", path : "/events/women-in-tech"}
          ]}
        >
          <div className="px-5 py-8 flex gap-8 flex-wrap items-center overflow-hidden justify-center">
            {womenCategory.map((item, index) => (
                <CategoryCard key={item.id} index={index} title={item.title} url={item.url} img={item.img} />
                ))}
                
            </div>
        </PageLayout>
    )
}