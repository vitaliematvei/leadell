import Navbar from "../components/Navbar";
import HeroCase from "../components/HeroCase";
import SearchCase from "../components/SearchCase";
import TrainingCase from "../components/TrainingCase";
import ScheduleCase from "../components/ScheduleCase";
import ChallengeCase from "../components/ChallengeCase";
import ProductOverviewCase from "../components/ProductOverviewCase";
import MetricsCase from "../components/MetricsCase";
import ChallengesCase from "../components/ChallengesCase";

import Footer from "../components/Footer";

function Case() {
  return (
    <>
      <Navbar color="text-black" bg="bg-white" />
      <HeroCase />
      <SearchCase />
      <TrainingCase />
      <ScheduleCase />
      <ChallengeCase />
      <ProductOverviewCase />
      <MetricsCase />
      <ChallengesCase />

      <Footer />
    </>
  );
}

export default Case;
