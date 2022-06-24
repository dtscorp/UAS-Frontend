/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import ENDPOINT from "../utils/constants/endpoint";

function Indonesia() {
  const [kasus, Setkasus] = useState([]);

  useEffect(async () => {
    getKasusIndonesia();
  }, []);

  async function getKasusIndonesia() {
    const response = await axios(ENDPOINT.INDONESIA);
    console.log(response);
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
      <Global title="Indonesia" globals={kasus} />
      <Summary
        title="Indonesia"
        img="https://covid19.mathdro.id/api/countries/indonesia/og"
      />
    </>
  );
}
export default Indonesia;
