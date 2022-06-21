/* eslint-disable react-hooks/exhaustive-deps */
// import Footer from "../components/Footer";
// // import Hello from "../components/Hello";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Global from "../components/Global";
// import data from "../utils/constants/provinces";
import Summary from "../components/Summary";
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINT from "../utils/constants/endpoint";

function Home() {
  const [Case, setCase] = useState([]);

  useEffect(async () => {
    getCaseGlobals();
  }, []);
  async function getCaseGlobals() {
    const response = await axios(ENDPOINT.GLOBAL);
    // console.log(response.data);
    setCase(response.data);
  }
  return (
    <>
      <Hero />
      <Global title="Global" globals={Case} />
      <Summary title="Global" img="https://covid19.mathdro.id/api/og" />
    </>
  );
}

export default Home;
