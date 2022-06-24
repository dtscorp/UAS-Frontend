import MenuStyled from "./Menu.styled";
import { Link } from "react-router-dom";

function Menu(props) {
  const { isShow } = props;
  return (
    <MenuStyled>
      <div className={!isShow ? "hide" : "false"}>
        <ul>
          <li>
            <Link to="/">Global</Link>
          </li>
          <li>
            <Link to="/covid/indonesia">Indonesia</Link>
          </li>
          <li>
            <Link to="/covid/provinsi">Provinsi</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </MenuStyled>
  );
}

export default Menu;
