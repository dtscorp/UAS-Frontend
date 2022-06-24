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
  const [kasus, Setkasus] = useState([]);

  useEffect(async () => {
    getKasusGlobals();
  }, []);
  async function getKasusGlobals() {
    const response = await axios(ENDPOINT.GLOBAL);
    const setKasusCovid = [
      {
        status: "Confirmed",
        ...response.data.confirmed,
      },
      {
        status: "Recovered",
        ...response.data.recovered,
      },
      {
        status: "Deaths",
        ...response.data.deaths,
      },
    ];
    Setkasus(setKasusCovid);
  }
  return (
    <>
      <Hero />
      <Global title="Global" globals={kasus} />
      <Summary title="Global" img="https://covid19.mathdro.id/api/og" />
    </>
  );
}

export default Home;
