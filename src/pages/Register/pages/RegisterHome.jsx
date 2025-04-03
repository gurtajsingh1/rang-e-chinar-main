import { Link } from "react-router-dom";
import PageLayout from "../../../Components/PageLayout";

export default function RegisterHome() {
  return (
    <PageLayout 
      title={"Event Registration"} 
      imgUrl={"/common/register.png"}
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Register", path: "/Register" }
      ]}
    >
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
        <p className="font-semibold font-figtree text-center textShadow-md text-4xl md:text-5xl text-gray-800 mb-3 overflow-visible">
          Registration
        </p>
        <div className="flex flex-col gap-12 items-center px-4 py-10">
          {/* NIT Srinagar Students Card */}
          <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl CardShadow p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-figtree font-extrabold mb-6 text-center">Outside NIT Srinagar</h2>
            <p className="font-kodeMono font-medium text-base md:text-lg mb-4 text-center">
            Register Here if You're a Non-NIT Srinagar Student <br />

            <span className="font-extrabold text-gray-800">Due to ongoing issues with credit card transactions in J&K, we recommend using the Google Form for registration.</span>
            </p>
            <p className="font-kodeMono font-medium text-base md:text-lg mb-8 text-center">
            <span className="font-bold">Note:</span> Make sure to keep your institute ID with you for verification.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
                <Link
                  to={'https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?enc=S4ALRM2Vj9bizT3vZvKSo3N+ZwkymXBaFNp5ctbAnVBuQ8nlFHQ9FoYayvr2BAVZjYQO+c0SC2YUM3DcznhpD2S6muaSikpGaDEGX8Ez2mgZ1zseNxb+https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?enc=S4ALRM2Vj9bizT3vZvKSo3N+ZwkymXBaFNp5ctbAnVBuQ8nlFHQ9FoYayvr2BAVZjYQO+c0SC2YUM3DcznhpD2S6muaSikpGaDEGX8Ez2mgZ1zseNxb+Dq4Y6ECAw5njDq4Y6ECAw5nj'}
                >
                  Register
                </Link>
              </button>
              <button className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-green-50 transition-colors duration-300">
                <Link
                  to={'https://forms.gle/c53TeD59dqLJ1EcG9'}
                >
                  Register using google forms
                </Link>
              </button>
            </div>
          </div>

          {/* Other Institute Students Card */}
          <div className="bg-gradient-to-r from-white to-gray-100 text-black rounded-xl CardShadow p-8 w-full max-w-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-figtree font-extrabold text-green-600 mb-6 text-center">
              NIT Srinagar Students
            </h2>
            <p className="font-kodeMono font-medium text-base md:text-lg mb-4 text-center">
            Register here if you're a student of NIT Srinagar.
            </p>
            <p className="font-kodeMono font-medium text-base md:text-lg mb-8 text-center">
            <span className="font-bold">Note:</span> Make sure to keep your institute ID with you for verification.
            </p>
            <div className="flex flex-col md:flex-row  justify-center">
              <button className="bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
                <Link
                  to={'nit-register'}
                >
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
