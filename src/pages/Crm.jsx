import Navbar from "../components/Navbar";
import HeroCrm from "../components/HeroCrm";
import ImplementCrm from "../components/ImplementCrm";
import Footer from "../components/Footer";
import TrustedCrm from "../components/TrustedCrm";
import ChooseCrm from "../components/ChooseCrm";
import ValueCrm from "../components/ValueCrm";
import IntegrationCrm from "../components/IntegrationCrm";
import AddressingCrm from "../components/AddressingCrm";
import RevolutionizeCRM from "../components/RevolutionizeCRM";

function Crm() {
  return (
    <>
      <Navbar color="text-white" bg="bg-black" />
      <HeroCrm />
      <ImplementCrm />
      <TrustedCrm />
      <ChooseCrm />
      <ValueCrm />
      <IntegrationCrm />
      <AddressingCrm />
      <RevolutionizeCRM />
      <Footer />
    </>
  );
}

export default Crm;
