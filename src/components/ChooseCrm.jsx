import { useState } from "react";

function ChooseCrm() {
  let slides = [
    <>
      <h1 className="text-3xl/snug md:text-5xl/snug lg:text-7xl/snug font-PoppinsLight pb-5 md:pb-20 text-center uppercase font-PoppinsThin">
        Why Choose <span className="underline">Us</span> for CRM Integration?
      </h1>
      <p className="text-3xl md:text-5xl lg:text-6xl text-center uppercase font-bold font-MatterBold">
        Tailored Solutions
      </p>
      <p className="w-[90%] mx-auto font-Matter uppercase text-xl md:text-4xl text-center mt-10">
        We don't believe in one-size-fits-all. Our CRM solutions are tailored to
        fit your unique business needs
      </p>
    </>,
    <>
      <h1 className="text-3xl/snug md:text-5xl/snug lg:text-7xl/snug font-PoppinsLight pb-5 md:pb-20 text-center uppercase font-PoppinsThin">
        Why Leadell for <span className="underline">Your</span> Zoho CRM
        Integration?
      </h1>
      <p className="text-3xl md:text-5xl lg:text-6xl text-center uppercase font-bold font-MatterBold">
        Tailored Solutions
      </p>
      <p className="w-[90%] mx-auto font-Matter uppercase text-xl md:text-4xl text-center mt-10">
        We don't just integrate; we align Zoho CRM's vast capabilities with your
        specific business objectives
      </p>
    </>,
    <>
      <h1 className="text-3xl/snug md:text-5xl/snug lg:text-7xl/snug font-PoppinsLight pb-5 md:pb-20 text-center uppercase font-PoppinsThin">
        Why contact <span className="underline">us</span>?
      </h1>
      <p className="text-3xl md:text-5xl lg:text-6xl text-center uppercase font-bold font-MatterBold">
        Tailored Solutions
      </p>
      <p className="w-[90%] mx-auto font-Matter uppercase text-xl md:text-4xl text-center mt-10">
        We don't just integrate; we align Zoho CRM's vast capabilities with your
        specific business objectives
      </p>
    </>,
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="max-w-[1512px] mx-auto px-10 md:px-24 text-black bg-white">
      <div className="max-w-[1308] mx-auto">
        {slides[current]}
        <div className="bg-gray-200 w-fit px-3 py-1 mt-14 mb-14 mx-auto rounded-3xl flex justify-between align-center text-xs">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={` rounded-full m-2 p-2 ${
                  i === current ? "bg-white" : "bg-gray-300"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ChooseCrm;
