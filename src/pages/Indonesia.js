/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import { updateCovidCase } from "../features/CovidSlice";
import { updateURLSummary } from "../features/CovidSlice";
import ENDPOINT from "../utils/constants/endpoint";

function Indonesia() {
  const dispatch = useDispatch();

  useEffect(async () => {
    getKasusIndonesia();
  }, []);

  async function getKasusIndonesia() {
    const response = await axios(ENDPOINT.INDONESIA);
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
    dispatch(updateCovidCase(setKasusCovid));
    dispatch(
      updateURLSummary("https://covid19.mathdro.id/api/countries/indonesia/og")
    );
  }
  return (
    <>
      <Hero />
      <Global title="Indonesia" />
      <Summary title="Indonesia" />
    </>
  );
}
export default Indonesia;
