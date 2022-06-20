import Footer from "../components/Footer";
// import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Global from "../components/Global";
import data from "../utils/constants/provinces";
import { useState } from "react";
import Summary from "../components/Summary";

function Main() {
  const [provincesData, setProvinceData] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      {/* <Province
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      /> */}
      {/* <CovidForm
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      /> */}
      <Summary />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
