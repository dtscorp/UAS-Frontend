/* eslint-disable react-hooks/exhaustive-deps */
// import Footer from "../components/Footer";
// // import Hello from "../components/Hello";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Global from "../components/Global";
// import data from "../utils/constants/provinces";
import Summary from "../components/Summary";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINT from "../utils/constants/endpoint";
import { useDispatch } from "react-redux";
import { updateCovidCase, updateURLSummary } from "../features/CovidSlice";

function Home() {
  const dispatch = useDispatch();

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
    // Setkasus(setKasusCovid);
    dispatch(updateCovidCase(setKasusCovid));
    dispatch(updateURLSummary(response.data.image));
  }
  return (
    <>
      <Hero />
      <Global title="Global" />
      <Summary title="Global" />
    </>
  );
}

export default Home;
