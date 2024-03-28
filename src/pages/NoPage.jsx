import Navbar from "../components/Navbar";

function NoPage() {
  return (
    <>
      <Navbar />
      <h2 className="text-center pt-32 text-red-500 text-4xl">
        Error 404: Not found!
      </h2>
    </>
  );
}

export default NoPage;
