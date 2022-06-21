import Global from "../components/Global";
import Hero from "../components/Hero";
import Summary from "../components/Summary";

function Indonesia() {
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
