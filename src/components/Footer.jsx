import MetaImg from "../assests/images/Meta.svg";
import GoogleImg from "../assests/images/Google.svg";

function Footer() {
  return (
    <section className="max-w-[1512px] mx-auto px-8 text-white bg-black py-4">
      <div className="max-w-[1312] mx-auto md:flex md:justify-between">
        <div className="md:flex gap-8 uppercase my-5 justify-center items-center">
          <p className="mx-auto border rounded-full px-2 h-fit w-fit mb-5 md:mb-0">
            welcome@leadell.agency
          </p>
          <p className="mx-auto border rounded-full px-2 h-fit w-fit">
            +4489023432
          </p>
        </div>
        <div className=" md:flex gap-8 mt-16 md:mt-0 justify-center">
          <img src={MetaImg} alt="" className="rounded mx-auto mb-5 md:mb-0" />
          <img src={GoogleImg} alt="" className="rounded mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
