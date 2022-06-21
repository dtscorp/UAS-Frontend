// import image2 from "../../asset/image2.png";
import SummaryStyled from "./Summary.styled";

function Summary(props) {
  const { img, title } = props;
  return (
    <SummaryStyled>
      <section>
        <h2>Summary</h2>
        <p>Summary Data {title}</p>
        <div className="Summary">
          <img src={img} alt="" />
        </div>
      </section>
    </SummaryStyled>
  );
}

export default Summary;
