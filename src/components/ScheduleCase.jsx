import { useEffect, useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const faqs = [
  {
    day: new Date().getDate(),
    monthText: monthNames[new Date().getMonth()],
    txt: "Robots dream of electric sheep.",
  },
  {
    day: new Date().getDate() + 1,
    monthText: monthNames[new Date().getMonth()],
    txt: "The curious cat chased the fluttering butterfly.",
  },
  {
    day: new Date().getDate() + 2,
    monthText: monthNames[new Date().getMonth()],
    txt: "The curious fox explored the abandoned attic.",
  },
];

function ScheduleCase() {
  return (
    <section className="max-w-[1512px] mx-auto md:px-24 mb-14 text-blue-900">
      <div className="max-w-[1171] mx-auto font-Poppins">
        <div className="md:flex text-center justify-between align-center p-4 bg-gray-100 rounded-xl font-bold text-xl">
          <h1 className="">Live schedule of events</h1>
          <p className="pr-7 text-blue-900">Watch all</p>
        </div>
        <Accordion data={faqs} />
      </div>
    </section>
  );
}
export default ScheduleCase;

function Accordion({ data }) {
  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem
          index={i}
          day={el.day}
          month={el.monthText}
          text={el.txt}
          key={el.day}
        />
      ))}
    </div>
  );
}

function AccordionItem({ index, day, month, text }) {
  const url = "http://worldtimeapi.org/api/timezone/Europe/Chisinau";
  const [dataUrl, setDataUrl] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const info = await response.json();
      setDataUrl(info);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="md:flex justify-between align-center p-2 text-center">
      <div className="md:flex  gap-20 font-bold">
        <div>
          <span>{day}</span>
          <p>{month}</p>
        </div>
        <p className="text-black text-sm my-auto mb-5">{text}</p>
      </div>
      {isOpen && (
        <div className="pt-3">
          <p>{dataUrl.abbreviation}</p>
          <p>{dataUrl.timezone}</p>
        </div>
      )}
      <button
        key={index}
        onClick={handleToggle}
        className="bg-green-800 text-white px-10 h-8 my-auto rounded-full"
      >
        {`${isOpen ? "Close" : "Details"}`}
      </button>
    </div>
  );
}
