import ChallengesImg from "../assests/images/Describe Chanlenges.svg";

function Challenges() {
  const targetUrl = "describe";
  const handleClick = () => {
    window.open(targetUrl, "_blank");
  };

  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:py-44 text-black bg-white">
      <div className="max-w-[1171] mx-auto text-center text-4xl md:text-6xl lg:text-8xl uppercase font-Matter">
        <p className="mb-2">What challenges</p>
        <p>
          we can <span className="font-GalleryModern underline">solve</span> for
          you?
        </p>
      </div>
      <img
        src={ChallengesImg}
        alt="Challenges"
        className="mx-auto mt-8 md:mt-24"
        onClick={handleClick}
      />
    </section>
  );
}

export default Challenges;
