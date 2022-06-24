import { useState } from "react";
import CovidForm from "../components/CovidForm";
import Hero from "../components/Hero";
import Province from "../components/Province";
import data from "../utils/constants/provinces";

function Provinsi() {
  const [provincesData, setProvinceData] = useState(data.provinces);
  return (
    <>
      <Hero />
      <Province
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      />
      <CovidForm
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      />
    </>
  );
}
export default Provinsi;
