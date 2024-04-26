import LetStartImg from "../assests/images/LetStart.svg";

function ChallengesCase() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:pt-22 md:mb-14 text-black bg-white">
      <div className="max-w-[1171] mx-auto text-center text-4xl md:text-6xl lg:text-8xl uppercase font-Matter">
        <p className="mb-2">What challenges</p>
        <p>
          we can <span className="font-GalleryModern underline">solve</span> for
          you?
        </p>
      </div>
      <img
        src={LetStartImg}
        alt="Challenges"
        className="mx-auto mt-8 md:mt-24"
      />
    </section>
  );
}

export default ChallengesCase;
