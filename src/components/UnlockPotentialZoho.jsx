function UnlockPotentialZoho() {
  const data = [
    [
      "Sales Automation",
      "Automate lead scoring, assignment, and nurturing. Make your sales process faster and smarter",
    ],
    [
      "Marketing Automation",
      "From segmented email campaigns to event triggers, set up systems that continually engage and nurture prospects",
    ],
    [
      "Custom Modules & Fields",
      "If Zoho's out-of-the-box solution isn't enough, we'll create custom modules and fields specific to your operations",
    ],
    [
      "Tailored Workflows",
      "Design workflows that mirror your business processes, ensuring every team member is on the same page",
    ],
  ];
  return (
    <section className="max-w-[1512px] mx-auto px-10 md:px-24 py-5 md:py-20 text-white bg-black">
      <h1 className="font-MatterBold font-bold text-2xl md:text-5xl lg:text-6xl pb-8">
        Unlock the Full Potential of Zoho with Leadell
      </h1>
      {data.map((item) => (
        <>
          <div key={item[0]} className="mt-3 md:mt-20">
            <p className="uppercase font-Matter text-xl md:text-4xl">
              {item[0]}
            </p>
          </div>
          <div className="my-5 md:text-2xl text-md font-Matter">
            <div className="md:mb-8">
              <p>{item[1]}</p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default UnlockPotentialZoho;
