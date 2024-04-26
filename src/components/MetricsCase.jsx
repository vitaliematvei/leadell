import { useEffect, useState } from "react";

const feedbacks = [
  {
    title: "Feedback from client",
    clientName: "Marcos Meson.",
    clientJob: "Co-Fonder and Vp of Marketing",
    txt: "“On behalf of the FlipaClip App team, I would like to thank Cuberto for the successful collaboration and development of FlipaClip.com. Cuberto proved to be a reliable and responsible partner that we were comfortable collaborating with...”",
  },
  {
    title: "Feedback from client",
    clientName: "Amelia Rose.",
    clientJob: "Chief Technology Officer (CTO) and Co-Inventor",
    txt: "“This combines a leadership role in the technology department (CTO) with the recognition of being a key innovator in the company's founding concept.”",
  },
  {
    title: "Feedback from client",
    clientName: "Noah Patel.",
    clientJob: "Lead Software Engineer and Head of Product Development",
    txt: "“This highlights both the technical expertise (Lead Software Engineer) and the responsibility for shaping the final product (Head of Product Development).”",
  },
];

function MetricsCase() {
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
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 mb-20 md:pt-20 text-black bg-white">
      <div className="max-w-[1171] mx-auto text-4xl md:text-6xl lg:text-8xl font-Matter text-center">
        <p className="mb-2 italic">
          Metrics we <span className="font-bold not-italic">increased</span>
        </p>
        <div className="md:grid grid-cols-4 gap-4 mt-10 md:mt-28 text-xl">
          <div className="p-4 flex flex-col gap-2">
            <h1>Leads</h1>
            <p className="text-4xl">143</p>
            <p className="text-green-700">up lift {dataUrl.week_number}%</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="uppercase">Roas</h1>
            <p className="text-4xl">{dataUrl.day_of_year}%</p>
            <p className="text-green-700">up lift {dataUrl.day_of_week}%</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1>Revenue</h1>
            <p className="text-4xl">{dataUrl.dst_offset}</p>
            <p className="text-green-700">up lift {dataUrl.raw_offset}%</p>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="uppercase">Cpc</h1>
            <p className="text-4xl">${dataUrl.dst_offset}</p>
            <p className="text-red-600">down lift {dataUrl.day_of_week}%</p>
          </div>
        </div>

        <div className="mt-10">
          {feedbacks.map((el, i) => (
            <Item
              index={i}
              title={el.title}
              clientName={el.clientName}
              clientJob={el.clientJob}
              text={el.txt}
              key={el.clientName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ title, clientName, clientJob, text }) {
  return (
    <>
      <div className="max-w-[1171] mx-auto md:flex md:py-8 font-Poppins text-lg text-left">
        <h1 className="uppercase text-center mt-10 md:mt-0 mb-5 md:w-1/4">
          {title}
        </h1>
        <div className="w-3/4 mx-auto">
          <p className="uppercase mb-8">
            - {clientName} <span className="text-gray-400">{clientJob}</span>
          </p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default MetricsCase;
