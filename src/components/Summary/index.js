// import image2 from "../../asset/image2.png";
import SummaryStyled from "./Summary.styled";

function Summary() {
  return (
    <SummaryStyled>
      <section>
        <h2>Summary</h2>
        <p>Data Covid Berdasarkan Provinsi</p>
        <div className="Summary">
          <img src={"https://covid19.mathdro.id/api/og"} alt="" />
        </div>
      </section>
    </SummaryStyled>
  );
}

export default Summary;
