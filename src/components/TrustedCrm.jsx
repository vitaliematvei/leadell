import ZohoCrmIMG from "../assests/images/ZohoCrm.svg";
import HubspotCrmIMG from "../assests/images/HubspotCrm.svg";

function TrustedCrm() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-7xl leading-normal font-Matter font-bold pb-4 md:pb-16">
          Trusted CRM Platforms We Integrate
        </h1>
        <p className="font-Matter text-xl lg:text-4xl leading-normal pb-10 lg:pb-20">
          We believe in only integrating the best. Our expertise lies in
          aligning your business processes with top-tier CRM platforms that have
          been recognized globally for their excellence. Here's a closer look:
        </p>

        <img
          src={ZohoCrmIMG}
          alt="zoho"
          className="w-[258px] md:w-[516px] mt-16"
        />
        <hr className=" my-6 lg:my-8 w-1/6 h-[2px] bg-gray-700" />

        <div className="grid md:grid-cols-2 mb-16 md:mb-32 gap-8 text-xl md:text-xl font-Matter">
          <div>
            <span className="font-Poppins text-sm text-gray-500">About</span>
            <p className="text-sm md:text-2xl mt-1 ml-3">
              Zoho CRM empowers organizations with a complete customer
              relationship lifecycle management solution. Known for its
              adaptability, Zoho suits businesses of all sizes, from startups to
              established enterprises
            </p>
          </div>
          <div>
            <span className="font-Poppins text-sm text-gray-500">Awards</span>
            <ul className="text-sm md:text-2xl ml-6 mt-1 list-disc">
              <li>PCMag's Editors' Choice Award for Best CRM Software</li>
              <li>G2 Crowd Leader for CRM Software, 2022</li>
            </ul>
          </div>
        </div>

        <img
          src={HubspotCrmIMG}
          alt="zoho"
          className="w-[320px] md:w-[640px]"
        />
        <hr className=" my-6 lg:my-8 w-1/6 h-[2px] bg-gray-700" />

        <div className="grid md:grid-cols-2 mb-16 md:mb-32 gap-8 text-xl md:text-3xl font-Matter">
          <div>
            <span className="font-Poppins text-sm text-gray-500">About</span>
            <p className="text-sm md:text-2xl mt-1 ml-3">
              HubSpot CRM is designed to be a platform that aligns sales and
              marketing. It offers a suite of tools that include email tracking,
              meeting scheduling, and lead generation, all aimed at enhancing
              customer relations and driving growth
            </p>
          </div>
          <div>
            <span className="font-Poppins text-sm text-gray-500">Awards</span>
            <ul className="text-sm md:text-2xl ml-6 mt-1 list-disc">
              <li>Winner of the 2022 Best Software Awards by G2 </li>
              <li>
                Recognized as a CRM leader in Forrester Wave
                <sup>TM</sup>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TrustedCrm;
