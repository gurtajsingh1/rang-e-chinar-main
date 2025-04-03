import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import StickySocialSidebar from "../pages/Home/Components/StickySocialSidebar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

export default function PageLayout({ title, imgUrl, children, breadcrumbs }) {
  return (
    <>
      <div className="content">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(${imgUrl})`,
            backgroundPosition: "center center"
          }}
          className={`bg-cover bg-no-repeat bg-top h-[380px]`}
        >
          <div className="w-full h-full flex flex-col">
            <Header />
            <div className="px-10 md:px-[160px] lg:px-[180px] lg2:px-[220px] xl:px-[300px] xl2:px-[340px] flex flex-col justify-center gap-2 font-playfair flex-grow">
              <p className="text-white font-figtree font-extrabold textShadow-md text-4xl md:text-6xl overflow-visible">
                {title}
              </p>
              <p className="text-white text-md font-medium">
                {breadcrumbs && breadcrumbs.map((crumb, index) => (
                  <span key={index}>
                    <Link to={crumb.path} className="hover:underline">
                      {crumb.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && (
                      <span className="mx-2">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-4 md:px-[160px] lg:px-[180px] lg2:px-[220px] xl:px-[300px] xl2:px-[340px] py-20 md:py-28 lg:py-32">
          {children}
        </div>
        <StickySocialSidebar />
        <Footer />
      </div>
    </>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.array, 
};
