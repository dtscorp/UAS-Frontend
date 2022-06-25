import CardStyled from "./Card.styled";

function Card(props) {
  const { global } = props;
  function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }
  return (
    <CardStyled>
      <div className="card">
        <h3>{global.status}</h3>
        <h2 className="card_data">{numberWithCommas(global.value)}</h2>
      </div>
    </CardStyled>
  );
}

export default Card;
