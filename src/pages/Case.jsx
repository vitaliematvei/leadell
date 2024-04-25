import Navbar from "../components/Navbar";
import HeroCase from "../components/HeroCase";
import SearchCase from "../components/SearchCase";
import TrainingCase from "../components/TrainingCase";
import ScheduleCase from "../components/ScheduleCase";

import Footer from "../components/Footer";

function Case() {
  return (
    <>
      <Navbar color="text-black" bg="bg-white" />
      <HeroCase />
      <SearchCase />
      <TrainingCase />
      <ScheduleCase />

      <Footer />
    </>
  );
}

export default Case;
