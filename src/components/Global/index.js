import Card from "../Cards";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import GlobalStyled from "./Global.styled";
function Global(props) {
  // const globals = props.globals;
  const globals = useSelector((store) => store.covidReducer.covidCase);
  // const globals = data.indonesia;
  return (
    <GlobalStyled>
      <div className="container">
        <section className="globals">
          <h2>{props.title}</h2>
          <p>Data Covid Berdasarkan {props.title}</p>
          <div className="global__container">
            {globals.map(function (global) {
              let id = nanoid();
              return <Card global={global} key={id} />;
            })}
          </div>
        </section>
      </div>
    </GlobalStyled>
  );
}
export default Global;
