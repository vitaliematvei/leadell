import AutomationImg from "../assests/images/Marketing_Automation.svg";

function Automation() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:py-44 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <img
          src={AutomationImg}
          alt="Automation"
          className=" w-[540px] md:w-[1080px]"
        />
        <h1 className="border-b border-gray-500 text-2xl md:text-4xl lg:text-8xl leading-normal uppercase font-Poppins py-10 md:py-28">
          Elevate Your Marketing with{" "}
          <span className="font-GalleryModern">Advanced</span>{" "}
          &lt;automation/&gt;
        </h1>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Strategic Email Sequences
            </h2>
            <p>
              Craft personalized and automated email campaigns that drive
              engagement and conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Chatbot Wizardry
            </h2>
            <p>
              Enhance customer interactions with smart chatbots that provide
              instant support and streamline communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Data-Driven Dashboards
            </h2>
            <p>
              Build informative dashboards that offer real-time insights into
              your marketing efforts, empowering data-driven decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Comprehensive Analytics
            </h2>
            <p>
              From start to finish, we provide end-to-end analytics solutions to
              measure and optimize your marketing campaigns or business
            </p>
          </div>

          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter mb-28">
            <h2 className="w-fit h-fit border border-gray-700 rounded-full px-5 py-2">
              Tailored Personalization
            </h2>
            <p>
              Harness the power of personalized marketing to connect with your
              audience on a deeper level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Automation;
