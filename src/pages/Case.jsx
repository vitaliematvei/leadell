import Navbar from "../components/Navbar";
import HeroCase from "../components/HeroCase";
import SearchCase from "../components/SearchCase";

import Footer from "../components/Footer";

function Case() {
  return (
    <>
      <Navbar color="text-black" bg="bg-white" />
      <HeroCase />
      <SearchCase />
      <Footer />
    </>
  );
}

export default Case;
