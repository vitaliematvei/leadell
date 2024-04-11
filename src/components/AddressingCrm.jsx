import { useState } from "react";

const faqs = [
  {
    title: ' "Will the transition disrupt my current operations?"',
    text: "Our Promise: We prioritize a seamless integration process. Our team works closely with yours, often during off-peak hours, to ensure minimal disruptions. Plus, we provide comprehensive training so your team can hit the ground running",
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

function AddressingCrm() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:pb-44 text-black bg-white">
      <div className="max-w-[1312] mx-auto">
        <p className="font-Poppins uppercase text-7xl pb-10 md:pb-20 md:mb-8 mb-4 border-b-2 border-black ">
          Addressing the Elephant in the Room:{" "}
          <span className="font-GalleryModern">Why</span>{" "}
          <strong className="font-bold">Trust</strong> Our CRM{" "}
          <strong>&lt;Integration/&gt;</strong> Process?
        </p>
        <p className="font-Matter text-md">
          We get it. Embracing a new system, especially one as integral as CRM,
          can be daunting. You might have concerns about disruptions, costs, or
          even the tangible benefits of such a transition. Let’s tackle some
          common reservations:
        </p>

        <Accordion data={faqs} />
      </div>
    </section>
  );
}

export default AddressingCrm;

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
    <div key={index} onClick={handleToggle} className="mb-5">
      <div className="flex font-MatterBold font-bold text-lg">
        <p className="mr-2">{isOpen ? "-" : "+"}</p>
        <p className="mr-1"> {index + 1}.</p>
        <p>{title}</p>
      </div>
      {isOpen && (
        <div className="mb-3 md:mb-6 text-md">
          <span className="font-bold">{prefix}</span>
          {text}
        </div>
      )}
    </div>
  );
}
