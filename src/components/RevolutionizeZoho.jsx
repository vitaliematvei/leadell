import RevolutionizeImg from "../assests/images/LetGetStart.svg";

function RevolutionizeZoho() {
  return (
    <section className="max-w-[1512px] mx-auto p-10 md:px-24 md:py-18 text-black bg-white">
      <div className="max-w-[1171] mx-auto text-center text-4xl md:text-6xl lg:text-8xl uppercase font-Matter">
        <p className="mb-2">
          Ready to{" "}
          <span className="font-GalleryModern underline">Revolutionize</span>{" "}
          Your Business Processes?
        </p>
      </div>
      <img
        src={RevolutionizeImg}
        alt="Challenges"
        className="mx-auto mt-8 md:mt-24 mb-10 md:mb-20"
      />
    </section>
  );
}

export default RevolutionizeZoho;
