// import image2 from "../../asset/image2.png";
import SummaryStyled from "./Summary.styled";
import { useSelector } from "react-redux";

function Summary(props) {
  const { title } = props;
  const summaryImage = useSelector((store) => store.covidReducer.urlSummary);
  return (
    <SummaryStyled>
      <section>
        <h2>Summary</h2>
        <p>Summary Data {title}</p>
        <div className="Summary">
          <img src={summaryImage} alt="" />
        </div>
      </section>
    </SummaryStyled>
  );
}

export default Summary;
