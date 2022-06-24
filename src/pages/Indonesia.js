/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import { updateCovidCase } from "../features/CovidSlice";
import ENDPOINT from "../utils/constants/endpoint";

function Indonesia() {
  const dispatch = useDispatch();

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
    dispatch(updateCovidCase(setKasusCovid));
  }
  return (
    <>
      <Hero />
      <Global title="Indonesia" />
      <Summary
        title="Indonesia"
        img="https://covid19.mathdro.id/api/countries/indonesia/og"
      />
    </>
  );
}
export default Indonesia;
