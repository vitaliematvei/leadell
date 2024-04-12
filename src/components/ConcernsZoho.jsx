import { useState } from "react";

const faqs = [
  {
    title: ' "Will the transition disrupt my current operations?"',
    prefix: "Our Promise:",
    text: "We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
  {
    title: ' "Is the ROI really worth the investment?"',
    prefix: "Our Promise:",
    text: " We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
  {
    title: ' "What if my team struggles with the new system?"',
    prefix: "Our Promise:",
    text: " We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
  {
    title: ' "Is a one-size-fits-all solution really the answer?"',
    prefix: "Our Promise:",
    text: " We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
  {
    title: ' "What if my needs change down the line?"',
    prefix: "Our Promise:",
    text: " We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
  {
    title: ' "What if I decide not to work with you in the future?"',
    prefix: "Our Promise:",
    text: " We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
  },
];

function ConcernsZoho() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:pb-44 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <p className="font-Poppins uppercase md:text-7xl pb-10 md:pb-20 md:mb-8 mb-4 border-b-2 border-black ">
          Your Concerns <span className="font-GalleryModern">Matter</span> To Us
        </p>
        <p className="font-Matter text-md">
          Embarking on a CRM integration journey is a significant decision, and
          it's only natural to have concerns. Let us address some common
          questions we encounter:
        </p>

        <Accordion data={faqs} />
      </div>
    </section>
  );
}

export default ConcernsZoho;

function Accordion({ data }) {
  return (
    <div className="mt-8">
      {data.map((el, i) => (
        <AccordionItem
          index={i}
          prefix={el.prefix}
          title={el.title}
          text={el.text}
          key={el.title}
        />
      ))}
    </div>
  );
}

function AccordionItem({ index, title, prefix, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div key={index} onClick={handleToggle} className="mb-5 cursor-pointer">
      <div className="flex font-MatterBold font-bold text-lg">
        <p className="mr-2">{isOpen ? "-" : "+"}</p>
        <p className="mr-1"> {index + 1}.</p>
        <p>{title}</p>
      </div>
      {isOpen && (
        <div className="mt-3 mb-3 md:mb-6 text-md">
          <span className="font-bold">{prefix}</span>
          {text}
        </div>
      )}
    </div>
  );
}
