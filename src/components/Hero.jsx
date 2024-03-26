import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1512px] mx-auto p-8 md:px-24 md:py-44 text-white bg-black">
      <div className="max-w-[1296] mx-auto">
        <h1 className="text-2xl md:text-6xl lg:text-8xl leading-normal">
          Our goal is to use{" "}
          <span className="inline-block text-black bg-white rounded-full px-2 md:px-6 pb-2 mt-2 md:mt-6">
            AI & ML
          </span>{" "}
          technology to _lower your costs and <i>increase</i> customers
        </h1>
        <p className="mt-4 text-md text-gray-500 font-Poppins italic">
          Digital Agency
        </p>
      </div>
    </section>
  );
};

export default Hero;
