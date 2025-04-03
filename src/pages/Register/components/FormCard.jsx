import { Link } from "react-router-dom";

export default function FormCard({title, registerUrl}) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 pl-5 pr-5 md:pr-0 py-4 md:py-0 bg-gray-100 font-kodeMono">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
        <h3 className="text-2xl font-bold text-gray-700 textShadow-sm font-figtree py-2 ">
            {title}
        </h3>
      </div>
      <div className="mt-2 lg:mt-0 py-6 md:py-6 md:px-5 flex">
        <button className="px-6 md:px-8 py-2 ShadowBlur text-sm md:text-base rounded-md font-medium text-gray-800 bg-primary border border-primary focus:outline-none text-center">
          <Link to={registerUrl}>Register</Link>
        </button>
      </div>
    </div>
  );
}
