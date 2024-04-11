function ValueCrm() {
  const data = [
    [
      1,
      "Boosted Sales Revenue",
      "Relying on manual processes and guesswork",
      "Automated sales funnels, lead tracking, and precise analytics increase conversions and sales",
    ],
    [
      2,
      "Enhanced Customer Relationships",
      "Fragmented customer information and sporadic communications",
      "Unified customer profiles, purchase histories, and preferences enable more personal and timely interactions",
    ],
    [
      3,
      "Streamlined Business Processes",
      "Redundant tasks, data entry errors, and slower response times",
      "Automation of routine tasks, centralized data, and real-time collaboration",
    ],
    [
      4,
      "Marketing That Resonates",
      "Generic campaigns with a broad target",
      "Marketing automation and personalization features to tailor campaigns for specific customer segments",
    ],
    [
      5,
      "Insightful Business Decisions",
      "Decisions made on intuition and limited data",
      "Comprehensive reports, analytics, and trends to base decisions on solid data",
    ],
  ];
  return (
    <section className="max-w-[1512px] mx-auto px-10 md:px-24 py-5 md:py-20 text-white bg-black">
      <h1 className="font-MatterBold font-bold text-2xl md:text-5xl lg:text-6xl">
        Value of CRM Integration
      </h1>

      {data.map((item) => (
        <>
          <div key={item[0]} className="flex mt-3 md:mt-12">
            <span className="opacity-20 text-6xl md:text-8xl ml-5 font-Poppins">
              {item[0]}
            </span>
            <p className="absolute uppercase self-center font-Matter text-xl md:text-4xl">
              {item[1]}
            </p>
          </div>
          <div className="grid md:grid-cols-2 mb-7 gap-8 md:text-3xl text-md font-Matter">
            <div className="md:mb-8">
              <span className="text-sm text-gray-500">Before</span>
              <p>{item[2]}</p>
            </div>
            <div className="mb-4 md:mb-8">
              <span className="text-sm text-gray-500">After</span>
              <p>{item[3]}</p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default ValueCrm;
