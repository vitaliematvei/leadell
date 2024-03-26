import CrmImg from "../assests/images/CRM.svg";

function Crm() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:py-44 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <img src={CrmImg} alt="Crm" className="w-[120px] md:w-[290px]" />
        <h1 className="border-b border-gray-500 text-2xl md:text-4xl lg:text-8xl leading-normal uppercase font-Poppins py-10 md:py-28">
          <span className="font-GalleryModern">Unlock</span> the Power of CRM
          with Our Expertise
        </h1>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Tailored CRM Selection
            </h2>
            <p>
              Find the perfect CRM solution that suits your unique business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Seamless Implementation
            </h2>
            <p>
              Effortlessly integrate CRM into your company for enhanced
              efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Ongoing Support and Updates
            </h2>
            <p>
              Ensure your CRM system evolves and thrives with our expert
              assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crm;
