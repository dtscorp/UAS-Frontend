import MenuStyled from "./Menu.styled";

function Menu(props) {
  const { isShow } = props;
  return (
    <MenuStyled>
      <div className={!isShow ? "hide" : "false"}>
        <ul>
          <li>Global</li>
          <li>Indonesia</li>
          <li>Provinsi</li>
          <li>About</li>
        </ul>
      </div>
    </MenuStyled>
  );
}

export default Menu;
