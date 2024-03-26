import React from "react";
import MarketingImg from "../assests/images/Marketing.svg";

function Marketing() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:pb-44 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <img
          src={MarketingImg}
          alt="marketing"
          className="w-[220px] md:w-[540px]"
        />
        <h1 className="border-b border-gray-500 text-2xl md:text-4xl lg:text-8xl  uppercase font-Poppins py-10 md:py-28 mb-10">
          <span className="font-UltraSolar text-3xl md:text-6xl lg:text-9xl">
            Supercharge
          </span>{" "}
          Your Digital <i>Presence</i> with Our{" "}
          <span className="font-UltraSolar">Marketing</span> Services_
        </h1>

        <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter">
          <div className="mb-8">
            <h2 className="font-bold mb-7 ">Targeted Ads on Top Platforms</h2>
            <div className="flex">
              <span className="text-sm mr-3 px-2 rounded-full border border-black h-fit w-min">
                T
              </span>
              <p>
                Harness the potential of Google, Facebook, and LinkedIn with
                carefully crafted ad campaigns that drive results
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="font-bold mb-7 ">
              Conversion Rate Optimization (CRO)
            </h2>
            <div className="flex">
              <span className="text-sm mr-3 px-2 rounded-full border border-black h-fit w-min">
                C
              </span>
              <p>
                Maximize the value of your traffic by optimizing your website
                and landing pages for higher conversions
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-xl font-Matter">
          <div className="mb-8">
            <h2 className="font-bold mb-7 ">Social Media Mastery</h2>
            <div className="flex">
              <span className="text-sm mr-3 px-2 rounded-full border border-black h-fit w-min">
                S
              </span>
              <p>
                Elevate your online presence and engagement with strategic
                social media marketing
              </p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="font-bold mb-7 ">Email marketing</h2>
            <div className="flex">
              <span className="text-sm mr-3 px-2 rounded-full border border-black h-fit w-min">
                E
              </span>
              <p>
                Fuel your business with engaging, audience-focused email
                marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marketing;
